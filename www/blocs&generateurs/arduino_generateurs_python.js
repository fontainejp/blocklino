/* communication */
Blockly.Python["serial_init"]=function(){return ""};
Blockly.Python["serial_input"]=function(block){
    var content=Blockly.Python.valueToCode(block, "CONTENT", Blockly.Python.ORDER_ATOMIC);
    return "command = input(" + content + ")\n"
};
Blockly.Python["serial_read"]=function(block){return ["command", Blockly.Python.ORDER_ATOMIC]};
Blockly.Python["serial_line"]=function(block){
    var code='"\\n"';
    return [code, Blockly.Python.ORDER_ATOMIC]
};
Blockly.Python["serial_tab"]=function(block){
    var code='" ; "';
    return [code, Blockly.Python.ORDER_ATOMIC]
};
Blockly.Python["serial_available"]=function(){return ''};
Blockly.Python["serial_write"]=function(block){
    var content=Blockly.Python.valueToCode(block, "CONTENT", Blockly.Python.ORDER_ATOMIC);
    return "print(" + content + ")\n"
};
Blockly.Python["serial_flush"]=function(){return ''};
Blockly.Python["soft_init"]=function(){return ''};
Blockly.Python["soft_read"]=function(block){return ''};
Blockly.Python["soft_write"]=function(block){return ''};
Blockly.Python["soft_available"]=function(block){return ''};
/*	entrée-sortie */
Blockly.Python["inout_attachInterrupt"]=function(block){
	var dropdown_pin=block.getFieldValue('PIN');
	var dropdown_mode=block.getFieldValue('mode');
	var branch=Blockly.Python.statementToCode(block, 'DO' );
	Blockly.Python.imports_["pin"]="from machine import Pin";
	Blockly.Python.userFunctions_['callback_'+dropdown_pin] ='def irq_' + dropdown_pin + '(pin):\n' + branch + "\n";
	Blockly.Python.userFunctions_['irq_'+dropdown_pin]='BROCHE_'+dropdown_pin+' = Pin('+dropdown_pin+', Pin.IN)\nBROCHE_'+dropdown_pin+'.irq(trigger='+dropdown_mode+', handler=irq_'+dropdown_pin+')\n';
	return ""
};
Blockly.Python["inout_detachInterrupt"]=function(){return ''};
Blockly.Python["inout_digital_write"]=function(block){
	var dropdown_pin=Blockly.Python.valueToCode(block, "PIN", Blockly.Python.ORDER_ATOMIC);
    var dropdown_state=Blockly.Python.valueToCode(block, "STAT", Blockly.Python.ORDER_ATOMIC);
	Blockly.Python.imports_["pin"]="from machine import Pin";
	Blockly.Python.definitions_["pin_"+dropdown_pin]="BROCHE_"+dropdown_pin+" = Pin("+dropdown_pin+", Pin.OUT)";
    return "BROCHE_"+dropdown_pin+".value("+dropdown_state+")\n"
};
Blockly.Python["inout_analog_write"]=function(block){
	var dropdown_pin=block.getFieldValue("broche");
    var dropdown_value=Blockly.Python.valueToCode(block, "NUM", Blockly.Python.ORDER_ATOMIC);
	Blockly.Python.imports_["pin"]="from machine import Pin";
	Blockly.Python.imports_["pwm"]="from machine import PWM";
	Blockly.Python.definitions_["pin_"+dropdown_pin]="BROCHE_"+dropdown_pin+" = PWM(Pin("+dropdown_pin+"), freq=500)";
    return "BROCHE_"+dropdown_pin+".duty("+dropdown_value+")\n"
};
Blockly.Python["digital_read"]=function(block){
	var dropdown_pin=Blockly.Python.valueToCode(block, "PIN", Blockly.Python.ORDER_ATOMIC);
    var pull_up=block.getFieldValue("pullup") == 'TRUE';
	Blockly.Python.imports_["pin"]="from machine import Pin";
	if (pull_up) {
		Blockly.Python.definitions_["pin_"+dropdown_pin]="BROCHE_"+dropdown_pin+" = Pin("+dropdown_pin+", Pin.IN, Pin.PULL_UP)";
	} else {
		Blockly.Python.definitions_["pin_"+dropdown_pin]="BROCHE_"+dropdown_pin+" = Pin("+dropdown_pin+", Pin.IN)";
	}
    return ["BROCHE_"+dropdown_pin+".value()", Blockly.Python.ORDER_ATOMIC]
};
Blockly.Python["inout_analog_read"]=function(block){
	Blockly.Python.imports_["adc"]="from machine import ADC";
	Blockly.Python.definitions_["pin_a0"]="BROCHE_A0 = ADC(0)";
    return ["BROCHE_A0.read()", Blockly.Python.ORDER_ATOMIC]
};
Blockly.Python["toggle"]=function(block){
    var dropdown_pin=Blockly.Python.valueToCode(block, "PIN", Blockly.Python.ORDER_ATOMIC);
	Blockly.Python.imports_["pin"]="from machine import Pin";
	Blockly.Python.definitions_["pin_"+dropdown_pin]="BROCHE_"+dropdown_pin+" = Pin("+dropdown_pin+", Pin.OUT)";
    return "BROCHE_" + dropdown_pin + ".value(not BROCHE_" + dropdown_pin + ".value()\n" ;
};
/*	structure  */
Blockly.Python["base_loop"]=function(block){
	return "while True:\n" + Blockly.Python.statementToCode(block, "LOOP")
};
Blockly.Python["base_code"]=function(block){
    return block.getFieldValue("TEXT") + "\n"
};
Blockly.Python["base_code_entree"]=function(block){
    return [block.getFieldValue("TEXT"), Blockly.Python.ORDER_ATOMIC]
};
Blockly.Python["base_end"]=function(){return""};
Blockly.Python["base_begin"]=function(){return""};
Blockly.Python["base_define"]=function(){return""};
Blockly.Python["base_setup_loop"]=function(){return""};
/*	temps  */
Blockly.Python["base_delay"]=function(block){
    var _u=block.getFieldValue("unite");
    var delay_time=Blockly.Python.valueToCode(block, "DELAY_TIME", Blockly.Python.ORDER_ATOMIC);
	Blockly.Python.imports_["time"]="import time";
    switch (_u) {
        case "u":
            var code="time.sleep_us(" + delay_time + ")\n";
            break;
        case "m":
            var code="time.sleep_ms(" + delay_time + ")\n";
            break;
        case "s":
            code="time.sleep(" + delay_time + ")\n";
            break
    };
    return code
};
Blockly.Python["tempo_sans_delay"]=function(block){
    var _u=block.getFieldValue("unite");
    var delay_time=Blockly.Python.valueToCode(block, "DELAY_TIME", Blockly.Python.ORDER_ATOMIC);
	var faire=Blockly.Python.statementToCode(block, "branche");
	Blockly.Python.imports_["Timer"]="from machine import Timer";
	Blockly.Python.definitions_["timer"]="timer = Timer(-1)";
	Blockly.Python.userFunctions_["timer_1"]="def timer_1():\n"+faire;
    switch (_u) {
        case "s":
            Blockly.Python.userFunctions_["timer1"]="timer.init(period="+delay_time+"*1000, mode=machine.Timer.PERIODIC, callback=timer_1)";
			break;
        case "m":
            Blockly.Python.userFunctions_["timer1"]="timer.init(period="+delay_time+", mode=machine.Timer.PERIODIC, callback=timer_1)";
            break
    }
    return ""
};
Blockly.Python["inout_pulsein"]=function(){return''};
Blockly.Python["millis"]=function(block){
	var _u=block.getFieldValue("unite");
    switch (_u) {
		case "m":
            var code="time.ticks_diff(time.ticks_ms(), start)";
            break;
		case "u":
            var code="time.ticks_diff(time.ticks_us(), start)";
            break;
        case "s":
            code="time.ticks_diff(time.ticks_ms(), start))*1000";
            break
	}
    return [code, Blockly.Python.ORDER_ATOMIC]
};
Blockly.Python["millis_start"]=function(block){
	var _u=block.getFieldValue("unite");
	Blockly.Python.imports_["time"]="import time";
    switch (_u) {
		case "m":
		var code="start = time.ticks_ms()\n";
            break;
		case "u":
            var code="start = time.ticks_us()\n";
            break;
        case "s":
            code="start = time.ticks_ms()*1000\n";
            break
	}
	return code
};
/* bluetooth  */
Blockly.Python["bluetooth_a"]=function(){return''};
Blockly.Python["bluetooth_b"]==function(){return''};
/*  wifi  */
Blockly.Python['esp8266_init']=function(block){
	var mode=block.getFieldValue("clientserveur");
	var adressage=block.getFieldValue("staticdynamic");
	var reseau=block.getFieldValue("SSID");
	var cle=block.getFieldValue("KEY");
	Blockly.Python.imports_["network"]="import network";
	if (adressage=="static"){
		var ipabc=block.getFieldValue("IPa")+","+block.getFieldValue("IPb")+","+block.getFieldValue("IPc");
		var ipd=block.getFieldValue("IPd");
		var passerelle=block.getFieldValue("GATEWAY");
		var masque=block.getFieldValue("MASKa")+","+block.getFieldValue("MASKb")+","+block.getFieldValue("MASKc")+","+block.getFieldValue("MASKd");
		Blockly.Python.userFunctions_["networkS"] = 'wifi = network.WLAN(network.STA_IF)\nwifi.active(True)\nwifi.ifconfig(("'+ipabc+ipd+'","'+ipabc+passerelle+'","'+masque+'")\nwifi.connect("'+reseau+'","'+cle+'");\nwhile wifi.isconnected() == False:\n  pass\n';
	} else {
		Blockly.Python.userFunctions_["networkD"] = 'wifi = network.WLAN(network.STA_IF)\nwifi.active(True)\nwifi.connect("'+reseau+'","'+cle+'")\nwhile wifi.isconnected() == False:\n  pass\n';
	}
	if (mode=="serveur"){
		var port=Blockly.Python.valueToCode(block, "V0", Blockly.Python.ORDER_ATOMIC);
		Blockly.Python.definitions_["esp8266"] += 'WiFiServer server(' + port + ');\n';
		Blockly.Python.userFunctions_["esp8266"] += '  server.begin();\n';
	}
	return "" ;
};
Blockly.Python['esp8266_send']=function(block){
	var data=Blockly.Python.valueToCode(block, 'message', Blockly.Python.ORDER_ATOMIC);
	var code = 'client.println("HTTP/1.1 200 OK");\nclient.println("Content-Type: text/html");\nclient.println("");\nclient.println("<!DOCTYPE HTML>");\n';
	code += 'client.println("<html>");\nclient.println(' + data + ');\nclient.println("</html>");\n';
	return code
};
Blockly.Python['esp8266_send_html']=function(block){
	var htmlhead=Blockly.Python.statementToCode(block, 'HEAD');
	var htmlbody=Blockly.Python.statementToCode(block, "BODY");
    var code = 'client.println("HTTP/1.1 200 OK");\nclient.println("Content-Type: text/html; charset=UTF-8");\nclient.println("");\nclient.println("<!DOCTYPE HTML>");\n';
	code += 'client.println("<html>");\nclient.println("<head>");\n' + htmlhead + 'client.println("</head>");\n';
	code += 'client.println("<body>");\n' + htmlbody + 'client.println("</body>");\nclient.println("</html>");\n';
	code += 'delay(1);\nclient.stop();\n' ;
	return code
};
Blockly.Python['esp8266_wait_server']=function(block){
	return 'WiFiClient client = server.available();\nif (!client) return;\nwhile (!client.available()) { delay(1); }\nchar request = client.read();\nclient.flush();\n'
};
Blockly.Python['esp8266_wait_client']=function(block){
	var host=Blockly.Python.valueToCode(block, "host", Blockly.Python.ORDER_ATOMIC);
	var port=Blockly.Python.valueToCode(block, "port", Blockly.Python.ORDER_ATOMIC);
	return 'if (!client.connect(' + host + ',' + port + ')) { delay(1000) ; return }.\nwhile (client.available()){ String reponse = client.read(); };\n'
};
Blockly.Python["esp8266_request_indexof"]=function(block){
    var n=0;
    var argument=Blockly.Python.valueToCode(block, "CASE" + n, Blockly.Python.ORDER_NONE);
    var branch=Blockly.Python.statementToCode(block, "DO" + n);
	var code='if (request.indexOf(' + argument + ') != -1) {\n' + branch + '}\n';
	for (n=1; n <= block.casebreakCount_; n++) {
        argument=Blockly.Python.valueToCode(block, "CASE" + n, Blockly.Python.ORDER_NONE);
        branch=Blockly.Python.statementToCode(block, "DO" + n);
        code += 'if (request.indexOf(' + argument + ') != -1) {\n' + branch + '}\n'
    }
	return code
};
/*  stockage  */
Blockly.Python.eeprom_write=function(){return''};
Blockly.Python.eeprom_read=function(){return''};