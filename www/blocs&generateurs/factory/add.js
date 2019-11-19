Blockly.Blocks['monbloc']={init:function(){
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("code()");
    this.setInputsInline(false);
    this.setOutput(true);
    this.setColour('#00929f')}
};
Blockly.Python['monbloc']=function(block){
    Blockly.Python.userFunctions_['func'] = 'def code():\n  return 0';
    var code = 'code()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};