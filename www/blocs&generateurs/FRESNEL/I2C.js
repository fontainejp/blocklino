/**
 * Blocks pour I2C 
	* void i2c_init();
	* void i2c_start(char add | bool RW);
	* void i2c_restart(char add | bool RW);
	* void i2c_stop();
	* void i2c_write(char Byte);
	* char i2c_read(bool Last)
	
 * @author Gwen
 */
'use strict';

goog.provide("Blockly.Blocks.arduino");
goog.require("Blockly.Blocks");

Blockly.Blocks.I2C_init = {
	init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.I2C_INIT_TEXT);  
    this.appendValueInput("Pin_SCL")
        .setCheck("Number")
        .appendField(Blockly.Msg.I2C_INIT_PIN_SCL); 
	this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.I2C_INIT_PORT_SCL)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.I2C_INIT_FIELDDROPDOWN_SCL), 'Port_SCL');
	this.appendValueInput("Pin_SDA")
        .setCheck("Number")
        .appendField(Blockly.Msg.I2C_INIT_PIN_SDA); 
	this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.I2C_INIT_PORT_SDA)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.I2C_INIT_FIELDDROPDOWN_SDA), 'Port_SDA');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0000");
    this.setTooltip(Blockly.Msg.I2C_INIT_TOOLTIP); 
    this.setHelpUrl(Blockly.Msg.I2C_INIT_HELPURL);
	this.setInputsInline(false);
  }
};

Blockly.Blocks.I2C_start = { 
	init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.I2C_START_TEXT); 
    this.appendValueInput("Address")
        .setCheck("Number")
        .appendField(Blockly.Msg.I2C_START_ADRESS);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.I2C_START_RW)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.I2C_START_FIELDDROPDOWN), 'RW');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0000");
    this.setTooltip(Blockly.Msg.I2C_START_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.I2C_START_HELPURL);
  }
};

Blockly.Blocks.I2C_restart = { 
	init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.I2C_RESTART_TEXT); 
    this.appendValueInput("Address")
        .setCheck("Number")
        .appendField(Blockly.Msg.I2C_RESTART_ADRESS);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.I2C_RESTART_RW)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.I2C_RESTART_FIELDDROPDOWN), 'RW');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0000");
    this.setTooltip(Blockly.Msg.I2C_RESTART_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.I2C_RESTART_HELPURL);
  }
};

Blockly.Blocks.I2C_stop = { 
	init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.I2C_STOP_TEXT); 
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0000");
    this.setTooltip(Blockly.Msg.I2C_STOP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.I2C_STOP_HELPURL);
  }
};

Blockly.Blocks.I2C_write = {
	init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.I2C_WRITE_TEXT);  
    this.appendValueInput("Data")
        .setCheck("Number")
        .appendField(Blockly.Msg.I2C_WRITE_DATA);            
	//this.setOutput(true, "Boolean");
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setColour("#FF0000");
    this.setTooltip(Blockly.Msg.I2C_WRITE_TOOLTIP); 
    this.setHelpUrl(Blockly.Msg.I2C_WRITE_HELPURL);
	this.setInputsInline(false);
  }
};

Blockly.Blocks.I2C_read = {
	init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.I2C_READ_TEXT);  
    this.appendDummyInput("")
        .appendField(Blockly.Msg.I2C_READ_LAST)   
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.I2C_READ_FIELDDROPDOWN), 'Last');   
	this.setOutput(true, "Number");
	this.setColour("#FF0000");
    this.setTooltip(Blockly.Msg.I2C_READ_TOOLTIP); 
    this.setHelpUrl(Blockly.Msg.I2C_READ_HELPURL);
	this.setInputsInline(false);
  }
};

Blockly.Blocks.I2C_scan = {
	init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.I2C_SCAN_TEXT); 
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0000");
    this.setTooltip(Blockly.Msg.I2C_SCAN_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.I2C_SCAN_HELPURL);
  }
};



///////////////////////////////////////////////////

Blockly.Blocks.I2C_init_HW = {
	init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.I2C_INIT_HW_TITRE);  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0000");
    this.setTooltip(Blockly.Msg.I2C_INIT_HW_TOOLTIP); 
    this.setHelpUrl(Blockly.Msg.I2C_INIT_HW_HELPURL);
	this.setInputsInline(false);
  }
};

Blockly.Blocks.I2C_stop_HW = {
	init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.I2C_STOP_HW_TITRE);  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0000");
    this.setTooltip(Blockly.Msg.I2C_STOP_HW_TOOLTIP); 
    this.setHelpUrl(Blockly.Msg.I2C_STOP_HW_HELPURL);
	this.setInputsInline(false);
  }
};

Blockly.Blocks.I2C_restart_HW = {
	init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.I2C_RESTART_HW_TITRE);  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0000");
    this.setTooltip(Blockly.Msg.I2C_RESTART_HW_TOOLTIP); 
    this.setHelpUrl(Blockly.Msg.I2C_RESTART_HW_HELPURL);
	this.setInputsInline(false);
  }
};

Blockly.Blocks.I2C_write_HW = {
	init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.I2C_WRITE_HW_TEXT);  
    this.appendDummyInput()
        .appendField(Blockly.Msg.I2C_WRITE_HW_DATA)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.I2C_WRITE_HW_FIELDDROPDOWN), "Format")
        .appendField(new Blockly.FieldTextInput("00"), "data1");
   	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setColour("#FF0000");
    this.setTooltip(Blockly.Msg.I2C_WRITE_HW_TOOLTIP); 
    this.setHelpUrl(Blockly.Msg.I2C_WRITE_HW_HELPURL);
	this.setInputsInline(false);
  }
};

Blockly.Blocks.I2C_start_HW = {
	init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.I2C_START_HW_TEXT);  
    this.appendDummyInput()
        .appendField(Blockly.Msg.I2C_START_HW_DATA)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.I2C_START_HW_FIELDDROPDOWN), "Format")
        .appendField(new Blockly.FieldTextInput("00"), "data1");
   	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setColour("#FF0000");
    this.setTooltip(Blockly.Msg.I2C_START_HW_TOOLTIP); 
    this.setHelpUrl(Blockly.Msg.I2C_START_HW_HELPURL);
	this.setInputsInline(false);
  }
};

Blockly.Blocks.I2C_request_HW = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.I2C_REQUEST_HW_TEXT);
    this.appendDummyInput()
        .appendField(Blockly.Msg.I2C_REQUEST_HW_DATA)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.I2C_REQUEST_HW_FIELDDROPDOWN), "Format")
        .appendField(new Blockly.FieldTextInput("00"), "address");
    this.appendDummyInput()
        .appendField(Blockly.Msg.I2C_REQUEST_HW_NB_BYTES)
        .appendField(new Blockly.FieldNumber(1), "nb_bytes");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0000");
	this.setTooltip(Blockly.Msg.I2C_REQUEST_HW_TOOLTIP);
	this.setHelpUrl(Blockly.Msg.I2C_REQUEST_HW_HELPURL);
  }
};
    
    
Blockly.Blocks.I2C_available_HW = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.I2C_AVAILABLE_HW_TITRE);
    this.setOutput(true, null);
    this.setColour("#FF0000");
    this.setTooltip(Blockly.Msg.I2C_AVAILABLE_HW_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.I2C_AVAILABLE_HW_HELPURL);
  }
};

Blockly.Blocks.I2C_data_HW = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.I2C_DATA_HW_TITRE);
    this.setOutput(true, null);
    this.setColour("#FF0000");
    this.setTooltip(Blockly.Msg.I2C_DATA_HW_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.I2C_DATA_HW_HELPURL);
  }
};

Blockly.Blocks.I2C_write_2_HW = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.I2C_WRITE_HW_TEXT);
    this.appendValueInput("data")
        .setCheck(["Number"])
		.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.I2C_WRITE_HW_DATA);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0000");
    this.setTooltip(Blockly.Msg.I2C_WRITE_HW_TOOLTIP); 
    this.setHelpUrl(Blockly.Msg.I2C_WRITE_HW_HELPURL);
	this.setInputsInline(false);
  }
};

Blockly.Blocks.I2C_start_2_HW = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.I2C_START_HW_TEXT);
    this.appendValueInput("Slave_Address")
        .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.I2C_START_HW_DATA);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0000");
    this.setTooltip(Blockly.Msg.I2C_START_HW_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.I2C_START_HW_HELPURL);
    this.setInputsInline(false);
  }
};

Blockly.Blocks.I2C_request_2_HW = {
  init: function() {
    this.appendDummyInput()
		.appendField(Blockly.Msg.I2C_REQUEST_HW_TEXT);
    this.appendValueInput("Slave_Address")
        .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.I2C_REQUEST_HW_DATA);
    this.appendValueInput("Number_of_Bytes")
        .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.I2C_REQUEST_HW_NB_BYTES);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0000");
    this.setTooltip(Blockly.Msg.I2C_REQUEST_HW_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.I2C_REQUEST_HW_HELPURL);
  }
};


/////////////////////////////////////GENERATEURS


Blockly.Arduino.I2C_init = function() {
	var Pin_SCL = Blockly.Arduino.valueToCode(this, 'Pin_SCL', Blockly.Arduino.ORDER_ATOMIC);
	var Port_SCL = this.getFieldValue('Port_SCL');
	var Pin_SDA = Blockly.Arduino.valueToCode(this, 'Pin_SDA', Blockly.Arduino.ORDER_ATOMIC);
	var Port_SDA = this.getFieldValue('Port_SDA');	
	
	Blockly.Arduino.includes_['define_pin_SCL']  = '#define SCL_PIN '+Pin_SCL;
	Blockly.Arduino.includes_['define_port_SCL'] = '#define SCL_PORT PORT'+Port_SCL;
	Blockly.Arduino.includes_['define_pin_SDA']  = '#define SDA_PIN '+Pin_SDA;
	Blockly.Arduino.includes_['define_port_SDA'] = '#define SDA_PORT PORT'+Port_SDA;
	Blockly.Arduino.includes_['define_I2C_soft'] = '#include <SoftI2CMaster.h>';
	Blockly.Arduino.setups_['setup_I2C'] = 'i2c_init(); \n';
		
	return "";
};

Blockly.Arduino.I2C_start = function() {
	var addr = Blockly.Arduino.valueToCode(this, 'Address', Blockly.Arduino.ORDER_ATOMIC);
	var rw = this.getFieldValue('RW');
		
	var code = 'i2c_start('+addr+' | '+rw+');\n'	
	return code;
};

Blockly.Arduino.I2C_restart = function() {
	var addr = Blockly.Arduino.valueToCode(this, 'Address', Blockly.Arduino.ORDER_ATOMIC);
	var rw = this.getFieldValue('RW');
		
	var code = 'i2c_rep_start('+addr+' | '+rw+');\n'	
	return code;
};

Blockly.Arduino.I2C_stop = function() {	
	var code = 'i2c_stop();\n'	
	return code;
};

Blockly.Arduino.I2C_write = function() {	
	var data = Blockly.Arduino.valueToCode(this, 'Data', Blockly.Arduino.ORDER_ATOMIC);	
	var code = 'i2c_write('+data+');\n';	
	return code;
};

Blockly.Arduino.I2C_read = function() {	
	var last = this.getFieldValue('Last');	
	var code = 'i2c_read('+last+')';	
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//////////////////////////////////////////////

Blockly.Arduino.I2C_init_HW = function() {	
	Blockly.Arduino.includes_['librairie']  = '#include <Wire.h> ';
	Blockly.Arduino.setups_['setup_I2C'] = 'Wire.begin(); \n';		
	return "";
};

Blockly.Arduino.I2C_stop_HW = function() {	
	var code = 'Wire.endTransmission(1); \n';	
	return code;
};

Blockly.Arduino.I2C_restart_HW = function() {	
	var code = 'Wire.endTransmission(0); \n';	
	return code;
};

Blockly.Arduino.I2C_write_HW = function() {	
	var Format = this.getFieldValue('Format');	
	var data = this.getFieldValue('data1'); 
	switch (Format) {
        case "hex":
            var code = 'Wire.write(0x'+data+'); \n';
            break;
        case "bin":
            var code = 'Wire.write(0b'+data+'); \n';
			break;
		case "dec":
            var code = 'Wire.write('+data+'); \n';
            break;
        case "var":
            var code = 'Wire.write('+data+'); \n';
			break;
    };
	return code;
};

Blockly.Arduino.I2C_start_HW = function() {	
	var Format = this.getFieldValue('Format');	
	var data = this.getFieldValue('data1'); 
	
	var code = 'Wire.beginTransmission(';
	
	if (Format === "0x"){
		code+='0x'+data+'); \n';
	} else if  (Format === "0b"){
		code+='0b'+data+'); \n';		
	} else {
	code+=+data+'); \n';
	}	
	return code;
};


Blockly.Arduino.I2C_request_HW = function() {	
	var Format = this.getFieldValue('Format');	
	var Address = this.getFieldValue('address');
	var Nb_Bytes = this.getFieldValue('nb_bytes');
	
	var code = 'Wire.requestFrom(';
	
	if (Format === "0x"){
		code +='0x'+Address+','+Nb_Bytes+','+'1); \n';
	} else if  (Format === "0b"){
		code +='0b'+Address+','+Nb_Bytes+','+'1); \n';	
	} else {
	code += Address+','+Nb_Bytes+','+'1); \n';
	}	
	
	return code;
};

Blockly.Arduino.I2C_available_HW = function() {	
	var code = 'Wire.available()';	
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.I2C_data_HW = function() {	
	var code = 'Wire.read()';	
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.I2C_write_2_HW = function() {
  var value_data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'Wire.write('+value_data+'); \n';
  return code;
};

Blockly.Arduino.I2C_start_2_HW = function() {
  var value_slave_address = Blockly.Arduino.valueToCode(this, 'Slave_Address', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'Wire.beginTransmission('+value_slave_address+'); \n';
  return code;
};

Blockly.Arduino.I2C_request_2_HW = function() {
  var value_slave_address = Blockly.Arduino.valueToCode(this, 'Slave_Address', Blockly.Arduino.ORDER_ATOMIC);
  var value_number_of_bytes = Blockly.Arduino.valueToCode(this, 'Number_of_Bytes', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'Wire.requestFrom('+value_slave_address+','+value_number_of_bytes+',1); \n';
  return code;
};
	

////////////////////////////////////////

Blockly.Arduino.I2C_scan = function() {	
	Blockly.Arduino.includes_['define_I2C_scan'] = '#include <Wire.h>';
	Blockly.Arduino.setups_['setup_I2C_scan'] = "Serial.begin (115200);\n" +
	"  // Leonardo: wait for serial port to connect\n" +
	"  while (!Serial)\n" +
	"    {\n" +
	"    }\n" +
	"  Serial.println();\n" +
	"  Serial.println('I2C scanner. Scanning ...');\n" +
	"  byte count = 0;\n" +
	"\n" + 
	"  Wire.begin();\n" +
	"  for (byte i = 8; i < 120; i++)\n" +
	"    {\n" +
	"	 Wire.beginTransmission (i);\n" +
	"	 if (Wire.endTransmission () == 0)\n" +
	"	   {\n" +
	'	   Serial.print ("Found address: ");\n' +
	"	   Serial.print (i, DEC);\n" +
	'	   Serial.print (" (0x");\n' +
	"	   Serial.print (i, HEX);\n" +
	'	   Serial.println (")");\n' +
	"	   count++;\n" +
	"	   delay (1);\n" +
	"	   } // end of good response\n" +
	"    } // end of for loop\n" +
	"  Serial.println ('Done.');\n" +
	"  Serial.print ('Found ');\n" +
	"  Serial.print (count, DEC);\n" +
	"  Serial.println (' device(s).');\n";
	var code = '';	
	return code;
};





