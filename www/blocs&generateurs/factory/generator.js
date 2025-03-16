﻿'use strict'

var blockType = ''
var mainWorkspace = null
var previewWorkspace = null

function onchange() {
  var name = ''
  var rootBlock = getRootBlock()
  if (rootBlock) name = rootBlock.getFieldValue('NAME')
  blockType = name.replace(/\W/g, '_').replace(/^(\d)/, '_\\1').toLowerCase()
  if (!blockType) blockType = 'unnamed'
  updateLanguage()
  updateGenerator()
  updatePreview()
}
function updateLanguage() {
  var code = []
  var rootBlock = getRootBlock()
  formatJavaScript(code, rootBlock)
  injectCode(code, 'languagePre')
}
function formatJavaScript(code, rootBlock) {
  code.push("Blockly.Blocks['" + blockType + "']={init:function(){")
  var TYPES = {'input_value': 'appendValueInput','input_statement': 'appendStatementInput','input_dummy': 'appendDummyInput'}
  var contentsBlock = rootBlock.getInputTargetBlock('INPUTS')
  while (contentsBlock) {
    if (!contentsBlock.disabled && !contentsBlock.getInheritedDisabled()) {
      var name = ''
      if (contentsBlock.type != 'input_dummy') {
        name = escapeString(contentsBlock.getFieldValue('INPUTNAME'))
      }
      code.push('    this.' + TYPES[contentsBlock.type] + '(' + name + ')')
      var check = getOptTypesFrom(contentsBlock, 'TYPE')
      if (check) {
        code.push('        .setCheck(' + check + ')')
      }
      var align = contentsBlock.getFieldValue('ALIGN')
      if (align != 'LEFT') {
        code.push('        .setAlign(Blockly.ALIGN_' + align + ')')
      }
      var fields = getFieldsJs_(contentsBlock.getInputTargetBlock('FIELDS'))
      for (var i = 0; i < fields.length; i++) {
        code.push('        .appendField(' + fields[i] + ')')
      }
      //code[code.length - 1] += ';'
    }
    contentsBlock = contentsBlock.nextConnection && contentsBlock.nextConnection.targetBlock()
  }
  if (rootBlock.getFieldValue('INLINE') == 'EXT') {
    code.push('    this.setInputsInline(false)')
  } else if (rootBlock.getFieldValue('INLINE') == 'INT') {
    code.push('    this.setInputsInline(true)')
  }
  switch (rootBlock.getFieldValue('CONNECTIONS')) {
    case 'LEFT':
      code.push(connectionLineJs_('setOutput', 'OUTPUTTYPE'))
      break
    case 'BOTH':
      code.push(connectionLineJs_('setPreviousStatement', 'TOPTYPE'))
      code.push(connectionLineJs_('setNextStatement', 'BOTTOMTYPE'))
      break
    case 'TOP':
      code.push(connectionLineJs_('setPreviousStatement', 'TOPTYPE'))
      break
    case 'BOTTOM':
      code.push(connectionLineJs_('setNextStatement', 'BOTTOMTYPE'))
      break
  }
  var colourBlock = rootBlock.getInputTargetBlock('COLOUR')
  if (colourBlock && !colourBlock.disabled) {
    var hue = colourBlock.getFieldValue('HUE')
	if (hue[0]=="#") {
		code.push("    this.setColour('" + hue + "')}")
	} else {
		code.push("    this.setColour(" + hue + ")}")
	}
  } else {
	code.push("    this.setColour('#00929f')}")
  }
  code.push("}")
}
function connectionLineJs_(functionName, typeName) {
  var type = getOptTypesFrom(getRootBlock(), typeName)
  if (type) {
    type = ', ' + type
  } else {
    type = ''
  }
  return '    this.' + functionName + '(true' + type + ')'
}
function getFieldsJs_(block) {
  var fields = []
  while (block) {
    if (!block.disabled && !block.getInheritedDisabled()) {
      switch (block.type) {
        case 'field_static':
          fields.push(escapeString(block.getFieldValue('TEXT')))
          break
        case 'field_input':
          fields.push('new Blockly.FieldTextInput(' +
              escapeString(block.getFieldValue('TEXT')) + '), ' +
              escapeString(block.getFieldValue('FIELDNAME')))
          break
        case 'field_math':
          fields.push('new Blockly.FieldNumber(' +
              escapeString(block.getFieldValue('TEXT')) + '), ' +
              escapeString(block.getFieldValue('FIELDNAME')))
          break
        case 'field_angle':
          fields.push('new Blockly.FieldAngle(' +
              escapeString(block.getFieldValue('ANGLE')) + '), ' +
              escapeString(block.getFieldValue('FIELDNAME')))
          break
        case 'field_checkbox':
          fields.push('new Blockly.FieldCheckbox(' +
              escapeString(block.getFieldValue('CHECKED')) + '), ' +
              escapeString(block.getFieldValue('FIELDNAME')))
          break
        case 'field_colour':
          fields.push('new Blockly.FieldColour(' +
              escapeString(block.getFieldValue('COLOUR')) + '), ' +
              escapeString(block.getFieldValue('FIELDNAME')))
          break
        case 'field_variable':
          var varname = escapeString(block.getFieldValue('TEXT') || null)
          fields.push('new Blockly.FieldVariable(' + varname + '), ' +
              escapeString(block.getFieldValue('FIELDNAME')))
          break
        case 'field_dropdown':
          var options = []
          for (var i = 0; i < block.optionCount_; i++) {
            options[i] = '[' + escapeString(block.getFieldValue('USER' + i)) +
                ', ' + escapeString(block.getFieldValue('CPU' + i)) + ']'
          }
          if (options.length) {
            fields.push('new Blockly.FieldDropdown([' +
                options.join(', ') + ']), ' +
                escapeString(block.getFieldValue('FIELDNAME')))
          }
          break
        case 'field_image':
          var src = escapeString("media/factory/"+block.getFieldValue('SRC'))
          var width = Number(block.getFieldValue('WIDTH'))
          var height = Number(block.getFieldValue('HEIGHT'))
          var alt = escapeString(block.getFieldValue('ALT'))
          fields.push('new Blockly.FieldImage(' +src + ', ' + width + ', ' + height + ', ' + alt + ')')
          break
      }
    }
    block = block.nextConnection && block.nextConnection.targetBlock()
  }
  return fields
}
function escapeString(string) {
  return JSON.stringify(string)
}
function getOptTypesFrom(block, name) {
  var types = getTypesFrom_(block, name)
  if (types.length == 0) {
    return undefined
  } else if (types.indexOf('null') != -1) {
    return 'null'
  } else if (types.length == 1) {
    return types[0]
  } else {
    return '[' + types.join(', ') + ']'
  }
}
function getTypesFrom_(block, name) {
  var typeBlock = block.getInputTargetBlock(name)
  var types
  if (!typeBlock || typeBlock.disabled) {
    types = []
  } else if (typeBlock.type == 'type_other') {
    types = [escapeString(typeBlock.getFieldValue('TYPE'))]
  } else if (typeBlock.type == 'type_group') {
    types = []
    for (var n = 0; n < typeBlock.typeCount_; n++) {
      types = types.concat(getTypesFrom_(typeBlock, 'TYPE' + n))
    }
    var hash = Object.create(null)
    for (var n = types.length - 1; n >= 0; n--) {
      if (hash[types[n]]) {
        types.splice(n, 1)
      }
      hash[types[n]] = true
    }
  } else {
    types = [escapeString(typeBlock.valueType)]
  }
  return types
}
function updateGenerator() {
  function makeVar(root, name) {
    name = name.toLowerCase().replace(/\W/g, '_')
    return '  var ' + root + name
  }
  var language_generator = document.getElementById('language_generator').value
  var code = []
  code.push("Blockly." + language_generator + "['" + blockType + "']=function(block){")
  var rootBlock = getRootBlock()
  if (rootBlock) {
    var blocks = rootBlock.getDescendants()
    for (var x = 0, block; block = blocks[x]; x++) {
      if (block.disabled || block.getInheritedDisabled()) continue
      switch (block.type) {
        case 'field_input':
          var name = block.getFieldValue('FIELDNAME')
          code.push(makeVar('value', name) + " = block.getFieldValue('" + name + "')")
          break
        case 'field_math':
          var name = block.getFieldValue('FIELDNAME')
          code.push(makeVar('value', name) + " = block.getFieldValue('" + name + "')")
          break
        case 'field_angle':
          var name = block.getFieldValue('FIELDNAME')
          code.push(makeVar('value', name) + " = block.getFieldValue('" + name + "')")
          break
        case 'field_dropdown':
          var name = block.getFieldValue('FIELDNAME')
          code.push(makeVar('value', name) + " = block.getFieldValue('" + name + "')")
          break
        case 'field_checkbox':
          var name = block.getFieldValue('FIELDNAME')
          code.push(makeVar('value', name) + " = block.getFieldValue('" + name + "') == 'TRUE'")
          break
        case 'field_colour':
          var name = block.getFieldValue('FIELDNAME')
          code.push(makeVar('value', name) + " = block.getFieldValue('" + name + "')")
          break
        case 'field_variable':
          var name = block.getFieldValue('FIELDNAME')
          code.push(makeVar('value', name) + " = Blockly." + language_generator + ".variableDB_.getName(block.getFieldValue('" + name + "'), Blockly.Variables.NAME_TYPE)")
          break
        case 'input_value':
          var name = block.getFieldValue('INPUTNAME')
          code.push(makeVar('value', name) + " = Blockly." + language_generator + ".valueToCode(block, '" + name + "', Blockly." + language_generator + ".ORDER_ATOMIC)")
          break
        case 'input_statement':
          var name = block.getFieldValue('INPUTNAME')
          code.push(makeVar('value', name) + " = Blockly." + language_generator + ".statementToCode(block, '" + name + "')")
          break
      }
    }
	if (language_generator=="Arduino") {
		code.push("  Blockly." + language_generator + ".includes_['lib'] = '#include \"lib.h\";' // à supprimer si inutile")
		code.push("  Blockly." + language_generator + ".variables_['var'] = 'int var;' // à supprimer si inutile")
		code.push("  Blockly." + language_generator + ".definitions_['inst'] = 'inst instance;' // à supprimer si inutile")
		code.push("  Blockly." + language_generator + ".userFunctions_['func'] = 'void func(){return 0};' // à supprimer si inutile")
		code.push("  Blockly." + language_generator + ".setups_['setup'] = 'code_setup();' // à supprimer si inutile")
		code.push("  var code = 'code_loop();\\n'")
		if (rootBlock.getFieldValue('CONNECTIONS') == 'LEFT') {
			code.push("  return [code, Blockly." + language_generator + ".ORDER_ATOMIC]")
		} else {
			code.push("  return code")
		}
	} 
	if (language_generator=="Python") {
		code.push("  Blockly." + language_generator + ".imports_['lib'] = 'import lib';")
		code.push("  Blockly." + language_generator + ".definitions_['inst'] = 'inst instance';")
		code.push("  Blockly." + language_generator + ".userFunctions_['func'] = 'def func():\\n  return 0';")
		code.push("  var code = 'code'")
		if (rootBlock.getFieldValue('CONNECTIONS') == 'LEFT') {
			code.push("  return [code, Blockly." + language_generator + ".ORDER_ATOMIC]")
		} else {
			code.push("  return code")
		}
	}
	if (language_generator=="html") {
		code.push("  var code = 'placer votre code ici'")
		if (rootBlock.getFieldValue('CONNECTIONS') == 'LEFT') {
			code.push("  return [code, Blockly." + language_generator + ".ORDER_ATOMIC]")
		} else {
			code.push("  return code")
		}
	}
  }
  code.push("}")
  editor.setValue(code.join('\n'),1)
}
var oldDir = null
function updatePreview() {
	var newDir = document.getElementById('direction').value
	if (oldDir != newDir) {
		if (previewWorkspace) {
			previewWorkspace.dispose()
		}
		var rtl = newDir == 'rtl'
		previewWorkspace = Blockly.inject('preview',{rtl: rtl, media: 'media/', sounds: false, scrollbars: true})
		oldDir = newDir
	}
	previewWorkspace.clear()
	if (Blockly.Blocks[blockType]) throw 'Block name collides with existing property: ' + blockType
	var code = document.getElementById('languagePre').textContent.trim()
	if (!code) return	// Nothing to render.  Happens while cloud storage is loading.
    eval(code)
	var previewBlock = previewWorkspace.newBlock(blockType)
	delete Blockly.Blocks[blockType]
	previewBlock.initSvg()
	previewBlock.render()
	previewBlock.setMovable(false)
	previewBlock.setDeletable(false)
	previewBlock.moveBy(5, 5)
}
function injectCode(code, id) {
  var pre = document.getElementById(id)
  pre.textContent = code.join('\n')
  code = pre.innerHTML
  code = prettyPrintOne(code, 'js')
  pre.innerHTML = code
}
function getRootBlock() {
  var blocks = mainWorkspace.getTopBlocks(false)
  for (var i = 0, block; block = blocks[i]; i++) {
    if (block.type == 'factory_base') return block
  }
  return null
}
function getStringParamFromUrl(name, defaultValue) {
  var val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'))
  return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue
}
function init() {
	var expandList = [
		document.getElementById('blockly'),
		document.getElementById('preview'),
		document.getElementById('languagePre'),
		document.getElementById('generatorPre')
	]
	var onresize = function(e) {
		for (var i = 0, expand; expand = expandList[i]; i++) {
			expand.style.width = (expand.parentNode.offsetWidth - 2) + 'px'
			expand.style.height = (expand.parentNode.offsetHeight - 2) + 'px'
		}
	}
	onresize()
	window.addEventListener('resize', onresize)
	var toolbox = document.getElementById('toolbox_factory')
	mainWorkspace = Blockly.inject('blockly',{grid:{snap:true},toolbox: toolbox, media: 'media/', sounds: false})
  	var rootBlock = mainWorkspace.newBlock('factory_base')
	rootBlock.initSvg()
	rootBlock.render()
	rootBlock.setDeletable(false)
	mainWorkspace.addChangeListener(onchange)
	if (window.localStorage.prog == "python") $("#language_generator").val("Python")
	document.getElementById('direction').addEventListener('change', updatePreview)
	document.getElementById('language_generator').addEventListener('change', updateGenerator)
	$('[rel="tooltip"]').tooltip({trigger: "hover"})
	$('[data-toggle="tooltip"]').tooltip()
}
window.addEventListener('load', init)