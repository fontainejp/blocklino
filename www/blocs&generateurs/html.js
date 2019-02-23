"use strict";
goog.provide("Blockly.Blocks.arduino");
goog.require("Blockly.Blocks");
  ////////////
 /*  html  */
////////////
Blockly.Blocks['title'] = {
    init: function() {
        this.jsonInit({
            "message0": '<title> %1 </title>',
            "args0": [
                {
                    "type": "field_input",
                    "name": "value",
                    "text": "Titre de l'onglet"
                }
            ],
            "previousStatement": "header",
            "nextStatement": "header",
            "colour": "#4a235a",
            "tooltip": "Title tag",
            "helpUrl": "https://www.w3schools.com/tags/tag_title.asp"
        });
    }
};
Blockly.Arduino['title'] = function(block) {
    var value = block.getFieldValue('value');
    var code = 'client.println("<meta charset=\\"UTF-8\\">");\n';
    code += 'client.println("<title>'+looseEscape(value)+'</title>");\n';
    return code
};
//////////////
Blockly.Blocks['emptytext'] = {
    init: function() {
        this.jsonInit({
            "message0": '%1',
            "args0": [
                {
                    "type": "field_input",
                    "name": "content",
                    "text": "un texte."
                }
            ],
            "previousStatement": "textcontainer",
            "nextStatement": "textcontainer",
            "colour": "#FD6C9E",
            "tooltip": "Text",
            "helpUrl": ""
        });
    }
};
Blockly.Arduino['emptytext'] = function(block) {
    var text_content = block.getFieldValue('content');
    return looseEscape(text_content)
};
//////////////
Blockly.Blocks['textmod'] = {
    init: function() {
        this.jsonInit({
            "message0": '< %1 > %2 %3 </>',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "type",
                    "options": [
                        [
                            "gras",
                            "strong"
                        ],
                        [
                            "italique",
                            "em"
                        ],
                        [
                            "indice"
                        ],
                        [
                            "exposant",
                            "sup"
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
            "colour": "#727272",
            "tooltip": "Text modifier - used to achieve formatting effects with text",
            "helpUrl": "https://www.w3schools.com/html/html_formatting.asp"
        });
    }
};
Blockly.Arduino['textmod'] = function(block){
    var content = Blockly.Arduino.statementToCode(block,'content');
    var type = block.getFieldValue("type");
    return '<' + type + '>' + content + '</' + type + '>'
};
//////////////
Blockly.Blocks['paragraph'] = {
    init: function() {
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
            "previousStatement": "html",
            "nextStatement": "html",
            "colour": "#4a235a",
            "tooltip": "Paragraph tag",
            "helpUrl": "https://www.w3schools.com/tags/tag_p.asp"
        });
    }
};
Blockly.Arduino['paragraph'] = function(block) {
    var statements_content = Blockly.Arduino.statementToCode(block, 'content');
    var block_modifier = Blockly.Arduino.statementToCode(block, 'modifier');
    return 'client.println("<p' + block_modifier + '>' + statements_content + '</p>");\n'
};
//////////////
Blockly.Blocks['header'] = {
    init: function() {
        this.jsonInit({
            "message0": '<h %1 > %2 %3 </h>',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "size",
                    "options": [["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],
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
            "previousStatement": "html",
            "nextStatement": "html",
            "colour": "#4a235a",
            "tooltip": "Header tag",
            "helpUrl": "https://www.w3schools.com/tags/tag_hn.asp"
        });
    }
};
Blockly.Arduino['header'] = function(block) {
    var statements_content = Blockly.Arduino.statementToCode(block, 'content');
    var header_size = block.getFieldValue("size");
    var block_modifier = Blockly.Arduino.statementToCode(block, 'modifier', Blockly.Arduino.ORDER_ATOMIC);
    return 'client.println("<h' + header_size + block_modifier + '>' + statements_content + '</h' + header_size + '>");\n'
};
//////////////
Blockly.Blocks['link'] = {
    init: function() {
        this.jsonInit({
            "message0": '<a href=%1 > %2 %3 </a>',
            "args0": [
                {
                    "type": "field_input",
                    "name": "target",
                    "text": "http://"
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "textcontainer"
                }
            ],
            "previousStatement": "textcontainer",
            "nextStatement": "textcontainer",
            "colour": "#727272",
            "tooltip": "Paragraph tag",
            "helpUrl": "https://www.w3schools.com/tags/tag_p.asp"
        });
    }
};
Blockly.Arduino['link'] = function(block){
    var text = Blockly.Arduino.statementToCode(block, 'content');
    var link = URLInput(block.getFieldValue('target'));
    var block_modifier = Blockly.Arduino.statementToCode(block, 'modifier', Blockly.Arduino.ORDER_ATOMIC);
    return '<a href=\\"' + link + '\\" target=\\"_blank\\"' + block_modifier + '>' + text + '</a>'
};
//////////////
Blockly.Blocks['table'] = {
    init: function() {
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
            "previousStatement": "html",
            "nextStatement": "html",
            "colour": "#4a235a",
            "tooltip": "Table tag",
            "helpUrl": "https://www.w3schools.com/tags/tag_table.asp"
        });
    }
};
Blockly.Arduino['table'] = function(block){
    var content = Blockly.Arduino.statementToCode(block, 'content');
    var block_modifier = Blockly.Arduino.statementToCode(block, 'modifier', Blockly.Arduino.ORDER_ATOMIC);
    return 'client.println("<table' + block_modifier + '>' + content + '</table>");\n'
};
//////////////
Blockly.Blocks['tablerow'] = {
    init: function() {
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
            "colour": "#727272",
            "tooltip": "Table row tag",
            "helpUrl": "https://www.w3schools.com/tags/tag_tr.asp"
        });
    }
};
Blockly.Arduino['tablerow'] = function(block){
    var content = Blockly.Arduino.statementToCode(block, 'content');
    var block_modifier = Blockly.Arduino.statementToCode(block, 'modifier', Blockly.Arduino.ORDER_ATOMIC);
    return '<tr' + block_modifier + '>' + content + '</tr>'
};
//////////////
Blockly.Blocks['tableheading'] = {
    init: function() {
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
                    "check": ["html","textcontainer"]
                }
            ],
            "previousStatement": "tablerow",
            "nextStatement": "tablerow",
            "colour": "#727272",
            "tooltip": "Table heading tag",
            "helpUrl": "https://www.w3schools.com/tags/tag_th.asp"
        });
    }
};
Blockly.Arduino['tableheading'] = function(block){
    var content = Blockly.Arduino.statementToCode(block, 'content');
    var block_modifier = Blockly.Arduino.statementToCode(block, 'modifier', Blockly.Arduino.ORDER_ATOMIC);
    return '<th' + block_modifier + '>' + content + '</th>'
};
//////////////
Blockly.Blocks['tabledata'] = {
    init: function() {
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
                    "check": ["html","textcontainer"]
                }
            ],
            "previousStatement": "tablerow",
            "nextStatement": "tablerow",
            "colour": "#727272",
            "tooltip": "Table data tag",
            "helpUrl": "https://www.w3schools.com/tags/tag_td.asp"
        });
    }
};
Blockly.Arduino['tabledata'] = function(block){
    var content = Blockly.Arduino.statementToCode(block, 'content');
    var block_modifier = Blockly.Arduino.statementToCode(block, 'modifier', Blockly.Arduino.ORDER_ATOMIC);
    return '<td' + block_modifier + '>' + content + '</td>'
};
//////////////
Blockly.Blocks['image'] = {
    init: function() {
        this.jsonInit({
            "message0": '<img src=%1 > %2',
            "args0": [
                {
                    "type": "field_input",
                    "name": "source",
                    "text": "http://"
                },
                {
                    "type": "input_dummy"
                }
            ],
            "previousStatement": "html",
            "nextStatement": "html",
            "colour": "#4a235a",
            "tooltip": "Image tag",
            "helpUrl": "https://www.w3schools.com/tags/tag_img.asp"
        });
    }
};
Blockly.Arduino['image'] = function(block){
    var source = block.getFieldValue('source');
    var code = 'client.println("<img src=\\"' + URLInput(source) + '\\">");\n';
    return code
};
//////////////
Blockly.Blocks['args'] = {
    init: function() {
        this.jsonInit({
            "message0": 'style : %1 %2',
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
            "colour": "#00CC00",
            "output": "attributes",
            "tooltip": "Additional attributes",
            "helpUrl": "https://www.w3schools.com/html/html_attributes.asp"
        });
    }
};
Blockly.Arduino['args'] = function(block) {
    var code = Blockly.Arduino.statementToCode(block, 'content');
    return 'style=\\"' + code + '\\"'
};
//////////////
Blockly.Blocks['color'] = {
    init: function() {
        this.jsonInit({
            "message0": 'color: %1 ;',
            "args0": [
                {
                    "type": "field_colour",
                    "name": "value",
                    "colour": "#339999"

                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00CC00",
            "tooltip": "CSS Color",
            "helpUrl": "https://www.w3schools.com/cssref/pr_text_color.asp"
        });
    }
};
Blockly.Arduino['color'] = function(block){
    var color = block.getFieldValue('value');
    return 'color : ' + color + ' ; '
};
//////////////
Blockly.Blocks['bgcolor'] = {
    init: function() {
        this.jsonInit({
            "message0": 'background-color: %1 ;',
            "args0": [
                {
                    "type": "field_colour",
                    "name": "value",
                    "colour": "#339999"
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00CC00",
            "tooltip": "CSS Background-Color",
            "helpUrl": "https://www.w3schools.com/css/css_background.asp"
        });
    }
};
Blockly.Arduino['bgcolor'] = function(block){
    var color = block.getFieldValue('value');
    return 'background-color : ' + color + ' ; '
};
//////////////
Blockly.Blocks['textalign'] = {
    init: function(){
        this.jsonInit({
            "message0": "text-align: %1 ;",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "value",
                    "options": [
                        ["center", "center"],
                        ["left", "left"],
                        ["right", "right"],
                        ["justify", "justify"]
                    ]
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00CC00",
            "tooltip": "CSS Text-align",
            "helpUrl": "https://www.w3schools.com/cssref/pr_text_text-align.asp"
        })
    }
};
Blockly.Arduino['textalign'] = function(block){
    var value = block.getFieldValue('value');
    return 'text-align : ' + value + ' ; '
};
//////////////
Blockly.Blocks['border'] = {
    init: function() {
        this.jsonInit({
            "message0": 'border: %1 px %2 %3 ;',
            "args0": [
                {
                    "type": "field_number",
                    "name": "width",
                    "value": 5,
                    "min": 1
                },
                {
                    "type": "field_dropdown",
                    "name": "type",
                    "options": [
                        [
                            "none",
                            "none"
                        ],
                        [
                            "solid",
                            "solid"
                        ],
                        [
                            "dotted",
                            "dotted"
                        ],
                        [
                            "dashed",
                            "dashed"
                        ],
                        [
                            "double",
                            "double"
                        ],
                        [
                            "groove",
                            "groove"
                        ],
                        [
                            "ridge",
                            "ridge"
                        ],
                        [
                            "inset",
                            "inset"
                        ],
                        [
                            "outset",
                            "outset"
                        ]
                    ]
                },
                {
                    "type": "field_colour",
                    "name": "color",
                    "colour": "#000000"
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00CC00",
            "tooltip": "CSS Border",
            "helpUrl": "https://www.w3schools.com/css/css_border.asp"
        });
    }
};
Blockly.Arduino['border'] = function(block){
    var width = fullEscape(block.getFieldValue('width'));
    var type =  block.getFieldValue('type');
    var color = block.getFieldValue('color');
    return 'border : ' + width + 'px ' + type + ' ' + color + ' ; '
};
//////////////
Blockly.Blocks['input'] = {
    init: function() {
        this.jsonInit({
            "message0": '<input type=%1 value=%2 name=%3 >',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "type",
                    "options": [["checkbox","checkbox"],["radio","radio"],["submit","submit"],["text","text"]]
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
                    "type": "input_dummy"
                }
            ],
            "previousStatement": "form",
            "nextStatement": "form",
            "colour": "#4a235a",
            "tooltip": "Input tag",
            "helpUrl": "https://www.w3schools.com/tags/tag_input.asp"
        });
    }
};
Blockly.Arduino['input'] = function(block){
    var type = block.getFieldValue('type');
    var value = looseEscape(block.getFieldValue('value'));
    var name = looseEscape(block.getFieldValue('name'));
    var block_modifier = Blockly.Arduino.statementToCode(block, 'modifier', Blockly.Arduino.ORDER_ATOMIC);
    return '<input type=\\"' + type + '\\" value=\\"' + value + '\\" name=\\"' + name + '\\"' + block_modifier + '>';
};
//////////////
Blockly.Blocks['form'] = {
    init: function() {
        this.jsonInit({
            "message0": '<form action=%1 method=%2> %3 %4 </form>',
            "args0": [
				{
                    "type": "field_input",
                    "name": "action",
                    "text": "/"
                },
                {
                    "type": "field_dropdown",
                    "name": "method",
                    "options": [["GET","GET"],["POST","POST"],["PUT","PUT"]]
                },
				{
                    "type": "input_value",
                    "name": "modifier",
					"check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "form"
                }
            ],
            "previousStatement": "html",
            "nextStatement": "html",
            "colour": "#4a235a",
            "tooltip": "button tag",
            "helpUrl": "https://www.w3schools.com/tags/tag_img.asp"
        });
    }
};
Blockly.Arduino['form'] = function(block){
	var action = block.getFieldValue('action');
	var method = block.getFieldValue('method');
    var content = Blockly.Arduino.statementToCode(block, 'content');
    var block_modifier = Blockly.Arduino.statementToCode(block, 'modifier', Blockly.Arduino.ORDER_ATOMIC);
    return 'client.println("<form action=\\"' + action + '\\" method=\\"' + method + '\\" ' + block_modifier + '>' + content + '</form>");\n'
};
//////////////
Blockly.Blocks['label'] = {
    init: function() {
        this.jsonInit({
            "message0": '<label> %1 </label>',
            "args0": [
                {
                    "type": "field_input",
                    "name": "value",
                    "text": "un label"
                }
            ],
            "previousStatement": "form",
            "nextStatement": "form",
            "colour": "#4a235a",
            "tooltip": "button tag",
            "helpUrl": "https://www.w3schools.com/tags/tag_img.asp"
        });
    }
};
Blockly.Arduino['label'] = function(block){
    var content = block.getFieldValue('value');
    var block_modifier = Blockly.Arduino.statementToCode(block, 'modifier', Blockly.Arduino.ORDER_ATOMIC);
    return '<label' + block_modifier + '>' + content + '</label>'
}
//////////////
Blockly.Blocks['br'] = {
    init: function() {
        this.jsonInit({
            "message0": '<br>',
            "args0": [
                {
                    "type": "field_dummy"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#FD6C9E",
            "tooltip": "button tag",
            "helpUrl": "https://www.w3schools.com/tags/tag_img.asp"
        });
    }
};
Blockly.Arduino['br'] = function(block){
    return '<br>'
}
  ////////////////
 /*  function  */
////////////////
function fullEscape(input){
    return escape(input)
        .replace(/%25/g, "%");
}
function looseEscape(input) {
    return input
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
function CSSEscape(input) {
    return input
        .replace(/;/g, "")
        .replace(/{/g, "")
        .replace(/}/g, "")
        .replace(/</g, "")
        .replace(/:/g, "")
}
function URLInput(input){
    var URLRegex = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if(URLRegex.test(input)){
        return input;
    }
}