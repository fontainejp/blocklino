'use strict';
goog.provide('Blockly.html');
goog.require('Blockly.Generator');
  ////////////////
 /*  function  */
////////////////
var URLRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
var hashRegex = /#([A-z0-9]*)/;
function fullEscape(input) {
    return escape(input).replace(/%25/g, "%");
}
function looseEscape(input) {
    return input
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
function isNewTabUrl(input) {
    return URLRegex.test(input) || (!input.includes('http://') && !input.includes('https://')) && !hashRegex.test(input) && input.length > 0;
}
function URLInput(input) {
    input = encodeURI(input);
    if (URLRegex.test(input) || hashRegex.test(input)) {
        return input;
    } else if (isNewTabUrl(input)) {
        return 'https://' + input;
    }
}
//////////////////////// JS ////////////////////////
// script
Blockly.Blocks['balise_js'] = {
    init: function () {
        this.jsonInit({
            "message0": '<script> %1 %2 </script>',
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "content",
					"check": "script"
                }
            ],
			"previousStatement": "header",
            "nextStatement": "header",
            "colour": "#FF0000"
        })
    }
}
Blockly.html['balise_js'] = function (block) {
    return '<script>\n  $(document).ready(function(){\n' + Blockly.html.statementToCode(block, 'content') + '  });\n</script>\n'
}
// jquery_event
Blockly.Blocks['jquery_event']={init:function(){
	this.jsonInit({
	"message0": '$(\" %1 \"). %2 ()%3 %4',
    "args0": [
		{
            "type": "field_input",
            "name": "_text",
            "text": ""
        },
        {
            "type": "field_dropdown",
            "name": "_dropdown",
            "options": [
				["change", "change"], ["click", "click"], ["dbclick", "dbclick"], ["hover", "hover"], ["keypress", "keypress"]
            ]
        },
        {
            "type": "input_dummy"
        },
		{
            "type": "input_statement",
            "name": "_statement",
            "check": "document"
        }
    ],
    "previousStatement": "script",
    "nextStatement": "script",
    "colour": "#FF0000"
	})
}}
Blockly.html['jquery_event']=function(block){
  var value_statement = Blockly.html.statementToCode(block, '_statement');
  var value_text = block.getFieldValue('_text');
  var value_dropdown = block.getFieldValue('_dropdown');
  return '$("'+value_text+'").'+value_dropdown+'(function(){\n'+value_statement+'});\n'
}
// jquery_get
Blockly.Blocks['jquery_get']={init:function(){
    this.appendDummyInput()
        .appendField("$(\"")
        .appendField(new Blockly.FieldTextInput(""), "_text")
        .appendField("\").")
        .appendField(new Blockly.FieldDropdown([["attr", "attr"], ["html", "html"], ["prop", "prop"], ["text", "text"], ["val", "val"]]), "_dropdown")
        .appendField("()");
    this.setInputsInline(false);
    this.setOutput(true);
    this.setColour('#FF0000')}
}
Blockly.html['jquery_get']=function(block){
  var value_text = block.getFieldValue('_text');
  var value_dropdown = block.getFieldValue('_dropdown');
  return ['$("'+value_text+'").'+value_dropdown+'()',Blockly.html.ORDER_ATOMIC]
}
// jquery_set
Blockly.Blocks['jquery_set']={init:function(){
    this.appendValueInput("_block")
        .appendField("$(\"")
        .appendField(new Blockly.FieldTextInput(""), "_text")
        .appendField("\").")
        .appendField(new Blockly.FieldDropdown([["addClass", "addClass"], ["append", "append"], ["attr", "attr"], ["empty", "empty"], ["hide", "hide"], ["html", "html"], ["prepend", "prepend"], ["prop", "prop"], ["remove", "remove"], ["removeClass", "removeClass"], ["show", "show"], ["text", "text"], ["val", "val"]]), "_dropdown")
        .appendField("(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement("script");
    this.setNextStatement("script");
    this.setColour('#FF0000')}
}
Blockly.html['jquery_set']=function(block){
  var value_block = Blockly.html.valueToCode(block, '_block', Blockly.html.ORDER_ATOMIC);
  var value_text = block.getFieldValue('_text');
  var value_dropdown = block.getFieldValue('_dropdown');
  return '$("'+value_text+'").'+value_dropdown+'('+value_block+');\n'
}
// jquery_css_set
Blockly.Blocks['jquery_css_set']={init:function(){
    this.appendValueInput("_block")
        .appendField("$(\"")
        .appendField(new Blockly.FieldTextInput(""), "_text")
        .appendField("\").css(\"")
        .appendField(new Blockly.FieldDropdown([["color", "color"], ["background-color", "background-color"], ["border", "border"], ["display", "display"], ["float", "float"], ["font", "font"], ["text-align", "text-align"], ["text-decoration", "text-decoration"], ["text-transform", "text-transform"]]), "_dropdown")
        .appendField("\",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#FF0000')}
}
Blockly.html['jquery_css_set']=function(block){
  var value_block = Blockly.html.valueToCode(block, '_block', Blockly.html.ORDER_ATOMIC);
  var value_text = block.getFieldValue('_text');
  var value_dropdown = block.getFieldValue('_dropdown');
  return '$("'+value_text+'").css("'+value_dropdown+'", '+value_block+');\n'
}
//////////////////////// variable ////////////////////////
Blockly.Variables.flyoutCategory = function(workspace) {
	var variableList = workspace.variableList;
	variableList.sort(goog.string.caseInsensitiveCompare);
	var xmlList = [];
	var button = goog.dom.createDom('button');
	button.setAttribute('text', Blockly.Msg.NEW_VARIABLE);
	button.setAttribute('callbackKey', 'CREATE_VARIABLE');
	Blockly.registerButtonCallback('CREATE_VARIABLE', function(button) {
		Blockly.Variables.createVariable(button.getTargetWorkspace());
	});
	xmlList.push(button);
	if (variableList.length > 0) {
		if (window.localStorage.prog!="python") {
			
			if (Blockly.Blocks['variables_set_init']) {
				var block = goog.dom.createDom('block');
				block.setAttribute('type', 'variables_set_init');
				block.setAttribute('gap', 8);
				var field = goog.dom.createDom('field', null, variableList[0]);
				field.setAttribute('name', 'VAR');
				block.appendChild(field);
				xmlList.push(block);
			}
			if (Blockly.Blocks['variables_set']) {
				var block = goog.dom.createDom('block');
				block.setAttribute('type', 'variables_set');
				block.setAttribute('gap', 8);
				var field = goog.dom.createDom('field', null, variableList[0]);
				field.setAttribute('name', 'VAR');
				block.appendChild(field);
				xmlList.push(block);
			}
			if (Blockly.Blocks['math_change']) {
				var block = goog.dom.createDom('block');
				block.setAttribute('type', 'math_change');
				block.setAttribute('gap', 8);
				var field = goog.dom.createDom('field', null, variableList[0]);
				field.setAttribute('name', 'VAR');
				block.appendChild(field);
				xmlList.push(block);
			}
			
			for (var i = 0; i < variableList.length; i++) {
			  if (Blockly.Blocks['variables_get']) {
				var block = goog.dom.createDom('block');
				block.setAttribute('type', 'variables_get');
				if (Blockly.Blocks['variables_set']) {
				  block.setAttribute('gap', 8);
				}
				var field = goog.dom.createDom('field', null, variableList[i]);
				field.setAttribute('name', 'VAR');
				block.appendChild(field);
				xmlList.push(block);
			  }
			}
		} else {
			if (Blockly.Blocks['variables_set']) {
				var block = goog.dom.createDom('block');
				block.setAttribute('type', 'variables_set');
				block.setAttribute('gap', 8);
				var field = goog.dom.createDom('field', null, variableList[0]);
				field.setAttribute('name', 'VAR');
				block.appendChild(field);
				xmlList.push(block);
			}
			if (Blockly.Blocks['math_change']) {
				var block = goog.dom.createDom('block');
				block.setAttribute('type', 'math_change');
				block.setAttribute('gap', 8);
				var field = goog.dom.createDom('field', null, variableList[0]);
				field.setAttribute('name', 'VAR');
				block.appendChild(field);
				xmlList.push(block);
			}
			for (var i = 0; i < variableList.length; i++) {
			  if (Blockly.Blocks['variables_get']) {
				var block = goog.dom.createDom('block');
				block.setAttribute('type', 'variables_get');
				if (Blockly.Blocks['variables_set']) {
				  block.setAttribute('gap', 8);
				}
				var field = goog.dom.createDom('field', null, variableList[i]);
				field.setAttribute('name', 'VAR');
				block.appendChild(field);
				xmlList.push(block);
			  }
			}
		}
	}
  return xmlList
}
