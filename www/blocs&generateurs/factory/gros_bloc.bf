<xml xmlns="http://www.w3.org/1999/xhtml">
  <language>Blockly.Arduino['gros_bloc']=function(block){
  var value_text = block.getFieldValue('_text')
  var value_dropdown = block.getFieldValue('_dropdown')
  var value_colour = block.getFieldValue('_colour')
  var value_var = Blockly.Arduino.variableDB_.getName(block.getFieldValue('_var'), Blockly.Variables.NAME_TYPE)
  var value_angle = block.getFieldValue('_angle')
  var value_check = block.getFieldValue('_check') == 'TRUE'
  var value_number = block.getFieldValue('_number')
  var value_block = Blockly.Arduino.valueToCode(block, '_block', Blockly.Arduino.ORDER_ATOMIC)
  var value_statement = Blockly.Arduino.statementToCode(block, '_statement')
  Blockly.Arduino.includes_["ma_bibliotheque"] = "#include &lt;bib.h&gt;"
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
  
  </language>
  <block type="factory_base" id="va}UtwkFi#@D=_JOFh~j" deletable="false" x="31" y="17">
    <mutation connections="NONE"></mutation>
    <field name="NAME">gros_bloc</field>
    <field name="INLINE">EXT</field>
    <field name="CONNECTIONS">NONE</field>
    <statement name="INPUTS">
      <block type="input_dummy" id="znvC5(zM%k-qkjIX|!t(">
        <field name="ALIGN">LEFT</field>
        <statement name="FIELDS">
          <block type="field_image" id="5Na{P+df)yr!4.wv{S+j">
            <field name="SRC">star-o.png</field>
            <field name="WIDTH">25</field>
            <field name="HEIGHT">25</field>
            <field name="ALT">*</field>
            <next>
              <block type="field_static" id="X:LW_;]D49TLAlhDi4l5">
                <field name="TEXT">texte</field>
                <next>
                  <block type="field_input" id="BwQ;hx8/(E/OUQg$KXj/">
                    <field name="TEXT">bla bla</field>
                    <field name="FIELDNAME">_text</field>
                    <next>
                      <block type="field_static" id="Jl]|3iPOuxX{^7f+tcV*">
                        <field name="TEXT">liste</field>
                        <next>
                          <block type="field_dropdown" id="^j8/nvAiL8a|X]6!8{n7">
                            <mutation options="3"></mutation>
                            <field name="FIELDNAME">_dropdown</field>
                            <field name="USER0">un</field>
                            <field name="CPU0">1</field>
                            <field name="USER1">deux</field>
                            <field name="CPU1">2</field>
                            <field name="USER2">trois</field>
                            <field name="CPU2">3</field>
                            <next>
                              <block type="field_static" id="Zd=:ug1jF*ClVY_T-nqH">
                                <field name="TEXT">couleur</field>
                                <next>
                                  <block type="field_colour" id="Vozcou38*e,o!)G1;/*_">
                                    <field name="COLOUR">#ff0000</field>
                                    <field name="FIELDNAME">_colour</field>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </statement>
        <next>
          <block type="input_dummy" id="566V#.vkHM:F5SQ8x}eH">
            <field name="ALIGN">CENTRE</field>
            <statement name="FIELDS">
              <block type="field_static" id="P(EGe2M(ACWs`dg`q|m_">
                <field name="TEXT">variable</field>
                <next>
                  <block type="field_variable" id="I7F+si5g+8_/a!5z{h}P">
                    <field name="TEXT">item</field>
                    <field name="FIELDNAME">_var</field>
                    <next>
                      <block type="field_static" id="Kx4VL,q_9U!M9s:=WWuj">
                        <field name="TEXT">angle</field>
                        <next>
                          <block type="field_angle" id="pWYyA[_@Mzz*UTH{UZ/H">
                            <field name="ANGLE">90</field>
                            <field name="FIELDNAME">_angle</field>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
            <next>
              <block type="input_dummy" id="=8E-XIm6-xPZC`lfP%Mh">
                <field name="ALIGN">RIGHT</field>
                <statement name="FIELDS">
                  <block type="field_static" id="T7PKNAm{N,0jyg3C:YqJ">
                    <field name="TEXT">case à cocher</field>
                    <next>
                      <block type="field_checkbox" id="^GzJB?K:?.kqhn!~mvvF">
                        <field name="CHECKED">TRUE</field>
                        <field name="FIELDNAME">_check</field>
                        <next>
                          <block type="field_static" id="BzcK^Dlk2/S?4[p6F/Rf">
                            <field name="TEXT">nombre</field>
                            <next>
                              <block type="field_math" id="SC,{oc[9iL!qH}`u[ce(">
                                <field name="TEXT">123</field>
                                <field name="FIELDNAME">_number</field>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </statement>
                <next>
                  <block type="input_value" id="3{ltNS[su}eQMEjxZD_-">
                    <field name="INPUTNAME">_block</field>
                    <field name="ALIGN">RIGHT</field>
                    <statement name="FIELDS">
                      <block type="field_static" id="Z9Va9{tV$T/({DZHE=5{">
                        <field name="TEXT">bloc</field>
                      </block>
                    </statement>
                    <next>
                      <block type="input_statement" id="nDb2s(IOjgpnP2F3SQDV">
                        <field name="INPUTNAME">_statement</field>
                        <field name="ALIGN">LEFT</field>
                        <statement name="FIELDS">
                          <block type="field_static" id="=d}YLPq+Q}r{7Oo2xbH^">
                            <field name="TEXT">branche</field>
                          </block>
                        </statement>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
    <value name="COLOUR">
      <block type="colour_rrggbb" id="oUd_Sqq8B!!`:U$=1vXg">
        <mutation colour="#4488FF"></mutation>
        <field name="HUE">#4488FF</field>
      </block>
    </value>
  </block>
</xml>