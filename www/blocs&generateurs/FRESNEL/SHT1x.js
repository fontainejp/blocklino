/**
 * Blocks pour SHT1x 
	* void StartSHT()
	* void sendCommandSHT(int Command, int dataPin, int clockPin)
	* byte ReadEOC(int dataPin)
	* byte getByteSHT(int dataPin, int clockPin)
	* void SendMasterAck();
	* Void skipMasterAck(int dataPin, int clockPin)	
 * @author Philippe
 */
"use strict";
goog.provide("Blockly.Blocks.arduino");
goog.require("Blockly.Blocks");

Blockly.Blocks.sht1x_init = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.SHT1x_INIT_TITLE);
    this.appendValueInput("data_pin_number")
        .setCheck("Number")
        .appendField(Blockly.Msg.SHT1x_INIT_TEXT1);
    this.appendValueInput("sck_pin_number")
        .setCheck("Number")
        .appendField(Blockly.Msg.SHT1x_INIT_TEXT2);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#58B5DC");
 this.setTooltip(Blockly.Msg.SHT1x_INIT_TOOLTIP);
 }
};

Blockly.Blocks.sht1x_start = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.SHT1x_START_TITLE);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#58B5DC");
 this.setTooltip(Blockly.Msg.SHT1x_START_TOOLTIP);
 }
};

Blockly.Blocks.sht1x_send_command = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.SHT1x_SEND_COMMAND_TITLE);
    this.appendValueInput("command")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.SHT1x_SEND_COMMAND_TEXT);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#58B5DC");
 this.setTooltip(Blockly.Msg.SHT1x_SEND_COMMAND_TOOLTIP);
 }
};

Blockly.Blocks.sht1x_eoc = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.SHT1x_EOC_TITLE);
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour("#58B5DC");
 this.setTooltip(Blockly.Msg.SHT1x_EOC_TOOLTIP);
 }
};

Blockly.Blocks.sht1x_getbyte = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.SHT1x_GETBYTE_TITLE);
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour("#58B5DC");
 this.setTooltip(Blockly.Msg.SHT1x_GETBYTE_TOOLTIP);
 }
};

Blockly.Blocks.sht1x_ack = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.SHT1x_SEND_ACK_TITLE);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#58B5DC");
 this.setTooltip(Blockly.Msg.SHT1x_SEND_ACK_TOOLTIP);
 }
};

Blockly.Blocks.sht1x_skip_ack = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.SHT1x_SKIP_ACK_TITLE);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#58B5DC");
 this.setTooltip(Blockly.Msg.SHT1x_SKIP_ACK_TOOLTIP);
 }
};

Blockly.Arduino.sht1x_init = function() {
  var data_pin_number = Blockly.Arduino.valueToCode(this, 'data_pin_number', Blockly.Arduino.ORDER_ATOMIC);
  var sck_pin_number = Blockly.Arduino.valueToCode(this, 'sck_pin_number', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.includes_['include_SHT1X']  = '#include "SHT1X.h"';
  Blockly.Arduino.definitions_['define_pin_SCK']  = '#define clockPin '+sck_pin_number;
  Blockly.Arduino.definitions_['define_pin_DATA']  = '#define dataPin '+data_pin_number;
  Blockly.Arduino.definitions_['define_mySHT']  = 'SHT1X mySHT(clockPin, dataPin);';
  return "";
};

Blockly.Arduino.sht1x_start = function() {
  var code = 'mySHT.StartSHT();\n';
  return code;
};

Blockly.Arduino.sht1x_send_command = function() {
  var command = Blockly.Arduino.valueToCode(this, 'command', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'mySHT.sendCommandSHT('+command+');\n';
  return code;
};

Blockly.Arduino.sht1x_eoc = function() {
  var code = 'mySHT.ReadEOC()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.sht1x_getbyte = function() {
  var code = 'mySHT.getByteSHT()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.sht1x_ack = function() {
  var code = 'mySHT.SendMasterAck();\n';
  return code;
};

Blockly.Arduino.sht1x_skip_ack = function() {
  var code = 'mySHT.skipMasterAck();\n';
  return code;
};

