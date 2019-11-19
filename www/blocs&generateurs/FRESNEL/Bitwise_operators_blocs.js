/*	
 * @author Philippe
 */
"use strict";
goog.provide("Blockly.Blocks.arduino");
goog.require("Blockly.Blocks");

Blockly.Blocks.Not_Bitwise = {
  init: function() {
    this.appendDummyInput()
        .appendField("NOT");
    this.appendValueInput("operand")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#123456");
 this.setTooltip("Réalise le complément bit à bit");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/structure/bitwise-operators/bitwisenot/");
  }
};

Blockly.Blocks.Bitwise_Operators = {
  init: function() {
    this.appendValueInput("operand_1")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["AND","0"], ["OR","1"], ["XOR","2"], [">>","3"], ["<<","4"]]), "operator");
    this.appendValueInput("operand_2")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#123456");
 this.setTooltip("Réalise l'opération choisie bit à bit");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/structure/bitwise-operators/bitwiseand/");
  }
};

Blockly.Blocks.Data_Format = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["0x","hex"], ["0b","bin"]]), "format")
        .appendField(new Blockly.FieldTextInput("00"), "value");
    this.setOutput(true, "Number");
    this.setColour("#123456");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Arduino.Bitwise_Operators = function() {
  var value_operand_1 = Blockly.Arduino.valueToCode(this, 'operand_1', Blockly.Arduino.ORDER_ATOMIC);
  var operator_type = this.getFieldValue('operator');
  var value_operand_2 = Blockly.Arduino.valueToCode(this, 'operand_2', Blockly.Arduino.ORDER_ATOMIC);
  
  switch(operator_type) {
	  case "0":
		var code =  '(' + value_operand_1 + ' & ' + value_operand_2 + ')' ;
	  break;
	  
	  case "1":
		var code =  '(' + value_operand_1 + ' | ' + value_operand_2 + ')' ;
	  break;
	  
	  case "2":
		var code =  '(' + value_operand_1 + ' ^ ' + value_operand_2 + ')' ;
	  break;
	  
	  case "3":
		var code =  '(' + value_operand_1 + ' >> ' + value_operand_2 + ')' ;
	  break;
	  
	  case "4":
		var code =  '(' + value_operand_1 + ' << ' + value_operand_2 + ')' ;
	  break;
  }
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.Not_Bitwise = function() {
  var value_operand = Blockly.Arduino.valueToCode(this, 'operand', Blockly.Arduino.ORDER_ATOMIC);
  
  var code =  ' ~ ' + value_operand ;
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.Data_Format = function() {
  var dropdown_format = this.getFieldValue('format');
  var text_value = this.getFieldValue('value');
  switch (dropdown_format) {
        case "hex":
            var code = '0x'+text_value;
            break;
        case "bin":
            var code = '0b'+text_value;
			break;
	};
	  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};




