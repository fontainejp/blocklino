'use strict';

var BlocklyDuino = {};
BlocklyDuino.selectedToolbox = "toolbox_arduino_all";
BlocklyDuino.selectedCard = "uno";
BlocklyDuino.workspace = null;

BlocklyDuino.init = function() {
	BlocklyDuino.loadToolboxDefinition();
	Code.initLanguage();
	var card = window.localStorage.card;
	if (card===undefined) {
		window.localStorage.card = BlocklyDuino.selectedCard;
		document.getElementById("boards").value = BlocklyDuino.selectedCard;
		profile["defaultBoard"]=profile[BlocklyDuino.selectedCard]
	} else {
		BlocklyDuino.selectedCard = card;
		document.getElementById("boards").value = card;
		profile["defaultBoard"]=profile[card];
	}
	window.localStorage.toolbox = BlocklyDuino.selectedToolbox;
	window.localStorage.toolboxids = '';
	BlocklyDuino.workspace = Blockly.inject('content_blocks',{grid:{snap:true},sounds:false,media:'media/',toolbox:BlocklyDuino.buildToolbox(),zoom:{controls:true,wheel:true}});
	BlocklyDuino.bindFunctions();
	BlocklyDuino.renderContent();
	BlocklyDuino.workspace.addChangeListener(BlocklyDuino.renderArduinoCodePreview);
	var urlFile = BlocklyDuino.getStringParamFromUrl('url', '');
	var loadOnce = null;
	try {loadOnce = window.localStorage.loadOnceBlocks;} catch (e) {}
	if (urlFile) {
		$.get( urlFile, function( data ) {
	        BlocklyDuino.loadBlocks(data );
			}, 'text');
	} else {
		BlocklyDuino.loadBlocks();
	}
	window.addEventListener('unload', BlocklyDuino.backupBlocks, false);
};
BlocklyDuino.save_com = function () {
	$("#portserie").blur();
	var com=$("#portserie").val();
	window.localStorage.com = com;
};
BlocklyDuino.renderContent = function() {
	BlocklyDuino.workspace.render();
	$(".blocklyTreeSeparator").removeAttr("style");
	$(".blocklyToolboxDiv").show();
};
BlocklyDuino.renderArduinoCodePreview = function() {
	$('#pre_previewArduino').text(Blockly.Arduino.workspaceToCode(BlocklyDuino.workspace));
	if (typeof prettyPrintOne == 'function') {
		$('#pre_previewArduino').html(prettyPrintOne($('#pre_previewArduino').html(), 'cpp'));
	}
};
BlocklyDuino.getStringParamFromUrl = function(name, defaultValue) {
  var val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'));
  return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue;
};
BlocklyDuino.addReplaceParamToUrl = function(url, param, value) {
	var re = new RegExp("([?&])" + param + "=.*?(&|$)", "i");
	var separator = url.indexOf('?') !== -1 ? "&" : "?";
	if (url.match(re)) {
		return url.replace(re, '$1' + param + "=" + value + '$2');
	}
	else {
		return url + separator + param + "=" + value;
	}
};
BlocklyDuino.loadBlocks = function(defaultXml) {
	if (defaultXml) {
		var xml = Blockly.Xml.textToDom(defaultXml);
		Blockly.Xml.domToWorkspace(xml,BlocklyDuino.workspace);
	} else {
		var loadOnce = null;
		try {
			loadOnce = window.localStorage.loadOnceBlocks;
		} catch (e) {}
		if (loadOnce != null) {
			delete window.localStorage.loadOnceBlocks;
			var xml = Blockly.Xml.textToDom(loadOnce);
			Blockly.Xml.domToWorkspace(xml,BlocklyDuino.workspace );
		}
	}
};
BlocklyDuino.load = function (event) {
	var files = event.target.files;
	if (files.length != 1) {
		return;
	}
	var reader = new FileReader();
	reader.onloadend = function(event) {
		var target = event.target;
		if (target.readyState == 2) {
			try {
				var xml = Blockly.Xml.textToDom(target.result);
			} catch (e) {
				alert(MSG['xmlError']+'\n' + e);
				return;
			}
			var count = BlocklyDuino.workspace.getAllBlocks().length;
			BlocklyDuino.workspace.clear();
			Blockly.Xml.domToWorkspace(xml,BlocklyDuino.workspace);
			BlocklyDuino.renderContent();
			var elem = xml.getElementsByTagName("toolbox")[0];
			if (elem != undefined) {
				var node = elem.childNodes[0];
				window.localStorage.toolbox = node.nodeValue;
				$("#toolboxes").val(node.nodeValue);
				var search = window.location.search;
				search = search.replace(/([?&]url=)[^&]*/, '');
				window.location = window.location.protocol + '//' + window.location.host + window.location.pathname + search;
			}
		}
	};
	reader.readAsText(files[0]);
};
BlocklyDuino.backupBlocks = function () {
  if (typeof Blockly != 'undefined' && window.localStorage) {
    var xml = Blockly.Xml.workspaceToDom(BlocklyDuino.workspace);
    var text = Blockly.Xml.domToText(xml);
    window.localStorage.loadOnceBlocks = text;
  }
};
BlocklyDuino.change_card = function () {
	BlocklyDuino.backupBlocks();
	var old_card=window.localStorage.card;
	$("#boards").blur();
	var new_card=$("#boards").val();
	if (window.profile[new_card].cpu!=window.profile[old_card].cpu) {
		if (window.confirm(MSG['arduino_card']+window.profile[new_card].description+' ?')){
			BlocklyDuino.workspace.clear();
		} else {
			$("#boards").val(old_card);
			return
		}
	}
	window.localStorage.card=new_card;
	profile["defaultBoard"]=profile[new_card];
};
BlocklyDuino.discard = function () {
  var count = BlocklyDuino.workspace.getAllBlocks().length;
  if (count < 2 || window.confirm(MSG['discard'])) {
    BlocklyDuino.workspace.clear();
	var search = window.location.search;
    var newsearch = search.replace(/([?&]url=)[^&]*/, '');
	window.history.pushState(search, "Title", newsearch);
    BlocklyDuino.renderContent();
	search = search.replace(/([?&]url=)[^&]*/, '');
	window.location = window.location.protocol + '//' + window.location.host + window.location.pathname + search;
  }
};
BlocklyDuino.Undo = function () {
  Blockly.mainWorkspace.undo(0);
};
BlocklyDuino.Redo = function () {
  Blockly.mainWorkspace.undo(1);
};
BlocklyDuino.bindFunctions = function() {
	$('.modal-child').on('show.bs.modal', function () {
		var modalParent = $(this).attr('data-modal-parent');
		$(modalParent).css('opacity', 0);
	}); 
	$('.modal-child').on('hidden.bs.modal', function () {
		var modalParent = $(this).attr('data-modal-parent');
		$(modalParent).css('opacity', 1);
	});
	$('#btn_new').on("click", BlocklyDuino.discard);
	$('#btn_undo').on("click", BlocklyDuino.Undo);
	$('#btn_redo').on("click", BlocklyDuino.Redo);
	$('#btn_print').on("click", BlocklyDuino.workspace_capture);
	$('#boards').on("focus", function() {
		BlocklyDuino.selectedCard = $(this).val();
	});
	$('#btn_preview').on("click", function() {
		$("#toggle").toggle("slide");
	});
	$('#pre_previewArduino').on("click", function() {
		$("#toggle").toggle("slide");
	});
	$('#btn_verify').mouseover(function() {
		document.getElementById("survol").textContent = "vérifier";
	}).mouseout(function() {
		document.getElementById("survol").textContent = "";
	});
	$('#btn_flash').mouseover(function() {
		document.getElementById("survol").textContent = "téléverser";
	}).mouseout(function() {
		document.getElementById("survol").textContent = "";
	});
	$('#toolboxes').on("focus", function() {
		BlocklyDuino.selectedToolbox = $(this).val();
	});
	$('#toolboxes').on("change", BlocklyDuino.changeToolboxDefinition);	
	$('#configModal').on('hidden.bs.modal', function(e) {
		BlocklyDuino.loadToolboxDefinition(BlocklyDuino.selectedToolbox);
	});
	$('#load').on("change", BlocklyDuino.load);
	$('#btn_fakeload').on("click", function() {
		$('#load').click();
	});
	$('#btn_config').on("click", BlocklyDuino.openConfigToolbox);
	$('#select_all').on("click", BlocklyDuino.checkAll);
	$('#btn_valid_config').on("click", BlocklyDuino.changeToolbox);
	$('#btn_example').on("click", BlocklyDuino.buildExamples);
};
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
};
BlocklyDuino.openConfigToolbox = function () {
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
};
BlocklyDuino.changeToolbox = function () {
	BlocklyDuino.backupBlocks();
	var toolboxIds = [];
	$('#modal-body-config input:checkbox[id^=checkbox_]').each(function() {
		if (this.checked == true) {
			var xmlid = this.id;
			toolboxIds.push(xmlid.replace("checkbox_", ""));
		}
	});
	window.localStorage.toolboxids = toolboxIds;
	window.localStorage.toolbox = $("#toolboxes").val();
	window.location = window.location.href ;
};
BlocklyDuino.buildToolbox = function() {
	var loadIds = window.localStorage.toolboxids;
	if (loadIds === undefined || loadIds === "") {
		if ($('#defaultCategories').length) {
			loadIds = $('#defaultCategories').html();
		} else {
			loadIds = '';
		}
	}
	window.localStorage.toolboxids = loadIds;
	var xmlValue = '<xml id="toolbox">';	
	var xmlids = loadIds.split(",");
	for (var i = 0; i < xmlids.length; i++) {
		if ($('#'+xmlids[i]).length) {
			xmlValue += $('#'+xmlids[i])[0].outerHTML;
		}
	}
	xmlValue += '</xml>';
	return xmlValue;
};
BlocklyDuino.loadToolboxDefinition = function(toolboxFile) {
	if (!toolboxFile) {
		toolboxFile = window.localStorage.toolbox;
	}
	if (!toolboxFile) {
		toolboxFile = BlocklyDuino.selectedToolbox;
	}
	$("#toolboxes").val(toolboxFile);
	$.ajax( {
		type: "GET",
		url: "./toolbox/" + toolboxFile + ".xml",
		dataType: "xml",
		async : false
	}).done(function(data) {
		var toolboxXml = '<xml id="toolbox" style="display: none">';
		toolboxXml += $(data).find('toolbox').html();
		toolboxXml += '</xml>';
		$("#toolbox").remove();
		$('body').append(toolboxXml);	
		$("xml").find("category").each(function() {
			if (!$(this).attr('id')) {
				$(this).attr('id', $(this).attr('name'));
				$(this).attr('name', Blockly.Msg[$(this).attr('name')]);
			}
		});
	}).fail(function(data) {
		$("#toolbox").remove();
	});			
};
BlocklyDuino.changeToolboxDefinition =  function (){
	BlocklyDuino.loadToolboxDefinition($("#toolboxes").val());
	BlocklyDuino.openConfigToolbox();
};
BlocklyDuino.buildExamples = function() {
	$.ajax({
	    cache: false,
	    url: "./examples/examples.json",
	    dataType: "json",
	    success :  function(data) {
				$("#includedContent").empty();
				$.each(data, function(i, example){
					if (example.visible) {
						var line = "<tr>"
								   + "<td>"
								   + "<a href='?url=./examples/"+example.source_url+"'>" + example.source_text + "</a>"
								   + "</td>"
								   + "<td>"
								   + "<a href='"+example.link_url+"' data-toggle='modal'>"
								   + "<img class='vignette' src='./examples/"+example.image+"'></a>"
								   + "</td>"
								   + "</tr>";
						$("#includedContent").append(line);
					}
				});
			}
		});
};
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
  }
  return xmlList;
};
BlocklyDuino.workspace_capture = function() {
	var ws = BlocklyDuino.workspace.svgBlockCanvas_.cloneNode(true);
	ws.removeAttribute("width");
	ws.removeAttribute("height");
	ws.removeAttribute("transform");
	var styleElem = document.createElementNS("http://www.w3.org/2000/svg", "style");
	styleElem.textContent = Blockly.Css.CONTENT.join('') ;
	ws.insertBefore(styleElem, ws.firstChild);
	var bbox = BlocklyDuino.workspace.svgBlockCanvas_.getBBox();
	var canvas = document.createElement( "canvas" );
	canvas.width = Math.ceil(bbox.width+10);
	canvas.height = Math.ceil(bbox.height+10);
	var ctx = canvas.getContext( "2d" );
	var xml = new XMLSerializer().serializeToString(ws);
	xml = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="'+bbox.width+'" height="'+bbox.height+'" viewBox="' + bbox.x + ' ' + bbox.y + ' '  + bbox.width + ' ' + bbox.height + '"><rect width="100%" height="100%" fill="white"></rect>'+xml+'</svg>';
	var img = new Image();
	img.setAttribute( "src", 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(xml))));
	img.onload = function() {
		ctx.drawImage( img, 5, 5 );
		var canvasdata = canvas.toDataURL("image/png",1);
		var datenow = Date.now();
		var a = document.createElement("a");
		a.download = "capture"+datenow+".png";
		a.href = canvasdata;
		document.body.appendChild(a);
		a.click();
	}	
};