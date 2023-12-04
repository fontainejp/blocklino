"use strict";
goog.provide("Blockly.Blocks.arduino");
goog.require("Blockly.Blocks");
  ////////////
 /*	 oled  */
////////////
Blockly.Blocks["oled_init"]={init:function(){
        this.appendDummyInput().appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAdCAIAAACBjmNBAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAGoElEQVR42s1YCVNTVxTmfzjtjK1WrbIkMRCyviXsiAGS6CCgaC0quKDV1o5txelYpx3b0VECCCQsYrWoKESqgqNV6zZjrdVRaWvYwk4wMSGBvCQ9990QsmhxpjONly8nJ+cezvveeXc570Z43MHN49fcHrfL5bXcfjDsNboC3LAO0hUSh/1Cmp91ptvfzS/UK/hE+F8pqEFEhnGB8tvjoWXrTixbUw3yUecoOIM9+H7Yn5ioy+UODfgmFv8u/96I0PwF8ASiLjeV03DgcKvNZt1z4Gzy6h/Z+wX2DHZg4fJ4jf7/6wqULmdgc7uYQB9vnFCuEZOTDGiHtHdTCk6pi5uVm86qpoH17I1n5xEajfayzfryoKZtPlkOdmVRS3ZRK0BZpFcW6xUbWgr3XNlcenXLvmuAHfuv5+74OXNjC/SCj3qzPnH1mXMdXUE5eGawpH90TlWsZ+O04oCqouasDacLdurHzXb2sSDeEXaHE77W7tLPERz9MKFqIX0sEJWL6GMxqdolieWkunxxQjnoC+VVMdJNPHEOV5LPk+TxkMzniPIAMcJcQLQwlyv22gFLpfmRglWZK4pLS/ft3VsK8itWriv8BOzYB4US53IlaxbRRxdQx5YkVfX0m4EYw7C5dLC5LPry0gK6Mk5Rx8+o5S8PRIaOk1bDSdMtTtKC5KRWc9JrZXIFTQgoUkKTYhpJiZwKBrZjJFBSiVjI48UuXeoF6PHxAjklxQ4oFCGiSJKXpolJ0wkUOuOgBQ9xzBLlEljOERyZR1TMlWrmSvwg1YAR8heDiCLEpAJ0YlpNEDIZKSdImkByNhBykpLTdII/KCoB7NgBhSIoGZnMSdVEp2pjl+v6Bi1oOvqzhCe+pfRyU9uzU/qnIDF+ugD607KG+4hZGiSSBdJrJbSKJKRAkSTh/un/DhSKgL8kLmKpA5bGQJYw0Tw52843XXgKinPK7nFPeTwILsYBbkOj1uiUas7bwDJ/e2vdmUdOp/0vQ19P3wCGods4NmZ69nwsLLnsGzBjltC8czxrwxlt0x+Qv56+wcGhEQxj/5DFYv67exxY/o+5LItKQeMS5jhQZFnCejmFcvl91Z2L1w2Qy95ws+SklEEuBZm1FquDXYnQgh/hv/GMvzD3DwyFjyUhIxLhiUcm17wn1azadv7OAyOaKk7Gu4/jffmF2WLsD3Muo5KOSNSNtacfbv+6Y6G88nHnMDz0iOnKw8syrLkkKTp5rviH/WW3ce54GbpD2nveagNnFSi/DbmMTDgizzupv/Lnd5W33xWV3bjXi+a4fwVlCvO4JNlxWbY4qWYeUS5S1jc0P2Iz6IqAD7Bsanty9/d+h2Oi1xjGXBJ4jsM+DivRwPDL6Tk+XRMpCk9Xn3oI62V370C410sNXi9h74FRiKe1tybK39F6/Nxjt3vyLVjV0d7Dz9D69p6ZHTK3pAV2SIZxPO8y9hkHMbp7+k3jpk6D6f9nGbqPoycOSyhUQ6BMTFgZpx1j0mGDsQvjA1cbMSyCWBKzsYR6zCtZIH9kofws9LScjeWanfrd315tv9l1+bqh49dujPYbXR03u2Ak4Fzy0nWIa0o1jG4xrZquL6k3qi8R49D6EmpKOrC+hNmD60vtK+pLqILfEZbBK8QHZEUQFlCVQC4quXo+UREFSWVzKaUzKZmAJCQUIaaQhHpbCoW3DxQpxXZfr0Qs4vPjYmPjfFIoFNLTbiiUTARJhZXIl8uZWt3uQONy/e6292Xl3GVatkjzA2QxtSYyuVqQVbf20wt8RS0QhTkYR30sJJTx5EohuUJIrhSRK/kSFVeo5IpYCJUC2QoR6kUOoMRK1BlZBSUlJVu3boMGEvScvMJYiQr7oFCEOp5cFZ2M9nFuWk2v972HXYkc7Er0xcFfgIpY1SDMrg/FfLKi/YYB3M63d8LNiJDxeHx2I4ZQ2chf3gBvles/v1Sw6yJg3WcXE/KbYhUN0AUOYtWJxYna+uYnQe+QD56MctLrhMoTvlAoWnZ9nKI2Kf/kiMk2k0v2VdINzx1q8lHTxMiYbQQkBuhjtsERq0TdcFh3z/zS8Y3mFpXTODxqGx61joyBvw0DfsL7tf+btNliH0YBbaybFXS7fZJhGCeDGjiDnJpyQu+IyRcK6cBheMwK1/IddfjONl57xoDbtTvdkGYyp1Gkqr91v+/fDyTYU5bXOvgOI2a7pu9ghz3bwN44t6Fws6s/OExOOjtuGiAD3jIPHkGQZ2BzhQT0XdV7dPT6i3qd3TO5/AdXxnj4bGQ9MAAAAABJRU5ErkJggg==", 55, 35))
			.appendField(Blockly.Msg.oled);
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT)
			.appendField("orientation")
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.oled_orientation), "orientation");
		this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT)
			.appendField("mode").appendField(new Blockly.FieldDropdown(Blockly.Msg.oled_mode), "mode");
		this.setColour("#00929F");
        this.setTooltip(Blockly.Msg.oled_tooltip);
        this.setHelpUrl("https://wiki.seeedstudio.com/Grove-Beginner-Kit-For-Arduino/#lesson-7-displaying-data-on-oled");
    }
};
Blockly.Arduino["oled_init"]=function(block){
	var mode = block.getFieldValue('mode');
	window.localStorage.oled_mode = mode;
    if (mode=="t"){
		var orientation = block.getFieldValue('orientation') == "1" ? "1" : "0";
		Blockly.Arduino.includes_["oled"]='#include <U8x8lib.h>';
		Blockly.Arduino.definitions_["oled"]="U8X8_SSD1306_128X64_NONAME_HW_I2C oled(U8X8_PIN_NONE);";
		Blockly.Arduino.setups_["oled"]="oled.begin();\n  oled.setFlipMode("+orientation+");";
	} else {
		var orientation = block.getFieldValue('orientation') == "1" ? "U8G2_R2" : "U8G2_R0";
		Blockly.Arduino.includes_["oled"]='#include <U8g2lib.h>';
		Blockly.Arduino.definitions_["oled"]="U8G2_SSD1306_128X64_NONAME_F_HW_I2C oled("+orientation+", U8X8_PIN_NONE);";
		Blockly.Arduino.setups_["oled"]="oled.begin();";
	}
    return "";
};
Blockly.Python["oled_init"]=function(block){
    
};
//////////////
Blockly.Blocks["oled_aff"]={init:function(){
	this.appendValueInput("TEXT4").appendField(Blockly.Msg.oled_aff);
	this.appendValueInput("xy").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.oled_xy);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00929F");
    this.setHelpUrl("https://wiki.seeedstudio.com/Grove-Beginner-Kit-For-Arduino/#lesson-7-displaying-data-on-oled");
    this.setTooltip(Blockly.Msg.oled_tooltip)}
};
Blockly.Arduino["oled_aff"]=function(block){
	var mode = window.localStorage.oled_mode;
    var value_xy = Blockly.Arduino.valueToCode(block, "xy", Blockly.Arduino.ORDER_UNARY_POSTFIX);
    var texte=Blockly.Arduino.valueToCode(block, "TEXT4", Blockly.Arduino.ORDER_UNARY_POSTFIX);
	var code;
	if (mode=="t") {
		code="oled.setCursor("+value_xy+");\noled.print("+texte+");\n";
	} else {
		code="oled.drawStr("+value_xy+", "+texte+");\n";
	}
    return code
};
Blockly.Python["oled_aff"]=function(block){
    
};
//////////////
Blockly.Blocks["oled_police"]={init:function(){
	this.appendDummyInput().appendField(Blockly.Msg.oled_font)
	.appendField(new Blockly.FieldDropdown(Blockly.Msg.oled_police), "police");
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00929F");
    this.setHelpUrl("https://wiki.seeedstudio.com/Grove-Beginner-Kit-For-Arduino/#lesson-7-displaying-data-on-oled");
    this.setTooltip(Blockly.Msg.oled_tooltip)}
};
Blockly.Arduino["oled_police"]=function(block){
	var font = block.getFieldValue('police');
	var mode = window.localStorage.oled_mode;
	var code;
	if (mode=="t") {
		code="oled.setFont("+font+");\n";
	} else {
		switch (font) {
			case "u8x8_font_chroma48medium8_r":
				code="oled.setFont(u8g2_font_chroma48medium8_8r);\n";
				break;
			case "u8x8_font_torussansbold8_r":
				code="oled.setFont(u8g2_font_torussansbold8_8r);\n";
				break;
			case "u8x8_font_px437wyse700b_2x2_r":
				code="oled.setFont(u8g2_font_logisoso16_tr);\n";
				break;
			case "u8x8_font_profont29_2x3_r":
				code="oled.setFont(u8g2_font_logisoso24_tr);\n";
				break;
		}
	}
    return code
};
Blockly.Python["oled_police"]=function(block){
    return ""
};
//////////////
Blockly.Blocks["oled_clear"]={init:function(){
	this.appendDummyInput().appendField(Blockly.Msg.oled_clear);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00929F");
    this.setHelpUrl("https://wiki.seeedstudio.com/Grove-Beginner-Kit-For-Arduino/#lesson-7-displaying-data-on-oled");
    this.setTooltip(Blockly.Msg.oled_tooltip)}
};
Blockly.Arduino["oled_clear"]=function(block){
    return "oled.clearDisplay();\n"
};
Blockly.Python["oled_clear"]=function(block){
    
};
//////////////
Blockly.Blocks["oled_box_frame"]={init:function(){
	this.appendDummyInput().appendField(Blockly.Msg.oled_box);
	this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.oled_full).appendField(new Blockly.FieldCheckbox("FALSE"), "full");
	this.appendValueInput("xy").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.oled_xy);
	this.appendValueInput("larg").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.oled_largeur);
	this.appendValueInput("haut").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.oled_hauteur);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00929F");
    this.setHelpUrl("https://wiki.seeedstudio.com/Grove-Beginner-Kit-For-Arduino/#lesson-7-displaying-data-on-oled");
    this.setTooltip(Blockly.Msg.oled_tooltip)}
};
Blockly.Arduino["oled_box_frame"]=function(block){
    var value_xy=Blockly.Arduino.valueToCode(block, "xy", Blockly.Arduino.ORDER_UNARY_POSTFIX);
    var value_larg=Blockly.Arduino.valueToCode(block, "larg", Blockly.Arduino.ORDER_UNARY_POSTFIX);
    var value_haut=Blockly.Arduino.valueToCode(block, "haut", Blockly.Arduino.ORDER_UNARY_POSTFIX);
	if (block.getFieldValue('full') == 'TRUE'){
		return "oled.drawBox("+value_xy+", "+value_larg+", "+value_haut+");\n"
	}else{
		return "oled.drawFrame("+value_xy+", "+value_larg+", "+value_haut+");\n"
	}
};
Blockly.Python["oled_box_frame"]=function(block){
    
};
//////////////
Blockly.Blocks["oled_line"]={init:function(){
	this.appendDummyInput().appendField(Blockly.Msg.oled_line);
	this.appendValueInput("xy1").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.oled_point1);
	this.appendValueInput("xy2").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.oled_point2);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00929F");
    this.setHelpUrl("https://wiki.seeedstudio.com/Grove-Beginner-Kit-For-Arduino/#lesson-7-displaying-data-on-oled");
    this.setTooltip(Blockly.Msg.oled_tooltip)}
};
Blockly.Arduino["oled_line"]=function(block){
    var value_xy1=Blockly.Arduino.valueToCode(block, "xy1", Blockly.Arduino.ORDER_UNARY_POSTFIX);
    var value_xy2=Blockly.Arduino.valueToCode(block, "xy2", Blockly.Arduino.ORDER_UNARY_POSTFIX);
	return "oled.drawLine("+value_xy1+", "+value_xy2+");\n"
};
Blockly.Python["oled_line"]=function(block){
    
};
//////////////
Blockly.Blocks["oled_circle"]={init:function(){
	this.appendDummyInput().appendField(Blockly.Msg.oled_circle);
	this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.oled_full).appendField(new Blockly.FieldCheckbox("FALSE"), "full");
	this.appendValueInput("xy").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.oled_centre);
	this.appendValueInput("rayon").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.oled_rayon);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00929F");
    this.setHelpUrl("https://wiki.seeedstudio.com/Grove-Beginner-Kit-For-Arduino/#lesson-7-displaying-data-on-oled");
    this.setTooltip(Blockly.Msg.oled_tooltip)}
};
Blockly.Arduino["oled_circle"]=function(block){
    var value_xy=Blockly.Arduino.valueToCode(block, "xy", Blockly.Arduino.ORDER_UNARY_POSTFIX);
    var value_R=Blockly.Arduino.valueToCode(block, "rayon", Blockly.Arduino.ORDER_UNARY_POSTFIX);
	if (block.getFieldValue('full') == 'TRUE'){
		return "oled.drawDisc("+value_xy+", "+value_R+");\n"
	} else {
		return "oled.drawCircle("+value_xy+", "+value_R+");\n"
	}
};
Blockly.Python["oled_circle"]=function(block){
    
};
//////////////
Blockly.Blocks["oled_bitmap"]={init:function(){
	this.appendDummyInput().appendField(Blockly.Msg.oled_bitmap).appendField(new Blockly.FieldTextInput("0xaa,0x55,0xaa,0x55,0xaa,0x55,0xaa,0x55"), "data");
	this.appendValueInput("xy").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.oled_xy);
	this.appendValueInput("larg").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.oled_largeur);
	this.appendValueInput("haut").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.oled_hauteur);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00929F");
    this.setHelpUrl("https://wiki.seeedstudio.com/Grove-Beginner-Kit-For-Arduino/#lesson-7-displaying-data-on-oled");
    this.setTooltip(Blockly.Msg.oled_tooltip)}
};
Blockly.Arduino["oled_bitmap"]=function(block){
	var bitmap = block.getFieldValue('data');
    var value_xy=Blockly.Arduino.valueToCode(block, "xy", Blockly.Arduino.ORDER_UNARY_POSTFIX);
    var value_larg=Blockly.Arduino.valueToCode(block, "larg", Blockly.Arduino.ORDER_UNARY_POSTFIX);
    var value_haut=Blockly.Arduino.valueToCode(block, "haut", Blockly.Arduino.ORDER_UNARY_POSTFIX);
	var value = value_haut + value_larg;
	Blockly.Arduino.variables_["u8_"+value]="static unsigned char u8_"+value+"[]={"+bitmap+"};";
    return "oled.drawXBM("+value_xy+", "+value_larg+", "+value_haut+", u8_"+value+");\n"
};
Blockly.Python["oled_bitmap"]=function(block){
    return ""
};
//////////////
Blockly.Blocks["oled_glyph"]={init:function(){
	this.appendValueInput("glyph").appendField("afficher l'icône").appendField(new Blockly.FieldDropdown(Blockly.Msg.oled_icon), "size");
	this.appendValueInput("xy").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.oled_xy);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00929F");
    this.setHelpUrl("https://wiki.seeedstudio.com/Grove-Beginner-Kit-For-Arduino/#lesson-7-displaying-data-on-oled");
    this.setTooltip(Blockly.Msg.oled_tooltip)}
};
Blockly.Arduino["oled_glyph"]=function(block){
	var value_size = block.getFieldValue('size');
    var value_xy = Blockly.Arduino.valueToCode(block, "xy", Blockly.Arduino.ORDER_UNARY_POSTFIX);
    var value_glyph = Blockly.Arduino.valueToCode(block, "glyph", Blockly.Arduino.ORDER_UNARY_POSTFIX);
	return "oled.setFont(u8g2_font_open_iconic_all_"+value_size+");\noled.drawGlyph("+value_xy+", "+value_glyph+");\n"
};
Blockly.Python["oled_glyph"]=function(block){
    return ""
};
//////////////
Blockly.Blocks["oled_clearBuffer"]={init:function(){
	this.appendDummyInput().appendField(Blockly.Msg.oled_clearBuffer);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00929F");
    this.setHelpUrl("https://wiki.seeedstudio.com/Grove-Beginner-Kit-For-Arduino/#lesson-7-displaying-data-on-oled");
    this.setTooltip(Blockly.Msg.oled_tooltip)}
};
Blockly.Arduino["oled_clearBuffer"]=function(block){
    return "oled.clearBuffer();\n"
};
Blockly.Python["oled_clearBuffer"]=function(block){
    return ""
};
//////////////
Blockly.Blocks["oled_sendBuffer"]={init:function(){
	this.appendDummyInput().appendField(Blockly.Msg.oled_sendBuffer);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00929F");
    this.setHelpUrl("https://wiki.seeedstudio.com/Grove-Beginner-Kit-For-Arduino/#lesson-7-displaying-data-on-oled");
    this.setTooltip(Blockly.Msg.oled_tooltip)}
};
Blockly.Arduino["oled_sendBuffer"]=function(block){
    return "oled.sendBuffer();\n"
};
Blockly.Python["oled_clearBuffer"]=function(block){
    return ""
};
// (x, y)
Blockly.Blocks["math_xy"] = {
    init: function() {
		this.jsonInit({
            "message0": "( %1 , %2)",
            "args0": [
                {
                    "type": "field_input",
                    "name": "NUMX",
                    "text": "1"
                },
				{
				  "type": "field_input",
                    "name": "NUMY",
                    "text": "1"
				}
            ],
            "output": "XY",
			"tooltip": "Coordonées : (colonne , ligne)",
            "colour": "#00CC00"
        })
    }
}
Blockly.Arduino["math_xy"]=function(block){
    var codex = window.parseFloat(block.getFieldValue("NUMX"));
    var codey = window.parseFloat(block.getFieldValue("NUMY"));
    return [codex+", "+codey, Blockly.Arduino.ORDER_ATOMIC]
}
  ///////////
 /*	 lcd  */
///////////
Blockly.Blocks["lcd_i2c"]={init:function(){
        this.appendDummyInput().appendField(new Blockly.FieldImage("data:image/png;base64,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", 55, 35))
			.appendField(Blockly.Msg.LCD+" I2C");
        this.appendValueInput("fond").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.lcd_fond);
        this.setColour("#00929F");
        this.setTooltip(Blockly.Msg.LCDi2c_tooltip);
        this.setHelpUrl("http://wiki.seeed.cc/Grove-LCD_RGB_Backlight/");
    }
};
Blockly.Arduino["lcd_i2c"]=function(block){
    var fond_couleur=Blockly.Arduino.valueToCode(block, "fond", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.includes_["rgb_lcd"]='#include <Wire.h>\n#include <rgb_lcd.h>';
    Blockly.Arduino.definitions_["rgb_lcd"]="rgb_lcd lcd;";
	if (fond_couleur) {
        Blockly.Arduino.setups_["rgb_lcd"]="lcd.begin(16,2);\n  lcd.clear();\n  lcd.setRGB("+fond_couleur+");";
    } else {
		Blockly.Arduino.setups_["rgb_lcd"]="lcd.begin(16,2);\n  lcd.clear();";
	}
    return "";
};
Blockly.Python["lcd_i2c"]=function(block){
    
};
//////////////
Blockly.Blocks["lcd_color"]={init:function(){
    this.appendValueInput("_color").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.lcd_change_color);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00929F")}
};
Blockly.Arduino["lcd_color"]=function(block){
    var value_color=Blockly.Arduino.valueToCode(block, "_color", Blockly.Arduino.ORDER_ATOMIC);
    return "lcd.setRGB("+value_color+");\n"
};
Blockly.Python["lcd_color"]=function(block){
    
};
//////////////
Blockly.Blocks["lcd_symbole"]={init:function(){
    this.appendDummyInput().appendField(Blockly.Msg.lcd_symbole).appendField(new Blockly.FieldDropdown(Blockly.Msg.char_lcd),"c_char");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("01010"), "L1");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("10101"), "L2");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("01010"), "L3");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("10101"), "L4");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("01010"), "L5");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("10101"), "L6");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("01010"), "L7");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("10101"), "L8");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setHelpUrl(Blockly.Msg.HELPURL);
    this.setColour("#00929F");
	this.setTooltip(Blockly.Msg.lcd_symbole_tooltip)}
};
Blockly.Arduino["lcd_symbole"]=function(block){
    var vname=block.getFieldValue("c_char");
    var l1=block.getFieldValue("L1");
    var l2=block.getFieldValue("L2");
    var l3=block.getFieldValue("L3");
    var l4=block.getFieldValue("L4");
    var l5=block.getFieldValue("L5");
    var l6=block.getFieldValue("L6");
    var l7=block.getFieldValue("L7");
    var l8=block.getFieldValue("L8");
    Blockly.Arduino.variables_["char_"+vname]="byte char_" + vname + "[]={\n B" + l1 + ",\n B" + l2 + ",\n B" + l3 + ",\n B" + l4 + ",\n B" + l5 + ",\n B" + l6 + ",\n B" + l7 + ",\n B" + l8 + "\n" + "};";
    Blockly.Arduino.setups_["char_"+vname]="lcd.createChar("+vname+",char_"+vname+");";
	return ""
};
Blockly.Python["lcd_symbole"]=function(block){
    var vname=block.getFieldValue("c_char");
    var l1=block.getFieldValue("L1");
    var l2=block.getFieldValue("L2");
    var l3=block.getFieldValue("L3");
    var l4=block.getFieldValue("L4");
    var l5=block.getFieldValue("L5");
    var l6=block.getFieldValue("L6");
    var l7=block.getFieldValue("L7");
    var l8=block.getFieldValue("L8");
    Blockly.Python.variables_["char_"+vname]="byte char_" + vname + "[]={\n B" + l1 + ",\n B" + l2 + ",\n B" + l3 + ",\n B" + l4 + ",\n B" + l5 + ",\n B" + l6 + ",\n B" + l7 + ",\n B" + l8 + "\n" + "};";
    Blockly.Python.setups_["char_"+vname]="lcd.createChar("+vname+",char_"+vname+");";
	return ""
};
//////////////
Blockly.Blocks["lcd_aff_symbole"]={init:function(){
        this.setColour("#00929F");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendDummyInput().appendField(Blockly.Msg.lcd_aff_symbole).appendField(new Blockly.FieldDropdown(Blockly.Msg.char_lcd),"c_char");
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LCD_line).appendField(new Blockly.FieldDropdown(Blockly.Msg.ligne), "ligne");
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LCD_col).appendField(new Blockly.FieldDropdown(Blockly.Msg.colonne), "colonne");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.lcd_aff_symbole_tooltip)}
};
Blockly.Arduino["lcd_aff_symbole"]=function(block){
    var value_num_ligne=block.getFieldValue("ligne");
    var value_num_colonne=block.getFieldValue("colonne");
    var variable=block.getFieldValue("c_char");
    return "lcd.setCursor(" + value_num_colonne + "," + value_num_ligne + ");\nlcd.write(" + variable + ");\n"
};
Blockly.Python["lcd_aff_symbole"]=function(block){
    
};
//////////////
Blockly.Blocks["lcd"]={init:function(){
        this.appendDummyInput().appendField(new Blockly.FieldImage("data:image/png;base64,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", 60, 30))
			.appendField(Blockly.Msg.LCD);
        this.appendValueInput("rs").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("RS");
        this.appendValueInput("en").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("E");
        this.appendValueInput("d4").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("D4");
        this.appendValueInput("d5").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("D5");
        this.appendValueInput("d6").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("D6");
        this.appendValueInput("d7").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("D7");
        this.setColour("#00929F");
        this.setTooltip(Blockly.Msg.LCD_tooltip);
        this.setHelpUrl(Blockly.Msg.LCD_SHIELD_PRINT_HELPURL);
    }
};
Blockly.Arduino["lcd"]=function(block){
    var v_rs=Blockly.Arduino.valueToCode(block, "rs", Blockly.Arduino.ORDER_ASSIGNMENT);
    var v_d4=Blockly.Arduino.valueToCode(block, "d4", Blockly.Arduino.ORDER_ASSIGNMENT);
    var v_d5=Blockly.Arduino.valueToCode(block, "d5", Blockly.Arduino.ORDER_ASSIGNMENT);
    var v_d6=Blockly.Arduino.valueToCode(block, "d6", Blockly.Arduino.ORDER_ASSIGNMENT);
    var v_d7=Blockly.Arduino.valueToCode(block, "d7", Blockly.Arduino.ORDER_ASSIGNMENT);
    var v_en=Blockly.Arduino.valueToCode(block, "en", Blockly.Arduino.ORDER_ASSIGNMENT);
    Blockly.Arduino.includes_["define_LiquidCrystal"]="#include <LiquidCrystal.h>";
    Blockly.Arduino.definitions_["var_LiquidCrystal lcd"]="LiquidCrystal lcd(" + v_rs + "," + v_en + "," + v_d4 + "," + v_d5 + "," + v_d6 + "," + v_d7 + ");";
    Blockly.Arduino.setups_["setup_lcd"]="lcd.begin(16,2);\n  lcd.clear();";
    return ''
};
Blockly.Python["lcd"]=function(block){
    var v_rs=Blockly.Python.valueToCode(block, "rs", Blockly.Python.ORDER_ASSIGNMENT);
    var v_d4=Blockly.Python.valueToCode(block, "d4", Blockly.Python.ORDER_ASSIGNMENT);
    var v_d5=Blockly.Python.valueToCode(block, "d5", Blockly.Python.ORDER_ASSIGNMENT);
    var v_d6=Blockly.Python.valueToCode(block, "d6", Blockly.Python.ORDER_ASSIGNMENT);
    var v_d7=Blockly.Python.valueToCode(block, "d7", Blockly.Python.ORDER_ASSIGNMENT);
    var v_en=Blockly.Python.valueToCode(block, "en", Blockly.Python.ORDER_ASSIGNMENT);
    Blockly.Python.includes_["define_LiquidCrystal"]="#include <LiquidCrystal.h>";
    Blockly.Python.definitions_["var_LiquidCrystal lcd"]="LiquidCrystal lcd(" + v_rs + "," + v_en + "," + v_d4 + "," + v_d5 + "," + v_d6 + "," + v_d7 + ");";
    Blockly.Python.setups_["setup_lcd"]="lcd.begin(16,2);\n  lcd.clear();";
    return ''
};
//////////////
Blockly.Blocks["LCD_Keypad_Shield_DFR_09"]={init:function(){
        this.setColour("#00929F");
        this.setHelpUrl(Blockly.Msg.LCD_SHIELD_PRINT_HELPURL);
        this.appendDummyInput().appendField(Blockly.Msg.LCD_SHIELD_PRINT_TEXT);
        this.appendValueInput("TEXT1").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LCD_SHIELD_PRINT_INPUT1);
        this.appendValueInput("TEXT2").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LCD_SHIELD_PRINT_INPUT2);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.LCD_SHIELD_PRINT_TOOLTIP)}
};
Blockly.Arduino["LCD_Keypad_Shield_DFR_09"]=function(block){
    var text1=Blockly.Arduino.valueToCode(block, "TEXT1", Blockly.Arduino.ORDER_UNARY_POSTFIX);
    var text2=Blockly.Arduino.valueToCode(block, "TEXT2", Blockly.Arduino.ORDER_UNARY_POSTFIX);
    return "lcd.setCursor(0,0);\nlcd.print(" + text1 + ");\nlcd.setCursor(0,1);\nlcd.print(" + text2 + ");\n"
};
Blockly.Python["LCD_Keypad_Shield_DFR_09"]=function(block){
    var text1=Blockly.Python.valueToCode(block, "TEXT1", Blockly.Python.ORDER_UNARY_POSTFIX);
    var text2=Blockly.Python.valueToCode(block, "TEXT2", Blockly.Python.ORDER_UNARY_POSTFIX);
    return "lcd.setCursor(0,0)\nlcd.print(" + text1 + ")\nlcd.setCursor(0,1)\nlcd.print(" + text2 + ")\n"
};
//////////////
Blockly.Blocks["LCD_Keypad_Shield_DFR_09_lc"]={init:function(){
	var prog = window.localStorage.prog;
    this.setColour("#00929F");
    this.setHelpUrl(Blockly.Msg.LCD_SHIELD_PRINT_HELPURL);
	if (prog != "python") {
        this.appendDummyInput().appendField(Blockly.Msg.LCD_SHIELD_PRINT_TEXT);
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LCD_line).appendField(new Blockly.FieldDropdown(Blockly.Msg.ligne), "ligne");
        this.appendValueInput("TEXT4").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LCD_col).appendField(new Blockly.FieldDropdown(Blockly.Msg.colonne), "colonne");
	} else {
		this.appendValueInput("TEXT4").appendField(Blockly.Msg.LCD_SHIELD_PRINT_TEXT);
	}	
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.LCD_SHIELD_PRINT_TEXT_tooltip)}
};
Blockly.Arduino["LCD_Keypad_Shield_DFR_09_lc"]=function(block){
    var value_num_ligne=block.getFieldValue("ligne");
    var value_num_colonne=block.getFieldValue("colonne");
    var text4=Blockly.Arduino.valueToCode(block, "TEXT4", Blockly.Python.ORDER_UNARY_POSTFIX);
	return "lcd.setCursor(" + value_num_colonne + "," + value_num_ligne + ");\nlcd.print(" + text4 + ");\n"
};
Blockly.Python["LCD_Keypad_Shield_DFR_09_lc"]=function(block){
    var text4=Blockly.Python.valueToCode(block, "TEXT4", Blockly.Python.ORDER_UNARY_POSTFIX);
	var code = "setText(";
	if (text4[0]!='"') text4 = '"' + text4 + '"';
    return  code + text4 + ")\n"
};
//////////////
Blockly.Blocks["LCD_Keypad_Shield_DFR_09_RAZ"]={init:function(){
        this.setColour("#00929F");
        this.setHelpUrl(Blockly.Msg.LCD_SHIELD_PRINT_HELPURL);
        this.appendDummyInput().appendField(Blockly.Msg.LCD_raz);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.LCD_raz_tooltip)}
};
Blockly.Arduino["LCD_Keypad_Shield_DFR_09_RAZ"]=function(block){
    return "lcd.clear();\n"
};
Blockly.Python["LCD_Keypad_Shield_DFR_09_RAZ"]=function(block){
    return 'setText("")\n'
};
  ///////////
 /*  del  */
///////////
Blockly.Blocks["digital_write"]={init:function(){
    this.setColour("#00929F");
    this.setHelpUrl(Blockly.Msg.HELPURL);
    this.appendValueInput("PIN").setCheck("Number").appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN_ONOFF), "STAT").appendField(Blockly.Msg.del);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.del_tooltip)}
};
Blockly.Arduino["digital_write"]=function(block){
    var dropdown_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_stat=block.getFieldValue("STAT");
    Blockly.Arduino.setups_["setup_output_" + dropdown_pin]="pinMode(" + dropdown_pin + ", OUTPUT);";
    return "digitalWrite(" + dropdown_pin + ", " + dropdown_stat + ");\n";
};
Blockly.Python["digital_write"]=function(block){
	var carte = localStorage.getItem('card')
	var cpu = profile[carte].cpu
	var dropdown_pin=Blockly.Python.valueToCode(block, "PIN", Blockly.Python.ORDER_ATOMIC);
    var dropdown_stat=block.getFieldValue("STAT") == "HIGH" ? "1" : "0";
	if ( cpu == "cortexM0" ) {
		return "pin"+dropdown_pin+".write_digital("+dropdown_stat+")\n"
	} else {
		Blockly.Python.imports_["pin"]="from machine import Pin";
		Blockly.Python.definitions_["pin_"+dropdown_pin]="BROCHE_"+dropdown_pin+" = Pin("+dropdown_pin+", Pin.OUT)";
		return "BROCHE_"+dropdown_pin+".value("+dropdown_stat+")\n"
	}
};
//////////////
Blockly.Blocks["inout_buildin_led"]={init:function(){
        this.setColour("#00929F");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendDummyInput().appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN_ONOFF), "STAT").appendField(Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_INPUT);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_TOOLTIP)}
};
Blockly.Arduino["inout_buildin_led"]=function(block){
    var dropdown_stat=block.getFieldValue("STAT");
	var card=window.localStorage.card;
    Blockly.Arduino.setups_["setup_output_13"]="pinMode("+profile[card].BUILTIN_LED+", OUTPUT);";
    var code="digitalWrite("+profile[card].BUILTIN_LED+", " + dropdown_stat + ");\n";
    return code
};
Blockly.Python["inout_buildin_led"]=function(block){
    var dropdown_stat=block.getFieldValue("STAT") == "HIGH" ? "1" : "0";
	var card=window.localStorage.card;
    Blockly.Python.imports_["pin"]="from machine import Pin";
	Blockly.Python.definitions_["pin_"+profile[card].BUILTIN_LED]="BROCHE_"+profile[card].BUILTIN_LED+" = Pin("+profile[card].BUILTIN_LED+", Pin.OUT)";
    return "BROCHE_"+profile[card].BUILTIN_LED+".value("+dropdown_stat+")\n"
};
//////////////
Blockly.Blocks['rvb_init']={init:function() {
	var card=window.localStorage.card;
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAIAAADCaIt+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEq0lEQVR42pVWTYgcRRR+71V1DwSMcUP0YCQqSFATRYIhiHtQMSCi4BJcDG5UPOgp6smFkEOEsJIoiJC9ekg8SDQoiCgeIkSJh81BlBVFchMTDUERna6uqvd8Vd09OzPrZnerHz013VXf9/6rAVYbxcg/HP5jV9187TEAs4h7kF4mcwTpMNIBoruJAHGccF2DGvWRXiP7IxlBEkABaMQjnTNmisz/2LV23e8is0C2QQwA9ZBww4T4gTEbcZ34zfJ7yVxWxTOcoscsnKWZNJS64BtjrkNaH8EmpIsmobtR6DHR51Xm+MiYtTqqWfRWhz7QN45OhsUlX8ETtGaOm5D+JEqbCdhkoSX0jgMZjEoE49Mcvk4Eq+E3jnxO1Sfwo2q2bkGd03Ij9FWNZnuXVCsOk0nmgXTDv9eT222rKVvts27S1DeST/pCxBTeALd5eNTjdIAnA+x0UKpLp5MB1yTJFuDpXaW8V/R/M0EoCqoEQX+1qD6G/l5y8EKEcxH/iSCcJUKs4CfGo6/SzVnLlTOq0HdzvQ9jIQJe8u4A7IEjskCUHV7O99+XeqOkl+gZal3IEH1ee5CuAM7YpVwZzR4i2nCmB0LveOIAdQQFZVZBvYewJ9RXOQiLry703USVX8bmHtLETaVgS4GHhgLaoetVzvesppuDp71RswMvocewLcZLzMLsuWYRdmedt3XzkvPaPvhtWKUmkgp8/1DO525ZPFKSmKY0NwW6HIyqpFtZY6Bk4UxGr5k56uU4Suwf7Cc1SP2jC+Pn6JaqHq9otnccOerFV2XKtSalGWa9Vae6HMQQ74tRRIKi64/eObBErn919QZdwnXyj58kl1Osqzw8kgnKnJ23W/KmzXNOHGWgBXUUo0vqzw3UzxSJQ4KoEe4xl9AxnjAKGrCtCp+A8Icchuwlu9+mYvdtLeVQwVZvFtWOqNE+G4Vj9IrcwnOiU4vcUaeOPF04gx7HK88h3NrV12yRdK+7epXWUVsCfuJ7EhczbgwiXlh5olrgU6jjSXdM253xo9CNEVp5D3QEh2wiyJal58lRrR0Qek/Vi196+Tt40VBkZ+nkd+dPSn3/qX4Xt2H1Q0fwYEfwYpFcVLeHSJbWmrz3vKbJLaHe6/1M8M8EPxn8ZqcVGOHtihSOho+JAZmGZHtLYO+xpD1zuKXlaGvR6UMT51NFiG/qohUvJFxMVzkpx1ptyBAXu++FdHpj8V3RnlKcjWiZKBkRH055KMEwGxG9U8p7Nn/VtLlapjt3aXqiS9OcqcVMiarvUpyxpdF7JIzf5r7RGKGJlVpceTwHgMZOvCbCmkJ3jjQMbUTlFz3IrWLIUQMjdkN0CTo1KUUX+4ujG6ouvMOur7L6h4daxeAwmDDl9722IOK4oyge0Maduqd4+0dtdw68v3TkZBcr+qllza4jM1ts+Wn2VZNFPvcu3ah1nvbuI7lcXBC7wyc4rLO7x75jjq98cGIb8uL50i4URkzLlDeSlOZnKF/fasp3AS4BDb7BGqkQPwN4CNY49HQwu2zxUmHmjHnT2lcKM2mpbL9FkSYQHkeYRTiG+AbCswh3jJyKqww7yjVscoErf/JS25lHx3+CZ0zPX45OhwAAAABJRU5ErkJggg==", 32, 30))
        .appendField(Blockly.Msg.rvb_init);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("R").appendField(new Blockly.FieldDropdown(profile[card].dropdownPWM), "rouge");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("V").appendField(new Blockly.FieldDropdown(profile[card].dropdownPWM), "vert");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("B").appendField(new Blockly.FieldDropdown(profile[card].dropdownPWM), "bleu");
    this.setInputsInline(false);
    this.setColour("#00929f");
    this.setTooltip(Blockly.Msg.rvb_init_tooltip);
    this.setHelpUrl('http://www.mon-club-elec.fr/pmwiki_reference_arduino/pmwiki.php?n=Main.ReferenceMaxi')}
};
Blockly.Arduino['rvb_init'] = function(block) {
	var value_rouge = block.getFieldValue('rouge');
	var value_vert = block.getFieldValue('vert');
	var value_bleu = block.getFieldValue('bleu');
	Blockly.Arduino.includes_["extension"]="#include <extension.h>";
	Blockly.Arduino.definitions_["extension"]="Extension module;";
	Blockly.Arduino.setups_["rvb"]="module.rvb("+value_rouge+","+value_vert+","+value_bleu+");"
	//Blockly.Arduino.variables_['rvb_'+value_rouge] = '#define redPin '+value_rouge+'\n#define greenPin '+value_vert+'\n#define bluePin '+value_bleu;
	//Blockly.Arduino.userFunctions_['rvb_'+value_rouge] = 'void setColor(int redValue, int greenValue, int blueValue) {\n  analogWrite(redPin, redValue);\n  analogWrite(greenPin, greenValue);\n  analogWrite(bluePin, blueValue);\n}';
	//Blockly.Arduino.setups_['rvb_'+value_rouge]='pinMode(greenPin, OUTPUT);\n  pinMode(redPin, OUTPUT);\n  pinMode(bluePin, OUTPUT);';
	return '';
};
Blockly.Python['rvb_init'] = function(block) {
	var value_rouge = block.getFieldValue('rouge');
	var value_vert = block.getFieldValue('vert');
	var value_bleu = block.getFieldValue('bleu');
	Blockly.Python.imports_['pin']='from  machine import Pin';
	Blockly.Python.imports_['pwm']='from  machine import PWM';
	Blockly.Python.definitions_['rvb_'+value_rouge+"_"+value_vert+"_"+value_bleu] = 'redPin = PWM(Pin('+value_rouge+'))\ngreenPin = PWM(Pin('+value_vert+'))\nbluePin = PWM(Pin('+value_bleu+'))';
	Blockly.Python.userFunctions_['rvb_'+value_rouge] = 'def setColor(redValue, greenValue, blueValue):\n  redPin.duty(redValue)\n  greenPin.duty(greenValue)\n  bluePin.duty(blueValue)\n';
    return '';
};
//////////////
Blockly.Blocks['rvb_set']={init:function() {
    this.appendValueInput("color")
        .appendField(Blockly.Msg.rvb_set);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#00929f");
    this.setTooltip(Blockly.Msg.rvb_set_tooltip);
    this.setHelpUrl('http://www.mon-club-elec.fr/pmwiki_reference_arduino/pmwiki.php?n=Main.ReferenceMaxi')}
};
Blockly.Arduino['rvb_set'] = function(block) {
  var value_color = Blockly.Arduino.valueToCode(block, 'color', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'module.rvb_afficher_couleur('+value_color+');\n';
  return code;
};
Blockly.Python['rvb_set'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'r', Blockly.Python.ORDER_ATOMIC);
  var value_v = Blockly.Python.valueToCode(block, 'v', Blockly.Python.ORDER_ATOMIC);
  var value_b = Blockly.Python.valueToCode(block, 'b', Blockly.Python.ORDER_ATOMIC);
  var code = 'setColor('+value_r+','+value_v+','+value_b+')\n';
  return code;
};
//////////////
Blockly.Blocks["blink"]={init:function(){
        this.appendDummyInput().appendField(Blockly.Msg.blink).appendField(new Blockly.FieldDropdown(Blockly.Msg.menublink), "speed");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#00929F");
        this.setTooltip(Blockly.Msg.blink_tooltip);
        this.setHelpUrl(Blockly.Msg.HELPURL)}
};
Blockly.Arduino["blink"]=function(block){
	var card=window.localStorage.card;
    var dropdown_speed=block.getFieldValue("speed");
    Blockly.Arduino.setups_["setup_output_13"]="pinMode("+profile[card].BUILTIN_LED+", OUTPUT);";
    return "digitalWrite("+profile[card].BUILTIN_LED+", HIGH);\ndelay(" + dropdown_speed + ");\ndigitalWrite("+profile[card].BUILTIN_LED+", LOW);\ndelay(" + dropdown_speed + ");\n"
};
Blockly.Python["blink"]=function(block){
	var card=window.localStorage.card;
    var dropdown_speed=block.getFieldValue("speed");
	Blockly.Python.imports_["time"]="import time";
	Blockly.Python.imports_["pin"]="from machine import Pin";
	Blockly.Python.definitions_["pin_"+profile[card].BUILTIN_LED]="BROCHE_"+profile[card].BUILTIN_LED+" = Pin("+profile[card].BUILTIN_LED+", Pin.OUT)";
    return "BROCHE_"+profile[card].BUILTIN_LED+".value(0)\ntime.sleep_ms("+dropdown_speed+")\nBROCHE_"+profile[card].BUILTIN_LED+".value(1)\ntime.sleep_ms("+dropdown_speed+")\n"
};
//////////////
Blockly.Blocks["bargraphe"]={init:function(){
        this.appendDummyInput().appendField(new Blockly.FieldImage("data:image/png;base64,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", 55, 30))
			.appendField(Blockly.Msg.bargraphe);
        this.appendValueInput("clk").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("DCKI");
        this.appendValueInput("data").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("DI");
        this.setColour("#00929F");
        this.setTooltip(Blockly.Msg.bargraphe_tooltip);
        this.setHelpUrl("http://wiki.seeed.cc/Grove-LED_Bar/")}
};
Blockly.Arduino["bargraphe"]=function(block){
    var _clock=Blockly.Arduino.valueToCode(block, 'clk', Blockly.Arduino.ORDER_ATOMIC);
    var _data=Blockly.Arduino.valueToCode(block, 'data', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.includes_["extension"]="#include <extension.h>";
	Blockly.Arduino.definitions_["extension"]="Extension module;";
	Blockly.Arduino.setups_["ledbar"]="module.bargraphe(" + _clock + "," + _data + ");";
    //Blockly.Arduino.definitions_["ledbar"]="unsigned char _state[]={0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00};";
    //Blockly.Arduino.codeFunctions_["ledbar"]="void sendData(unsigned int data) {\n  for (unsigned char i=0; i < 16; i++){\n    unsigned int state=(data&0x8000) ? HIGH : LOW;\n    digitalWrite(" + _data + ", state);\n    state=digitalRead(" + _clock + ") ? LOW : HIGH;\n    digitalWrite(" + _clock + ", state);\n    data <<= 1;\n  }\n}\nvoid setData(unsigned char _state[]) {\n  sendData(0x00);\n  for (unsigned char i=0; i<10; i++) sendData(_state[10-i-1]);\n  sendData(0x00);\n  sendData(0x00);\n  digitalWrite(" + _data + ", LOW);\n  delayMicroseconds(10);\n  for (unsigned char i=0; i<4; i++){\n    digitalWrite(" + _data + ", HIGH);\n    digitalWrite(" + _data + ", LOW);\n  }\n}\nvoid SetLevel(float level) {\n  level=max(0, min(10, level));\n  level *= 8;\n  for (byte i=0; i<10; i++) {\n    _state[i]=(level>8) ? ~0 : (level>0) ? ~(~0 << byte(level)) : 0;\n    level -= 8;\n  };\n  setData(_state);\n}";
    //Blockly.Arduino.setups_["ledbar"]="pinMode(" + _clock + ", OUTPUT);\n  pinMode(" + _data + ", OUTPUT);";
    return ""
};
Blockly.Python["bargraphe"]=function(block){
    var _clock=Blockly.Python.valueToCode(block, 'clk', Blockly.Python.ORDER_ATOMIC);
    var _data=Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
	Blockly.Python.imports_["pin"]="from machine import Pin";
	Blockly.Python.imports_["MY9221"]="import MY9221";
    Blockly.Python.definitions_["pin_"+_clock+"_"+_data]="ledbar = MY9221(di=Pin("+_data+"), dcki=Pin("+_clock+"))";
    return ""
};
//////////////
Blockly.Blocks["bargraphe_allume"]={init:function(){
        this.appendValueInput("del").appendField(Blockly.Msg.bargraphe_allume);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#00929F");
        this.setTooltip(Blockly.Msg.bargraphe_allume_tooltip);
        this.setHelpUrl("http://wiki.seeed.cc/Grove-LED_Bar/");
    }
};
Blockly.Arduino["bargraphe_allume"]=function(block){
    var level=Blockly.Arduino.valueToCode(block, 'del', Blockly.Arduino.ORDER_ATOMI);
    //return "SetLevel(" + level + ");\n"
    return "module.bargraphe_allumer(" + level + ");\n"
};
Blockly.Python["bargraphe_allume"]=function(block){
    var level=Blockly.Python.valueToCode(block, 'del', Blockly.Python.ORDER_ATOMI);
    return "ledbar.level(" + level + ", 0x08)"
};
//////////////
Blockly.Blocks["bargraphe_number"]={init:function(){
        this.appendValueInput("del").appendField(Blockly.Msg.bargraphe_number);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#00929F");
        this.setTooltip(Blockly.Msg.bargraphe_allume_tooltip);
        this.setHelpUrl("http://wiki.seeed.cc/Grove-LED_Bar/");
    }
};
Blockly.Arduino["bargraphe_number"]=function(block){
    var level=Blockly.Arduino.valueToCode(block, 'del', Blockly.Arduino.ORDER_ATOMI);
    return "module.bargraphe_number(" + level + ");\n"
};
Blockly.Python["bargraphe_number"]=function(block){
    var level=Blockly.Python.valueToCode(block, 'del', Blockly.Python.ORDER_ATOMI);
    return "ledbar.level(" + level + ", 0x08)"
};
//////////////
Blockly.Blocks["pixel_init"]={init:function(){
	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("data:image/jpeg;base64,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", 32, 32))
		.appendField(Blockly.Msg.pixel1);
	this.appendValueInput("broche").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.pin);
	this.appendValueInput("num").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.pixel4);
    this.setColour("#00929F");
    this.setTooltip(Blockly.Msg.pixel1_tooltip);
    this.setHelpUrl("http://")}
};
Blockly.Arduino["pixel_init"]=function(block){
    var pin=Blockly.Arduino.valueToCode(block, "broche", Blockly.Arduino.ORDER_ASSIGNMENT);
	var number=Blockly.Arduino.valueToCode(block, "num", Blockly.Arduino.ORDER_ASSIGNMENT);
    Blockly.Arduino.includes_["pixel"]="#include <NeoPixel.h>";
    Blockly.Arduino.definitions_["pixel"]="NeoPixel pixel = NeoPixel(" + number + ", " + pin + ", NEO_GRB + NEO_KHZ800);";
    Blockly.Arduino.setups_["pixel"]="pixel.begin();";
    return ""
};
Blockly.Python["pixel_init"]=function(block){
	var carte = localStorage.getItem('card')
	var cpu = profile[carte].cpu
    var pin=Blockly.Python.valueToCode(block, "broche", Blockly.Python.ORDER_ASSIGNMENT);
	var number=Blockly.Python.valueToCode(block, "num", Blockly.Python.ORDER_ASSIGNMENT);
    Blockly.Python.imports_["neopixel"]="from neopixel import NeoPixel";
	if ( cpu == "cortexM0" ) {
		Blockly.Python.definitions_["pin_"+pin]="np = NeoPixel(pin" + pin + ", " + number + ")"
	} else {
		Blockly.Python.imports_["pin"]="from machine import Pin";
		Blockly.Python.definitions_["pin_"+pin]="BROCHE_" + pin + " = Pin(" + pin + ", Pin.OUT)\nnp = NeoPixel(BROCHE_" + pin + ", " + number + ")";
	}
	return ""
};
//////////////
Blockly.Blocks["pixel_setcolor"]={init:function(){
	this.appendValueInput("broche").setCheck("Number").appendField(Blockly.Msg.pixel6);
	this.appendValueInput("color").appendField(Blockly.Msg.pixel3);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00929F");
    this.setTooltip(Blockly.Msg.pixel3_tooltip);
    this.setHelpUrl("http://")}
};
Blockly.Arduino["pixel_setcolor"]=function(block){
    var pin=Blockly.Arduino.valueToCode(block, "broche", Blockly.Arduino.ORDER_ASSIGNMENT);
    var value_color=Blockly.Arduino.valueToCode(block, "color", Blockly.Arduino.ORDER_ASSIGNMENT);
    return "pixel.setPixelColor(" + pin + ", " + value_color + ");\npixel.show();\n"
};
Blockly.Python["pixel_setcolor"]=function(block){
    var pin=Blockly.Python.valueToCode(block, "broche", Blockly.Python.ORDER_ASSIGNMENT);
	var value_color=Blockly.Python.valueToCode(block, "color", Blockly.Python.ORDER_ASSIGNMENT);
    return "np[" + pin + "] = (" + value_color + ")\nnp.show()\n"
};
//////////////
Blockly.Blocks["pixel_show"]={init:function(){
	this.appendDummyInput().appendField(Blockly.Msg.pixel2);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00929F");
    this.setTooltip(Blockly.Msg.pixel2_tooltip);
    this.setHelpUrl("http://")}
};
Blockly.Arduino["pixel_show"]=function(block){
    return "pixel.show();\n"
};
Blockly.Python["pixel_show"]=function(block){
	var carte = localStorage.getItem('card')
	var cpu = profile[carte].cpu
	if ( cpu == "cortexM0" ) {
		return "np.show()\n"
	} else {
		return "np.write()\n"
	}
    
};
//////////////
Blockly.Blocks["pixel_clear"]={init:function(){
	this.appendDummyInput().appendField(Blockly.Msg.pixel7);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00929F");
    this.setTooltip(Blockly.Msg.pixel4_tooltip);
    this.setHelpUrl("http://")}
};
Blockly.Arduino["pixel_clear"]=function(block){
    return "pixel.clear();\npixel.show();\n"
};
Blockly.Python["pixel_clear"]=function(block){
	var carte = localStorage.getItem('card')
	var cpu = profile[carte].cpu
	if ( cpu == "cortexM0" ) {
		return "np.clear()\n"
	} else {
		return "np.clear()\n"
	}
};
//////////////
Blockly.Blocks["pixel_setbrightness"]={init:function(){
	this.appendValueInput("val").setCheck("Number").appendField(Blockly.Msg.pixel5);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00929F");
    this.setTooltip(Blockly.Msg.pixel5_tooltip);
    this.setHelpUrl("http://")}
};
Blockly.Arduino["pixel_setbrightness"]=function(block){
	var value=Blockly.Arduino.valueToCode(block, "val");
    return "pixel.setBrightness(" + value + ");\n"
};
Blockly.Python["pixel_setbrightness"]=function(){return""};
//////////////
Blockly.Blocks["pixel_setcolor_random"]={init:function(){
	this.appendValueInput("broche").setCheck("Number").appendField(Blockly.Msg.pixel6);
	this.appendDummyInput().appendField(Blockly.Msg.pixel8);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00929F");
    this.setTooltip(Blockly.Msg.pixel6_tooltip);
    this.setHelpUrl("http://")}
};
Blockly.Arduino["pixel_setcolor_random"]=function(block){
    var pin=Blockly.Arduino.valueToCode(block, "broche", Blockly.Arduino.ORDER_ASSIGNMENT);
	Blockly.Arduino.setups_["randomSeed"]="randomSeed(analogRead(0));";
    return "pixel.setPixelColor(" + pin + ", random(0,256), random(0,256), random(0,256));\npixel.show();\n"
};
Blockly.Python["pixel_setcolor_random"]=function(block){
    return ""
};
  //////////////
 /*  moteur  */
//////////////
var img_dagu = "data:image/png;base64,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";
Blockly.Blocks["moteur_dc"]={init:function(){
        this.appendDummyInput().appendField(new Blockly.FieldImage(img_dagu, 75, 50))
			.appendField(Blockly.Msg.moteur).appendField(new Blockly.FieldDropdown([[Blockly.Msg.right,"6"],[Blockly.Msg.left,"5"],[Blockly.Msg.LetR,"11"]]), "MOTEUR");
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.direction).appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN_av_ar), "ETAT");
        this.appendValueInput("Vitesse").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.vitesse);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#00929F");
        this.setTooltip(Blockly.Msg.moteurdagu_tooltiprs040);
        this.setHelpUrl("http://www.dagurobot.com/goods.php?id=173")}
};
Blockly.Arduino["moteur_dc"]=function(block){
    var dropdown_moteur=block.getFieldValue("MOTEUR");
    var dropdown_mot=parseInt(dropdown_moteur) + 5;
    var dropdown_etat=block.getFieldValue("ETAT");
    var value_vitesse=Blockly.Arduino.valueToCode(block, "Vitesse");
	if (dropdown_moteur=="11") {
		Blockly.Arduino.setups_["setup_output_5"]="pinMode(5, OUTPUT);";
		Blockly.Arduino.setups_["setup_output_6"]="pinMode(6, OUTPUT);";
		Blockly.Arduino.setups_["setup_output_10"]="pinMode(10, OUTPUT);";
		Blockly.Arduino.setups_["setup_output_11"]="pinMode(11, OUTPUT);";
		return "analogWrite(5," + value_vitesse + ");\ndigitalWrite(10," + dropdown_etat + ");\nanalogWrite(6," + value_vitesse + ");\ndigitalWrite(11," + dropdown_etat + ");\n"
	}
    Blockly.Arduino.setups_["setup_output_" + dropdown_moteur]="pinMode(" + dropdown_moteur + ", OUTPUT);";
    Blockly.Arduino.setups_["setup_output_" + dropdown_mot]="pinMode(" + dropdown_mot + ", OUTPUT);";
    return "analogWrite(" + dropdown_moteur + "," + value_vitesse + ");\ndigitalWrite(" + dropdown_mot + "," + dropdown_etat + ");\n"
};
Blockly.Python["moteur_dc"]=function(){return ""};
//////////////
Blockly.Blocks["moteur_dc_stop"]={init:function(){
        this.appendDummyInput().appendField(new Blockly.FieldImage(img_dagu, 75, 50))
		.appendField(Blockly.Msg.moteurstop).appendField(new Blockly.FieldDropdown([[Blockly.Msg.right,"6"],[Blockly.Msg.left,"5"],[Blockly.Msg.LetR,"11"]]), "MOTEUR");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#00929F");
        this.setTooltip(Blockly.Msg.moteurdagu_tooltiprs040stop);
        this.setHelpUrl("http://www.dagurobot.com/goods.php?id=173")}
};
Blockly.Arduino["moteur_dc_stop"]=function(block){
    var dropdown_moteur=block.getFieldValue("MOTEUR");
    var dropdown_mot=parseInt(dropdown_moteur) + 5;
	if (dropdown_moteur=="11") {
		Blockly.Arduino.setups_["setup_output_5"]="pinMode(5, OUTPUT);";
		Blockly.Arduino.setups_["setup_output_6"]="pinMode(6, OUTPUT);";
		Blockly.Arduino.setups_["setup_output_10"]="pinMode(10, OUTPUT);";
		Blockly.Arduino.setups_["setup_output_11"]="pinMode(11, OUTPUT);";
		return "analogWrite(5,0);\ndigitalWrite(10,HIGH);\nanalogWrite(6,0);\ndigitalWrite(11,HIGH);\n"
	}
    Blockly.Arduino.setups_["setup_output_" + dropdown_moteur]="pinMode(" + dropdown_moteur + ", OUTPUT);";
    Blockly.Arduino.setups_["setup_output_" + dropdown_mot]="pinMode(" + dropdown_mot + ", OUTPUT);";
    return "analogWrite(" + dropdown_moteur + ",0);\ndigitalWrite(" + dropdown_mot + ",HIGH);\n"
};
Blockly.Python["moteur_dc_stop"]=function(){return ""};
//////////////
Blockly.Blocks["dcmotor_v1"]={init:function(){
        this.appendDummyInput().appendField(Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR1).setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown([
            ["M1", "1"],
            ["M2", "2"],
            ["M3", "3"],
            ["M4", "4"]
        ]), "MOTEUR");
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_DIRECTION).appendField(new Blockly.FieldDropdown([
            [Blockly.Msg.ADAFRUIT_MOTORSHIELD_AVANT, "FORWARD"],
            [Blockly.Msg.ADAFRUIT_MOTORSHIELD_ARRIERE, "BACKWARD"],
            [Blockly.Msg.ADAFRUIT_MOTORSHIELD_STOP, "RELEASE"]
        ]), "ETAT");
        this.appendValueInput("Vitesse").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.vitesse);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#00929F");
        this.setTooltip("");
        this.setHelpUrl("https://www.adafruit.com/products/81")}
};
Blockly.Arduino["dcmotor_v1"]=function(block){
    var dropdown_moteur=block.getFieldValue("MOTEUR");
    var dropdown_etat=block.getFieldValue("ETAT");
    var value_vitesse=Blockly.Arduino.valueToCode(block, "Vitesse");
    Blockly.Arduino.includes_["AFMotor.h"]="#include <AFMotor.h>";
    Blockly.Arduino.definitions_["AF_DCMotor" + dropdown_moteur]="AF_DCMotor motor_dc_" + dropdown_moteur + "(" + dropdown_moteur + ", MOTOR12_2KHZ);";
    return "motor_dc_" + dropdown_moteur + ".setSpeed(" + value_vitesse + ");\nmotor_dc_" + dropdown_moteur + ".run(" + dropdown_etat + ");\n"
};
Blockly.Python["dcmotor_v1"]=function(){return ""};
//////////////
var img_shield = "data:image/jpeg;base64,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";
Blockly.Blocks["moteur_action"]={init:function(){
        this.appendValueInput("speed").appendField(new Blockly.FieldImage(img_shield, 60, 60))
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.sens), "menu").appendField(Blockly.Msg.vitesse);
        this.setInputsInline(false);
        this.setColour("#00929f");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.mot_tooltip);
        this.setHelpUrl("http://tiptopboards.free.fr/arduino_forum/viewtopic.php?f=2&t=37")}
};
Blockly.Arduino["moteur_action"]=function(block){
    var dropdown_menu=block.getFieldValue("menu");
    var value_speed=Blockly.Arduino.valueToCode(block, "speed");
    Blockly.Arduino.includes_["AFMotor.h"]="#include <AFMotor.h>";
    Blockly.Arduino.definitions_["AF_DCMotor_1"]="AF_DCMotor motor_dc_1(1, MOTOR12_2KHZ);";
    Blockly.Arduino.definitions_["AF_DCMotor_2"]="AF_DCMotor motor_dc_2(2, MOTOR12_2KHZ);";
    switch (dropdown_menu) {
        case "a":
            var code="motor_dc_1.setSpeed(2*" + value_speed + ");\nmotor_dc_1.run(FORWARD);\nmotor_dc_2.setSpeed(2*" + value_speed + ");\nmotor_dc_2.run(FORWARD);\n";
            break;
        case "d":
            var code="motor_dc_1.setSpeed(2*" + value_speed + ");\nmotor_dc_1.run(FORWARD);\nmotor_dc_2.setSpeed(2*" + value_speed + ");\nmotor_dc_2.run(BACKWARD);\n";
            break;
        case "g":
            code="motor_dc_1.setSpeed(2*" + value_speed + ");\nmotor_dc_1.run(BACKWARD);\nmotor_dc_2.setSpeed(2*" + value_speed + ");\nmotor_dc_2.run(FORWARD);\n";
            break
    }
    return code
};
Blockly.Python["moteur_action"]=function(block){
    var dropdown_menu=block.getFieldValue("menu");
    var value_speed=Blockly.Arduino.valueToCode(block, "speed");
    Blockly.Python.imports_["pwm"]="import";
    Blockly.Python.definitions_["motor_1"]="AF_DCMotor motor_dc_1(1, MOTOR12_2KHZ);";
    Blockly.Python.definitions_["motor_2"]="AF_DCMotor motor_dc_2(2, MOTOR12_2KHZ);";
    switch (dropdown_menu) {
        case "a":
            var code="motor_dc_1.setSpeed(2*" + value_speed + ");\nmotor_dc_1.run(FORWARD);\nmotor_dc_2.setSpeed(2*" + value_speed + ");\nmotor_dc_2.run(FORWARD);\n";
            break;
        case "d":
            var code="motor_dc_1.setSpeed(2*" + value_speed + ");\nmotor_dc_1.run(FORWARD);\nmotor_dc_2.setSpeed(2*" + value_speed + ");\nmotor_dc_2.run(BACKWARD);\n";
            break;
        case "g":
            code="motor_dc_1.setSpeed(2*" + value_speed + ");\nmotor_dc_1.run(BACKWARD);\nmotor_dc_2.setSpeed(2*" + value_speed + ");\nmotor_dc_2.run(FORWARD);\n";
            break
    }
    return code
};
//////////////
Blockly.Blocks["moteur_stop"]={init:function(){
        this.appendDummyInput().appendField(new Blockly.FieldImage(img_shield, 60, 60))
			.appendField(Blockly.Msg.mot_stop);
        this.setColour("#00929f");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.mot_stop_tooltip);
        this.setHelpUrl("http://tiptopboards.free.fr/arduino_forum/viewtopic.php?f=2&t=37")}
};
Blockly.Arduino["moteur_stop"]=function(block){
    return "motor_dc_1.run(RELEASE);\nmotor_dc_2.run(RELEASE);\n"
};
Blockly.Python["moteur_stop"]=function(block){
    return "motor_dc_1.run(RELEASE);\nmotor_dc_2.run(RELEASE);\n"
};
//////////////
Blockly.Blocks["dagu_rs027"]={init:function(){
        this.appendDummyInput().appendField(new Blockly.FieldImage("data:image/png;base64,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", 75, 50))
        .appendField(Blockly.Msg.moteur).appendField(new Blockly.FieldDropdown([[Blockly.Msg.right,"10"],[Blockly.Msg.left,"9"]]), "MOTEUR");
		this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.direction).appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN_av_ar), "ETAT");
        this.appendValueInput("Vitesse").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.vitesse);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#00929F");
        this.setTooltip(Blockly.Msg.moteurdagu_tooltiprs027);
        this.setHelpUrl("http://www.dagurobot.com/goods.php?id=142")}
};
Blockly.Arduino["dagu_rs027"]=function(block){
    var dropdown_moteur=block.getFieldValue("MOTEUR");
    var dropdown_mot=parseInt(dropdown_moteur) - 2;
    var dropdown_etat=block.getFieldValue("ETAT");
    var value_vitesse=Blockly.Arduino.valueToCode(block, "Vitesse");
    Blockly.Arduino.setups_["setup_output_" + dropdown_moteur]="pinMode(" + dropdown_moteur + ", OUTPUT);";
    Blockly.Arduino.setups_["setup_output_" + dropdown_mot]="pinMode(" + dropdown_mot + ", OUTPUT);";
    return "analogWrite(" + dropdown_moteur + "," + value_vitesse + ");\ndigitalWrite(" + dropdown_mot + "," + dropdown_etat + ");\n"
};
Blockly.Python["dagu_rs027"]=function(){return ""};
//////////////
Blockly.Blocks["moteur3v"]={init:function(){
		var card=window.localStorage.card;
        this.appendDummyInput().appendField(new Blockly.FieldImage("data:image/png;base64,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", 45, 45))
			.appendField(Blockly.Msg.moteur+Blockly.Msg.pin).appendField(new Blockly.FieldDropdown(profile[card].dropdownPWM), "pin");
        this.appendValueInput('speed').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.vitesse);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#00929F");
        this.setTooltip(Blockly.Msg.moteur_tooltip);
        this.setHelpUrl(Blockly.Msg.HELPURL)}
};
Blockly.Arduino["moteur3v"]=function(block){
    var dropdown_pin=block.getFieldValue("pin");
    var value_num=Blockly.Arduino.valueToCode(block, "speed", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_["setup_output" + dropdown_pin]="pinMode(" + dropdown_pin + ", OUTPUT);";
    return "analogWrite(" + dropdown_pin + ", " + value_num + ");\n";
};
Blockly.Python["moteur3v"]=function(){return ""};
//////////////
Blockly.Blocks["m_pap"]={init:function(){
    this.appendDummyInput().appendField(new Blockly.FieldImage("data:image/png;base64,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",62,45))
		.appendField(Blockly.Msg.m_pap);
    this.appendValueInput("pas").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.m_pap_step);
    this.appendValueInput("vit").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.vitesse);
    this.appendValueInput("ph1").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("phase 1");
    this.appendValueInput("ph2").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("phase 2");
    this.appendValueInput("ph3").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("phase 3");
    this.appendValueInput("ph4").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("phase 4");
    this.setColour("#00929F");
    this.setTooltip(Blockly.Msg.m_pap_tooltip);
    this.setHelpUrl(Blockly.Msg.HELPURL);}
};
Blockly.Arduino["m_pap"]=function(block){
    var vitesse=Blockly.Arduino.valueToCode(block, "vit", Blockly.Arduino.ORDER_ASSIGNMENT);
    var nb_pas=Blockly.Arduino.valueToCode(block, "pas", Blockly.Arduino.ORDER_ASSIGNMENT);
    var phase1=Blockly.Arduino.valueToCode(block, "ph1", Blockly.Arduino.ORDER_ASSIGNMENT);
    var phase2=Blockly.Arduino.valueToCode(block, "ph2", Blockly.Arduino.ORDER_ASSIGNMENT);
    var phase3=Blockly.Arduino.valueToCode(block, "ph3", Blockly.Arduino.ORDER_ASSIGNMENT);
    var phase4=Blockly.Arduino.valueToCode(block, "ph4", Blockly.Arduino.ORDER_ASSIGNMENT);
    Blockly.Arduino.includes_["stepper"]="#include <Stepper.h>";
    Blockly.Arduino.definitions_["stepper"]="Stepper moteurPAP(" + nb_pas + "," + phase1 + "," + phase2 + "," + phase3 + "," + phase4 + ");";
    Blockly.Arduino.setups_["stepper"]="moteurPAP.setSpeed("+vitesse+");";
    return ''
};
Blockly.Python["m_pap"]=function(block){
    var vitesse=Blockly.Python.valueToCode(block, "vit", Blockly.Python.ORDER_ASSIGNMENT);
    var nb_pas=Blockly.Python.valueToCode(block, "pas", Blockly.Python.ORDER_ASSIGNMENT);
    var phase1=Blockly.Python.valueToCode(block, "ph1", Blockly.Python.ORDER_ASSIGNMENT);
    var phase2=Blockly.Python.valueToCode(block, "ph2", Blockly.Python.ORDER_ASSIGNMENT);
    var phase3=Blockly.Python.valueToCode(block, "ph3", Blockly.Python.ORDER_ASSIGNMENT);
    var phase4=Blockly.Python.valueToCode(block, "ph4", Blockly.Python.ORDER_ASSIGNMENT);
    Blockly.Python.imports_["stepper"]="import ";
    Blockly.Python.definitions_["stepper"]="Stepper moteurPAP(" + nb_pas + "," + phase1 + "," + phase2 + "," + phase3 + "," + phase4 + ");";
    Blockly.Python.setups_["stepper"]="moteurPAP.setSpeed("+vitesse+");";
    return ''
};
//////////////
Blockly.Blocks["m_pap_step"]={init:function(){
        this.appendValueInput("step").setCheck("Number").appendField(Blockly.Msg.m_pap_step1);
		this.appendDummyInput().appendField(Blockly.Msg.m_pap_step);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#00929F");
        this.setTooltip(Blockly.Msg.m_pap_step_tooltip);
        this.setHelpUrl(Blockly.Msg.HELPURL)}
};
Blockly.Arduino['m_pap_step'] = function(block) {
	var m_step = Blockly.Arduino.valueToCode(block, 'step', Blockly.Arduino.ORDER_ASSIGNMENT);
	return 'moteurPAP.step('+m_step+');\n';
};
Blockly.Python['m_pap_step'] = function(block) {
	var m_step = Blockly.Python.valueToCode(block, 'step', Blockly.Python.ORDER_ASSIGNMENT);
	return 'moteurPAP.step('+m_step+');\n';
};
  /////////////
 /*  servo  */
/////////////
Blockly.Blocks["servo_move"]={init:function(){
        this.appendDummyInput().appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAUw0lEQVR42p1ZB1RUybblr/fXm5nnjMyYEZQoOUkQBAyYQAEBFRVJkkVQggiIYEAUURBRcpNFMpJpkNSANDlnAZGcc+jc9av70m3r+N5a79eqdbtu3XB277Pr1LlVbFQqFfysIP3wSCaTqYyC9MBCoZDgFUY3GQAK8x7KZiER8Gv9n7vol8gkEoneR6aSab/wnYzbaG14FbHCtMXGRPADJqaNTcssL6J3kunIEBAkeqUwMUEzgErpa2lytbF6FxZCWV8FJCLspD9EZqJhvhNpsJpj+wEK0oCXYQN5gGkMAYf8M9b/ipySyUSaTXohEvGATEp49iz+vkekuxtYmIOnRAIOeRzBzTwitlgwQYtktr97DQHERMOw+t0/+wEWAoZCJkJWAIF2nGqs87mkW+jmkmZnXeH3nNjbDQh4QCRS8XgqAz3rm5mv/RHWD777mWEy02UQBFJpp7BBIsCrdEwEMDcH+vuLH3vWujs0O1kX6Kolq6lmmpp0hIeBsVEAiSThSUQ8iURA2KU5lw6FVcRs/xkT4rLvdUBkiIlR6bBoeoIm5yYKnnmE6p5O0Tnx6dq5Wdcb4JX3qpdHh+PtclubZAvzrvg4sLpCuxO/Qfnmd+SdlJ9ri6EnIjLKGH+F+o0YRmUoidZPolFFpOmJsEyuza111W80PYbVEC9REiiQEyo/e3ruySM8Kqjd2a5a71K4hESS3hVKTQ0gbFAINGTMN9ANEjedyCpz5uCnW2VVNIn5MHL8/h4aW4BMAIsTWK9bdTfUp+7oEO/pk5yNR67rYM6fTDupmK+t2mZ2pVtHu+GUeoSImIewcGt0DMBtQMFRGHpgjO5NWBATYCWQqUGEXiYapEJamJ6l0GVOeyMRB9aXwfpii/eDNI1jhRdOBQruSj8iMnhLb9XbauLulYaLynlyQvlSkiUKSphTZ97LKbpxcGMeeIG1dSqRQGawRaESEGRsdEyAlRvEKolWCEw3MduMS3RksJOEgxIGhLWqyNDO4Nc9np4vhYRC5GQzdc69ktjntJUtVPSPLqMTG05GowYapQriCdx7kvdzFckpZB8+4bZfqPhtEIBhgoBn8cAmLCprTELAQUpYGSKRcbTKOP2GlYinENcBeX2jrTZO83S4uFCm6gmsvmH2Oa0gedlUHXWM2dUoSSGfLf9I4dnVpak0Zqzaqi6Zz7s9Ycf2BDHpRI0Lvnr6K739gMWJm7C+D4lkltFHJFPwmwzBBgXPqq1NiEQ8lbAOiMtr2KI2G8Psg4JBHNuCufflnzrTZedQYmYaeUI1/7xu9lHVd4I8mRL7Ko7z954/OK6pVC15AMW557W4ZJKlDfXzF0ATBoEBgA7reyg0wuhUkX+Q1A+nzDYd1tpAemzBtdPjty5h1Q++F9zp9/tvD7dsjTx8NPPytaQLesk62qlqJzJU5EqPyWKVxJoVBEc1letVD6LEeHwPq8wUlQMiIphvUwgbcx5AtMwsBAIOVjjsmce/AyVCTGTi58oyHQFOZwmOFN3DDbYXa4w18k+pRIqL3mX/w/KXXxw5dvtIScQcP5p58mSeyhGMihLmkHipnEDnxePVemoRJ1RTnO6C5WUkgDFHHhuDpE1LiHl6RYDCoYdHjszGpiuh2Mk4sLbg73Cz9h0KzAyDqSEw0A2aaxq9XbKvqeVoq8TKH3i+5w+3X/7h8o9fH23d5b9fKFrqUIqi0jvZgzFyomWGuhhbi+JHHtSZaQqgMlTLYAuBxbTKhEVHttmJcIaETeQGGAwBBd9WXop5nwrwoL150NX9pYP9Y3RqXldOFubZ/VSDc+hrZ3O1VGPkJF9ycz/cxem+k+P+rr1PuLgDxUQSTqqEHT9Uam+5VJwLiOsw9DFGEg0PG9M8szJw0EMUgUgPVZuXvpMXbg3OIdnRCXFvM2xvBvHLWsuoeUgqW0tKX76sdRPlHdKQkNQZj2oK9Kn1dsU4W6de1Qw+IvVGmj9Cki9RUQxz7XzkKcUokwtgYhAQN4hkwrdwiLAFzSK+g0c8foMBAnbCVA5QyACPI8NrDEAUPAH20YLwaP/MTTN3FWXLg8oOWmYoOY3H/DJGciqm6pr2J48bWBnYln8omG3v6inI7kqMXMhLpBQljgY/xt40KDLU6n1wp+Plw5myXLA2B/DrJArxR8kjYqdxQsfEVBI0TiGBxTmY0sGxAmiocRA9IAEwPE318E1RPOeuYRKkYxwgr2ojcfjiNSuXgwpqvAKycgpnTp8zOqt744L+nVdvMiZGVvHj000f0priUaAVu1pWkOp4M/6GxUBmKpgcgdMD1AMyEpF4CeXPRmApEBbLuCNNzxKd776XP2QfEVW/DiM5GRAAmFkGb6NLlNVv6Jr76t9JlD/vzSdneETN7KlfUFJa6jMfXzNzS2FxqQPih+RVr5zRc9K4ds/MzudDZhV+ntRT1Zji93rgY1FfblaEk8P7Z0/66mvwq0tEulFmDIDI2CAUZkWcSK94OIGXlH/hE3HdwfWQV8j3vldH91eASunWMo85bRDk6Z9t6xooLHde/vhlU2vX6PiMD7kF3Z/7v3wdmpyeKsOU2zk4XjE0O3xMQ/GYro6Bo8HNlzZ3QooLez7lYnPfhLenpua8eB790KMqK315cpyE20B4osuX7kQkPrGCo+MjQFj1LYtefsPGtoPcorE84mHSx18pagaqGiRLq73gP3iJT0T5pNoFefkj2ucv+vkH5BUWlVVWjYyN4mBSAMiz8zP1jQ0v/V6f170qrXBWWfPmFeuX162euzj5v3n0ujg2JSswJOttcEly0uRgP2F9DQlGSASgjUQmSRsbazjcOqx0CeHg/P11jOLypO6m+wC/XCynRLjw0TgZtXjJYwHCCk4i0lrnLxipa+hAl2Vl5YSFRdx2sEcXFc7Mza6uri4tLY2MfJ2ZmRkaGqqo/PTyVfDRUxfOaJlcMXG+ZnrfzNrnhqVX6LPwiozCqjz0xJeB9eUlKJwfYSFomJUOcYNMAnXNc+JHn//K+5RHJVVUrYTnaBaPcrywyptTFwIUjpsqHtU0NLF68zb03r37z5+/CA8PLyr+2NnZOTs7Cx9fXFycnp6GHMzPz/f3DyYlphkYmKtp6WtesdE29DAyf2pqcNfnfkATtnlucnZtZRXCYow22vj7BovZgLRBTLPTVAlZ651SfoeMOmWMBiWufhbQrOY/myd1MU1a47WlS4L7k1jb2w/v3vU0NjLLz0cPDw+3tLTU1NTBOjw8uri4DHVM+4IEAIcjTE5O19Q2ej19cVbr8vlLZqfPGQe8Tn/9Ji02Ln9xkbS6SrPODOY0ybMCQoQFYcEPhalp4HC/SOZSoaRht4TJwPYzJRJGdab+c0/SqUFoUljmeGhiS2h0cRjqw6dPzS3NHRUVVRgMZmDgS1dXT3V1TWtr+8zULNQFjHdIUr6ysjY4OFT1qTYyMuHkGf1Tmg5PX+U73Qt5E5xMgqGRES+/G4k4CIVFZHgyWKKA+2/bxC/m8F4o5tYpOOvR9SCTFPoJxNeB2EoQ9XElvnAmIqkjJLIsLCKzsPBTU2NbTTW2vLSss71jbGS8oa6xFtswNDgyMzW/srQOKAAee7v7sNUN5WWNSel1zl65ehYoM9ug6PhSMh0WMqN80xatQqUjnOGJJAoYnQHvC8ZM3Ar1H9a7vVsOLAFvK0B0KwisJAcULKLKNuIwuNiixddxXTGpPdFJteHReVk5ZQ31rW0t7ZiyilpsXV/P58b6lrqaxqaG1omx6dnphdaWrtzc4qiYD++SMO8zOg1tE529Ma5eWRk5LSQqoMVLKC88InmaEyFDtIKjl3Uc+JDXKyp780/u67ceY+JK56uGwRgAhf1Az7f6SSExpIQYVbIaU7oa+3E+PHM4Jm80q2o+LrM9CJWf8B5dWVHX3tpRW1XTWNPwtX+4pb4VnVPQ3dYF8aWk5MYkoDPy2rxeFGpdfXXdLtHt6Uf/iE9VTVMQFp6w9s2JFDwb9NkmoPV1OM3V1Pc/8S329Gnkk/Awup3XPAKmAOjDAcwksIkfP+vd+jhrI7YKxFfgU7H4d6VLodkjqNzRmLzhmIz24Mii8MjM3NzyutrmjrbOnvbu8o9lnS0d5aWVCQmQFWxydqv1nSiNqwFmDhm3PNC+4Y2R6a3Nn5dgkMThVzdzEzIOgYWn1431dRwMoUUlLX5vKl8G9T16Pqh8JsY7eLKgHaDqwO3kSb3Q8aOPuhWd6+2iZpIbQVodJa58FYWeDs+dCE4bjMgcCEluDYyuCIkqSkwpLC2pbG5saW9ty87KT8soQpf1hsRgdQ38LhoH2dz5YOeOdnlRE/CuNzarbXCaQGBInjbpIbDg6IVU0XS+tkahgrr6Ab+AQo/HFQ5uTdr6xUJykUoX0RZB03pBYye8+w+5dUvatSg7tVgGDoSXgygMzaGR6IWw7MmgD0Oo7K+oD30RyQ1hsej3KXkVlVh0YUlVTXtLz8LTV2gtfX9j23hLxwyHB8WuPtVufg2B73uTC9pmV6k4EpWZwjBh4ZBYtb4OaSSOji6GRxSFhDe7PGxUu5iveLpwp2jMwasVGp5flZw6ZOxaeS5XChnVKdp3nHvQ6ZOJi6kAEejFiPyZyMKZ6IIJVFZ/VHpHTEZ9clZVd9/I6MRibcu0g0f8VbNQM7sks9vJNq55zs9qHb2xnq8b3sY152M6N0gAT6T5bjOlo3/OQCeusdSN8bGZWmx/aeloQuqU473mI6dzBOXTd0tGHzGpkr2WL6ibse9szh51NO9lrJxt62nnRveEhfASahh6KSx3KjzzS3RWdzK6F9u5PLcBiBQA847EjJpr5i+uWYRCjVveybrtWWbvVXPrUeXTwAbPZ5lNHaMw4uIIG0TSBjI7Ix9/CFs0J9LktbrW0/W5q+NLc8PXnA9twUFN5zTfyR6K2sPzlE/a19IV/TJ+XM2qgk8th/NknsCFikO3OhXtG80CRqIhZ/kzUVm9lc1TMBWDc/XUHOjrW4ZRfgMPmjsmvf3zDG2iTRyzTZzQ1x0LzBwy73rkuN6P7embgFk8kk0RifSMHIGFpwdQBBzUXGd7V1UFtra6NSe1PCaswuJ66iHZV/x8D/UNM+pawTQeuL2Z2CUbzqOSwnU0nU+vkobMslLDvhSVPV/VSplaBjgKKKhaUj7tJix2NSSoiLa+RAHzqyAqueuSWczpS+EntPxPnH2kdOSmhbnX1NQK8pXFzLeQz9LNNJCeItOOE2OT+bmFJQWYD+8LEqLK7cwTxIVcFeSfq54KDI7qt3UvllRD7VMI2Sf1lksmbP+xZLELxQpGGH5VlPRRn/Ts5a+T4O7Tqt2HfOV1UnhE3H77l5a5GWpmmp7cUkBQROMBUQvJg1YHBC+cVbd+5R/zuW8I8sKExfiWJrKxLoTAO0ZGxtD5H9HZxUnRmZYGnrIiliK8N6XE70nLeO4XtN7KaSJzKoRDwpt9r/OeA094FSKFT6ZKaOUIH4/l5Hc+KP9QRT1IUCXwsEH5XoWY33c77tvvsJvDSl39WU31XPCbbLUzTlIShtz7Tl255IgKSyv5WD06Mgl9RaCtXxJZ19XYaMsk5M01CEjY1NRMRfmniKBYa+M7AnuP8O7RFeW3ETngKCp8h4/vxl+7ru0XtP+Tw2rLNvO9vPd4pQMEFFFiJ5JFjkRy8t05IO6hZpivrJfHtt3tnzud/9ptuWevJRfvXW4eJ0kRGwVpc3NjHzkp7esGjnFRacUfK7s6++bmFujfB99WhBnLbjBYUb4tAkLC4PyFKcUGPI+wue6pKGUowKXHw2HIw2ksKWK3n9N4x3Z9dvYrHBymvAKO3EIefBI+okrhkirB+wWchKUeiqtG/w/H/T84H3ALPmL/y+Cvnca/brfbxukiKuJqfDXI/kagnbVn+NuYj4Wlzc2t4+OTcGphYmJd8P5hkZK2CAjvg7N9f9dQcd6n0IAkS+NHZ47YyYmYivEYivCYSgrdEthvsYNdm2P31b37LPby3N5/wIVX0JVP0EFQ3I1XzPvXnXe4Jf15xLz/9fvlf269InoiQlo9nvvAPVOTWBenUB+vkMz0fDgBDA0Nw1SRlp3/rLB9vxVAZi5PwjRncX5lZGiqCdubHFPyyAVloe+tr/3ksuZzDVVPWTHjXewnt7Of28thsHevBee+m7z8DsJi7twCbr+xW/+6/dYvf1lt2ar3v79f4ld+e8IAfUon0dn146OHcbGRqbXVjUODX+fm5mg5MGNFnunBH9lCCtPH9DEAmaPg1kgzkys9HSNlRS2pCRhUUMHje9Hm+h7HFU3271LbwX6Wi+M6D7c9n4CroLAnN6/z1r/M/sV+fes2wy3s2lvYL7P9ZqZ8LuXukwEz2yzfF8nlJVUwGYSJNZzr4MBnmvth14KNdT33uz0VKgVW5BkauA3S6hJhamylr2sCW9GV8f7jE/dgA11nUT7dXdu0BQXsJSSeHBB6sJfLnoPzxq5dhuzs2n/8obVth/EebvdtXPe5hO7JKLtEx+QNfB6cnJxcWVmBImZd8WbdFfgJW/+OOfh/SPTNAPjtND+zDJ3bUN0RF57lZOt3WNZ0H8dlWRkvQeGH0InCond3bNf6c8vJXX/q7NltzSXgyyf+Uv7wPSsrv9KS+omJiYWFBeg+hCpWx/1c8j+wxVoY+DYXf+GYgMpbmF353D1WlFf/+mWa7nlPPm4zPt5b/AccoNr4ubSPHrKWE7Xeu9OST9RfRMZfVdXV6bZPe1sfdB+kCiodiZT/biPsP7H1950EZqEHOdLK8sbk+FJL00haUq2dTYjSIRslWWs9rUdWRi9Mr/oY6vqeVPESEHkqo/hKUdbG0zVwdmp5YZ6mKvpCC4m5lfLfwfq715lbCoyVXzLU3Pw8of/zXGVZz7vokqTYitz0ppzkhsTICn+vdBf79xZWWWfOvlJRuB7xJmlpYXVpcR7xIIOtzU2//w9b/w4oMhoIeOrqCnFmZm1sZHF0eHF8dHns6/Jg71wDdjA7vTE5qS0stPyN/7v66sbF+YW1tRVaTkAkMkMD+NnO4X8NixUfowGgFQKRuoEjra0Slpc2lpfwi/P4uamNr4NLnW0LDXXD9Z9avw4Mwq9nZN0F0dZ/gPV/OyA0WsgX/QcAAAAASUVORK5CYII=", 50, 50)).appendField(Blockly.Msg.ARDUINO_SERVO_MOVE_INPUT1);
        this.appendValueInput("DEGREE").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ARDUINO_SERVO_MOVE_DEGREE);
        this.appendValueInput("PIN").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.pin);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#00929F");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setTooltip(Blockly.Msg.ARDUINO_SERVO_MOVE_TOOLTIP)}
};
Blockly.Arduino["servo_move"]=function(block){
    var value_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    var value_degree=Blockly.Arduino.valueToCode(block, "DEGREE", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.includes_["define_servo"]="#include <Servo.h>";
    Blockly.Arduino.definitions_["var_servo" + value_pin]="Servo servo_" + value_pin + ";";
    Blockly.Arduino.setups_["setup_servo_" + value_pin]="servo_" + value_pin + ".attach(" + value_pin + ");";
    return "servo_" + value_pin + ".write(" + value_degree + ");\n"
};
Blockly.Python["servo_move"]=function(block){
	var carte = localStorage.getItem('card')
	var cpu = profile[carte].cpu
    var value_pin = Blockly.Python.valueToCode(block, "PIN", Blockly.Python.ORDER_ATOMIC);
    var value_degree = Blockly.Python.valueToCode(block, "DEGREE", Blockly.Python.ORDER_ATOMIC);
	var angle = 60+parseInt(value_degree);
	if ( cpu == "cortexM0" ) {
		Blockly.Python.definitions_["pin"+value_pin] = "pin" + value_pin + ".set_analog_period(20)";
		return "pin" + value_pin + ".write_analog(" + angle + ")\n"
	} else {
		Blockly.Python.imports_["pin"] = "from machine import Pin";
		Blockly.Python.imports_["pwm"] = "from machine import PWM";
		Blockly.Python.definitions_["pin_"+value_pin]="servo_" + value_pin + " = PWM(Pin("+value_pin+"), freq=50, duty 75)";
		return "servo_" + value_pin + ".duty(30+(" + value_degree + "/2))\n"
	}
};
//////////////
Blockly.Blocks["servo_rot_continue_param"]={init:function(){
        this.appendDummyInput().appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAvCAIAAADRtytBAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAXYUlEQVR42sVaB3hUVdrOrkqTkIRQQhJISG8kmUxmMn0yNTPpfWYyvaQZMLRQpUoQZEFFXUGki0iRtsuKy4YiIoqr/6qA8INUKQoSCJlMn/nfOxfGCLrr6v7Pnpzn5M7ckvOe9/ve7/vOTZDvv9S85I/X7fW6vB4fBjSb097lcpCnfQ4XfrttPU6H/Y7X4/B4fC6Xx+N0+Rwe3OVB8/o8xF3Exd4fnhz0X4PkJSF53F43JodfLrcLs/c43e+9+97SGXOWj5+8f9NaZ0+n3W3vcTq9wORyO4kLPX4g/tXw+qF4fvTk/x4kn9e/uF7M0unzudweIHLfu7fq+WVLFy7ev+Wdlc3jmuITp9SW37l1jZi222dze+yA7/G5QQ9gEd33H2OJXB7vL2+++3/Z++Amj386MCGXx93jddscDp/b/d7atc9MeNrtAjj3zS+/2Dt+oiYkvLW8+Mataze7O8mJO2x2u8tp97geoPLPxPPbIAXwPPq9x98ePUUupDewnDj2EJ9gSy6Ho9tuczmcjktXFmg1B/Zuh4d8d6/H4XFbP/9ijVnfUsCb32CcVFw036g9tn8PGLXa71o9Dtgd+PKQNP0WSL3xBDhw+1vvy/CxF0eeByzBaggX8DuDx+V09b7lesfheeW157/41NPjst212+52dry+aqKuemOD6R2Nfsf48eOzUjhD+i1bOM3l67Y77kEp3PfZ9nl/ieH9EtPCvB0Oh9PpJG/p7u7+5JNPtm/f3tnZ6XK5SFQe+DME4H53+YUASuC222y45evTp/du2rz15eVnPt53bcObz1Vq7ty9dcfusH/37de7dzzN5H544MDp5cvH9xswVi46uWXVQhaVHxS0YNY4t8/uumd1kErhuW/P5ISDfg7MT5pWAGRvWoDqxIkTGzdunDBhglKprKmpWbZsmdVqhQX6URGa5vdnDwHJQwiX2+HEg1avXmMoK20vqdKMil/darq15o1mKm3zW2vu2Lu6b14+0jptVkWN3em6/s2JPVUV+UFBu3a8eXbn1hVpFByv274Cc3H1OPxT8vysPPQG85Omhdnb7XbyGsztwoULmzdvbmtr0+l0QKJSqUwmk9lsrq2tXbp0Ka7032Kz2a0O6LDD5nE7XRBpD+zN+86Wt2fPfubba5dsF89/d+zj6x/97cSypc3pObKwYfVM5uU/bz9cXPeHpnE2RCK39dxbq+cPia6m0VzuzgMvLJgXEVMYM+LC9dMeJ2EjvRzY+89Yuu8ExEp7cBvABC64evXq7t2758yZYzQaMXuNRoMDIMGo1+t1Oq3FYgHCFStWBGySXAN7T8/3nd9dPn/m2qmTjRUVO9auPbBv1/5dWz4+fPDsiQ8uvbHq6diUpbLiWRnZ55a1r2XzV85rx1Scdvfdb84fUelKgoL27NryvfX6NpNeG/S756Y8hYfabcTCkZD8zuoJ+jmfIQwEYup0Bgzs9u3bHR0dS5YsaWhoAJK6ujqDwWC2WDBq/U2n0+sNBr2/GU0mXLBly9b3O/62eO7caY0NpqLCCiZTkpygplH+Z+2Gpxnc/P7BhX36F/Xtl9unX3HW6K41K2ZGRE9VV3b+ZceFPy58hpMzwWSxW7u6XJ4et+vi+jVzgkNaZIWYyT86dr2Ynl05OPTSpVPkPHux5Al6lBZcAU4wkkju3bv78ccfr1ixsqVlXE21SqGsMxhNlvoGDDq9UaszYNQbTAajGWPg2GAwAZbZZGnTGoQDB+kff2x+eNirCYlrUmN3KopOLFryVB79T9Mnnp877/NFiz5btHznggVnN72+kULPGhT8QnvbhXXLnuNQ+ZExcxQKm8Pa7fZ8f+rUX6QyfmjfC6dOWa33DrW01jz2u3WvLsMM7TYHbNmvq0Ra9QNLAbgBpz958uTq1avHjh0LThQKlV5nqrc0m8yNBmO90VSPUW+w6A0EErKTqMgDI4lQa2irb145dcquuTOOvrr075vXfN2xy/r5h588/4dKypjTl09aHbdtni5COHzuGxf/sbu8Uvb7fsnJw89Pm70gMWk8nWHuG/zshCbMx3mv64uFi2qfeGL1Ky/h44VN6+aMjJmkqiUg2R1uF+n9hMYGkb4V4ATt4sWL27Ztmz59Oty9qqpKparDYptNDUZDvUHfYDQ2GMiOb0w4sJAwwE+gk9+AQBigVqlu1uqPH+ggH37H4/r0k+Orp05VZFMP7XkPNt0N47a7nXZnj/X7L55dNKHvYGb0sFPPzJ89LPopAeuAVl0UFPTn3Vtw7+U9++ZFJY7T1IKBS0f3bcphWVhMu7sHqZQ/TfT501gPAYkUjRs3buzbtw9OT8oX5BjuDkfHtAx6M/AYDY1GQ5PJ2Gg0NuoNDXogNGK0kBgwarR60g4xkl2t1asNBkWd2qA3dew/9M723eOfmlQmK2FLObx8xrinWmAvAINsFIp4z+c5e/TwarZYFhT09uTGxbFxFUzK+e1r/5hNL6ak3u280X3y9MZ8qZlNt3lc1748upMr1mVn3O25RSSABCYyJfEGEWtkt4OWxkbC6cEMIEGL4eLweIzAY9BbDPp6k7HJaGg2GZsx6vWNOl2DVluv1YENfQADCYlEVafWKlVqlUqtrNOW1ygVWm1FNXSYKmSxWmdMalLXZYQPfv/9fVh+m83qsju7PK4u252Di5+fEDzkZY1kO5fNHBh8/tODny9+vjk2cc9br/nufbtfVWdKTrp6++adr/7+jkRWmRp34/ZFf4hx+a3XL+IwOUBqb18I77fAT/QWE4yKwGA0GNANkAIogdFIcGIwEN1PUYNOX6/RmDRakGNQaww40OqIDq7UGp2qTgMhqaqura6sUdQSolKrVNU3NtG4tJdeeQEwVkyZUzU8ujQl8daN61hle48NEdjp8V09d/a1murVgrzDGgU1KGjDK8u7//HpSlb+TEu1w3nn72MnG5PjT5873X3h9PYaVcWoiK/PfwZycLNfxWFu3iDIAA7/+te/TZo4Zcb02RZzM9nN5gaiWyyIOIAEn9HpLVqdGSN5gO7HQ3RAAl11ar1SRSCpqVVWA4iCQIKDaogLIClUhUUlBYWSDZvWr1q5ylRVO6G4mBUdqSgrv3H9OpEWerx3rXarx33l+AfbGrRHxzY0Bw+q4rJ83139U13DpJpSq+3WsQlTzVnpF6583f3NuffHTZ5Cpx/s2InYiZyPMDyPg/AlUARIJ06eeunFVyZPmjZ92iyzqYmEZLEQkExmSwASCUajNak1xgcdBqZX1ekUSk1NLWhRgBlAAgB08gDfkEZYWlZRU1stFAtZPH6duq6uuvQpo668qEQsEh06fCgQzY9/dHjJ1KZjSxas5Qtp/Z94oW1Cm7Ri+/p1rpuXd+oMrQWSbnv37W/OfTZr4ZsN45Y8Pw+39DgQcFGmOO77En59/fX5t9/e9uILr0xpmzl50gyjocFCsFSPZkIwNRJEQQ/QAQlI4PCqOr1Cqa1VqNErqxToVdVKdJIfYKiorC4qLi0pLccolhQUyAoVKnWBVFZUVMxgc7giYYWiOiNrDH6yKRRKDkWtVD4zfvJYPLaq4ujxQ3cuntq/uH0yTg0cuPr1lZj3//557wwWd9uq13B899bVz15+/fi6LU2NliWLnrty5bKHqCHtRPZAJgfffvvdpjff3rZ158L2JVOnzJowvg26QLBEWN39UEPyAzBKlb5WAU7U1TWgRUXiAUtKFagASBVmn0vLE4okuAtESQCjuJSfL2SzeSJxQfCg0OiRo6qrIUW6XBozLiG5WqEoKy0d8NhjFkXtX3du6+r83kfUuY5vL57Z9+yCyXyBTiz8Y/uCaRrjy/NmWx3Ez5GD7y2bONFQWllaXJKbnb3mjdeJAOV4AAksdXXd2/HOrjc3vr11y47Zs56dNvWZcWPHE7HIiHwHqYBZqzViBrX3YRCE1NTCruA2MDAl9AC0lJZX8PgCai6dRssDOdC6kpKyyqoaBpMNeLnEl2UCsZRGZ8tkRfKC4spyhU5nqVVqyiqq8YfYeexCacHyV5c5HD1OJ1YcVuTuuXLly+07N8yc/eKkKR179/a4ehBAr126JpcV8FlssUgK2qUicXVV5e3O791E6u8iIJFJw1/2vrd2zca3N28HV1OnzIRTEbmCkYiwOpCj1CEbInqtktAxv3URGq1W1yhqRBIxlZabS88VikRyeRGHw6NSaTk5uVwuHyBZbG6fvv3T0sdA3Pn5Eh5fUlpWUyAvBdXoWq157LiJZstTDU1PK1TaggLpkiXPk+kLkct7nV6X3dfTQ7qZzd5j70Gp7pg2YzZfJBeK5QKBWCgUcTicgwcP+JMjK5EQARLGI0c+BKS3Nm3d/Na2dWvfnNI2A2qhUmrrVDqlQkN2RS08B+mEhtTo4pIyJpsNMGwut6qmukAuS8tIHzEiKiMjs7CwuLm5BWlUUVGZUCwTS+TIpPj5YgaTx2ILxJLCouIKmbyUxxdjlBeWFZdUYlQqtWazhcvlXbt2DU5OBBiPw+Gxez0O2GG320akGTaiunn/yLHcPA7xZLEUzikSiSZPnkgUDPaeoAeFmvfzz79c/cZ64EEHUa++snLixCmgC0gAjMSmUSOSmsAS1p5GZ3B5+UUlJVA1vkCQmJTUb0D/3z/2GJvNHTeuFZaWny8cNSq2tKwaMOCH9Q0tXL6IweTmMbiUnDyMTBYfncXO5/JEHK4Q8PIFUo3aqNUgcNQfP34cs3K4nEQMhcB77m9sENtjTvfdLqu5oSVfKIVty+WFaCKR4PjxjwgR95d3RIJ37tyF11eu2fTmFoBpmzwd0TafL9brzPArkAPzU9fpS0sqORw+JSdXWiCHoAlFUmouLSx8MPqIqMi+/ftFRI5gMtmwuszM7LCw8BEjolvGTuRwxRC4/PyC1NRsKo2VS2MBBpsjIGGgS6RFIrGc6CJ5Pl9WUaZoahx79uxZv4g5kcF579f3RP0KgE7/psX7Rz/h8EVlZRWwiJKSEkCaOXM6UdU+2NaBQnRv3PDWnNnzlUp1Hp2VmJg6KDhsSPhwONLYlvFSSSGTwU1KTIuLT9RodHAP+IZWa6isqkrPyMjOocQnJv7+8cdDwsIoFCokG4Bp9Dy5vFgglOXmwtTFWVl5mZl0BoMHMOCNTmczmTzgAUVCkUxaUAzjlEiKCyTlUkmxRq2/cuUK4TxOh91F5Nl+mh5sxHg8DidSKHfL2Nb8fAEMz9+KgKqjY38QWSaRmfhXX30F1U5MxKQ1TU1Nw4YNCw0Ny6OzeVxh5pgcRh4nl8qIjh4VH58YERHJYnHmzJlnMtcDG3hLTcuIjBqZx2DBzThcmBMMjFXf0FRWXp1DZWZl07IoNMKRWDw8hw2TY3Bzc/LiRiclJqdzeaALticgXEtWJi8slcnkc+fOPnPmlPvBtsz9naYHRR25X3Do0CGBQACry82FkmenpqYuWrQoKFDGkkX1hg0bZs2ahYM9e/ZkU7JDQkJiYxIwAw5MhcXPSKcMHjx01KiYlJQ0uAroAiSoMz2PmZScKoC3yovgYMMjIpH7gKvGphYoQfTIuGwKHXjymDwKhZ5DoQsFUixTQnzK44/3i4yKARhKDj2XxoCPCUXyktLK4uKSmpqqw4eJkoQsFEgkD1XcUEWk2tHR0ZWVlXPnzv3000+tVusPkMhkD065Zs2aN954Y9KkSQkJCUOGDA0fPBwrSkIaPiwqeGAI8CQmJvP5AtR5jY3NkGwmi8Pm8LIp1BwqLWJE1BN9+iH3AVFcniAzKzctPZvAw+AiIg0dGhkzKl6QLwGwvn2eHDUqjsMTsNn5NDorh5qXmprJYPJBLHKNZwjHwNSdgTqcrFYD8DBhHB4+fHjXrl1AEtg//AESaXsdHR1UKhUM8ni8wYMH9+3T98kBIdScPEyCTmMFDwxLSEiGyQFVVhZFo9ZZ6htFYinwDBk6PCY2DkaIHp+QBD3Mys7JzKJkjKEACZSNmsscNjy6zxMDoiNjyDWCMXM4+dDAJweGAk8unTk6Ljkri14gK4bhGfTa27dvYvJ2Iub+RHuociVF/4ftlICUw53KyspglzExMVFRUfHx8dHRsdlZuYBEy2UOHRJBpdIBiU5nlJSUNjU1L2h/rkBeCBgjR8WCIqQOgAdIoAiQEhKTYUtQNkBKTcsaHjEyakTMKNhhFjU1JQNrJBBIhg6PCgp6LCExlZJDix45GpcVFpWWIhhXV548+TkZc3uz9BAwl78FLri/9xA4hxM3b95EMZuVlZWRkQE8sbGjoQQINSKRhMFgJSWl5OUx0dHKykrNZtOC9gWoGiMjI7lcLkQnOSUFwNIzMgESY3JKOvQaVicQSgVCCZEu5eRlZ2aFhz5p0te1jmtl5HFzKHkpyWMSoaWjk0dEjExNTYOCyWSytra2a9eu9tq1/dErl3+yGfwDJDIzglG2tLSApSVLlsyePTs8PHz48BEAIxCI2GwOwCDtwUij0QsLZUhoX3rpxdbWVgRvNk5zOCGhoSmp6VA8eBRQwbvYnHx4EYPJAWk0Oj07Oyc9LYVJG/Pi0vaVK18rKCgSCWQScSGdxhkaHhkWNiw5OQVBRigU7t27tzdFgbcHven6ya3vH0EitWXHjh1bt27FuVWrViUlJQESkgDoG4cNCeYAEiIpUn65vMBg0K1fv27x4sXJyckjR44EKshJ7Oh4ONLouITUtHQoIVxFICwYHZcIzejbr39yagqbw9Rpal968XkUYvEJiTEx8bEx8eAnZFB4WOgQrCYsHyx98MEHgWQtAOMXsUQ6EqkVpO0dOXIEFM2cORMxCjoxZMiw0aPjYXjAQ3Z8BAaJRMzjsauqKiUSSWNj47Fjx3BLTEws/AepNzq0wX/AQ5qTkprxRJ/+oYPDaQwGm4vQlCcUCFAn9e0/YMCAgcHBCNHhGCMjo0UioVQqbWho6OrqCuwM/xwhP8sSeRsJCQcffvhhenp6XFwcjUaDm65atXrXrj01NQpk1unpY+BOkG+E/aSkxMrKcjB5+fJlorxxufR6fUpKKuQhemQs+IFUQCSQK+QLCmh0ZviQYdk5OSy+ICIyNioyjssR5+SyBoUOCQ0djB4SEgaGUQkWFRHigAUKRKTexvaLIAVIDGzoob388svTpk2D5Hd3d/tPeadOnZaQkKhUqtav33Dr1vdnzpw5fvzjwPtEu7/duH49Kys7LSMjLT1jeEQUkwU8fEAiEzlUe/hm6LBI6Fu/vsFUKoPB4A4dHhESEhwSMggxPS0tvaiwGF7U3t5OPvPnrO5fQ+ptneS2XuARoM5ms2FEto+VI9OQwNnApnkg+YAfZmSOISqO3DxqLlJ1IRQPIo4yCTqOMFpZUdPSMlatRl0kz8zMQs4VHh4aFhaakpIikcikEjn09vr16w/p8r8N6SFXI/fEyUa+uSAn7SM23GzkKxay9f6rpLqgVVZXxSUkSAsKhaICFptPJqYARs/j5FAZPJ4AAa2oqAQ+GRsbFxExAi0zM1MmK5BIpLCCU6dOkSb36/D4/vn7pYdC9UOJVuB7X68tdcSAjoMH2hcujIoehbQNNR+0ARSRUp4xJgfJB2QaPjlmTFZCQlJScgqDyUTeCXszGPQXL14kyX80tv56w+t9v/enXjA/+k0AJ2GHLsL87A4HavLRcUkisQwKzhdIUT4gfwVdeXlsVH9kcIPMyGRFhfJSyCmC4aVL5x/l59+l6KdZ8v47rfcqkKbY3UO80jzywdEpU6dXVSuQN4hEMmCTSOSoiFCuSaUyubwIialYLOFx+eXlVWvXrrPbbTBeu936aCT9TYb3K9qjtkrmyKSQ7N69GwZWXFyK5APBmsfLR0ELpWOxWLA0tVqNGADh8fllqderoH+RH/z/QuoNxvcgEpDzs/mV/fz5C+jHjn3U2joBlcj8+c8uX74c9cu7777b2dlJ3o4lCCRyv5qc/ySkR7EF5KT3P0PcvXvXau1+6PpARfBjWn4lmP8wpJ/MwfyoELhQftr8xZzD6X8HTr44DcSG32Jmj7b/A7r8Y2l1aSBNAAAAAElFTkSuQmCC", 70, 47)).appendField(Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TEXT);
        this.appendValueInput("SPEED").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.vitesse+"[0-180]");
        this.appendValueInput("PIN").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.pin);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#00929F");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setTooltip(Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TOOLTIP)}
};
Blockly.Arduino["servo_rot_continue_param"]=function(block){
    var value_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    var value_degree=Blockly.Arduino.valueToCode(block, "SPEED", Blockly.Arduino.ORDER_ATOMIC);
    //var dropdown_etat=block.getFieldValue("ETAT");
    //if (dropdown_etat == "FORWARD") var value_degree=90 + parseInt(degree);
    //if (dropdown_etat == "BACKWARD") var value_degree=90 - parseInt(degree);
    Blockly.Arduino.includes_["define_servo"]="#include <Servo.h>";
    Blockly.Arduino.definitions_["var_servo" + value_pin]="Servo servo_" + value_pin + ";";
    Blockly.Arduino.setups_["setup_servo_" + value_pin]="servo_" + value_pin + ".attach(" + value_pin + ");";
    return "servo_" + value_pin + ".write(" + value_degree + ");\n"
};
Blockly.Python["servo_rot_continue_param"]=function(block){
	var carte = localStorage.getItem('card')
	var cpu = profile[carte].cpu
    var value_pin=Blockly.Python.valueToCode(block, "PIN", Blockly.Python.ORDER_ATOMIC);
    var degree=Blockly.Python.valueToCode(block, "SPEED", Blockly.Python.ORDER_ATOMIC);
    var dropdown_etat=block.getFieldValue("ETAT");
    if (dropdown_etat == "FORWARD") var value_degree=90 + parseInt(degree);
    if (dropdown_etat == "BACKWARD") var value_degree=90 - parseInt(degree);
	if ( cpu == "cortexM0" ) {
		var angle = 60+parseInt(value_degree)
		Blockly.Python.definitions_["pin"+value_pin] = "pin" + value_pin + ".set_analog_period(20)";
		return "pin" + value_pin + ".write_analog(" + angle + ")\n"
	} else {
		Blockly.Python.imports_["define_servo"]="#include <Servo.h>";
		Blockly.Python.definitions_["var_servo" + value_pin]="Servo servo_" + value_pin + ";";
		Blockly.Python.setups_["setup_servo_" + value_pin]="servo_" + value_pin + ".attach(" + value_pin + ");";
		return "servo_" + value_pin + ".write(" + value_degree + ");\n"
	}
    
};
  ///////////////
 /*  matrice  */
///////////////
Blockly.Blocks["matrice8x8_symbole"]={init:function(){
    this.appendDummyInput().appendField(Blockly.Msg.matrice8x8_symbole).appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_GET_ITEM), "VAR");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("01010101"), "L1");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("10101010"), "L2");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("01010101"), "L3");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("10101010"), "L4");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("01010101"), "L5");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("10101010"), "L6");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("01010101"), "L7");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("10101010"), "L8");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setHelpUrl(Blockly.Msg.matrice8x8_helpurl);
    this.setColour("#00929F");
    this.setTooltip(Blockly.Msg.matrice8x8_symbole_tooltip);
	this.contextMenuMsg_=Blockly.Msg.matrice_create_aff},
	contextMenuType_:"matrice8x8_aff",
	customContextMenu:Blockly.Blocks["variables_get"].customContextMenu,
	getVarType:function(varName){return Blockly.Types.getChildBlockType(this)},
    renameVar: function(oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue("VAR"))) this.setFieldValue(newName, "VAR")}
};
Blockly.Arduino["matrice8x8_symbole"]=function(block){
    var vname=Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var l1=block.getFieldValue("L1");
    var l2=block.getFieldValue("L2");
    var l3=block.getFieldValue("L3");
    var l4=block.getFieldValue("L4");
    var l5=block.getFieldValue("L5");
    var l6=block.getFieldValue("L6");
    var l7=block.getFieldValue("L7");
    var l8=block.getFieldValue("L8");
	Blockly.Arduino.variables_[vname]="byte " + vname + "[]={\n B" + l1 + ",\n B" + l2 + ",\n B" + l3 + ",\n B" + l4 + ",\n B" + l5 + ",\n B" + l6 + ",\n B" + l7 + ",\n B" + l8 + "};\n";
    return ""
};
Blockly.Python["matrice8x8_symbole"]=function(block){
    var vname=Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var l1=block.getFieldValue("L1");
    var l2=block.getFieldValue("L2");
    var l3=block.getFieldValue("L3");
    var l4=block.getFieldValue("L4");
    var l5=block.getFieldValue("L5");
    var l6=block.getFieldValue("L6");
    var l7=block.getFieldValue("L7");
    var l8=block.getFieldValue("L8");
	Blockly.Python.variables_[vname]="byte " + vname + "[]={\n B" + l1 + ",\n B" + l2 + ",\n B" + l3 + ",\n B" + l4 + ",\n B" + l5 + ",\n B" + l6 + ",\n B" + l7 + ",\n B" + l8 + "};\n";
    return ""
};
///////////
Blockly.Blocks["matrice8x8_init"]={init:function(){
        this.appendDummyInput().appendField(new Blockly.FieldImage("data:image/png;base64,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", 50, 50))
			.appendField(Blockly.Msg.matrice);
        this.appendValueInput("DIN").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("DIN");
        this.appendValueInput("CLK").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("CLK");
        this.appendValueInput("CS").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("CS");
        this.setInputsInline(false);
        this.setColour("#00929F");
        this.setTooltip(Blockly.Msg.matrice8x8_tooltip);
        this.setHelpUrl(Blockly.Msg.matrice8x8_helpurl)}
};
Blockly.Arduino["matrice8x8_init"]=function(block){
    var din=Blockly.Arduino.valueToCode(block, "DIN", Blockly.Arduino.ORDER_ASSIGNMENT);
    var clk=Blockly.Arduino.valueToCode(block, "CLK", Blockly.Arduino.ORDER_ASSIGNMENT);
    var cs=Blockly.Arduino.valueToCode(block, "CS", Blockly.Arduino.ORDER_ASSIGNMENT);
    Blockly.Arduino.includes_["matrice8x8init"]='#include <LedControl.h>';
    Blockly.Arduino.definitions_["matrice8x8init"]="LedControl lc=LedControl(" + din + "," + clk + "," + cs + ",1);";
    Blockly.Arduino.codeFunctions_["matrice8x8init"]="void afficher(byte s[]) {\n  for (int i=0; i<8; i++) {\n    lc.setRow(0,i,s[i]);\n  };\n}";
    Blockly.Arduino.setups_["matrice8x8"]="lc.shutdown(0,false);\n  lc.setIntensity(0,1);\n  lc.clearDisplay(0);";
    return ""
};
Blockly.Python["matrice8x8_init"]=function(block){
    var din=Blockly.Python.valueToCode(block, "DIN", Blockly.Python.ORDER_ASSIGNMENT);
    var clk=Blockly.Python.valueToCode(block, "CLK", Blockly.Python.ORDER_ASSIGNMENT);
    var cs=Blockly.Python.valueToCode(block, "CS", Blockly.Python.ORDER_ASSIGNMENT);
    Blockly.Python.imports_["max7219"]='import max7219';
	Blockly.Python.imports_["pin"]="from machine import Pin";
	Blockly.Python.imports_["spi"]="from machine import SPI";
    Blockly.Python.definitions_["spi"]="spi = SPI(1, baudrate=10000000, polarity=1, phase=0, sck=Pin(" + clk + "), mosi=Pin(" + din + "))\ndisplay = max7219.Matrix8x8(spi, Pin(" + cs + "), 1)";
    return ""
};
/////////////
Blockly.Blocks["matrice8x8_efface"]={init:function(){
    this.appendValueInput("mat").setCheck("Number").appendField(Blockly.Msg.matrice8x8_efface);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00929F");
    this.setTooltip(Blockly.Msg.matrice8x8_efface_tooltip);
    this.setHelpUrl(Blockly.Msg.matrice8x8_helpurl)}
};
Blockly.Arduino["matrice8x8_efface"]=function(block){
	var num_mat=Blockly.Arduino.valueToCode(block, "mat", Blockly.Arduino.ORDER_ASSIGNMENT)||0;
    return "matrice.effacer("+num_mat+");\n"
};
Blockly.Python["matrice8x8_efface"]=function(block){
    return "effacer();\n"
};
////////////
Blockly.Blocks["matrice8x8_aff_mat"]={init:function(){
    this.appendValueInput("VAR").appendField(Blockly.Msg.matrice8x8_aff);
    this.appendValueInput("mat").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.matrice);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00929F");
    this.setTooltip(Blockly.Msg.matrice8x8_aff_mat_tooltip);
	this.setHelpUrl(Blockly.Msg.matrice8x8_helpurl)}
};
Blockly.Arduino["matrice8x8_aff_mat"]=function(block){
	var varname=Blockly.Arduino.valueToCode(block, "VAR", Blockly.Arduino.ORDER_ASSIGNMENT);
	var num_mat=Blockly.Arduino.valueToCode(block, "mat", Blockly.Arduino.ORDER_ASSIGNMENT);
    return "afficher(" + varname + ", "+num_mat+");\n"
};
Blockly.Python["matrice8x8_aff_mat"]=function(block){
	var varname=Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    return "afficher(" + varname + ");\n"
};
////////////
Blockly.Blocks["matrice8x8_aff"]={init:function(){
    this.appendValueInput("mat").setCheck("Number")
		.appendField(Blockly.Msg.matrice8x8_aff)
		.appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_GET_ITEM), "VAR")
		.appendField("sur la matrice");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00929F");
    this.setTooltip(Blockly.Msg.matrice8x8_aff_tooltip);
    this.setHelpUrl(Blockly.Msg.matrice8x8_helpurl)
	this.contextMenuMsg_=Blockly.Msg.matrice_create_symbole},
	contextMenuType_:"matrice8x8_symbole",
	customContextMenu:Blockly.Blocks["variables_get"].customContextMenu,
	getVarType:function(varName){return Blockly.Types.getChildBlockType(this)}
};
Blockly.Arduino["matrice8x8_aff"]=function(block){
	var varname=Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
	var num_mat=Blockly.Arduino.valueToCode(block, "mat", Blockly.Arduino.ORDER_ASSIGNMENT)||0;
    return "matrice.afficher(" + varname + ", " + num_mat +");\n"
};
Blockly.Python["matrice8x8_aff"]=function(block){
	var varname=Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    return "afficher(" + varname + ");\n"
};
//////////
Blockly.Blocks["matrice8x8_del"]={init:function(){
    this.appendValueInput("mat").setCheck("Number").appendField(Blockly.Msg.matriceLC);
	this.appendValueInput("col").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LCD_col);
    this.appendValueInput("line").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LCD_line);
    this.appendValueInput("STATE").setCheck("Boolean").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg._AT);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00929F");
    this.setTooltip(Blockly.Msg.matrice8x8_del_tooltip);
    this.setHelpUrl(Blockly.Msg.matrice8x8_helpurl)}
};
Blockly.Arduino["matrice8x8_del"]=function(block){
	var etat=Blockly.Arduino.valueToCode(block, "STATE", Blockly.Arduino.ORDER_ASSIGNMENT) == "HIGH" ? "true" : "false";
	var ligne=Blockly.Arduino.valueToCode(block, "line", Blockly.Arduino.ORDER_ASSIGNMENT);
	var colonne=Blockly.Arduino.valueToCode(block, "col", Blockly.Arduino.ORDER_ASSIGNMENT);
	var mat=Blockly.Arduino.valueToCode(block, "mat", Blockly.Arduino.ORDER_ASSIGNMENT)||0;
    return "matrice.mettre_del(" + mat + ", "+ligne+", "+colonne+", "+etat+");\n"
};
Blockly.Python["matrice8x8_del"]=function(block){
	var etat=Blockly.Python.valueToCode(block, "STATE", Blockly.Python.ORDER_ASSIGNMENT);
	var ligne=Blockly.Python.valueToCode(block, "line", Blockly.Python.ORDER_ASSIGNMENT);
	var colonne=Blockly.Python.valueToCode(block, "col", Blockly.Python.ORDER_ASSIGNMENT);
    return "lc.setLed(0,"+ligne+","+colonne+","+etat+");\n"
};
///////////
Blockly.Blocks["matrice_symbole"]={init:function(){
    this.appendDummyInput()
		.appendField(Blockly.Msg.matrice16x8_symbole)
		.appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_GET_ITEM), "VAR")
		.appendField(new Blockly.FieldDropdown([["8x8","8"],["16x8","16"]]), "matrix");
	this.appendDummyInput("m161").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("01010101"), "L1");
    this.appendDummyInput("m162").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("10101010"), "L2");
    this.appendDummyInput("m163").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("01010101"), "L3");
    this.appendDummyInput("m164").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("10101010"), "L4");
    this.appendDummyInput("m165").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("01010101"), "L5");
    this.appendDummyInput("m166").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("10101010"), "L6");
    this.appendDummyInput("m167").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("01010101"), "L7");
    this.appendDummyInput("m168").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput("10101010"), "L8");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setHelpUrl(Blockly.Msg.matrice16x8_helpurl);
    this.setColour("#00929F");
    this.setTooltip(Blockly.Msg.matrice16x8_symbole_tooltip);
	this.contextMenuMsg_=Blockly.Msg.matrice_create_aff},
	contextMenuType_:"matrice16x8_aff",
	customContextMenu:Blockly.Blocks["variables_get"].customContextMenu,
	getVarType:function(varName){return Blockly.Types.getChildBlockType(this)},
    renameVar: function(oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue("VAR"))) this.setFieldValue(newName, "VAR")
	}
};
Blockly.Arduino["matrice_symbole"]=function(block){
    var vname=Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
	var ligne= new Array();
    ligne[0]=block.getFieldValue("L1");
	ligne[1]=block.getFieldValue("L2");
    ligne[2]=block.getFieldValue("L3");
    ligne[3]=block.getFieldValue("L4");
    ligne[4]=block.getFieldValue("L5");
    ligne[5]=block.getFieldValue("L6");
    ligne[6]=block.getFieldValue("L7");
    ligne[7]=block.getFieldValue("L8");
	var type_matrix=block.getFieldValue("matrix");
	if (type_matrix=="16"){
		var result = "byte " + vname + "[]={\n";
		var col=new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
		for (var i=0; i<16; i++) {
			for (var j=0; j<8; j++) {
				col[i]+=ligne[7-j][i];
			}
			result += "  B" + col[i] + ",\n";
		}
		result += "};\n";
		Blockly.Arduino.variables_[vname]= result ;
	} else {
		Blockly.Arduino.variables_[vname]="byte " + vname + "[]={\n B" + ligne[0] + ",\n B" + ligne[1] + ",\n B" + ligne[2] + ",\n B" + ligne[3] + ",\n B" + ligne[4] + ",\n B" + ligne[5] + ",\n B" + ligne[6] + ",\n B" + ligne[7] + "};\n";
	}
    return ""
};
Blockly.Python["matrice_symbole"]=function(block){
    var vname=Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
	var ligne= new Array();
    ligne[0]=block.getFieldValue("L1");
	ligne[1]=block.getFieldValue("L2");
    ligne[2]=block.getFieldValue("L3");
    ligne[3]=block.getFieldValue("L4");
    ligne[4]=block.getFieldValue("L5");
    ligne[5]=block.getFieldValue("L6");
    ligne[6]=block.getFieldValue("L7");
    ligne[7]=block.getFieldValue("L8");
	var type_matrix=block.getFieldValue("matrix");
	if (type_matrix=="16"){
		var result = "byte " + vname + "[]={\n";
		var col=new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
		for (var i=0; i<16; i++) {
			for (var j=0; j<8; j++) {
				col[i]+=ligne[7-j][i];
			}
			result += "  B" + col[i] + ",\n";
		}
		result += "};\n";
		Blockly.Python.variables_[vname]= result ;
	} else {
		Blockly.Python.variables_[vname]="byte " + vname + "[]={\n B" + ligne[0] + ",\n B" + ligne[1] + ",\n B" + ligne[2] + ",\n B" + ligne[3] + ",\n B" + ligne[4] + ",\n B" + ligne[5] + ",\n B" + ligne[6] + ",\n B" + ligne[7] + "};\n";
	}
    return ""
};
///////////
Blockly.Blocks["matrice_init"]={init:function(){
    this.appendDummyInput().appendField(Blockly.Msg.matrice)
		.appendField(new Blockly.FieldDropdown([["8x8","8"],["16x8","16"],["32x8","32"]],function(option){this.sourceBlock_.updateShape(option)}), "matrix");
    this.appendDummyInput("img").appendField(new Blockly.FieldImage("data:image/png;base64,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", 48, 40))
	this.appendValueInput("DIN").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("DIN");
	this.appendValueInput("CLK").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("CLK");
	this.appendValueInput("CS").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("CS");
	this.setInputsInline(false);
    this.setColour("#00929F");
    this.setTooltip(Blockly.Msg.matrice16x8_tooltip);
    this.setHelpUrl(Blockly.Msg.matrice16x8_helpurl)},
    updateShape:function(option){
		if (option=="16") {
			this.removeInput("DIN");
			this.removeInput("CS");
			this.removeInput("CLK");
			this.removeInput("img");
			this.appendDummyInput("img").appendField(new Blockly.FieldImage("data:image/png;base64,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", 60, 28))
		}
		if (option=="8"){
			this.removeInput("img");
			this.removeInput("DIN");
			this.removeInput("CS");
			this.removeInput("CLK");
			this.appendDummyInput("img").appendField(new Blockly.FieldImage("data:image/png;base64,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", 48, 40))
		    this.appendValueInput("DIN").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("DIN");
			this.appendValueInput("CLK").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("CLK");
			this.appendValueInput("CS").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("CS");
		}
		if (option=="32"){
			this.removeInput("img");
			this.removeInput("DIN");
			this.removeInput("CS");
			this.removeInput("CLK");
			this.appendDummyInput("img").appendField(new Blockly.FieldImage("data:image/png;base64,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", 50, 34))
		    this.appendValueInput("DIN").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("DIN");
			this.appendValueInput("CLK").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("CLK");
			this.appendValueInput("CS").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("CS");
		}
    },
    mutationToDom:function(){
        var container = document.createElement("mutation");
        container.setAttribute("matrix", this.getFieldValue("matrix"));
        return container
    },
    domToMutation:function(xmlElement){
        this.updateShape(xmlElement.getAttribute("matrix"))
    }
};
Blockly.Arduino["matrice_init"]=function(block){
	var type_matrix=block.getFieldValue("matrix");
	Blockly.Arduino.includes_["matrX"]='#include <matrX.h>';
	switch (type_matrix) {
        case "16":
			Blockly.Arduino.definitions_["mat16"]="Matrice_I2C matrice;";
			Blockly.Arduino.setups_["matrice16init"]="matrice.initialisation();";
			//Blockly.Arduino.variables_["matrice16init"]="#define IIC_SCL A5\n#define IIC_SDA A4";
			//Blockly.Arduino.codeFunctions_["matrice16init"]="void IIC_start() {\n  digitalWrite(IIC_SCL,LOW);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SDA,HIGH);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SCL,HIGH);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SDA,LOW);\n  delayMicroseconds(3);\n}\nvoid IIC_end() {\n  digitalWrite(IIC_SCL,LOW);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SDA,LOW);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SCL,HIGH);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SDA,HIGH);\n  delayMicroseconds(3);\n}\nvoid IIC_send(unsigned char send_data) {\n  for(char i = 0;i < 8;i++) {\n    digitalWrite(IIC_SCL,LOW);\n    delayMicroseconds(3);\n    if(send_data & 0x01) {\n      digitalWrite(IIC_SDA,HIGH);\n    } else {\n      digitalWrite(IIC_SDA,LOW);\n    }\n    delayMicroseconds(3);\n    digitalWrite(IIC_SCL,HIGH);\n    delayMicroseconds(3);\n    send_data = send_data >> 1;\n  }\n}\nvoid afficher (byte s[]) {\n  IIC_start();\n  IIC_send(0x40);\n  IIC_end();\n  IIC_start();\n  IIC_send(0xC0);\n  for(char i=0; i<16; i++) {\n    IIC_send(s[i]);\n  }\n  IIC_end();\n  IIC_start();\n  IIC_send(0x8F);\n  IIC_end();\n}\nvoid effacer () {\n  byte t[]={0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};\n  afficher (t);\n}";
			//Blockly.Arduino.setups_["matrice16init"]="pinMode(IIC_SCL,OUTPUT);\n  pinMode(IIC_SDA,OUTPUT);\n  digitalWrite(IIC_SCL,LOW);\n  digitalWrite(IIC_SDA,LOW);";
			break;
		case "8":
			var din=Blockly.Arduino.valueToCode(block, "DIN", Blockly.Arduino.ORDER_ASSIGNMENT);
			var clk=Blockly.Arduino.valueToCode(block, "CLK", Blockly.Arduino.ORDER_ASSIGNMENT);
			var cs=Blockly.Arduino.valueToCode(block, "CS", Blockly.Arduino.ORDER_ASSIGNMENT);
			Blockly.Arduino.definitions_["mat8"]="Matrice_SPI matrice;";
			Blockly.Arduino.setups_["matrice8init"]="matrice.initialisation(" + din + ", " + clk + ", " + cs + ", 1);";
			//Blockly.Arduino.codeFunctions_["matrice8init"]="void afficher(byte s[]) {\n  for (char i=0; i<8; i++) {\n    lc.setRow(0,i,s[i]);\n  }\n}\nvoid effacer () {\n  lc.clearDisplay(0);\n}";
			//Blockly.Arduino.setups_["matrice8init"]="lc.shutdown(0,false);\n  lc.setIntensity(0,1);\n  lc.clearDisplay(0);";
			break;
		case "32":
			var din=Blockly.Arduino.valueToCode(block, "DIN", Blockly.Arduino.ORDER_ASSIGNMENT);
			var clk=Blockly.Arduino.valueToCode(block, "CLK", Blockly.Arduino.ORDER_ASSIGNMENT);
			var cs=Blockly.Arduino.valueToCode(block, "CS", Blockly.Arduino.ORDER_ASSIGNMENT);
			Blockly.Arduino.definitions_["mat32"]="Matrice_SPI matrice;";
			Blockly.Arduino.setups_["matrice32init"]="matrice.initialisation(" + din + ", " + clk + ", " + cs + ", 4);";
			break;
	}
	return ""
};
Blockly.Python["matrice_init"]=function(block){
	var type_matrix=block.getFieldValue("matrix");
	if (type_matrix=="16"){
		Blockly.Python.variables_["matrice16init"]="#define IIC_SCL A5\n#define IIC_SDA A4";
		Blockly.Python.codeFunctions_["matrice16init"]="void IIC_start() {\n  digitalWrite(IIC_SCL,LOW);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SDA,HIGH);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SCL,HIGH);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SDA,LOW);\n  delayMicroseconds(3);\n}\nvoid IIC_end() {\n  digitalWrite(IIC_SCL,LOW);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SDA,LOW);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SCL,HIGH);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SDA,HIGH);\n  delayMicroseconds(3);\n}\nvoid IIC_send(unsigned char send_data) {\n  for(char i = 0;i < 8;i++) {\n    digitalWrite(IIC_SCL,LOW);\n    delayMicroseconds(3);\n    if(send_data & 0x01) {\n      digitalWrite(IIC_SDA,HIGH);\n    } else {\n      digitalWrite(IIC_SDA,LOW);\n    }\n    delayMicroseconds(3);\n    digitalWrite(IIC_SCL,HIGH);\n    delayMicroseconds(3);\n    send_data = send_data >> 1;\n  }\n}\nvoid afficher (byte s[]) {\n  IIC_start();\n  IIC_send(0x40);\n  IIC_end();\n  IIC_start();\n  IIC_send(0xC0);\n  for(char i=0; i<16; i++) {\n    IIC_send(s[i]);\n  }\n  IIC_end();\n  IIC_start();\n  IIC_send(0x8F);\n  IIC_end();\n}\nvoid effacer () {\n  byte t[]={0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};\n  afficher (t);\n}";
		Blockly.Python.setups_["matrice16init"]="pinMode(IIC_SCL,OUTPUT);\n  pinMode(IIC_SDA,OUTPUT);\n  digitalWrite(IIC_SCL,LOW);\n  digitalWrite(IIC_SDA,LOW);";
	} else {
		var din=Blockly.Python.valueToCode(block, "DIN", Blockly.Python.ORDER_ASSIGNMENT);
		var clk=Blockly.Python.valueToCode(block, "CLK", Blockly.Python.ORDER_ASSIGNMENT);
		var cs=Blockly.Python.valueToCode(block, "CS", Blockly.Python.ORDER_ASSIGNMENT);
		Blockly.Python.imports_["max7219"]='import max7219';
		Blockly.Python.imports_["pin"]="from machine import Pin";
		Blockly.Python.imports_["spi"]="from machine import SPI";
		Blockly.Python.definitions_["spi"]="spi = SPI(-1, baudrate=10000000, miso=Pin(" + cs + "), mosi=Pin(" + din + "), sck=Pin(" + clk + "))\ndisplay = max7219.Matrix8x8(spi, 1)";
	}
	return ""
};////////////
///////////
Blockly.Blocks["matrice_scroll"]={init:function(){
    this.appendValueInput("text").setCheck("String").appendField(Blockly.Msg.matrice8x8_scroll);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00929F");
    this.setTooltip(Blockly.Msg.matrice8x8_scroll_tooltip);
	this.setHelpUrl(Blockly.Msg.matrice8x8_helpurl)}
};
Blockly.Arduino["matrice_scroll"]=function(block){
	var texte=Blockly.Arduino.valueToCode(block, "text", Blockly.Arduino.ORDER_ASSIGNMENT);
	return "matrice.faire_defiler({" + texte + "});\n"
};
Blockly.Python["matrice_scroll"]=function(block){
	var texte=Blockly.Arduino.valueToCode(block, "text", Blockly.Arduino.ORDER_ASSIGNMENT);
	return "faire_defiler({" + texte + "})\n"
};
