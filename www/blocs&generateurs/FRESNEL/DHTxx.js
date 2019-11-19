/*	
 * @author Philippe
 */
"use strict";
goog.provide("Blockly.Blocks.arduino");
goog.require("Blockly.Blocks");


Blockly.Blocks.DHTxx_init = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.DHTxx_INIT_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.DHTxx_INIT_SENSOR_CHOICE),"Sensor_List");
    this.appendDummyInput()
        .appendField("");
    this.appendDummyInput()
        .appendField(Blockly.Msg.DHTxx_INIT_TEXT_1);
    this.appendValueInput("pin_number")
        .setCheck("Number")
        .appendField(Blockly.Msg.DHTxx_INIT_TEXT_2);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#58B5DC");
 this.setTooltip(Blockly.Msg.DHTxx_INIT_TOOLTIP);
 this.setHelpUrl(Blockly.Msg.DHTxx_INIT_HELPURL);
  }
};

Blockly.Blocks.DHTxx_read = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.DHTxx_READ_TEXT);
    this.setOutput(true, "Boolean");
    this.setColour("#58B5DC");
 this.setTooltip(Blockly.Msg.DHTxx_READ_TOOLTIP);
 }
};

Blockly.Blocks.DHTxx_read_bytes = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.DHTxx_READ_BYTES_TEXT)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.DHTxx_READ_BYTES_CHOICE),"Byte_Number");
    this.setOutput(true, "Number");
    this.setColour("#58B5DC");
 this.setTooltip(Blockly.Msg.DHTxx_READ_BYTES_TOOLTIP);
 }
};


Blockly.Arduino.DHTxx_init = function() {
	var sensor_type = this.getFieldValue("Sensor_List");
	var broche = Blockly.Arduino.valueToCode(this, 'pin_number', Blockly.Arduino.ORDER_ATOMIC);
	
	Blockly.Arduino.includes_['include_DHTxx']  ="#include <dhtxx.h>";
	
	switch (sensor_type) {
        case "DHT11_Sensor":
            Blockly.Arduino.definitions_['define_DHT11']  = 
			"const byte WAKEUP_TIME = 18;	// Temps de réveil : 18 ms pour le DHT11";
		break;
        case "DHT22_Sensor":
            Blockly.Arduino.definitions_['define_DHT22']  =
			"const byte WAKEUP_TIME = 1;	// Temps de réveil : 1 ms (>800 us) pour le DHT22";
		break;
	}
	Blockly.Arduino.definitions_['define_DHTxx']  =
			"const int TIMEOUT = 1000;	// Temps d'attente maxi (1s)\n"+
			"byte data[5];			//déclaration d'un tableau de 5 octets pour récupérer les données\n"+
			"DHTxx myDHT("+broche+");			//Broche de l'Arduino connectée au capteur\n";
			
	return "";
};

Blockly.Arduino.DHTxx_read = function() {
  var code = "myDHT.readDHTxx(data, WAKEUP_TIME, TIMEOUT)";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.DHTxx_read_bytes = function() {
	var Byte_Number = this.getFieldValue("Byte_Number");
	var code = "data["+Byte_Number+"]";
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};



