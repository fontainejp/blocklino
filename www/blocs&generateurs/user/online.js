// Blocs téléchargés depuis le cloud

//////////////
Blockly.Blocks['button_is_pressed']={init:function(){
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("media/factory/gamepad.png", 28, 28, "*"))
        .appendField("si le bouton")
        .appendField(new Blockly.FieldDropdown([["A", "1"], ["B", "2"], ["C", "3"], ["D", "4"]]), "_dropdown")
        .appendField("est pressé");
    this.appendStatementInput("_statement");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#FF00FF')}
}

Blockly.Arduino['button_is_pressed']=function(block){
    var value_statement = Blockly.Arduino.statementToCode(block, '_statement');
    var value_dropdown = block.getFieldValue('_dropdown');
    Blockly.Arduino.includes_['lib'] = '#include "Esplora.h";';
    var code = 'if (Esplora.readButton('+value_dropdown+')) {\n  '+value_statement+'\n};';
    return code
}
  
//////////////
Blockly.Blocks['print_message']={init:function(){
    this.appendDummyInput()
        .appendField("envoyer")
        .appendField(new Blockly.FieldTextInput("message"), "_text")
        .appendField("sur le port série");
    this.appendValueInput("_block")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("transmission à");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120)}
}

Blockly.Arduino['print_message']=function(block){
    var value_text = block.getFieldValue('_dropdown');
    var value_block = Blockly.Arduino.valueToCode(block, '_block', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setup'] = 'Serial.begin('+value_block+');';
    var code = 'Serial.println("'+value_text+'");\n';
    return code
}
  
//////////////
Blockly.Blocks['ir_remote']={init:function(){
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("media/factory/keyboard-o.png", 14, 14, "*"))
        .appendField("Télécommande");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("code HEX")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "_check");
    this.appendValueInput("_block")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("reception");
    this.setInputsInline(false);
    this.setColour('#FFD700')}
}

Blockly.Arduino['ir_remote']=function(block){
    var value_check = block.getFieldValue('_check') == 'TRUE';
    var value_block = Blockly.Arduino.valueToCode(block, '_block', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.includes_['irremote'] = '#include "IRremote.h";';
    Blockly.Arduino.definitions_['irrecv'] = 'IRrecv irrecv('+value_block+');';
    if (value_check) {
		Blockly.Arduino.definitions_['results'] = 'decode_results results;';
	}
    Blockly.Arduino.setups_['setup'] = 'irrecv.enableIRIn();';
    return ''
}
  
//////////////
Blockly.Blocks['vitesse_serie']={init:function(){
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["1200", "1200"], ["9600", "9600"], ["19200", "19200"], ["31250", "31250"], ["57600", "57600"]]), "_dropdown")
        .appendField("bauds");
    this.setInputsInline(false);
    this.setOutput(true, "Number");
    this.setColour('#00929f')}
}

Blockly.Arduino['vitesse_serie']=function(block){
    var value_dropdown = block.getFieldValue('_dropdown');
    var code = value_dropdown;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
}
    
//////////////
Blockly.Blocks['gros_bloc']={init:function(){ 
	this.appendDummyInput() 
		.appendField(new Blockly.FieldImage("media/factory/star-o.png", 25, 25, "*")) 
		.appendField("texte") 
		.appendField(new Blockly.FieldTextInput("bla bla"), "_text") 
		.appendField("liste") 
		.appendField(new Blockly.FieldDropdown([["un", "1"], ["deux", "2"], ["trois", "3"]]), "_dropdown") 
		.appendField("couleur") 
		.appendField(new Blockly.FieldColour("#ff0000"), "_colour"); 
	this.appendDummyInput() 
		.setAlign(Blockly.ALIGN_CENTRE) 
		.appendField("variable") 
		.appendField(new Blockly.FieldVariable("item"), "_var") 
		.appendField("angle") 
		.appendField(new Blockly.FieldAngle("90"), "_angle"); 
	this.appendDummyInput() 
		.setAlign(Blockly.ALIGN_RIGHT) 
		.appendField("case à cocher") 
		.appendField(new Blockly.FieldCheckbox("TRUE"), "_check") 
		.appendField("nombre") 
		.appendField(new Blockly.FieldNumber("123"), "_number"); 
	this.appendValueInput("_block") 
		.setAlign(Blockly.ALIGN_RIGHT) 
		.appendField("bloc");
	this.appendStatementInput("_statement") 
		.appendField("branche"); 
	this.setInputsInline(false); 
	this.setColour('#4488FF')} 
}

Blockly.Arduino['gros_bloc']=function(block){
  var value_text = block.getFieldValue('_text');
  var value_dropdown = block.getFieldValue('_dropdown');
  var value_colour = block.getFieldValue('_colour');
  var value_var = Blockly.Arduino.variableDB_.getName(block.getFieldValue('_var'), Blockly.Variables.NAME_TYPE);
  var value_angle = block.getFieldValue('_angle');
  var value_check = block.getFieldValue('_check') == 'TRUE';
  var value_number = block.getFieldValue('_number');
  var value_block = Blockly.Arduino.valueToCode(block, '_block', Blockly.Arduino.ORDER_ATOMIC);
  var value_statement = Blockly.Arduino.statementToCode(block, '_statement');
  Blockly.Arduino.includes_["ma_bibliotheque"] = "#include <bib.h>";
  Blockly.Arduino.variables_[value_var] = "int "+value_var+" ;";
  Blockly.Arduino.definitions_["ma_def"] = "bib1 bib ;";
  Blockly.Arduino.userFunctions_["ma_fonction"] = 'long f(int x) { return x*x+x+1 }';
  Blockly.Arduino.setups_["mon_setup"] = 'la broche '+value_block+' est une sortie ;' ;
  var code = 'ce bloc affiche :\n' ;
  code += ' * '+value_text+' ;\n' ;
  code += ' * '+value_dropdown+' ;\n' ;
  code += ' * '+value_colour+' ;\n' ;
  code += ' * '+value_angle+' degrés ;\n' ;
  code += ' * '+value_number+' ;\n' ;
  code += ' * '+value_var+' ;\n' ;
  if (value_check) { code += ' * case cochée ;\n' ;}
  else { code += ' * case pas cochée ;\n' ;}
  code += 'et le code :\n'+value_statement ;
  return code ;
}
