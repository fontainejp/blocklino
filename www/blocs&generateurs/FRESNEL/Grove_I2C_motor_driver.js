/**
 * Blocks pour Shield moteur Grove I2C
	* void I2C_MotorShield_begin(String ADDRESS);
	* void I2C_MotorShield_DC_speed(String MOTOR, bool CHECK, int SPEED);
	* void I2C_MotorShield_DC_stop(String MOTOR);
 * @author Gwen
 */
'use strict';

goog.provide("Blockly.Blocks.arduino");
goog.require("Blockly.Blocks");

// INIT + ADRESSE
Blockly.Blocks.I2C_MotorShield_begin = {
  init: function() {
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("blocs&generateurs/FRESNEL/Images/GroveI2cmotor.jpg", 75, 75, "*"))
        .appendField("Grove Motor Driver INIT");
    this.appendDummyInput()
        .appendField("Adresse du Shield (hexa)")
        .appendField(new Blockly.FieldTextInput("0x0F"), "ADDRESS");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("Initialise le Shield en renseignant son adresse");
 this.setHelpUrl("https://github.com/Seeed-Studio/Grove_I2C_Motor_Driver_v1_3");
  }
};

Blockly.Arduino.I2C_MotorShield_begin = function() {
  var address = this.getFieldValue('ADDRESS');
  
  Blockly.Arduino.includes_['include_lib'] = '#include "Grove_I2C_Motor_Driver.h"';
  Blockly.Arduino.definitions_['define address'] = '#define I2C_SHIELD_ADDRESS '+address;  
  Blockly.Arduino.setups_['begin'] = 'Motor.begin(I2C_SHIELD_ADDRESS);';

  return "";
};

// DC MOTORS
Blockly.Blocks.I2C_MotorShield_DC_speed = {
  init: function() {
	this.appendDummyInput()
        .appendField("Grove DC Motor Driver");
    this.appendDummyInput()
        .appendField("Réglage de la vitesse");
    this.appendDummyInput()
        .appendField("ID Moteur ")
        .appendField(new Blockly.FieldDropdown([["Moteur 1","MOTOR1"], ["Moteur 2","MOTOR2"]]), "MOTOR");
	this.appendDummyInput()
        .appendField("Sens Anti-horaire ? ")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "CHECK");
    this.appendValueInput("SPEED")
        .setCheck(null)
        .appendField("Vitesse (0-100%) :  ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("Commande le moteur choisi avec le pourcentage de la vitesse renseigné et en tenant compte du sens de rotation choisi");
 this.setHelpUrl("https://github.com/Seeed-Studio/Grove_I2C_Motor_Driver_v1_3");
  }
};

Blockly.Arduino.I2C_MotorShield_DC_speed = function() {
  var motor = this.getFieldValue('MOTOR');
  var check = this.getFieldValue('CHECK') == 'TRUE';
  var speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
  var sign = '';
  if (check) {sign='-';}
  var code = 'Motor.speed('+motor+', '+sign+speed+');\n';
  
  return code;
};


Blockly.Blocks.I2C_MotorShield_DC_stop = {
  init: function() {
	this.appendDummyInput()
        .appendField("Grove DC Motor Driver");
    this.appendDummyInput()
        .appendField("Arrêt du moteur");
    this.appendDummyInput()
        .appendField("ID Moteur ")
        .appendField(new Blockly.FieldDropdown([["Moteur 1","MOTOR1"], ["Moteur 2","MOTOR2"]]), "MOTOR");
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("Arrête le moteur selectionné");
 this.setHelpUrl("https://github.com/Seeed-Studio/Grove_I2C_Motor_Driver_v1_3");
  }
};

Blockly.Arduino.I2C_MotorShield_DC_stop = function() {
  var motor = this.getFieldValue('MOTOR');
  var code = 'Motor.stop('+motor+');\n';
  
  return code;
};

// STEPPER MOTORS
Blockly.Blocks.I2C_MotorShield_PAP_step = {
  init: function() {
	this.appendDummyInput()
        .appendField("Grove stepper Motor Driver");
    this.appendDummyInput()
        .appendField("Type de moteur ")
        .appendField(new Blockly.FieldDropdown([["4 phases (unipolaire)","0"], ["2 phases (bipolaire)","1"]]), "TYPE");
	this.appendDummyInput()
        .appendField("Mode : ")
        .appendField(new Blockly.FieldDropdown([["compatible (4_pas)","0"], ["fin (1_pas)","1"]]), "MODE");
	this.appendDummyInput()
        .appendField("Sens Anti-horaire ? ")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "CHECK");
    this.appendValueInput("STEP")
        .setCheck(null)
        .appendField("Nombre de pas  :  ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("Indique le nombre de pas que doit effectuer le moteur pas à pas. Le nombre de pas maximal est de 1024 dans le sens horaire ou anti-horaire. Le moteur effectue un tour complet pour 512 pas et 2 tours pour 1024 pas. Le moteur pas à pas s'arrête automatiquement une fois le nombre de pas effectué");
 this.setHelpUrl("https://github.com/Seeed-Studio/Grove_I2C_Motor_Driver_v1_3");
  }
};

Blockly.Arduino.I2C_MotorShield_PAP_step = function() {
  var type = this.getFieldValue('TYPE');
  var mode = this.getFieldValue('MODE');
  var step = Blockly.Arduino.valueToCode(this, 'STEP', Blockly.Arduino.ORDER_ATOMIC);
  var check = this.getFieldValue('CHECK') == 'TRUE';
  var sign = '';
  if (check) {sign='-';}
  var code = 'Motor.StepperRun('+sign+step+', '+type+', '+mode+');\n';
  
  return code;
};