// Blocs réalisés avec BLOCKLY-FACTORY

Blockly.Blocks['pi']={init:function(){
    this.appendDummyInput()
        .appendField("3.14");
    this.setInputsInline(false);
    this.setOutput(true, "Number");
    this.setColour('#00CC00')}
};
Blockly.Arduino['pi']=function(block){
    return ["3.14", Blockly.Arduino.ORDER_ATOMIC];
};
////////////////////
