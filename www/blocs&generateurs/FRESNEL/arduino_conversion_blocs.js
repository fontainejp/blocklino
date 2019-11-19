"use strict";
goog.provide("Blockly.Blocks.arduino");
goog.require("Blockly.Blocks");

Blockly.Blocks['conversion_tochar'] = {
  init: function() {
    this.setColour("#00979D");
    this.appendValueInput("NAME")
		//.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("convertir en char ");
    this.setOutput(true, 'String');
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/CharCast');
  }
};

Blockly.Blocks['conversion_tobyte'] = {
  init: function() {
    this.setColour("#00979D");
    this.appendValueInput("NAME")
		//.setCheck('Number')
        .appendField("convertir en Byte ");
    this.setOutput(true, 'Number');
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/ByteCast');
  }
};

Blockly.Blocks['conversion_toint'] = {
  init: function() {
    this.setColour("#00979D");
    this.appendValueInput("NAME")
		//.setCheck('Number')
        .appendField("convertir en Int ");
    this.setOutput(true, 'Number');
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/IntCast');
  }
};

Blockly.Blocks['conversion_tolong'] = {
  init: function() {
    this.setColour("#00979D");
    this.appendValueInput("NAME")
		//.setCheck('Number')
        .appendField("convertir en Long ");
    this.setOutput(true, 'Number');
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/reference/en/language/variables/conversion/longcast/');
  }
};

Blockly.Blocks['conversion_tofloat'] = {
  init: function() {
    this.setColour("#00979D");
    this.appendValueInput("NAME")
		//.setCheck('Number')
        .appendField("convertir en nombre à virgule ");
    this.setOutput(true, 'Number');
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/floatCast');
  }
};

Blockly.Blocks['conversion_toString'] = {
  init: function() {
    this.setColour("#00979D");
    this.appendValueInput("NAME")
		//.setCheck('Number')
        .appendField("convertir en texte ");
    this.setOutput(true, 'String');
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/StringConstructor');
  }
};

Blockly.Blocks.conversion_map = {
  init: function() {
    this.setColour("#00979D");
    this.setHelpUrl("http://www.mon-club-elec.fr/pmwiki_reference_arduino/pmwiki.php?n=Main.Map");
    this.appendValueInput("NUM")
        .appendField("la valeur ré-étalonnée depuis :")
        .setCheck('Number');
    this.appendValueInput("IN_MIN")
        .appendField("comprise entre le minimum :")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck('Number');
    this.appendValueInput("IN_MAX")
        .appendField("et le maximum :")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck('Number');
    this.appendValueInput("OUT_MIN")
        .appendField("vers un minimum de :")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck('Number');
    this.appendValueInput("OUT_MAX")
        .appendField("et un maximum de :")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck('Number');
    this.setInputsInline(false);
    this.setOutput(true);
    this.setTooltip("ré-étalonne un nombre d'une fourchette de valeur vers une autre fourchette");
  }
};

Blockly.Blocks['ethernet_PARSERV2_ATOI'] = {
  init: function() {  
    this.appendDummyInput()
		.appendField("Conversion Texte --> Nombre Entier");
	this.appendValueInput("ascii")
		.setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Texte");
	this.setColour("#FFAA00");
	this.setOutput(true, null);
	this.setTooltip("Conversion Ascii --> Int");
	this.setHelpUrl("");
  }
};	

Blockly.Blocks['ethernet_PARSERV2_ATOF'] = {
  init: function() {  
    this.appendDummyInput()
		.appendField("Conversion Texte --> Nombre à virgule");
	this.appendValueInput("ascii")
		.setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Texte");
	this.setColour("#FFAA00");
	this.setOutput(true, null);
	this.setTooltip("Conversion Ascii --> Float");
	this.setHelpUrl("");
  }
};	

//************************************************************************************************GENE
Blockly.Arduino['conversion_tochar'] = function(block) {
	var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
	var code = 'char('+value_name+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['conversion_tobyte'] = function(block) {
	var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
	var code = 'byte('+value_name+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['conversion_toint'] = function(block) {
	var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
	var code = 'int('+value_name+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['conversion_tolong'] = function(block) {
	var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
	var code = 'long('+value_name+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino['conversion_tofloat'] = function(block) {
	var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
	var code = 'float('+value_name+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['conversion_toString'] = function(block) {
	var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
	var code = 'String('+value_name+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.conversion_map = function() {
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE);
  var value_imin = Blockly.Arduino.valueToCode(this, 'IN_MIN', Blockly.Arduino.ORDER_ATOMIC);
  var value_imax = Blockly.Arduino.valueToCode(this, 'IN_MAX', Blockly.Arduino.ORDER_ATOMIC);
  var value_omin = Blockly.Arduino.valueToCode(this, 'OUT_MIN', Blockly.Arduino.ORDER_ATOMIC);
  var value_omax = Blockly.Arduino.valueToCode(this, 'OUT_MAX', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'map(' + value_num + ', '+ value_imin + ', ' + value_imax + ', ' + value_omin + ', ' + value_omax + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ethernet_PARSERV2_ATOI = function() {
  var ascii = Blockly.Arduino.valueToCode(this, 'ascii', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'atoi(' + ascii +')' ;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ethernet_PARSERV2_ATOF = function() {
  var ascii = Blockly.Arduino.valueToCode(this, 'ascii', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'atof(' + ascii +')' ;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};