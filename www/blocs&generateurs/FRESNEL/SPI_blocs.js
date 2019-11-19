/**
 * Blocks pour SPI 
	* void SPI_init();
	* void SPI_send();
	* void SPI_receive();
	
 * @author Gwen
 */
'use strict';

goog.provide("Blockly.Blocks.arduino");
goog.require("Blockly.Blocks");

Blockly.Blocks.SPI_init = {
	init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.SPI_INIT_TEXT);  
	this.appendValueInput("Speed")
        .setCheck("Number")
        .appendField(Blockly.Msg.SPI_INIT_SPEED);
	this.appendDummyInput()
        .appendField(Blockly.Msg.SPI_INIT_MODE)   
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.SPI_INIT_MODE_FIELDDROPDOWN), 'Mode');
	this.appendDummyInput()
        .appendField(Blockly.Msg.SPI_INIT_BITORDER)   
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.SPI_INIT_BITORDER_FIELDDROPDOWN), 'BitOrder');
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setColour("#00929F");
    this.setTooltip(Blockly.Msg.SPI_INIT_TOOLTIP); 
    this.setHelpUrl(Blockly.Msg.SPI_INIT_HELPURL);
	this.setInputsInline(false);
  }
};

Blockly.Arduino.SPI_init = function() {
	
	var Speed = Blockly.Arduino.valueToCode(this, 'Speed', Blockly.Arduino.ORDER_ATOMIC); // byte Speed
	var Mode = this.getFieldValue('Mode'); // OK
	var Bit_order = this.getFieldValue('BitOrder'); //OK
	
	Blockly.Arduino.definitions_['library_SPI'] = '#include <SPI.h>';
	
	//Blockly.Arduino.setups_['setup_SPI'] = 'SPI.beginTransaction(SPISettings('+Speed*1000000+' ,'+Bit_order+', '+Mode+' ));';
	Blockly.Arduino.setups_['setup_SPI_1'] = 'SPI.setClockDivider(SPI_CLOCK_DIV'+(16/Speed)+');'; 
	Blockly.Arduino.setups_['setup_SPI_2'] = 'SPI.setBitOrder('+Bit_order+');';
	Blockly.Arduino.setups_['setup_SPI_3'] = 'SPI.setDataMode('+Mode+');';
	Blockly.Arduino.setups_['begin_SPI'] = 'SPI.begin();';
		
	return "";
};

// Blockly.Blocks["SPI_send"] = {
	// init: function() {
    // this.appendDummyInput()
        // .appendField(Blockly.Msg.SPI_SEND_TEXT);  
	// this.appendDummyInput()
        // .appendField(Blockly.Msg.SPI_SEND_DATA)
        // .appendField(new Blockly.FieldDropdown(Blockly.Msg.SPI_SEND_FIELDDROPDOWN), "Format")
        // .appendField(new Blockly.FieldTextInput("00"), "data");
	// this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
	// this.setColour("#00929F");
    // this.setTooltip(Blockly.Msg.SPI_SEND_TOOLTIP); 
    // this.setHelpUrl(Blockly.Msg.SPI_SEND_HELPURL);
	// this.setInputsInline(false);
  // }
// };

Blockly.Blocks["SPI_receive"] = {
	init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.SPI_RECEIVE_TEXT);  
	this.setOutput(true, "Number");
	this.setColour("#00929F");
    this.setTooltip(Blockly.Msg.SPI_RECEIVE_TOOLTIP); 
    this.setHelpUrl(Blockly.Msg.SPI_RECEIVE_HELPURL);
	this.setInputsInline(false);
  }
};

Blockly.Arduino["SPI_receive"] = function() {
	
	var code = 'SPI.transfer(0x00)';
	
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Blocks["SPI_send_2"] = {
	init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.SPI_SEND_TEXT);  
	this.appendValueInput("data")
        .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.SPI_SEND_DATA);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setColour("#00929F");
    this.setTooltip(Blockly.Msg.SPI_SEND_TOOLTIP); 
    this.setHelpUrl(Blockly.Msg.SPI_SEND_HELPURL);
	this.setInputsInline(false);
  }
};
Blockly.Arduino["SPI_send_2"] = function() {
	var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
	var code = 'SPI.transfer('+value_data+'); \n';
	return code;	
};
