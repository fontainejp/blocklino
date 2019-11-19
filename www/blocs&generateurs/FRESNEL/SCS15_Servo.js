/**
 * Blocks pour servo-moteur SCS15 de Feetech
	* int EnableTorque(u8 ID, u8 Enable);
	* int WritePos(u8 ID, u16 Position, u16 Time, u16 Speed = 0);
	* int ReadPos(u8 ID);
	* @author Philippe
 */
'use strict';

goog.provide("Blockly.Blocks.arduino");
goog.require("Blockly.Blocks");


Blockly.Blocks.SCS15_Servo_init = {
  init: function() {
    this.appendDummyInput()
        .appendField("SCS15 Servo INIT");
    this.appendValueInput("Serial_ID")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Servomoteur connecté à la liaision Série N°");
    this.appendValueInput("Baud_rate")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Vitesse de transmission (bauds)");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("Spécifie la liaison série qui pilote le servo ainsi que la vitesse de transmission. Par défaut Serial1 à 38400 bauds");
 }
};

Blockly.Arduino.SCS15_Servo_init = function() {
  var serial_id = Blockly.Arduino.valueToCode(this, 'Serial_ID', Blockly.Arduino.ORDER_ATOMIC);
  var baud_rate = Blockly.Arduino.valueToCode(this, 'Baud_rate', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.includes_['include_SCServo.h'] = '#include <SCServo.h>';
  Blockly.Arduino.definitions_['SCServo SERVO'] = 'SCServo SERVO;';  
  Blockly.Arduino.setups_['Setup1'] = 'Serial'+serial_id+'.begin('+baud_rate+');';
  Blockly.Arduino.setups_['Setup2'] = 'SERVO.pSerial = &Serial'+serial_id+';';
  Blockly.Arduino.setups_['Setup3'] = 'delay(500);';
  return "";
};


Blockly.Blocks.SCS15_Servo_Enable_Torque = {
  init: function() {
    this.appendDummyInput()
        .appendField("SCS15 Servo Enable Torque");
    this.appendValueInput("Motor_ID")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("ID Servomoteur");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Torque")
        .appendField(new Blockly.FieldDropdown([["Enable","1"], ["Disable","0"]]), "Torque_Status");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("Alimmente le moteur sélectionné");
 }
};

Blockly.Arduino.SCS15_Servo_Enable_Torque = function() {
  var motor_id = Blockly.Arduino.valueToCode(this, 'Motor_ID', Blockly.Arduino.ORDER_ATOMIC);
  var torque_status = this.getFieldValue('Torque_Status');
  Blockly.Arduino.setups_['Setup'] = 'SERVO.EnableTorque('+motor_id+', '+torque_status+');';
  return "";
};


Blockly.Blocks.SCS15_Servo_Read_Position = {
  init: function() {
    this.appendValueInput("Motor_ID")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Position du servomoteur ID");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(20);
 this.setTooltip("Renvoie la position courante du moteur [0; 200°] sous la forme d'un entier [0; 1023]");
 }
};

Blockly.Arduino.SCS15_Servo_Read_Position = function() {
  var motor_id = Blockly.Arduino.valueToCode(this, 'Motor_ID', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'SERVO.ReadPos('+motor_id+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Blocks.SCS15_Servo_Write_Position = {
  init: function() {
    this.appendDummyInput()
        .appendField("SCS15 Servo Write Position");
    this.appendValueInput("Motor_ID")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("ID Servomoteur");
    this.appendValueInput("Position")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Position");
	this.appendValueInput("temps")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Temps (ms)");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("Déplace le rotor du moteur dans le temps imparti (en ms) sur la position spécifiée. La position est codée avec un entier [0; 1023] pour une position angulaire [0; 200°]");
 }
};

Blockly.Arduino.SCS15_Servo_Write_Position = function() {
  var motor_id = Blockly.Arduino.valueToCode(this, 'Motor_ID', Blockly.Arduino.ORDER_ATOMIC);
  var position = Blockly.Arduino.valueToCode(this, 'Position', Blockly.Arduino.ORDER_ATOMIC);
  var temps = Blockly.Arduino.valueToCode(this, 'temps', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'SERVO.WritePos('+motor_id+', '+position+', '+temps+');\ndelay('+temps+');\n';
  return code;
};