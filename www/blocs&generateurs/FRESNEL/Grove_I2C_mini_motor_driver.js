/**
 * Blocks pour mini driver moteur CC Grove I2C
	* void drive(int speed);
    * void stop();
    * void brake();
    * byte getFault();
	
* Blocks pour mini driver moteur PAP Grove I2C
	stepper_4wd(int number_of_steps);
    void setSpeed(long rpm_start, long rpm_max);
    void step(int number_of_steps);
	
 * @author Philippe
 */
'use strict';

goog.provide("Blockly.Blocks.arduino");
goog.require("Blockly.Blocks");

/////////////////////////////////////////////////////////////Moteur CC/////////////////////////////////////////////////////////

// Création des objets motor0 et motor1
Blockly.Blocks.Grove_mini_motor_driver_init = {
  init: function() {
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("blocs&generateurs/FRESNEL/Images/MiniI2Cmotor2.png", 75, 50, "*"))
        .appendField("Grove Mini DC Motor Driver INIT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("Crée 2 objets motor0 et motor1 avec les adresses I2C par défaut (motor0 sur CH1:0xC4, motor1 sur CH2:0xC0)");
 this.setHelpUrl("http://wiki.seeedstudio.com/Grove-Mini_I2C_Motor_Driver_v1.0/");
  }
};

Blockly.Arduino.Grove_mini_motor_driver_init = function() {
  Blockly.Arduino.includes_['include_lib'] = '#include <SparkFunMiniMoto.h>';
  Blockly.Arduino.definitions_['define motor0'] = 'MiniMoto motor0(0xC4);';
  Blockly.Arduino.definitions_['define motor1'] = 'MiniMoto motor1(0xC0);';
  return "";
};


Blockly.Blocks.Grove_mini_motor_driver_speed = {
  init: function() {
	this.appendDummyInput()
        .appendField("Grove Mini DC Motor Driver");
    this.appendDummyInput()
        .appendField("Réglage de la vitesse");
    this.appendDummyInput()
        .appendField("ID Moteur ")
        .appendField(new Blockly.FieldDropdown([["Moteur sur CH1","motor0"], ["Moteur sur CH2","motor1"]]), "MOTOR");
	this.appendDummyInput()
        .appendField("Sens Anti-horaire ? ")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "CHECK");
    this.appendValueInput("SPEED")
        .setCheck(null)
        .appendField("Vitesse (0-63) :  ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("Commande le moteur choisi avec la valeur de vitesse renseignée et en tenant compte du sens de rotation choisi");
 this.setHelpUrl("http://wiki.seeedstudio.com/Grove-Mini_I2C_Motor_Driver_v1.0/");
  }
};

Blockly.Arduino.Grove_mini_motor_driver_speed = function() {
  var motor = this.getFieldValue('MOTOR');
  var check = this.getFieldValue('CHECK') == 'TRUE';
  var speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
  var sign = '';
  if (check) {sign='-';}
  var code = motor+'.drive('+sign+speed+');\n';
  
  return code;
};


Blockly.Blocks.Grove_mini_motor_driver_stop = {
  init: function() {
	this.appendDummyInput()
        .appendField("Grove Mini DC Motor Driver");  
    this.appendDummyInput()
        .appendField("Arrêt du moteur");
    this.appendDummyInput()
        .appendField("ID Moteur ")
        .appendField(new Blockly.FieldDropdown([["Moteur sur CH1","motor0"], ["Moteur sur CH2","motor1"]]), "MOTOR");
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("Arrête le moteur selectionné");
 this.setHelpUrl("http://wiki.seeedstudio.com/Grove-Mini_I2C_Motor_Driver_v1.0/");
  }
};

Blockly.Arduino.Grove_mini_motor_driver_stop = function() {
  var motor = this.getFieldValue('MOTOR');
  var code = motor+'.stop();\n';
  
  return code;
};


Blockly.Blocks.Grove_mini_motor_driver_brake = {
  init: function() {
	this.appendDummyInput()
        .appendField("Grove Mini DC Motor Driver");  
    this.appendDummyInput()
        .appendField("Freinage du moteur");
    this.appendDummyInput()
        .appendField("ID Moteur ")
        .appendField(new Blockly.FieldDropdown([["Moteur sur CH1","motor0"], ["Moteur sur CH2","motor1"]]), "MOTOR");
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("Freine le moteur selectionné");
 this.setHelpUrl("http://wiki.seeedstudio.com/Grove-Mini_I2C_Motor_Driver_v1.0/");
  }
};

Blockly.Arduino.Grove_mini_motor_driver_brake = function() {
  var motor = this.getFieldValue('MOTOR');
  var code = motor+'.brake();\n';
  
  return code;
};


Blockly.Blocks.Grove_mini_motor_driver_getfault = {
  init: function() {
    this.appendDummyInput()
        .appendField("Anomalie moteur sur")
        .appendField(new Blockly.FieldDropdown([["CH1","motor0"], ["CH2","motor1"]]), "MOTOR")
        .appendField("?");
    this.setOutput(true, "Number");
    this.setColour(20);
 this.setTooltip("Retourne la valeur du registre 'FAULT' du circuit DRV8830 et le remet à 0");
 this.setHelpUrl("http://wiki.seeedstudio.com/Grove-Mini_I2C_Motor_Driver_v1.0/");
  }
};

Blockly.Arduino.Grove_mini_motor_driver_getfault = function() {
  var motor = this.getFieldValue('MOTOR');
  var code = motor+'.getFault()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/////////////////////////////////////////////////////////////Moteur PAP/////////////////////////////////////////////////////////

Blockly.Blocks.Grove_mini_motor_driver_stepper_init = {
  init: function() {
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("blocs&generateurs/FRESNEL/Images/MiniI2Cmotor2.png", 75, 50, "*"))
        .appendField("Grove Mini Stepper Motor Driver INIT");
	 this.appendValueInput("Number_of_steps")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Nombre de pas du moteur : ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("définit le nombre de pas du moteur");
 this.setHelpUrl("http://wiki.seeedstudio.com/Grove-Mini_I2C_Motor_Driver_v1.0/");
  }
};

Blockly.Arduino.Grove_mini_motor_driver_stepper_init = function() {
  Blockly.Arduino.includes_['include_lib_wire.h'] = '#include <Wire.h>';
  Blockly.Arduino.includes_['include_lib_SparkFunMiniMoto.h'] = '#include <SparkFunMiniMoto.h>';
  Blockly.Arduino.includes_['include_lib_Hercules_Stepper.h'] = '#include "Hercules_Stepper.h"';
  var number_of_steps = Blockly.Arduino.valueToCode(this, 'Number_of_steps', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['definition'] = 'stepper_4wd stepper('+number_of_steps+');\n';
  return "";
};


Blockly.Blocks.Grove_mini_motor_driver_stepper_set_speed = {
  init: function() {
    this.appendDummyInput()
        .appendField("Grove Mini Stepper Motor Driver");
    this.appendDummyInput()
        .appendField("Réglage de la vitesse (en tr/min)");
    this.appendValueInput("rpm_start")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Vitesse initiale : ");
    this.appendValueInput("rpm_maxi")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Vitesse maxi : ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("définit la vitesse de rotation du moteur en tr/min");
 this.setHelpUrl("http://wiki.seeedstudio.com/Grove-Mini_I2C_Motor_Driver_v1.0/");
  }
};

Blockly.Arduino.Grove_mini_motor_driver_stepper_set_speed = function() {
  var rpm_start = Blockly.Arduino.valueToCode(this, 'rpm_start', Blockly.Arduino.ORDER_ATOMIC);
  var rpm_maxi = Blockly.Arduino.valueToCode(this, 'rpm_maxi', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup'] = 'stepper.setSpeed('+rpm_start+', '+rpm_maxi+');\n';
  return "";
};


Blockly.Blocks.Grove_mini_motor_driver_stepper_step = {
  init: function() {
    this.appendDummyInput()
        .appendField("Grove Mini Stepper Motor Driver");
    this.appendValueInput("number_of_steps")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("se déplacer du nombre de pas :");
    this.appendDummyInput()
        .appendField("sens anti-horaire ? ")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "CHECK");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("Déplace le rotor du moteur du nombre de pas spécifié");
 this.setHelpUrl("http://wiki.seeedstudio.com/Grove-Mini_I2C_Motor_Driver_v1.0/");
  }
};

Blockly.Arduino.Grove_mini_motor_driver_stepper_step = function() {
  var number_of_steps = Blockly.Arduino.valueToCode(this, 'number_of_steps', Blockly.Arduino.ORDER_ATOMIC);
  var check = this.getFieldValue('CHECK') == 'TRUE';
  var sign = '';
  if (check) {sign='-';}
  var code = 'stepper.step('+sign+number_of_steps+');\n';
  return code;
};