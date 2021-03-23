  ///////////
 /*  midi */
///////////
var img_midi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADBElEQVRoge3YvYseVRTH8U8SXZIiMRqIKBJZNhtjYmJj4wu+gL0gUVFstFC0FTFYSJI/QExjqYWgRqNoIxaiJhaxsFBExU2iUYgLuypimrBsdi3uXfIwz5l5ZuaZXUXmC5ddzpx7zu/e+8y95w49PT09/ybrOoqzAbfjHtyGaVyPzfn5BfyG0/gKJ3AKlzrK35opvIxZLDdss7nv1JqrxiTelGawqfBiu5RjTa6F8A04iIsdCC+2i3gh56hNk3dgG97FfSP8ZvE1zuHvbNsizfCtuG5E/0/xMP5ooG0kN2BG+eydx0u4pUasfdn3fEW8mZyzE67FmZJEc3gKEy3iTuBpzJfEPo3tY2o3gS9KEryDq8dNgGukn2aU4ySuHCf4kZLAB3V3hsixXizJdbht0L1YCAI+N6bYKp4P8i1gT5tgHwbBXutEZjWvB3k/aBpkD5YKQX7Cps5klrMp5xrMvYSbmwQ5angWDnQqs5oDQf5XmgQ4Z3j213cqsZp10jY6qOGXyDEStRM3FmxvSMu4VixL9dEgOwSFXzSA/YHt8/E1NeZEYBs66aMBREf4D2PLac73gW1H0RANYHNg+3NsOc2Jcm4pGqIBLAa2jRWJHst9FvP/o6jrH+Uc0nZF4HQhsG1zuTReYRJ343GXa/hdFYJW2DXg/4RU65zEz0HOkdqiAfwa2HYOJNiKV/GI8bfW+3NbwjE8i7/ys+nAf2grjQT8GNjuzH+3SpfxR0v6tmV9jnkKV2XbHYHfTNEQrcAZqc4frMWflMTvxe5xlI5gN47jOzxYeDaXtdXiLe3utYdqxD7UMnbxYEP5z+BYDSFrzduRsWwAH0lL9l9hDh9HD6J3gHSJeAD3Sl8S9uGmCv+uWZQ2k2/xjVTKLESOVYK+zG2FKalC7PIqGbEsvcxn6zg32QrP4v02ihpyXE3xNN/Ln5FWYbWYkQ6z2jQdwLx0qL0nLXVXLEszfxd+b9KxzUs5L135pqXPjA9J5UAbPpG+CX1mdVe2ktWqRnt6enp6ev7//AMS/x72Y2xdigAAAABJRU5ErkJggg==";
Blockly.Blocks['midi']={init:function(){
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(img_midi, 28, 28, "*"))
        .appendField(Blockly.Msg.midi_init);
    this.appendValueInput("_velocity")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.midi_vitesse);
    this.setInputsInline(false);
    this.setColour('#00929f')}
};
Blockly.Arduino['midi']=function(block){
	var value_velocity = Blockly.Arduino.valueToCode(block, '_velocity', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.includes_['midi'] = '#include "midi.h" ;'; 
	Blockly.Arduino.definitions_['midi'] = 'Midi midi;'; 
	Blockly.Arduino.variables_['midi']="byte velocity = "+value_velocity+";";
	Blockly.Arduino.setups_['midi'] = 'midi.initialisation();'; 
	return ''
};
Blockly.Python["midi"]=function(block){
	return ''
};
//////////
Blockly.Blocks['midi_send']={init:function(){
    this.appendValueInput("_note")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage(img_midi, 16, 16, "*"))
        .appendField(Blockly.Msg.midi_play);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#00929f')}
};
Blockly.Arduino['midi_send']=function(block){
	var value_note = Blockly.Arduino.valueToCode(block, '_note', Blockly.Arduino.ORDER_ATOMIC);
	var code = 'midi.send(B10010000, '+value_note+', velocity);\n';
	return code
};
Blockly.Python["midi_send"]=function(block){
	return ''
};
//////////
Blockly.Blocks['midi_stop']={init:function(){
    this.appendValueInput("_note")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage(img_midi, 16, 16, "*"))
        .appendField(Blockly.Msg.midi_stop);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#00929f')}
};
Blockly.Arduino['midi_stop']=function(block){
	var value_note = Blockly.Arduino.valueToCode(block, '_note', Blockly.Arduino.ORDER_ATOMIC);
	var code = 'midi.send(B10000000, '+value_note+', 0);\ndelay(100);\n';
	return code
};
Blockly.Python["midi_stop"]=function(block){
	return ''
};
//////////
Blockly.Blocks['midi_change_instru']={init:function(){
    this.appendValueInput("_instru")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage(img_midi, 16, 16, "*"))
        .appendField(Blockly.Msg.instrument);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#00929f')}
};
Blockly.Arduino['midi_change_instru']=function(block){
	var value_instru = Blockly.Arduino.valueToCode(block, '_instru', Blockly.Arduino.ORDER_ATOMIC);
	var code = 'midi.send(B11000000, '+value_instru+');\ndelay(200);\n';
	return code
};
Blockly.Python["midi_change_instru"]=function(block){
	return ''
};
//////////
Blockly.Blocks["midi_instru"]={init: function(){
    this.setColour("#00929f");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown(Blockly.Msg.instru), "_instru");
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP)}
};
Blockly.Arduino["midi_instru"]=function(block){
    var value_instru=block.getFieldValue("_instru");
    return [value_instru, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Python["midi_instru"]=function(block){
	return ''
};
//////////
Blockly.Blocks["midi_play_percu"]={init: function(){
    this.setColour("#00929f");
    this.appendValueInput("_note")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage(img_midi, 16, 16, "*"))
        .appendField(Blockly.Msg.midi_play_percu);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
	this.setNextStatement(true)}
};
Blockly.Arduino["midi_play_percu"]=function(block){
    var value_note = Blockly.Arduino.valueToCode(block, '_note', Blockly.Arduino.ORDER_ATOMIC);
	var code = 'midi.send(B10011001, '+value_note+', velocity);\n';
	return code
};
Blockly.Python["midi_play_percu"]=function(block){
	return ''
};
//////////
Blockly.Blocks["midi_percu"]={init: function(){
    this.setColour("#00929f");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown(Blockly.Msg.percu), "_instru");
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP)}
};
Blockly.Arduino["midi_percu"]=function(block){
    var value_instru=block.getFieldValue("_instru");
    return [value_instru, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Python["midi_percu"]=function(block){
	return ''
};
//////////
Blockly.Blocks["midi_note"]={init: function(){
    this.setColour("#00929f");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown(Blockly.Msg.midi), "_instru");
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP)}
};
Blockly.Arduino["midi_note"]=function(block){
    var value_instru=block.getFieldValue("_instru");
    return [value_instru, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Python["midi_note"]=function(block){
	return ''
};
//////////
Blockly.Blocks['midi_stop_percu']={init:function(){
    this.appendValueInput("_note")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage(img_midi, 16, 16, "*"))
        .appendField(Blockly.Msg.midi_stop_percu);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#00929f')}
};
Blockly.Arduino['midi_stop_percu']=function(block){
	var value_note = Blockly.Arduino.valueToCode(block, '_note', Blockly.Arduino.ORDER_ATOMIC);
	var code = 'midi.send(B10001001, '+value_note+', 0);\ndelay(100);\n';
	return code
};
Blockly.Python["midi_stop_percu"]=function(block){
	return ''
};
