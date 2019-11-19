/**
 * Blocks pour servo-moteur
	* void servo_attach(byte num, byte pin, int min, int max);
	* void servo_detach(byte num);
	* void servo_write(byte num, int val);
	* void servo_writeus(byte num, int val);
	
 * @author Gwen
 */
'use strict';

goog.provide("Blockly.Blocks.arduino");
goog.require("Blockly.Blocks");

// INIT SERVO
Blockly.Blocks.servo_attach = {
  init: function() {
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("blocs&generateurs/FRESNEL/Images/Servo.jpg", 75, 75, "*"))
        .appendField("Initialisation servo-moteur")
		.appendField(new Blockly.FieldNumber(1), "NUM");
    this.appendDummyInput()
        .appendField("Numéro de la broche connecté")
        .appendField(new Blockly.FieldNumber(9,0), "PIN");
    this.appendDummyInput()
        .appendField("Durée impulsion minimale")
        .appendField(new Blockly.FieldNumber(1000, 0), "MIN");
    this.appendDummyInput()
        .appendField("Durée impulsion maximale")
        .appendField(new Blockly.FieldNumber(2400, 0), "MAX");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("Initialise un servo moteur en précisant la broche et les durées d'impulsion mini et maxi en microsecondes.");
 this.setHelpUrl("https://www.arduino.cc/en/Reference/ServoAttach");
  }
};

Blockly.Arduino.servo_attach = function() {
  var num = this.getFieldValue('NUM');
  var pin = this.getFieldValue('PIN');
  var min = this.getFieldValue('MIN');
  var max = this.getFieldValue('MAX');
  
  Blockly.Arduino.includes_['include_Servo.h'] = '#include <Servo.h>';
  Blockly.Arduino.definitions_['myservo'+num] = 'Servo myservo'+num+';';  
  Blockly.Arduino.setups_['attach_servo'+num] = 'myservo'+num+'.attach('+pin+','+min+','+max+');';

  return "";
};


Blockly.Blocks.servo_detach = {
  init: function() {
    this.appendDummyInput()
        .appendField("Déconnexion servo-moteur")
		.appendField(new Blockly.FieldNumber(1), "NUM");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("Déconnecte un servo moteur.");
 this.setHelpUrl("https://www.arduino.cc/en/Reference/ServoDetach");
  }
};

Blockly.Arduino.servo_detach = function() { 
  var num = this.getFieldValue('NUM');
  var code = 'myservo'+num+'.detach();\n';
  return code;
};


Blockly.Blocks.servo_write = {
  init: function() {
    this.appendDummyInput()
        .appendField("Commander le servo-moteur")
		.appendField(new Blockly.FieldNumber(1), "NUM");
	this.appendValueInput("SPEED")
		.setAlign(Blockly.ALIGN_RIGHT)
		.setCheck(null)
        .appendField("Angle ou Vitesse : ");
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("Writes a value to the servo, controlling the shaft accordingly. On a standard servo, this will set the angle of the shaft (in degrees), moving the shaft to that orientation. On a continuous rotation servo, this will set the speed of the servo (with 0 being full-speed in one direction, 180 being full speed in the other, and a value near 90 being no movement).");
 this.setHelpUrl("https://www.arduino.cc/en/Reference/ServoWrite");
  }
};

Blockly.Arduino.servo_write = function() {
  var num = this.getFieldValue('NUM');
  var speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'myservo'+num+'.write('+speed+');\n';
  return code;
};


Blockly.Blocks.servo_writeus = {
  init: function() {
    this.appendDummyInput()
        .appendField("Commander le servo-moteur en durée d'impulsion (us)")
		.appendField(new Blockly.FieldNumber(1), "NUM");
	this.appendDummyInput()
        .appendField("Durée de l'impulsion")
        .appendField(new Blockly.FieldNumber(1500, 0), "US");	
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("Writes a value in microseconds (uS) to the servo, controlling the shaft accordingly. On a standard servo, this will set the angle of the shaft. On standard servos a parameter value of 1000 is fully counter-clockwise, 2000 is fully clockwise, and 1500 is in the middle.");
 this.setHelpUrl("https://www.arduino.cc/en/Reference/ServoWriteMicroseconds");
  }
};

Blockly.Arduino.servo_writeus = function() {
  var num = this.getFieldValue('NUM');
  var value = this.getFieldValue('US');
  var code = 'myservo'+num+'.writeMicroseconds('+value+');\n';
  return code;
};

