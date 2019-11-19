"use strict";
goog.provide("Blockly.Blocks.arduino");
goog.require("Blockly.Blocks");

// SERIAL LCD GROVE
Blockly.Blocks['grove_serial_lcd_power'] = {
  init: function() {
    this.setColour("#5CB712");
	this.setHelpUrl("http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#LED");
    this.appendDummyInput()
        .appendField("écran LCD")
        .appendField("sur la broche")
        .appendField(new Blockly.FieldTextInput('1'), 'PIN');
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_INOUT_LCD_POWER_STATE)
        .appendField(new Blockly.FieldDropdown([["allumer", "ON"], ["éteindre", "OFF"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("éclairage de l'écran LCD on/off");
  }
};
Blockly.Arduino.grove_serial_lcd_power = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_stat = this.getFieldValue('STAT');

  Blockly.Arduino.includes_['define_seriallcd'] = '#include <SerialLCD.h>\n';
  Blockly.Arduino.includes_['define_softwareserial'] = '#include <SoftwareSerial.h>\n';
  //generate PIN#+1 port
  var NextPIN = dropdown_pin+1;

  Blockly.Arduino.definitions_['var_lcd'+dropdown_pin] = 'SerialLCD slcd_'+dropdown_pin+'('+dropdown_pin+','+NextPIN+');\n';
  var code = 'slcd_'+dropdown_pin;
  if(dropdown_stat==="ON"){
    code += '.Power();\n';
  } else {
    code += '.noPower();\n';
  }
  return code;
};
Blockly.Blocks['grove_serial_lcd_print'] = {
  init: function() {
    this.setColour("#5CB712");
	this.setHelpUrl("http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#Serial_LCD");
    this.appendDummyInput()
        .appendField("écran LCD")
        .appendField("sur la broche")
        .appendField(new Blockly.FieldTextInput('1'), 'PIN');
    this.appendValueInput("TEXT")
        .setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("écrire sur la ligne 1");
    this.appendValueInput("TEXT2")
        .setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("écrire sur la ligne 2");
    this.appendValueInput("DELAY_TIME")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("pendant (ms)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("écris le texte sur un écran LCD série de 2 lignes sur 16 caractères");
  }
};
Blockly.Arduino.grove_serial_lcd_print = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var text = Blockly.Arduino.valueToCode(this, 'TEXT',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
  var text2 = Blockly.Arduino.valueToCode(this, 'TEXT2',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
  var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '1000';
  /*if(text.length>16||text2.length>16){
      alert("string is too long");
  }*/
  Blockly.Arduino.includes_['define_seriallcd'] = '#include <SerialLCD.h>\n';
  Blockly.Arduino.includes_['define_softwareserial'] = '#include <SoftwareSerial.h>\n';
  //generate PIN#+1 port
  var NextPIN = dropdown_pin+1;

  Blockly.Arduino.definitions_['var_lcd_'+dropdown_pin] = 'SerialLCD slcd_'+dropdown_pin+'('+dropdown_pin+','+NextPIN+');\n';

  Blockly.Arduino.setups_['setup_lcd_'+dropdown_pin] = 'slcd_'+dropdown_pin+'.begin();\n';
  var code = 'slcd_'+dropdown_pin+'.backlight();\n';
  code    += 'slcd_'+dropdown_pin+'.setCursor(0,0);\n';
  code    += 'slcd_'+dropdown_pin+'.print('+text+');\n';//text.replace(new RegExp('\'',"gm"),'')
  code    += 'slcd_'+dropdown_pin+'.setCursor(0,1);\n';
  code    += 'slcd_'+dropdown_pin+'.print('+text2+');\n';
  code    += 'delay('+delay_time+');\n';
  return code;
};
Blockly.Blocks['grove_serial_lcd_effect'] = {
  init: function() {
    this.setColour("#5CB712");
	this.setHelpUrl("http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#Serial_LCD");
    this.appendDummyInput()
        .appendField("écran LCD")
        .appendField("sur la broche")
        .appendField(new Blockly.FieldTextInput('1'), 'PIN');
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("écrit avec l'effet")
        .appendField(new Blockly.FieldDropdown([["défilement à gauche", "LEFT"], ["défilement à droite", "RIGHT"], ["défilement automatique", "AUTO"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Réglage de l'effet sur un écran LCD série de 2 lignes sur 16 caractères");
  }
};
Blockly.Arduino.grove_serial_lcd_effect = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_stat = this.getFieldValue('STAT');

  Blockly.Arduino.includes_['define_seriallcd'] = '#include <SerialLCD.h>\n';
  Blockly.Arduino.includes_['define_softwareserial'] = '#include <SoftwareSerial.h>\n';
  //generate PIN#+1 port
  var NextPIN =(dropdown_pin)+1;

  Blockly.Arduino.definitions_['var_lcd'+dropdown_pin] = 'SerialLCD slcd_'+dropdown_pin+'('+dropdown_pin+','+NextPIN+');\n';
  var code = 'slcd_'+dropdown_pin;
  if(dropdown_stat==="LEFT"){
    code += '.scrollDisplayLeft();\n';
  } else if(dropdown_stat==="RIGHT"){
    code += '.scrollDisplayRight();\n';
  } else {
    code += '.autoscroll();\n';
  }
  return code;
};


// GROVE RGB LCD I2C
Blockly.Blocks['grove_lcd_rgb_init'] = {
  init: function() {
    this.setColour("#5CB712");
	this.setHelpUrl(Blockly.Msg.GROVE_LCD_RGB_INIT_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_LCD_RGB_INIT_TEXT)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.GROVE_LCD_RGB_INIT_TOOLTIP);
  }
};
Blockly.Arduino.grove_lcd_rgb_init = function() {
  Blockly.Arduino.includes_['define_lcd_rgb'] = '#include <rgb_lcd.h>';
  Blockly.Arduino.includes_['define_Wire'] = '#include <Wire.h>';

  Blockly.Arduino.definitions_['var_lcd_rgb'] = 'rgb_lcd LCD_RGB;';
  
  Blockly.Arduino.setups_['setup_lcd_rgb'] = 'LCD_RGB.begin(16, 2);\n';
  
  var code = '';
  
  return code;
};
Blockly.Blocks['grove_lcd_rgb_clear'] = {
  init: function() {
    this.setColour("#5CB712");
	this.setHelpUrl(Blockly.Msg.GROVE_LCD_RGB_CLEAR_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_LCD_RGB_CLEAR_TEXT)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.GROVE_LCD_RGB_CLEAR_TOOLTIP);
  }
};
Blockly.Arduino.grove_lcd_rgb_clear = function() {
   
  var code = 'LCD_RGB.clear();\n';
  
  return code;
};
Blockly.Blocks['grove_lcd_rgb_scrolling'] = {
  init: function() {
    this.setColour("#5CB712");
	this.setHelpUrl(Blockly.Msg.GROVE_LCD_RGB_SCROLL_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_LCD_RGB_SCROLL_TEXT);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_LCD_RGB_SCROLL_EFFECT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.GROVE_LCD_RGB_SCROLL_EFFECT_FIELDDROPDOWN), "EFFECT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.GROVE_LCD_RGB_SCROLL_TOOLTIP);
  }
};
Blockly.Arduino.grove_lcd_rgb_scrolling = function() {
  var dropdown_stat = this.getFieldValue('EFFECT');

  var code = 'LCD_RGB';
  if(dropdown_stat==="LEFT"){
    code += '.scrollDisplayLeft();\n';
  } else if(dropdown_stat==="RIGHT"){
    code += '.scrollDisplayRight();\n';
  } else {
    code += '.autoscroll();\n';
  }
  return code;
};
Blockly.Blocks['grove_lcd_rgb_set_cursor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_LCD_RGB_SET_CURSOR_TEXT);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Ligne")
        .appendField(new Blockly.FieldTextInput("0"), "Line");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Colonne")
        .appendField(new Blockly.FieldTextInput("0"), "Row");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#5CB712");
 this.setTooltip(Blockly.Msg.GROVE_LCD_RGB_SET_CURSOR_TOOLTIP);
 this.setHelpUrl(Blockly.Msg.GROVE_LCD_RGB_SET_CURSOR_HELPURL);
  }
};
Blockly.Arduino.grove_lcd_rgb_set_cursor = function() {
  
  var ligne = this.getFieldValue('Line');
  var colonne = this.getFieldValue('Row');
  var code = 'LCD_RGB.setCursor('+colonne+','+ligne+');\n';
  
  return code;
};
Blockly.Blocks['grove_lcd_rgb_set_RGB'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_LCD_RGB_SET_RGB_TEXT);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Red")
        .appendField(new Blockly.FieldTextInput("255"), "Red");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Green")
        .appendField(new Blockly.FieldTextInput("255"), "Green");
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Blue")
        .appendField(new Blockly.FieldTextInput("255"), "Blue");	
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#5CB712");
 this.setTooltip(Blockly.Msg.GROVE_LCD_RGB_SET_RGB_TOOLTIP);
 this.setHelpUrl(Blockly.Msg.GROVE_LCD_RGB_SET_RGB_HELPURL);
  }
};
Blockly.Arduino.grove_lcd_rgb_set_RGB = function() {
  
  var rouge = this.getFieldValue('Red');
  var vert = this.getFieldValue('Green');
  var bleu = this.getFieldValue('Blue');
  var code = 'LCD_RGB.setRGB('+rouge+','+vert+','+bleu+');\n';
  
  return code;
};
Blockly.Blocks['grove_lcd_rgb_print_data'] = {
  init: function() {
    this.setColour("#5CB712");
	this.setHelpUrl(Blockly.Msg.GROVE_LCD_RGB_PRINT_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_LCD_RGB_PRINT_DATA);
    this.appendValueInput("DATA")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_LCD_RGB_PRINT_INPUTDATA);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.GROVE_LCD_RGB_PRINT_TOOLTIP);
  }
};
Blockly.Arduino.grove_lcd_rgb_print_data = function() {
  var data1 = Blockly.Arduino.valueToCode(this, 'DATA', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
 
  var code = 'LCD_RGB.print('+data1+');\n';
  
  return code;
};
Blockly.Blocks['grove_lcd_rgb_write_data'] = {
  init: function() {
    this.setColour("#5CB712");
	this.setHelpUrl(Blockly.Msg.GROVE_LCD_RGB_WRITE_HELPURL);
	
	this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_LCD_RGB_WRITE_DATA);
			
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_LCD_RGB_WRITE_INPUTDATA)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.GROVE_LCD_RGB_WRITE_FORMAT_FIELDDROPDOWN), "FORMAT")
		.appendField(new Blockly.FieldTextInput(""), "DATA");
	
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.GROVE_LCD_RGB_WRITE_TOOLTIP);
  }
};
Blockly.Arduino.grove_lcd_rgb_write_data = function() {
  var data1 = this.getFieldValue('DATA');
 
  var dropdown_stat = this.getFieldValue('FORMAT');

  var code = 'LCD_RGB';
  if(dropdown_stat==="0x"){
    code += '.write(0x'+data1+');\n';
  } else if(dropdown_stat==="0b"){
    code += '.write(0b'+data1+');\n';
  } else {
    code += '.write('+data1+');\n';
  }
    
  return code;
};

// ADAFRUIT LCD RGB
Blockly.Blocks['Adafruit_RGB_LCD_Shield_init'] = {
  init: function() {
    this.setColour("#5CB712");
	this.setHelpUrl(Blockly.Msg.Adafruit_RGB_LCD_Shield_INIT_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.Adafruit_RGB_LCD_Shield_INIT_TEXT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.Adafruit_RGB_LCD_Shield_INIT_TOOLTIP);
  }
};
Blockly.Arduino.Adafruit_RGB_LCD_Shield_init = function() {
  
  Blockly.Arduino.includes_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.includes_['include_Adafruit_lcd_rgb'] = '#include <Adafruit_RGBLCDShield.h>';
  Blockly.Arduino.includes_['include_Adafruit_MCP23017'] = '#include <utility/Adafruit_MCP23017.h>';
  
  Blockly.Arduino.definitions_['obj_lcd'] = 'Adafruit_RGBLCDShield lcd = Adafruit_RGBLCDShield();';
  
  Blockly.Arduino.setups_['setup_lcd'] = 'lcd.begin(16, 2);\n';
  
  var code = '';
  
  return code;
};
Blockly.Blocks['Adafruit_RGB_LCD_Shield_clear'] = {
  init: function() {
    this.setColour("#5CB712");
	this.setHelpUrl(Blockly.Msg.Adafruit_RGB_LCD_Shield_CLEAR_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.Adafruit_RGB_LCD_Shield_CLEAR_TEXT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.Adafruit_RGB_LCD_Shield_CLEAR_TOOLTIP);
  }
};
Blockly.Arduino.Adafruit_RGB_LCD_Shield_clear = function() {
   
  var code = 'lcd.clear();\n';
  
  return code;
};
Blockly.Blocks['Adafruit_RGB_LCD_Shield_scrolling'] = {
  init: function() {
    this.setColour("#5CB712");
	this.setHelpUrl(Blockly.Msg.Adafruit_RGB_LCD_Shield_SCROLL_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.Adafruit_RGB_LCD_Shield_SCROLL_TEXT);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.Adafruit_RGB_LCD_Shield_SCROLL_EFFECT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.Adafruit_RGB_LCD_Shield_SCROLL_EFFECT_FIELDDROPDOWN), "EFFECT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.Adafruit_RGB_LCD_Shield_SCROLL_TOOLTIP);
  }
};
Blockly.Arduino.Adafruit_RGB_LCD_Shield_scrolling = function() {
  var dropdown_stat = this.getFieldValue('EFFECT');

  var code = 'lcd';
  if(dropdown_stat==="LEFT"){
    code += '.scrollDisplayLeft();\n';
  } else if(dropdown_stat==="RIGHT"){
    code += '.scrollDisplayRight();\n';
  } else {
    code += '.autoscroll();\n';
  }
  return code;
};Blockly.Arduino.Adafruit_RGB_LCD_Shield_set_cursor = function() {
  
  var ligne = this.getFieldValue('Line');
  var colonne = this.getFieldValue('Row');
  var code = 'lcd.setCursor('+colonne+','+ligne+');\n';
  
  return code;
};
Blockly.Blocks['Adafruit_RGB_LCD_Shield_set_cursor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.Adafruit_RGB_LCD_Shield_SET_CURSOR_TEXT);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Ligne")
        .appendField(new Blockly.FieldTextInput("0"), "Line");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Colonne")
        .appendField(new Blockly.FieldTextInput("0"), "Row");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#5CB712");
 this.setTooltip(Blockly.Msg.Adafruit_RGB_LCD_Shield_SET_CURSOR_TOOLTIP);
 this.setHelpUrl(Blockly.Msg.Adafruit_RGB_LCD_Shield_SET_CURSOR_HELPURL);
  }
};
Blockly.Blocks['Adafruit_RGB_LCD_Shield_set_RGB'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.Adafruit_RGB_LCD_Shield_SET_RGB_TEXT);
    
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.Adafruit_RGB_LCD_Shield_SET_RGB_COLOUR)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.Adafruit_RGB_LCD_Shield_SET_RGB_COLOUR_FIELDDROPDOWN), "COLOUR");	
	
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#5CB712");
 this.setTooltip(Blockly.Msg.Adafruit_RGB_LCD_Shield_SET_RGB_TOOLTIP);
 this.setHelpUrl(Blockly.Msg.Adafruit_RGB_LCD_Shield_SET_RGB_HELPURL);
  }
};
Blockly.Arduino.Adafruit_RGB_LCD_Shield_set_RGB = function() {
  var dropdown_colour = this.getFieldValue('COLOUR');
  var code = 'lcd.setBacklight('+dropdown_colour+');\n';
  
  return code;
};
Blockly.Blocks['Adafruit_RGB_LCD_Shield_print_data'] = {
  init: function() {
    this.setColour("#5CB712");
	this.setHelpUrl(Blockly.Msg.Adafruit_RGB_LCD_Shield_PRINT_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.Adafruit_RGB_LCD_Shield_PRINT_DATA);
    this.appendValueInput("DATA")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.Adafruit_RGB_LCD_Shield_PRINT_INPUTDATA);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.Adafruit_RGB_LCD_Shield_PRINT_TOOLTIP);
  }
};
Blockly.Arduino.Adafruit_RGB_LCD_Shield_print_data = function() {
  var data1 = Blockly.Arduino.valueToCode(this, 'DATA', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
 
  var code = 'lcd.print('+data1+');\n';
  
  return code;
};
Blockly.Blocks['Adafruit_RGB_LCD_Shield_write_data'] = {
  init: function() {
    this.setColour("#5CB712");
	this.setHelpUrl(Blockly.Msg.Adafruit_RGB_LCD_Shield_WRITE_HELPURL);
	
	this.appendDummyInput()
        .appendField(Blockly.Msg.Adafruit_RGB_LCD_Shield_WRITE_DATA);
			
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.Adafruit_RGB_LCD_Shield_WRITE_INPUTDATA)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.Adafruit_RGB_LCD_Shield_WRITE_FORMAT_FIELDDROPDOWN), "FORMAT")
		.appendField(new Blockly.FieldTextInput(""), "DATA");
	
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.Adafruit_RGB_LCD_Shield_WRITE_TOOLTIP);
  }
};
Blockly.Arduino.Adafruit_RGB_LCD_Shield_write_data = function() {
  var data1 = this.getFieldValue('DATA');
 
  var dropdown_stat = this.getFieldValue('FORMAT');

  var code = 'lcd';
  if(dropdown_stat==="0x"){
    code += '.write(0x'+data1+');\n';
  } else if(dropdown_stat==="0b"){
    code += '.write(0b'+data1+');\n';
  } else {
    code += '.write('+data1+');\n';
  }
    
  return code;
};
Blockly.Blocks.Adafruit_RGB_LCD_Shield_read_button = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.Adafruit_RGB_LCD_Shield_READ_button_TEXT);
    this.setOutput(true, "Number");
    this.setColour("#5CB712");
 this.setTooltip(Blockly.Msg.Adafruit_RGB_LCD_Shield_READ_button_TOOLTIP);
 this.setHelpUrl(Blockly.Msg.Adafruit_RGB_LCD_Shield_READ_button_HELPURL);
  }
};
Blockly.Arduino.Adafruit_RGB_LCD_Shield_read_button = function() {
	
	var code = 'lcd.readButtons()';
	
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};
// LCD 4 BITS
Blockly.Blocks['Lcd4bits_init'] = {
  init: function() {
    this.setColour("#5CB712");
	this.setHelpUrl(Blockly.Msg.LCD4BITS_INIT_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCD4BITS_INIT_TEXT);
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("RS")
        .appendField(new Blockly.FieldTextInput("x"), "RS");
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("EN")
        .appendField(new Blockly.FieldTextInput("x"), "EN");
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("D4")
        .appendField(new Blockly.FieldTextInput("x"), "D4");
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("D5")
        .appendField(new Blockly.FieldTextInput("x"), "D5");
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("D6")
        .appendField(new Blockly.FieldTextInput("x"), "D6");
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("D7")
        .appendField(new Blockly.FieldTextInput("x"), "D7");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.LCD4BITS_INIT_TOOLTIP);
  }
};
Blockly.Arduino.Lcd4bits_init = function() {
  Blockly.Arduino.includes_['define_lcd4bits'] = '#include <LiquidCrystal.h>';
  
  var RS = this.getFieldValue('RS');
  var EN = this.getFieldValue('EN');
  var D4 = this.getFieldValue('D4');
  var D5 = this.getFieldValue('D5');
  var D6 = this.getFieldValue('D6');
  var D7 = this.getFieldValue('D7');
  
  // LiquidCrystal lcd4bits(RS, EN, D4, D5, D6, D7);
  Blockly.Arduino.definitions_['var_lcd4bits'] = 'LiquidCrystal lcd4bits('+RS+','+EN+','+D4+','+D5+','+D6+','+D7+');';
  Blockly.Arduino.setups_['setup_lcd4bits'] = 'lcd4bits.begin(16, 2);\n';
  var code = '';
  return code;
};
Blockly.Blocks['Lcd4bits_clear'] = {
  init: function() {
    this.setColour("#5CB712");
    this.appendDummyInput()
        .appendField(Blockly.Msg.Lcd4bits_CLEAR_TEXT)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.Lcd4bits_CLEAR_TOOLTIP);
  }
};
Blockly.Arduino.Lcd4bits_clear = function() {   
  var code = 'lcd4bits.clear();\n';  
  return code;
};
Blockly.Blocks['Lcd4bits_set_cursor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.Lcd4bits_SET_CURSOR_TEXT);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Ligne")
        .appendField(new Blockly.FieldTextInput("0"), "Line");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Colonne")
        .appendField(new Blockly.FieldTextInput("0"), "Row");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#5CB712");
 this.setTooltip(Blockly.Msg.Lcd4bits_SET_CURSOR_TOOLTIP);
  }
};
Blockly.Arduino.Lcd4bits_set_cursor = function() {  
  var ligne = this.getFieldValue('Line');
  var colonne = this.getFieldValue('Row');
  var code = 'lcd4bits.setCursor('+colonne+','+ligne+');\n';  
  return code;
};
Blockly.Blocks['Lcd4bits_print_data'] = {
  init: function() {
    this.setColour("#5CB712");
    this.appendDummyInput()
        .appendField(Blockly.Msg.Lcd4bits_PRINT_DATA);
    this.appendValueInput("DATA")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.Lcd4bits_PRINT_INPUTDATA);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.Lcd4bits_PRINT_TOOLTIP);
  }
};
Blockly.Arduino.Lcd4bits_print_data = function() {
  var data1 = Blockly.Arduino.valueToCode(this, 'DATA', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
  var code = 'lcd4bits.print('+data1+');\n';
  return code;
};
Blockly.Blocks['Lcd4bits_write_data'] = {
  init: function() {
    this.setColour("#5CB712");	
	this.appendDummyInput()
        .appendField(Blockly.Msg.Lcd4bits_WRITE_DATA);			
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.Lcd4bits_WRITE_INPUTDATA)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.Lcd4bits_WRITE_FORMAT_FIELDDROPDOWN), "FORMAT")
		.appendField(new Blockly.FieldTextInput(""), "DATA");
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.Lcd4bits_WRITE_TOOLTIP);
  }
};
Blockly.Arduino.Lcd4bits_write_data = function() {
  var data1 = this.getFieldValue('DATA'); 
  var dropdown_stat = this.getFieldValue('FORMAT');
  var code = 'lcd4bits';
  if(dropdown_stat==="0x"){
    code += '.write(0x'+data1+');\n';
  } else if(dropdown_stat==="0b"){
    code += '.write(0b'+data1+');\n';
  } else {
    code += '.write('+data1+');\n';
  }
  return code;
};