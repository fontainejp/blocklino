/*
    Ffau - A blocky-based editor for teaching HTML & CSS .
	Developed by Pal Kerecsenyi, Geza Kerecsenyi and Oli Plant.
	Full details are avaliable at the Github repo: https://github.com/codeddraig/ffau
	Copyright (c) 2017-19 The CodeDdraig Organisation
	THIS IS VERSION 1.2.2
*/
'use strict';
goog.provide('Blockly.html');
goog.require('Blockly.Generator');
var nameFile = "";
/////////////////  function  /////////////////
var URLRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
var hashRegex = /#([A-z0-9]*)/;

function looseEscape(input) {
    return input
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
function escapeTitle(input) {
    return input.replace(/\s/g, '_')
}

//////////////////////// STRUCTURE ////////////////////////
//  link_head
Blockly.Blocks['link_head'] = {
    init:function(){
		this.jsonInit({
            "message0": "<link rel=stylesheet href=%1>",
			"args0": [
                {
                    "type": "field_dropdown",
                    "name": "link",
                    "options": [
                        [
                            "Fontawesome",
							"css/fontawesome.css"
                        ],
                        [
                            "Bootstrap",
                            "css/bootstrap.min.3.3.6.css"
						],
                        [
                            "W3",
                            "css/w3.css"
                        ]
                    ]
                }
            ],
            "previousStatement": "header",
            "nextStatement": "header",
            "colour": "#4a235a"
        })
	}
}
Blockly.html['link_head'] = function (block) {
	return '<link rel="stylesheet" href="'+block.getFieldValue("link")+'">\n'
}
//  script_head
Blockly.Blocks['script_head'] = {
    init:function(){
		this.jsonInit({
            "message0": "<script src=%1> </script>",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "script",
                    "options": [
                        [
                            "jQuery",
                            '<script src="js/jquery.min.2.1.3.js"></script>\n'
                        ],
                        [
                            "Bootstrap",
                            '<script src="js/bootstrap.min.3.3.6.js"></script>\n'
                        ],
                        [
                            'openStreetMap',
                            '<link rel="stylesheet" href="css/map.css">\n<link rel="stylesheet" href="css/routing.css">\n<script src="js/map/map.js"></script>\n<script src="js/map/esri-leaflet.js"></script>\n<script src="js/map/esri-leaflet-geocoder.js"></script>\n<script src="js/map/routing.js"></script>\n<script src="js/map/html-overlay.js"></script>\n'
                        ],
                        [
                            'Canvas',
                            '<link rel="stylesheet" href="css/paint.css">\n<script src="js/paint.js"></script>\n'
                        ]
                    ]
                }
            ],
			"previousStatement": "header",
            "nextStatement": "header",
            "colour": "#4a235a"
        })
	}
}
Blockly.html['script_head'] = function (block) {
	return block.getFieldValue("script")
}
// balise 
Blockly.Blocks['balise'] = {
    init: function () {
        this.jsonInit({
            "message0": '<%1> %2 %3 </>',
            "args0": [
                {
                    "type": "field_input",
                    "name": "_text",
                    "text": "balise"
                },
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#4a235a"
        });
    }
}
Blockly.html['balise'] = function (block) {
	var text_content = block.getFieldValue('_text');
    var statements_content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC).trim();
    var code = '<' + text_content +  (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + statements_content + '</' + text_content + '>\n';
    return code
}
// balise set 
Blockly.Blocks['balise_set'] = {
    init:function(){
		this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("code"), "_text");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#4a235a")}
}
Blockly.html['balise_set'] = function (block) {
    return block.getFieldValue('_text') + '\n'
}
// balise get 
Blockly.Blocks['balise_get'] = {
    init:function(){
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("code"), "_text");
    this.setInputsInline(false);
    this.setOutput(true);
    this.setColour("#4a235a")}
}
Blockly.html['balise_get'] = function (block) {
    return block.getFieldValue('_text')
}
// HTML 
Blockly.Blocks['html'] = {
    init: function () {
        this.jsonInit({
            "message0": '<html> %1 %2 </html>',
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "document"
                }
            ],
            "colour": "#4a235a"
        });
    }
}
Blockly.html['html'] = function (block) {
    var statements_content = Blockly.html.statementToCode(block, 'content');
    var code = '<!DOCTYPE html>\n<html lang="fr">\n' + statements_content + '</html>';
    return code
}
// Head 
Blockly.Blocks['head'] = {init:function(){
    this.jsonInit({
            "message0": '<head> %1 %2 </head>',
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "header"
                }
            ],
			"previousStatement": "document",
            "nextStatement": "document",
            "colour": "#4a235a"
        });
	}
}
Blockly.html['head'] = function (block) {
    var text_content = Blockly.html.statementToCode(block, 'content');
    var code = '<head>\n' + text_content + '</head>\n';
    return code
}
// Title 
Blockly.Blocks['title'] = {
    init:function(){
		this.jsonInit({
            "message0": '<title> %1 </title>',
            "args0": [
                {
                    "type": "field_input",
                    "name": "_text",
                    "text": ""
                }
            ],
            "previousStatement": "header",
            "nextStatement": "header",
            "colour": "#4a235a"
        });
	}
}
Blockly.html['title'] = function (block) {
	nameFile = escapeTitle(block.getFieldValue('_text'));
    return '<title>' + nameFile + '</title>\n<meta charset="utf-8">\n';
}
// Body 
Blockly.Blocks['body'] = {
    init: function () {
        this.jsonInit({
            "message0": '<body> %1 %2 </body>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
					"check": ["html", "textcontainer"]
                }
            ],
            "previousStatement": "document",
            "colour": "#4a235a"
        });
    }
}
Blockly.html['body'] = function (block) {
    var statements_content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC).trim();
    var code = '<body' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + statements_content + '</body>\n';
    return code
}
// br 
Blockly.Blocks['linebreak'] = {
    init: function () {
        this.jsonInit({
            "message0": '<br>',
            "previousStatement": ["html", "textcontainer"],
            "nextStatement": ["html", "textcontainer"],
            "colour": "#4a235a"
        });
    }
}
Blockly.html['linebreak'] = function (block) {
    return "<br>\n";
}
// hr 
Blockly.Blocks['hline'] = {
    init: function () {
        this.jsonInit({
            "message0": '<hr> %1',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                }
            ],
            "previousStatement": ["html", "textcontainer"],
            "nextStatement": ["html", "textcontainer"],
            "colour": "#4a235a"
        });
    }
}
Blockly.html['hline'] = function (block) {
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    return "<hr" + (block_modifier ? " " + block_modifier.trim() : "") + ">\n";
}
//////////////////////// EN BLOC ////////////////////////
// Paragraph 
Blockly.Blocks['paragraph'] = {
    init: function () {
        this.jsonInit({
            "message0": '<p> %1 %2 </p>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "textcontainer"
                }
            ],
            "previousStatement": ["html", "textcontainer"],
            "nextStatement": ["html", "textcontainer"],
            "colour": "#787746"
        });
    }
}
Blockly.html['paragraph'] = function (block) {
    var statements_content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier');
    return '<p' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + statements_content + '</p>\n';
}
// Header
Blockly.Blocks['header'] = {
    init: function () {
        this.jsonInit({
            "message0": '<h%1> %2 %3 </>',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "size",
                    "options": [
                        [
                            "1",
                            "1"
                        ],
                        [
                            "2",
                            "2"
                        ],
                        [
                            "3",
                            "3"
                        ],
                        [
                            "4",
                            "4"
                        ],
                        [
                            "5",
                            "5"
                        ],
                        [
                            "6",
                            "6"
                        ],
                    ]
                },
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "textcontainer"
                }
            ],
            "previousStatement": ["html", "textcontainer"],
            "nextStatement": ["html", "textcontainer"],
            "colour": "#787746"
        });
    }
}
Blockly.html['header'] = function (block) {
    var statements_content = Blockly.html.statementToCode(block, 'content');
    var header_size = block.getFieldValue("size");
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC).trim();
    return '<h' + header_size + ' ' + block_modifier.trim() + '>\n' + statements_content + '</h' + header_size + '>\n';
}
// map
Blockly.Blocks['map'] = {
    init: function () {
        this.jsonInit({
            "message0": '<div id=%1> </div> %2',
            "args0": [
                {
                    "type": "field_input",
                    "name": "id",
                    "text": "map"
                },
				{
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                }
            ],
            "previousStatement": "html",
            "nextStatement": "html",
            "colour": "#787746"
        })
    }
}
Blockly.html['map'] = function (block) {
	var div_id = block.getFieldValue("id");
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    return "<div id=\"" + div_id +"\""+ (block_modifier ? " " + block_modifier.trim() : "") + "></div>\n";
}
// Divider 
Blockly.Blocks['divider'] = {
    init: function () {
        this.jsonInit({
            "message0": '<div> %1 %2 </div>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": [
                        "html",
                        "textcontainer",
                        "form"
                    ]
                }
            ],
            "previousStatement": [
                "textcontainer",
                "html",
                "form"
            ],
            "nextStatement": [
                "textcontainer",
                "html",
                "form"
            ],
            "colour": "#787746"
        });
    }
}
Blockly.html['divider'] = function (block) {
    var statements_content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    var code = '<div' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + statements_content + '</div>\n';
    return code
}
// Canvas
Blockly.Blocks['canvas'] = {
    init: function () {
        this.jsonInit({
            "message0": '<canvas width=%1 height=%2> </canvas>%3',
            "args0": [
                {
                    "type": "field_input",
                    "name": "width",
                    "text": "400"
                },
                {
                    "type": "field_input",
                    "name": "height",
                    "text": "300"
                },
				{
                    "type": "input_value",
                    "name": "content"
                }
            ],
            "previousStatement": [
                "textcontainer",
                "html",
                "form"
            ],
            "nextStatement": [
                "textcontainer",
                "html",
                "form"
            ],
            "colour": "#787746"
        });
    }
}
Blockly.html['canvas'] = function (block) {
	var val_content = Blockly.html.statementToCode(block, "content", Blockly.html.ORDER_ATOMIC).trim();
    return '<canvas id="jcanvas" width="'+block.getFieldValue("width")+'" height="'+block.getFieldValue("height")+'" '+val_content+'></canvas>\n'
}
//////////////////////// EN LIGNE ////////////////////////
// Link
Blockly.Blocks['link'] = {
    init: function () {
        this.jsonInit({
            "message0": '<a href=%1> %2 %3 </a>',
            "args0": [
                {
                    "type": "field_input",
                    "name": "target",
                    "text": ""
                },
                {
                    "type": "input_value",
                    "name": "modifier",
                    "checked": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "textcontainer"
                }
            ],
            "previousStatement": "textcontainer",
            "nextStatement": "textcontainer",
            "colour": "#006000"
        })
    }
}
Blockly.html['link'] = function (block) {
    var text = Blockly.html.statementToCode(block, 'content');
    var link = escapeTitle(block.getFieldValue('target'));
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    return '<a href="' + link + '"' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + text + '</a>\n';
}
// Span 
Blockly.Blocks['span'] = {
    init: function () {
        this.jsonInit({
            "message0": '<span> %1 %2 </span>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "textcontainer"
                }
            ],
            "previousStatement": "textcontainer",
            "nextStatement": "textcontainer",
            "colour": "#006000"
        });
    }
}
Blockly.html['span'] = function (block) {
    var content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    return '<span' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + content + '</span>\n';
}
// Text modifier
Blockly.Blocks['textmod'] = {
    init: function () {
        this.jsonInit({
            "message0": '<%1> %2 %3 </>',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "type",
                    "options": [
                        [
                            "strong",
                            "strong"
                        ],
                        [
                            "em",
                            "em"
                        ],
                        [
                            "mark",
                            "mark"
                        ],
                        [
                            "del",
                            "del"
                        ],
                        [
                            "ins",
                            "ins"
                        ],
                        [
                            "sub",
                            "sub"
                        ],
                        [
                            "sup",
                            "sup"
                        ],
                        [
                            "q",
                            "q"
                        ]
                    ]
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "content"
                }
            ],
            "previousStatement": "textcontainer",
            "nextStatement": "textcontainer",
            "colour": "#006000"
        });
    }
}
Blockly.html['textmod'] = function (block) {
    var content = Blockly.html.statementToCode(block, 'content');
    var type = block.getFieldValue("type");
    return '<' + type + '>\n' + content + '</' + type + '>\n';
}
// Button 
Blockly.Blocks['button'] = {
    init: function () {
        this.jsonInit({
            "message0": '<button> %1 %2 </button>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "textcontainer"
                }
            ],
            "previousStatement": "textcontainer",
            "nextStatement": "textcontainer",
            "colour": "#006000"
        });
    }
}
Blockly.html['button'] = function (block) {
    var statements_content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    var code = '<button' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + statements_content + '</button>\n';
    return code
}
// Icon 
Blockly.Blocks['icon'] = {
    init: function () {
        this.jsonInit({
            "message0": '<i class=%1> </i> %2',
            "args0": [
                {
                    "type": "field_input",
                    "name": "content",
                    "text": "question-circle"
                },
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                }
            ],
            "previousStatement": "textcontainer",
            "nextStatement": "textcontainer",
            "colour": "#006000"
        });
    }
}
Blockly.html['icon'] = function (block) {
    var text_content = block.getFieldValue('content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    var code = '<i class="fa fa-' + text_content + '"'+ (block_modifier ? " " + block_modifier.trim() : "") +'></i>\n';
    return code
}
// progress 
Blockly.Blocks['progress'] = {
    init: function () {
        this.jsonInit({
            "message0": '<progress value=%1> </progress> %2',
            "args0": [
				{
                    "type": "field_input",
                    "name": "value",
                    "text": "50"
                },
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                }
            ],
            "previousStatement": "textcontainer",
            "nextStatement": "textcontainer",
            "colour": "#006000"
        });
    }
}
Blockly.html['progress'] = function (block) {
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    var code = '<progress value="' + block.getFieldValue('value') + '" max="100"'+ (block_modifier ? " " + block_modifier.trim() : "") +'></progress>\n';
    return code
}
///////////////////////// MODIFIERS ////////////////////////
// Style modifier
Blockly.Blocks['stylearg'] = {
    init: function () {
        this.jsonInit({
            "message0": 'style=%1 %2',
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "stylecontent"

                }
            ],
            "colour": "#727272",
            "output": "attributes"
        });
    }
}
Blockly.html['stylearg'] = function (block) {
    var statement = Blockly.html.statementToCode(block, 'content').trim();
    return 'style="' + statement + '" ';
}
// attr_title
Blockly.Blocks['attr_title'] = {
    init: function () {
        this.jsonInit({"message0": 'title=%1 %2',
            "args0": [
                {
                    "type": "field_input",
                    "name": "value",
                    "text": ""
                },
				{
				  "type": "input_value",
				  "name": "in"
				}
            ],
            "output": "attributes",
            "colour": "#727272"
        });
    }
}
Blockly.html['attr_title'] = function (block) {
    var value = block.getFieldValue('value');
    var argument = Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE);
    return 'title="' + fullEscape(value) + '"' + argument;
}
// Class
Blockly.Blocks['class'] = {
    init: function () {
        this.jsonInit({
            "message0": 'class=%1 %2',
            "args0": [
                {
                    "type": "field_input",
                    "name": "content",
                    "text": ""
                },
				{
				  "type": "input_value",
				  "name": "in"
				}
            ],
            "colour": "#727272",
            "output": "attributes"
        });
    }
}
Blockly.html['class'] = function (block) {
    var text_content = block.getFieldValue('content');
    var argument = Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE);
    return 'class="' + looseEscape(text_content) + '"' + argument ;
}
// Class=
Blockly.Blocks['class_'] = {
    init: function () {
        this.jsonInit({
            "message0": 'class=%1',
            "args0": [{
				  "type": "input_value",
				  "name": "in"
				}],
            "colour": "#727272",
            "output": "attributes"
        });
    }
}
Blockly.html['class_'] = function (block) {
    var argument = Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE);
    return 'class="' + argument + '"';
}
// ID
Blockly.Blocks['id'] = {
    init: function () {
        this.jsonInit({
            "message0": 'id=%1 %2',
            "args0": [
                {
                    "type": "field_input",
                    "name": "content",
                    "text": ""
                },
				{
				  "type": "input_value",
				  "name": "in"
				}
            ],
            "colour": "#727272",
            "output": "attributes"
        });
    }
}
Blockly.html['id'] = function (block) {
    var text_content = block.getFieldValue('content');
    var argument = Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE);
    return 'id="' + looseEscape(text_content) + '"' + argument ;
}
// Empty Argument
Blockly.Blocks['emptyarg'] = {
    init: function () {
        this.jsonInit({
            "message0": '%1=%2 %3',
            "args0": [
                {
                    "type": "field_input",
                    "name": "property",
                    "text": "width"
                },
                {
                    "type": "field_input",
                    "name": "value",
                    "text": "50%"
                },
				{
				  "type": "input_value",
				  "name": "in"
				}
            ],
            "colour": "#727272",
            "output": "attributes"
        });
    }
}
Blockly.html['emptyarg'] = function (block) {
    var property = block.getFieldValue('property');
    var value = block.getFieldValue('value');
    var argument = Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE);
    return property + '="' + looseEscape(value) + '"' + argument ;
}
// tabindex
Blockly.Blocks['tabindex'] = {
    init: function () {
        this.jsonInit({
            "message0": 'tabindex=%1 %2',
            "args0": [
                {
                    "type": "field_input",
                    "name": "value",
                    "text": ""
                },
				{
				  "type": "input_value",
				  "name": "in"
				}
            ],
            "output": "attributes",
            "colour": "#727272"
        });
    }
}
Blockly.html['tabindex'] = function (block) {
    var value = block.getFieldValue('value');
    var argument = Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE);
    return 'tabindex="' + fullEscape(value) + '"' + argument;
}
// selected
Blockly.Blocks['selected'] = {
    init: function () {
        this.jsonInit({
            "message0": 'selected%1',
            "args0": [
				{
				  "type": "input_value",
				  "name": "in"
				}
            ],
            "output": "attributes",
            "colour": "#727272"
        });
    }
}
Blockly.html['selected'] = function (block) {
    var argument = Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE);
    return ' selected' + argument;
}
// role 
Blockly.Blocks['role'] = {
    init: function () {
        this.jsonInit({
            "message0": 'role=%1 %2',
            "args0": [
                {
                    "type": "field_input",
                    "name": "value",
                    "text": ""
                },
				{
				  "type": "input_value",
				  "name": "in"
				}
            ],
            "output": "attributes",
            "colour": "#727272"
        });
    }
}
Blockly.html['role'] = function (block) {
    var value = block.getFieldValue('value');
    var argument = Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE);
    return 'role="' + fullEscape(value) + '"' + argument;
}
//////////////////////// TEXT ////////////////////////
// Empty text
Blockly.Blocks['emptytext'] = {
    init: function () {
        this.jsonInit({
            "message0": '%1',
            "args0": [
                {
                    "type": "field_input",
                    "name": "content",
                    "text": "abc"
                }
            ],
            "previousStatement": "textcontainer",
            "nextStatement": "textcontainer",
            "colour": "#BBBBBB"
        });
    }
}
Blockly.html['emptytext'] = function (block) {
    var text_content = block.getFieldValue('content');
    return looseEscape(text_content)+"\n"
}
//////////////////////// Table ////////////////////////
// Table tag
Blockly.Blocks['table'] = {
    init: function () {
        this.jsonInit({
            "message0": '<table> %1 %2 </table>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "table"
                }
            ],
            "previousStatement": ["html", "textcontainer"],
            "nextStatement": ["html", "textcontainer"],
            "colour": "#804000"
        });
    }
}
Blockly.html['table'] = function (block) {
    var content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    return '<table' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + content + '</table>\n';
}
// TR tag
Blockly.Blocks['tablerow'] = {
    init: function () {
        this.jsonInit({
            "message0": '<tr> %1 %2 </tr>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "tablerow"
                }
            ],
            "previousStatement": "table",
            "nextStatement": "table",
            "colour": "#804000"
        });
    }
}
Blockly.html['tablerow'] = function (block) {
    var content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    return '<tr' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + content + '</tr>\n';
}
// TH tag
Blockly.Blocks['tableheading'] = {
    init: function () {
        this.jsonInit({
            "message0": '<th> %1 %2 </th>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": ["html", "textcontainer"]
                }
            ],
            "previousStatement": ["tablerow", "thead", "tbody"],
            "nextStatement": ["tablerow", "thead", "tbody"],
            "colour": "#804000"
        });
    }
}
Blockly.html['tableheading'] = function (block) {
    var content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    return '<th' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + content + '</th>\n';
}
// TD tag
Blockly.Blocks['tabledata'] = {
    init: function () {
        this.jsonInit({
            "message0": '<td> %1 %2 </td>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": ["html", "textcontainer"]
                }
            ],
            "previousStatement": ["tablerow", "thead", "tbody"],
            "nextStatement": ["tablerow", "thead", "tbody"],
            "colour": "#804000"
        });
    }
}
Blockly.html['tabledata'] = function (block) {
    var content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    return '<td' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + content + '</td>\n';
}
//////////////////////// FORMS ////////////////////////
// Form tag
Blockly.Blocks['form'] = {
    init: function () {
        this.jsonInit({
            "message0": '<form> %1 %2 </form>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": ["html", "textcontainer"]

                }
            ],
            "previousStatement": ["html", "textcontainer"],
            "nextStatement": ["html", "textcontainer"],
            "colour": "#154360"
        });
    }
}
Blockly.html['form'] = function (block) {
    var content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    return '<form' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + content + '</form>\n';
}
// Input tag
Blockly.Blocks['input'] = {
    init: function () {
        this.jsonInit({
            "message0": '<input type=%1 value=%2 name=%3 > %4',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "type",
                    "options": [
                        [
                            "submit",
                            "submit"
                        ],
                        [
                            "checkbox",
                            "checkbox"
                        ],
                        [
                            "color",
                            "color"
                        ],
                        [
                            "date",
                            "date"
                        ],
                        [
                            "email",
                            "email"
                        ],
                        [
                            "hidden",
                            "hidden"
                        ],
                        [
                            "number",
                            "number"
                        ],
                        [
                            "password",
                            "password"
                        ],
                        [
                            "radio",
                            "radio"
                        ],
                        [
                            "range",
                            "range"
                        ],
                        [
                            "text",
                            "text"
                        ],
                        [
                            "time",
                            "time"
                        ]
                    ]
                },
                {
                    "type": "field_input",
                    "name": "value",
                    "text": ""
                },
                {
                    "type": "field_input",
                    "name": "name",
                    "text": ""
                },
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes",
                }
            ],
            "previousStatement": ["html", "textcontainer"],
            "nextStatement": ["html", "textcontainer"],
            "colour": "#154360"
        });
    }
}
Blockly.html['input'] = function (block) {
    var type = block.getFieldValue('type');
    var value = looseEscape(block.getFieldValue('value'));
    var name = looseEscape(block.getFieldValue('name'));

    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    return '<input type="' + type + '" value="' + value + '" name="' + name + '"' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n';
}
// Label tag
Blockly.Blocks['label'] = {
    init: function () {
        this.jsonInit({
            "message0": '<label for=%1> %2 %3 </label>',
            "args0": [
                {
                    "type": "field_input",
                    "name": "for",
                    "text": ""
                },
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "textcontainer"
                }
            ],
            "previousStatement": [
                "html",
				"textcontainer",
                "form"
            ],
            "nextStatement": [
                "html",
				"textcontainer",
                "form"
            ],
            "colour": "#154360"
        });
    }
}
Blockly.html['label'] = function (block) {
    var labelFor = block.getFieldValue('for');
    var content = Blockly.html.statementToCode(block, 'content');

    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    return '<label for="' + looseEscape(labelFor) + '"' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + content + '</label>\n';
}
// select tag
Blockly.Blocks['select'] = {
    init: function () {
        this.jsonInit({
            "message0": '<select> %1 %2 </select>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "option"
                }
            ],
            "previousStatement": "textcontainer",
            "nextStatement": "textcontainer",
            "colour": "#154360"
        });
    }
}
Blockly.html['select'] = function (block) {
    var content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    return '<select' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + content + '</select>\n';
}
// option tag
Blockly.Blocks['option'] = {
    init: function () {
        this.jsonInit({
            "message0": '<option> %1 %2 </option>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "textcontainer"
                }
            ],
            "previousStatement": "option",
            "nextStatement": "option",
            "colour": "#154360"
        });
    }
}
Blockly.html['option'] = function (block) {
    var content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC).trim();
    return '<option' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + content + '</option>\n';
}
// textarea
Blockly.Blocks['textarea'] = {
    init: function () {
        this.jsonInit({
            "message0": '<textarea rows=%1 cols=%2> </textarea>%3',
            "args0": [
                {
                    "type": "field_input",
                    "name": "width",
                    "text": "16"
                },
                {
                    "type": "field_input",
                    "name": "height",
                    "text": "40"
                },
				{
                    "type": "input_value",
                    "name": "content"
                }
            ],
            "previousStatement": [
                "textcontainer",
                "html",
                "form"
            ],
            "nextStatement": [
                "textcontainer",
                "html",
                "form"
            ],
            "colour": "#154360"
        });
    }
}
Blockly.html['textarea'] = function (block) {
    return '<textarea cols="'+block.getFieldValue("height")+'" rows="'+block.getFieldValue("width")+'"'+Blockly.html.statementToCode(block, 'content', Blockly.html.ORDER_NONE)+'></textarea>\n'
}
//////////////////////// LIST ////////////////////////
// OL tag
Blockly.Blocks['orderedlist'] = {
    init: function () {
        this.jsonInit({
            "message0": '<ol> %1 %2 </ol>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "list"
                }
            ],
            "previousStatement": ["html", "textcontainer", "list"],
            "nextStatement": ["html", "textcontainer", "list"],
            "colour": "#FD6C9E"
        });
    }
}
Blockly.html['orderedlist'] = function (block) {
    var content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    var code = '<ol' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + content + '</ol>\n';
    return code
}
// UL tag
Blockly.Blocks['unorderedlist'] = {
    init: function () {
        this.jsonInit({
            "message0": '<ul> %1 %2 </ul>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "list"
                }
            ],
            "previousStatement": ["html", "textcontainer", "list"],
            "nextStatement": ["html", "textcontainer", "list"],
            "colour": "#FD6C9E"
        });
    }
}
Blockly.html['unorderedlist'] = function (block) {
    var content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    var code = '<ul' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + content + '</ul>\n';
    return code
}
// LI tag
Blockly.Blocks['listitem'] = {
    init: function () {
        this.jsonInit({
            "message0": '<li> %1 %2 </li>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "textcontainer"
                }
            ],
            "previousStatement": "list",
            "nextStatement": "list",
            "colour": "#FD6C9E"
        });
    }
}
Blockly.html['listitem'] = function (block) {
    var content = Blockly.html.statementToCode(block, 'content');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    var code = '<li' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n' + content + '</li>\n';
    return code
}
//////////////////////// MEDIA ////////////////////////
// Audios tag
Blockly.Blocks['audios'] = {
    init: function () {
        this.jsonInit({
            "message0": '<audio src=%1 loop%2 autoplay%3 > %4',
            "args0": [
                {
                    "type": "field_input",
                    "name": "source",
                    "text": ""
                },
                {
                    "type": "field_checkbox",
                    "name": "loop",
                    "checked": false
                },
                {
                    "type": "field_checkbox",
                    "name": "autoplay",
                    "checked": false
                },
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                }
            ],
            "previousStatement": ["html", "textcontainer"],
            "nextStatement": ["html", "textcontainer"],
            "colour": "#00CC00"
        });
    }
}
Blockly.html['audios'] = function (block) {
    var source = block.getFieldValue('source');
    if (source.substr(0, 4) != "http") source = 'media/' + source;
	var loop = block.getFieldValue('loop');
    var autoplay = block.getFieldValue('autoplay');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    var code = '<audio' + (block_modifier ? " " + block_modifier.trim() : "");
    if (loop === "TRUE") code += ' loop';
    if (autoplay === "TRUE") code += ' autoplay';
    code += ' controls';
	code += '>\n  <source src="' + source + '" type="audio/mpeg">\n</audio>\n';
    return code 
}
// videos tag
Blockly.Blocks['videos'] = {
    init: function () {
        this.jsonInit({
            "message0": '<video youtube.com/watch?v=%1> %2',
            "args0": [
                {
                    "type": "field_input",
                    "name": "source",
                    "text": ""
                },
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                }
            ],
            "previousStatement": ["html", "textcontainer"],
            "nextStatement": ["html", "textcontainer"],
            "colour": "#00CC00"
        });
    }
}
Blockly.html['videos'] = function (block) {
    var source = block.getFieldValue('source');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    var code = '<object' + (block_modifier ? " " + block_modifier.trim() : "");
    code += ' data="https://www.youtube.com/embed/' + source + '"></object>\n';
    return code
}
// Video file tag
Blockly.Blocks['video_file'] = {
    init: function () {
        this.jsonInit({
            "message0": '<video src=%1 loop%2 autoplay%3> %4',
            "args0": [
                {
                    "type": "field_input",
                    "name": "source",
                    "text": ""
                },
                {
                    "type": "field_checkbox",
                    "name": "loop",
                    "checked": false
                },
                {
                    "type": "field_checkbox",
                    "name": "autoplay",
                    "checked": false
                },
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                }
            ],
            "previousStatement": ["html", "textcontainer"],
            "nextStatement": ["html", "textcontainer"],
            "colour": "#00CC00"
        });
    }
}
Blockly.html['video_file'] = function (block) {
    var source = block.getFieldValue('source');
	if (source.substr(0, 4) != "http") source = 'media/' + source;
    var loop = block.getFieldValue('loop');
    var autoplay = block.getFieldValue('autoplay');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    var code = '<video' + (block_modifier ? " " + block_modifier.trim() : "");
    if (loop === "TRUE") code += ' loop' ;
    if (autoplay === "TRUE") code += ' autoplay' ;
    code += ' controls';
    var type = "video/mp4";
    code += '>\n  <source src="' + source + '" type="' + type + '">\n</video>\n';
    return code
}
// Image tag
Blockly.Blocks['image'] = {
    init: function () {
        this.jsonInit({
            "message0": '<img src=%1> %2',
            "args0": [
                {
                    "type": "field_input",
                    "name": "source",
                    "text": ""
                },
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "attributes"
                }
            ],
            "previousStatement": ["html", "textcontainer"],
            "nextStatement": ["html", "textcontainer"],
            "colour": "#00CC00"
        });
    }
}
Blockly.html['image'] = function (block) {
    var source = block.getFieldValue('source');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    if (source.substr(0, 4) != "http") source = 'media/' + source;
	var code = '<img src="' + source + '"' + (block_modifier ? " " + block_modifier.trim() : "") + '>\n';
    return code
}
