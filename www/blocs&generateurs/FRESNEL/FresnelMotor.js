/**
 * @author Bzhtitude
 */
"use strict";
goog.provide("Blockly.Blocks.arduino");
goog.require("Blockly.Blocks");
/////////////////////////////////////////////////////////L298//////////////////////////////////////////////////////
Blockly.Blocks['l298n_motor_init'] = {
  init: function() {
    this.setColour("20");
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("blocs&generateurs/FRESNEL/Images/l298.jpg", 50, 50, "*"))
		.appendField(Blockly.Msg.MOTORS_L298N_MOTOR_INIT_TITLE);
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MOTORS_L298N_ID)
		.appendField(new Blockly.FieldTextInput("1"), "L298_NAME");
	this.appendDummyInput()
		.appendField(Blockly.Msg.MOTORS_L298N_MOTOR_PIN_EN)
        .appendField(new Blockly.FieldTextInput('0',  Blockly.Arduino.pinPWMValidator), 'PIN-EN')
	    .setAlign(Blockly.ALIGN_RIGHT);
	this.appendDummyInput()
		.appendField(Blockly.Msg.MOTORS_L298N_MOTOR_PIN_IN1)
        .appendField(new Blockly.FieldTextInput('0',  Blockly.Arduino.pinDualValidator), 'PIN-IN1')
		.appendField(Blockly.Msg.MOTORS_L298N_MOTOR_PIN_IN2)
        .appendField(new Blockly.FieldTextInput('0',  Blockly.Arduino.pinDualValidator), 'PIN-IN2')
	    .setAlign(Blockly.ALIGN_RIGHT);
	this.setInputsInline(false);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.MOTORS_L298N_INIT_TOOLTIP);
  }
};
Blockly.Arduino.l298n_motor_init = function() {
  var id = this.getFieldValue('L298_NAME');
  var PinEN = this.getFieldValue("PIN-EN");
  var PinIN1 = this.getFieldValue("PIN-IN1");
  var PinIN2 = this.getFieldValue("PIN-IN2");
  var mysetup = "";

  mysetup += "// pin assignation for L298N : " + id + "\n";
  mysetup += " pinMode("+PinIN1+",OUTPUT);//IN1_" + id +" Pin\n" ;
  mysetup += " pinMode("+PinIN2+",OUTPUT);//IN2_" + id +" Pin\n";
  mysetup += " pinMode("+PinEN+",OUTPUT);//PWM_" + id +" Pin\n" ;
  Blockly.Arduino.setups_["setup_l298n_motor" + id] = mysetup;
  Blockly.Arduino.definitions_["setup_l298n_motor" + id] = "// pin assignation for L298N : " + id + "\n"+
	"int l298n_" + id + "[3] = {"+PinEN+", "+PinIN1+", "+PinIN2+"};\n";
  var code = "";
  return code;
};
Blockly.Blocks['l298n_motor'] = {
  init: function() {
    this.setColour("20");
	this.appendDummyInput()
		.appendField(Blockly.Msg.MOTORS_L298N_MOTOR_TITLE)
		.appendField(
				new Blockly.FieldDropdown([
						[ Blockly.Msg.MOTORS_L298N_STOP, "stop" ],
						[ Blockly.Msg.MOTORS_L298N_FORWARD, "forward" ],
						[ Blockly.Msg.MOTORS_L298N_BACKWARD, "backward" ],
						[ Blockly.Msg.MOTORS_L298N_BRAKE, "brake" ] ]),
				"DIRECTION");
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MOTORS_L298N_ID)
		.appendField(new Blockly.FieldTextInput("1"), "L298_NAME");
    this.appendValueInput("SPEED", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MOTORS_L298N_MOTOR_SPEED);
	this.setInputsInline(false);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.MOTORS_L298N_TOOLTIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.
    var instanceName = this.getFieldValue('L298_NAME')
    // if (Blockly.Instances.isInstancePresent(instanceName, 'L298_ID', this)) {
      // this.setWarningText(null);
    // } else {
      ////Set a warning to select a valid config block
      // this.setWarningText(
        // Blockly.Msg.COMPONENT_WARN.replace(
          ////  '%1', Blockly.Msg.SERVO_COMPONENT).replace(
            // '%1', '').replace(
                // '%2', instanceName));
    // }
  }
};
Blockly.Arduino.l298n_motor = function() {
  var dropdown_direction = this.getFieldValue('DIRECTION'); 
  var id = this.getFieldValue('L298_NAME');
  var speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '127';

  var code = "";
  if(dropdown_direction==="forward"){
    Blockly.Arduino.definitions_['define_l298n_forward'] = "void l298n_forward(int speed,int Pins[3])\n"+
"{\n"+
     "  analogWrite(Pins[0],speed);//Motor speed\n"+
     "  digitalWrite(Pins[1],HIGH);//turn DC Motor move clockwise\n"+
     "  digitalWrite(Pins[2],LOW);//turn DC Motor move clockwise\n"+
"}\n";
    code="l298n_forward("+speed+", l298n_" + id + ");\n";
  } else if (dropdown_direction==="backward") {
    Blockly.Arduino.definitions_['define_l298n_backward'] = "void l298n_backward(int speed,int Pins[3])\n"+
"{\n"+
     "  analogWrite(Pins[0],speed);//Motor speed\n"+
     "  digitalWrite(Pins[1],LOW);//turn DC Motor move anti-clockwise\n"+
     "  digitalWrite(Pins[2],HIGH);//turn DC Motor move anti-clockwise\n"+
"}\n\n";
    code="l298n_backward("+speed+", l298n_" + id + ");\n";
  } else if (dropdown_direction==="stop"){
    Blockly.Arduino.definitions_['define_l298n_stop'] = "void l298n_stop(int Pins[3])\n"+
"{\n"+
     "  analogWrite(Pins[0],0);//Motor speed\n"+
     "  digitalWrite(Pins[1],LOW);//turn DC Motor off\n"+
     "  digitalWrite(Pins[2],LOW);//turn DC Motor off\n"+
"}\n\n";
    code="l298n_stop(l298n_" + id + ");\n";
  } else if (dropdown_direction==="brake"){
    Blockly.Arduino.definitions_['define_l298n_brake'] = "void l298n_brake(int Pins[3])\n"+
"{\n"+
     "  analogWrite(Pins[0],255);//Motor speed\n"+
     "  digitalWrite(Pins[1],LOW);//turn DC Motor off\n"+
     "  digitalWrite(Pins[2],LOW);//turn DC Motor off\n"+
"}\n\n";
    code="l298n_brake(l298n_" + id + ");\n";
  }
  return code;
};
/////////////////////////////////////////////////////////MOTOR CC   Adafruit Motor Shield//////////////////////////////////////////////////////
Blockly.Blocks['motorCC_config'] = {
  init: function() {
    
    this.setColour("20");
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("blocs&generateurs/FRESNEL/Images/AF_Motor_Driver.jpg", 75, 75, "*"))
        .appendField(Blockly.Msg.MOTORCC_SETUP_TITLE);	
	this.appendDummyInput()
        .appendField(Blockly.Msg.MOTORCC_SETUP_NUMPORT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.MOTORCC_SETUP_NUMPORT_FIELDDROPDOWN), 'NUMPORT');
	this.appendDummyInput()
        .appendField(Blockly.Msg.MOTORCC_SETUP_FREQUENCY)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.MOTORCC_SETUP_FREQUENCY_FIELDDROPDOWN), 'FREQUENCY');
	this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setHelpUrl('https://learn.adafruit.com/adafruit-motor-shield/af-dcmotor-class');
	this.setTooltip(Blockly.Msg.MOTORCC_SETUP_TOOLTIP);
  }
};
Blockly.Arduino['motorCC_config'] = function(block) {
  var numport = this.getFieldValue('NUMPORT');
  var freq = this.getFieldValue('FREQUENCY');
  Blockly.Arduino.includes_['include_moteurCC'] = '#include <AFMotor.h>';
  if ((numport=="1") || (numport=="2")){
	  if (freq == "64") {Blockly.Arduino.definitions_['define_MoteurCC'] = 'AF_DCMotor motorCC('+numport+', MOTOR12_64KHZ);';}
	  if (freq == "8") {Blockly.Arduino.definitions_['define_MoteurCC'] = 'AF_DCMotor motorCC('+numport+', MOTOR12_8KHZ);';}
	  if (freq == "2") {Blockly.Arduino.definitions_['define_MoteurCC'] = 'AF_DCMotor motorCC('+numport+', MOTOR12_2KHZ);';}
	  if (freq == "1") {Blockly.Arduino.definitions_['define_MoteurCC'] = 'AF_DCMotor motorCC('+numport+', MOTOR12_1KHZ);';}
  }
  else {
	  if (freq == "64") {Blockly.Arduino.definitions_['define_MoteurCC'] = 'AF_DCMotor motorCC('+numport+', MOTOR34_64KHZ);';}
	  if (freq == "8") {Blockly.Arduino.definitions_['define_MoteurCC'] = 'AF_DCMotor motorCC('+numport+', MOTOR34_8KHZ);';}
	  if (freq == "2") {Blockly.Arduino.definitions_['define_MoteurCC'] = 'AF_DCMotor motorCC('+numport+', MOTOR34_1KHZ); // pas de fréquence 2kHz ';}
	  if (freq == "1") {Blockly.Arduino.definitions_['define_MoteurCC'] = 'AF_DCMotor motorCC('+numport+', MOTOR34_1KHZ);';}
  }
  return '';
};
Blockly.Blocks['motorCC_setspeed'] = {
  init: function() {    
    this.setColour("20");
    this.appendDummyInput()
        .appendField(Blockly.Msg.MOTORCC_SETSPEED_TITLE);		
	this.appendValueInput("SPEED")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MOTORCC_SETSPEED_SPEED);
	this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setHelpUrl('https://learn.adafruit.com/adafruit-motor-shield/af-dcmotor-class');
	this.setTooltip(Blockly.Msg.MOTORCC_SETSPEED_TOOLTIP);
  }
};
Blockly.Arduino['motorCC_setspeed'] = function(block) {
  var vitesse = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '20';
  var code = 'motorCC.setSpeed('+vitesse+');\n';    
  return code;
};
Blockly.Blocks['motorCC_run'] = {
  init: function() {    
    this.setColour("20");
    this.appendDummyInput()
        .appendField(Blockly.Msg.MOTORCC_RUN_TITLE);		
	this.appendDummyInput()
        .appendField(Blockly.Msg.MOTORCC_RUN_CMD)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.MOTORCC_RUN_FIELDDROPDOWN), 'CMD');
	this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setHelpUrl('https://learn.adafruit.com/adafruit-motor-shield/af-dcmotor-class');
	this.setTooltip(Blockly.Msg.MOTORCC_RUN_TOOLTIP);
  }
};
Blockly.Arduino['motorCC_run'] = function(block) {
  var cmd = this.getFieldValue('CMD');
  var code = 'motorCC.run('+cmd+');\n';    
  return code;
};
//////////////////// MOTEUR PAP /////////////////////////////
Blockly.Blocks['stepper2_config'] = {
  init: function() {    
    this.setColour("20");
    this.appendDummyInput()
        .appendField(Blockly.Msg.STEPPER2_SETUP_TITLE);
	this.appendDummyInput()
        .appendField(Blockly.Msg.STEPPER2_SETUP_NBPAS)
        .appendField(new Blockly.FieldNumber(200), "NBPAS");	
	this.appendDummyInput()
        .appendField(Blockly.Msg.STEPPER2_SETUP_PIN1)
        .appendField(new Blockly.FieldNumber(8), "PIN1");
	this.appendDummyInput()
        .appendField(Blockly.Msg.STEPPER2_SETUP_PIN2)
        .appendField(new Blockly.FieldNumber(9), "PIN2");
	this.appendDummyInput()
        .appendField(Blockly.Msg.STEPPER2_SETUP_PIN3)
        .appendField(new Blockly.FieldNumber(10), "PIN3");
	this.appendDummyInput()
        .appendField(Blockly.Msg.STEPPER2_SETUP_PIN4)
        .appendField(new Blockly.FieldNumber(11), "PIN4");		
	this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setHelpUrl('http://arduino.cc/en/Reference/StepperConstructor');
	this.setTooltip(Blockly.Msg.STEPPER2_SETUP_TOOLTIP);
  }
};
Blockly.Arduino['stepper2_config'] = function(block) {
  var pas = this.getFieldValue('NBPAS');
  var pin1 = this.getFieldValue('PIN1');
  var pin2 = this.getFieldValue('PIN2');
  var pin3 = this.getFieldValue('PIN3');
  var pin4 = this.getFieldValue('PIN4');    
  Blockly.Arduino.includes_['include_Stepper'] = '#include <Stepper.h>';
  Blockly.Arduino.definitions_['define_Stepper'] = 'Stepper mystepper('+pas+', '+pin1+', '+pin2+', '+pin3+', '+pin4+');';
  return '';
};   
Blockly.Blocks['stepper2_setspeed'] = {
  init: function() {    
    this.setColour("20");
    this.appendDummyInput()
        .appendField(Blockly.Msg.STEPPER2_SETSPEED_TITLE);		
	this.appendValueInput("SPEED")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.STEPPER2_SETSPEED_SPEED);
	this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setHelpUrl('https://www.arduino.cc/en/Reference/StepperSetSpeed');
	this.setTooltip(Blockly.Msg.STEPPER2_SETSPEED_TOOLTIP);
  }
};
Blockly.Arduino['stepper2_setspeed'] = function(block) {
  var vitesse = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '20';
  var code = 'mystepper.setSpeed('+vitesse+');\n';    
  return code;
}; 
Blockly.Blocks['stepper2_step'] = {
  init: function() {    
    this.setColour("20");
    this.appendDummyInput()
        .appendField(Blockly.Msg.STEPPER2_STEP_TITLE);		
	this.appendValueInput("STEP")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.STEPPER2_STEP_STEP);
	this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setHelpUrl('https://www.arduino.cc/en/Reference/StepperSetSpeed');
	this.setTooltip(Blockly.Msg.STEPPER2_STEP_TOOLTIP);
  }
};
Blockly.Arduino['stepper2_step'] = function(block) {
  var step = Blockly.Arduino.valueToCode(this, 'STEP', Blockly.Arduino.ORDER_ATOMIC) || '1';
  var code = 'mystepper.step('+step+');\n';    
  return code;
}; 
////////////////////CARTE 2 MOTEUR PAP Adafruit Motor Shield/////////////////////////////
Blockly.Blocks['stepper22_config'] = {
  init: function() {    
    this.setColour("20");
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("blocs&generateurs/FRESNEL/Images/AF_Motor_Driver.jpg", 75, 75, "*"))
        .appendField(Blockly.Msg.STEPPER22_SETUP_TITLE);
	this.appendDummyInput()
        .appendField(Blockly.Msg.STEPPER22_SETUP_NBPAS)
        .appendField(new Blockly.FieldNumber(200), "NBPAS");	
	this.appendDummyInput()
        .appendField(Blockly.Msg.STEPPER22_SETUP_NUMPORT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.STEPPER22_SETUP_FIELDDROPDOWN), 'NUMPORT');	
	this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setHelpUrl('https://learn.adafruit.com/adafruit-motor-shield/af-stepper-class');
	this.setTooltip(Blockly.Msg.STEPPER22_SETUP_TOOLTIP);
  }
};
Blockly.Arduino['stepper22_config'] = function(block) {
  var pas = this.getFieldValue('NBPAS');
  var numport = this.getFieldValue('NUMPORT');
  Blockly.Arduino.includes_['include_Stepper'] = '#include <AFMotor.h>';
  Blockly.Arduino.definitions_['define_Stepper'] = 'AF_Stepper motorSTEP('+pas+', '+numport+');';
  return '';
};
Blockly.Blocks['stepper22_setspeed'] = {
  init: function() {    
    this.setColour("20");
    this.appendDummyInput()
        .appendField(Blockly.Msg.STEPPER22_SETSPEED_TITLE);		
	this.appendValueInput("SPEED")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.STEPPER22_SETSPEED_SPEED);
	this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setHelpUrl('https://learn.adafruit.com/adafruit-motor-shield/af-stepper-class');
	this.setTooltip(Blockly.Msg.STEPPER22_SETSPEED_TOOLTIP);
  }
};
Blockly.Arduino['stepper22_setspeed'] = function(block) {
  var vitesse = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '20';
  var code = 'motorSTEP.setSpeed('+vitesse+');\n';    
  return code;
};
Blockly.Blocks['stepper22_step'] = {
  init: function() {    
    this.setColour("20");
    this.appendDummyInput()
        .appendField(Blockly.Msg.STEPPER22_STEP_TITLE);		
	this.appendValueInput("STEP")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.STEPPER22_STEP_STEP);
	this.appendDummyInput()
        .appendField(Blockly.Msg.STEPPER22_STEP_DIRECTION)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.STEPPER22_STEP_DIRECTION_FIELDDROPDOWN), 'DIRECTION');
	this.appendDummyInput()
        .appendField(Blockly.Msg.STEPPER22_STEP_STYLE)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.STEPPER22_STEP_STYLE_FIELDDROPDOWN), 'STYLE');
	this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setHelpUrl('https://learn.adafruit.com/adafruit-motor-shield/af-stepper-class');
	this.setTooltip(Blockly.Msg.STEPPER22_STEP_TOOLTIP);
  }
};
Blockly.Arduino['stepper22_step'] = function(block) {
  var step = Blockly.Arduino.valueToCode(this, 'STEP', Blockly.Arduino.ORDER_ATOMIC) || '1';
  var direction = this.getFieldValue('DIRECTION');
  var style = this.getFieldValue('STYLE');
  var code = 'motorSTEP.step('+step+', '+direction+', '+style+');\n';    
  return code;
};
Blockly.Blocks['stepper22_onestep'] = {
  init: function() {    
    this.setColour("20");
    this.appendDummyInput()
        .appendField(Blockly.Msg.STEPPER22_ONESTEP_TITLE);		
	this.appendDummyInput()
        .appendField(Blockly.Msg.STEPPER22_STEP_DIRECTION)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.STEPPER22_STEP_DIRECTION_FIELDDROPDOWN), 'DIRECTION');
	this.appendDummyInput()
        .appendField(Blockly.Msg.STEPPER22_STEP_STYLE)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.STEPPER22_STEP_STYLE_FIELDDROPDOWN), 'STYLE');
	this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setHelpUrl('https://learn.adafruit.com/adafruit-motor-shield/af-stepper-class');
	this.setTooltip(Blockly.Msg.STEPPER22_ONESTEP_TOOLTIP);
  }
};
Blockly.Arduino['stepper22_onestep'] = function(block) {
  var direction = this.getFieldValue('DIRECTION');
  var style = this.getFieldValue('STYLE');
  var code = 'motorSTEP.onestep('+direction+', '+style+');\n';    
  return code;
}; 
Blockly.Blocks['stepper22_release'] = {
  init: function() {    
    this.setColour("20");
    this.appendDummyInput()
        .appendField(Blockly.Msg.STEPPER22_RELEASE_TITLE);		
	this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setHelpUrl('https://learn.adafruit.com/adafruit-motor-shield/af-stepper-class');
	this.setTooltip(Blockly.Msg.STEPPER22_RELEASE_TOOLTIP);
  }
};
Blockly.Arduino['stepper22_release'] = function(block) {
  var code = 'motorSTEP.release();\n';    
  return code;
};




