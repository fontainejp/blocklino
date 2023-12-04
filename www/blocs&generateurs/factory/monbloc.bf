<xml xmlns="http://www.w3.org/1999/xhtml">
  <language>Blockly.Arduino['monbloc']=function(block){
  Blockly.Arduino.includes_['lib'] = '#include "lib.h" ;'; // à supprimer si inutile
  Blockly.Arduino.variables_['var'] = 'int var;'; // à supprimer si inutile
  Blockly.Arduino.definitions_['inst'] = 'inst instance;'; // à supprimer si inutile
  Blockly.Arduino.userFunctions_['func'] = 'void func(){return 0};'; // à supprimer si inutile
  Blockly.Arduino.setups_['setup'] = 'code_setup();'; // à supprimer si inutile
  var code = 'code_loop();\n';
  return code
};
  </language>
  <block type="factory_base" id="o:6o[J;,}SrRp;uGa{e3" deletable="false" x="0" y="0">
    <mutation connections="NONE"></mutation>
    <field name="NAME">monbloc</field>
    <field name="INLINE">EXT</field>
    <field name="CONNECTIONS">NONE</field>
    <statement name="INPUTS">
      <block type="input_dummy" id="O!Mm8?LFuW0-A^[dK6R+">
        <field name="ALIGN">LEFT</field>
        <statement name="FIELDS">
          <block type="field_image" id="^j`!)6[!5p+(e.uI:x8f">
            <field name="SRC">android.png</field>
            <field name="WIDTH">32</field>
            <field name="HEIGHT">32</field>
            <field name="ALT">*</field>
          </block>
        </statement>
      </block>
    </statement>
  </block>
</xml>