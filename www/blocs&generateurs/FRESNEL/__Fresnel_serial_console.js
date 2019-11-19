"use strict";
goog.provide("Blockly.Blocks.arduino");
goog.require("Blockly.Blocks");

 // Blockly.Blocks['serial_init2'] = {
  // init: function() {
	// var card=window.localStorage.card;
    // this.setColour("#5CB712");
	// this.setHelpUrl('http://arduino.cc/en/Serial');
	// this.setInputsInline(true);
    // this.appendDummyInput("")
	    // .appendField("Fixer la vitesse (en bauds) du port série à")
     	// .appendField(new Blockly.FieldDropdown(profile[card].serial), "SPEED");
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    // this.setTooltip('Serial communication init speed.');
  // }
// };
// Blockly.Blocks['serial_read2'] = {
  // init: function() {
	// var card=window.localStorage.card;
    // this.setColour("#5CB712");
	// this.setHelpUrl('http://arduino.cc/en/Serial/read');
	// this.appendDummyInput("")
	    // .appendField(Blockly.Msg.Serial_read);
    // this.setInputsInline(true);
    // this.setOutput(true, "Number");
    // this.setTooltip('Reads incoming serial data. ');
  // }
// };
Blockly.Blocks["serial_init2"]={init:function(){
		var card=window.localStorage.card;
        this.setColour("#5CB712");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setInputsInline(false);
        this.appendDummyInput().appendField("Briches du port Série").appendField(new Blockly.FieldDropdown(profile[card].serialPin), "pin");
		this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("vitesse (en bauds)").appendField(new Blockly.FieldDropdown(profile[card].serial), "SPEED");
        this.setTooltip("Initialisation du port Série")}
};

Blockly.Blocks["serial_read2"]={init:function(){
		var card=window.localStorage.card;
        this.setColour("#5CB712");
        //this.setHelpUrl(Blockly.Msg.HELPURL);
		if (card=="python"){this.appendDummyInput().appendField("Données lues sur le port Série");} else {this.appendDummyInput().appendField("Données lues sur le port Série");}
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setTooltip("Lecture des données du port Série")}
};

Blockly.Blocks['serial_available2'] = {
  init: function() {
    this.setColour("#5CB712");
	this.setHelpUrl('http://arduino.cc/en/Serial/available');
	this.appendDummyInput("")
	    .appendField("une donnée est disponible sur le port série ?");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('Get the number of bytes (characters) available for reading from the serial port. This is data that s already arrived and stored in the serial receive buffer (which holds 64 bytes). ');
  }
};
Blockly.Blocks['serial_print2'] = {
  init: function() {
    this.setColour("#5CB712");
	this.setHelpUrl("http://www.arduino.cc/en/Serial/Print");
    this.appendValueInput("CONTENT")
		.setCheck('String')
        .appendField("afficher sur le port série le texte");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("envoie des données sur le port série pour surveillance par le moniteur en ASCII");
  }
};
Blockly.Blocks['serial_write2'] = {
  init: function() {
    this.setColour("#5CB712");
	this.setHelpUrl('');
    this.appendValueInput("CONTENT")
		.setCheck('String')
        .appendField("Envoyer sur le port série la donnée :");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Writes binary data to the serial port. This data is sent as a byte or series of bytes to send the characters representing the digits of a number use the print() function instead. ');
  }
};
Blockly.Blocks['serial_print_integer2'] = {
  init: function() {
    this.setColour("#5CB712");
	this.setHelpUrl("http://www.arduino.cc/en/Serial/Print");
    this.appendValueInput("N")
		.setCheck(['Number','String'])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Afficher nombre entier sur le port Série :");
	this.appendDummyInput()
        .appendField("Au format : ")
     	.appendField(new Blockly.FieldDropdown([["décimal", "DEC"],["hexadécimal", "HEX"],["binaire", "BIN"],["octal", "OCT"]]), "TYPE");
	this.appendDummyInput()
        .appendField("Nouvelle ligne?")   
        .appendField(new Blockly.FieldDropdown([["oui", "true"], ["non", "false"]]), 'newline');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("envoie des données sur le port série pour surveillance par le moniteur en ASCII");
  }
};
Blockly.Blocks['serial_print_float2'] = {
  init: function() {
    this.setColour("#5CB712");
	this.setHelpUrl("http://www.arduino.cc/en/Serial/Print");
    this.appendValueInput("N")
		.setCheck(['Number','String'])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Afficher nombre entier sur le port Série :");
	this.appendDummyInput()
        .appendField("Nombre de décimales : ") 
     	.appendField(new Blockly.FieldTextInput("2"), "decimales");
	this.appendDummyInput()
        .appendField("Nouvelle ligne?")   
        .appendField(new Blockly.FieldDropdown([["oui", "true"], ["non", "false"]]), 'newline');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("envoie des données sur le port série pour surveillance par le moniteur en ASCII");
  }
};
Blockly.Blocks['serial_print_multi2'] = {
  init: function() {
    this.setColour("#5CB712");
	this.setHelpUrl("http://www.arduino.cc/en/Serial/Print");
    this.appendValueInput("N")
		.setCheck(['Number','String'])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Afficher sur le port Série :");
	this.appendDummyInput()
        .appendField("Nouvelle ligne?")   
        .appendField(new Blockly.FieldDropdown([["oui", "true"], ["non", "false"]]), 'newline');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("envoie des données sur le port série pour surveillance par le moniteur en ASCII");
  }
};
// -----------------------------GENE

Blockly.Arduino['serial_init2'] = function() {
  var dropdown_speed = this.getFieldValue('SPEED');
  Blockly.Arduino.setups_['serial_begin'] = 'Serial.begin(' + dropdown_speed + ');' ;
  return "";
};
Blockly.Arduino['serial_read2'] = function() {
  // TODO: Assemble Python into code variable.
  var code = 'Serial.read()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino['serial_available2'] = function() {
  // TODO: Assemble Python into code variable.
  var code = 'Serial.available()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino['serial_write2'] = function() {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
  //content = content.replace('(','').replace(')','');  
  var code = 'Serial.write('+content+');\n';  //ORGINAL \nSerial.print(\'\\t\');
  return code;
};
Blockly.Arduino.serial_print_integer2 = function() {
  var value_n = Blockly.Arduino.valueToCode(this, 'N', Blockly.Arduino.ORDER_ATOMIC);
  var type = this.getTitleValue('TYPE');
  var new_line = this.getFieldValue('newline');
  if (new_line =="true")
	{
		var code =  'Serial.println(' +value_n+ ',' +type+ ');\n';
	}
	else
	{
		var code =  'Serial.print(' +value_n+ ',' +type+ ');\n';
	}
  return code;
};

Blockly.Arduino.serial_print_float2 = function() {
  var value_n = Blockly.Arduino.valueToCode(this, 'N', Blockly.Arduino.ORDER_ATOMIC);
  var decimales = this.getTitleValue('decimales');
  var new_line = this.getFieldValue('newline');
  if (new_line =="true")
	{
		var code =  'Serial.println(' +value_n+ ',' +decimales+ ');\n';
	}
	else
	{
		var code =  'Serial.print(' +value_n+ ',' +decimales+ ');\n';
	}
  return code;
};


Blockly.Arduino.serial_print_multi2 = function() {
  var value_n = Blockly.Arduino.valueToCode(this, 'N', Blockly.Arduino.ORDER_ATOMIC);
  var new_line = this.getFieldValue('newline');
  if (new_line =="true")
	{
		var code =  'Serial.println(' +value_n+ ');\n';
	}
	else
	{
		var code =  'Serial.print(' +value_n+ ');\n';
	}
  return code;
};