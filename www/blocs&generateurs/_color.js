  ///////////
 /* color */
//////////
Blockly.Blocks["colour"]={init:function(){
	this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#ff0000"), "_colour");
    this.setInputsInline(false);
    this.setOutput(true);
    this.setColour(Blockly.Blocks.tab.HUE)}
};
Blockly.Arduino["colour"]=function(block){
	var value_colour = block.getFieldValue('_colour');
	var colorR=value_colour[1] + value_colour[2], colorG=value_colour[3] + value_colour[4], colorB=value_colour[5] + value_colour[6];
	var red=parseInt(colorR,16), green=parseInt(colorG,16), blue=parseInt(colorB,16);
	var code = red+', '+green+', '+blue;
	return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Python["colour"]=function(block){
	
};
//////////
Blockly.Blocks["colour_rvb"]={init:function(){
	this.appendValueInput("_r")
        .appendField(Blockly.Msg.COLOR_rvb);
    this.appendValueInput("_v")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.COLOR_v);
    this.appendValueInput("_b")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.COLOR_b);
    this.setInputsInline(false);
    this.setOutput(true);
    this.setColour(Blockly.Blocks.tab.HUE)}
};
Blockly.Arduino["colour_rvb"]=function(block){
	var value_r = Blockly.Arduino.valueToCode(block, '_r', Blockly.Arduino.ORDER_ATOMIC);
	var value_v = Blockly.Arduino.valueToCode(block, '_v', Blockly.Arduino.ORDER_ATOMIC);
	var value_b = Blockly.Arduino.valueToCode(block, '_b', Blockly.Arduino.ORDER_ATOMIC);
	var code = value_r+', '+value_v+', '+value_b;
	return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Python["colour_rvb"]=function(block){
	
};
//////////
Blockly.Blocks["colour_rvb_hex"]={init:function(){
	this.appendDummyInput()
        .appendField("#")
        .appendField(new Blockly.FieldTextInput("FF0000"), "_text");
    this.setInputsInline(false);
    this.setOutput(true);
    this.setColour(Blockly.Blocks.tab.HUE)}
};
Blockly.Arduino["colour_rvb_hex"]=function(block){
	var value_colour = block.getFieldValue('_text');
	var colorR=value_colour[0] + value_colour[1], colorG=value_colour[2] + value_colour[3], colorB=value_colour[4] + value_colour[5];
	var red=parseInt(colorR,16), green=parseInt(colorG,16), blue=parseInt(colorB,16);
	var code = red+', '+green+', '+blue;
	return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Python["colour_rvb_hex"]=function(block){
	
};