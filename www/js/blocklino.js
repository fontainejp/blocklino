'use strict'

var BlocklyDuino = {}
var mes_blocs = []

BlocklyDuino.baudrate = 300
BlocklyDuino.choice= ""
BlocklyDuino.code_bf = ""
BlocklyDuino.com = "com"
BlocklyDuino.content = "on" // "on"=block  //  "off"=code
BlocklyDuino.detail = ""
BlocklyDuino.lang = "fr"
BlocklyDuino.loadOnce = ""
BlocklyDuino.nb_com = ""
BlocklyDuino.prog = "arduino"
BlocklyDuino.prog_ino = "/* C/C++ */\n\nvoid setup() {\n\n}\nvoid loop() {\n\n}"
BlocklyDuino.prog_py = "# Python\n\nwhile True:\n  \n"
BlocklyDuino.prog_microbit = "# Python\n\nfrom microbit import *\n\nwhile True:\n  \n"
BlocklyDuino.renderer = "blockly"
BlocklyDuino.selectedCard = "uno"
BlocklyDuino.selectedToolbox = "toolbox_arduino_all"
BlocklyDuino.size = "14px"
BlocklyDuino.theme = "sqlserver"
BlocklyDuino.verif = false
BlocklyDuino.workspace = null

BlocklyDuino.init = function() {
	Code.initLanguage()
	BlocklyDuino.loadConfig()
	BlocklyDuino.workspace = Blockly.inject('content_blocks', {grid:{snap:true}, sounds:false,	media:'media/',	toolbox:BlocklyDuino.buildToolbox(), zoom:{controls:true,wheel:true}})
	BlocklyDuino.bTD()
	BlocklyDuino.bindFunctions()
	BlocklyDuino.workspace.render()
	BlocklyDuino.workspace.addChangeListener(BlocklyDuino.renderArduinoCodePreview)
	BlocklyDuino.loadFile()
	BlocklyDuino.tooltip()
	window.addEventListener('unload', BlocklyDuino.backupBlocks, false)
}
BlocklyDuino.tooltip = function() {
	$('[data-toggle = "tooltip"]').tooltip()
	$('[rel = "tooltip"]').tooltip({trigger: "hover"})
}
BlocklyDuino.bTD = function() {
	var bTD = document.getElementsByClassName('blocklyToolboxDiv')
	if ($("#toolboxes").val() == "toolbox_fresnel_all") {
		bTD[0].style.width = "290px"
		$('#btn_bin').removeClass("hidden")
	} else {
		bTD[0].style.width = "180px"
		$('#btn_bin').addClass("hidden")
	}
}
BlocklyDuino.backupBlocks = function() {
    var xml = Blockly.Xml.workspaceToDom(BlocklyDuino.workspace)
    var text = Blockly.Xml.domToText(xml)
    window.localStorage.loadOnceBlocks = text
}
BlocklyDuino.loadFile = function() {
	var urlFile = BlocklyDuino.getStringParamFromUrl('url', '')
	if (urlFile) {
		var file = urlFile.split("\\")
		var id = file.length - 1 
		document.getElementById('span_file').textContent = " - " + file[id]
	} else {
		BlocklyDuino.loadBlocks()
	}
	if (urlFile.endsWith(".py")) {
		$.get(urlFile, function(data) { 
			if (BlocklyDuino.content == "on") {
				$('#codeORblock').bootstrapToggle("off")
				BlocklyDuino.content = "off"
			}
			editor.session.setMode("ace/mode/python")
			editor.setOptions({
				enableBasicAutocompletion: true,
				enableSnippets: true,
				enableLiveAutocompletion: true
			})
			editor.setValue(data,1)
		}, 'text')
	}
	if (urlFile.endsWith(".ino")) {
		$.get(urlFile, function(data) { 
			if (BlocklyDuino.content == "on") {
				$('#codeORblock').bootstrapToggle("off")
				BlocklyDuino.content = "off"
			}
			editor.session.setMode("ace/mode/c_cpp")
			editor.setOptions({
				enableBasicAutocompletion: true,
				enableSnippets: true,
				enableLiveAutocompletion: true
			})
			editor.setValue(data,1)
		}, 'text')
	}
	if (urlFile.endsWith(".bloc")||urlFile.endsWith(".xml")) {
		if (BlocklyDuino.content == "off") {
			$('#codeORblock').bootstrapToggle("on")
			BlocklyDuino.content = "on"
		}
		$.get( urlFile, function(data){BlocklyDuino.loadBlocks(data)}, 'text')
	}
}
BlocklyDuino.save_com = function() {
	$("#portserie").blur()
	BlocklyDuino.com = $("#portserie").val()
}
BlocklyDuino.renderArduinoCodePreview = function() {
	if (window.localStorage.prog != "python") {
		$('#pre_previewArduino').text(Blockly.Arduino.workspaceToCode(BlocklyDuino.workspace))
		$('#pre_previewArduino').html(prettyPrintOne($('#pre_previewArduino').html(), 'cpp'))
	} else {
		$('#pre_previewArduino').text(Blockly.Python.workspaceToCode(BlocklyDuino.workspace))
		$('#pre_previewArduino').html(prettyPrintOne($('#pre_previewArduino').html(), 'py'))
	}
}
BlocklyDuino.getStringParamFromUrl = function(name, defaultValue) {
  var val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'))
  return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue
}
BlocklyDuino.loadBlocks = function(defaultXml) {
	if (defaultXml) {
		var xml = Blockly.Xml.textToDom(defaultXml)
		BlocklyDuino.workspace.clear()
		Blockly.Xml.domToWorkspace(xml,BlocklyDuino.workspace)
		BlocklyDuino.workspace.render()
	} else {
		if (window.localStorage.loadOnceBlocks ) {
			BlocklyDuino.loadOnce = window.localStorage.loadOnceBlocks
		}
		var xml = Blockly.Xml.textToDom(BlocklyDuino.loadOnce)
		BlocklyDuino.workspace.clear()
		Blockly.Xml.domToWorkspace(xml,BlocklyDuino.workspace)
		BlocklyDuino.workspace.render()
	}
}
BlocklyDuino.load = function(event) {
	var files = event.target.files
	if (files.length != 1) return
	var reader = new FileReader()
	reader.onloadend = function(event) {
		var target = event.target
		if (target.readyState == 2) {
			document.getElementById('span_file').textContent = " - " + files[0].name
			if (files[0].name.endsWith("ino")) {
				if (BlocklyDuino.content == "on") {
					$('#codeORblock').bootstrapToggle("off")
					BlocklyDuino.content = "off"
				}
				editor.session.setMode("ace/mode/c_cpp")
				editor.setOptions({
					enableBasicAutocompletion: true,
					enableSnippets: true,
					enableLiveAutocompletion: true
				})
				editor.setValue(target.result,1)
			}
			if (files[0].name.endsWith("py")) {
				if (BlocklyDuino.content == "on") {
					$('#codeORblock').bootstrapToggle("off")
					BlocklyDuino.content = "off"
				}
				editor.session.setMode("ace/mode/python")
				editor.setOptions({
					enableBasicAutocompletion: true,
					enableSnippets: true,
					enableLiveAutocompletion: true
				})
				editor.setValue(target.result,1)
			}
			if (files[0].name.endsWith("bloc")||files[0].name.endsWith("xml")) {
				if (BlocklyDuino.content == "off") {
					$('#codeORblock').bootstrapToggle("on")
					BlocklyDuino.content = "on"
				}
				BlocklyDuino.loadBlocks(target.result)
			}
		}
	}
	reader.readAsText(files[0])
}
BlocklyDuino.loadConfig = function() {
	// content, size & theme
	$('#codeORblock').bootstrapToggle(BlocklyDuino.content)
	$('#btn_search').addClass("hidden")
	$('#btn_bin').addClass("hidden")
	$('#theme').val(BlocklyDuino.theme)
	$('#fontsize').val(BlocklyDuino.size)
	BlocklyDuino.theme_sqlserver()
	// card & prog & toolbox
	if (window.localStorage.card === undefined) {
		window.localStorage.card = BlocklyDuino.selectedCard
		window.localStorage.prog = profile[BlocklyDuino.selectedCard].prog
		window.localStorage.toolbox = BlocklyDuino.selectedToolbox
		$("#boards").val(BlocklyDuino.selectedCard)
		$('#arduino_card_mini_picture').attr("src", profile[BlocklyDuino.selectedCard]['picture'])
		$("#toolboxes").val(BlocklyDuino.selectedToolbox)
		BlocklyDuino.loadToolboxDefinition(BlocklyDuino.selectedToolbox)
	} else {
		$("#boards").val(window.localStorage.card)
		$('#arduino_card_mini_picture').attr("src", profile[window.localStorage.card]['picture'])
		$("#toolboxes").val(window.localStorage.toolbox)
		BlocklyDuino.loadToolboxDefinition(window.localStorage.toolbox)
	}	
	// bin
	if (window.localStorage.toolbox == "toolbox_fresnel_all") $('#btn_bin').removeClass("hidden")
}
BlocklyDuino.Undo = function() {
	if (BlocklyDuino.content == "on") {
		Blockly.mainWorkspace.undo(0)
	} else {
		editor.undo()
	}
}
BlocklyDuino.Redo = function() {
	if (BlocklyDuino.content == "on") {
		Blockly.mainWorkspace.undo(1)
	} else {
		editor.redo()
	}	
}
BlocklyDuino.search = function() {
	editor.execCommand("find")
}
BlocklyDuino.bindFunctions = function() {
	$('#fontsize').on("change", function(){
		document.getElementById('content_code').style.fontSize = $(this).val()
		BlocklyDuino.size = $(this).val()
	})
	$('#theme').on("change", BlocklyDuino.apply_theme)
	$('#renderer').on("change", BlocklyDuino.apply_renderer)
	$('.modal-child').on('show.bs.modal', function () {
		var modalParent = $(this).attr('data-modal-parent')
		$(modalParent).css('opacity', 0)
	})
	$('.modal-child').on('hidden.bs.modal', function () {
		var modalParent = $(this).attr('data-modal-parent')
		$(modalParent).css('opacity', 1)
	})
	$('#btn_undo').on("click", BlocklyDuino.Undo)
	$('#btn_redo').on("click", BlocklyDuino.Redo)
	$('#btn_search').on("click", BlocklyDuino.search)
	$('#boards').on("focus", function() {
		BlocklyDuino.selectedCard = $(this).val()
	})
	$('#btn_preview').on("click", function() {
		$("#toggle").toggle("slide")
	})
	$('#codeORblock').on("change", BlocklyDuino.code_block)
	$('#pre_previewArduino').on("click", function() {
		$("#toggle").toggle("slide")
	})
	$('#btn_verify').on("click", function() {
		$("#message").modal("show")
	})
	$('#btn_flash').on("click", function() {
		$("#message").modal("show")
	})
	$('#toolboxes').on("focus", function() {
		BlocklyDuino.selectedToolbox = $(this).val()
	})
	$('#toolboxes').on("change", BlocklyDuino.changeToolboxDefinition)
	$('#configModal').on('hidden.bs.modal', function(e) {
		BlocklyDuino.loadToolboxDefinition(BlocklyDuino.selectedToolbox)
	})
	$('#load').on("change", BlocklyDuino.load)
	$('#btn_fakeload').on("click", function() {
		$('#load').click()
	})
	$('#btn_config').on("click", BlocklyDuino.openConfigToolbox)
	$('#select_all').on("click", BlocklyDuino.checkAll)
	$('#btn_valid_config').on("click", BlocklyDuino.changeToolbox)
	//$('#btn_console').on("click", BlocklyDuino.console)
}
BlocklyDuino.code_block = function () {
	if (window.localStorage.prog != "python") {
		editor.session.setMode("ace/mode/c_cpp")
		var code = BlocklyDuino.prog_ino
	} else {
		editor.session.setMode("ace/mode/python")
		var code = (window.localStorage.card == "microbit") ? BlocklyDuino.prog_microbit : BlocklyDuino.prog_py
	}
	editor.setOptions({
		enableBasicAutocompletion: true,
		enableSnippets: true,
		enableLiveAutocompletion: true
	})
	if (BlocklyDuino.content == "on") {
		if ($('#pre_previewArduino').text( ) == "") {editor.setValue(code,1)} else {editor.setValue($('#pre_previewArduino').text(),1)}
		$('a[href="#content_code"]').tab('show')
		$('#btn_print').addClass("hidden")
		$('#btn_preview').addClass("hidden")
		$('#btn_search').removeClass("hidden")
		BlocklyDuino.content = "off"
	} else {
		$('a[href="#content_blocks"]').tab('show')
		$('#btn_print').removeClass("hidden")
		$('#btn_preview').removeClass("hidden")
		$('#btn_search').addClass("hidden")
		BlocklyDuino.content = "on"
	}
}
BlocklyDuino.theme_monokai = function () {
	document.getElementById("theme_css").href = "css/blocklino_monokai.css"
	document.getElementById("btn_preview").className = document.getElementById("btn_preview").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' )
	document.getElementById("btn_new").className = document.getElementById("btn_new").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' )
	document.getElementById("btn_example").className = document.getElementById("btn_example").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' )
	document.getElementById("btn_fakeload").className = document.getElementById("btn_fakeload").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' )
	document.getElementById("btn_saveXML").className = document.getElementById("btn_saveXML").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' )
	document.getElementById("btn_config").className = document.getElementById("btn_config").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' )
	document.getElementById("btn_card").className = document.getElementById("btn_card").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' )
	document.getElementById("btn_usb").className = document.getElementById("btn_usb").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' )
	document.getElementById("btn_about").className = document.getElementById("btn_about").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' )
	document.getElementById("btn_undo").className = document.getElementById("btn_undo").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' )
	document.getElementById("btn_redo").className = document.getElementById("btn_redo").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' )
	document.getElementById("btn_print").className = document.getElementById("btn_print").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' )
	document.getElementById("btn_flash").className = document.getElementById("btn_flash").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' )
	document.getElementById("btn_saveino").className = document.getElementById("btn_saveino").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' )
	document.getElementById("btn_copy").className = document.getElementById("btn_copy").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' )
	document.getElementById("btn_search").className = document.getElementById("btn_search").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' )
	document.getElementById("btn_term").className = document.getElementById("btn_term").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' )
	document.getElementById("btn_verify").className = document.getElementById("btn_verify").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' )
	document.getElementById("btn_bin").className = document.getElementById("btn_bin").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' )
	document.getElementById("btn_tools").className = document.getElementById("btn_tools").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' )
}
BlocklyDuino.theme_sqlserver = function () {
	document.getElementById("theme_css").href = "css/blocklino_sqlserver.css"
	document.getElementById("btn_preview").className = document.getElementById("btn_preview").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' )
	document.getElementById("btn_new").className = document.getElementById("btn_new").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' )
	document.getElementById("btn_example").className = document.getElementById("btn_example").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' )
	document.getElementById("btn_fakeload").className = document.getElementById("btn_fakeload").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' )
	document.getElementById("btn_saveXML").className = document.getElementById("btn_saveXML").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' )
	document.getElementById("btn_config").className = document.getElementById("btn_config").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' )
	document.getElementById("btn_card").className = document.getElementById("btn_card").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' )
	document.getElementById("btn_usb").className = document.getElementById("btn_usb").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' )
	document.getElementById("btn_about").className = document.getElementById("btn_about").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' )
	document.getElementById("btn_undo").className = document.getElementById("btn_undo").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' )
	document.getElementById("btn_redo").className = document.getElementById("btn_redo").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' )
	document.getElementById("btn_print").className = document.getElementById("btn_print").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' )
	document.getElementById("btn_flash").className = document.getElementById("btn_flash").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' )
	document.getElementById("btn_saveino").className = document.getElementById("btn_saveino").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' )
	document.getElementById("btn_copy").className = document.getElementById("btn_copy").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' )
	document.getElementById("btn_search").className = document.getElementById("btn_search").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' )
	document.getElementById("btn_term").className = document.getElementById("btn_term").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' )
	document.getElementById("btn_verify").className = document.getElementById("btn_verify").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' )
	document.getElementById("btn_bin").className = document.getElementById("btn_bin").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' )
	document.getElementById("btn_tools").className = document.getElementById("btn_tools").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' )
}
BlocklyDuino.apply_theme = function () {
	var new_theme = $('#theme').val()
	editor.setTheme('ace/theme/' + new_theme)
	BlocklyDuino.theme = new_theme
	if (new_theme == "monokai") {
		BlocklyDuino.theme_monokai()
	} else {
		BlocklyDuino.theme_sqlserver()
	}
}
BlocklyDuino.apply_renderer = function () {
	var new_renderer = $('#renderer').val()
	BlocklyDuino.renderer = new_renderer
	
}
BlocklyDuino.checkAll = function () {
    if(this.checked) {
        $('#modal-body-config input:checkbox[id^=checkbox_]').each(function() {
            this.checked = true
        })
    } else {
      $('#modal-body-config input:checkbox[id^=checkbox_]').each(function() {
            this.checked = false
        })
    }
}
BlocklyDuino.openConfigToolbox = function() {
	var modalbody = $("#modal-body-config")
	var loadIds = window.localStorage.toolboxids
	if (loadIds === undefined || loadIds === "") {
		if ($('#defaultCategories').length) {
			loadIds = $('#defaultCategories').html()
		} else {
			loadIds = ''
		}
	}
	modalbody.empty()
	var i = 0, n, ligne = ""
	$("#toolbox").children("category").each(function() {
		n = loadIds.search($(this).attr("id"))
		if (n >= 0) {
			ligne = '<input type = "checkbox" checked = "checked" name = "checkbox_' + i + '" id = "checkbox_' + $(this).attr("id") + '"/> ' + Blockly.Msg[$(this).attr("id")]+ '<br/>'
		} else {
			ligne = '<input type = "checkbox" name = "checkbox_' + i + '" id = "checkbox_' + $(this).attr("id") + '"/> ' + Blockly.Msg[$(this).attr("id")] + '<br/>'
		}
		i++
		modalbody.append(ligne)
    })
}
BlocklyDuino.changeToolbox = function() {
	var toolboxIds = []
	var new_lang = $('#languageMenu').val()
	$('#modal-body-config input:checkbox[id^=checkbox_]').each(function() {
		if (this.checked == true) {
			var xmlid = this.id
			toolboxIds.push(xmlid.replace("checkbox_", ""))
		}
	})
	window.localStorage.toolboxids = toolboxIds
	BlocklyDuino.size = $('#fontsize').val()
	BlocklyDuino.theme = $('#theme').val()
	Blockly.getMainWorkspace().updateToolbox(BlocklyDuino.buildToolbox())
	BlocklyDuino.workspace.render()
	$('#configModal').modal('hide')
	BlocklyDuino.bTD()
	if (new_lang != window.localStorage.lang){
		window.localStorage.lang = new_lang
		window.location = window.location.href
	}
}
BlocklyDuino.buildToolbox = function() {
	var loadIds = window.localStorage.toolboxids
	if (loadIds === undefined || loadIds === "") {
		if ($('#defaultCategories').length) {
			loadIds = $('#defaultCategories').html()
		} else {
			loadIds = ''
		}
		window.localStorage.toolboxids = loadIds
	}
	var xmlValue = '<xml id = "toolbox">'
	var xmlids = loadIds.split(",")
	for (var i = 0; i < xmlids.length; i++) {
		if ($('#'+xmlids[i]).length) {
			xmlValue += $('#'+xmlids[i])[0].outerHTML
		}
	}
	xmlValue += '</xml>'
	return xmlValue
}
BlocklyDuino.loadToolboxDefinition = function(toolboxFile) {
	$.ajax({
		type: "GET",
		url: "./toolbox/" + toolboxFile + ".xml",
		dataType: "xml",
		async : false
	})
	.done(function(data){
		var toolboxXml = '<xml id = "toolbox" style = "display: none">' + $(data).find('toolbox').html() + '</xml>'
		$("#toolbox").remove()
		$('body').append(toolboxXml)
		$("xml").find("category").each(function() {
			if (!$(this).attr("id")) {
				$(this).attr("id", $(this).attr("name"))
				$(this).attr("name", Blockly.Msg[$(this).attr("name")])
			}
		})
	})
	.fail(function(data) {
		$("#toolbox").remove()
	})
}
BlocklyDuino.changeToolboxDefinition =  function() {
	BlocklyDuino.loadToolboxDefinition($("#toolboxes").val())
	BlocklyDuino.openConfigToolbox()
}
BlocklyDuino.cardPicture_change = function() {
	if ($("#pinout").val()) {
		$('#arduino_card_mini_picture').attr("src", profile[$("#pinout").val()]['picture'])
		$("#card_connect").text(profile[$("#pinout").val()]['usb'])
		$("#card_cpu").text(profile[$("#pinout").val()]['cpu'])
		$("#card_voltage").text(profile[$("#pinout").val()]['voltage'])
		$("#card_inout").text(profile[$("#pinout").val()]['inout'])
		$("#card_in_anal").text(profile[$("#pinout").val()]['in_anal'])
		$("#card_out_anal").text(profile[$("#pinout").val()]['out_anal'])
		$("#card_eeprom").text(profile[$("#pinout").val()]['eeprom'])
	}
}
Blockly.Variables.flyoutCategory = function(workspace) {
	var variableList = workspace.variableList
	variableList.sort(goog.string.caseInsensitiveCompare)
	var xmlList = []
	var button = goog.dom.createDom('button')
	button.setAttribute('text', Blockly.Msg.NEW_VARIABLE)
	button.setAttribute('callbackKey', 'CREATE_VARIABLE')
	Blockly.registerButtonCallback('CREATE_VARIABLE', function(button) {
		Blockly.Variables.createVariable(button.getTargetWorkspace())
	})
	xmlList.push(button)
	if (variableList.length > 0) {
		if (window.localStorage.prog != "python") {
			if (Blockly.Blocks['variables_set_init_volatile']) {
				var block = goog.dom.createDom('block')
				block.setAttribute('type', 'variables_set_init_volatile')
				block.setAttribute('gap', 8)
				var field = goog.dom.createDom('field', null, variableList[0])
				field.setAttribute('name', 'VAR')
				block.appendChild(field)
				xmlList.push(block)
			}
			if (Blockly.Blocks['variables_set_string']) {
				var block = goog.dom.createDom('block')
				block.setAttribute('type', 'variables_set_string')
				block.setAttribute('gap', 8)
				var field = goog.dom.createDom('field', null, variableList[0])
				field.setAttribute('name', 'VAR')
				block.appendChild(field)
				xmlList.push(block)
			}
			if (Blockly.Blocks['variables_set_init']) {
				var block = goog.dom.createDom('block')
				block.setAttribute('type', 'variables_set_init')
				block.setAttribute('gap', 8)
				var field = goog.dom.createDom('field', null, variableList[0])
				field.setAttribute('name', 'VAR')
				block.appendChild(field)
				xmlList.push(block)
			}
			if (Blockly.Blocks['variables_set']) {
				var block = goog.dom.createDom('block')
				block.setAttribute('type', 'variables_set')
				block.setAttribute('gap', 8)
				var field = goog.dom.createDom('field', null, variableList[0])
				field.setAttribute('name', 'VAR')
				block.appendChild(field)
				xmlList.push(block)
			}
			if (Blockly.Blocks['math_change']) {
				var block = goog.dom.createDom('block')
				block.setAttribute('type', 'math_change')
				block.setAttribute('gap', 8)
				var field = goog.dom.createDom('field', null, variableList[0])
				field.setAttribute('name', 'VAR')
				block.appendChild(field)
				xmlList.push(block)
			}
			if (Blockly.Blocks['variables_const']) {
				var block = goog.dom.createDom('block')
				block.setAttribute('type', 'variables_const')
				block.setAttribute('gap', 8)
				var field = goog.dom.createDom('field', null, variableList[0])
				field.setAttribute('name', 'VAR')
				block.appendChild(field)
				xmlList.push(block)
			}
			if (Blockly.Blocks['base_define_const']) {
				var block = goog.dom.createDom('block')
				block.setAttribute('type', 'base_define_const')
				if (Blockly.Blocks['variables_get']) {
					block.setAttribute('gap', 16)
				}
				var field = goog.dom.createDom('field', null, variableList[0])
				field.setAttribute('name', 'VAR')
				block.appendChild(field)
				xmlList.push(block)
			}
			for (var i = 0; i < variableList.length; i++) {
			  if (Blockly.Blocks['variables_get']) {
				var block = goog.dom.createDom('block')
				block.setAttribute('type', 'variables_get')
				if (Blockly.Blocks['variables_set']) {
				  block.setAttribute('gap', 8)
				}
				var field = goog.dom.createDom('field', null, variableList[i])
				field.setAttribute('name', 'VAR')
				block.appendChild(field)
				xmlList.push(block)
			  }
			}
		} else {
			if (Blockly.Blocks['variables_set']) {
				var block = goog.dom.createDom('block')
				block.setAttribute('type', 'variables_set')
				block.setAttribute('gap', 8)
				var field = goog.dom.createDom('field', null, variableList[0])
				field.setAttribute('name', 'VAR')
				block.appendChild(field)
				xmlList.push(block)
			}
			if (Blockly.Blocks['math_change']) {
				var block = goog.dom.createDom('block')
				block.setAttribute('type', 'math_change')
				block.setAttribute('gap', 8)
				var field = goog.dom.createDom('field', null, variableList[0])
				field.setAttribute('name', 'VAR')
				block.appendChild(field)
				xmlList.push(block)
			}
			for (var i = 0; i < variableList.length; i++) {
			  if (Blockly.Blocks['variables_get']) {
				var block = goog.dom.createDom('block')
				block.setAttribute('type', 'variables_get')
				if (Blockly.Blocks['variables_set']) {
				  block.setAttribute('gap', 8)
				}
				var field = goog.dom.createDom('field', null, variableList[i])
				field.setAttribute('name', 'VAR')
				block.appendChild(field)
				xmlList.push(block)
			  }
			}
		}
	}
	return xmlList
}