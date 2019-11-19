"use strict";

goog.provide("Blockly.Blocks.arduino");
goog.require("Blockly.Blocks");
/* communication */
Blockly.Blocks["soft_print"]={init:function(){
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour("#006000");
        this.appendValueInput("CONTENT", "String").appendField(Blockly.Msg.SSERIAL_Print);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.SSERIAL_Print_tooltip)
    }
};
Blockly.Arduino['soft_print'] = function(block) {
	var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var code = 'mySerial.println('+content+');\n';
	return code
};
/*	entrée-sortie */
Blockly.Blocks.inout_digital_mode = {
  init: function() {
    this.setColour("#787746");
    this.setHelpUrl("https://www.arduino.cc/en/Reference/PinMode");
	this.appendValueInput("PIN", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.setCheck('Number')
        .appendField("fixer le mode de fonctionnement de la broche");
	this.appendValueInput("PINMODE", 'Null')
        .setAlign(Blockly.ALIGN_RIGHT)
      	.appendField("en");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Configurer la broche spécifée pour fonctionner comme une entrée ou une sortie");
  }
};
Blockly.Arduino.inout_digital_mode = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_mode = Blockly.Arduino.valueToCode(this, 'PINMODE', Blockly.Arduino.ORDER_ATOMIC).replace(/['"]+/g, '');
  var code = 'pinMode(' + dropdown_pin + ', ' + dropdown_mode + ');\n';
  return code;
};
Blockly.Blocks.inout_digital_read_validator = {
  init: function() {
    this.setColour("#E1A91A");
    this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_HELPURL);
    this.appendDummyInput()
		.appendField(Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT)
		.appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN');
	this.setInputsInline(true);
    this.setOutput(true,'Boolean');
    this.setTooltip(Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_TOOLTIP);
  }
};
Blockly.Arduino.inout_digital_read_validator = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.setups_['setup_input_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', INPUT);';
  var code = 'digitalRead(' + dropdown_pin + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Blocks.inout_digital_write_validator = {
  init: function() {
    this.setColour("#E1A91A");
    this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_HELPURL);
    this.appendDummyInput()
		.appendField(Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT1)
		.appendField(new Blockly.FieldTextInput('', Blockly.Arduino.pinDualValidator), 'PIN');
	this.appendDummyInput()
      	.appendField(Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT2)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), 'STAT');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP);
  }
};
Blockly.Arduino.inout_digital_write_validator = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_output_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
  var code = 'digitalWrite(' + dropdown_pin + ', ' + dropdown_stat + ');\n';
  return code;
};
Blockly.Blocks.inout_port_digital_write = {
  init: function() {
	var card=window.localStorage.card;  
    this.setColour("#787746");
    this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_PORT_DIGITAL_WRITE_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ARDUINO_INOUT_PORT_DIGITAL_WRITE_INPUT1)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownDigitalPort), 'PORT')
        //.appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.portDigitalValidator), 'PORT');
    this.appendValueInput("NUM")
        .appendField(Blockly.Msg.ARDUINO_INOUT_PORT_DIGITAL_WRITE_INPUT2)
        .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_INOUT_PORT_DIGITAL_WRITE_TOOLTIP);
  }
};
Blockly.Arduino.inout_port_digital_write = function() {
  var dropdown_port = this.getFieldValue('PORT');
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_port_'+dropdown_port] = 'DDR'+dropdown_port+'=0xFF;';
  var code = 'PORT' + dropdown_port + '=' + value_num + ';\n';
  return code;
};
Blockly.Blocks.inout_port_digital_read = {
  init: function() {
	var card=window.localStorage.card; 
    this.setColour("#787746");
    this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_PORT_DIGITAL_READ_HELPURL);
    this.appendDummyInput()
		.appendField(Blockly.Msg.ARDUINO_INOUT_PORT_DIGITAL_READ_INPUT)
		.appendField(new Blockly.FieldDropdown(profile[card].dropdownDigitalPort), 'PORT');
		//.appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.portDigitalValidator), 'PORT');
	this.setInputsInline(true);
    this.setOutput(true,'Number');
    this.setTooltip(Blockly.Msg.ARDUINO_INOUT_PORT_DIGITAL_READ_TOOLTIP);
  }
};
Blockly.Arduino.inout_port_digital_read = function() {
  var dropdown_port = this.getFieldValue('PORT');
  Blockly.Arduino.setups_['setup_port_' + dropdown_port] = 'DDR' + dropdown_port + '=0x00;';
  var code = 'PIN' + dropdown_port;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Blocks.inout_PWM_write_validator = {
  init: function() {
    this.setColour("#E1A91A");
    this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_PWM_WRITE_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ARDUINO_INOUT_PWM_WRITE_INPUT1)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinPWMValidator), 'PIN');
    this.appendValueInput("NUM")
        .appendField(Blockly.Msg.ARDUINO_INOUT_PWM_WRITE_INPUT2)
        .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_INOUT_PWM_WRITE_TOOLTIP);
  }
};
Blockly.Arduino.inout_PWM_write_validator = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_output'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'analogWrite(' + dropdown_pin + ', ' + value_num + ');\n';
  return code;
};
/*	structure  */
Blockly.Blocks.base_setup = {
  init: function () {
        this.setColour("#4a235a");
        this.appendDummyInput("")
            .appendField("Initialisation (Setup)");
        this.appendStatementInput('DO');
        this.setTooltip("Exécuté seulement dans le 'Setup'");
    },
	/** @return {!boolean} True if the block instance is in the workspace. */
	getArduinoLoopsInstance: function() {return true;}
};
Blockly.Arduino.base_setup = function () {
    var branch = Blockly.Arduino.statementToCode(this, 'DO');
    if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
        branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, '\'' + this.id + '\'') + branch;
    }
    var code = //'{\n' +
            branch;// + '\n}\n';
    var setup_key = Blockly.Arduino.variableDB_.getDistinctName('base_setup', Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.setups_[setup_key] = code;
    return ""; //do not return any actual code
};
Blockly.Blocks['biblio_include'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("inclure une bibliothèque")
        .appendField(new Blockly.FieldTextInput("nom du fichier bibliothèque"), "File")
        .appendField(".h");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#4a235a");
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/Libraries');
  }
};
Blockly.Arduino['biblio_include'] = function() {
  var text_file = this.getFieldValue('File');
  var funcInclude = text_file+'.h';
  Blockly.Arduino.includes_[funcInclude] = '#include <'+text_file+'.h>';
  return "";
};
Blockly.Blocks.include_file = {
  init: function() {
    this.appendDummyInput()
        .appendField("Inclure un fichier")
        .appendField(new Blockly.FieldTextInput("Nom du fichier"), "File2")
        .appendField(".h");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#4a235a");
    this.setTooltip("Permet d'inclure un fichier contenu dans le repertoire de travail");
    this.setHelpUrl("https://www.arduino.cc/reference/en/language/structure/further-syntax/include/");
  }
};
Blockly.Arduino.include_file = function(block) {
  var text_file = this.getFieldValue('File2');
  Blockly.Arduino.includes_["File_include"] = '#include "'+text_file+'.h"';
  return "";
};
Blockly.Blocks.base_comment = {
  init: function() {
    this.setHelpUrl("https://www.arduino.cc/reference/en/language/structure/further-syntax/blockcomment/");
    this.setColour("#4a235a");
    this.appendDummyInput()
        .appendField("commentaire")
        .appendField(new Blockly.FieldTextInput(''), 'TEXT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("ajoute un commentaire");
  }
};
Blockly.Arduino.base_comment = function() {
  // Text value.
  var code = '// ' + this.getFieldValue('TEXT') + '\n';
  return code;
};
/*	temps  */
Blockly.Blocks.inout_pulsein_timeout = {
  init: function() {
    this.setColour("#bbbbbb");
    this.setHelpUrl('http://arduino.cc/en/Reference/pulseIn');
    this.appendValueInput("PIN")
        .setCheck("Number")
        .appendField("durée (en µs) sur la broche");
	this.appendDummyInput()
      	.appendField("de l'état")
		.appendField(new Blockly.FieldDropdown([["1 (état haut)", "HIGH"], ["0 (état bas)", "LOW"]]), 'STAT');
	this.appendValueInput("TIMEOUT")
        .setCheck("Number")
        .appendField("dans un délai (en µs) de");
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip('Reads a pulse (either HIGH or LOW) on a pin. For example, if value is HIGH, pulseIn() waits for the pin to go HIGH, starts timing, then waits for the pin to go LOW and stops timing. Returns the length of the pulse in microseconds. Gives up and returns 0 if no pulse starts within a specified time out.');
  }
};
Blockly.Arduino.inout_pulsein_timeout = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getTitleValue('STAT');
  var timeout=Blockly.Arduino.valueToCode(this, 'TIMEOUT', Blockly.Arduino.ORDER_ATOMIC) || '0';
  Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'pulseIn('+dropdown_pin+', '+dropdown_stat+', '+timeout+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Blocks.delay_time = {
  init: function() {
    this.appendDummyInput()
        .appendField("Faire une temporisation de ");
    this.appendValueInput("delay time")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["secondes","s"], ["millisecondes","ms"], ["microsecondes","us"]]), "time_base");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#bbbbbb");
 this.setTooltip("Arrête l'exécution du programme pendant la durée indiquée");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/time/delay/");
  }
};
Blockly.Arduino.delay_time = function(block) {
  var delay_time = Blockly.Arduino.valueToCode(block, 'delay time', Blockly.Arduino.ORDER_ATOMIC);
  var time_base = block.getFieldValue('time_base');
  switch(time_base) {
		case "s" :
			var code = 'delay(' + 1000*delay_time + ');\n';
			break;
		case "ms" :
			var code = 'delay(' + delay_time + ');\n';
			break;
		case"us":
			var code = 'delayMicroseconds(' + delay_time + ');\n';
			break;
  };
  return code;
};
/*  stockage  */
Blockly.Blocks.storage_sd_write = {
  init: function() {
    this.setColour("#154360");
	this.appendDummyInput()
		.appendField(Blockly.Msg.STORAGE_WRITE_SD_FILE)
        .appendField(this.newQuote_(true))
        .appendField(new Blockly.FieldTextInput(''), 'FILE')
        .appendField(this.newQuote_(false));
    this.appendValueInput("DATA")
        .setCheck(["String","Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.STORAGE_SD_DATA);
    this.appendValueInput("NEWLINE")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.STORAGE_SD_NEWLINE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
  newQuote_: function(open) {
    if (open == this.RTL) {
      var file = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==';
    } else {
      var file = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC';
    }
    return new Blockly.FieldImage(file, 12, 12, '"');
  }
};
Blockly.Arduino.storage_sd_write = function() {
	var file = Blockly.Arduino.quote_(this.getFieldValue('FILE'));
	//file=file.replace(/String/,"");
	var data = Blockly.Arduino.valueToCode(this, 'DATA', Blockly.Arduino.ORDER_ATOMIC) || '\"\"';
	//data=data.replace(/String/,"");
	var newline = Blockly.Arduino.valueToCode(this, 'NEWLINE', Blockly.Arduino.ORDER_ATOMIC) || 'false';
	Blockly.Arduino.includes_['define_sd'] = '#include <SD.h>';
	Blockly.Arduino.includes_['define_spi'] = '#include <SPI.h>';
	Blockly.Arduino.setups_['setup_sd_write_chipselect'] = 'const int chipSelect = 4;';
	Blockly.Arduino.setups_['setup_sd_write_begin'] = 'SD.begin(chipSelect);';
	Blockly.Arduino.definitions_['var_File_datafile'] = 'File datafile;';
	var code='datafile = SD.open('+file+', FILE_WRITE);\n';
	code+='if(datafile){\n';
	code+='	datafile.print('+data+');\n';
	if(newline=='true'){
		code+='	datafile.println("");\n';
	}
	code+='	datafile.close();\n';
	code+='}\n';
	return code;
}
Blockly.Blocks.storage_eeprom_write_long = {
  init: function() {
    this.setColour("#154360");
    this.appendValueInput("ADDRESS")
		.setCheck("Number")
        .appendField(Blockly.Msg.STORAGE_EEPROM_WRITE_LONG);
    this.appendValueInput("DATA")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.STORAGE_DATA_LONG);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Arduino.storage_eeprom_write_long = function() {
	var address = Blockly.Arduino.valueToCode(this, 'ADDRESS', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var data = Blockly.Arduino.valueToCode(this, 'DATA', Blockly.Arduino.ORDER_ATOMIC) || '0';
	Blockly.Arduino.includes_['define_eeprom'] = '#include <EEPROM.h>';
	var funcName='eepromWriteLong';
    var code2='void '+funcName+'(int address, unsigned long value) {\n' 
	+ '  union u_tag {\n'
	+ '  	byte b[4];\n'
	+ '  	unsigned long ULtime;\n'
	+ '  }\n'
	+ '  time;\n'
	+ '  time.ULtime=value;\n'
	+ '  EEPROM.write(address, time.b[0]);\n'
	+ '  EEPROM.write(address+1, time.b[1]);\n'
	+ '  if (time.b[2] != EEPROM.read(address+2) ) EEPROM.write(address+2, time.b[2]);\n'
	+ '  if (time.b[3] != EEPROM.read(address+3) ) EEPROM.write(address+3, time.b[3]);\n'
	+ '}\n';
    Blockly.Arduino.definitions_[funcName] = code2;
	return 'eepromWriteLong('+address+', '+data+');\n';
}
Blockly.Blocks.storage_eeprom_read_long = {
  init: function() {
    this.setColour("#154360");
    this.appendValueInput("ADDRESS")
		.setCheck("Number")
        .appendField(Blockly.Msg.STORAGE_EEPROM_READ_LONG);
    this.setOutput(true, Number);
  }
};
Blockly.Arduino.storage_eeprom_read_long = function() {
	var address = Blockly.Arduino.valueToCode(this, 'ADDRESS', Blockly.Arduino.ORDER_ATOMIC) || '0';
	Blockly.Arduino.includes_['define_eeprom'] = '#include <EEPROM.h>';
	var code ='eepromReadLong('+address+')';
	var funcName='eepromReadLong';
    var code2='unsigned long '+funcName+'(int address) {\n' 
	+ '  union u_tag {\n'
	+ '  	byte b[4];\n'
	+ '  	unsigned long ULtime;\n'
	+ '  }\n'
	+ '  time;\n'
	+ '  time.b[0] = EEPROM.read(address);\n'
	+ '  time.b[1] = EEPROM.read(address+1);\n'
	+ '  time.b[2] = EEPROM.read(address+2);\n'
	+ '  time.b[3] = EEPROM.read(address+3);\n'
	+ '  return time.ULtime;\n'
	+ '}\n';
    Blockly.Arduino.definitions_[funcName] = code2;
    return [code,Blockly.Arduino.ORDER_ATOMIC];
}
Blockly.Blocks.storage_eeprom_write_byte = {
  init: function() {
    this.setColour("#154360");
    this.appendValueInput("ADDRESS")
		.setCheck("Number")
        .appendField(Blockly.Msg.STORAGE_EEPROM_WRITE_BYTE);
    this.appendValueInput("DATA")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.STORAGE_DATA_BYTE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Arduino.storage_eeprom_write_byte = function() {
	var address = Blockly.Arduino.valueToCode(this, 'ADDRESS', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var data = Blockly.Arduino.valueToCode(this, 'DATA', Blockly.Arduino.ORDER_ATOMIC) || '0';
	Blockly.Arduino.includes_['define_eeprom'] = '#include <EEPROM.h>';
	return 'EEPROM.write('+address+', '+data+');\n';
}
Blockly.Blocks.storage_eeprom_read_byte = {
  init: function() {
    this.setColour("#154360");
    this.appendValueInput("ADDRESS")
		.setCheck("Number")
        .appendField(Blockly.Msg.STORAGE_EEPROM_READ_BYTE);
    this.setOutput(true, Number);
  }
};
Blockly.Arduino.storage_eeprom_read_byte = function() {
	var address = Blockly.Arduino.valueToCode(this, 'ADDRESS', Blockly.Arduino.ORDER_ATOMIC) || '0';
	Blockly.Arduino.includes_['define_eeprom'] = '#include <EEPROM.h>';
	var code ='EEPROM.read('+address+')';
	return [code,Blockly.Arduino.ORDER_ATOMIC];
}
