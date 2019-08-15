'use strict';
goog.provide ( 'Blockly.Msg.fr');
goog.require ( 'Blockly.Msg');
// Electron window
Blockly.Msg.com1 = "Choose the port";
Blockly.Msg.com2 = "Select a port!" ;
Blockly.Msg.check = "Check";
Blockly.Msg.upload = "Upload";
Blockly.Msg.error = "ERROR: Blocks not connected";
Blockly.Msg.verif = "Check the program first!"
Blockly.Msg.save = "Save as format";
Blockly.Msg.update = "Update";
Blockly.Msg.new_update = "A new version is available, do you want to download and install it now?" ;
Blockly.Msg.yes = "yes";
Blockly.Msg.no = "no";
Blockly.Msg.uptodate = "Your version is up to date." ;
Blockly.Msg.download = "Download completed, the application will install and restart ..."
// common to all blocks
Blockly.Msg.HELPURL = "http://www.mon-club-elec.fr/pmwiki_reference_arduino/pmwiki.php?n=Main.ReferenceMaxi"; // do not translate
Blockly.Msg.pin = "on the spindle";
Blockly.Msg._AT = "on";
Blockly.Msg.AV = "before";
Blockly.Msg.AR = "rear";
Blockly.Msg.high = "HIGH"; // do not translate
Blockly.Msg.low = "LOW"; // do not translate
Blockly.Msg.right = "right";
Blockly.Msg.left = "left";
Blockly.Msg.direction = "direction";
Blockly.Msg.speed = "speed [0-90]";
// categories (menu)
Blockly.Msg.CAT_STOCKAGE = "Storage";
Blockly.Msg.CAT_numerical = "- Binary";
Blockly.Msg.CAT_analogique = "- Other";
Blockly.Msg.CAT_wifi = "- Wifi";
Blockly.Msg.CAT_TAB = "Table";
Blockly.Msg.CAT_list = "List";
Blockly.Msg.CAT_servo = "- Servo";
Blockly.Msg.CAT_del = "- DEL";
Blockly.Msg.CAT_LOGIC = "Control";
Blockly.Msg.CAT_MATH = "Math";
Blockly.Msg.CAT_TEXT = "text";
Blockly.Msg.CAT_VARIABLES = "Variable";
Blockly.Msg.CAT_FUNCTIONS = "function";
Blockly.Msg.CAT_ARDUINO = "Structure";
Blockly.Msg.CAT_ARDUINO_IN = "Input / Output";
Blockly.Msg.CAT_ARDUINO_OUT = "Exit";
Blockly.Msg.CAT_ARDUINO_TIME = "Time";
Blockly.Msg.CAT_actionneur = "actuator";
Blockly.Msg.CAT_com = "Communication";
Blockly.Msg.CAT_ARDUINO_COMM_SERIAL = "- Series";
Blockly.Msg.CAT_ARDUINO_COMM_SOFTSERIAL = "- Software";
Blockly.Msg.CAT_ARDUINO_motor = "- Motor";
Blockly.Msg.CAT_ultrason = "Sensor";
Blockly.Msg.CAT_bluetooth = "- Bluetooth";
Blockly.Msg.CAT_ARDUINO_matrice8x8 = "- Matrix";
Blockly.Msg.CAT_DFRobot_SHIELD_LCDKEYPAD = "- LCD Screen";
Blockly.Msg.CAT_iot = "IoT";
Blockly.Msg.CAT_html = "- HTML";
Blockly.Msg.CAT_DFPLAYER = "- Audio";
//Wireless
Blockly.Msg.esp8266_init_tooltip = "initialization of the wifi module and connection with the indicated parameters";
Blockly.Msg.esp8266_1 = "Esp 8266";
Blockly.Msg.esp8266_2 = "SSID";
Blockly.Msg.esp8266_3 = "key";
Blockly.Msg.esp8266_4 = "IP";
Blockly.Msg.esp8266_5 = "gateway";
Blockly.Msg.esp8266_6 = "mask";
Blockly.Msg.esp8266_7 = [["client", "client"], ["server", "server"]];
Blockly.Msg.esp8266_8 = "port";
Blockly.Msg.esp8266_9 = [["dynamic", "dynamic"], ["static", "static"]];
Blockly.Msg.esp8266_10 = "address";
Blockly.Msg.esp8266_recept_tooltip = "reception";
Blockly.Msg.esp8266_url = "http://julien.coron.free.fr/?p=928";
Blockly.Msg.esp8266_send_html_tooltip = "...";
Blockly.Msg.esp8266_send_html = "";
Blockly.Msg.esp8266_send_tooltip = "...";
Blockly.Msg.esp8266_send = "";
Blockly.Msg.esp8266_wait_tooltip = "...";
Blockly.Msg.esp8266_wait = "";
//INTERRUPTION
Blockly.Msg.LKL_ATTACHINTERRUPT_PIN = 'Interrupt: when a';
Blockly.Msg.LKL_DETACHINTERRUPT_PIN = "disable interrupt on spindle";
Blockly.Msg.LKL_TOOLTIP_INOUT_ATTACHINTERRUPT = "Specifies an action to take when an external interrupt (4 possible modes) occurs on pin 2 or 3";
Blockly.Msg.LKL_TOOLTIP_INOUT_DETACHINTERRUPT = "Disable the previously specified external interrupt";
Blockly.Msg.LKL_MODE = 'is detected on the pin';
// FIELDDROPDOWN
Blockly.Msg.note = [[ "OD \ u2083", "261"], [ "RE \ u2083", "293"], [ "MI \ u2083", "329"], [ "FA \ u2083" "349"], [ "SOL \ u2083", "392"], [ "LA \ u2083", "440"], [ "IF \ u2083", "493"], [ "OD \ u2084", "523 "], [" RE \ u2084 "," 587 "], [" MI \ u2084 "," 659 "], [" FA \ u2084 "," 698 "], [" SOL \ u2084 "," 784 "] [ "LA \ u2084", "880"]];
Blockly.Msg.tempo = [["\ u266B", "125"], ["\ u266A", "250"], ["\ u2669", "500"], ["white", "1000"], ["round", "2000"]];
Blockly.Msg.on_off = [["on", "LOW"], ["off", "HIGH"]];
Blockly.Msg.menublink = [["slowly", "1000"], ["fast", "100"]];
Blockly.Msg.AV_AR = [[Blockly.Msg.AV, "FORWARD"], [Blockly.Msg.AR, "BACKWARD"]]; // do not translate
Blockly.Msg.times = [["seconds", "s"], ["milliseconds", "m"], ["microseconds", "u"]];
Blockly.Msg.time = [["seconds", "s"], ["milliseconds", "m"]];
Blockly.Msg.char_lcd = [[ "# 1", "1"], [ "# 2", "2"], [ "3", "3"], [ "# 4" "4"], [ "# 5", "5"], [ "# 6", "6"], [ "No. 7", "7"], [ "# 8", "8 "]];
Blockly.Msg.rxtx = [[ "2", "2"], [ "3", "3"], [ "4", "4"], [ "5", "5"], [ "6 "," 6 "], [" 7 "," 7 "], [" 8 "," 8 "], [" 9 "," 9 "], [" 10 "," 10 "], [" 11 "," 11 "], [" 12 "," 12 "], [" 13 "," 13 "]];
Blockly.Msg.FIELDDROPDOWN = [["1 (high state)", Blockly.Msg.high], ["0 (low state)", Blockly.Msg.low]];
Blockly.Msg.FIELDDROPDOWN_0_1 = [["UP", Blockly.Msg.high], ["BAS", Blockly.Msg.low]];
Blockly.Msg.line = [["1", "0"], ["2", "1"]];
Blockly.Msg.colonne = [[ "1", "0"], [ "2", "1"], [ "3", "2"], [ "4", "3"], [ "5 "