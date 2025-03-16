<xml xmlns="http://www.w3.org/1999/xhtml">
  <language>Blockly.Arduino['button_is_pressed']=function(block){
    var value_statement = Blockly.Arduino.statementToCode(block, '_statement')
    var value_dropdown = block.getFieldValue('_dropdown')
    Blockly.Arduino.includes_['lib'] = '#include "Esplora.h";'
    var code = 'if (Esplora.readButton('+value_dropdown+')) {\n  '+value_statement+'\n};'
    return code
}
  </language>
  <block type="factory_base" id="icqte[+jHGl+MEWT,~Lr" deletable="false" movable="false" x="0" y="0">
    <mutation connections="BOTH"></mutation>
    <field name="NAME">button_is_pressed</field>
    <field name="INLINE">EXT</field>
    <field name="CONNECTIONS">BOTH</field>
    <statement name="INPUTS">
      <block type="input_dummy" id="x@,W2d#;Ph_Y:!=4RzHo">
        <field name="ALIGN">LEFT</field>
        <statement name="FIELDS">
          <block type="field_image" id="JjX^HkDRcWzFVpWT+m+H">
            <field name="SRC">gamepad.png</field>
            <field name="WIDTH">28</field>
            <field name="HEIGHT">28</field>
            <field name="ALT">*</field>
            <next>
              <block type="field_static" id="DqCi=[a^h@QArM/--F@k">
                <field name="TEXT">si le bouton</field>
                <next>
                  <block type="field_dropdown" id="ErjuR8$R9o?-[vXu4:^]">
                    <mutation options="4"></mutation>
                    <field name="FIELDNAME">_dropdown</field>
                    <field name="USER0">A</field>
                    <field name="CPU0">1</field>
                    <field name="USER1">B</field>
                    <field name="CPU1">2</field>
                    <field name="USER2">C</field>
                    <field name="CPU2">3</field>
                    <field name="USER3">D</field>
                    <field name="CPU3">4</field>
                    <next>
                      <block type="field_static" id="6bvjCL6zh5=?N2``M7#H">
                        <field name="TEXT">est pressé</field>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </statement>
        <next>
          <block type="input_statement" id="_I[]hiWmxd;XOZn*3E.4">
            <field name="INPUTNAME">_statement</field>
            <field name="ALIGN">LEFT</field>
          </block>
        </next>
      </block>
    </statement>
    <value name="COLOUR">
      <block type="colour_rrggbb" id="4TJCin_YwaaKqEWxa6dQ">
        <mutation colour="#FF00FF"></mutation>
        <field name="HUE">#FF00FF</field>
      </block>
    </value>
  </block>
</xml>