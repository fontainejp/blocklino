'use strict';

var BlocklyDuino = {};
BlocklyDuino.selectedToolbox = "toolbox_arduino_all";
BlocklyDuino.selectedCard = "uno";
BlocklyDuino.content = "on";
BlocklyDuino.contentHTML = "on";
BlocklyDuino.theme = "sqlserver";
BlocklyDuino.size = "14px";
BlocklyDuino.workspace = null;
BlocklyDuino.loadOnce = "";
BlocklyDuino.prog_ino = "/* C/C++ */\n\nvoid setup() {\n\n}\nvoid loop() {\n\n}";
BlocklyDuino.prog_py = "# Python\n\nwhile True:\n  \n";
BlocklyDuino.prog_microbit = "# Python\n\nfrom microbit import *\n\nwhile True:\n  \n";

BlocklyDuino.init = function() {
	Code.initLanguage();
	BlocklyDuino.loadConfig();
	BlocklyDuino.workspace = Blockly.inject('content_blocks',{grid:{snap:true},sounds:false,media:'media/',toolbox:BlocklyDuino.buildToolbox(),zoom:{controls:true,wheel:true}});
	var bTD = document.getElementsByClassName('blocklyToolboxDiv');
	if ($("#toolboxes").val()=="toolbox_fresnel_all") {
		bTD[0].style.width = "290px"
	} else {
		bTD[0].style.width = "160px"
	}
	BlocklyDuino.bindFunctions();
	BlocklyDuino.workspace.render();
	BlocklyDuino.workspace.addChangeListener(BlocklyDuino.renderArduinoCodePreview);
	BlocklyDuino.loadFile();
	$('[data-toggle="tooltip"]').tooltip();
	window.addEventListener('unload', BlocklyDuino.backupBlocks, false)
}
BlocklyDuino.backupBlocks = function() {
    var xml = Blockly.Xml.workspaceToDom(BlocklyDuino.workspace);
    var text = Blockly.Xml.domToText(xml);
    window.localStorage.loadOnceBlocks = text;
}
BlocklyDuino.loadFile = function() {
	var urlFile = BlocklyDuino.getStringParamFromUrl('url', '');
	var content = window.localStorage.content;
	if (urlFile) {
		var file = urlFile.split("\\");
		var id = file.length - 1 ;
		document.getElementById('span_file').textContent = " - " + file[id];
	} else {
		BlocklyDuino.loadBlocks();
	}
	if (urlFile.endsWith(".py")) {
		$.get(urlFile, function(data) { 
			if (content=="on") $('#codeORblock').bootstrapToggle("off")
			editor.session.setMode("ace/mode/python");
			editor.setOptions({
				enableBasicAutocompletion: true,
				enableSnippets: true,
				enableLiveAutocompletion: true
			});
			editor.setValue(data,1)
		}, 'text')
	}
	if (urlFile.endsWith(".ino")) {
		$.get(urlFile, function(data) { 
			if (content=="on") $('#codeORblock').bootstrapToggle("off")
			editor.session.setMode("ace/mode/c_cpp");
			editor.setOptions({
				enableBasicAutocompletion: true,
				enableSnippets: true,
				enableLiveAutocompletion: true
			});
			editor.setValue(data,1)
		}, 'text')
	}
	if (urlFile.endsWith(".bloc")||urlFile.endsWith(".xml")) {
		if (content=="off") $('#codeORblock').bootstrapToggle("on")
		$.get( urlFile, function(data){BlocklyDuino.loadBlocks(data)}, 'text')
	}
}
BlocklyDuino.save_com = function() {
	$("#portserie").blur();
	var com=$("#portserie").val();
	window.localStorage.com = com;
}
BlocklyDuino.renderArduinoCodePreview = function() {
	var prog = window.localStorage.prog;
	if (prog != "python") {
		$('#pre_previewArduino').text(Blockly.Arduino.workspaceToCode(BlocklyDuino.workspace));
		$('#pre_previewArduino').html(prettyPrintOne($('#pre_previewArduino').html(), 'cpp'));
	} else {
		$('#pre_previewArduino').text(Blockly.Python.workspaceToCode(BlocklyDuino.workspace));
		$('#pre_previewArduino').html(prettyPrintOne($('#pre_previewArduino').html(), 'py'));
	}
}
BlocklyDuino.getStringParamFromUrl = function(name, defaultValue) {
  var val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'));
  return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue;
}
BlocklyDuino.loadBlocks = function(defaultXml) {
	if (defaultXml) {
		var xml = Blockly.Xml.textToDom(defaultXml);
		BlocklyDuino.workspace.clear();
		Blockly.Xml.domToWorkspace(xml,BlocklyDuino.workspace);
		BlocklyDuino.workspace.render();
	} else {
		if (window.localStorage.loadOnceBlocks ) {
			BlocklyDuino.loadOnce = window.localStorage.loadOnceBlocks;
		}
		var xml = Blockly.Xml.textToDom(BlocklyDuino.loadOnce);
		BlocklyDuino.workspace.clear();
		Blockly.Xml.domToWorkspace(xml,BlocklyDuino.workspace);
		BlocklyDuino.workspace.render();
	}
}
BlocklyDuino.load = function(event) {
	var files = event.target.files;
	if (files.length != 1) return;
	var reader = new FileReader();
	reader.onloadend = function(event) {
		var target = event.target;
		var content = window.localStorage.content;
		if (target.readyState == 2) {
			document.getElementById('span_file').textContent = " - " + files[0].name;
			if (files[0].name.endsWith("ino")) {
				if (content=="on") $('#codeORblock').bootstrapToggle("off")
				editor.session.setMode("ace/mode/c_cpp");
				editor.setOptions({
					enableBasicAutocompletion: true,
					enableSnippets: true,
					enableLiveAutocompletion: true
				});
				editor.setValue(target.result,1)
			}
			if (files[0].name.endsWith("py")) {
				if (content=="on") $('#codeORblock').bootstrapToggle("off")
				editor.session.setMode("ace/mode/python");
				editor.setOptions({
					enableBasicAutocompletion: true,
					enableSnippets: true,
					enableLiveAutocompletion: true
				});
				editor.setValue(target.result,1)
			}
			if (files[0].name.endsWith("bloc")||files[0].name.endsWith("xml")) {
				if (content=="off") $('#codeORblock').bootstrapToggle("on")
				BlocklyDuino.loadBlocks(target.result);
			}
		}
	}
	reader.readAsText(files[0])
}
BlocklyDuino.loadConfig = function() {
	var card = window.localStorage.card;
	var content = window.localStorage.content;
	var prog = window.localStorage.prog;
	var theme = window.localStorage.theme;
	var size = window.localStorage.size;
	if (card===undefined) {
		window.localStorage.card = BlocklyDuino.selectedCard;
		window.localStorage.prog = profile[BlocklyDuino.selectedCard].prog;
		window.localStorage.toolbox = BlocklyDuino.selectedToolbox;
		$("#boards").val(BlocklyDuino.selectedCard);
		$('#arduino_card_mini_picture').attr("src", profile[BlocklyDuino.selectedCard]['picture']);
		$("#toolboxes").val(BlocklyDuino.selectedToolbox);
		BlocklyDuino.loadToolboxDefinition(BlocklyDuino.selectedToolbox);
	} else {
		var toolbox = window.localStorage.toolbox;
		BlocklyDuino.selectedToolbox = toolbox;
		$("#boards").val(card);
		$('#arduino_card_mini_picture').attr("src", profile[card]['picture']);
		$("#toolboxes").val(toolbox);
		BlocklyDuino.loadToolboxDefinition(toolbox);
	}
	if (content===undefined) {
		window.localStorage.content = BlocklyDuino.content;
		$('#codeORblock').bootstrapToggle(BlocklyDuino.content);
		$('#btn_search').addClass("hidden")
	} else {
		$('#codeORblock').bootstrapToggle(content);
		if (content=="off") {
			$('a[href="#content_code"]').tab('show');
			$('#btn_search').removeClass("hidden")
		}
		$('#btn_search').addClass("hidden")
	}
	if (prog == "python") {
		$('#btn_bin').addClass("hidden")
	}
	if ((theme === undefined)||(theme=="sqlserver")) {
		$('#theme').val(BlocklyDuino.theme);
		BlocklyDuino.theme_sqlserver();
		window.localStorage.theme = BlocklyDuino.theme;
	} else {
		$('#theme').val("monokai");
		BlocklyDuino.theme_monokai();		
		editor.setTheme('ace/theme/monokai');	
		window.localStorage.theme = "monokai";
	}
	if (size === undefined) {
		$('#fontsize').val(BlocklyDuino.size);
		window.localStorage.size = BlocklyDuino.size
	} else {
		$('#fontsize').val(size);
		document.getElementById('content_code').style.fontSize = size
	}
}
BlocklyDuino.change_card = function() {
	//BlocklyDuino.backupBlocks();
	var card = window.localStorage.card;
	var toolbox = window.localStorage.toolbox;
	$("#boards").blur();
	var new_card = $("#boards").val();
	var new_prog = window.profile[new_card].prog;
	if (window.profile[new_card].cpu != window.profile[card].cpu) {
		if (window.confirm(Blockly.Msg['arduino_card'] + window.profile[new_card].description + ' ?')){
			$('#arduino_card_mini_picture').attr("src", profile[new_card]['picture']);
			BlocklyDuino.selectedCard = new_card;
			document.getElementById('span_file').textContent = "";
			if (window.localStorage.content=="on") {
				if (new_prog != "python") {
					$('#btn_preview').attr('title', Blockly.Msg['btn_preview_ino']);
					$('#btn_saveino').attr('title', Blockly.Msg['btn_save_ino']);
					$('#btn_bin').removeClass("hidden");
					if ( window.profile[new_card].cpu == "cortexM0" ) {
						var new_toolbox = "toolbox_microbit";
					} else {
						var new_toolbox = "toolbox_arduino_all";
					}
					window.localStorage.prog = new_prog;
					window.localStorage.toolbox = new_toolbox;
					BlocklyDuino.workspace.clear();
					BlocklyDuino.loadToolboxDefinition(new_toolbox);
					Blockly.getMainWorkspace().updateToolbox(BlocklyDuino.buildToolbox());
					BlocklyDuino.workspace.render()
				} else {
					$('#btn_preview').attr('title', Blockly.Msg['btn_preview_py']);
					$('#btn_saveino').attr('title', Blockly.Msg['btn_save_py']);
					$('#btn_bin').addClass("hidden");
					if ( window.profile[new_card].cpu == "cortexM0" ) {
						var new_toolbox = "toolbox_microbit";
					} else {
						var new_toolbox = "toolbox_lycee";
					}					
					window.localStorage.prog = new_prog;
					window.localStorage.toolbox = new_toolbox;
					BlocklyDuino.workspace.clear();
					BlocklyDuino.loadToolboxDefinition(new_toolbox);
					Blockly.getMainWorkspace().updateToolbox(BlocklyDuino.buildToolbox());
					BlocklyDuino.workspace.render()
				}
			} else {
				if (new_prog != "python") {
					window.localStorage.prog = new_prog;
					editor.session.setMode("ace/mode/c_cpp");
					editor.setOptions({
						enableBasicAutocompletion: true,
						enableSnippets: true,
						enableLiveAutocompletion: true
					});
					editor.setValue(BlocklyDuino.prog_ino,1)
				} else {
					window.localStorage.prog = new_prog;
					editor.session.setMode("ace/mode/python");
					editor.setOptions({
						enableBasicAutocompletion: true,
						enableSnippets: true,
						enableLiveAutocompletion: true
					});
					if ( window.profile[new_card].cpu == "cortexM0" ) {
						editor.setValue(BlocklyDuino.prog_microbit,1)
					} else {
						editor.setValue(BlocklyDuino.prog_py,1)
					}
				}
			}
		} else {
			$("#boards").val(card);
			return
		}
	}
	window.localStorage.card = new_card
}
BlocklyDuino.discard = function() {
	document.getElementById('span_file').textContent = ""
	if (localStorage.getItem('content') == "off") {
		if (window.confirm(Blockly.Msg['discard'])) {
			if (window.localStorage.prog == "python") {
				editor.setValue(BlocklyDuino.prog_py,1)
			} else {
				editor.setValue(BlocklyDuino.prog_ino,1)
			}
		}
	} else {
		if (window.location.search!="") {
			BlocklyDuino.workspace.clear();
			window.location.search = "";
		}
		var count = BlocklyDuino.workspace.getAllBlocks().length;
		if (count < 4 || window.confirm(Blockly.Msg['discard'])) {
			BlocklyDuino.workspace.clear();
			BlocklyDuino.workspace.render();
		}
	}
}
BlocklyDuino.Undo = function() {
	if (localStorage.getItem("content") == "on") {
		Blockly.mainWorkspace.undo(0)
	} else {
		editor.undo()
	}
}
BlocklyDuino.Redo = function() {
	if (localStorage.getItem("content") == "on") {
		Blockly.mainWorkspace.undo(1)
	} else {
		editor.redo()
	}	
}
BlocklyDuino.search = function() {
	editor.execCommand("find")
}
BlocklyDuino.bindFunctions = function() {
	$('#fontsize').on("change", function(){
		document.getElementById('content_code').style.fontSize = $(this).val();
		window.localStorage.size = $(this).val()
	});
	$('#theme').on("change", BlocklyDuino.apply_theme);
	$('.modal-child').on('show.bs.modal', function () {
		var modalParent = $(this).attr('data-modal-parent');
		$(modalParent).css('opacity', 0)
	}); 
	$('.modal-child').on('hidden.bs.modal', function () {
		var modalParent = $(this).attr('data-modal-parent');
		$(modalParent).css('opacity', 1)
	});
	$('#btn_new').on("click", BlocklyDuino.discard);
	$('#btn_undo').on("click", BlocklyDuino.Undo);
	$('#btn_redo').on("click", BlocklyDuino.Redo);
	$('#btn_search').on("click", BlocklyDuino.search);
	$('#boards').on("focus", function() {
		BlocklyDuino.selectedCard = $(this).val()
	});
	$('#btn_preview').on("click", function() {
		$("#toggle").toggle("slide")
	});
	$('#codeORblock').on("change", BlocklyDuino.code_block);
	$('#pre_previewArduino').on("click", function() {
		$("#toggle").toggle("slide");
	});
	$('#btn_verify').on("click", function() {
		$("#message").modal("show");
	});
	$('#btn_flash').on("click", function() {
		$("#message").modal("show");
	});
	$('#toolboxes').on("focus", function() {
		BlocklyDuino.selectedToolbox = $(this).val();
	});
	$('#toolboxes').on("change", BlocklyDuino.changeToolboxDefinition);	
	$('#configModal').on('hidden.bs.modal', function(e) {
		BlocklyDuino.loadToolboxDefinition(BlocklyDuino.selectedToolbox);
	});
	$('#load').on("change", BlocklyDuino.load);
	$('#fontsize').on("change", function(){
		document.getElementById('content_code').style.fontSize = $(this).val();
		window.localStorage.size = $(this).val()
	});
	$('#theme').on("change", BlocklyDuino.apply_theme);
	$('#btn_fakeload').on("click", function() {
		$('#load').click()
	});
	$('#btn_config').on("click", BlocklyDuino.openConfigToolbox);
	$('#select_all').on("click", BlocklyDuino.checkAll);
	$('#btn_valid_config').on("click", BlocklyDuino.changeToolbox);
	$('#btn_example').on("click", BlocklyDuino.buildExamples);
}
BlocklyDuino.code_block = function () {
	if (window.localStorage.prog!="python") {
		editor.session.setMode("ace/mode/c_cpp");
	} else {
		editor.session.setMode("ace/mode/python");
	}
	editor.setOptions({
		enableBasicAutocompletion: true,
		enableSnippets: true,
		enableLiveAutocompletion: true
	});
	if (window.localStorage.content=="on") {
		editor.setValue($('#pre_previewArduino').text(),1);
		$('a[href="#content_code"]').tab('show');
		$('#btn_print').addClass("hidden");
		$('#btn_preview').addClass("hidden");
		$('#btn_search').removeClass("hidden");
		window.localStorage.content="off"
	} else {
		$('a[href="#content_blocks"]').tab('show');
		$('#btn_print').removeClass("hidden");
		$('#btn_preview').removeClass("hidden");
		$('#btn_search').addClass("hidden");
		window.localStorage.content="on"
	}
}
BlocklyDuino.theme_monokai = function () {
	document.getElementById("theme_css").href = "css/blocklino_monokai.css";
	document.getElementById("btn_preview").className = document.getElementById("btn_preview").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
	document.getElementById("btn_new").className = document.getElementById("btn_new").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
	document.getElementById("btn_example").className = document.getElementById("btn_example").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
	document.getElementById("btn_fakeload").className = document.getElementById("btn_fakeload").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
	document.getElementById("btn_saveXML").className = document.getElementById("btn_saveXML").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
	document.getElementById("btn_config").className = document.getElementById("btn_config").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
	document.getElementById("btn_html").className = document.getElementById("btn_html").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
	document.getElementById("btn_factory").className = document.getElementById("btn_factory").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
	document.getElementById("btn_card").className = document.getElementById("btn_card").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
	document.getElementById("btn_usb").className = document.getElementById("btn_usb").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
	document.getElementById("btn_about").className = document.getElementById("btn_about").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
	document.getElementById("btn_undo").className = document.getElementById("btn_undo").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
	document.getElementById("btn_redo").className = document.getElementById("btn_redo").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
	document.getElementById("btn_print").className = document.getElementById("btn_print").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
	document.getElementById("btn_flash").className = document.getElementById("btn_flash").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
	document.getElementById("btn_saveino").className = document.getElementById("btn_saveino").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
	document.getElementById("btn_copy").className = document.getElementById("btn_copy").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
	document.getElementById("btn_search").className = document.getElementById("btn_search").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
	document.getElementById("btn_tint").className = document.getElementById("btn_tint").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
	document.getElementById("btn_term").className = document.getElementById("btn_term").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
	document.getElementById("btn_verify").className = document.getElementById("btn_verify").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
	document.getElementById("btn_bin").className = document.getElementById("btn_bin").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
	document.getElementById("btn_games").className = document.getElementById("btn_games").className.replace( /(?:^|\s)btn-default(?!\S)/g , ' btn-secondary' );
}
BlocklyDuino.theme_sqlserver = function () {
	document.getElementById("theme_css").href = "css/blocklino_sqlserver.css";
	document.getElementById("btn_preview").className = document.getElementById("btn_preview").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );
	document.getElementById("btn_new").className = document.getElementById("btn_new").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );
	document.getElementById("btn_example").className = document.getElementById("btn_example").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );
	document.getElementById("btn_fakeload").className = document.getElementById("btn_fakeload").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );
	document.getElementById("btn_saveXML").className = document.getElementById("btn_saveXML").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );
	document.getElementById("btn_config").className = document.getElementById("btn_config").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );
	document.getElementById("btn_html").className = document.getElementById("btn_html").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );
	document.getElementById("btn_factory").className = document.getElementById("btn_factory").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );
	document.getElementById("btn_card").className = document.getElementById("btn_card").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );
	document.getElementById("btn_usb").className = document.getElementById("btn_usb").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );
	document.getElementById("btn_about").className = document.getElementById("btn_about").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );
	document.getElementById("btn_undo").className = document.getElementById("btn_undo").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );
	document.getElementById("btn_redo").className = document.getElementById("btn_redo").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );
	document.getElementById("btn_print").className = document.getElementById("btn_print").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );	
	document.getElementById("btn_flash").className = document.getElementById("btn_flash").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );	
	document.getElementById("btn_saveino").className = document.getElementById("btn_saveino").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );	
	document.getElementById("btn_copy").className = document.getElementById("btn_copy").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );	
	document.getElementById("btn_search").className = document.getElementById("btn_search").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );	
	document.getElementById("btn_tint").className = document.getElementById("btn_tint").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );
	document.getElementById("btn_term").className = document.getElementById("btn_term").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );
	document.getElementById("btn_verify").className = document.getElementById("btn_verify").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );
	document.getElementById("btn_bin").className = document.getElementById("btn_bin").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );
	document.getElementById("btn_games").className = document.getElementById("btn_games").className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-default' );
}
BlocklyDuino.apply_theme = function () {
	var new_theme = $('#theme').val();
	editor.setTheme('ace/theme/' + new_theme);
	window.localStorage.theme = new_theme
	if (new_theme == "monokai") {
		BlocklyDuino.theme_monokai()
	} else {
		BlocklyDuino.theme_sqlserver()
	}
}
BlocklyDuino.checkAll = function () {
    if(this.checked) {
        $('#modal-body-config input:checkbox[id^=checkbox_]').each(function() {
            this.checked = true;
        });
    } 
      else {
      $('#modal-body-config input:checkbox[id^=checkbox_]').each(function() {
            this.checked = false;
        });
    }
}
BlocklyDuino.openConfigToolbox = function() {
	var modalbody = $("#modal-body-config");
	var loadIds = window.localStorage.toolboxids;
	if (loadIds === undefined || loadIds === "") {
		if ($('#defaultCategories').length) {
			loadIds = $('#defaultCategories').html();
		} else {
			loadIds = '';
		}
	}
	modalbody.empty();
	var i=0, n;
	var ligne = "";
	$("#toolbox").children("category").each(function() {
		n = loadIds.search($(this).attr("id"));
		if (n >= 0) {
			ligne = '<input type="checkbox" checked="checked" name="checkbox_' +i+ '" id="checkbox_' +$(this).attr("id")+ '"/> ' +Blockly.Msg[$(this).attr("id")]+ '<br/>';
		} else {
			ligne = '<input type="checkbox" name="checkbox_' +i+ '" id="checkbox_' +$(this).attr("id")+ '"/> ' +Blockly.Msg[$(this).attr("id")]+ '<br/>';
		}
		i++;
		modalbody.append(ligne);
     });
}
BlocklyDuino.changeToolbox = function() {
	//BlocklyDuino.backupBlocks();
	var toolboxIds = [];
	var new_lang = $('#languageMenu').val();
	$('#modal-body-config input:checkbox[id^=checkbox_]').each(function() {
		if (this.checked == true) {
			var xmlid = this.id;
			toolboxIds.push(xmlid.replace("checkbox_", ""))
		}
	});
	window.localStorage.toolboxids = toolboxIds;
	window.localStorage.size = $('#fontsize').val();
	window.localStorage.theme = $('#theme').val();
	Blockly.getMainWorkspace().updateToolbox(BlocklyDuino.buildToolbox());
	BlocklyDuino.workspace.render();
	$('#configModal').modal('hide');
	var bTD = document.getElementsByClassName('blocklyToolboxDiv');
	if ($("#toolboxes").val()=="toolbox_fresnel_all") {
		bTD[0].style.width = "290px"
	} else {
		bTD[0].style.width = "160px"
	}
	if (new_lang != window.localStorage.lang){
		window.localStorage.lang = new_lang;
		window.location = window.location.href
	}
}
BlocklyDuino.buildToolbox = function() {
	var loadIds = window.localStorage.toolboxids;
	if (loadIds === undefined || loadIds === "") {
		if ($('#defaultCategories').length) {
			loadIds = $('#defaultCategories').html();
		} else {
			loadIds = '';
		}
	}
	var xmlValue = '<xml id="toolbox">';	
	var xmlids = loadIds.split(",");
	for (var i = 0; i < xmlids.length; i++) {
		if ($('#'+xmlids[i]).length) {
			xmlValue += $('#'+xmlids[i])[0].outerHTML;
		}
	}
	xmlValue += '</xml>';
	return xmlValue;
}
BlocklyDuino.loadToolboxDefinition = function(toolboxFile) {
	$.ajax({
		type: "GET",
		url: "./toolbox/" + toolboxFile + ".xml",
		dataType: "xml",
		async : false
	}).done(function(data){
		var toolboxXml = '<xml id="toolbox" style="display: none">' + $(data).find('toolbox').html() + '</xml>';
		$("#toolbox").remove();
		$('body').append(toolboxXml);	
		$("xml").find("category").each(function() {
			if (!$(this).attr('id')) {
				$(this).attr('id', $(this).attr('name'));
				$(this).attr('name', Blockly.Msg[$(this).attr('name')])
			}
		})
	}).fail(function(data) {
		$("#toolbox").remove()
	})
}
BlocklyDuino.changeToolboxDefinition =  function() {
	BlocklyDuino.loadToolboxDefinition($("#toolboxes").val());
	BlocklyDuino.openConfigToolbox();
}
BlocklyDuino.buildExamples = function() {
	$.ajax({
	    cache: false,
	    url: "./examples/examples.json",
	    dataType: "json",
	    success :  function(data) {
			$("#includedContent").empty();
			$.each(data, function(i, example){
				if (example.visible) {
					var line = "<tr><td>"
							   + "<a href='?url=./examples/"+example.source_url+"'>" + example.source_text + "</a>"
							   + "</td><td>"
							   + "<a href='"+example.link_url+"' data-toggle='modal'>"
							   + "<img class='vignette' src='./examples/"+example.image+"'></a>"
							   + "</td></tr>";
					$("#includedContent").append(line);
				}
			});
		}
	});
}
BlocklyDuino.cardPicture_change = function() {
	if ($("#pinout").val()) {
		$('#arduino_card_mini_picture').attr("src", profile[$("#pinout").val()]['picture']);
		document.getElementById("card_connect").textContent = profile[$("#pinout").val()]['usb'];
		document.getElementById("card_cpu").textContent = profile[$("#pinout").val()]['cpu'];
		document.getElementById("card_voltage").textContent = profile[$("#pinout").val()]['voltage'];
		document.getElementById("card_inout").textContent = profile[$("#pinout").val()]['inout'];
		document.getElementById("card_in_anal").textContent = profile[$("#pinout").val()]['in_anal'];
		document.getElementById("card_out_anal").textContent = profile[$("#pinout").val()]['out_anal'];
		document.getElementById("card_eeprom").textContent = profile[$("#pinout").val()]['eeprom'];
	}
}
Blockly.Variables.flyoutCategory = function(workspace) {
	var variableList = workspace.variableList;
	variableList.sort(goog.string.caseInsensitiveCompare);
	var xmlList = [];
	var button = goog.dom.createDom('button');
	button.setAttribute('text', Blockly.Msg.NEW_VARIABLE);
	button.setAttribute('callbackKey', 'CREATE_VARIABLE');
	Blockly.registerButtonCallback('CREATE_VARIABLE', function(button) {
		Blockly.Variables.createVariable(button.getTargetWorkspace());
	});
	xmlList.push(button);
	if (variableList.length > 0) {
		if (window.localStorage.prog!="python") {
			if (Blockly.Blocks['variables_set_init']) {
				var block = goog.dom.createDom('block');
				block.setAttribute('type', 'variables_set_init');
				block.setAttribute('gap', 8);
				var field = goog.dom.createDom('field', null, variableList[0]);
				field.setAttribute('name', 'VAR');
				block.appendChild(field);
				xmlList.push(block);
			}
			if (Blockly.Blocks['variables_set']) {
				var block = goog.dom.createDom('block');
				block.setAttribute('type', 'variables_set');
				block.setAttribute('gap', 8);
				var field = goog.dom.createDom('field', null, variableList[0]);
				field.setAttribute('name', 'VAR');
				block.appendChild(field);
				xmlList.push(block);
			}
			if (Blockly.Blocks['math_change']) {
				var block = goog.dom.createDom('block');
				block.setAttribute('type', 'math_change');
				block.setAttribute('gap', 8);
				var field = goog.dom.createDom('field', null, variableList[0]);
				field.setAttribute('name', 'VAR');
				block.appendChild(field);
				xmlList.push(block);
			}
			if (Blockly.Blocks['variables_const']) {
				var block = goog.dom.createDom('block');
				block.setAttribute('type', 'variables_const');
				block.setAttribute('gap', 8);
				var field = goog.dom.createDom('field', null, variableList[0]);
				field.setAttribute('name', 'VAR');
				block.appendChild(field);
				xmlList.push(block);
			}
			if (Blockly.Blocks['base_define_const']) {
				var block = goog.dom.createDom('block');
				block.setAttribute('type', 'base_define_const');
				if (Blockly.Blocks['variables_get']) {
					block.setAttribute('gap', 16);
				}
				var field = goog.dom.createDom('field', null, variableList[0]);
				field.setAttribute('name', 'VAR');
				block.appendChild(field);
				xmlList.push(block);
			}
			for (var i = 0; i < variableList.length; i++) {
			  if (Blockly.Blocks['variables_get']) {
				var block = goog.dom.createDom('block');
				block.setAttribute('type', 'variables_get');
				if (Blockly.Blocks['variables_set']) {
				  block.setAttribute('gap', 8);
				}
				var field = goog.dom.createDom('field', null, variableList[i]);
				field.setAttribute('name', 'VAR');
				block.appendChild(field);
				xmlList.push(block);
			  }
			}
		} else {
			if (Blockly.Blocks['variables_set']) {
				var block = goog.dom.createDom('block');
				block.setAttribute('type', 'variables_set');
				block.setAttribute('gap', 8);
				var field = goog.dom.createDom('field', null, variableList[0]);
				field.setAttribute('name', 'VAR');
				block.appendChild(field);
				xmlList.push(block);
			}
			if (Blockly.Blocks['math_change']) {
				var block = goog.dom.createDom('block');
				block.setAttribute('type', 'math_change');
				block.setAttribute('gap', 8);
				var field = goog.dom.createDom('field', null, variableList[0]);
				field.setAttribute('name', 'VAR');
				block.appendChild(field);
				xmlList.push(block);
			}
			for (var i = 0; i < variableList.length; i++) {
			  if (Blockly.Blocks['variables_get']) {
				var block = goog.dom.createDom('block');
				block.setAttribute('type', 'variables_get');
				if (Blockly.Blocks['variables_set']) {
				  block.setAttribute('gap', 8);
				}
				var field = goog.dom.createDom('field', null, variableList[i]);
				field.setAttribute('name', 'VAR');
				block.appendChild(field);
				xmlList.push(block);
			  }
			}
		}
	}
  return xmlList
}