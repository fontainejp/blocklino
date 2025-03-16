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

Blockly.Blocks['gros_bloc']={init:function(){
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("media/factory/star-o.png", 25, 25, "*"))
        .appendField("texte")
        .appendField(new Blockly.FieldTextInput("bla bla"), "_text")
        .appendField("liste")
        .appendField(new Blockly.FieldDropdown([["un", "1"], ["deux", "2"], ["trois", "3"]]), "_dropdown")
        .appendField("couleur")
        .appendField(new Blockly.FieldColour("#ff0000"), "_colour")
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("variable")
        .appendField(new Blockly.FieldVariable("item"), "_var")
        .appendField("angle")
        .appendField(new Blockly.FieldAngle("90"), "_angle")
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("case à cocher")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "_check")
        .appendField("nombre")
        .appendField(new Blockly.FieldNumber("123"), "_number")
    this.appendValueInput("_block")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("bloc")
    this.appendStatementInput("_statement")
        .appendField("branche")
    this.setInputsInline(false)
    this.setColour('#4488FF')}
}
Blockly.Arduino['gros_bloc']=function(block){
  var value_text = block.getFieldValue('_text')
  var value_dropdown = block.getFieldValue('_dropdown')
  var value_colour = block.getFieldValue('_colour')
  var value_var = Blockly.Arduino.variableDB_.getName(block.getFieldValue('_var'), Blockly.Variables.NAME_TYPE)
  var value_angle = block.getFieldValue('_angle')
  var value_check = block.getFieldValue('_check') == 'TRUE'
  var value_number = block.getFieldValue('_number')
  var value_block = Blockly.Arduino.valueToCode(block, '_block', Blockly.Arduino.ORDER_ATOMIC)
  var value_statement = Blockly.Arduino.statementToCode(block, '_statement')
  Blockly.Arduino.includes_["ma_bibliotheque"] = "#include <bib.h>"
  Blockly.Arduino.variables_[value_var] = "int "+value_var+" ;"
  Blockly.Arduino.definitions_["ma_def"] = "bib1 bib ;"
  Blockly.Arduino.userFunctions_["ma_fonction"] = 'long f(int x) { return x*x+x+1 }'
  Blockly.Arduino.setups_["mon_setup"] = 'la broche '+value_block+' est une sortie ;'
  var code = 'ce bloc affiche :\n'
  code += ' * '+value_text+' ;\n'
  code += ' * '+value_dropdown+' ;\n'
  code += ' * '+value_colour+' ;\n'
  code += ' * '+value_angle+' degrés ;\n' 
  code += ' * '+value_number+' ;\n'
  code += ' * '+value_var+' ;\n'
  if (value_check) { code += ' * case cochée ;\n' ;}
  else { code += ' * case pas cochée ;\n' ;}
  code += 'et le code :\n'+value_statement 
  return code 
}
  
////////////////////
Blockly.Blocks['demo_grove']={init:function(){
    this.appendDummyInput()
        .appendField("GROVE beginner")
    this.appendDummyInput()
        .appendField("demo")
    this.setInputsInline(false)
    this.setColour('#00CC00')}
}
Blockly.Arduino['demo_grove']=function(block){
  return "demo()"
}
////////////////////
