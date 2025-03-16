// Blocs ajoutés localement


Blockly.Blocks['ab']={init:function(){
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["1200", "1200"], ["9600", "9600"], ["19200", "19200"], ["31250", "31250"], ["57600", "57600"]]), "_dropdown")
        .appendField("bauds");
    this.setInputsInline(false);
    this.setOutput(true, "Number");
    this.setColour('#00929f')}
};

Blockly.Arduino['ab']=function(block){
    var value_dropdown = block.getFieldValue('_dropdown');
    var code = value_dropdown;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['bc']={init:function(){
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["1200", "1200"], ["9600", "9600"], ["19200", "19200"], ["31250", "31250"], ["57600", "57600"]]), "_dropdown")
        .appendField("bauds");
    this.setInputsInline(false);
    this.setOutput(true, "Number");
    this.setColour('#00929f')}
};

Blockly.Arduino['bc']=function(block){
    var value_dropdown = block.getFieldValue('_dropdown');
    var code = value_dropdown;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Blocks['cd']={init:function(){
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["1200", "1200"], ["9600", "9600"], ["19200", "19200"], ["31250", "31250"], ["57600", "57600"]]), "_dropdown")
        .appendField("bauds");
    this.setInputsInline(false);
    this.setOutput(true, "Number");
    this.setColour('#00929f')}
};

Blockly.Arduino['cd']=function(block){
    var value_dropdown = block.getFieldValue('_dropdown');
    var code = value_dropdown;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

