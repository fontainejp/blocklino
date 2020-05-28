'use strict';

var Code = {};
Code.LANGUAGE_NAME = {
	'fr': 'Français',
	'en': 'English'
};
Code.LANGUAGE_RTL = ['ar', 'fa', 'he'];
Code.getLang = function() {
  var lang = window.localStorage.lang;
  if (lang === undefined) {
    lang = 'fr'
	window.localStorage.lang = lang;
  }
  return lang
};
Code.isRtl = function() {
  return Code.LANGUAGE_RTL.indexOf(Code.LANG) != -1;
};
Code.LANG = Code.getLang();
Code.initLanguage = function() {
  var rtl = Code.isRtl();
  $("html").attr('dir', rtl ? 'rtl' : 'ltr');
  $("html").attr('lang', Code.LANG);
  var languages = [];
  for (var lang in Code.LANGUAGE_NAME) {
    languages.push([Code.LANGUAGE_NAME[lang], lang]);
  }
  var comp = function(a, b) {
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return 0;
  };
  languages.sort(comp);
  var languageMenu = $('#languageMenu');
  languageMenu.empty();
  for (var i = 0; i < languages.length; i++) {
    var tuple = languages[i];
    var lang = tuple[tuple.length - 1];
    var option = new Option(tuple[0], lang);
    if (lang == Code.LANG) option.selected = true;
    languageMenu.append(option);
  }
  $('#span_theme').text(Blockly.Msg['span_theme']);
  $('#span_fontsize').text(Blockly.Msg['span_fontsize']);
  $('#span_card_connect').text(Blockly.Msg['span_card_connect']);
  $('#span_card_cpu').text(Blockly.Msg['span_card_cpu']);
  $('#span_card_voltage').text(Blockly.Msg['span_card_voltage']);
  $('#span_card_inout').text(Blockly.Msg['span_card_inout']);
  $('#span_card_flash').text(Blockly.Msg['span_card_flash']);
  $('#span_card_in_anal').text(Blockly.Msg['span_card_in_anal']);
  $('#span_card_out_anal').text(Blockly.Msg['span_card_out_anal']);
  $('#span_card_ram').text(Blockly.Msg['span_card_ram']);
  $('#span_card_eeprom').text(Blockly.Msg['span_card_eeprom']);
  $('#aboutBody').text(Blockly.Msg['aboutBody']);
  $('#aboutModalLabel').text(Blockly.Msg['aboutModalLabel']);
  $('#cardLabel').text(Blockly.Msg['cardLabel']);
  $('#aboutcardLabel').text(Blockly.Msg['aboutcardLabel']);
  $('#configModalLabel').text(Blockly.Msg['configModalLabel']);
  $('#imageModalLabel').text(Blockly.Msg['imageModalLabel']);
  $('#colorModalLabel').text(Blockly.Msg['btn_tint']);
  $('#usbModalLabel').text(Blockly.Msg['usbLabel']);
  $('#versionModalLabel').text(Blockly.Msg['versionModalLabel']); 
  $('#exampleModalLabel').text(Blockly.Msg['exampleModalLabel']); 
  $('#variableModalLabel').text(Blockly.Msg['variableModalLabel']);
  $('#variablebody').text(Blockly.Msg['variablebody']);
  $('#labelToolboxDefinition').text(Blockly.Msg['labelToolboxDefinition']); 
  $('#survol_check').text(Blockly.Msg['survol_check']);
  $('#survol_flash').text(Blockly.Msg['survol_flash']);
  $('#survol_bin').text(Blockly.Msg['survol_bin']);
  $('#span_about').text(Blockly.Msg['span_about']);
  $('#span_title1').text(Blockly.Msg['span_blocklino']);
  $('#span_example').text(Blockly.Msg['span_example']);
  $('#span_connect_serial').text(Blockly.Msg['span_connect_serial']);
  $('#span_select_all').text(Blockly.Msg['span_select_all']);
  $('#span_languageMenu').text(Blockly.Msg['span_languageMenu']);
  $('#span_version1').text(Blockly.Msg['span_blocklino']);
  $('#span_update').text(Blockly.Msg['span_update']);
  $('#span_verify_update').text(Blockly.Msg['span_verify_update']);
  $('#span_site').text(Blockly.Msg['span_site']);
  $('#span_forum').text(Blockly.Msg['span_forum']);
  $('#span_contact').text(Blockly.Msg['span_contact']);
  $('#btn_close_config').text(Blockly.Msg['btn_close']);
  $('#btn_valid_config').text(Blockly.Msg['btn_valid']);
  $('#btn_valid_config_ffau').text(Blockly.Msg['btn_valid']);
  $('#btn_close_msg').text(Blockly.Msg['btn_close']);
  $('#btn_valid_msg').text(Blockly.Msg['btn_valid']);
  $('#btn_variable').text(Blockly.Msg['btn_variable']);
  var prog = window.localStorage.prog;
  if (prog != "python") {
	$('#btn_preview').attr('title', Blockly.Msg['btn_preview_ino']);
	$('#btn_saveino').attr('title', Blockly.Msg['btn_save_ino']) 
  } else {
	$('#btn_preview').attr('title', Blockly.Msg['btn_preview_py']);
	$('#btn_saveino').attr('title', Blockly.Msg['btn_save_py']);   
  }
  $('#btn_usb').attr('title', Blockly.Msg['usbLabel']);
  $('#btn_card').attr('title', Blockly.Msg['cardLabel']);
  $('#btn_add').attr('title', Blockly.Msg['btn_add']);
  $('#btn_copy').attr('title', Blockly.Msg['btn_copy']);
  $('#btn_print').attr('title', Blockly.Msg['btn_print']);
  $('#btn_undo').attr('title', Blockly.Msg['btn_undo']);
  $('#btn_redo').attr('title', Blockly.Msg['btn_redo']);
  $('#btn_search').attr('title', Blockly.Msg['btn_search']);
  $('#btn_new').attr('title', Blockly.Msg['btn_new']);
  $('#btn_saveXML').attr('title', Blockly.Msg['btn_saveXML']);
  $('#btn_fakeload').attr('title', Blockly.Msg['btn_fakeload']);
  $('#btn_term').attr('title', Blockly.Msg['btn_term']);
  $('#btn_factory').attr('title', Blockly.Msg['btn_factory']);
  $('#btn_config').attr('title', Blockly.Msg['btn_config']);
  $('#btn_about').attr('title', Blockly.Msg['btn_about']);
  $('#btn_example').attr('title', Blockly.Msg['btn_example']);
  $('#btn_html').attr('title', Blockly.Msg['btn_html']);
  $('#btn_tint').attr('title', Blockly.Msg['btn_tint']);
  $('#btn_games').attr('title', Blockly.Msg['btn_games']);
  $("xml").find("category").each(function() {
	if (!$(this).attr('id')) {
	  $(this).attr('id', $(this).attr('name'));
	  $(this).attr('name', Blockly.Msg[$(this).attr('name')]);
	}
  });
};
document.write('<script src="lang/msg_' + Code.LANG + '.js"></script>\n');
document.write('<script src="lang/Blockly_' + Code.LANG + '.js"></script>\n');
document.write('<script src="lang/Arduino_' + Code.LANG + '.js"></script>\n');
document.write('<script src="lang/microbit_' + Code.LANG + '.js"></script>\n');
document.write('<script src="lang/fresnel_' + Code.LANG + '.js"></script>\n');