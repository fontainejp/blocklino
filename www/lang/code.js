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
  $('#span_theme').text(MSG['span_theme']);
  $('#span_fontsize').text(MSG['span_fontsize']);
  $('#span_card_connect').text(MSG['span_card_connect']);
  $('#span_card_cpu').text(MSG['span_card_cpu']);
  $('#span_card_voltage').text(MSG['span_card_voltage']);
  $('#span_card_inout').text(MSG['span_card_inout']);
  $('#span_card_flash').text(MSG['span_card_flash']);
  $('#span_card_in_anal').text(MSG['span_card_in_anal']);
  $('#span_card_out_anal').text(MSG['span_card_out_anal']);
  $('#span_card_ram').text(MSG['span_card_ram']);
  $('#span_card_eeprom').text(MSG['span_card_eeprom']);
  $('#aboutBody').text(MSG['aboutBody']);
  $('#aboutModalLabel').text(MSG['aboutModalLabel']);
  $('#cardLabel').text(MSG['cardLabel']);
  $('#aboutcardLabel').text(MSG['aboutcardLabel']);
  $('#configModalLabel').text(MSG['configModalLabel']);
  $('#versionModalLabel').text(MSG['versionModalLabel']); 
  $('#exampleModalLabel').text(MSG['exampleModalLabel']); 
  $('#variableModalLabel').text(MSG['variableModalLabel']);
  $('#variablebody').text(MSG['variablebody']);
  $('#labelToolboxDefinition').text(MSG['labelToolboxDefinition']); 
  $('#survol').text(MSG['survol']);
  $('#survol_check').text(MSG['survol_check']);
  $('#survol_flash').text(MSG['survol_flash']);
  $('#survol_bin').text(MSG['survol_bin']);
  $('#span_about').text(MSG['span_about']);
  $('#span_example').text(MSG['span_example']);
  $('#span_connect_serial').text(MSG['span_connect_serial']);
  $('#span_select_all').text(MSG['span_select_all']);
  $('#span_languageMenu').text(MSG['span_languageMenu']);
  $('#span_blocklino').text(MSG['span_blocklino']);
  $('#span_update').text(MSG['span_update']);
  $('#span_verify_update').text(MSG['span_verify_update']);
  $('#span_site').text(MSG['span_site']);
  $('#span_forum').text(MSG['span_forum']);
  $('#span_contact').text(MSG['span_contact']);
  $('#btn_close_config').text(MSG['btn_close']);
  $('#btn_valid_config').text(MSG['btn_valid']);
  $('#btn_close_msg').text(MSG['btn_close']);
  $('#btn_valid_msg').text(MSG['btn_valid']);
  $('#btn_variable').text(MSG['btn_variable']);
  var prog = window.localStorage.prog;
  if (prog != "python") {
	$('#btn_preview').attr('title', MSG['btn_preview_ino']);
	$('#btn_saveino').attr('title', MSG['btn_save_ino']) 
  } else {
	$('#btn_preview').attr('title', MSG['btn_preview_py']);
	$('#btn_saveino').attr('title', MSG['btn_save_py']);   
  }
  $('#btn_copy').attr('title', MSG['btn_copy']);
  $('#btn_print').attr('title', MSG['btn_print']);
  $('#btn_undo').attr('title', MSG['btn_undo']);
  $('#btn_redo').attr('title', MSG['btn_redo']);
  $('#btn_search').attr('title', MSG['btn_search']);
  $('#btn_new').attr('title', MSG['btn_new']);
  $('#btn_saveXML').attr('title', MSG['btn_saveXML']);
  $('#btn_fakeload').attr('title', MSG['btn_fakeload']);
  $('#btn_term').attr('title', MSG['btn_term']);
  $('#btn_factory').attr('title', MSG['btn_factory']);
  $('#btn_config').attr('title', MSG['btn_config']);
  $('#btn_about').attr('title', MSG['btn_about']);
  $('#btn_example').attr('title', MSG['btn_example']);
  $('#btn_html').attr('title', MSG['btn_html']);
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