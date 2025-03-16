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

//////////////////////// JavaScript ////////////////////////
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
    return '<script>\n  window.addEventListener("load", function load(e){\n' + Blockly.html.statementToCode(block, 'content', Blockly.html.ORDER_ATOMIC) + '  })\n</script>\n'
}
// jquery_event
Blockly.Blocks['jquery_event']={init:function(){
	this.jsonInit({
		"message0": '%1.%2 %3 %4',
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
				"name": "_statement"
			}
		],
		"previousStatement": "script",
		"nextStatement": "script",
		"colour": "#FF0000"
	})
}}
Blockly.html['jquery_event']=function(block){
  var value_statement = Blockly.html.statementToCode(block, '_statement', Blockly.html.ORDER_ATOMIC);
  var value_text = block.getFieldValue('_text');
  var value_dropdown = block.getFieldValue('_dropdown');
  return '$("'+value_text+'").'+value_dropdown+'(function(event){\n'+value_statement+'});\n'
}
// jquery_get
Blockly.Blocks['jquery_get']={init:function(){
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput(""), "_text")
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["attr", "attr"], ["html", "html"], ["prop", "prop"], ["text", "text"], ["val", "val"]]), "_dropdown");
    this.setInputsInline(false);
    this.setOutput(true);
    this.setColour('#FF0000')}
}
Blockly.html['jquery_get']=function(block){
  var value_text = block.getFieldValue('_text');
  var value_dropdown = block.getFieldValue('_dropdown');
  return '$("'+value_text+'").'+value_dropdown+'()'
}
// jquery_set
Blockly.Blocks['jquery_set']={init:function(){
	this.jsonInit({
		"message0": '%1.%2 %3',
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
					["addClass", "addClass"], ["append", "append"], ["attr", "attr"], ["empty", "empty"], ["hide", "hide"], ["html", "html"], ["prepend", "prepend"], ["prop", "prop"], ["remove", "remove"], ["removeClass", "removeClass"], ["show", "show"], ["text", "text"], ["val", "val"]
				]
			},
			{
				"type": "input_value",
				"name": "_block",
			}
		],
		"previousStatement": "script",
		"nextStatement": "script",
		"colour": "#FF0000"
	})
}}
Blockly.html['jquery_set']=function(block){
  var value_block = Blockly.html.statementToCode(block, '_block', Blockly.html.ORDER_ATOMIC).trim();
  var value_text = block.getFieldValue('_text');
  var value_dropdown = block.getFieldValue('_dropdown');
  return '$("'+value_text+'").'+value_dropdown+'('+value_block+');\n'
}
// jquery_css_set
Blockly.Blocks['jquery_css_set']={init:function(){
	this.jsonInit({
		"message0": '%1.css %2 %3',
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
					["color", "color"], ["background-color", "background-color"], ["border", "border"], ["display", "display"], ["float", "float"], ["font-size", "font-size"], ["text-align", "text-align"], ["text-decoration", "text-decoration"], ["text-transform", "text-transform"]
				]
			},
			{
				"type": "input_value",
				"name": "_block",
			}
		],
		"previousStatement": "script",
		"nextStatement": "script",
		"colour": "#FF0000"
	})
}}
Blockly.html['jquery_css_set']=function(block){
  var value_block = Blockly.html.statementToCode(block, '_block', Blockly.html.ORDER_ATOMIC).trim();
  var value_text = block.getFieldValue('_text');
  var value_dropdown = block.getFieldValue('_dropdown');
  return '$("'+value_text+'").css("'+value_dropdown+'", '+value_block+');\n'
}
// jquery_code
Blockly.Blocks['jquery_code']={init:function(){
    this.appendValueInput("_block")
        .appendField(new Blockly.FieldDropdown([["eval", "eval"], ["confirm", "confirm"], ["prompt", "prompt"]]), "_dropdown");
    this.setInputsInline(false);
    this.setOutput(true);
    this.setColour('#FF0000')
}}
Blockly.html['jquery_code']=function(block){
	var value_dropdown = block.getFieldValue('_dropdown');
	var value_text = block.getFieldValue('_text');
	var value_block = Blockly.html.statementToCode(block, '_block', Blockly.html.ORDER_ATOMIC).trim();
	return value_dropdown + "(" + value_block + ")"
}
// jquery_alert
Blockly.Blocks['jquery_alert']={init:function(){
    this.jsonInit({
		"message0": 'alert %1',
		"args0": [
			{
				"type": "input_value",
				"name": "_block",
			}
		],
		"previousStatement": "script",
		"nextStatement": "script",
		"colour": "#FF0000"
	})
}}
Blockly.html['jquery_alert']=function(block){
	var value_block = Blockly.html.statementToCode(block, '_block', Blockly.html.ORDER_ATOMIC).trim();
	return 'alert('+value_block+');\n'
}
// jquery_key
Blockly.Blocks['jquery_key']={init:function(){
	this.jsonInit({
	"message0": 'touche ENTRER pressée%1 %2',
    "args0": [
        {
            "type": "input_dummy"
        },
		{
            "type": "input_statement",
            "name": "_statement",
            "check": "script"
        }
    ],
    "previousStatement": "script",
    "nextStatement": "script",
    "colour": "#FF0000"
	})
}}
Blockly.html['jquery_key']=function(block){
	var value_statement = Blockly.html.statementToCode(block, '_statement', Blockly.html.ORDER_ATOMIC);
	return '$(document).on("keypress",function(event) {\n  if (event.key=="Enter"){\n'+value_statement+'  }\n})\n'
}
// setInterval
Blockly.Blocks['setInterval']={init:function(){
	this.jsonInit({
	"message0": '%1 %2 %3',
    "args0": [
		{
			"type": "field_dropdown",
			"name": "_dropdown",
			"options": [["setInterval", "setInterval"], 
				["setTimeout", "setTimeout"]]
		},
        {
            "type": "input_value",
			"name": "_block",
        },
		{
            "type": "input_statement",
            "name": "_statement",
            "check": "script"
        }
    ],
    "previousStatement": "script",
    "nextStatement": "script",
    "colour": "#FF0000"
	})
}}
Blockly.html['setInterval']=function(block){
	var value_dropdown = block.getFieldValue('_dropdown');
	var value_block = Blockly.html.statementToCode(block, '_block', Blockly.html.ORDER_ATOMIC).trim();
	var value_statement = Blockly.html.statementToCode(block, '_statement', Blockly.html.ORDER_ATOMIC);
	return value_dropdown + '(\n  function(){\n  '+value_statement+'},'+value_block+'\n)\n'
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
	}
	return xmlList
}
//////////////////////// openStreetMap ///////////////////
// initMap
Blockly.Blocks['initMap'] = {
    init: function () {
        this.jsonInit({
            "message0": '<script src="map.js"></script>',
            "args0": [
                {
                    "type": "field_input",
                    "name": "width",
                    "text": "400px"
                },
                {
                    "type": "field_input",
                    "name": "height",
                    "text": "300px"
                }
            ],
            "previousStatement": "header",
            "nextStatement": "header",
            "colour": "#4a235a"
        });
    }
}
Blockly.html['initMap'] = function (block) {
    return '<link rel="stylesheet" href="css/map.css">\n<link rel="stylesheet" href="css/routing.css">\n<script src="js/map.js"></script>\n<script src="js/esri-leaflet.js"></script>\n<script src="js/esri-leaflet-geocoder.js"></script>\n<script src="js/routing.js"></script>\n<script src="js/html-overlay.js"></script>\n'
}
// viewMap
Blockly.Blocks['viewMap'] = {
    init: function () {
        this.jsonInit({
            "message0": '<viewMap> %1 Lat, long %2 zoom %3 ',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "type",
                    "options": [
                        [
                            "street",
                            "https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
                        ],
                        [
                            "Topo",
                            "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                        ],
                        [
                            "sattelite",
                            "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                        ]
                    ]
                },
                {
                    "type": "input_value",
                    "name": "PT",
                    "check": "XY",
					"align": "RIGHT"
                },
                {
                    "type": "input_value",
                    "name": "zoom",
                    "check": "Number",
					"align": "RIGHT"
                }
            ],
            "previousStatement": "script",
            "nextStatement": "script",
            "colour": "#154360"
        });
    }
}
Blockly.html['viewMap'] = function (block) {
    var ptxy = Blockly.html.statementToCode(block, 'PT', Blockly.html.ORDER_ATOMIC).trim();
    var zoom_val = Blockly.html.statementToCode(block, 'zoom', Blockly.html.ORDER_ATOMIC).trim();
    var type = block.getFieldValue("type");
    return 'var maCarte = L.map("map").setView(['+ptxy+'], '+zoom_val+');\nL.tileLayer("'+type+'",{minZoom:1,maxZoom:20, attribution: " &copy; OpenStreetMap"}).addTo(maCarte);\n'
}
// marker
Blockly.Blocks['marker'] = {
    init: function () {
        this.jsonInit({
            "message0": '<Marker%1> Lat, long %2 %3',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "type",
                    "options": [
                        ["auto", "media/map/automotive.png"],["star", "media/map/default.png"],["event", "media/map/event.png"],["books", "media/map/libraries.png"],
						["medical", "media/map/medical.png"],["photography", "media/map/photography.png"],["playgrounds", "media/map/playgrounds.png"],["restaurants", "media/map/restaurants.png"],
						["schools", "media/map/schools.png"],["shopping", "media/map/shopping.png"],["sports", "media/map/sports.png"],["tools", "media/map/tools.png"],
                    ]
                },
                {
                    "type": "input_value",
                    "name": "PT",
                    "check": "XY",
					"align": "RIGHT"
                },
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "popup"
                }
            ],
            "previousStatement": "script",
            "nextStatement": "script",
            "colour": "#154360"
        });
    }
}
Blockly.html['marker'] = function (block) {
    var ptxy = Blockly.html.statementToCode(block, 'PT', Blockly.html.ORDER_ATOMIC).trim();
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC).trim();
    var type = block.getFieldValue("type");
    return 'L.marker(['+ptxy+'], {icon: L.icon({iconUrl: "'+type+'", iconAnchor: [15, 41], popupAnchor: [1, -34]})}).addTo(maCarte)'+block_modifier+';\n'
}
// CIRCLE
Blockly.Blocks['circle'] = {
    init: function () {
        this.jsonInit({
            "message0": '<Circle> Lat, long %1 radius %2 %3',
            "args0": [
                {
                    "type": "input_value",
                    "name": "PT",
                    "check": "XY",
					"align": "RIGHT"
                },
                {
                    "type": "input_value",
                    "name": "rayon",
                    "check": "Number",
					"align": "RIGHT"
                },
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "popup"
                }
            ],
            "previousStatement": "script",
            "nextStatement": "script",
            "colour": "#154360"
        });
    }
}
Blockly.html['circle'] = function (block) {
    var ptxy = Blockly.html.statementToCode(block, 'PT', Blockly.html.ORDER_ATOMIC).trim();
    var r_val = Blockly.html.statementToCode(block, 'rayon', Blockly.html.ORDER_ATOMIC).trim();
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC).trim();
    return 'L.circle(['+ptxy+'], '+r_val+',{color: "yellow", fillColor: "#ff3"}).addTo(maCarte)'+block_modifier+';\n'
}
// POLYGON
Blockly.Blocks['polygon'] = {
    init: function () {
        this.jsonInit({
            "message0": '<Triangle> Lat1, long1 %1 Lat2, long2 %2 Lat3, long3 %3 %4',
            "args0": [
                {
                    "type": "input_value",
                    "name": "PT1",
                    "check": "XY",
					"align": "RIGHT"
                },
                {
                    "type": "input_value",
                    "name": "PT2",
                    "check": "XY",
					"align": "RIGHT"
                },
                {
                    "type": "input_value",
                    "name": "PT3",
                    "check": "XY",
					"align": "RIGHT"
                },
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "popup"
                }
            ],
            "previousStatement": "script",
            "nextStatement": "script",
            "colour": "#154360"
        });
    }
}
Blockly.html['polygon'] = function (block) {
	var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC).trim();
    var point1 = Blockly.html.statementToCode(block, 'PT1', Blockly.html.ORDER_ATOMIC).trim();
    var point2 = Blockly.html.statementToCode(block, 'PT2', Blockly.html.ORDER_ATOMIC).trim();
    var point3 = Blockly.html.statementToCode(block, 'PT3', Blockly.html.ORDER_ATOMIC).trim();
    return 'L.polygon([['+point1+'],['+point2+'],['+point3+']],{color: "green"}).addTo(maCarte)'+block_modifier+';\n'
}
// onclick
Blockly.Blocks['onclick'] = {
    init: function () {
        this.jsonInit({
            "message0": '<onClick viewCoordinates>',
            "previousStatement": "script",
            "nextStatement": "script",
            "colour": "#154360"
        });
    }
}
Blockly.html['onclick'] = function (block) {
    var lat_val = block.getFieldValue('lat');
    var long_val = block.getFieldValue('long');
    return 'maCarte.on("click", function (e) { L.popup().setLatLng(e.latlng).setContent(e.latlng.toString()).openOn(maCarte)});\n'
}
// popup
Blockly.Blocks['bindpopup'] = {
    init: function () {
        this.jsonInit({
            "message0": 'popup%1',
            "args0": [
                {
                    "type": "input_value",
                    "name": "content"
                }
            ],
			"colour": "#154360",
            "output": "popup"
        });
    }
}
Blockly.html['bindpopup'] = function (block) {
    var value = Blockly.html.statementToCode(block, 'content', Blockly.html.ORDER_ATOMIC).trim();
    return '.bindPopup('+value+')'
}
// popupHTML
Blockly.Blocks['bindpopupHTML'] = {
    init: function () {
        this.jsonInit({
            "message0": 'popupHTML %1 %2',
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": ["html", "textcontainer"]

                }
            ],
			"colour": "#154360",
            "output": "popup"
        });
    }
}
Blockly.html['bindpopupHTML'] = function (block) {
    var value = Blockly.html.statementToCode(block, 'content', Blockly.html.ORDER_ATOMIC).replace(/ +/g, ' ').replace(/\n/g, '');
    return ".bindPopup('"+value+"')"
}
// geoSearch
Blockly.Blocks['geoSearch'] = {
    init: function () {
        this.jsonInit({
            "message0": '<addGeoSearch>',
            "previousStatement": "script",
            "nextStatement": "script",
            "colour": "#154360"
        })
    }
}
Blockly.html['geoSearch'] = function (block) {
    return 'L.Control.geocoder().addTo(maCarte);\n'
}
// COORDINATES
Blockly.Blocks["math_xy"] = {
    init: function() {
		this.jsonInit({
            "message0": "%1 , %2",
            "args0": [
                {
                    "type": "field_input",
                    "name": "NUMX",
                    "text": "49.5"
                },
				{
				  "type": "field_input",
                    "name": "NUMY",
                    "text": "0.15"
				}
            ],
            "output": "XY",
			"tooltip": "Coordonées : x , y",
            "colour": "#00CC00"
        })
    }
}
Blockly.html["math_xy"]=function(block){
    var codex = window.parseFloat(block.getFieldValue("NUMX"));
    var codey = window.parseFloat(block.getFieldValue("NUMY"));
    return codex+", "+codey
}
// routing
Blockly.Blocks['routing'] = {
    init: function () {
        this.jsonInit({
            "message0": '<Routing> Lat1, long1 %1 Lat2, long2 %2 ',
            "args0": [
                {
                    "type": "input_value",
                    "name": "PTA",
                    "check": "XY",
					"align": "RIGHT"
                },
                {
                    "type": "input_value",
                    "name": "PTB",
                    "check": "XY",
					"align": "RIGHT"
                }
            ],
            "previousStatement": "script",
            "nextStatement": "script",
            "colour": "#154360"
        });
    }
}
Blockly.html['routing'] = function (block) {
    var ptxya = Blockly.html.statementToCode(block, 'PTA', Blockly.html.ORDER_ATOMIC).trim();
    var ptxyb = Blockly.html.statementToCode(block, 'PTB', Blockly.html.ORDER_ATOMIC).trim();
    return 'L.Routing.control({waypoints:[['+ptxya+'], ['+ptxyb+']]}).addTo(maCarte);\n$(".leaflet-routing-collapse-btn").click();\n'
}
// scale
Blockly.Blocks['scale'] = {
    init: function () {
        this.jsonInit({
            "message0": '<addScale>',
            "previousStatement": "script",
            "nextStatement": "script",
            "colour": "#154360"
        })
    }
}
Blockly.html['scale'] = function (block) {
    return 'L.control.scale({imperial:false}).addTo(maCarte);\n'
}
// scale
Blockly.Blocks['line'] = {
    init: function () {
        this.jsonInit({
            "message0": '<Distance> Lat1, long1 %1 Lat2, long2 %2 ',
            "args0": [
                {
                    "type": "input_value",
                    "name": "PTA",
                    "check": "XY",
					"align": "RIGHT"
                },
                {
                    "type": "input_value",
                    "name": "PTB",
                    "check": "XY",
					"align": "RIGHT"
                }
            ],
            "previousStatement": "script",
            "nextStatement": "script",
            "colour": "#154360"
        })
    }
}
Blockly.html['line'] = function (block) {
    var ptxya = Blockly.html.statementToCode(block, 'PTA', Blockly.html.ORDER_ATOMIC).trim();
    var ptxyb = Blockly.html.statementToCode(block, 'PTB', Blockly.html.ORDER_ATOMIC).trim();	
	var code = "var mark1 = L.marker(["+ptxya+"], {icon: L.icon({iconUrl: 'media/map/markerA.png', iconAnchor: [25, 41], popupAnchor: [-15, -34]}), draggable: 'true'}).bindPopup('').addTo(maCarte);\nvar mark2 = L.marker(["+ptxyb+"], {icon: L.icon({iconUrl: 'media/map/markerB.png', iconAnchor: [10, 41], popupAnchor: [10, -34]}), draggable: 'true'}).bindPopup('').addTo(maCarte);\nvar ligne = L.polyline([],{color: '#FF0099'}).addTo(maCarte);\n"
	code += "mark1.on('dragend', findrag);\nmark2.on('dragend', findrag);\n"
	code += "mark1.on('drag', deplacement);\nmark2.on('drag', deplacement);\n"
    code += "function findrag(e) {\n  var mark = e.target;\n  mark.getPopup().setContent('Distance = '+Math.round(mark1.getLatLng().distanceTo(mark2.getLatLng()))+' m');\n  mark.openPopup();\n}\n";
	code += "function deplacement(e) {\n  ligne.setLatLngs([mark1.getLatLng(), mark2.getLatLng()]);\n}\n"
	return code
}
// HTMLoverlay tag
Blockly.Blocks['HTMLoverlay'] = {
    init: function () {
        this.jsonInit({
            "message0": '<insertHTML> Lat1, long1 %1 %2',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
                    "check": "XY"
                },
                {
                    "type": "input_statement",
                    "name": "content",
					"check": ["html", "textcontainer"]
                }
            ],
            "previousStatement": "script",
            "nextStatement": "script",
            "colour": "#154360"
        });
    }
}
Blockly.html['HTMLoverlay'] = function (block) {
    var statements_content = Blockly.html.statementToCode(block, 'content').trim().replace(/ +/g, ' ').replace(/\n/g, '');
    var block_modifier = Blockly.html.statementToCode(block, 'modifier', Blockly.html.ORDER_ATOMIC).trim();
    var code = "L.htmlOverlay('" + statements_content + "', ["+block_modifier+"], {zoom: maCarte.getZoom()}).addTo(maCarte);\n";
    return code
}
// onRightclick
Blockly.Blocks['onRightclick'] = {
    init: function () {
        this.jsonInit({
            "message0": '<onRightclick viewAdress>',
            "previousStatement": "script",
            "nextStatement": "script",
            "colour": "#154360"
        });
    }
}
Blockly.html['onRightclick'] = function (block) {
    var lat_val = block.getFieldValue('lat');
    var long_val = block.getFieldValue('long');
    return 'maCarte.on("contextmenu", function (e) {\n  L.esri.Geocoding.geocodeService().reverse().latlng(e.latlng).run(function(error, result){\n    L.popup().setLatLng(result.latlng).setContent(result.address.Match_addr).openOn(maCarte);\n  });\n});\n'
}

//////////////////////// canvas ///////////////////
// $Canvas
Blockly.Blocks['Scanvas'] = {
    init: function () {
        this.jsonInit({
            "message0": "canvas.init",
            "previousStatement": "script",
            "nextStatement": "script",
            "colour": "#cc33cc"
        });
    }
}
Blockly.html['Scanvas'] = function (block) {
    return "var canvas = document.getElementById('jcanvas');\ncontext = canvas.getContext('2d');\n$('#jcanvas').css('border','1px solid black');\n"
}
// ctx_rect
Blockly.Blocks['ctx_rect'] = {
    init: function () {
        this.jsonInit({
            "message0": "canvas.fillRect %1 x1,y1%2 width%3 height%4",
			"args0": [
                {
                    "type": "input_value",
					"check": "color",
                    "name": "color"
                },
				{
                    "type": "input_value",
                    "name": "pointA",
                    "check": "XY",
					"align": "RIGHT"
                },
				{
                    "type": "input_value",
                    "name": "width",
                    "check": "Number",
					"align": "RIGHT"
                },
				{
                    "type": "input_value",
                    "name": "height",
                    "check": "Number",
					"align": "RIGHT"
                }
            ],
            "previousStatement": "script",
            "nextStatement": "script",
			"colour": "#cc33cc"
        });
    }
}
Blockly.html['ctx_rect'] = function (block) {
	var val_color = Blockly.html.statementToCode(block, 'color', Blockly.html.ORDER_ATOMIC).trim() ;
	var val_xy_A = Blockly.html.statementToCode(block, 'pointA', Blockly.html.ORDER_ATOMIC).trim() ;
	var val_width = Blockly.html.statementToCode(block, 'width', Blockly.html.ORDER_ATOMIC).trim() ;
	var val_height = Blockly.html.statementToCode(block, 'height', Blockly.html.ORDER_ATOMIC).trim() ;
    return "context.fillStyle='"+val_color+"';\ncontext.fillRect("+val_xy_A+", "+val_width+", "+val_height+");\n"
}
// ctx_arc
Blockly.Blocks['ctx_arc'] = {
    init: function () {
        this.jsonInit({
            "message0": "canvas.arc %1 x,y%2 radius%3",
			"args0": [
                {
                    "type": "input_value",
					"check": "color",
                    "name": "color"
                },
				{
                    "type": "input_value",
                    "name": "point",
                    "check": "XY",
					"align": "RIGHT"
                },
				{
                    "type": "input_value",
                    "name": "radius",
                    "check": "Number",
					"align": "RIGHT"
                }
            ],
            "previousStatement": "script",
            "nextStatement": "script",
            "colour": "#cc33cc"
        });
    }
}
Blockly.html['ctx_arc'] = function (block) {
	var val_color = Blockly.html.statementToCode(block, 'color', Blockly.html.ORDER_ATOMIC).trim() ;
	var val_xy = Blockly.html.statementToCode(block, 'point', Blockly.html.ORDER_ATOMIC).trim();
	var val_width = Blockly.html.statementToCode(block, 'radius', Blockly.html.ORDER_ATOMIC).trim() ;
    return "context.beginPath();\ncontext.strokeStyle='"+val_color+"';\ncontext.arc("+val_xy+", "+val_width+", 0, Math.PI*2);\ncontext.stroke();\n"
}
// ctx_line
Blockly.Blocks['ctx_line'] = {
    init: function () {
        this.jsonInit({
            "message0": "canvas.line %1 x1,y1%2 x2,y2%3",
			"args0": [
                {
                    "type": "input_value",
                    "name": "color"
                },
				{
                    "type": "input_value",
                    "name": "pointA",
                    "check": "XY",
					"align": "RIGHT"
                },
				{
                    "type": "input_value",
                    "name": "pointB",
                    "check": "XY",
					"align": "RIGHT"
                }
            ],
            "previousStatement": "script",
            "nextStatement": "script",
            "colour": "#cc33cc"
        });
    }
}
Blockly.html['ctx_line'] = function (block) {
	var val_color = Blockly.html.statementToCode(block, 'color', Blockly.html.ORDER_ATOMIC).trim() ;
	var val_xya = Blockly.html.statementToCode(block, 'pointA', Blockly.html.ORDER_ATOMIC).trim() ;
	var val_xyb = Blockly.html.statementToCode(block, 'pointB', Blockly.html.ORDER_ATOMIC).trim() ;
    return "context.beginPath();\ncontext.strokeStyle='"+val_color+"';\ncontext.moveTo("+val_xya+");\ncontext.lineTo("+val_xyb+");\ncontext.stroke();\n"
}
// ctx_text
Blockly.Blocks['ctx_text'] = {
    init: function () {
        this.jsonInit({
            "message0": "canvas.fillText %1 x1,y1%2 text%3 font%4",
			"args0": [
                {
                    "type": "input_value",
                    "name": "color"
                },
				{
                    "type": "input_value",
                    "name": "point",
                    "check": "XY",
					"align": "RIGHT"
                },
				{
                    "type": "input_value",
                    "name": "text",
					"align": "RIGHT"
                },
				{
                    "type": "input_value",
                    "name": "font",
					"align": "RIGHT"
                }
            ],
            "previousStatement": "script",
            "nextStatement": "script",
            "colour": "#cc33cc"
        });
    }
}
Blockly.html['ctx_text'] = function (block) {
	var val_color = Blockly.html.statementToCode(block, 'color', Blockly.html.ORDER_ATOMIC).trim() ;
	var val_xy = Blockly.html.statementToCode(block, 'point', Blockly.html.ORDER_ATOMIC).trim() ;
	var val_text = Blockly.html.statementToCode(block, 'text', Blockly.html.ORDER_ATOMIC).trim() ;
	var val_font = Blockly.html.statementToCode(block, 'font', Blockly.html.ORDER_ATOMIC).trim() ;
	if (val_font) {
		var code = "context.font="+val_font+";\n"
	}else{
		var code = "context.font='14px serif';\n"
	}
    return code + "context.fillStyle='"+val_color+"';\ncontext.fillText("+val_text+", "+val_xy+");\n"
}