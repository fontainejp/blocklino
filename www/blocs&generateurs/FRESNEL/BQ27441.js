/**
 * @author Philippe
 */
"use strict";
goog.provide("Blockly.Blocks.arduino");
goog.require("Blockly.Blocks");

Blockly.Blocks.BQ27441_init = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.BQ27441_INIT_TEXT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#58B5DC");
	this.setTooltip(Blockly.Msg.BQ27441_INIT_TOOLTIP);
	this.setHelpUrl(Blockly.Msg.BQ27441_INIT_HELPURL);
  }
};

Blockly.Blocks.BQ27441_setup = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.BQ27441_SETUP_TEXT);
    this.setOutput(true, "Boolean");
    this.setColour("#58B5DC");
    this.setTooltip(Blockly.Msg.BQ27441_SETUP_TOOLTIP);
 }
};

Blockly.Blocks.BQ27441_set_capacity = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.BQ27441_SET_CAPACITY_TEXT1);
    this.appendValueInput("Capacity")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(Blockly.Msg.BQ27441_SET_CAPACITY_TEXT2);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#58B5DC");
    this.setTooltip(Blockly.Msg.BQ27441_SET_CAPACITY_TOOLTIP);
 }
};
Blockly.Arduino.BQ27441_init = function() {
	Blockly.Arduino.includes_['include_BQ27441'] = "#include <SparkFunBQ27441.h>";
	return "";
};

Blockly.Arduino.BQ27441_setup = function() {
	var code = "lipo.begin()";
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.BQ27441_set_capacity = function() {
	var battery_capacity = Blockly.Arduino.valueToCode(this, 'Capacity', Blockly.Arduino.ORDER_ATOMIC);
	var code = 'lipo.setCapacity('+battery_capacity+');\n';
	return code;
};