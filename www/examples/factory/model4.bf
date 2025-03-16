<xml xmlns="http://www.w3.org/1999/xhtml">
  <language>Blockly.Arduino['ir_remote']=function(block){
    var value_check = block.getFieldValue('_check') == 'TRUE'
    var value_block = Blockly.Arduino.valueToCode(block, '_block', Blockly.Arduino.ORDER_ATOMIC)
    Blockly.Arduino.includes_['irremote'] = '#include "IRremote.h";'
    Blockly.Arduino.definitions_['irrecv'] = 'IRrecv irrecv('+value_block+');'
    if (value_check) {
		Blockly.Arduino.definitions_['results'] = 'decode_results results;'
	}
    Blockly.Arduino.setups_['setup'] = 'irrecv.enableIRIn();'
    return ''
}
  </language>
  <block type="factory_base" id="icqte[+jHGl+MEWT,~Lr" deletable="false" movable="false" x="0" y="0">
    <mutation connections="NONE"></mutation>
    <field name="NAME">ir_remote</field>
    <field name="INLINE">EXT</field>
    <field name="CONNECTIONS">NONE</field>
    <statement name="INPUTS">
      <block type="input_dummy" id="x@,W2d#;Ph_Y:!=4RzHo">
        <field name="ALIGN">LEFT</field>
        <statement name="FIELDS">
          <block type="field_image" id="JjX^HkDRcWzFVpWT+m+H">
            <field name="SRC">keyboard-o.png</field>
            <field name="WIDTH">14</field>
            <field name="HEIGHT">14</field>
            <field name="ALT">*</field>
            <next>
              <block type="field_static" id="DqCi=[a^h@QArM/--F@k">
                <field name="TEXT">Télécommande</field>
              </block>
            </next>
          </block>
        </statement>
        <next>
          <block type="input_dummy" id="mN/a=}0))lzPO^{?BGk}">
            <field name="ALIGN">RIGHT</field>
            <statement name="FIELDS">
              <block type="field_static" id="zR?c]TJoesCF?SEr+rP:">
                <field name="TEXT">code HEX</field>
                <next>
                  <block type="field_checkbox" id="?IyEAi=S*12}J,EDIoOI">
                    <field name="CHECKED">TRUE</field>
                    <field name="FIELDNAME">_check</field>
                  </block>
                </next>
              </block>
            </statement>
            <next>
              <block type="input_value" id="uC,Qy[d~e13sfKp++jF$">
                <field name="INPUTNAME">_block</field>
                <field name="ALIGN">RIGHT</field>
                <statement name="FIELDS">
                  <block type="field_static" id="L_nLm,m}u;5-u3%a~K-/">
                    <field name="TEXT">reception</field>
                  </block>
                </statement>
                <value name="TYPE">
                  <block type="type_number" id="FN$N|tVB[ZEm=U_w9w]m"></block>
                </value>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
    <value name="COLOUR">
      <block type="colour_rrggbb" id="I2tX+j:vTkTN[~PKC+dx">
        <mutation colour="#FFD700"></mutation>
        <field name="HUE">#FFD700</field>
      </block>
    </value>
  </block>
</xml>