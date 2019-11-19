/**
 * @author gasolin@gmail.com (Fred Lin)
 * @author Gwen
 */
'use strict';

goog.provide("Blockly.Blocks.arduino");
goog.require("Blockly.Blocks");

Blockly.Blocks['ethernet_mac_address'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.ETHERNET_BEGIN_HELPURL);
    this.setColour("#858CE3");
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("DE"),"MAC_ADDRESS_1")
      .appendField('-')
      .appendField(new Blockly.FieldTextInput("AD"),"MAC_ADDRESS_2")
      .appendField('-')
      .appendField(new Blockly.FieldTextInput("BE"),"MAC_ADDRESS_3")
      .appendField('-')
      .appendField(new Blockly.FieldTextInput("EF"),"MAC_ADDRESS_4")
      .appendField('-')
      .appendField(new Blockly.FieldTextInput("FE"),"MAC_ADDRESS_5")
      .appendField('-')
      .appendField(new Blockly.FieldTextInput("ED"),"MAC_ADDRESS_6");
    this.setInputsInline(true);
    this.setOutput(true, 'String');
    this.setTooltip(Blockly.Msg.ETHERNET_MAC_ADDRESS_TOOLTIP);
  }
};

Blockly.Blocks['ethernet_begin_dhcp_client'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.ETHERNET_BEGIN_HELPURL);
    this.setColour("#FFCC66");
    this.appendDummyInput()
	  .appendField(Blockly.Msg.ETHERNET_BEGIN_TITLE)
      .appendField(new Blockly.FieldDropdown(Blockly.Msg.ETHERNET_VERSION_FIELDDROPDOWN), 'VERSION');
    this.appendValueInput("MAC_ADDRESS")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MAC_ADDRESS);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.ETHERNET_BEGIN_TOOLTIP);
  }
};

Blockly.Blocks['ethernet_begin_dhcp_server'] = {		// by BZH
  init: function() {
    this.setHelpUrl(Blockly.Msg.ETHERNET_BEGIN_HELPURL); // a finir
    this.setColour("#45BD49");
    this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_BEGIN_DHCP_SERVER_TITLE)
      .appendField(new Blockly.FieldDropdown(Blockly.Msg.ETHERNET_VERSION_FIELDDROPDOWN), 'VERSION');
    this.appendValueInput("MAC_ADDRESS")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ETHERNET_MAC_ADDRESS);
	this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_PORT)
      .appendField(new Blockly.FieldTextInput("80"),"PORT");
	this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(false);
    this.setTooltip(Blockly.Msg.ETHERNET_BEGIN_DHCP_TOOLTIP); // à finir
  }
};

Blockly.Blocks['ethernet_client_for_server'] = { // by BZH
  init: function() {
    this.setColour("#FFCC66");
    this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_CLIENT_FOR_SERVER_TITLE);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.ETHERNET_CLIENT_FOR_SERVER_TOOLTIP);
  }
};

Blockly.Blocks['ethernet_localip'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.ETHERNET_LOCALIP_HELPURL);
    this.setColour("#45BD49");
    this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_LOCALIP_TITLE);
    this.setOutput(true, 'String');
    this.setTooltip(Blockly.Msg.ETHERNET_LOCALIP_TOOLTIP);
  }
};

Blockly.Blocks['ethernet_available'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.ETHERNET_AVAILABLE_HELPURL);
    this.setColour("#FFCC66");
    this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_AVAILABLE_TITLE);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.ETHERNET_AVAILABLE_TOOLTIP);
  }
};

Blockly.Blocks['ethernet_connected'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.ETHERNET_CONNECTED_HELPURL);
    this.setColour("#FFCC66");
    this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_CONNECTED_TITLE);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.ETHERNET_CONNECTED_TOOLTIP);
  }
};

Blockly.Blocks['ethernet_connect'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.ETHERNET_CONNECT_HELPURL);
    this.setColour("#FFCC66");
    this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_CONNECT_TITLE);
    this.appendValueInput("SERVER")
      .setCheck("String")
      .appendField(Blockly.Msg.SERVER);
    this.appendDummyInput()
      .appendField(Blockly.Msg.PORT)
      .appendField(new Blockly.FieldTextInput("80"),"PORT");
    this.setOutput(true, 'Number');
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.ETHERNET_CONNECT_TOOLTIP);
  }
};

Blockly.Blocks['ethernet_print'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.ETHERNET_CLIENT_PRINT_HELPURL);
    this.setColour("#FFCC66");
    this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_CLIENT_PRINT_TITLE);
    this.appendValueInput("TEXT")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TEXT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ETHERNET_CLIENT_PRINT_TOOLTIP);
  }
};

Blockly.Blocks['ethernet_println'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.ETHERNET_CLIENT_PRINTLN_HELPURL);
    this.setColour("#FFCC66");
    this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_CLIENT_PRINTLN_TITLE);
    this.appendValueInput("TEXT")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TEXT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ETHERNET_CLIENT_PRINTLN_TOOLTIP);
  }
};

Blockly.Blocks['ethernet_stop'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.ETHERNET_STOP_HELPURL);
    this.setColour("#45BD49");
    this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_STOP_TITLE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ETHERNET_STOP_TOOLTIP);
  }
};

Blockly.Blocks['ethernet_read'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.ETHERNET_READ_HELPURL);
    this.setColour("#FFCC66");
    this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_READ_TITLE);
    this.setOutput(true, 'String');
    this.setTooltip(Blockly.Msg.ETHERNET_READ_TOOLTIP);
  }
};

Blockly.Blocks['ethernet_get_request'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.ETHERNET_GET_REQUEST_HELPURL);
    this.setColour("#FFCC66");
    this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_GET_REQUEST_TITLE);
    this.appendValueInput("URL")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ETHERNET_GET_REQUEST_URL);
    this.appendValueInput("SERVER")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ETHERNET_GET_REQUEST_SERVER);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ETHERNET_GET_REQUEST_TOOLTIP);
  }
};

Blockly.Blocks['ethernet_post_request'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.ETHERNET_POST_REQUEST_HELPURL);
    this.setColour("#FFCC66");
    this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_POST_REQUEST_TITLE);
    this.appendValueInput("URL")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ETHERNET_POST_REQUEST_URL);
    this.appendValueInput("SERVER")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ETHERNET_POST_REQUEST_SERVER);
    this.appendValueInput("POST_DATA")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ETHERNET_POST_DATA);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ETHERNET_POST_REQUEST_TOOLTIP);
  }
};

Blockly.Blocks['ethernet_HTML_send'] = {
  init: function() {
	this.setColour("#45BD49");
    this.appendDummyInput()
        .appendField(Blockly.Msg.ETHERNET_HTML_SEND_TITLE);
    this.appendValueInput("html")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ETHERNET_HTML_SEND_HTMLJS);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ethernet_HEADER_send'] = {
  init: function() {
	this.setColour("#45BD49");
    this.appendDummyInput()
        .appendField(Blockly.Msg.ETHERNET_HEADER_SEND_TITLE);
    this.appendDummyInput()
        .appendField("status :") 
	.setAlign(Blockly.ALIGN_RIGHT)
	.appendField(new Blockly.FieldDropdown(Blockly.Msg.ETHERNET_HEADER_SEND_FIELDDROPDOWN2), 'error');
    this.appendDummyInput()
        .appendField("type de la donnée :")   
	.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.ETHERNET_HEADER_SEND_FIELDDROPDOWN), 'datatype');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ethernet_HTML_send_page'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ETHERNET_HEADER_SEND_PAGE_TITLE)
        .appendField(new Blockly.FieldNumber(1), "partie");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#45BD49");
	this.setTooltip(Blockly.Msg.ETHERNET_HEADER_SEND_PAGE_TOOLTIP);
	this.setHelpUrl("");
  }
};



// ************STATIC IP

Blockly.Blocks['ethernet_begin_staticIP_server'] = {		// by BZH
  init: function() {
    this.setHelpUrl(Blockly.Msg.ETHERNET_BEGIN_HELPURL); // a finir
    this.setColour("#45BD49");
    this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_BEGIN_STATICIP_SERVER_TITLE)
      .appendField(new Blockly.FieldDropdown(Blockly.Msg.ETHERNET_VERSION_FIELDDROPDOWN), 'VERSION');
    this.appendValueInput("MAC_ADDRESS")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ETHERNET_MAC_ADDRESS);
	this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_PORT)
	  .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldTextInput("80"),"PORT");
	this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_STATICIP_IP)
	  .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldTextInput("172,16,32,29"),"IP");
	  this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_STATICIP_DNS)
	  .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldTextInput("172,16,32,1"),"DNS");
	  this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_STATICIP_GATEWAY)
	  .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldTextInput("172,16,32,1"),"GATEWAY");
	  this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_STATICIP_SUBNET)
	  .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldTextInput("255,255,252,0"),"SUBNET");
	this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(false);
    this.setTooltip(Blockly.Msg.ETHERNET_BEGIN_DHCP_TOOLTIP); // à finir
  }
};

Blockly.Blocks['ethernet_begin_staticIP_client'] = {		// by BZH
  init: function() {
    this.setHelpUrl(Blockly.Msg.ETHERNET_BEGIN_HELPURL); // a finir
    this.setColour("#FFCC66");
    this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_BEGIN_STATICIP_CLIENT_TITLE)
      .appendField(new Blockly.FieldDropdown(Blockly.Msg.ETHERNET_VERSION_FIELDDROPDOWN), 'VERSION');
    this.appendValueInput("MAC_ADDRESS")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ETHERNET_MAC_ADDRESS);
	this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_STATICIP_IP)
	  .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldTextInput("172,16,32,29"),"IP");
	  this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_STATICIP_DNS)
	  .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldTextInput("172,16,32,1"),"DNS");
	  this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_STATICIP_GATEWAY)
	  .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldTextInput("172,16,32,1"),"GATEWAY");
	  this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_STATICIP_SUBNET)
	  .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldTextInput("255,255,252,0"),"SUBNET");
	this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(false);
    this.setTooltip(Blockly.Msg.ETHERNET_BEGIN_DHCP_TOOLTIP); // à finir
  }
};

Blockly.Blocks['ethernet_server_begin'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.ETHERNET_BEGIN_HELPURL);
    this.setColour("#45BD49");
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(Blockly.Msg.ETHERNET_VERSION_FIELDDROPDOWN), 'VERSION')
      .appendField(Blockly.Msg.ETHERNET_BEGIN_TITLE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_MAC_ADDRESS)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldTextInput("0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED"),"MAC_ADDRESS");
    this.appendDummyInput()
      .appendField(Blockly.Msg.IP_ADDRESS)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldTextInput("192.168.0.100"),"IP_ADDRESS");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.ETHERNET_BEGIN_TOOLTIP);
  }
};
// PARSER
Blockly.Blocks['ethernet_PARSER_init'] = {
  init: function() {
	this.setColour("#FFCC66");
    this.appendDummyInput()
	    .appendField(Blockly.Msg.ETHERNET_PARSER_INIT_TITLE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setTooltip("");
	this.setHelpUrl("");
  }
};

Blockly.Blocks['ethernet_PARSER_parse'] = {
  init: function() {
	this.setColour("#FFCC66");
    //this.appendDummyInput()
	//    .appendField(Blockly.Msg.ETHERNET_PARSER_PARSE_TITLE);
	this.appendValueInput("input")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ETHERNET_PARSER_PARSE_INPUT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setTooltip("");
	this.setHelpUrl("");
  }
};

Blockly.Blocks['ethernet_PARSER_end'] = {
  init: function() {
	this.setColour("#FFCC66");
    this.appendDummyInput()
	    .appendField(Blockly.Msg.ETHERNET_PARSER_END_TITLE);
	this.setOutput(true, 'Boolean');
	this.setTooltip("");
	this.setHelpUrl("");
  }
};

Blockly.Blocks['ethernet_PARSER_count'] = {
  init: function() {
	this.setColour("#FFCC66");
	this.appendDummyInput()
	    .appendField(Blockly.Msg.ETHERNET_PARSER_COUNT_TITLE);
	this.setOutput(true, 'Number');
	this.setTooltip("");
	this.setHelpUrl("");
  }
};

Blockly.Blocks['ethernet_PARSER_getmyparam'] = {
  init: function() {
	this.setColour("#FFCC66");
    this.appendDummyInput()
	    .appendField(Blockly.Msg.ETHERNET_PARSER_GETMYPARAM_TITLE);
	this.appendValueInput("myparam")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ETHERNET_PARSER_GETMYPARAM_PARAM);
	this.setOutput(true, 'Text');
	this.setTooltip("");
	this.setHelpUrl("");
  }
};

Blockly.Blocks['ethernet_PARSER_purge'] = {
  init: function() {
	this.setColour("#FFCC66");
    this.appendDummyInput()
	    .appendField(Blockly.Msg.ETHERNET_PARSER_PURGE_TITLE);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setTooltip("");
	this.setHelpUrl("");
  }
};
//PARSER V2

Blockly.Blocks['ethernet_ATTENTE_CLIENT'] = {
  init: function() {
	this.setColour("#FFCC66");
    this.appendDummyInput()
        .appendField(Blockly.Msg.ETHERNET_ATTENTE_CLIENT_TITLE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null); 
	this.setTooltip("");
	this.setHelpUrl("");
  }
};

Blockly.Blocks['ethernet_PARSERV2_CREATION'] = {
  init: function() {
	this.setColour("#DB3F3F");
    this.appendDummyInput()
        .appendField(Blockly.Msg.ETHERNET_PARSERV2_CREATION_TITLE)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.ETHERNET_PARSERV2_CREATION_VERSION_FIELDDROPDOWN), 'VERSION');		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null); 
	this.setTooltip(Blockly.Msg.ETHERNET_PARSERV2_CREATION_TOOLTIP);
	this.setHelpUrl("");
  }
};

Blockly.Blocks['ethernet_PARSERV2_LECTURE'] = {
  init: function() {  
    this.appendDummyInput()
		.appendField(Blockly.Msg.ETHERNET_PARSERV2_LECTURE_TITLE);
	this.appendDummyInput()
		.appendField("Affichage Requete (0/1)")
		.appendField(new Blockly.FieldTextInput("0"),"DEBUG");
	this.setColour("#DB3F3F");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.ETHERNET_PARSERV2_LECTURE_TOOLTIP);
	this.setHelpUrl("");
  }
};
 
 Blockly.Blocks['ethernet_PARSERV2_PARSING'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ETHERNET_PARSERV2_PARSING_TITLE);
	this.setColour("#DB3F3F");
	this.setOutput(true, null);
	this.setTooltip(Blockly.Msg.ETHERNET_PARSERV2_PARSING_TOOLTIP);
	this.setHelpUrl("");
  }
};

 Blockly.Blocks['ethernet_PARSERV2_GETNAME'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ETHERNET_PARSERV2_GETNAME_TITLE);
	this.appendValueInput("nbNom")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ETHERNET_PARSERV2_GETNAME_PARAM);
	this.setColour("#DB3F3F");
	this.setOutput(true, null);
	this.setTooltip(Blockly.Msg.ETHERNET_PARSERV2_GETNAME_TOOLTIP);
	this.setHelpUrl("");
  }
};

 Blockly.Blocks['ethernet_PARSERV2_GETVALUE'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ETHERNET_PARSERV2_GETVALUE_TITLE);
	this.appendValueInput("nbVal")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ETHERNET_PARSERV2_GETVALUE_PARAM);
	this.setColour("#DB3F3F");
	this.setOutput(true, null);
	this.setTooltip(Blockly.Msg.ETHERNET_PARSERV2_GETVALUE_TOOLTIP);
	this.setHelpUrl("");
  }
};

Blockly.Blocks['ethernet_PARSERV2_FREE'] = {
  init: function() {  
    this.appendDummyInput()
		.appendField(Blockly.Msg.ETHERNET_PARSERV2_FREE_TITLE);
	this.setColour("#DB3F3F");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.ETHERNET_PARSERV2_FREE_TOOLTIP);
	this.setHelpUrl("");
  }
};		

Blockly.Blocks['ethernet_PARSERV2_ATOI'] = {
  init: function() {  
    this.appendDummyInput()
		.appendField(Blockly.Msg.ETHERNET_PARSERV2_ATOI_TITLE);
	this.appendValueInput("ascii")
		.setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ETHERNET_PARSERV2_ATOI_PARAM);
	this.setColour("#FFAA00");
	this.setOutput(true, null);
	this.setTooltip(Blockly.Msg.ETHERNET_PARSERV2_ATOI_TOOLTIP);
	this.setHelpUrl("");
  }
};	

Blockly.Blocks['ethernet_PARSERV2_ATOF'] = {
  init: function() {  
    this.appendDummyInput()
		.appendField(Blockly.Msg.ETHERNET_PARSERV2_ATOF_TITLE);
	this.appendValueInput("ascii")
		.setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ETHERNET_PARSERV2_ATOF_PARAM);
	this.setColour("#FFAA00");
	this.setOutput(true, null);
	this.setTooltip(Blockly.Msg.ETHERNET_PARSERV2_ATOF_TOOLTIP);
	this.setHelpUrl("");
  }
};	
 
/////WIFI ESP 8266 ////
Blockly.Blocks['ethernet_wifi_begin_server'] = {		// by BZH
  init: function() {
    this.setHelpUrl(Blockly.Msg.ETHERNET_WIFI_BEGIN_SERVER_HELPURL); 
    this.setColour("#FFCC66");
    this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_WIFI_BEGIN_SERVER_TITLE)
	this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_PORT)
	  .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldTextInput("80"),"PORT");
	this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_WIFI_SSID)
	  .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldTextInput("BOX_SSID"),"SSID");
	this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_WIFI_PASS)
	  .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldTextInput("abba1234abba1234"),"PASS");
	this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(false);
    this.setTooltip(Blockly.Msg.ETHERNET_WIFI_BEGIN_SERVER_TOOLTIP); // à finir
  }
};

Blockly.Blocks['ethernet_client_for_wifi_server'] = {
  init: function() {
    this.setColour("#FFCC66");
    this.appendDummyInput()
        .appendField(Blockly.Msg.ETHERNET_CLIENT_FOR_WIFI_SERVER_TITLE);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.ETHERNET_CLIENT_FOR_SERVER_TOOLTIP);
  }
};

Blockly.Blocks['ethernet_wifi_localip'] = {
  init: function() {
    this.setColour("#FFCC66");
    this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_WIFI_LOCALIP_TITLE);
    this.setOutput(true, 'String');
    this.setTooltip(Blockly.Msg.ETHERNET_WIFI_LOCALIP_TOOLTIP);
  }
};
///////////////////////////////////////////////////////////////////////////GENE////////////////////////////////////////////////////////
Blockly.Arduino.ethernet_begin_dhcp_client = function() {
  var version = this.getFieldValue('VERSION');
  var mac = Blockly.Arduino.valueToCode(this, 'MAC_ADDRESS', Blockly.Arduino.ORDER_ATOMIC) || '0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED'
  mac = mac.replace(/"/g, "");
  Blockly.Arduino.includes_['define_spi'] = '#include <SPI.h>';
  if (version == "PROTEUS")
  {Blockly.Arduino.includes_['define_ethernet'] = '#include <UIPEthernet.h>';}
  else
  {Blockly.Arduino.definitions_['define_ethernet'] = '#include <Ethernet.h>';}  
  Blockly.Arduino.definitions_['define_ethernet_client'] = 'EthernetClient client;';
  Blockly.Arduino.definitions_['define_arduino_mac'] = 'byte mac[] = {' + mac + '};\n';
  Blockly.Arduino.setups_['begin'] = 'Ethernet.begin(mac);';
  var code = '';
  return code;
};

Blockly.Arduino.ethernet_begin_dhcp_server = function() {
  var version = this.getFieldValue('VERSION');
  var mac = Blockly.Arduino.valueToCode(this, 'MAC_ADDRESS', Blockly.Arduino.ORDER_ATOMIC) || '0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED'
  mac = mac.replace(/"/g, "");
  var port = this.getFieldValue('PORT'); 
  Blockly.Arduino.includes_['define_spi'] = '#include <SPI.h>';
  if (version == "PROTEUS")
  {Blockly.Arduino.includes_['define_ethernet'] = '#include <UIPEthernet.h>';}
  else
  {Blockly.Arduino.includes_['define_ethernet'] = '#include <Ethernet' + version + '.h>';}  
  Blockly.Arduino.definitions_['define_ethernet_server'] = 'EthernetServer server('+port+');';
  Blockly.Arduino.definitions_['define_arduino_mac'] = 'byte mac[] = {' + mac + '};\n';
  Blockly.Arduino.setups_['begin'] = 'Ethernet.begin(mac);';
  Blockly.Arduino.setups_['serveur_start'] = 'server.begin();';
  var code = '';    // pas terrible mais je ne sais pas faire autrement
  return code;
};

Blockly.Arduino.ethernet_client_for_server = function() {
  Blockly.Arduino.definitions_['define_ethernet_client'] = 'EthernetClient client;'; // en cas d'utilisation de procedure
  var code = 'EthernetClient client = server.available()';   
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ethernet_mac_address = function () {
  var mac1 = this.getFieldValue('MAC_ADDRESS_1');
  var mac2 = this.getFieldValue('MAC_ADDRESS_2');
  var mac3 = this.getFieldValue('MAC_ADDRESS_3');
  var mac4 = this.getFieldValue('MAC_ADDRESS_4');
  var mac5 = this.getFieldValue('MAC_ADDRESS_5');
  var mac6 = this.getFieldValue('MAC_ADDRESS_6');
  var code = '0x' + mac1 + ', 0x' + mac2 + ', 0x' + mac3 + ', 0x' + mac4 + ', 0x' + mac5 + ', 0x' + mac6;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
}

// Blockly.Arduino.ethernet_client_begin = function() {
  // var version = this.getFieldValue('VERSION');
  // var mac_address = this.getFieldValue('MAC_ADDRESS');
  // var ip_address = this.getFieldValue('IP_ADDRESS');
  // ip_address = ip_address.replace(/\./g, ",");

  // Blockly.Arduino.definitions_['define_spi'] = '#include <SPI.h>';
  // Blockly.Arduino.definitions_['define_ethernet'] = '#include <Ethernet' + version + '.h>';
  // Blockly.Arduino.definitions_['define_ethernet_client'] = 'EthernetClient client;';
  // Blockly.Arduino.definitions_['define_mac_address'] = 'byte mac[] = {' + mac_address + '};';
  // Blockly.Arduino.definitions_['define_ip_address'] = 'IPAddress ip(' + ip_address + ');';

  // var code = 'Ethernet.begin(mac,ip);\n';
  // return code;
// };

Blockly.Arduino.ethernet_localip = function() {
  var code = 'Ethernet.localIP()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ethernet_available = function() {
  var code = 'client.available()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ethernet_connected = function() {
  var code = 'client.connected()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ethernet_connect = function() {
  var server = Blockly.Arduino.valueToCode(this, 'SERVER', Blockly.Arduino.ORDER_ATOMIC) || ''
  var port = this.getFieldValue('PORT');
  var code = 'client.connect(' + server + ',' + port +')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ethernet_print = function() {
  var text = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || ''
  var code = 'client.print(' + text + ');\n';
  return code;
};

Blockly.Arduino.ethernet_println = function() {
  var text = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || ''
  var code = 'client.println(' + text +');\n';
  return code;
};

Blockly.Arduino.ethernet_stop = function() {
  var code = 'client.stop();\n';
  return code;
};

Blockly.Arduino.ethernet_read = function() {
  var code = '(char)client.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ethernet_get_request = function() {
  var url = Blockly.Arduino.valueToCode(this, 'URL', Blockly.Arduino.ORDER_ATOMIC) || ''
  var server = Blockly.Arduino.valueToCode(this, 'SERVER', Blockly.Arduino.ORDER_ATOMIC) || ''
  url = url.replace(/\"/g, "");
  server = server.replace(/\"/g, "");
  var code = 'client.println("GET ' + url + ' HTTP/1.1");\n';
  code += 'client.println(F("Host: ' + server + '"));\n';
  code += 'client.println(F("Connection: close"));\n';
  code += 'client.println();\n';
  return code;
};

Blockly.Arduino.ethernet_post_request = function() {
  var url = Blockly.Arduino.valueToCode(this, 'URL', Blockly.Arduino.ORDER_ATOMIC) || ''
  var server = Blockly.Arduino.valueToCode(this, 'SERVER', Blockly.Arduino.ORDER_ATOMIC) || ''
  var post_data = Blockly.Arduino.valueToCode(this, 'POST_DATA', Blockly.Arduino.ORDER_ATOMIC) || ''
  url = url.replace(/\"/g, "");
  server = server.replace(/\"/g, "");
  var code = 'client.println("POST ' + url + ' HTTP/1.1");\n';
  code += 'client.println(F("Host: ' + server + '"));\n';
  code += 'client.println(F("Connection: close"));\n';
  code += 'client.println(F("Content-Type: application/x-www-form-urlencoded"));\n';
  code += 'client.print(F("Content-Length: "));\n';
  code += 'client.println(Post_data.length());\n';
  code += 'client.println("");\n';
  code += 'client.print(' + post_data +');';
  return code;
};

Blockly.Arduino.ethernet_HTML_send = function() {
  var page_html = Blockly.Arduino.valueToCode(this, 'html', Blockly.Arduino.ORDER_ATOMIC);
  page_html = page_html.replace(/\"/g, "\\\"");
  var code ='client.println("'+page_html+'");\n';
  code +='delay(1);\n';
  return code;
};

Blockly.Arduino.ethernet_HEADER_send = function() {
  var error = this.getFieldValue('error');	
  var datatype = this.getFieldValue('datatype');	
  if (error == "200")
    {
	  var code = 'client.println("HTTP/1.1 200 OK");\n';
	}
  if (error == "204")
    {
	  var code = 'client.println("HTTP/1.1 204 No Content");\n';
	}
  if (error == "404")
    {
	  var code = 'client.println("HTTP/1.1 404 Not Found");\n';
	}  
  if (datatype =="text")
	{		
		code +='client.println("Content-Type: text/html");\n';
		code +='client.println("");\n';  
	}
  if (datatype =="png")
	{
		code +='client.println("Content-Type: image/png");\n';
		code +='client.println("");\n';  
	}
  return code;
};

Blockly.Arduino.ethernet_HTML_send_page = function() {
	
  var numpage = this.getFieldValue('partie');	
  var code ='Reponse_part'+numpage+'(client);  // attention include \n';		
  code +='delay(1);\n';
  return code;
};


//**** STATIC ****

Blockly.Arduino.ethernet_begin_staticIP_server = function() {
  var version = this.getFieldValue('VERSION');
  var mac = Blockly.Arduino.valueToCode(this, 'MAC_ADDRESS', Blockly.Arduino.ORDER_ATOMIC) || '0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED'
  mac = mac.replace(/"/g, "");
  var port = this.getFieldValue('PORT'); 
  var ip = this.getFieldValue('IP'); 
  var dns = this.getFieldValue('DNS'); 
  var gateway = this.getFieldValue('GATEWAY'); 
  var subnet = this.getFieldValue('SUBNET'); 
  Blockly.Arduino.includes_['define_spi'] = '#include <SPI.h>';
  if (version == "PROTEUS")
  {Blockly.Arduino.includes_['define_ethernet'] = '#include <UIPEthernet.h>';}
  else
  {Blockly.Arduino.includes_['define_ethernet'] = '#include <Ethernet' + version + '.h>';}  
  Blockly.Arduino.definitions_['define_ethernet_server'] = 'EthernetServer server('+port+');';
  Blockly.Arduino.definitions_['define_arduino_mac'] = 'byte mac[] = {' + mac + '};';
  Blockly.Arduino.definitions_['define_arduino_ip'] = 'IPAddress ip(' + ip + ');';
  Blockly.Arduino.definitions_['define_arduino_dns'] = 'IPAddress DNS(' + dns + ');';
  Blockly.Arduino.definitions_['define_arduino_gateway'] = 'IPAddress gateway(' + gateway + ');';
  Blockly.Arduino.definitions_['define_arduino_subnet'] = 'IPAddress subnet(' + subnet + ');';  
  Blockly.Arduino.setups_['begin'] = 'Ethernet.begin(mac,ip,DNS,gateway,subnet);';
  Blockly.Arduino.setups_['serveur_start'] = 'server.begin();';
  var code = '';  
  return code;
};

Blockly.Arduino.ethernet_begin_staticIP_client = function() {
  var version = this.getFieldValue('VERSION');
  var mac = Blockly.Arduino.valueToCode(this, 'MAC_ADDRESS', Blockly.Arduino.ORDER_ATOMIC) || '0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED'
  mac = mac.replace(/"/g, "");
  var ip = this.getFieldValue('IP'); 
  var dns = this.getFieldValue('DNS'); 
  var gateway = this.getFieldValue('GATEWAY'); 
  var subnet = this.getFieldValue('SUBNET'); 
  Blockly.Arduino.includes_['define_spi'] = '#include <SPI.h>';
  if (version == "PROTEUS")
  {Blockly.Arduino.includes_['define_ethernet'] = '#include <UIPEthernet.h>';}
  else
  {Blockly.Arduino.includes_['define_ethernet'] = '#include <Ethernet' + version + '.h>';}  
  Blockly.Arduino.definitions_['define_ethernet_client'] = 'EthernetClient client;';
  Blockly.Arduino.definitions_['define_arduino_mac'] = 'byte mac[] = {' + mac + '};';
  Blockly.Arduino.definitions_['define_arduino_ip'] = 'IPAddress ip(' + ip + ');';
  Blockly.Arduino.definitions_['define_arduino_dns'] = 'IPAddress DNS(' + dns + ');';
  Blockly.Arduino.definitions_['define_arduino_gateway'] = 'IPAddress gateway(' + gateway + ');';
  Blockly.Arduino.definitions_['define_arduino_subnet'] = 'IPAddress subnet(' + subnet + ');';  
  Blockly.Arduino.setups_['begin'] = 'Ethernet.begin(mac,ip,DNS,gateway,subnet);';
  var code = '';  
  return code;
};


/* Blockly.Arduino.ethernet_client_begin = function() {
  var version = this.getFieldValue('VERSION');
  var mac_address = this.getFieldValue('MAC_ADDRESS');
  var ip_address = this.getFieldValue('IP_ADDRESS');
  ip_address = ip_address.replace(/\./g, ",");

  Blockly.Arduino.includes_['define_spi'] = '#include <SPI.h>';
  Blockly.Arduino.includes_['define_ethernet'] = '#include <Ethernet' + version + '.h>';
  Blockly.Arduino.definitions_['define_ethernet_client'] = 'EthernetClient client;';
  Blockly.Arduino.definitions_['define_mac_address'] = 'byte mac[] = {' + mac_address + '};';
  Blockly.Arduino.definitions_['define_ip_address'] = 'IPAddress ip(' + ip_address + ');';

  var code = 'Ethernet.begin(mac,ip);\n';
  return code;
}; */

// **** PARSER ****
Blockly.Arduino.ethernet_PARSER_init = function() {
  Blockly.Arduino.includes_['define_request'] = '#include <HttpRequest.h> \n';    
  Blockly.Arduino.definitions_['create_request_object'] = 'HttpRequest httpReq; \n';
  Blockly.Arduino.definitions_['variables_globales'] = 'char name[HTTP_REQ_PARAM_NAME_LENGTH], value[HTTP_REQ_PARAM_VALUE_LENGTH]; \n';
  var code ='char name[HTTP_REQ_PARAM_NAME_LENGTH], value[HTTP_REQ_PARAM_VALUE_LENGTH]; \n';
  return code;
};

Blockly.Arduino.ethernet_PARSER_parse = function() {
  var cara = Blockly.Arduino.valueToCode(this, 'input', Blockly.Arduino.ORDER_ATOMIC) || ''
  var code ='httpReq.parseRequest('+cara+'); \n';
  return code;
};

Blockly.Arduino.ethernet_PARSER_end = function() {
  var code ='httpReq.endOfRequest()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ethernet_PARSER_count = function() {
  var code ='httpReq.paramCount';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ethernet_PARSER_getmyparam = function() {
  var myparam = Blockly.Arduino.valueToCode(this, 'myparam', Blockly.Arduino.ORDER_ATOMIC);	
  Blockly.Arduino.definitions_['myfonction1'] = 'char* myparam (String parametre) {parametre.toCharArray(name, 16);int pos = httpReq.getParam(name, value);if (pos > 0) {return (value);}else {return "variable non trouvé";}}';
  var code ='myparam('+myparam+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ethernet_PARSER_purge = function() {
  var code ='httpReq.resetRequest(); \n';
  return code;
};

// **** PARSERV2 ****
Blockly.Arduino.ethernet_ATTENTE_CLIENT = function() {
  var code ='EthernetClient client = server.available();\n';
  return code;
};

Blockly.Arduino.ethernet_PARSERV2_CREATION = function() {
  var version = this.getFieldValue('VERSION');
  if (version == "HW")
	 {Blockly.Arduino.includes_['define_ethernet'] = '#include <Ethernet.h>';
	  Blockly.Arduino.includes_['define_request'] = '#include <Parser_Ethernet.h>\n'; 
	 }
  else
	{Blockly.Arduino.includes_['define_ethernet'] = '#include <UIPEthernet.h>';
 	 Blockly.Arduino.includes_['define_request'] = '#include <Parser_UIPEthernet.h>\n'; 
	}	
  Blockly.Arduino.definitions_['create_request_object'] = 'Parser mon_parser;\n';
  Blockly.Arduino.definitions_['create_myreadstring']= 'char myreadstring[255];\n';  
  var code ='';
  return code;
};

Blockly.Arduino.ethernet_PARSERV2_LECTURE = function() {
  //var client = Blockly.Arduino.valueToCode(this, 'client', Blockly.Arduino.ORDER_ATOMIC);
  var debug = this.getFieldValue('DEBUG');
  var code ='mon_parser.readStream(client,mon_parser.myreadstring,'+debug+');\n';
  return code;
};

Blockly.Arduino.ethernet_PARSERV2_PARSING = function() {
  var code = 'mon_parser.parsing(mon_parser.myreadstring)' ;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ethernet_PARSERV2_GETNAME = function() {
  var nbNom = Blockly.Arduino.valueToCode(this, 'nbNom', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'mon_parser.getName('+nbNom+')' ;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ethernet_PARSERV2_GETVALUE = function() {
  var nbVal = Blockly.Arduino.valueToCode(this, 'nbVal', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'mon_parser.getValue('+nbVal+')' ;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ethernet_PARSERV2_FREE = function() {
  var code = 'mon_parser.free(mon_parser.myreadstring);\n' ;
  return code;
};

Blockly.Arduino.ethernet_PARSERV2_ATOI = function() {
  var ascii = Blockly.Arduino.valueToCode(this, 'ascii', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'atoi(' + ascii +')' ;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ethernet_PARSERV2_ATOF = function() {
  var ascii = Blockly.Arduino.valueToCode(this, 'ascii', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'atof(' + ascii +')' ;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


////// WIFI ////////////

Blockly.Arduino.ethernet_wifi_begin_server = function() {

  var port = this.getFieldValue('PORT'); 
  var ssid = this.getFieldValue('SSID'); 
  var pass = this.getFieldValue('PASS');   
  
  Blockly.Arduino.includes_['define_librarie'] = '#include "WiFiEsp.h"';
  Blockly.Arduino.definitions_['define_wifi_ssid'] = 'char ssid[] = "' + ssid + '";';
  Blockly.Arduino.definitions_['define_wifi_pass'] = 'char pass[] = "' + pass + '";';
  Blockly.Arduino.definitions_['define_status'] = 'int status = WL_IDLE_STATUS;';
  Blockly.Arduino.definitions_['define_ethernet_wifi_server'] = 'WiFiEspServer server('+port+');';
  
  Blockly.Arduino.setups_['init'] = 'WiFi.init(&esp8266);';
  Blockly.Arduino.setups_['connection'] = 'while(status!= WL_CONNECTED) {status = WiFi.begin(ssid,pass);}';
  Blockly.Arduino.setups_['server_start'] = 'server.begin();';  
  
  var code = '';  
  return code;
};

Blockly.Arduino.ethernet_client_for_wifi_server = function() {

  Blockly.Arduino.includes_['define_ethernet_client'] = 'WiFiEspClient client;'; // en cas d'utilisation de procédures
  
  var code = 'WiFiEspClient client = server.available()';   
  //return code;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ethernet_wifi_localip = function() {
  var code = 'WiFi.localIP()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


