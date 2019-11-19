/**
 * @Blocs pour commander la table XY de Makeblock avec les librairies :
 *     MeStepper pour les deux moteurs pas à pas
 *     MeLimitSwitch pour les capteurs de fin de course
 *     MeColorSensor pour le capteur de couleur (optionnel)
 *     Auteur : Philippe
 */
'use strict';

goog.provide("Blockly.Blocks.arduino");
goog.require("Blockly.Blocks");

Blockly.Blocks.table_XY_makeblock_init = {
  init: function() {
    this.appendDummyInput()
        .appendField("Table XY Makeblock");
    this.appendDummyInput()
        .appendField("Initialisation");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("Affectation des Entrées-Sorties selon le câblage par défaut :\n\rSwtich1 -> Port3, Slot1\n\rSwtich2 -> Port3, Slot2\n\rSwtich3 -> Port8, Slot1\n\rSwtich4 -> Port8, Slot2\n\rMoteur axe x -> Port1\n\rMoteur axe y -> Port2");
 }
};

Blockly.Arduino.table_XY_makeblock_init = function() {
	Blockly.Arduino.includes_['include_lib_MeOrion.h'] = '#include "MeOrion.h"';
	//Blockly.Arduino.includes_['include_lib_Servo.h'] = '#include "Servo.h"';
	Blockly.Arduino.definitions_['objet_limitSwitch1'] = 'MeLimitSwitch limitSwitch1(PORT_3, SLOT1);';
	Blockly.Arduino.definitions_['objet_limitSwitch2'] = 'MeLimitSwitch limitSwitch2(PORT_3, SLOT2);';
	Blockly.Arduino.definitions_['objet_limitSwitch3'] = 'MeLimitSwitch limitSwitch3(PORT_8, SLOT1);';
	Blockly.Arduino.definitions_['objet_limitSwitch4'] = 'MeLimitSwitch limitSwitch4(PORT_8, SLOT2);';
	Blockly.Arduino.definitions_['objet_stepperX'] = 'MeStepper stepperX(PORT_1);';
	Blockly.Arduino.definitions_['objet_stepperY'] = 'MeStepper stepperY(PORT_2);';
	Blockly.Arduino.definitions_['objet_port_servo'] = 'MePort port_servo(PORT_7);';
	Blockly.Arduino.definitions_['objet_microservo'] = 'Servo microservo;';
	Blockly.Arduino.definitions_['define_microservo_pin'] = 'int16_t servo_pin = port_servo.pin2();//attaches the servo on PORT_7 SLOT2 to the servo object';
	Blockly.Arduino.setups_['setup_servo'] = 'microservo.attach(servo_pin);';
  return "";
};


Blockly.Blocks.table_XY_makeblock_read_switch = {
  init: function() {
	this.appendDummyInput()
        .appendField("Table XY Makeblock");
    this.appendDummyInput()
        .appendField("Etat du capteur de fin de course")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"]]), "num_capteur");
    this.setOutput(true, "Boolean");
    this.setColour(220);
 this.setTooltip("Interrupteur actionné -> 0 \r\n Interrupteur au repos -> 1");
 this.setHelpUrl("https://www.makeblock.com/project/me-micro-switch-a");
  }
};

Blockly.Arduino.table_XY_makeblock_read_switch = function() {
  var num_capteur = this.getFieldValue('num_capteur');
  var code = 'limitSwitch'+num_capteur+'.touched()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Blocks.table_XY_makeblock_stepper_move_to = {
  init: function() {
    this.appendDummyInput()
        .appendField("Table XY Makeblock");
    this.appendDummyInput()
        .appendField("Stepper motor ")
        .appendField(new Blockly.FieldDropdown([["X","X"], ["Y","Y"]]), "axis");
    this.appendValueInput("position_value")
        .setCheck("Number")
        .appendField("Move to ")
        .appendField(new Blockly.FieldDropdown([["absolute","0"], ["relative","1"]]), "position_type")
        .appendField(" position");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("Fixe la position de consigne à atteindre. Cette position peut être absolue ou relative par rapport à la position courante. Une position négative fait tourner le moteur dans le sens anti-horaire.");
 this.setHelpUrl("https://www.makeblock.com/project/42byg-stepper-motor");
  }
};

Blockly.Arduino.table_XY_makeblock_stepper_move_to = function() {
  var axis = this.getFieldValue('axis');
  var position_type = this.getFieldValue('position_type');
  var position_value = Blockly.Arduino.valueToCode(this, 'position_value', Blockly.Arduino.ORDER_ATOMIC);
  switch(position_type) {
	  case "0":
		var code =  'stepper'+axis+'.move('+position_value+');\n';
	  break;
	  case "1":
		var code =  'stepper'+axis+'.moveTo('+position_value+');\n';
	  break;
  }
  return code;
};


Blockly.Blocks.table_XY_makeblock_stepper_run = {
  init: function() {
    this.appendDummyInput()
        .appendField("Table XY Makeblock");
    this.appendDummyInput()
        .appendField("Stepper motor")
        .appendField(new Blockly.FieldDropdown([["X","X"], ["Y","Y"]]), "axis");
    this.appendDummyInput()
        .appendField("Run with")
        .appendField(new Blockly.FieldDropdown([["constant speed","0"], ["acceleration","1"]]), "speed");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("Commande pas à pas le moteur pour atteindre sa position de consigne. Le déplacement peut s'effectuer à vitesse constante (sans accélération) ou avec accélération (vitesse variable). Doit être appelé le plus souvent possible, de préference dans la boucle principale");
 }
};

Blockly.Arduino.table_XY_makeblock_stepper_run = function() {
  var axis = this.getFieldValue('axis');
  var speed = this.getFieldValue('speed');
  switch(speed) {
	  case "0":
		var code =  'stepper'+axis+'.runSpeed();\n';
	  break;
	  case "1":
		var code =  'stepper'+axis+'.run();\n';
	  break;
  }
  return code;
};


Blockly.Blocks.table_XY_makeblock_stepper_run_to_position = {
  init: function() {
    this.appendDummyInput()
        .appendField("Table XY Makeblock");
    this.appendDummyInput()
        .appendField("Stepper motor")
        .appendField(new Blockly.FieldDropdown([["X","X"], ["Y","Y"]]), "axis");
    this.appendDummyInput()
        .appendField("Run to position with")
        .appendField(new Blockly.FieldDropdown([["constant speed","0"], ["acceleration","1"]]), "speed");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("Commande en boucle le moteur jusqu'à ce qu'il atteigne sa position de consigne. Le déplacement peut s'effectuer à vitesse constante (sans accélération) ou avec accélération (vitesse variable).");
 }
};

Blockly.Arduino.table_XY_makeblock_stepper_run_to_position = function() {
  var axis = this.getFieldValue('axis');
  var speed = this.getFieldValue('speed');
  switch(speed) {
	  case "0":
		var code =  'stepper'+axis+'.runSpeedToPosition();\n';
	  break;
	  case "1":
		var code =  'stepper'+axis+'.runToPosition();\n';
	  break;
  }
  return code;
};


Blockly.Blocks.table_XY_makeblock_stepper_settings = {
  init: function() {
    this.appendDummyInput()
        .appendField("Table XY Makeblock");
    this.appendDummyInput()
        .appendField("Stepper motor")
        .appendField(new Blockly.FieldDropdown([["X","X"], ["Y","Y"]]), "axis");
    this.appendValueInput("Value")
        .setCheck("Number")
        .appendField("Set")
        .appendField(new Blockly.FieldDropdown([["speed","0"], ["acceleration","1"], ["max speed","2"]]), "settings");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("Permet de fixer au choix :\n\r- La consigne de vitesse en pas par seconde\n\r - La consigne d'accélération en pas par seconde par seconde\n\r- La vitesse maximale en pas par seconde");
 }
};

Blockly.Arduino.table_XY_makeblock_stepper_settings = function() {
  var axis = this.getFieldValue('axis');
  var settings = this.getFieldValue('settings');
  var setting_value = Blockly.Arduino.valueToCode(this, 'Value', Blockly.Arduino.ORDER_ATOMIC);
  switch(settings) {
	  case "0":
		var code =  'stepper'+axis+'.setSpeed('+setting_value+');\n';
	  break;
	  case "1":
		var code =  'stepper'+axis+'.setAcceleration('+setting_value+');\n';
	  break;
	  case "2":
		var code =  'stepper'+axis+'.setMaxSpeed('+setting_value+');\n';
	  break;
  }
	return code;
};


Blockly.Blocks.table_XY_makeblock_stepper_get_speed = {
  init: function() {
    this.appendDummyInput()
        .appendField("Table XY Makeblock");
    this.appendDummyInput()
        .appendField("Stepper motor")
        .appendField(new Blockly.FieldDropdown([["X","X"], ["Y","Y"]]), "axis");
    this.appendDummyInput()
		.appendField("Get")
        .appendField(new Blockly.FieldDropdown([["Speed","0"], ["Max speed","1"]]), "speed");
    this.setOutput(true, "Number");
    this.setColour(0);
 this.setTooltip("Retourne un flottant dont la valeur correspond à la vitesse courante ou à la vitesse max en pas par seconde");
 }
};

Blockly.Arduino.table_XY_makeblock_stepper_get_speed = function() {
  var axis = this.getFieldValue('axis');
  var speed = this.getFieldValue('speed');
  switch(speed) {
	  case "0":
		var code =  'stepper'+axis+'.speed()';
	  break;
	  case "1":
		var code =  'stepper'+axis+'.maxSpeed()';
	  break;	  
  }
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Blocks.table_XY_makeblock_stepper_get_position = {
  init: function() {
    this.appendDummyInput()
        .appendField("Table XY Makeblock");
    this.appendDummyInput()
        .appendField("Stepper motor")
        .appendField(new Blockly.FieldDropdown([["X","X"], ["Y","Y"]]), "axis");
    this.appendDummyInput()
        .appendField("Get")
        .appendField(new Blockly.FieldDropdown([["distance to go","0"], ["target position","1"], ["current position","2"]]), "position");
    this.setOutput(true, "Number");
    this.setColour(0);
 this.setTooltip("Retourne un entier long dont la valeur correspond au choix :\n\r- L'écart en pas entre la position actuelle et la consigne de position. Une valeur positive correspond à un écart dans le sens horaire\n\r - La position de consigne, en pas. Une valeur positive correspond au sens horaire par rapport à la position 0\n\r- La position actuelle du moteur, en pas. Une valeur positive correspond au sens horaire par rapport à la position 0");
 }
};

Blockly.Arduino.table_XY_makeblock_stepper_get_position = function() {
  var axis = this.getFieldValue('axis');
  var position = this.getFieldValue('position');
  switch(position) {
	  case "0":
		var code =  'stepper'+axis+'.distanceToGo()';
	  break;
	  case "1":
		var code =  'stepper'+axis+'.targetPosition()';
	  break;
	  case "2":
		var code =  'stepper'+axis+'.currentPosition()';
	  break;
  }
  return [code, Blockly.Arduino.ORDER_ATOMIC];
  };

  
Blockly.Blocks.table_XY_makeblock_stepper_set_current_position = {
  init: function() {
    this.appendDummyInput()
        .appendField("Table XY Makeblock");
    this.appendDummyInput()
        .appendField("Stepper motor")
        .appendField(new Blockly.FieldDropdown([["X","X"], ["Y","Y"]]), "axis");
    this.appendValueInput("position")
        .setCheck("Number")
        .appendField("Set current position");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("Affecte la valeur spécifiée à la position courrante du moteur. Utile pour fixer la position 0 du moteur. ");
 }
};

Blockly.Arduino.table_XY_makeblock_stepper_set_current_position = function() {
  var axis = this.getFieldValue('axis');
  var position_value = Blockly.Arduino.valueToCode(this, 'position', Blockly.Arduino.ORDER_ATOMIC);
  var code =  'stepper'+axis+'.setCurrentPosition('+position_value+');\n';
  return code;
};


Blockly.Blocks.table_XY_makeblock_stepper_run_to_new_position = {
  init: function() {
    this.appendDummyInput()
        .appendField("Table XY Makeblock");
    this.appendDummyInput()
        .appendField("Stepper motor")
        .appendField(new Blockly.FieldDropdown([["X","X"], ["Y","Y"]]), "axis");
    this.appendValueInput("position")
        .setCheck("Number")
        .appendField("Run to new position with acceleration");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("Commande en boucle le moteur jusqu'à ce qu'il atteigne la position spécifiée. Le déplacement s'effectue avec accélération à vitesse variable.");
  }
 };
 
 Blockly.Arduino.table_XY_makeblock_stepper_run_to_new_position = function() {
  var axis = this.getFieldValue('axis');
  var position_value = Blockly.Arduino.valueToCode(this, 'position', Blockly.Arduino.ORDER_ATOMIC);
  var code =  'stepper'+axis+'.runToNewPosition('+position_value+');\n';
  return code;
};

 
 Blockly.Blocks.table_XY_makeblock_stepper_stop = {
  init: function() {
    this.appendDummyInput()
        .appendField("Table XY Makeblock");
    this.appendDummyInput()
        .appendField("Stop stepper motor")
        .appendField(new Blockly.FieldDropdown([["X","X"], ["Y","Y"]]), "axis");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("Arrête le moteur");
 }
};

Blockly.Arduino.table_XY_makeblock_stepper_stop = function() {
  var axis = this.getFieldValue('axis');
  var code =  'stepper'+axis+'.stop();\n';
  return code;
};


Blockly.Blocks.table_XY_makeblock_servo = {
  init: function() {
    this.appendDummyInput()
        .appendField("Table XY Makeblock");
    this.appendDummyInput()
        .appendField("commander le servomoteur");
    this.appendValueInput("position")
        .setCheck("Number")
        .appendField("Angle ou vitesse");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
 this.setTooltip("Writes a value to the servo, controlling the shaft accordingly. On a standard servo, this will set the angle of the shaft (in degrees), moving the shaft to that orientation. On a continuous rotation servo, this will set the speed of the servo (with 0 being full-speed in one direction, 180 being full speed in the other, and a value near 90 being no movement).");
 }
};

Blockly.Arduino.table_XY_makeblock_servo = function() {
  var position = Blockly.Arduino.valueToCode(this, 'position', Blockly.Arduino.ORDER_ATOMIC);
  var code =  'microservo.write('+position+');\ndelay(2000);\n';
  return code;
};


Blockly.Blocks.table_XY_makeblock_color_sensor_init = {
  init: function() {
    this.appendDummyInput()
        .appendField("Table XY Makeblock");
    this.appendDummyInput()
        .appendField("Initialisation capteur de couleur");
    this.appendDummyInput()
        .appendField("Connecté sur le port ")
        .appendField(new Blockly.FieldDropdown([["3","3"], ["4","4"], ["5","5"], ["6","6"]]), "port");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("Initialisation du capteur de couleur");
 this.setHelpUrl("https://www.makeblock.com/project/me-color-sensor-v1");
 }
};

Blockly.Arduino.table_XY_makeblock_color_sensor_init = function() {
  var port_number = this.getFieldValue('port');
  Blockly.Arduino.includes_['include_wire.h'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['objet_colorsensor'] = 'MeColorSensor colorsensor(PORT_'+port_number+');';
  Blockly.Arduino.setups_['setup_colorsensor'] = 'colorsensor.SensorInit();';
  return "";
};


Blockly.Blocks.table_XY_makeblock_color_sensor_return_data = {
  init: function() {
    this.appendDummyInput()
        .appendField("Table XY Makeblock");
    this.appendDummyInput()
        .appendField("Capteur de couleur");
    this.appendDummyInput()
        .appendField("Get ")
        .appendField(new Blockly.FieldDropdown([["Result","0"], ["Red data","1"], ["Blue data","2"], ["Green data","3"], ["Color data","4"], ["RGB color code","5"]]), "function");
    this.setOutput(true, "Number");
    this.setColour(180);
 this.setTooltip("Result : Fait la mesure et retourne un nombre selon la couleur détectée : \r\nWHITE = 0, PINK = 1, RED = 2, ORANGE = 3, YELLOW = 4, GREEN = 5, CYAN = 6, BLUE = 7, PURPLE = 8, BLACK = 9, GOLD = 10.\r\nRed data : Composante de rouge codée sur un entier.\r\nBlue data : Composante de bleu codée sur un entier.\r\nGreen data : Composante de vert codée sur un entier.\r\nColor data : Couleur codée sur un entier.\r\nRGB Color code : Code RGB codé sur 24 bits.");
 }
};

Blockly.Arduino.table_XY_makeblock_color_sensor_return_data = function() {
  var function_type = this.getFieldValue('function');
  switch(function_type) {
	  case "0":
		var code =  'colorsensor.Returnresult()';
	  break;
	  case "1":
		var code =  'colorsensor.ReturnRedData()';
	  break;
	  case "2":
		var code =  'colorsensor.ReturnBlueData()';
	  break;
	  case "3":
		var code =  'colorsensor.ReturnGreenData()';
	  break;
	  case "4":
		var code =  'colorsensor.ReturnColorData()';
	  break;
	  case "5":
		var code =  'colorsensor.ReturnColorCode()';
	  break;
  }
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

