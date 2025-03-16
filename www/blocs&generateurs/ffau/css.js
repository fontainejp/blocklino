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
/////////////////  function  /////////////////
var URLRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
var hashRegex = /#([A-z0-9]*)/;
function hexEscape(str) {
    return str.replace(/[^A-Fa-f0-9]/, "").substring(0, 8).toLowerCase();
}
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
function CSSEscape(input) {
    return input
        .replace(/;/g, "")
        .replace(/{/g, "")
        .replace(/}/g, "")
        .replace(/</g, "")
}

/////////////////  CSS  /////////////////
// Style
Blockly.Blocks['style'] = {
    init: function () {
        this.jsonInit({
            "message0": '<style> %1 %2 </style>',
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "style"
                }
            ],
            "previousStatement": "header",
            "nextStatement": "header",
            "colour": "#00929F"
        });
    }
}
Blockly.html['style'] = function (block) {
    var statement = Blockly.html.statementToCode(block, 'content');
    return '<style>\n' + statement + '</style>\n';
}
// CSS Item
Blockly.Blocks['cssitem'] = {
    init: function () {
        this.jsonInit({
            "message0": '%1 { %2 %3 }',
            "args0": [
                {
                    "type": "field_input",
                    "name": "selector",
                    "text": "p"
                },
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "cssevents"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "stylecontent"
                }
            ],
            "previousStatement": "style",
            "nextStatement": "style",
            "colour": "#00929F"
        });
    }
}
Blockly.html['cssitem'] = function (block) {
    var stmt = Blockly.html.statementToCode(block, 'content');
    var mod = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    mod = mod.split(' ').join(''); // remove spaces
    var selector = CSSEscape(block.getFieldValue('selector'));
    return selector + mod + '{\n' + stmt + '}\n';
}
//Other tag
Blockly.Blocks['othercss'] = {
	init: function() {
		this.jsonInit({
			"message0": '%1 : %2',
			"args0": [
				{
					"type": "field_input",
					"name": "property",
					"text": "list-style-type"
				},
				{
					"type": "field_input",
					"name": "value",
					"text": "circle"
				}
			],
			"previousStatement": "stylecontent",
			"nextStatement": "stylecontent",
			"colour": "#00929F"
		});
	}
}
Blockly.html['othercss'] = function(block){
	var property = block.getFieldValue('property');
	var value = block.getFieldValue('value');
	var code = property+': '+value+';\n';
	return code;
}

/////////////////  texte  /////////////////
// Text decoration
Blockly.Blocks['textdecoration'] = {
    init: function () {
        this.jsonInit({
            "message0": "text-decoration : %1",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "value",
                    "options": [
                        ["overline", "overline"],
                        ["underline", "underline"],
						["under&over", "underline overline"],
						["none", "none"]
                    ]
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
        });
    }
}
Blockly.html['textdecoration'] = function (block) {
    var value = block.getFieldValue('value');
    return `text-decoration: ${value};\n`;
}
// Text transform
Blockly.Blocks['texttransform'] = {
    init: function () {
        this.jsonInit({
            "message0": "text-transform : %1",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "value",
                    "options": [
                        ["capitalize", "capitalize"],
                        ["uppercase", "uppercase"],
                        ["lowercase", "lowercase"],
                        ["none", "none"]
                    ]
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
        });
    }
}
Blockly.html['texttransform'] = function (block) {
    var value = block.getFieldValue('value');
    return `text-transform: ${value};\n`;
}
// Text INDENT
Blockly.Blocks['textindent'] = {
    init: function () {
        this.jsonInit({
            "message0": "text-indent : %1 px",
            "args0": [
                {
                    "type": "field_input",
                    "name": "value",
                    "text": "25"
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
        })
    }
}
Blockly.html['textindent'] = function (block) {
    var value = block.getFieldValue('value');
    return `text-indent: ${value}px;\n`;
}
// Text Align
Blockly.Blocks['textalign'] = {
    init: function () {
        this.jsonInit({
            "message0": "text-align : %1",
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
            "colour": "#00929F"
        })
    }
}
Blockly.html['textalign'] = function (block) {
    var value = block.getFieldValue('value');
    return `text-align: ${value};\n`;
}
// Font-family
Blockly.Blocks['fontfamily'] = {
    init: function () {
        this.jsonInit({
            "message0": 'font-family : %1',
            "args0": [
                {
                    "type": "field_input",
                    "name": "value",
                    "text": "Georgia"
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
        });
    }
}
Blockly.html['fontfamily'] = function (block) {
    var value = block.getFieldValue('value');
    return "font-family: '" + value + "';\n";
}
// Font-size
Blockly.Blocks['fontsize'] = {
    init: function () {
        this.jsonInit({
            "message0": 'font-size : %1 px',
            "args0": [
                {
                    "type": "field_input",
                    "name": "value",
                    "text": "16"
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
        });
    }
}
Blockly.html['fontsize'] = function (block) {
    var value = block.getFieldValue('value');
    return 'font-size: ' + fullEscape(value) + 'px;\n';
}
// Font weight
Blockly.Blocks['fontweight'] = {
    init: function () {
        this.jsonInit({
            "message0": "font-weight : %1",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "weight",
                    "options": [
                        [
                            "normal",
                            "normal"
                        ],
                        [
                            "bold",
                            "bold"
                        ],
                        [
                            "bolder",
                            "bolder"
                        ],
                        [
                            "lighter",
                            "lighter"
                        ],
                        [
                            "initial",
                            "initial"
                        ],
                        [
                            "inherit",
                            "inherit"
                        ]
                    ]
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
        });
    }
}
Blockly.html['fontweight'] = function (block) {
    var weight = block.getFieldValue('weight');
    return `font-weight: ${weight};\n`;
}

/////////////////  arrangement  /////////////////
// top bottom left right
Blockly.Blocks['tblr'] = {
    init: function () {
        this.jsonInit({
            "message0": '%1 : %2 px',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "direction",
                    "options": [
                        [
                            "top",
                            "top"
                        ],
                        [
                            "right",
                            "right"
                        ],
                        [
                            "bottom",
                            "bottom"
                        ],
                        [
                            "left",
                            "left"
                        ]
                    ]
                },
                {
                    "type": "field_input",
                    "name": "value",
                    "text": "15"
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
        });
    }
}
Blockly.html['tblr'] = function (block) {
    var direction = block.getFieldValue('direction');
    var value = block.getFieldValue('value');
    return direction + ': ' + fullEscape(value) + 'px;\n';
}
// grid
Blockly.Blocks['grid'] = {
    init: function () {
        this.jsonInit({
            "message0": '%1 : %2',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "direction",
                    "options": [
                        ["grid","grid"],
						["grid-area","grid-area"],
						["grid-template-columns","grid-template-columns"],
						["grid-template-rows","grid-template-rows"],
						["grid-template-areas","grid-template-areas"],
						["grid-template","grid-template"],
						["grid-auto-columns","grid-auto-columns"],
						["grid-auto-rows","grid-auto-rows"],
						["grid-auto-flow","grid-auto-flow"],
						["grid-row-start","grid-row-start"],
						["grid-row-end","grid-row-end"],
						["grid-row","grid-row"],
						["grid-column-start","grid-column-start"],
						["grid-column-end","grid-column-end"],
						["grid-column","grid-column"],
						["gap","gap"]
                    ]
                },
                {
                    "type": "field_input",
                    "name": "value",
                    "text": ""
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
        });
    }
}
Blockly.html['grid'] = function (block) {
    var direction = block.getFieldValue('direction');
    var value = block.getFieldValue('value');
    return direction + ': ' + value + ';\n';
}
// display
Blockly.Blocks['display'] = {
    init: function () {
        this.jsonInit({
            "message0": 'display : %1',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "content",
                    "options": [
                        [
                            "block",
							"block"
                        ],
                        [
                            "inline",
							"inline"
                        ],
                        [
                            "inline-block",
							"inline-block"
                        ],
                        [
                            "grid",
							"grid"
                        ],
                        [
                            "none",
							"none"
                        ]
					]
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
        });
    }
}
Blockly.html['display'] = function (block) {
    var content = block.getFieldValue('content');
    return 'display: ' + fullEscape(content) + ';\n';
}
// Margin
Blockly.Blocks['margin'] = {
    init: function () {
        this.jsonInit({
            "message0": '%1 : %2 px',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "direction",
                    "options": [
                        [
                            "margin",
                            "margin"
                        ],
                        [
                            "margin-top",
                            "margin-top"
                        ],
                        [
                            "margin-right",
                            "margin-right"
                        ],
                        [
                            "margin-bottom",
                            "margin-bottom"
                        ],
                        [
                            "margin-left",
                            "margin-left"
                        ]
                    ]
                },
                {
                    "type": "field_input",
                    "name": "value",
                    "text": "15"
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
        });
    }
}
Blockly.html['margin'] = function (block) {
    var direction = block.getFieldValue('direction');
    var value = block.getFieldValue('value');
    return direction + ': ' + fullEscape(value) + 'px;\n';
}
// Padding
Blockly.Blocks['padding'] = {
    init: function () {
        this.jsonInit({
            "message0": '%1 : %2 px',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "direction",
                    "options": [
                        [
                            "padding",
                            "padding"
                        ],
                        [
                            "padding-top",
                            "padding-top"
                        ],
                        [
                            "padding-right",
                            "padding-right"
                        ],
                        [
                            "padding-bottom",
                            "padding-bottom"
                        ],
                        [
                            "padding-left",
                            "padding-left"
                        ]
                    ]
                },
                {
                    "type": "field_input",
                    "name": "value",
                    "text": "15"
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
        });
    }
}
Blockly.html['padding'] = function (block) {
    var direction = block.getFieldValue('direction');
    var value = block.getFieldValue('value');
    return direction + ': ' + fullEscape(value) + 'px;\n';
}
// Width height
Blockly.Blocks['widthheightnum'] = {
    init: function () {
        this.jsonInit({
            "message0": '%1 : %2',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "option",
                    "options": [
                        [
                            "width",
                            "width"
                        ],
                        [
                            "height",
                            "height"
                        ]
                    ]
                },
                {
                    "type": "field_input",
                    "name": "size",
                    "text": "100%"
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
        });
    }
}
Blockly.html['widthheightnum'] = function (block) {
    var option = block.getFieldValue('option');
    var size = block.getFieldValue('size');

    return option + ': ' + fullEscape(size) + ';\n';
}
// Float 
Blockly.Blocks['float'] = {
    init: function () {
        this.jsonInit({
            "message0": 'float : %1',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "content",
                    "options": [
                        ['right', 'right'],
                        ['left', 'left'],
                        ['none', 'none'],
                        ['initial', 'initial'],
                        ['inherit', 'inherit']
                    ]
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
        });
    }
}
Blockly.html['float'] = function (block) {
    return 'float: ' + block.getFieldValue('content') + ';\n';
}
// Vertical align
Blockly.Blocks['verticalalign'] = {
    init: function () {
        this.jsonInit({
            "message0": "vertical-align : %1",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "align",
                    "options": [
                        [
                            "top",
                            "top"
                        ],
						[
                            "baseline",
                            "baseline"
                        ],
                        [
                            "text-top",
                            "text-top"
                        ],
                        [
                            "middle",
                            "middle"
                        ],
                        [
                            "bottom",
                            "bottom"
                        ],
                        [
                            "text-bottom",
                            "text-bottom"
                        ]
                    ]
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
        })
    }
}
Blockly.html['verticalalign'] = function (block) {
    var align = block.getFieldValue('align');
    return `vertical-align: ${align};\n`;
}
// position
Blockly.Blocks['position'] = {
    init: function () {
        this.jsonInit({
            "message0": "position : %1",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "align",
                    "options": [
                        [
                            "static",
                            "static"
                        ],
                        [
                            "relative",
                            "relative"
                        ],
                        [
                            "absolute",
                            "absolute"
                        ],
                        [
                            "fixed",
                            "fixed"
                        ],
                        [
                            "sticky",
                            "sticky"
                        ]
                    ]
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
        })
    }
}
Blockly.html['position'] = function (block) {
    return "position: "+block.getFieldValue('align')+";\n"
}

/////////////////  couleur  /////////////////
// Color
Blockly.Blocks['color-new'] = {
    init: function () {
        this.jsonInit({
            "message0": 'color : %1',
            "args0": [
                {
                    "type": "input_value",
                    "name": "value",
                    "check": "color"
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
        });
    }
}
Blockly.html['color-new'] = function (block) {
    var color = Blockly.html.statementToCode(block, 'value', Blockly.html.ORDER_ATOMIC).trim();
    return 'color: ' + color + ';\n';
}
// Hex color picker block
Blockly.Blocks['hex_picker'] = {
    init: function () {
        this.jsonInit({
            "message0": "# %1",
            "args0": [
                {
                    "type": "field_input",
                    "name": "color",
                    "text": "ffffff"
                }
            ],
            "output": "color",
            "colour": "#00929F"
        });
    }
}
Blockly.html['hex_picker'] = function (block) {
    return "#" + hexEscape(block.getFieldValue('color'));
}
// RGBA color picker block
Blockly.Blocks['rgba_picker'] = {
    init: function () {
        this.jsonInit({
            "message0": "rgba ( %1,%2,%3,%4 )",
            "args0": [
                {
                    "type": "field_number",
                    "name": "r",
                    "value": 255,
                    "min": 0,
                    "max": 255,
                    "precision": 1
                },
                {
                    "type": "field_number",
                    "name": "g",
                    "value": 255,
                    "min": 0,
                    "max": 255,
                    "precision": 1
                },
                {
                    "type": "field_number",
                    "name": "b",
                    "value": 255,
                    "min": 0,
                    "max": 255,
                    "precision": 1
                },
                {
                    "type": "field_number",
                    "name": "a",
                    "value": 1,
                    "min": 0,
                    "max": 1
                }
            ],
            "output": "color",
            "colour": "#00929F"
        });
    }
}
Blockly.html['rgba_picker'] = function (block) {
    var r = looseEscape(block.getFieldValue('r'));
    var g = looseEscape(block.getFieldValue('g'));
    var b = looseEscape(block.getFieldValue('b'));
    var a = looseEscape(block.getFieldValue('a'));
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}
// Color picker block
Blockly.Blocks['color_picker'] = {
    init: function () {
        this.jsonInit({
            "message0": "%1",
            "args0": [
                {
                    "type": "field_colour",
                    "name": "color",
                    "colour": "#ffffff"
                }
            ],
            "output": "color",
            "colour": "#00929F"
        });
    }
}
Blockly.html['color_picker'] = function (block) {
    return looseEscape(block.getFieldValue('color'));
}
// background-color
Blockly.Blocks['bgcolor-new'] = {
    init: function () {
        this.jsonInit({
            "message0": 'background-color : %1',
            "args0": [
                {
                    "type": "input_value",
                    "name": "value",
                    "check": "color"
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
        });
    }
}
Blockly.html['bgcolor-new'] = function (block) {
    var color = Blockly.html.statementToCode(block, 'value', Blockly.html.ORDER_ATOMIC).trim();
    return 'background-color: ' + color + ';\n';
}
// background
Blockly.Blocks['background'] = {
    init: function () {
        this.jsonInit({
            "message0": 'background : %1',
            "args0": [
                {
                    "type": "field_input",
                    "name": "value",
                    "text": "url('media/beige.gif') repeat"
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
        });
    }
}
Blockly.html['background'] = function (block) {
    var val = block.getFieldValue('value');
    return 'background: ' + val + ';\n';
}

/////////////////  bordure  /////////////////
// Border Edge new
Blockly.Blocks['borderedge-new'] = {
    init: function () {
        this.jsonInit({
            "message0": "%1 : %2px %3 %4",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "edge",
                    "options": [
                        [
                            "border",
                            "border"
                        ],
                        [
                            "border-top",
                            "border-top"
                        ],
                        [
                            "border-bottom",
                            "border-bottom"
                        ],
                        [
                            "border-left",
                            "border-left"
                        ],
                        [
                            "border-right",
                            "border-right"
                        ]
                    ]
                },
                {
                    "type": "field_number",
                    "name": "width",
                    "value": 1
                },
                {
                    "type": "field_dropdown",
                    "name": "type",
                    "options": [
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
                        ],
						[
                            "none",
                            "none"
                        ]
                    ]
                },
                {
                    "type": "input_value",
                    "name": "color",
                    "check": "color"
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
        })
    }
}
Blockly.html['borderedge-new'] = function (block) {
    var edge = block.getFieldValue('edge');
    var width = fullEscape(block.getFieldValue('width'));
    var type = block.getFieldValue('type');
    var color = Blockly.html.statementToCode(block, 'color', Blockly.html.ORDER_ATOMIC).trim();
    return `${edge}: ${width}px ${type} ${color};\n`;
}
// Border radius
Blockly.Blocks['borderrad'] = {
    init: function () {
        this.jsonInit({
            "message0": 'border-radius : %1 px',
            "args0": [
                {
                    "type": "field_input",
                    "name": "content",
                    "text": "10"
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
        });
    }
}
Blockly.html['borderrad'] = function (block) {
    var content = block.getFieldValue('content');
    return 'border-radius: ' + fullEscape(content) + 'px;\n';
}
// Border Collapse
Blockly.Blocks['bordercollapse'] = {
    init: function () {
        this.jsonInit({
            "message0": 'border-collapse : %1',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "content",
                    "options": [
                        [
                            "collapse",
                            "collapse"
                        ],
                        [
                            "separate",
                            "separate"
                        ]
					]
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00929F"
        });
    }
}
Blockly.html['bordercollapse'] = function (block) {
    var content = block.getFieldValue('content');
    return 'border-collapse: ' + fullEscape(content) + ';\n';
}

  ////////////////
 /*  Bootstrap  */
////////////////

// Class Bootstrap
Blockly.Blocks['B_class'] = {
    init: function () {
        this.jsonInit({
            "message0": 'class=%1',
            "args0": [{
				  "type": "input_value",
				  "name": "in"
				}],
            "colour": "#FFA500",
            "output": "attributes"
        });
    }
}
Blockly.html['B_class'] = function (block) {
    var argument = Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE);
    return 'class="' + argument + '"';
}
// modal Class Bootstrap
Blockly.Blocks['B_class_modal'] = {
    init: function () {
        this.jsonInit({
            "message0": '%1 %2',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "content",
                    "options": [
                        ["modal", "modal"],
                        ["modal fade", "modal fade"],
                        ["modal-dialog", "modal-dialog"],
                        ["modal-content", "modal-content"],
                        ["modal-body", "modal-body"],
                        ["modal-title", "modal-title"],
                        ["modal-header", "modal-header"],
                        ["modal-footer", "modal-footer"],
                        ["modal-sm", "modal-sm"],
                        ["modal-md", "modal-md"],
                        ["modal-lg", "modal-lg"]
                    ]
                },
				{
				  "type": "input_value",
				  "name": "in"
				}
            ],
            "colour": "#FFA500",
            "output": "attributes"
        });
    }
}
Blockly.html['B_class_modal'] = function (block) {
    var text_content = block.getFieldValue('content');
    var argument = Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE);
    return looseEscape(text_content) + ' ' + argument ;
}
// data attribute Bootstrap
Blockly.Blocks['B_data'] = {
    init: function () {
        this.jsonInit({
            "message0": '%1=%2 %3',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "content",
                    "options": [
                        ["data-toggle", "data-toggle"],
                        ["data-target", "data-target"],
                        ["data-content", "data-content"],
                        ["data-placement", "data-placement"]
                    ]
                },
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
            "colour": "#FFA500",
            "output": "attributes"
        });
    }
}
Blockly.html['B_data'] = function (block) {
    var text_value = block.getFieldValue('value');
    var text_content = block.getFieldValue('content');
    var argument = Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE);
    return text_content + '="' + looseEscape(text_value) + '"' + argument ;
}
// images Class Bootstrap
Blockly.Blocks['B_class_img'] = {
    init: function () {
        this.jsonInit({
            "message0": '%1 %2',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "content",
                    "options": [
                        ["img-circle", "img-circle"],
                        ["img-rounded", "img-rounded"],
                        ["img-thumbnail", "img-thumbnail"]
                    ]
                },
				{
				  "type": "input_value",
				  "name": "in"
				}
            ],
            "colour": "#FFA500",
            "output": "attributes"
        });
    }
}
Blockly.html['B_class_img'] = function (block) {
    var text_content = block.getFieldValue('content');
    var argument = Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE);
    return looseEscape(text_content) + ' ' + argument ;
}
// button Class Bootstrap
Blockly.Blocks['B_class_btn'] = {
    init: function () {
        this.jsonInit({
            "message0": '%1 %2',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "content",
                    "options": [
                        ["btn-default", "btn btn-default"],
                        ["btn-info", "btn btn-info"],
                        ["btn-success", "btn btn-success"],
                        ["btn-warning", "btn btn-warning"],
                        ["btn-danger", "btn btn-danger"],
                        ["btn-group-vertical", "btn-group-vertical"],
                        ["btn-group", "btn-group"]
                    ]
                },
				{
				  "type": "input_value",
				  "name": "in"
				}
            ],
            "colour": "#FFA500",
            "output": "attributes"
        });
    }
}
Blockly.html['B_class_btn'] = function (block) {
    var text_content = block.getFieldValue('content');
    var argument = Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE);
    return looseEscape(text_content) + ' ' + argument ;
}
// dropdown Class Bootstrap
Blockly.Blocks['B_class_dropdown'] = {
    init: function () {
        this.jsonInit({
            "message0": '%1 %2',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "content",
                    "options": [
                        ["dropdown-toggle", "dropdown-toggle"],
                        ["dropdown-menu", "dropdown-menu"],
                        ["dropdown-header", "dropdown-header"],
                        ["divider", "divider"]
                    ]
                },
				{
				  "type": "input_value",
				  "name": "in"
				}
            ],
            "colour": "#FFA500",
            "output": "attributes"
        });
    }
}
Blockly.html['B_class_dropdown'] = function (block) {
    var text_content = block.getFieldValue('content');
    var argument = Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE);
    return looseEscape(text_content) + ' ' + argument ;
}
// alert Class Bootstrap
Blockly.Blocks['B_class_alert'] = {
    init: function () {
        this.jsonInit({
            "message0": '%1 %2',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "content",
                    "options": [
                        ["alert-info", "alert alert-info"],
                        ["alert-success", "alert alert-success"],
                        ["alert-warning", "alert alert-warning"],
                        ["alert-danger", "alert alert-danger"]
                    ]
                },
				{
				  "type": "input_value",
				  "name": "in"
				}
            ],
            "colour": "#FFA500",
            "output": "attributes"
        });
    }
}
Blockly.html['B_class_alert'] = function (block) {
    var text_content = block.getFieldValue('content');
    var argument = Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE);
    return looseEscape(text_content) + ' ' + argument ;
}

  ////////////////
 /*     W3     */
////////////////

// Class W3
Blockly.Blocks['w3_class'] = {
    init: function () {
        this.jsonInit({
            "message0": 'class=%1',
            "args0": [{
				  "type": "input_value",
				  "name": "in"
				}],
            "colour": "#EEDD22",
            "output": "attributes"
        });
    }
}
Blockly.html['w3_class'] = function (block) {
    var argument = Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE);
    return 'class="' + argument + '"';
}
// button W3
Blockly.Blocks['w3_btn'] = {
    init: function () {
        this.jsonInit({
            "message0": '%1 %2',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "content",
                    "options": [
                        ["btn", "w3-btn"],
                        ["button", "w3-button"],
                        ["bar", "w3-bar"],
                        ["bar-item", "w3-bar-item"],
                        ["display-topright", "w3-display-topright"],
						["show-inline-block", "w3-show-inline-block"]
                    ]
                },
				{
				  "type": "input_value",
				  "name": "in"
				}
            ],
            "colour": "#EEDD22",
            "output": "attributes"
        });
    }
}
Blockly.html['w3_btn'] = function (block) {
    var text_content = block.getFieldValue('content');
    var argument = Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE);
    return text_content + argument ;
}
// modal W3
Blockly.Blocks['w3_modal'] = {
    init: function () {
        this.jsonInit({
            "message0": '%1 %2',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "content",
                    "options": [
                        ["modal", "w3-modal"],
                        ["modal-content", "w3-modal-content"]
                    ]
                },
				{
				  "type": "input_value",
				  "name": "in"
				}
            ],
            "colour": "#EEDD22",
            "output": "attributes"
        });
    }
}
Blockly.html['w3_modal'] = function (block) {
    var text_content = block.getFieldValue('content');
    var argument = Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE);
    return text_content + argument ;
}
// tooltip W3
Blockly.Blocks['w3_tooltip'] = {
    init: function () {
        this.jsonInit({
            "message0": '%1 %2',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "content",
                    "options": [
                        ["tooltip", "w3-toopltip"],
                        ["text", "w3-text"],
                        ["tag", "w3-tag"]
                    ]
                },
				{
				  "type": "input_value",
				  "name": "in"
				}
            ],
            "colour": "#EEDD22",
            "output": "attributes"
        });
    }
}
Blockly.html['w3_tooltip'] = function (block) {
    var text_content = block.getFieldValue('content');
    var argument = Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE);
    return text_content + argument ;
}
// hover color W3
Blockly.Blocks['w3_hover_color'] = {
    init: function () {
        this.jsonInit({
            "message0": '%1 %2',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "content",
                    "options": [
                        ["hover-black", "w3-hover-black"],
                        ["hover-white", "w3-hover-white"],
                        ["hover-red", "w3-hover-red"],
                        ["hover-aqua", "w3-hover-aqua"],
                        ["hover-blue", "w3-hover-blue"],
                        ["hover-orange", "w3-hover-orange"],
                        ["hover-green", "w3-hover-green"],
                        ["hover-grey", "w3-hover-grey"],
                        ["hover-pale-green", "w3-hover-pale-green"]
                    ]
                },
				{
				  "type": "input_value",
				  "name": "in"
				}
            ],
            "colour": "#EEDD22",
            "output": "attributes"
        });
    }
}
Blockly.html['w3_hover_color'] = function (block) {
    var text_content = block.getFieldValue('content');
    var argument = Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE);
    return text_content + argument ;
}
// color W3
Blockly.Blocks['w3_color'] = {
    init: function () {
        this.jsonInit({
            "message0": '%1 %2',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "content",
                    "options": [
                        ["black", "w3-black"],
                        ["khaki", "w3-khaki"],
                        ["yellow", "w3-yellow"],
                        ["red", "w3-red"],
                        ["purple", "w3-purple"],
                        ["aqua", "w3-aqua"],
                        ["blue", "w3-blue"],
                        ["indigo", "w3-indigo"],
                        ["green", "w3-green"],
                        ["teal", "w3-teal"]
                    ]
                },
				{
				  "type": "input_value",
				  "name": "in"
				}
            ],
            "colour": "#EEDD22",
            "output": "attributes"
        });
    }
}
Blockly.html['w3_color'] = function (block) {
    var text_content = block.getFieldValue('content');
    var argument = Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE);
    return text_content + argument ;
}
// round W3
Blockly.Blocks['w3_round'] = {
    init: function () {
        this.jsonInit({
            "message0": '%1 %2',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "content",
                    "options": [
                        ["round", "w3-round"],
                        ["round-large", "w3-round-large"],
                        ["round-xlarge", "w3-round-xlarge"],
                        ["round-xxlarge", "w3-round-xxlarge"],
                        ["circle", "w3-circle"]
                    ]
                },
				{
				  "type": "input_value",
				  "name": "in"
				}
            ],
            "colour": "#EEDD22",
            "output": "attributes"
        });
    }
}
Blockly.html['w3_round'] = function (block) {
    var text_content = block.getFieldValue('content');
    var argument = Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE);
    return text_content + argument ;
}
// round W3
Blockly.Blocks['w3_onclick'] = {
    init: function () {
        this.jsonInit({
            "message0": 'onclick=%1 %2 %3',
            "args0": [
                {
                    "type": "field_input",
                    "name": "content",
                    "text": ""
                },
                {
                    "type": "field_dropdown",
                    "name": "value",
                    "options": [
                        ["show", "block"],
                        ["hide", "none"]
                    ]
                },
				{
				  "type": "input_value",
				  "name": "in"
				}
            ],
            "colour": "#EEDD22",
            "output": "attributes"
        });
    }
}
Blockly.html['w3_onclick'] = function (block) {
    var text_content = block.getFieldValue('content');
    var text_value = block.getFieldValue('value');
    var argument = Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE);
    return 'onclick="document.getElementById(\'' + looseEscape(text_content) + '\').style.display=\''+text_value+'\'"' + argument ;
}
// dropdown W3
Blockly.Blocks['w3_dropdown'] = {
    init: function () {
        this.jsonInit({
            "message0": '%1 %2',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "content",
                    "options": [
                        ["dropdown-hover", "w3-dropdown-hover"],
                        ["dropdown-click", "w3-dropdown-click"],
                        ["dropdown-content", "w3-dropdown-content"]
                    ]
                },
				{
				  "type": "input_value",
				  "name": "in"
				}
            ],
            "colour": "#EEDD22",
            "output": "attributes"
        });
    }
}
Blockly.html['w3_dropdown'] = function (block) {
    var text_content = block.getFieldValue('content');
    var argument = Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE);
    return text_content + argument ;
}
// panel W3
Blockly.Blocks['w3_panel'] = {
    init: function () {
        this.jsonInit({
            "message0": '%1 %2',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "content",
                    "options": [
                        ["panel", "w3-panel"],
                        ["bottombar", "w3-bottombar"],
                        ["leftbar", "w3-leftbar"],
                        ["rightbar", "w3-rightbar"],
                        ["topbar", "w3-topbar"]
                    ]
                },
				{
				  "type": "input_value",
				  "name": "in"
				}
            ],
            "colour": "#EEDD22",
            "output": "attributes"
        });
    }
}
Blockly.html['w3_panel'] = function (block) {
    var text_content = block.getFieldValue('content');
    var argument = Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE);
    return text_content + argument ;
}
// card W3
Blockly.Blocks['w3_card'] = {
    init: function () {
        this.jsonInit({
            "message0": '%1 %2',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "content",
                    "options": [
                        ["card-2", "w3-card-2"],
                        ["card-4", "w3-card-4"],
                        ["container", "w3-container"]
                    ]
                },
				{
				  "type": "input_value",
				  "name": "in"
				}
            ],
            "colour": "#EEDD22",
            "output": "attributes"
        });
    }
}
Blockly.html['w3_card'] = function (block) {
    var text_content = block.getFieldValue('content');
    var argument = Blockly.html.statementToCode(block, "in", Blockly.html.ORDER_NONE).trim();
    return text_content + argument ;
}
