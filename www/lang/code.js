'use strict';

var Code = {};
Code.LANGUAGE_NAME = {
		  //'en': 'English',
		  //'es': 'Español',
		  'fr': 'Français'
		};
Code.LANGUAGE_RTL = ['ar', 'fa', 'he'];
Code.getLang = function() {
  var lang = BlocklyDuino.getStringParamFromUrl('lang', '');
  if (Code.LANGUAGE_NAME[lang] === undefined) {
    lang = 'fr';
  }
  return lang;
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
    if (lang == Code.LANG) {
      option.selected = true;
    }
    languageMenu.append(option);
  }
  $('#aboutBody').html(MSG['aboutBody']);
  $('#span_about').text(MSG['span_about']);
  $('#span_example').text(MSG['span_example']);
  $('#aboutModalLabel').text(MSG['aboutModalLabel']);
  $('#span_connect_serial').text(MSG['span_connect_serial']);
  $('#configModalLabel').text(MSG['configModalLabel']);
  $('#span_select_all').text(MSG['span_select_all']);
  $('#btn_close_config').text(MSG['btn_close']);
  $('#btn_valid_config').text(MSG['btn_valid']);
  $('#btn_close_msg').text(MSG['btn_close']);
  $('#btn_valid_msg').text(MSG['btn_valid']);
  $('#versionModalLabel').text(MSG['versionModalLabel']); 
  $('#exampleModalLabel').text(MSG['exampleModalLabel']); 
  $('#labelToolboxDefinition').text(MSG['labelToolboxDefinition']); 
  $('#survol').text(MSG['survol']);
  $('#span_languageMenu').text(MSG['span_languageMenu']);
  $('#btn_variable').text(MSG['btn_variable']);
  $('#variableModalLabel').text(MSG['variableModalLabel']);
  $('#variablebody').text(MSG['variablebody']);
  $('#msg_ajax_ko').text(MSG['msg_ajax_ko']);
  $('#span_ajax_msg').text(MSG['span_ajax_msg']); 
  $('#btn_preview').attr('title', MSG['btn_preview']);
  $('#btn_saveino').attr('title', MSG['btn_saveino']);   
  $('#btn_print').attr('title', MSG['btn_print']);
  $('#btn_undo').attr('title', MSG['span_undo']);
  $('#btn_redo').attr('title', MSG['span_redo']);
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