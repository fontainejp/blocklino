<xml xmlns="http://www.w3.org/1999/xhtml">
  <language>Blockly.Arduino['vitesse_serie']=function(block){
    var value_dropdown = block.getFieldValue('_dropdown')
    var code = value_dropdown
    return [code, Blockly.Arduino.ORDER_ATOMIC]
}
  </language>
  <block type="factory_base" id="icqte[+jHGl+MEWT,~Lr" deletable="false" movable="false" x="0" y="0">
    <mutation connections="LEFT"></mutation>
    <field name="NAME">vitesse_serie</field>
    <field name="INLINE">EXT</field>
    <field name="CONNECTIONS">LEFT</field>
    <statement name="INPUTS">
      <block type="input_dummy" id="~^)D1!f@eOfXYX;%[0XQ">
        <field name="ALIGN">LEFT</field>
        <statement name="FIELDS">
          <block type="field_dropdown" id=";-m)va$NPpIE|cVZdGu!">
            <mutation options="5"></mutation>
            <field name="FIELDNAME">_dropdown</field>
            <field name="USER0">1200</field>
            <field name="CPU0">1200</field>
            <field name="USER1">9600</field>
            <field name="CPU1">9600</field>
            <field name="USER2">19200</field>
            <field name="CPU2">19200</field>
            <field name="USER3">31250</field>
            <field name="CPU3">31250</field>
            <field name="USER4">57600</field>
            <field name="CPU4">57600</field>
            <next>
              <block type="field_static" id="2kPS9@e.MOvNCW}1x[]^">
                <field name="TEXT">bauds</field>
              </block>
            </next>
          </block>
        </statement>
      </block>
    </statement>
    <value name="OUTPUTTYPE">
      <block type="type_number" id="MI@-omk?l3EGf^hTm*{k"></block>
    </value>
  </block>
</xml>