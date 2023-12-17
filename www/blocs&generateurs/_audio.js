"use strict";
goog.provide("Blockly.Blocks.arduino");
goog.require("Blockly.Blocks");

Blockly.Blocks["play"]={init:function(){
    this.appendValueInput("PIN").setCheck("Number")
		.appendField(Blockly.Msg.MICROBIT_PLAYS1)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.note), "note")
		.appendField(Blockly.Msg.MICROBIT_PLAYS2)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.tempo), "tempo")
		.appendField(Blockly.Msg.MICROBIT_PLAYS3 + " " + Blockly.Msg.pin);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00929F");
    this.setTooltip(Blockly.Msg.play_tooltip)}
};
Blockly.Arduino["play"]=function(block){
    var value_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    var value_note=block.getFieldValue("note");
    var value_tempo=block.getFieldValue("tempo");
    Blockly.Arduino.setups_["setup_output" + value_pin]="pinMode(" + value_pin + ", OUTPUT);";
    return "tone(" + value_pin + "," + value_note + "," + value_tempo + ");\ndelay(" + value_tempo + ");\n"
};
Blockly.Python["play"]=function(block){
    var value_pin=Blockly.Python.valueToCode(block, "PIN", Blockly.Python.ORDER_ATOMIC);
    var value_note=block.getFieldValue("note");
    var value_tempo=block.getFieldValue("tempo");
	Blockly.Python.imports_["pin"]="from machine import Pin";
	Blockly.Python.imports_["pwm"]="from machine import PWM";
	Blockly.Python.imports_["time"]="import time";
	return "Play_"+value_pin+" = PWM(Pin("+value_pin+"), freq=" + value_note + ")\ntime.sleep(" + value_tempo + ")\nPlay_" + value_pin + ".deinit()\n"
};
//////////////
Blockly.Blocks["tone"]={init:function(){
        this.setColour("#00929F");
        this.appendValueInput("PIN").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ARDUINO_TONE_INPUT1);
        this.appendValueInput("NUM").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ARDUINO_TONE_INPUT2);
        this.appendValueInput("TPS").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ARDUINO_TONE_INPUT3);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARDUINO_TONE_TOOLTIP)}
};
Blockly.Arduino["tone"]=function(block){
    var value_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    var value_num=Blockly.Arduino.valueToCode(block, "NUM", Blockly.Arduino.ORDER_ATOMIC);
    var value_tps=Blockly.Arduino.valueToCode(block, "TPS", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_["setup_output" + value_pin]="pinMode(" + value_pin + ", OUTPUT);";
    return "tone(" + value_pin + "," + value_num + "," + value_tps + ");\ndelay(" + value_tps + ");\n"
};
Blockly.Python["tone"]=function(block){
    var dropdown_pin=Blockly.Python.valueToCode(block, "PIN", Blockly.Python.ORDER_ATOMIC);
    var value_num=Blockly.Python.valueToCode(block, "NUM", Blockly.Python.ORDER_ATOMIC);
    var value_tps=Blockly.Python.valueToCode(block, "TPS", Blockly.Python.ORDER_ATOMIC);
	Blockly.Python.imports_["pin"]="from machine import Pin";
	Blockly.Python.imports_["pwm"]="from machine import PWM";
    Blockly.Python.imports_["time"]="import time";
    return "Buzzer_"+dropdown_pin+" = PWM(Pin("+dropdown_pin+"), freq=" + value_num + ")\ntime.sleep(" + value_tps + ")\nBuzzer_"+dropdown_pin+".deinit()\n"
};
//////////////
Blockly.Blocks["beep"]={init:function(){
    this.appendValueInput("PIN").setCheck("Number").appendField(Blockly.Msg.beep);
    this.setColour("#00929F");
    this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.beep_TOOLTIP)}
};
Blockly.Arduino["beep"]=function(block){
    var value_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_["setup_output" + value_pin]="pinMode(" + value_pin + ", OUTPUT);";
    return "tone(" + value_pin + ",440,1000);\ndelay(1000);\n"
};
Blockly.Python["beep"]=function(block){
    var value_pin=Blockly.Python.valueToCode(block, "PIN", Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.setups_["setup_output" + value_pin]="pinMode(" + value_pin + ", OUTPUT);";
    return "tone(" + value_pin + ",440,1000);\ndelay(1000);\n"
};
//////////////
Blockly.Blocks["notone"]={init:function(){
        this.setColour("#00929F");
        this.appendValueInput("PIN").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ARDUINO_NOTONE_INPUT);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARDUINO_NOTONE_TOOLTIP)}
};
Blockly.Arduino["notone"]=function(block){
    var value_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_["setup_output" + value_pin]="pinMode(" + value_pin + ", OUTPUT);";
    return "noTone(" + value_pin + ");\n"
};
Blockly.Python["notone"]=function(block){
    var value_pin=Blockly.Python.valueToCode(block, "PIN", Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.setups_["setup_output" + value_pin]="pinMode(" + value_pin + ", OUTPUT);";
    return "noTone(" + value_pin + ");\n"
};
//////////////
Blockly.Blocks["lp2i_mp3_init"]={
	init:function(){
        this.appendDummyInput().appendField(new Blockly.FieldImage("data:image/jpeg;base64,/9j/4RDcRXhpZgAATU0AKgAAAAgABAE7AAIAAAAGAAAISodpAAQAAAABAAAIUJydAAEAAAAMAAAQyOocAAcAAAgMAAAAPgAAAAAc6gAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGJhYmFzAAAFkAMAAgAAABQAABCekAQAAgAAABQAABCykpEAAgAAAAM0NAAAkpIAAgAAAAM0NAAA6hwABwAACAwAAAiSAAAAABzqAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAxNjowMjoxNCAxNzozMDozMQAyMDE2OjAyOjE0IDE3OjMwOjMxAAAAYgBhAGIAYQBzAAAA/9sAQwABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB/9sAQwEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB/8AAEQgANQAyAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAAB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", 40, 42)).appendField(Blockly.Msg.lp2i_mp3);
		this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg.lp2i_mp3_com)
			.appendField(new Blockly.FieldDropdown([["série","0"],["logicielle","1"]],function(option){this.sourceBlock_.updateShape(option)}), "COM");
        this.appendDummyInput("play").setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg.lp2i_mp3_autoplay)
			.appendField(new Blockly.FieldCheckbox("FALSE"), "play");
        this.appendValueInput("Volume").setAlign(Blockly.ALIGN_RIGHT)
			.setCheck("Number").appendField(Blockly.Msg.lp2i_mp3_Volume);
        this.setInputsInline(false);
        this.setColour("#00929F");
        this.setTooltip(Blockly.Msg.lp2i_mp3_tooltip)
	}, 
	updateShape:function(option){
		if (option=="1") {
			this.removeInput("play");
			this.removeInput("rxtx");
			this.removeInput("Volume");
			this.appendDummyInput("play").setAlign(Blockly.ALIGN_RIGHT)
				.appendField(Blockly.Msg.lp2i_mp3_autoplay)
				.appendField(new Blockly.FieldCheckbox("FALSE"), "play");
			this.appendDummyInput("rxtx").setAlign(Blockly.ALIGN_RIGHT)
				.appendField("Rx").appendField(new Blockly.FieldDropdown(Blockly.Msg.rxtx), "PIN1")
				.appendField("/ Tx").appendField(new Blockly.FieldDropdown(Blockly.Msg.rxtx), "PIN2");
			this.appendValueInput("Volume").setAlign(Blockly.ALIGN_RIGHT)
				.setCheck("Number").appendField(Blockly.Msg.lp2i_mp3_Volume);
		} 
		if (option=="0") {
			this.removeInput("play");
			this.removeInput("rxtx");
			this.removeInput("Volume");
			this.appendDummyInput("play").setAlign(Blockly.ALIGN_RIGHT)
				.appendField(Blockly.Msg.lp2i_mp3_autoplay)
				.appendField(new Blockly.FieldCheckbox("FALSE"), "play");
			this.appendValueInput("Volume").setAlign(Blockly.ALIGN_RIGHT)
				.setCheck("Number").appendField(Blockly.Msg.lp2i_mp3_Volume);
		}
    },
    mutationToDom:function(){
        var container = document.createElement("mutation");
        container.setAttribute("COM", this.getFieldValue("COM"));
        return container
    },
    domToMutation:function(xmlElement){
        this.updateShape(xmlElement.getAttribute("COM"))
    }
};
Blockly.Arduino["lp2i_mp3_init"]=function(block){
	var com_value=block.getFieldValue('COM');
    var autoplay=block.getFieldValue('play') == 'TRUE';
    var vol=Blockly.Arduino.valueToCode(block, "Volume", Blockly.Arduino.ORDER_ATOMIC);
	if (com_value=="1"){
		var rx=block.getFieldValue('PIN1');
		var tx=block.getFieldValue('PIN2');
		Blockly.Arduino.includes_["dfplayer"]='#include "SoftwareSerial.h"\n#include "DFPlayerMini.h"';
		Blockly.Arduino.definitions_["dfplayer"]="SoftwareSerial  MP3Serial("+tx+", "+rx+");\nDFPlayerMini MP3;";
		Blockly.Arduino.setups_["dfplayer_begin"]="MP3Serial.begin(9600);\n  MP3.begin(MP3Serial);";
		if (autoplay){
			Blockly.Arduino.setups_["dfplayer"]="MP3.volume("+vol+");\n  MP3.enableLoopAll();";
		} else {
			Blockly.Arduino.setups_["dfplayer"]="MP3.volume("+vol+");";
		}
	} else {
		Blockly.Arduino.includes_["dfplayer"]='#include "DFPlayerMini.h"';
		Blockly.Arduino.definitions_["dfplayer"]="DFPlayerMini MP3;";
		Blockly.Arduino.setups_["dfplayer_begin"]="Serial.begin(9600);\n  MP3.begin(Serial);";
		if (autoplay){
			Blockly.Arduino.setups_["dfplayer"]="MP3.volume("+vol+");\n  MP3.enableLoopAll();";
		} else {
			Blockly.Arduino.setups_["dfplayer"]="MP3.volume("+vol+");";
		}	
	}
	return ""
};
Blockly.Python["lp2i_mp3_init"]=function(block){
    var autoplay=block.getFieldValue('play') == 'TRUE';
    var vol=Blockly.Python.valueToCode(block, "Volume", Blockly.Python.ORDER_ATOMIC);
	var volume=parseInt(vol);
    Blockly.Python.imports_["kt403a"]="from kt403A import KT403A";
	if (volume>48){
		var volume_hex="0x30";
	}else{
		var volume_hex="0x"+volume.toString(16);
	}
    if (autoplay){
		Blockly.Python.definitions_["setup_mp3"]="mp3 = KT403A(1, 3, 4)\nmp3.SetVolume(" + volume_hex + ")\nmp3.EnableLoopAll()";
	}else{
		Blockly.Python.definitions_["setup_mp3"]="mp3 = KT403A(1, 3, 4)\nmp3.SetVolume(" + volume_hex + ")";
	};
    return ""
};
//////////////
Blockly.Blocks["lp2i_mp3_volume"]={init:function(){
        this.appendValueInput("Volume").setCheck("Number").appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABAhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjY1RTYzOTA2ODZDRjExREJBNkUyRDg4N0NFQUNCNDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBBNkM4Q0REODUzNjExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBBNkM4Q0RDODUzNjExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTk5NzA1OGEtZDI3OC00NDZkLWE4ODgtNGM4MGQ4YWI1NzNmIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzRkZmQxMGMtY2NlNS0xMTc4LWE5OGQtY2NkZmM5ODk5YWYwIi8+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+Z2x5cGhpY29uczwvcmRmOmxpPiA8L3JkZjpBbHQ+IDwvZGM6dGl0bGU+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ZCM1gAAAAJ1JREFUeNpi+P//PwM+DAQGQPwBTUwBziZGMwNYGUQjEF+AYgG8BiBrRjIgAMYH4gacBqBrhhkAlVsAFQPJC6BrFADiAmSNWAxQQBJPYEC3CRdGs+gCVHwBE5DgZyAdbIDSCkwMFAKqGPCRIgOAgQJKEIwgDOQLAnEhEYYGQOkH5KQD1GgkJSUSTEhE5AUDopIyvtwIBBOQMxNAgAEAuSU2gW6bTpkAAAAASUVORK5CYII=", 16, 15, "+/-"))
			.setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.lp2i_mp3_vol);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#00929F");
        this.setTooltip(Blockly.Msg.lp2i_mp3_vol_tooltip)}
};
Blockly.Arduino["lp2i_mp3_volume"]=function(block){
    var vol=Blockly.Arduino.valueToCode(block, "Volume", Blockly.Arduino.ORDER_ATOMIC);
	return "MP3.volume(" +vol+ ");\n"
};
Blockly.Python["lp2i_mp3_volume"]=function(block){
    var vol=Blockly.Python.valueToCode(block, "Volume", Blockly.Python.ORDER_ATOMIC);
	var volume=parseInt(vol);
	if (volume>48){
		var volume_hex="0x30";
	}else{
		var volume_hex="0x"+volume.toString(16);
	}
	return "mp3.SetVolume(" + volume_hex + ")\n"
};
//////////////
Blockly.Blocks["lp2i_mp3_next"]={init:function(){
        this.appendDummyInput().appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABAhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjY1RTYzOTA2ODZDRjExREJBNkUyRDg4N0NFQUNCNDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAwMTg1RDMxODUzNjExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAwMTg1RDMwODUzNjExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTk5NzA1OGEtZDI3OC00NDZkLWE4ODgtNGM4MGQ4YWI1NzNmIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzRkZmQxMGMtY2NlNS0xMTc4LWE5OGQtY2NkZmM5ODk5YWYwIi8+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+Z2x5cGhpY29uczwvcmRmOmxpPiA8L3JkZjpBbHQ+IDwvZGM6dGl0bGU+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+wcaEcAAAAH9JREFUeNpiYGBg+A/ECf///2cghIHgA1Q9iAYzQHgBEAsQ0PgfCaNwLgCxAjkaYc5wIEcjDDeQqxGENyD7mxSNIPwAiA3I0QjzdwKyGCNMN6mAiYFMQKzGj0AciC5IyH8XyAkcsqKjgC5J7gK+HIJL4wIi8iOKxg/kZGSAAAMAVFNP2P+hQjMAAAAASUVORK5CYII=", 11, 14, ">>")).appendField(Blockly.Msg.lp2i_mp3_next);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#00929F");
        this.setTooltip(Blockly.Msg.lp2i_mp3_next_tooltip)}
};
Blockly.Arduino["lp2i_mp3_next"]=function(block){
    return "MP3.next();\n"
};
Blockly.Python["lp2i_mp3_next"]=function(block){
    return "mp3.PlayNext()\n"
};
//////////////
Blockly.Blocks["lp2i_mp3_prev"]={init:function(){
        this.appendDummyInput().appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABAhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjY1RTYzOTA2ODZDRjExREJBNkUyRDg4N0NFQUNCNDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJBMDU0MERBODUzNTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJBMDU0MEQ5ODUzNTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTk5NzA1OGEtZDI3OC00NDZkLWE4ODgtNGM4MGQ4YWI1NzNmIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzRkZmQxMGMtY2NlNS0xMTc4LWE5OGQtY2NkZmM5ODk5YWYwIi8+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+Z2x5cGhpY29uczwvcmRmOmxpPiA8L3JkZjpBbHQ+IDwvZGM6dGl0bGU+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+nEjlMgAAAI1JREFUeNpiYGBg+ADE/0H0////GQhhIEiAqgcTYExAgwAQL0BST1gjECgA8QVktQQ1AoEDkneI0wgEDVg04NYI9c8GPJowNQKBARA/IKAJVSM0qD8Qoek/I0w3qYBsjUxo/EAg/kisZmyBc4GkwKEoOtASQAFZGslOcmhOv0CyRiQDULIVORn5A0CAAQBJf1DWEisqAgAAAABJRU5ErkJggg==", 11, 14, "<<")).appendField(Blockly.Msg.lp2i_mp3_prev);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#00929F");
        this.setTooltip(Blockly.Msg.lp2i_mp3_prev_tooltip)}
};
Blockly.Arduino["lp2i_mp3_prev"]=function(block){
    return "MP3.previous();\n"
};
Blockly.Python["lp2i_mp3_prev"]=function(block){
    return "mp3.PlayPrevious()\n"
};
//////////////
Blockly.Blocks["lp2i_mp3_pause"]={init:function(){
        this.appendDummyInput().appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAYAAAAvf+5AAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABAhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjY1RTYzOTA2ODZDRjExREJBNkUyRDg4N0NFQUNCNDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYzRkRFQjc1ODUzNTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYzRkRFQjc0ODUzNTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTk5NzA1OGEtZDI3OC00NDZkLWE4ODgtNGM4MGQ4YWI1NzNmIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzRkZmQxMGMtY2NlNS0xMTc4LWE5OGQtY2NkZmM5ODk5YWYwIi8+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+Z2x5cGhpY29uczwvcmRmOmxpPiA8L3JkZjpBbHQ+IDwvZGM6dGl0bGU+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Zpm4zgAAADhJREFUeNpiYGBg+ADE/6H4w////xlAGF2cEcqAA6AikBgDIyMjijgTA5FgVOHIUvgRiY+TDRBgABwUFpfIuBw0AAAAAElFTkSuQmCC", 11, 14, "||"))
			.appendField(Blockly.Msg.lp2i_mp3_pause);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#00929F");
        this.setTooltip(Blockly.Msg.lp2i_mp3_pause_tooltip)}
};
Blockly.Arduino["lp2i_mp3_pause"]=function(block){
    return "MP3.pause();\n"
};
Blockly.Python["lp2i_mp3_pause"]=function(block){
    return "mp3.Pause()\n"
};
//////////////
Blockly.Blocks["lp2i_mp3_play_track"]={init:function(){
    this.appendValueInput("num").setCheck("Number").appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABAhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjY1RTYzOTA2ODZDRjExREJBNkUyRDg4N0NFQUNCNDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYzRkRFQjcxODUzNTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYzRkRFQjcwODUzNTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTk5NzA1OGEtZDI3OC00NDZkLWE4ODgtNGM4MGQ4YWI1NzNmIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzRkZmQxMGMtY2NlNS0xMTc4LWE5OGQtY2NkZmM5ODk5YWYwIi8+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+Z2x5cGhpY29uczwvcmRmOmxpPiA8L3JkZjpBbHQ+IDwvZGM6dGl0bGU+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+5iogFwAAAGhJREFUeNpiYGBgKABigf///zOQg0EARH4A4gZyDIIZ8B/JoAJKDIDhB0CcQIkBRBtEyABkgxwoMQCGD6AbRKoBGAYxQgXIBRuZGKgAKPIC3QLxArnRSHZCIjspk52ZKMrOFBUoAAEGAKnq593MQAZtAAAAAElFTkSuQmCC", 11, 15))
		.appendField(Blockly.Msg.lp2i_mp3_play+" n°");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00929F");
    this.setTooltip(Blockly.Msg.lp2i_mp3_play_track_tooltip)}
};
Blockly.Arduino["lp2i_mp3_play_track"]=function(block){
	var piste=Blockly.Arduino.valueToCode(block, "num", Blockly.Arduino.ORDER_ATOMIC);
    return "MP3.play("+piste+");\n"
};
Blockly.Python["lp2i_mp3_play_track"]=function(block){
	var piste=Blockly.Python.valueToCode(block, "num", Blockly.Python.ORDER_ATOMIC);
    return "mp3.PlaySpecific("+piste+")\n"
};
//////////////
Blockly.Blocks["lp2i_mp3_play"]={init:function(){
    this.appendDummyInput().appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABAhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjY1RTYzOTA2ODZDRjExREJBNkUyRDg4N0NFQUNCNDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYzRkRFQjcxODUzNTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYzRkRFQjcwODUzNTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTk5NzA1OGEtZDI3OC00NDZkLWE4ODgtNGM4MGQ4YWI1NzNmIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzRkZmQxMGMtY2NlNS0xMTc4LWE5OGQtY2NkZmM5ODk5YWYwIi8+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+Z2x5cGhpY29uczwvcmRmOmxpPiA8L3JkZjpBbHQ+IDwvZGM6dGl0bGU+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+5iogFwAAAGhJREFUeNpiYGBgKABigf///zOQg0EARH4A4gZyDIIZ8B/JoAJKDIDhB0CcQIkBRBtEyABkgxwoMQCGD6AbRKoBGAYxQgXIBRuZGKgAKPIC3QLxArnRSHZCIjspk52ZKMrOFBUoAAEGAKnq593MQAZtAAAAAElFTkSuQmCC", 11, 15))
		.appendField(Blockly.Msg.lp2i_mp3_play);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00929F");
    this.setTooltip(Blockly.Msg.lp2i_mp3_play_tooltip)}
};
Blockly.Arduino["lp2i_mp3_play"]=function(block){
    return "MP3.start();\n"
};
Blockly.Python["lp2i_mp3_play"]=function(block){
    return "mp3.Play()\n"
};
//////////////
Blockly.Blocks["lp2i_mp3_etat"]={init:function(){
    this.appendValueInput("num").setCheck("Number").appendField(Blockly.Msg.lp2i_mp3_etat);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.lp2i_mp3_etat_tooltip);
    this.setColour("#00929F");}
};
Blockly.Arduino["lp2i_mp3_etat"]=function(block){
	var piste=Blockly.Arduino.valueToCode(block, "num", Blockly.Arduino.ORDER_ATOMIC);
    return ["digitalRead("+piste+") == LOW", Blockly.Arduino.ORDER_ATOMIC] 
};
Blockly.Python["lp2i_mp3_etat"]=function(block){
    return ["", Blockly.Arduino.ORDER_ATOMIC] 
};
//////////////
Blockly.Blocks["grove_mp3_init"]={
	init:function(){
        this.appendDummyInput().appendField(new Blockly.FieldImage("data:image/png;base64,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", 55, 32)).appendField(Blockly.Msg.lp2i_mp3);
		this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg.lp2i_mp3_com)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.GROVE_mp3_COM), "COM");
        this.appendValueInput("Volume").setAlign(Blockly.ALIGN_RIGHT)
			.setCheck("Number").appendField(Blockly.Msg.lp2i_mp3_Volume);
        this.setInputsInline(false);
        this.setColour("#727272");
        this.setTooltip(Blockly.Msg.GROVE_mp3_tooltip)
	}
};
Blockly.Arduino["grove_mp3_init"]=function(block){
	var com_value=block.getFieldValue('COM');
    var vol=Blockly.Arduino.valueToCode(block, "Volume", Blockly.Arduino.ORDER_ATOMIC);
	var code = "Mp3Player.volume(" +vol+ ");\n" ;
	var firstChild = this.getChildren()[0];
	if (firstChild) if (!firstChild.getFieldValue('VAR')) {
		var volume = parseInt(vol); 
		var volume_hex ;
		if (volume>30){
			volume_hex="0x1F";
		}else{
			volume_hex="0x"+volume.toString(16);
		}
		code = "Mp3Player.volume(" +volume_hex+ ");\n"
	}
	Blockly.Arduino.includes_["GROVE_MP3"]='#include "WT2003S_Player.h"\n#include "SoftwareSerial.h"';
	Blockly.Arduino.definitions_["GROVE_MP3"]="SoftwareSerial COMSerial("+com_value+");\nWT2003S<SoftwareSerial> Mp3Player;";
	Blockly.Arduino.setups_["GROVE_MP3"]="COMSerial.begin(9600);\n  Mp3Player.init(COMSerial);\n  " +code;
	return ""
};
Blockly.Python["grove_mp3_init"]=function(block){
    var autoplay=block.getFieldValue('play') == 'TRUE';
    var vol=Blockly.Python.valueToCode(block, "Volume", Blockly.Python.ORDER_ATOMIC);
	var volume=parseInt(vol);
    Blockly.Python.imports_["kt403a"]="from kt403A import KT403A";
	if (volume>48){
		var volume_hex="0x30";
	}else{
		var volume_hex="0x"+volume.toString(16);
	}
    if (autoplay){
		Blockly.Python.definitions_["setup_mp3"]="mp3 = KT403A(1, 3, 4)\nmp3.SetVolume(" + volume_hex + ")\nmp3.EnableLoopAll()";
	}else{
		Blockly.Python.definitions_["setup_mp3"]="mp3 = KT403A(1, 3, 4)\nmp3.SetVolume(" + volume_hex + ")";
	};
    return ""
};
//////////////
Blockly.Blocks["grove_mp3_volume"]={init:function(){
        this.appendValueInput("Volume").setCheck("Number").appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABAhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjY1RTYzOTA2ODZDRjExREJBNkUyRDg4N0NFQUNCNDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBBNkM4Q0REODUzNjExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBBNkM4Q0RDODUzNjExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTk5NzA1OGEtZDI3OC00NDZkLWE4ODgtNGM4MGQ4YWI1NzNmIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzRkZmQxMGMtY2NlNS0xMTc4LWE5OGQtY2NkZmM5ODk5YWYwIi8+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+Z2x5cGhpY29uczwvcmRmOmxpPiA8L3JkZjpBbHQ+IDwvZGM6dGl0bGU+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ZCM1gAAAAJ1JREFUeNpi+P//PwM+DAQGQPwBTUwBziZGMwNYGUQjEF+AYgG8BiBrRjIgAMYH4gacBqBrhhkAlVsAFQPJC6BrFADiAmSNWAxQQBJPYEC3CRdGs+gCVHwBE5DgZyAdbIDSCkwMFAKqGPCRIgOAgQJKEIwgDOQLAnEhEYYGQOkH5KQD1GgkJSUSTEhE5AUDopIyvtwIBBOQMxNAgAEAuSU2gW6bTpkAAAAASUVORK5CYII=", 16, 15, "+/-"))
			.setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.lp2i_mp3_vol);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#727272");
        this.setTooltip(Blockly.Msg.GROVE_mp3_vol_tooltip)}
};
Blockly.Arduino["grove_mp3_volume"]=function(block){
    var vol=Blockly.Arduino.valueToCode(block, "Volume", Blockly.Arduino.ORDER_ATOMIC);
	var code = "Mp3Player.volume(" +vol+ ");\n" ;
	var firstChild = this.getChildren()[0];
	if (firstChild) if (!firstChild.getFieldValue('VAR')) {
		var volume = parseInt(vol); 
		var volume_hex ;
		if (volume>30){
			volume_hex="0x1F";
		}else{
			volume_hex="0x"+volume.toString(16);
		}
		code = "Mp3Player.volume(" +volume_hex+ ");\n"
	}
	return code
};
Blockly.Python["grove_mp3_volume"]=function(block){
    var vol=Blockly.Python.valueToCode(block, "Volume", Blockly.Python.ORDER_ATOMIC);
	var volume=parseInt(vol);
	if (volume>48){
		var volume_hex="0x30";
	}else{
		var volume_hex="0x"+volume.toString(16);
	}
	return "mp3.SetVolume(" + volume_hex + ")\n"
};
//////////////
Blockly.Blocks["grove_mp3_next"]={init:function(){
        this.appendDummyInput().appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABAhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjY1RTYzOTA2ODZDRjExREJBNkUyRDg4N0NFQUNCNDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAwMTg1RDMxODUzNjExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAwMTg1RDMwODUzNjExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTk5NzA1OGEtZDI3OC00NDZkLWE4ODgtNGM4MGQ4YWI1NzNmIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzRkZmQxMGMtY2NlNS0xMTc4LWE5OGQtY2NkZmM5ODk5YWYwIi8+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+Z2x5cGhpY29uczwvcmRmOmxpPiA8L3JkZjpBbHQ+IDwvZGM6dGl0bGU+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+wcaEcAAAAH9JREFUeNpiYGBg+A/ECf///2cghIHgA1Q9iAYzQHgBEAsQ0PgfCaNwLgCxAjkaYc5wIEcjDDeQqxGENyD7mxSNIPwAiA3I0QjzdwKyGCNMN6mAiYFMQKzGj0AciC5IyH8XyAkcsqKjgC5J7gK+HIJL4wIi8iOKxg/kZGSAAAMAVFNP2P+hQjMAAAAASUVORK5CYII=", 11, 14, ">>")).appendField(Blockly.Msg.lp2i_mp3_next);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#727272");
        this.setTooltip(Blockly.Msg.lp2i_mp3_next_tooltip)}
};
Blockly.Arduino["grove_mp3_next"]=function(block){
    return "Mp3Player.next();\n"
};
Blockly.Python["grove_mp3_next"]=function(block){
    return "mp3.PlayNext()\n"
};
//////////////
Blockly.Blocks["grove_mp3_prev"]={init:function(){
        this.appendDummyInput().appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABAhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjY1RTYzOTA2ODZDRjExREJBNkUyRDg4N0NFQUNCNDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJBMDU0MERBODUzNTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJBMDU0MEQ5ODUzNTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTk5NzA1OGEtZDI3OC00NDZkLWE4ODgtNGM4MGQ4YWI1NzNmIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzRkZmQxMGMtY2NlNS0xMTc4LWE5OGQtY2NkZmM5ODk5YWYwIi8+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+Z2x5cGhpY29uczwvcmRmOmxpPiA8L3JkZjpBbHQ+IDwvZGM6dGl0bGU+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+nEjlMgAAAI1JREFUeNpiYGBg+ADE/0H0////GQhhIEiAqgcTYExAgwAQL0BST1gjECgA8QVktQQ1AoEDkneI0wgEDVg04NYI9c8GPJowNQKBARA/IKAJVSM0qD8Qoek/I0w3qYBsjUxo/EAg/kisZmyBc4GkwKEoOtASQAFZGslOcmhOv0CyRiQDULIVORn5A0CAAQBJf1DWEisqAgAAAABJRU5ErkJggg==", 11, 14, "<<")).appendField(Blockly.Msg.lp2i_mp3_prev);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#727272");
        this.setTooltip(Blockly.Msg.lp2i_mp3_prev_tooltip)}
};
Blockly.Arduino["grove_mp3_prev"]=function(block){
    return "Mp3Player.previous();\n"
};
Blockly.Python["grove_mp3_prev"]=function(block){
    return "mp3.PlayPrevious()\n"
};
//////////////
Blockly.Blocks["grove_mp3_pause"]={init:function(){
        this.appendDummyInput().appendField(Blockly.Msg.GROVE_mp3_play_pause);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#727272");
        this.setTooltip(Blockly.Msg.GROVE_mp3_PLAY_PAUSE)}
};
Blockly.Arduino["grove_mp3_pause"]=function(block){
    return "Mp3Player.pause_or_play();\n"
};
Blockly.Python["grove_mp3_pause"]=function(block){
    return "mp3.Pause()\n"
};
//////////////
Blockly.Blocks["grove_mp3_play_track"]={init:function(){
    this.appendValueInput("num").setCheck("String").appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABAhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjY1RTYzOTA2ODZDRjExREJBNkUyRDg4N0NFQUNCNDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYzRkRFQjcxODUzNTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYzRkRFQjcwODUzNTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTk5NzA1OGEtZDI3OC00NDZkLWE4ODgtNGM4MGQ4YWI1NzNmIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzRkZmQxMGMtY2NlNS0xMTc4LWE5OGQtY2NkZmM5ODk5YWYwIi8+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+Z2x5cGhpY29uczwvcmRmOmxpPiA8L3JkZjpBbHQ+IDwvZGM6dGl0bGU+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+5iogFwAAAGhJREFUeNpiYGBgKABigf///zOQg0EARH4A4gZyDIIZ8B/JoAJKDIDhB0CcQIkBRBtEyABkgxwoMQCGD6AbRKoBGAYxQgXIBRuZGKgAKPIC3QLxArnRSHZCIjspk52ZKMrOFBUoAAEGAKnq593MQAZtAAAAAElFTkSuQmCC", 11, 15))
		.appendField(Blockly.Msg.lp2i_mp3_play);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#727272");
    this.setTooltip(Blockly.Msg.lp2i_mp3_play_track_tooltip)}
};
Blockly.Arduino["grove_mp3_play_track"]=function(block){
	var piste=Blockly.Arduino.valueToCode(block, "num", Blockly.Arduino.ORDER_ATOMIC);
    return "Mp3Player.playSDSong("+piste+");\n"
};
Blockly.Python["grove_mp3_play_track"]=function(block){
	var piste=Blockly.Python.valueToCode(block, "num", Blockly.Python.ORDER_ATOMIC);
    return "mp3.PlaySpecific("+piste+")\n"
};
//////////////
Blockly.Blocks["grove_mp3_play_dir"]={init:function(){
    this.appendValueInput("num").setCheck("Number").appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABAhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjY1RTYzOTA2ODZDRjExREJBNkUyRDg4N0NFQUNCNDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYzRkRFQjcxODUzNTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYzRkRFQjcwODUzNTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTk5NzA1OGEtZDI3OC00NDZkLWE4ODgtNGM4MGQ4YWI1NzNmIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzRkZmQxMGMtY2NlNS0xMTc4LWE5OGQtY2NkZmM5ODk5YWYwIi8+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+Z2x5cGhpY29uczwvcmRmOmxpPiA8L3JkZjpBbHQ+IDwvZGM6dGl0bGU+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+5iogFwAAAGhJREFUeNpiYGBgKABigf///zOQg0EARH4A4gZyDIIZ8B/JoAJKDIDhB0CcQIkBRBtEyABkgxwoMQCGD6AbRKoBGAYxQgXIBRuZGKgAKPIC3QLxArnRSHZCIjspk52ZKMrOFBUoAAEGAKnq593MQAZtAAAAAElFTkSuQmCC", 11, 15))
		.appendField(Blockly.Msg.GROVE_mp3_playDIR_A);
	this.appendValueInput("dir").setCheck("String").appendField(Blockly.Msg.GROVE_mp3_playDIR_B);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#727272");
    this.setTooltip(Blockly.Msg.lp2i_mp3_play_track_tooltip)}
};
Blockly.Arduino["grove_mp3_play_dir"]=function(block){
	var piste=Blockly.Arduino.valueToCode(block, "num", Blockly.Arduino.ORDER_ATOMIC);
	var dossier=Blockly.Arduino.valueToCode(block, "dir", Blockly.Arduino.ORDER_ATOMIC);
    return "Mp3Player.playSDDirectorySong("+dossier+", "+piste+");\n"
};
Blockly.Python["grove_mp3_play_dir"]=function(block){
	var piste=Blockly.Python.valueToCode(block, "num", Blockly.Python.ORDER_ATOMIC);
    return "mp3.PlaySpecific("+piste+")\n"
};
//////////////
Blockly.Blocks["grove_mp3_etat"]={init:function(){
    this.appendDummyInput().appendField(new Blockly.FieldDropdown(Blockly.Msg.GROVE_mp3_etat), "state");
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.lp2i_mp3_etat_tooltip);
    this.setColour("#727272");}
};
Blockly.Arduino["grove_mp3_etat"]=function(block){
	var value_state = block.getFieldValue('state');
    return ["Mp3Player.getStatus()=="+value_state, Blockly.Arduino.ORDER_ATOMIC] 
};
Blockly.Python["grove_mp3_etat"]=function(block){
    return ["Mp3Player.getStatus()", Blockly.Arduino.ORDER_ATOMIC] 
};
