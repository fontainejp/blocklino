/*  communication  */
Blockly.Arduino["serial_init"]=function(block){
    var dropdown_speed=block.getFieldValue("SPEED");
	  var dropdown_pin=block.getFieldValue("pin");
	  switch (dropdown_pin) {
        case "0":
            Blockly.Arduino.setups_["serial_begin"]="Serial.begin(" + dropdown_speed + ");";
            break;
        case "19":
            Blockly.Arduino.setups_["serial_begin"]="Serial1.begin(" + dropdown_speed + ");";
            break;
        case "17":
            Blockly.Arduino.setups_["serial_begin"]="Serial2.begin(" + dropdown_speed + ");";
            break
        case "15":
            Blockly.Arduino.setups_["serial_begin"]="Serial3.begin(" + dropdown_speed + ");";
            break
	}
  return ""
};
Blockly.Arduino["serial_read"]=function(block){
    var code="Serial.read()";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["serial_line"]=function(block){
    var code='"\\n"';
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["serial_available"]=function(block){
    var code="Serial.available()";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["serial_write"]=function(block){
    var content=Blockly.Arduino.valueToCode(block, "CONTENT", Blockly.Arduino.ORDER_ATOMIC);
    return "Serial.print(" + content + ");\n"
};
Blockly.Arduino["serial_flush"]=function(block){
    return "Serial.flush();\n"
};
Blockly.Arduino["soft_init"]=function(block){
    var dropdown_pin1=block.getFieldValue("PIN1");
    var dropdown_pin2=block.getFieldValue("PIN2");
    var dropdown_speed=block.getFieldValue("SPEED");
    Blockly.Arduino.includes_["define_ss"]="#include <SoftwareSerial.h>";
	Blockly.Arduino.definitions_["define_ss"]="SoftwareSerial mySerial(" + dropdown_pin1 + "," + dropdown_pin2 + ");";
    Blockly.Arduino.setups_["setup_sserial"]="mySerial.begin(" + dropdown_speed + ");";
    return ""
};
Blockly.Arduino["soft_read"]=function(block){
    var code="mySerial.read()";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["soft_write"]=function(block){
    var content=Blockly.Arduino.valueToCode(block, "CONTENT", Blockly.Arduino.ORDER_ATOMIC);
    return "mySerial.write(" + content + ");\n"
};
Blockly.Arduino["soft_available"]=function(block){
    var code="mySerial.available()";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
/*  wifi  */
Blockly.Arduino['esp8266_init']=function(block){
	var mode=block.getFieldValue("clientserveur");
	var adressage=block.getFieldValue("staticdynamic");
	var reseau=block.getFieldValue("SSID");
	var cle=block.getFieldValue("KEY");
	Blockly.Arduino.includes_["esp8266"] = "#include <ESP8266WiFi.h>";
	if (adressage=="static"){
		var ipabc=block.getFieldValue("IPa")+","+block.getFieldValue("IPb")+","+block.getFieldValue("IPc");
		var ipd=block.getFieldValue("IPd");
		var passerelle=block.getFieldValue("GATEWAY");
		var masque=block.getFieldValue("MASKa")+","+block.getFieldValue("MASKb")+","+block.getFieldValue("MASKc")+","+block.getFieldValue("MASKd");
		Blockly.Arduino.definitions_["esp8266"] = 'IPAddress ip('+ipabc+','+ipd+');\nIPAddress gateway('+ipabc+','+passerelle+');\nIPAddress subnet('+masque+');\n';
		Blockly.Arduino.setups_["esp8266"] = 'WiFi.disconnect();\n  delay(2500);\n  WiFi.config(ip, gateway, subnet);\n  WiFi.begin("'+reseau+'","'+cle+'");\n  while (WiFi.status() != WL_CONNECTED) { delay(250); };\n';
	} else {
		Blockly.Arduino.definitions_["esp8266"] = "";
		Blockly.Arduino.setups_["esp8266"] = 'WiFi.disconnect();\n  delay(2500);\n  WiFi.begin("'+reseau+'","'+cle+'");\n  while (WiFi.status() != WL_CONNECTED) { delay(250); };\n';
	}
	if (mode=="serveur"){
		var port=Blockly.Arduino.valueToCode(block, "V0", Blockly.Arduino.ORDER_ATOMIC);
		Blockly.Arduino.definitions_["esp8266"] += 'WiFiServer server(' + port + ');\n';
		Blockly.Arduino.setups_["esp8266"] += '  server.begin();\n';
	} else {
		Blockly.Arduino.definitions_["esp8266"] += 'WiFiClient client;\n';
	}
	return "" ;
};
Blockly.Arduino['esp8266_send']=function(block){
	var data=Blockly.Arduino.valueToCode(block, 'message', Blockly.Arduino.ORDER_ATOMIC);
	var code = 'client.println("HTTP/1.1 200 OK");\nclient.println("Content-Type: text/html");\nclient.println("");\nclient.println("<!DOCTYPE HTML>");\n';
	code += 'client.println("<html>");\nclient.println(' + data + ');\nclient.println("</html>");\n';
	return code
};
Blockly.Arduino['esp8266_send_html']=function(block){
	var htmlhead=Blockly.Arduino.statementToCode(block, 'HEAD');
	var htmlbody=Blockly.Arduino.statementToCode(block, "BODY");
    var code = 'client.println("HTTP/1.1 200 OK");\nclient.println("Content-Type: text/html; charset=UTF-8");\nclient.println("");\nclient.println("<!DOCTYPE HTML>");\n';
	code += 'client.println("<html>");\nclient.println("<head>");\n' + htmlhead + 'client.println("</head>");\n';
	code += 'client.println("<body>");\n' + htmlbody + 'client.println("</body>");\nclient.println("</html>");\n';
	code += 'delay(1);\nclient.stop();\n' ;
	return code
};
Blockly.Arduino['esp8266_wait_server']=function(block){
	return 'WiFiClient client = server.available();\nif (!client) return;\nwhile (!client.available()) { delay(1); }\nchar request = client.read();\nclient.flush();\n'
};
Blockly.Arduino['esp8266_wait_client']=function(block){
	var host=Blockly.Arduino.valueToCode(block, "host", Blockly.Arduino.ORDER_ATOMIC);
	var port=Blockly.Arduino.valueToCode(block, "port", Blockly.Arduino.ORDER_ATOMIC);
	return 'if (!client.connect(' + host + ',' + port + ')) { delay(1000) ; return }.\nwhile (client.available()){ String reponse = client.read(); };\n'
};
Blockly.Arduino["esp8266_request_indexof"]=function(block){
    var n=0;
    var argument=Blockly.Arduino.valueToCode(block, "CASE" + n, Blockly.Arduino.ORDER_NONE);
    var branch=Blockly.Arduino.statementToCode(block, "DO" + n);
	var code='if (request.indexOf(' + argument + ') != -1) {\n' + branch + '}\n';
	for (n=1; n <= block.casebreakCount_; n++) {
        argument=Blockly.Arduino.valueToCode(block, "CASE" + n, Blockly.Arduino.ORDER_NONE);
        branch=Blockly.Arduino.statementToCode(block, "DO" + n);
        code += 'if (request.indexOf(' + argument + ') != -1) {\n' + branch + '}\n'
    }
	return code
};
/*  bluetooth  */
Blockly.Arduino["bluetooth_a"]=function(block){
    var value_data_s=Blockly.Arduino.valueToCode(block, "data_s", Blockly.Arduino.ORDER_NONE);
    Blockly.Arduino.setups_["BLUETOOTH"]="Serial.begin(9600);";
    return "if (Serial.available() > 0) {\n  Serial.write(" + value_data_s + ");\n}\n"
};
Blockly.Arduino["bluetooth_b"]=function(block){
    var dropdown_speed=block.getFieldValue("SPEED");
	var dropdown_dagu=block.getFieldValue('dagu') == 'TRUE';
    var n=0;
    var argument=Blockly.Arduino.valueToCode(block, "CASE" + n, Blockly.Arduino.ORDER_NONE);
    var branch=Blockly.Arduino.statementToCode(block, "DO" + n);
    if (dropdown_dagu) {
		Blockly.Arduino.includes_["bluetooth10"]="#include <SoftwareSerial.h>";
		Blockly.Arduino.definitions_["bluetooth10"]="SoftwareSerial daguSerial(1,0);";
		Blockly.Arduino.setups_["bluetooth10"]="daguSerial.begin(" + dropdown_speed + ");";
		var code="if (daguSerial.available() > 0) {\n  char dataR=daguSerial.read();\n  if (dataR == " + argument + ") {\n  " + branch + "  }\n";
    } else {
        Blockly.Arduino.setups_["BLUETOOTH"]="Serial.begin(" + dropdown_speed + ");";
		var code="if (Serial.available() > 0) {\n  char dataR=Serial.read();\n  if (dataR == " + argument + ") {\n  " + branch + "  }\n";
    };    
	for (n=1; n <= block.casebreakCount_; n++) {
        argument=Blockly.Arduino.valueToCode(block, "CASE" + n, Blockly.Arduino.ORDER_NONE);
        branch=Blockly.Arduino.statementToCode(block, "DO" + n);
        code += "  if (dataR == " + argument + ") {\n  " + branch + "  }\n"
    }
    code += "}\n"
	return code
};
/*  structure  */
Blockly.Arduino["base_setup_loop"]=function(block){
    var branch=Blockly.Arduino.statementToCode(block, "DO");
    var loop=Blockly.Arduino.statementToCode(block, "LOOP");
    if (Blockly.Arduino.INFINITE_LOOP_TRAP) branch=Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + block.id + "'") + branch;
    var code=branch;
    var setup_key=Blockly.Arduino.variableDB_.getDistinctName("base_setup", Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.setups_[setup_key]=code;
    return [loop, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["base_loop"]=function(block){
    function statementToCodeNoTab(block, name) {
        var targetBlock=block.getInputTargetBlock(name);
        var code=Blockly.Arduino.blockToCode(targetBlock);
        if (!goog.isString(code)) throw 'Expecting code from statement block "' + targetBlock.type + '".';
        return code
    }
    var loopBranch=statementToCodeNoTab(block, "LOOP");
    return loopBranch
};
Blockly.Arduino["base_define"]=function(block){
    var branch=Blockly.Arduino.statementToCode(block, "DO");
    if (Blockly.Arduino.INFINITE_LOOP_TRAP) branch=Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + block.id + "'") + branch;
    var code=branch;
    var setup_key=Blockly.Arduino.variableDB_.getDistinctName("base_setup", Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.definitions_[setup_key]=code;
    return ""
};
Blockly.Arduino["base_code"]=function(block){
    return block.getFieldValue("TEXT") + "\n"
};
Blockly.Arduino["base_end"]=function(block){
    return "while(true);\n"
};
Blockly.Arduino["base_begin"]=function(block){
    return ""
};
Blockly.Arduino['base_code_entree']=function(block){
	var code=block.getFieldValue("TEXT");
	return [code, Blockly.Arduino.ORDER_ATOMIC] ;
};
/*  temps  */
Blockly.Arduino["inout_pulsein"]=function(block){
    var dropdown_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_stat=block.getFieldValue("STAT");
    Blockly.Arduino.setups_["setup_input_" + dropdown_pin]="pinMode(" + dropdown_pin + ", INPUT);";
    var code="pulseIn(" + dropdown_pin + "," + dropdown_stat + ")";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["millis"]=function(block){
	var _u=block.getFieldValue("unite");
    switch (_u) {
        case "u":
            var code="micros()";
            break;
        case "m":
            var code="millis()";
            break;
        case "s":
            code="1000*millis()";
            break
	}
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["base_delay"]=function(block){
    var _u=block.getFieldValue("unite");
    var delay_time=Blockly.Arduino.valueToCode(block, "DELAY_TIME", Blockly.Arduino.ORDER_ATOMIC);
    switch (_u) {
        case "u":
            var code="delayMicroseconds(" + delay_time + ");\n";
            break;
        case "m":
            var code="delay(" + delay_time + ");\n";
            break;
        case "s":
            code="delay(" + delay_time + "*1000);\n";
            break
    };
    return code
};
Blockly.Arduino["tempo_sans_delay"]=function(block){
    var _u=block.getFieldValue("unite");
    var delay_time=Blockly.Arduino.valueToCode(block, "DELAY_TIME", Blockly.Arduino.ORDER_ATOMIC);
	var faire=Blockly.Arduino.statementToCode(block, "branche");
	var temps="temps"+delay_time;
	Blockly.Arduino.definitions_["temporisation"+delay_time]="long "+temps+"=0 ;";
    switch (_u) {
        case "u":
            var code="if ((micros()-"+temps+")>=" + delay_time + ") {\n  "+temps+"=micros();\n"+faire+"}\n";
            break;
        case "m":
            var code="if ((millis()-"+temps+")>=" + delay_time + ") {\n  "+temps+"=millis();\n"+faire+"}\n";
            break;
        case "s":
            code="if ((millis()-"+temps+")>=" + delay_time + "*1000) {\n  "+temps+"=millis();\n"+faire+"}\n";
            break
    };
    return code
};
/*  entree sortie  */
Blockly.Arduino["inout_attachInterrupt"]=function(block){
	var dropdown_pin=block.getFieldValue('PIN');
	var dropdown_mode=block.getFieldValue('mode');
	var funcName='interrupt_'+dropdown_pin;
	Blockly.Arduino.setups_['setup_Interrupt_'+dropdown_pin]='pinMode('+dropdown_pin+', INPUT);\n  attachInterrupt('+dropdown_pin+','+funcName+','+dropdown_mode+');';
	var branch=Blockly.Arduino.statementToCode(block, 'DO' );
	Blockly.Arduino.codeFunctions_[funcName] ='void ' + funcName + '() {\n' + branch + '}';
	return "";
};
Blockly.Arduino["inout_detachInterrupt"]=function(block){
	var dropdown_pin=block.getFieldValue('PIN');
	return 'detachInterrupt('+dropdown_pin+');\n';
};
Blockly.Arduino["inout_digital_write"]=function(block){
    var dropdown_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_stat=Blockly.Arduino.valueToCode(block, "STAT", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_["setup_output_" + dropdown_pin]="pinMode(" + dropdown_pin + ", OUTPUT);";
    var code="digitalWrite(" + dropdown_pin + ", " + dropdown_stat + ");\n";
    return code
};
Blockly.Arduino["inout_digital_read"]=function(block){
    var dropdown_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_["setup_input_" + dropdown_pin]="pinMode(" + dropdown_pin + ", INPUT_PULLUP);";
    var code="digitalRead(" + dropdown_pin + ")";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["digital_read"]=function(block){
    var pull_up=block.getFieldValue('pullup') == 'TRUE';
    var dropdown_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    if (pull_up) {
        Blockly.Arduino.setups_["setup_input_" + dropdown_pin]="pinMode(" + dropdown_pin + ", INPUT_PULLUP);"
    } else {
        Blockly.Arduino.setups_["setup_input_" + dropdown_pin]="pinMode(" + dropdown_pin + ", INPUT);"
    };
    var code="digitalRead(" + dropdown_pin + ")";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["inout_analog_write"]=function(block){
    var dropdown_pin=block.getFieldValue("broche");
    var value_num=Blockly.Arduino.valueToCode(block, "NUM", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_["setup_output" + dropdown_pin]="pinMode(" + dropdown_pin + ", OUTPUT);";
    var code="analogWrite(" + dropdown_pin + ", " + value_num + ");\n";
    return code
};
Blockly.Arduino["inout_analog_read"]=function(block){
    var dropdown_pin=block.getFieldValue("broche");
    var code="analogRead(" + dropdown_pin + ")";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["inout_onoff"]=function(block){
    var code=block.getFieldValue("BOOL") == "HIGH" ? "HIGH" : "LOW";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["inout_angle_maths"]=function(block){
    var angle=block.getFieldValue("ANGLE");
    return [angle, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["digital_write"]=function(block){
    var dropdown_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_stat=block.getFieldValue("STAT");
    Blockly.Arduino.setups_["setup_output_" + dropdown_pin]="pinMode(" + dropdown_pin + ", OUTPUT);";
    return "digitalWrite(" + dropdown_pin + ", " + dropdown_stat + ");\n";
};
Blockly.Arduino["toggle"]=function(block){
    var dropdown_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_["toggle"+dropdown_pin]="boolean etat_" + dropdown_pin + "=LOW;";
    Blockly.Arduino.setups_["setup_output_" + dropdown_pin]="pinMode(" + dropdown_pin + ", OUTPUT);";
    return "digitalWrite(" + dropdown_pin + ", etat_" + dropdown_pin + ");\netat_"+ dropdown_pin + "=!etat_"+ dropdown_pin + ";\n";
};
/*  capteur  */
Blockly.Arduino["inout_bp"]=function(block){
    var dropdown_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_["setup_input_" + dropdown_pin]="pinMode(" + dropdown_pin + ", INPUT_PULLUP);";
    var code="digitalRead(" + dropdown_pin + ") == LOW";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["cap615"]=function(block){
    var dropdown_pin=block.getFieldValue("broche");
    var code="(1023-analogRead(" + dropdown_pin + "))/8";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["cap661"]=function(block){
    var dropdown_pin=block.getFieldValue("broche");
	Blockly.Arduino.variables_["tick_codeuse"]="unsigned int tick_codeuse = 0;";
	Blockly.Arduino.setups_['setup_Interrupt_'+dropdown_pin]='pinMode('+dropdown_pin+', INPUT);\n  attachInterrupt('+dropdown_pin+',codeuse,CHANGE);';
    Blockly.Arduino.codeFunctions_["codeuse"]='void codeuse(){\n  tick_codeuse++;\n}';
    var code="tick_codeuse";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["grove_ldr"]=function(block){
    var dropdown_pin=block.getFieldValue("broche");
    var code="analogRead(" + dropdown_pin + ")/7.9";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino['block_pir']=function(block){
    var value_v1=Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ASSIGNMENT);
    Blockly.Arduino.setups_["setup_output_" + value_v1]='pinMode('+value_v1+', INPUT);' ;
    var code='digitalRead('+value_v1+')';
    return [code, Blockly.Arduino.ORDER_ATOMIC] ;
};
Blockly.Arduino['block_feu']=function(block){
    var value_v1=Blockly.Arduino.valueToCode(block, 'FEU', Blockly.Arduino.ORDER_ASSIGNMENT);
    Blockly.Arduino.setups_["setup_output_" + value_v1]='pinMode('+value_v1+', INPUT);' ;
    var code='digitalRead('+value_v1+')';
    return [code, Blockly.Arduino.ORDER_ATOMIC] ;
};
Blockly.Arduino['block_anticollision']=function(block){
    var value_v1=Blockly.Arduino.valueToCode(block, 'COLLISION', Blockly.Arduino.ORDER_ASSIGNMENT);
    Blockly.Arduino.setups_["setup_output_" + value_v1]='pinMode('+value_v1+', INPUT);' ;
    var code='digitalRead('+value_v1+')';
    return [code, Blockly.Arduino.ORDER_ATOMIC] ;
};
Blockly.Arduino['block_sensitif']=function(block){
    var value_v1=Blockly.Arduino.valueToCode(block, 'SENSITIF', Blockly.Arduino.ORDER_ASSIGNMENT);
    Blockly.Arduino.setups_["setup_output_" + value_v1]='pinMode('+value_v1+', INPUT);' ;
    var code='digitalRead('+value_v1+')';
    return [code, Blockly.Arduino.ORDER_ATOMIC] ;
};
Blockly.Arduino['inter'] = function(block) {
	var value_pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
	var dropdown_state = block.getFieldValue('state');
    Blockly.Arduino.setups_["setup_input_" + value_pin]="pinMode(" + value_pin + ", INPUT_PULLUP);";
	var code = "digitalRead(" + value_pin + ") == " + dropdown_state ;
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino["ultrason"]=function(block){
    var trig=Blockly.Arduino.valueToCode(block, "a", Blockly.Arduino.ORDER_ASSIGNMENT);
    var echo=Blockly.Arduino.valueToCode(block, "b", Blockly.Arduino.ORDER_ASSIGNMENT);
	var nb=parseInt(trig+echo);
    Blockly.Arduino.codeFunctions_["ultrason_distance_"+nb]="float distance_"+nb+" () {\n  digitalWrite(" + trig + ",HIGH);\n  delayMicroseconds(10);\n  digitalWrite(" + trig + ",LOW);\n  return pulseIn(" + echo + ",HIGH)/58;\n}";
    Blockly.Arduino.setups_["ultrason_distance_"+nb]="pinMode(" + trig + ",OUTPUT);\n  digitalWrite(" + trig + ",LOW);\n  pinMode(" + echo + ",INPUT);";
    return ""
};
Blockly.Arduino["ultrason_distance"]=function(block){
	var nb=Blockly.Arduino.valueToCode(block, "nb", Blockly.Arduino.ORDER_ASSIGNMENT);
	var code ="distance_"+nb+"()";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["lm35"]=function(block){
    var pin=block.getFieldValue("broche");
    Blockly.Arduino.setups_["lm35"]="analogReference(INTERNAL);";
    var code="analogRead(" + pin + ")/11";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["dht11"]=function(block){
    var dropdown_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    var choice=block.getFieldValue("choix");
    Blockly.Arduino.includes_["dht.h"]='#include <DHT.h>';
    Blockly.Arduino.definitions_["dht"]="DHT dht(" + dropdown_pin + ", DHT11);";
    Blockly.Arduino.setups_["dht"]="dht.begin();";
    switch (choice) {
        case "h":
            var code="dht.readHumidity()";
            break;
        case "t":
            var code="dht.readTemperature()";
            break;
    }
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["suiveur_ligne"]=function(block){
    var dropdown_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_["setup_input_" + dropdown_pin]="pinMode(" + dropdown_pin + ", INPUT);";
    var code="digitalRead(" + dropdown_pin + ") == HIGH";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["light_sensor"]=function(block){
    var dropdown_pin=block.getFieldValue("broche");
    var code="analogRead(" + dropdown_pin + ")/4";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["potentiometre"]=function(block){
    var dropdown_pin=block.getFieldValue("broche");
    var code="analogRead(" + dropdown_pin + ")/4";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
/*  stockage  */
Blockly.Arduino['eeprom_write'] = function(block) {
	var adresse = Blockly.Arduino.valueToCode(block, 'adr', Blockly.Arduino.ORDER_ATOMIC);
	var valeur = Blockly.Arduino.valueToCode(block, 'val', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.includes_["eeprom"]='#include <EEPROM.h>';
	return 'EEPROM.write('+adresse+','+valeur+');\n';
};
Blockly.Arduino['eeprom_read'] = function(block) {
	var adresse = Blockly.Arduino.valueToCode(block, 'adr', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.includes_["eeprom"]='#include <EEPROM.h>';
	return 'EEPROM.read('+adresse+')';
};