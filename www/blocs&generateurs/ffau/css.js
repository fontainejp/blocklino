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
  ////////////////
 /*  function  */
////////////////
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
        .replace(/:/g, "")
}
function isNewTabUrl(input) {
    return URLRegex.test(input) || (!input.includes('http://') && !input.includes('https://')) && !hashRegex.test(input) && input.length > 0;
}
// CSS file
Blockly.Blocks['css'] = {
    init: function () {
        this.jsonInit({
            "message0": '<CSS> %1 %2 </CSS>',
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
            "colour": 290
        });
    }
};
Blockly.html['css'] = function (block) {
    var statement = Blockly.html.statementToCode(block, 'content');
    return '';
};
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
            "colour": 290,
            "tooltip": "Style tag",
            "helpUrl": "https://www.w3schools.com/tags/tag_style.asp"
        });
    }
};
Blockly.html['style'] = function (block) {
    var statement = Blockly.html.statementToCode(block, 'content');
    return '<style>\n' + statement + '</style>\n';
};
// Style modifier
Blockly.Blocks['stylearg'] = {
    init: function () {
        this.jsonInit({
            "message0": 'style = %1 %2',
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
            "previousStatement": "args",
            "nextStatement": "args",
            "colour": 290,
            "tooltip": "Style modifier",
            "helpUrl": "https://www.w3schools.com/css/css_howto.asp"
        });
    }
};
Blockly.html['stylearg'] = function (block) {
    var statement = Blockly.html.statementToCode(block, 'content').trim();
    return 'style="' + statement + '" ';
};
// CSS Item
Blockly.Blocks['cssitem'] = {
    init: function () {
        this.jsonInit({
            "message0": '%1 { %2 %3 }',
            "args0": [
                {
                    "type": "field_input",
                    "name": "selector",
                    "text": "selector"
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
            "colour": 290
        });
    }
};
Blockly.html['cssitem'] = function (block) {
    var stmt = Blockly.html.statementToCode(block, 'content');
    var mod = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC);
    mod = mod.split(' ').join(''); // remove spaces

    var selector = CSSEscape(block.getFieldValue('selector'));

    return selector + mod + '{\n' + stmt + '}\n';
};
// Font-family
Blockly.Blocks['fontfamily'] = {
    init: function () {
        this.jsonInit({
            "message0": 'font-family: %1 ;',
            "args0": [
                {
                    "type": "field_input",
                    "name": "value",
                    "text": "sans-serif"
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": 290,
            "tooltip": "CSS font-family",
            "helpUrl": "https://www.w3schools.com/cssref/pr_font_font-family.asp"
        });
    }
};
Blockly.html['fontfamily'] = function (block) {
    var value = block.getFieldValue('value');
    return 'font-family: ' + fullEscape(value) + ';\n';
};
// Font-size
Blockly.Blocks['fontsize'] = {
    init: function () {
        this.jsonInit({
            "message0": 'font-size: %1 ;',
            "args0": [
                {
                    "type": "field_input",
                    "name": "value",
                    "text": "12px"
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": 290,
            "tooltip": "CSS font-size",
            "helpUrl": "https://www.w3schools.com/cssref/pr_font_font-size.asp"
        });
    }
};
Blockly.html['fontsize'] = function (block) {
    var value = block.getFieldValue('value');
    return 'font-size: ' + fullEscape(value) + ';\n';
};
// Font weight
Blockly.Blocks['fontweight'] = {
    init: function () {
        this.jsonInit({
            "message0": "font-weight: %1 ;",
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
            "colour": 290,
            "tooltip": "Font-weight CSS property",
            "helpUrl": "https://www.w3schools.com/cssref/pr_font_weight.asp"
        });
    }
};
Blockly.html['fontweight'] = function (block) {
    var weight = block.getFieldValue('weight');
    return `font-weight: ${weight};\n`;
};
// Margin
Blockly.Blocks['margin'] = {
    init: function () {
        this.jsonInit({
            "message0": 'margin - %1 : %2 ;',
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
                    "text": "15px"
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": 290,
            "tooltip": "CSS Margin",
            "helpUrl": "https://www.w3schools.com/cssref/pr_margin.asp"
        });
    }
};
Blockly.html['margin'] = function (block) {
    var direction = block.getFieldValue('direction');
    var value = block.getFieldValue('value');
    return 'margin-' + direction + ': ' + fullEscape(value) + ';\n';
};
// Padding
Blockly.Blocks['padding'] = {
    init: function () {
        this.jsonInit({
            "message0": 'padding - %1 : %2 ;',
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
                    "text": "15px"
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": 290,
            "tooltip": "CSS Padding",
            "helpUrl": "https://www.w3schools.com/cssref/pr_padding.asp"
        });
    }
};
Blockly.html['padding'] = function (block) {
    var direction = block.getFieldValue('direction');
    var value = block.getFieldValue('value');
    return 'padding-' + direction + ': ' + fullEscape(value) + ';\n';
};
// Text transform
Blockly.Blocks['texttransform'] = {
    init: function () {
        this.jsonInit({
            "message0": "text-transform: %1 ;",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "value",
                    "options": [
                        ["none", "none"],
                        ["capitalize", "capitalize"],
                        ["uppercase", "uppercase"],
                        ["lowercase", "lowercase"],
                        ["initial", "initial"],
                        ["inherit", "inherit"]
                    ]
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": 290,
            "tooltip": "CSS Text-transform",
            "helpUrl": "https://www.w3schools.com/cssref/pr_text_text-transform.asp"
        });
    }
};
Blockly.html['texttransform'] = function (block) {
    var value = block.getFieldValue('value');
    return `text-transform: ${value};\n`;
};
// Text Align
Blockly.Blocks['textalign'] = {
    init: function () {
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
            "colour": 290,
            "tooltip": "CSS Text-align",
            "helpUrl": "https://www.w3schools.com/cssref/pr_text_text-align.asp"
        })
    }
};
Blockly.html['textalign'] = function (block) {
    var value = block.getFieldValue('value');
    return `text-align: ${value};\n`;
};
// BGColor new
Blockly.Blocks['bgcolor-new'] = {
    init: function () {
        this.jsonInit({
            "message0": 'background-color: %1',
            "args0": [
                {
                    "type": "input_value",
                    "name": "value",
                    "check": "color"
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": 290,
            "tooltip": "CSS Background-Color",
            "helpUrl": "https://www.w3schools.com/css/css_background.asp"
        });
    }
};
Blockly.html['bgcolor-new'] = function (block) {
    var color = Blockly.html.statementToCode(block, 'value', Blockly.html.ORDER_ATOMIC).trim();
    return 'background-color: ' + color + ';\n';
};
// Border new
Blockly.Blocks['border-new'] = {
    init: function () {
        this.jsonInit({
            "message0": 'border: %1 px %2 %3',
            "args0": [
                {
                    "type": "field_number",
                    "name": "width",
                    "value": 5,
                    "min": 0
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
                    "type": "input_value",
                    "name": "color",
                    "check": "color"
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": 290
        });
    }
};
Blockly.html['border-new'] = function (block) {
    var width = fullEscape(block.getFieldValue('width'));
    var type = block.getFieldValue('type');
    var color = Blockly.html.statementToCode(block, 'color', Blockly.html.ORDER_ATOMIC).trim();

    return 'border: ' + width + 'px ' + type + ' ' + color + ';\n';
};
// Border Edge new
Blockly.Blocks['borderedge-new'] = {
    init: function () {
        this.jsonInit({
            "message0": "border- %1 : %2 px %3 %4",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "edge",
                    "options": [
                        [
                            "top",
                            "top"
                        ],
                        [
                            "bottom",
                            "bottom"
                        ],
                        [
                            "left",
                            "left"
                        ],
                        [
                            "right",
                            "right"
                        ]
                    ]
                },
                {
                    "type": "field_number",
                    "name": "width",
                    "value": 0
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
                    "type": "input_value",
                    "name": "color",
                    "check": "color"
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": 290
        })
    }
};
Blockly.html['borderedge-new'] = function (block) {
    var edge = block.getFieldValue('edge');
    var width = fullEscape(block.getFieldValue('width'));
    var type = block.getFieldValue('type');
    var color = Blockly.html.statementToCode(block, 'color', Blockly.html.ORDER_ATOMIC).trim();

    return `border-${edge}: ${width}px ${type} ${color};\n`;
};
// Border radius
Blockly.Blocks['borderrad'] = {
    init: function () {
        this.jsonInit({
            "message0": 'border-radius: %1 ;',
            "args0": [
                {
                    "type": "field_input",
                    "name": "content",
                    "text": "10px"
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": 290
        });
    }
};
Blockly.html['borderrad'] = function (block) {
    var content = block.getFieldValue('content');
    return 'border-radius: ' + fullEscape(content) + ';\n';
};
// Width height number selector
Blockly.Blocks['widthheightnum'] = {
    init: function () {
        this.jsonInit({
            "message0": '%1 : %2;',
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
            "colour": 290,
            "tooltip": "CSS Width/height",
            "helpUrl": "https://www.w3schools.com/css/css_dimension.asp"
        });
    }
};
Blockly.html['widthheightnum'] = function (block) {
    var option = block.getFieldValue('option');
    var size = block.getFieldValue('size');

    return option + ': ' + fullEscape(size) + ';\n';
};
// Float (CSS-version of 'align')
Blockly.Blocks['float'] = {
    init: function () {
        this.jsonInit({
            "message0": 'float : %1 ;',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "content",
                    "options": [
                        ['left', 'left'],
                        ['right', 'right'],
                        ['none', 'none'],
                        ['initial', 'initial'],
                        ['inherit', 'inherit']
                    ]
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": 290,
            "tooltip": "Float an element left or right",
            "helpUrl": "https://www.w3schools.com/cssref/pr_class_float.asp"
        });
    }
};
Blockly.html['float'] = function (block) {
    return 'float: ' + block.getFieldValue('content') + ';\n';
};
// Vertical align
Blockly.Blocks['verticalalign'] = {
    init: function () {
        this.jsonInit({
            "message0": "vertical-align: %1 ;",
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
                            "sub",
                            "sub"
                        ],
                        [
                            "super",
                            "super"
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
            "colour": 290,
            "tooltip": "Vertical-align CSS property",
            "helpUrl": "https://www.w3schools.com/cssref/pr_pos_vertical-align.asp"
        })
    }
};
Blockly.html['verticalalign'] = function (block) {
    var align = block.getFieldValue('align');
    return `vertical-align: ${align};\n`;
};
// Color
Blockly.Blocks['color-new'] = {
    init: function () {
        this.jsonInit({
            "message0": 'color: %1',
            "args0": [
                {
                    "type": "input_value",
                    "name": "value",
                    "check": "color"
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": 290
        });
    }
};
Blockly.html['color-new'] = function (block) {
    var color = Blockly.html.statementToCode(block, 'value', Blockly.html.ORDER_ATOMIC).trim();
    return 'color: ' + color + ';\n';
};
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
            "colour": 290,
            "tooltip": "HTML HEX color picker",
            "helpUrl": "https://www.w3schools.com/html/html_colors.asp"
        });
    }
};
Blockly.html['hex_picker'] = function (block) {
    return "#" + hexEscape(block.getFieldValue('color'));
};
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
            "colour": 290
        });
    }
};
Blockly.html['rgba_picker'] = function (block) {
    var r = looseEscape(block.getFieldValue('r'));
    var g = looseEscape(block.getFieldValue('g'));
    var b = looseEscape(block.getFieldValue('b'));
    var a = looseEscape(block.getFieldValue('a'));
    return `rgba(${r}, ${g}, ${b}, ${a})`;
};
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
            "colour": 290,
            "tooltip": "HTML color picker",
            "helpUrl": "https://www.w3schools.com/html/html_colors.asp"
        });
    }
};
Blockly.html['color_picker'] = function (block) {
    return looseEscape(block.getFieldValue('color'));
};
