<xml xmlns="http://www.w3.org/1999/xhtml">
  <language>Blockly.Arduino['print_message']=function(block){
    var value_text = block.getFieldValue('_dropdown');
    var value_block = Blockly.Arduino.valueToCode(block, '_block', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setup'] = 'Serial.begin('+value_block+');';
    var code = 'Serial.println("'+value_text+'");\n';
    return code
};
  
  </language>
  <block type="factory_base" id="icqte[+jHGl+MEWT,~Lr" deletable="false" movable="false" x="0" y="0">
    <mutation connections="BOTH"></mutation>
    <field name="NAME">print_message</field>
    <field name="INLINE">EXT</field>
    <field name="CONNECTIONS">BOTH</field>
    <statement name="INPUTS">
      <block type="input_dummy" id="~^)D1!f@eOfXYX;%[0XQ">
        <field name="ALIGN">LEFT</field>
        <statement name="FIELDS">
          <block type="field_static" id="^^NaMhvb3*UW}${MX$C7">
            <field name="TEXT">envoyer</field>
            <next>
              <block type="field_input" id="n0)Wj.1/lA8OdbxO+;3C">
                <field name="TEXT">message</field>
                <field name="FIELDNAME">_text</field>
                <next>
                  <block type="field_static" id="2kPS9@e.MOvNCW}1x[]^">
                    <field name="TEXT">sur le port série</field>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </statement>
        <next>
          <block type="input_value" id="zD_X(FdU|Mmrb*|F))Ja">
            <field name="INPUTNAME">_block</field>
            <field name="ALIGN">RIGHT</field>
            <statement name="FIELDS">
              <block type="field_static" id=".VHUzHCY++vzw8~{wHvD">
                <field name="TEXT">transmission à</field>
              </block>
            </statement>
            <value name="TYPE">
              <block type="type_number" id="MI@-omk?l3EGf^hTm*{k"></block>
            </value>
          </block>
        </next>
      </block>
    </statement>
    <value name="COLOUR">
      <block type="colour_hue" id="Zi;)WFzGG8K+0LBjDo5H">
        <mutation colour="#5ba55b"></mutation>
        <field name="HUE">120</field>
      </block>
    </value>
  </block>
</xml>