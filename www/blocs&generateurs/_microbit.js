"use strict";
goog.provide("Blockly.Blocks.Python");
goog.require("Blockly.Blocks");
///////////////////////////
Blockly.Blocks['module']={init:function(){
    this.appendDummyInput()
        .appendField("Modules micro_bit");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("acc & boussole")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "_check_a");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["séparé", "a"], ["combiné", "b"]]), "_dropdown");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("bluetooth")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "_check_b");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("matrice")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "_check_m");
    this.setInputsInline(false);
    this.setColour('#00929f')}
};
Blockly.Arduino['module']=function(block){
    var value_check_a = block.getFieldValue('_check_a') == "TRUE";
    var value_dropdown = block.getFieldValue('_dropdown');
    var value_check_b = block.getFieldValue('_check_b') == "TRUE";
    var value_check_m = block.getFieldValue('_check_m') == "TRUE";
	if (value_check_a) {
		if (value_dropdown=="a") {
			Blockly.Arduino.includes_["MAG3110_MMA8653"]="#include <SparkFun_MAG3110.h>\n#include <MMA8653.h>";
			Blockly.Arduino.definitions_["MAG3110_MMA8653"]="MAG3110 mag = MAG3110();\nMMA8653 accel;";
		} else {
			Blockly.Arduino.includes_["LSM303AGR_Sensor"]="#include <LSM303AGR_MAG_Sensor.h>\n#include <LSM303AGR_ACC_Sensor.h>";
			Blockly.Arduino.definitions_["LSM303AGR_Sensor"]="LSM303AGR_ACC_Sensor *Acc;\nLSM303AGR_MAG_Sensor *Mag;";
		}
	}
	if (value_check_b) {
		Blockly.Arduino.includes_["Adafruit_Microbit"]="#include <Adafruit_Microbit.h>";
		Blockly.Arduino.setups_["setup"]='microbit.BTLESerial.begin();\n  microbit.BTLESerial.setLocalName("microbit");\n  microbit.begin();';
		Blockly.Arduino.definitions_["Adafruit_Microbit"]="Adafruit_Microbit microbit;";
	} else {
		if (value_check_m) {
			Blockly.Arduino.includes_["Adafruit_Microbit"]="#include <Adafruit_Microbit.h>";
			Blockly.Arduino.variables_["Adafruit_Microbit"]="Adafruit_Microbit microbit;";
			Blockly.Arduino.setups_["setup"]='microbit.begin();';
		}
	}
	return ''
};
  ///////////////////////////
 /*		entrée/sortie		*/
///////////////////////////
Blockly.Blocks['io_readDigitalPin']={init:function() {
	this.jsonInit({
		"message0": Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT + "%1",
        "args0":[{
            "type": "input_value",
            "name": "PIN",
            "check": "Number"
        }],
        "colour": "#787746",
        "output": "Number",
        "tooltip": Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_TOOLTIP,
        "helpUrl": Blockly.Msg.MICROBIT_URL
	})
}};
Blockly.Python['io_readDigitalPin'] = function(block) {
	return ["pin" + Blockly.Python.valueToCode(block,"PIN", Blockly.Python.ORDER_NONE) + ".read_digital()", Blockly.Python.ORDER_ATOMIC]
};
//////////////
Blockly.Blocks['io_writeDigitalPin']={init:function() {
	this.jsonInit({
		"message0": Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT1 + "%1" + Blockly.Msg._AT + "%2",
        "args0":[{
            "type": "input_value",
            "name": "PIN",
            "check": "Number"
        },{
            "type": "input_value",
            "name": "VALUE",
            "check": "Boolean",
			"align": "RIGHT"
        }],
        "colour": "#787746",
        "previousStatement": null,
        "nextStatement": null,        
        "tooltip": Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP,
        "helpUrl": Blockly.Msg.MICROBIT_URL
	})
}};
Blockly.Python['io_writeDigitalPin'] = function(block) {
	var state = Blockly.Python.valueToCode(block, "VALUE", Blockly.Python.ORDER_NONE);
	var pin = Blockly.Python.valueToCode(block, "PIN", Blockly.Python.ORDER_NONE);
    if (state != 0 && state != 1) state = "True" == state ? 1 : 0 ;
    return "pin" + pin + ".write_digital(" + state + ")\n"
};
//////////////
Blockly.Blocks['io_readAnalogPin']={init:function() {
	var card=window.localStorage.card;
	this.jsonInit({
		"message0": Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT + "%1",
        "args0":[{
            "type": "field_dropdown",
            "name": "PIN",
            "options": profile[card].dropdownAnalog
        }],
        "colour": "#787746",
        "output": "Number",
        "tooltip": Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP,
        "helpUrl": Blockly.Msg.MICROBIT_URL
	})
}};
Blockly.Python['io_readAnalogPin'] = function(block) {
	return [block.getFieldValue("PIN") + ".read_analog()", Blockly.Python.ORDER_ATOMIC]
};
//////////////
Blockly.Blocks['io_writeAnalogPin']={init:function() {
	var card=window.localStorage.card;
	this.jsonInit({
		"message0": Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT1 + "%1 %2 " + Blockly.Msg._AT + " %3",
        "args0":[{
            "type": "field_dropdown",
            "name": "PIN",
            "options": profile[card].dropdownPWM
        },
		{"type": "input_dummy"
		},
		{
            "type": "input_value",
            "name": "VALUE",
            "check": "Number",
			"align": "RIGHT"
        }],
        "colour": "#787746",
        "previousStatement": null,
        "nextStatement": null,        
        "tooltip": Blockly.Msg.MICROBIT_ANALOG_WRITE_TOOLTIP,
        "helpUrl": Blockly.Msg.MICROBIT_URL
	})
}};
Blockly.Python['io_writeAnalogPin'] = function(block) {
	var value = Blockly.Python.valueToCode(block, "VALUE", Blockly.Python.ORDER_NONE);
	var pin = block.getFieldValue("PIN");
    if (value < 0) value = 0;
    if (value > 1023) value = 1023;
    return pin + ".write_analog(" + value + ")\n"
};
  ///////////////////////
 /*		actionneur		*/
/////////////////////// 
Blockly.Blocks['init_leds']={init:function() {
	this.jsonInit({
		"lastDummyAlign0": "CENTRE",
        "message0": Blockly.Msg.lcd_symbole + " %1 %2 %3 %4 %5 %6 %7 %8 %9 %10 %11 %12 %13 %14 %15 %16 %17 %18 %19 %20 %21 %22 %23 %24 %25 %26 %27 %28 %29 %30 %31",
        args0: [{
			"type": "field_variable",
			"name": "VAR",
			"variable": Blockly.Msg.VARIABLES_GET_ITEM
		},
        {
            "type": "input_dummy",
			"align": "CENTRE"
        },
		{
            "type": "field_checkbox",
            "checked": false,
            "name": "LED00"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED01"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED02"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED03"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED04"
        },
        {
            "type": "input_dummy",
			"align": "CENTRE"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED10"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED11"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED12"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED13"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED14"
        },
        {
            "type": "input_dummy",
			"align": "CENTRE"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED20"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED21"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED22"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED23"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED24"
        },
        {
            "type": "input_dummy",
			"align": "CENTRE"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED30"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED31"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED32"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED33"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED34"
        },
        {
            "type": "input_dummy",
			"align": "CENTRE"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED40"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED41"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED42"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED43"
        },
        {
            "type": "field_checkbox",
            "checked": false,
            "name": "LED44"
        },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#00929F",        
        "tooltip": Blockly.Msg.matrice16x8_symbole_tooltip,
        "helpUrl": Blockly.Msg.MICROBIT_URL
	})
}};
Blockly.Python['init_leds'] = function(block) {
	var vname=Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
	const BRIGHTNESS = 9;
    var image = "";
    for (var r = 0; r < 5; r++) {
        for (var c = 0; c < 5; c++) {
            var label = "LED" + r + "" + c;
            image += (block.getFieldValue(label, Blockly.Python.ORDER_MEMBER) === "TRUE") ? BRIGHTNESS : "0";
        }
        image += (r < 4) ? ":" : "";
    }
	Blockly.Python.definitions_[vname] = vname + ' = Image("' + image + '")';
    return ''
};
Blockly.Arduino['init_leds'] = function(block) {
	var vname=Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var image = "";
    for (var r = 0; r < 5; r++) {
		image += "B";
        for (var c = 0; c < 5; c++) {
            var label = "LED" + r + "" + c;
            image += (block.getFieldValue(label, Blockly.Arduino.ORDER_MEMBER) === "TRUE") ? "1" : "0";
        }
        image += (r < 4) ? ", " : "";
    }
	Blockly.Arduino.variables_[vname] = 'const uint8_t ' + vname + '[] = {' + image + '};';
    return ''
};
//////////////
Blockly.Blocks['show_leds']={init:function() {
	this.jsonInit({
		"message0": Blockly.Msg.matrice16x8_aff + " %1",
        "args0": [{
            "type": "field_variable",
			"name": "VAR",
			"variable": Blockly.Msg.VARIABLES_GET_ITEM
        }],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#00929F",
        "tooltip": Blockly.Msg.matrice16x8_aff_tooltip,
        "helpUrl": Blockly.Msg.MICROBIT_URL
	})
}};
Blockly.Python['show_leds'] = function(block) {
	var varname=Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    return "display.show(" + varname + ")\n"
};
Blockly.Arduino['show_leds'] = function(block) {
	var varname=Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    return "microbit.matrix.show(" + varname + ");\n"
};
//////////////
Blockly.Blocks['show_string']={init:function() {
	this.jsonInit({
		"message0": Blockly.Msg.MICROBIT_SHOW_STRING + " %1",
        "args0": [{
            "type": "input_value",
            "name": "TEXT",
			"check": "String"
        }],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#00929F",
        "tooltip": Blockly.Msg.MICROBIT_SHOW_STRING_TOOLTIP,
        "helpUrl": Blockly.Msg.MICROBIT_URL
	})
}};
Blockly.Python['show_string'] = function(block) {
	var texte = Blockly.Python.valueToCode(block, "TEXT", Blockly.Python.ORDER_NONE);
    return "display.scroll(" + texte + ")\n"
};
Blockly.Arduino['show_string'] = function(block) {
	return "microbit.matrix.print(" + Blockly.Arduino.valueToCode(block, "TEXT", Blockly.Arduino.ORDER_NONE) + ");\n"
};
//////////////
Blockly.Blocks['show_icon']={init:function() {
	this.jsonInit({
		"message0": Blockly.Msg.matrice16x8_aff +" %1",
        "args0": [{
            "type": "field_dropdown",
            "name": "ICON",
            "options": [["\u2661", "HEART_SMALL"],
                ["\u2665", "HEART"],
                ["\u25A6", "CHESSBOARD"],
                ["\u263A", "HAPPY"],
                ["\u2639", "SAD"]]
        }],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#00929F",
        "tooltip": Blockly.Msg.MICROBIT_SHOW_ICON_TOOLTIP,
        "helpUrl": Blockly.Msg.MICROBIT_URL
	})
}};
Blockly.Python['show_icon'] = function(block) {
	var img = block.getFieldValue("ICON");
    return "display.show(Image." + img + ")\n" 
};
Blockly.Arduino['show_icon'] = function(block) {
    return "microbit.matrix.show(microbit." + block.getFieldValue("ICON") + ");\n" 
};
//////////////
Blockly.Blocks['set_pixel']={init:function() {
	this.jsonInit({
		"message0": Blockly.Msg.MICROBIT_SET_PIXEL +" X %1 Y %2 "+Blockly.Msg._AT+" %3",
        "args0": [{
            "type": "input_value",
            "name": "X",
            "check": "Number"
        },{
            "type": "input_value",
            "name":"Y",
            "check": "Number",
			"align": "RIGHT"
        },{
            "type": "input_value",
            "name": "VALUE",
            "check": "Number" ,
			"align": "RIGHT"  
        }],
        "colour": "#00929F",
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": Blockly.Msg.matrice16x8_del_tooltip,
        "helpUrl": Blockly.Msg.MICROBIT_URL
	})
}};
Blockly.Python['set_pixel'] = function(block) {
	var x = Blockly.Python.valueToCode(block, "X", Blockly.Python.ORDER_NONE);
    if (x > 5) x = 5;
    var y = Blockly.Python.valueToCode(block, "Y", Blockly.Python.ORDER_NONE);
    if (y > 5) y = 5;
    var state = Blockly.Python.valueToCode(block, "VALUE", Blockly.Python.ORDER_NONE);
    if (state > 9) state = 9;
    return "display.set_pixel(" + x + "," + y + "," + state + ")\n"
};
Blockly.Arduino['set_pixel'] = function(block) {
	var x = Blockly.Arduino.valueToCode(block, "X", Blockly.Arduino.ORDER_NONE);
    if (x > 5) x = 5;
    var y = Blockly.Arduino.valueToCode(block, "Y", Blockly.Arduino.ORDER_NONE);
    if (y > 5) y = 5;
    var state = Blockly.Arduino.valueToCode(block, "VALUE", Blockly.Arduino.ORDER_NONE);
    return "microbit.matrix.drawPixel(" + x + "," + y + "," + state + ");\n"
};
//////////////
Blockly.Blocks['clear']={init:function() {
	this.jsonInit({
		"message0": Blockly.Msg.MICROBIT_CLEAR,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#00929F",
        "tooltip": Blockly.Msg.matrice16x8_efface_tooltip,
        "helpUrl": Blockly.Msg.MICROBIT_URL
	})
}};
Blockly.Python['clear'] = function(block) {
	return "display.clear()\n"
};
Blockly.Arduino['clear'] = function(block) {
	return "microbit.matrix.clear();\n"
};
//////////////
Blockly.Blocks['show']={init:function() {
	this.jsonInit({
		"message0": Blockly.Msg.MICROBIT_SHOW,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#00929F",
        "tooltip": Blockly.Msg.MICROBIT_SHOW_TOOLTIP,
        "helpUrl": Blockly.Msg.MICROBIT_URL
	})
}};
Blockly.Python['show'] = function(block) {
	return "display.show()\n"
};
//////////////
Blockly.Blocks["pixel_setcolor_rvb"]={init:function(){
	this.appendValueInput("broche").setCheck("Number").appendField(Blockly.Msg.pixel6);
	this.appendValueInput("r").setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.pixel3 + " R=");
    this.appendValueInput("v").setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("V=");
    this.appendValueInput("b").setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("B=");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00929F");
    this.setTooltip(Blockly.Msg.pixel3_tooltip);
    this.setHelpUrl("http://")}
};
Blockly.Python["pixel_setcolor_rvb"]=function(block){
    var pin = Blockly.Python.valueToCode(block, "broche", Blockly.Python.ORDER_ASSIGNMENT);
	var colorR = Blockly.Python.valueToCode(block, "r", Blockly.Python.ORDER_ASSIGNMENT);
	var colorV = Blockly.Python.valueToCode(block, "v", Blockly.Python.ORDER_ASSIGNMENT);
	var colorB = Blockly.Python.valueToCode(block, "b", Blockly.Python.ORDER_ASSIGNMENT);
    return "np[" + pin + "] = (" + colorR + ", " + colorV + ", " + colorB + ")\n"
};
  ///////////////
 /*   AUDIO   */ 
Blockly.Blocks['play_music']={init:function() {
	this.jsonInit({
		"message0": Blockly.Msg.MICROBIT_MUSIC_PLAY + "%1",
        "args0": [{
            "type": "field_dropdown",
            "name": "track",
            "options": Blockly.Msg.MICROBIT_PLAY_LIST
        }],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#00929F",
        "tooltip": Blockly.Msg.MICROBIT_MUSIC_PLAY_TOOLTIP,
        "helpUrl": Blockly.Msg.MICROBIT_URL
	})
}};
Blockly.Python['play_music'] = function(block) {
	var piste = block.getFieldValue("track");
	Blockly.Python.imports_["music"]="import music";
	return "music.play(" + piste + ")\n"
};
//////////////
Blockly.Blocks["plays"]={init:function(){
    this.appendDummyInput()
		.appendField(Blockly.Msg.MICROBIT_PLAYS1)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.MICROBIT_NOTATION), "note")
		.appendField(Blockly.Msg.MICROBIT_PLAYS2)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.MICROBIT_REST), "tempo")
		.appendField(Blockly.Msg.MICROBIT_PLAYS3);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00929F");
    this.setTooltip(Blockly.Msg.MICROBIT_PLAYS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.MICROBIT_URL)}
};
Blockly.Python["plays"]=function(block){
    var value_note=block.getFieldValue("note");
    var value_tempo=block.getFieldValue("tempo");
	Blockly.Python.imports_["music"]="import music";
	return 'music.play(["' + value_note + ':' + value_tempo +'"])\n'
};
//////////////
Blockly.Blocks["silence"]={init:function(){
    this.appendDummyInput()
		.appendField(Blockly.Msg.MICROBIT_SILENCE)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.MICROBIT_REST), "time")
		.appendField(Blockly.Msg.MICROBIT_PLAYS3);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00929F");
    this.setTooltip(Blockly.Msg.MICROBIT_SILENCE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.MICROBIT_URL)}
};
Blockly.Python["silence"]=function(block){
    var value_time=block.getFieldValue("time");
	return 'music.play(["R:' + value_time + '"])\n'
};
//////////////
Blockly.Blocks["microbit_tone"]={init:function(){
        this.setColour("#00929F");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendValueInput("freq").setCheck("Number").appendField(Blockly.Msg.MICROBIT_TONE1);
        this.appendValueInput("time").setCheck("Number").appendField(Blockly.Msg.MICROBIT_TONE2).setAlign(Blockly.ALIGN_RIGHT);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.MICROBIT_TONE_TOOLTIP)}
};
Blockly.Python["microbit_tone"]=function(block){
    var value_freq=Blockly.Python.valueToCode(block, "freq", Blockly.Python.ORDER_ATOMIC);
    var value_time=Blockly.Python.valueToCode(block, "time", Blockly.Python.ORDER_ATOMIC);
	Blockly.Python.imports_["music"]="import music";
    return "music.pitch(" + value_freq + ", " + value_time + ")\n"
};
  ///////////////////
 /*		capteur		*/
///////////////////
Blockly.Blocks['io_isButtonPressed']={init:function() {
	this.jsonInit({
		"message0": Blockly.Msg.MICROBIT_BT + " %1 " + Blockly.Msg.MICROBIT_IS_PRESSED,
        "args0": [{
            "type": "field_dropdown",
            "name": "BUTTON",
            "options": [
                ["A", "a"],
                ["B", "b"],
                ["A+B", "a+b"]
            ]
        }],
        "output": "Boolean",
        "colour": "#00929F",
        "tooltip": Blockly.Msg.bp_tooltip,
        "helpUrl": Blockly.Msg.MICROBIT_URL
	})
}};
Blockly.Python['io_isButtonPressed'] = function(block) {
	var code;
    var button = block.getFieldValue('BUTTON');
    if (button === 'a' || button === 'b') {
        code = 'button_' + button + '.is_pressed()';
    } else {
        code = 'button_a.is_pressed() and button_b.is_pressed()';
    }
    return [code, Blockly.Python.ORDER_ATOMIC]
};
Blockly.Arduino['io_isButtonPressed'] = function(block) {
    var button = block.getFieldValue('BUTTON') ;
	if (button == 'a') {
        Blockly.Arduino.setups_["setup_output_5"]="pinMode(5, INPUT);";
		var code = 'digitalRead(5)';
	}
    if (button == 'b') {
        Blockly.Arduino.setups_["setup_output_11"]="pinMode(11, INPUT);";
		var code = 'digitalRead(11)'
	}
    if (button == 'a+b') {
        Blockly.Arduino.setups_["setup_output_5"]="pinMode(5, INPUT);";
        Blockly.Arduino.setups_["setup_output_11"]="pinMode(11, INPUT);";
		var code = 'digitalRead(5) && digitalRead(11)';
    }
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
//////////////
Blockly.Blocks['sensors_getAcceleration']={init:function() {
	this.jsonInit({
		"message0": Blockly.Msg.MICROBIT_ACC + " %1",
        "args0": [{
            "type": "field_dropdown",
            "name": "AXIS",
            "options": [
                ["x", "x"],
                ["y", "y"],
                ["z", "z"]]
        }],
        "output": "Number",
        "colour": "#00929F",
        "tooltip": Blockly.Msg.MICROBIT_ACC_TOOLTIP,
        "helpUrl": Blockly.Msg.MICROBIT_URL
	})
}};
Blockly.Python['sensors_getAcceleration'] = function(block) {
	return ['accelerometer.get_' + block.getFieldValue('AXIS') + '()', Blockly.Python.ORDER_ATOMIC]
};
//////////////
Blockly.Blocks['sensors_getMagneticForce']={init:function() {
	this.jsonInit({
		"message0": Blockly.Msg.MICROBIT_COMPASS,
        "output": "Number",
        "colour": "#00929F",
        "tooltip": Blockly.Msg.MICROBIT_COMPASS_TOOLTIP,
        "helpUrl": Blockly.Msg.MICROBIT_URL
	})
}};
Blockly.Python['sensors_getMagneticForce'] = function(block) {
	return ['compass.heading()', Blockly.Python.ORDER_ATOMIC]
};
//////////////
Blockly.Blocks['sensors_calibrate']={init:function() {
	this.jsonInit({
		"message0": Blockly.Msg.MICROBIT_CAL_COMPASS,
        "colour": "#00929F",
        "tooltip": Blockly.Msg.MICROBIT_CAL_COMPASS_TOOLTIP,
        "helpUrl": Blockly.Msg.MICROBIT_URL
	})
}};
Blockly.Python['sensors_calibrate'] = function(block) {
	Blockly.Python.definitions_["calibrate"] = "compass.calibrate()";
	return ''
};
//////////////
Blockly.Blocks['sensors_getTemperature']={init:function() {
	this.jsonInit({
		message0: Blockly.Msg.MICROBIT_TEMP,
        "output": "Number",
        "colour": "#00929F",
        "tooltip": Blockly.Msg.MICROBIT_TEMP_TOOLTIP,
        "helpUrl": Blockly.Msg.MICROBIT_URL
	})
}};
Blockly.Python['sensors_getTemperature'] = function(block) {
    return ["temperature()", Blockly.Python.ORDER_ATOMIC]
};
//////////////
Blockly.Blocks['sensors_getLight']={init:function() {
	this.jsonInit({
		message0: Blockly.Msg.MICROBIT_LIGHT,
        "output": "Number",
        "colour": "#00929F",
        "tooltip": Blockly.Msg.MICROBIT_LIGHT_TOOLTIP,
        "helpUrl": Blockly.Msg.MICROBIT_URL
	})
}};
Blockly.Python['sensors_getLight'] = function(block) {
    return ["display.read_light_level()", Blockly.Python.ORDER_ATOMIC]
};
  ///////////////////////////
 /*		communication		*/
///////////////////////////
Blockly.Blocks['radioSendString']={init:function() {
	this.jsonInit({
		"message0": Blockly.Msg.MICROBIT_RADIO + " %1",
        "args0": [{
            "type": "input_value",
            "name": "STR",
            "check": "String"           
        }],
        "colour" : "#006000",
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": Blockly.Msg.MICROBIT_RADIO_TOOLTIP,
        "helpUrl": Blockly.Msg.MICROBIT_URL
	})
}};
Blockly.Python['radioSendString'] = function(block) {
	Blockly.Python.imports_["radio"] = "import radio";
    Blockly.Python.definitions_["radio_on"] = "radio.on()";
    var str = Blockly.Python.valueToCode(block, "STR", Blockly.Python.ORDER_NONE);
    return "radio.send(" + str + ")\n"
};
//////////////
Blockly.Blocks['onRadioDataReceive']={init:function() {
    this.appendValueInput("CASE0").appendField(Blockly.Msg.MICROBIT_RADIO_RECEPT);
    this.appendStatementInput("DO0").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
    this.setHelpUrl(Blockly.Msg.bluetooth_helpurl);
    this.setColour("#006000");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setMutator(new Blockly.Mutator(["bluetooth_create_item", "bluetooth_default"]));
    this.setTooltip(Blockly.Msg.MICROBIT_RADIO_RECEPT_TOOLTIP);
    this.casebreakCount_ = 0;
    this.defaultCount_ = 0
    },
    mutationToDom: function() {
        if (!this.casebreakCount_ && !this.defaultCount_) return null;
        var container = document.createElement("mutation");
        if (this.casebreakCount_) container.setAttribute("casebreak", this.casebreakCount_);
        if (this.defaultCount_) container.setAttribute("default", 1);
        return container
    },
    domToMutation: function(xmlElement) {
        this.casebreakCount_ = parseInt(xmlElement.getAttribute("casebreak"), 10);
        this.defaultCount_ = parseInt(xmlElement.getAttribute("default"), 10);
        for (var i = 1; i <= this.casebreakCount_; i++) {
            this.appendValueInput("CASE" + i).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK);
            this.appendStatementInput("DO" + i).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN)
        }
        if (this.defaultCount_) this.appendStatementInput("DEFAULT").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE)},
    decompose: function(workspace) {
        var containerBlock = workspace.newBlock( "bluetooth_create_container");
        containerBlock.initSvg();
        var connection = containerBlock.getInput("STACK").connection;
        for (var i = 1; i <= this.casebreakCount_; i++) {
            var casebreakBlock = workspace.newBlock( "bluetooth_create_item");
            casebreakBlock.initSvg();
            connection.connect(casebreakBlock.previousConnection);
            connection = casebreakBlock.nextConnection
        }
        if (this.defaultCount_) {
            var defaultBlock = workspace.newBlock( "bluetooth_default");
            defaultBlock.initSvg();
            connection.connect(defaultBlock.previousConnection)
        }
        return containerBlock
    },
    compose: function(containerBlock) {
        if (this.defaultCount_) this.removeInput("DEFAULT");
        this.defaultCount_ = 0;
        for (var i = this.casebreakCount_; i > 0; i--) {
            this.removeInput("CASE" + i);
            this.removeInput("DO" + i)
        }
        this.casebreakCount_ = 0;
        var clauseBlock = containerBlock.getInputTargetBlock("STACK");
        while (clauseBlock) {
            switch (clauseBlock.type) {
                case "bluetooth_create_item":
                    this.casebreakCount_++;
                    var ifInput = this.appendValueInput("CASE" + this.casebreakCount_).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK);
                    var doInput = this.appendStatementInput("DO" + this.casebreakCount_);
                    doInput.setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
                    if (clauseBlock.valueConnection_) ifInput.connection.connect(clauseBlock.valueConnection_);
                    if (clauseBlock.statementConnection_) doInput.connection.connect(clauseBlock.statementConnection_);
                    break;
                case "bluetooth_default":
                    this.defaultCount_++;
                    var defaultInput = this.appendStatementInput("DEFAULT");
                    defaultInput.setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE);
                    if (clauseBlock.statementConnection_) defaultInput.connection.connect(clauseBlock.statementConnection_);
                    break;
                default:
                    throw "Unknown block type.";
            }
            clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock()
        }
    },
    saveConnections: function(containerBlock) {
        var clauseBlock = containerBlock.getInputTargetBlock("STACK");
        var i = 1;
        while (clauseBlock) {
            switch (clauseBlock.type) {
                case "bluetooth_create_item":
                    var inputIf = this.getInput("CASE" + i);
                    var inputDo = this.getInput("DO" + i);
                    clauseBlock.valueConnection_ = inputIf && inputIf.connection.targetConnection;
                    clauseBlock.statementConnection_ = inputDo && inputDo.connection.targetConnection;
                    i++;
                    break;
                case "bluetooth_default":
                    var inputDo = this.getInput("DEFAULT");
                    clauseBlock.statementConnection_ = inputDo && inputDo.connection.targetConnection;
                    break;
                default:
                    throw "Unknown block type.";
            }
            clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock()
        }
    }
};
Blockly.Python['onRadioDataReceive'] = function(block) {
	Blockly.Python.imports_["radio"] = "import radio";
    Blockly.Python.definitions_["radio_on"] = "radio.on()";
    var n=0;
    var argument=Blockly.Python.valueToCode(block, "CASE" + n, Blockly.Python.ORDER_NONE);
    var branch=Blockly.Python.statementToCode(block, "DO" + n);
	var code="if radio.receive() == " + argument + ":\n" + branch;   
	for (n=1; n <= block.casebreakCount_; n++) {
        argument=Blockly.Python.valueToCode(block, "CASE" + n, Blockly.Python.ORDER_NONE);
        branch=Blockly.Python.statementToCode(block, "DO" + n);
        code += "if radio.receive() == " + argument + ":\n" + branch
    }
	return code
};
//////////////
Blockly.Blocks['print']={init:function() {
	this.jsonInit({
		"message0": Blockly.Msg.Serial_Write + " %1",
        "args0": [{
            "type": "input_value",
            "name": "STR"          
        }],
        "colour" : "#006000",
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": Blockly.Msg.Serial_write_tooltip,
        "helpUrl": Blockly.Msg.MICROBIT_URL
	})
}};
Blockly.Python['print'] = function(block) {
    var str = Blockly.Python.valueToCode(block, "STR", Blockly.Python.ORDER_NONE);
    return "print(" + str + ")\n"
};
Blockly.Arduino['print'] = function(block) {
    var str = Blockly.Arduino.valueToCode(block, "STR", Blockly.Python.ORDER_NONE);
	Blockly.Arduino.setups_["serial"]='Serial.begin(115200);';
    return "Serial.println(" + str + ");\n"
};
/////////////////
/* bluetooth  
///////////////
Blockly.Blocks["bluetooth_a"]={init:function(){
        this.appendValueInput("data_s").setCheck("Number").appendField(Blockly.Msg.bluetooth2);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#006000");
        this.setTooltip(Blockly.Msg.bluetooth2_tooltip);
        this.setHelpUrl(Blockly.Msg.bluetooth_helpurl)}
};
Blockly.Arduino["bluetooth_a"]=function(block){
	return "if (microbit.BTLESerial.available()) {\n  microbit.BTLESerial.write(" + Blockly.Arduino.valueToCode(block, "data_s", Blockly.Arduino.ORDER_NONE) + ");\n}\n"
};
///////////////
Blockly.Blocks["bluetooth"]={init:function(){
        this.appendDummyInput().appendField(Blockly.Msg.MICROBIT_BLUETOOTH);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#006000");
        this.setTooltip(Blockly.Msg.MICROBIT_BLUETOOTH_tooltip);
        this.setHelpUrl(Blockly.Msg.bluetooth_helpurl)}
};
Blockly.Arduino["bluetooth"]=function(block){
	return "microbit.BTLESerial.poll();\n"
};
//////////////
Blockly.Blocks["bluetooth_b"]={init:function(){
        this.appendValueInput("CASE0").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.bluetooth1+" "+Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK);
        this.appendStatementInput("DO0").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
        this.setHelpUrl(Blockly.Msg.bluetooth_helpurl);
        this.setColour("#006000");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setMutator(new Blockly.Mutator(["bluetooth_create_item", "bluetooth_default"]));
        this.setTooltip(Blockly.Msg.bluetooth1_tooltip);
        this.casebreakCount_ = 0;
        this.defaultCount_ = 0
    },
    mutationToDom: function() {
        if (!this.casebreakCount_ && !this.defaultCount_) return null;
        var container = document.createElement("mutation");
        if (this.casebreakCount_) container.setAttribute("casebreak", this.casebreakCount_);
        if (this.defaultCount_) container.setAttribute("default", 1);
        return container
    },
    domToMutation: function(xmlElement) {
        this.casebreakCount_ = parseInt(xmlElement.getAttribute("casebreak"), 10);
        this.defaultCount_ = parseInt(xmlElement.getAttribute("default"), 10);
        for (var i = 1; i <= this.casebreakCount_; i++) {
            this.appendValueInput("CASE" + i).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK);
            this.appendStatementInput("DO" + i).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN)
        }
        if (this.defaultCount_) this.appendStatementInput("DEFAULT").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE)},
    decompose: function(workspace) {
        var containerBlock = workspace.newBlock( "bluetooth_create_container");
        containerBlock.initSvg();
        var connection = containerBlock.getInput("STACK").connection;
        for (var i = 1; i <= this.casebreakCount_; i++) {
            var casebreakBlock = workspace.newBlock( "bluetooth_create_item");
            casebreakBlock.initSvg();
            connection.connect(casebreakBlock.previousConnection);
            connection = casebreakBlock.nextConnection
        }
        if (this.defaultCount_) {
            var defaultBlock = workspace.newBlock( "bluetooth_default");
            defaultBlock.initSvg();
            connection.connect(defaultBlock.previousConnection)
        }
        return containerBlock
    },
    compose: function(containerBlock) {
        if (this.defaultCount_) this.removeInput("DEFAULT");
        this.defaultCount_ = 0;
        for (var i = this.casebreakCount_; i > 0; i--) {
            this.removeInput("CASE" + i);
            this.removeInput("DO" + i)
        }
        this.casebreakCount_ = 0;
        var clauseBlock = containerBlock.getInputTargetBlock("STACK");
        while (clauseBlock) {
            switch (clauseBlock.type) {
                case "bluetooth_create_item":
                    this.casebreakCount_++;
                    var ifInput = this.appendValueInput("CASE" + this.casebreakCount_).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK);
                    var doInput = this.appendStatementInput("DO" + this.casebreakCount_);
                    doInput.setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
                    if (clauseBlock.valueConnection_) ifInput.connection.connect(clauseBlock.valueConnection_);
                    if (clauseBlock.statementConnection_) doInput.connection.connect(clauseBlock.statementConnection_);
                    break;
                case "bluetooth_default":
                    this.defaultCount_++;
                    var defaultInput = this.appendStatementInput("DEFAULT");
                    defaultInput.setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE);
                    if (clauseBlock.statementConnection_) defaultInput.connection.connect(clauseBlock.statementConnection_);
                    break;
                default:
                    throw "Unknown block type.";
            }
            clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock()
        }
    },
    saveConnections: function(containerBlock) {
        var clauseBlock = containerBlock.getInputTargetBlock("STACK");
        var i = 1;
        while (clauseBlock) {
            switch (clauseBlock.type) {
                case "bluetooth_create_item":
                    var inputIf = this.getInput("CASE" + i);
                    var inputDo = this.getInput("DO" + i);
                    clauseBlock.valueConnection_ = inputIf && inputIf.connection.targetConnection;
                    clauseBlock.statementConnection_ = inputDo && inputDo.connection.targetConnection;
                    i++;
                    break;
                case "bluetooth_default":
                    var inputDo = this.getInput("DEFAULT");
                    clauseBlock.statementConnection_ = inputDo && inputDo.connection.targetConnection;
                    break;
                default:
                    throw "Unknown block type.";
            }
            clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock()
        }
    }
};
Blockly.Arduino["bluetooth_b"]=function(block){
    var n=0;
    var argument=Blockly.Arduino.valueToCode(block, "CASE" + n, Blockly.Arduino.ORDER_NONE);
    var branch=Blockly.Arduino.statementToCode(block, "DO" + n);
	var code="if (microbit.BTLESerial.available()) {\n  char dataR=microbit.BTLESerial.read();\n  if (dataR == " + argument + ") {\n  " + branch + "  }\n";
	for (n=1; n <= block.casebreakCount_; n++) {
        argument=Blockly.Arduino.valueToCode(block, "CASE" + n, Blockly.Arduino.ORDER_NONE);
        branch=Blockly.Arduino.statementToCode(block, "DO" + n);
        code += "  if (dataR == " + argument + ") {\n  " + branch + "  }\n"
    }
    code += "}\n"
	return code
};
//////////////
Blockly.Blocks["bluetooth_create_item"]={init:function(){
        this.setColour("#006000");
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.CONTROLS_IF_ELSEIF_TOOLTIP);
        this.contextMenu = false
    }
};
Blockly.Blocks["bluetooth_default"]={init:function(){
        this.setColour("#006000");
        this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_SWITCH_MSG_DEFAULT);
        this.setPreviousStatement(true);
        this.setTooltip(Blockly.Msg.CONTROLS_IF_ELSE_TOOLTIP);
        this.contextMenu = false
    }
};
Blockly.Blocks["bluetooth_create_container"]={init:function(){
        this.setColour("#006000");
        this.appendDummyInput().appendField(Blockly.Msg.bluetooth1+" "+Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK);
        this.appendStatementInput("STACK");
        this.setTooltip(Blockly.Msg.CONTROLS_IF_IF_TOOLTIP);
        this.contextMenu = false
    }
};
//////////////
*/