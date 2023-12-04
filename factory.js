var remote = require('electron').remote 
var { ipcRenderer, clipboard } = require('electron')
var fs = require('fs')
var mediaFactory = process.resourcesPath + "/../www/media/factory/"
var blockFactory = process.resourcesPath + "/../www/blocs&generateurs/factory/"

function loadBF(file) {
	$.get(file, function(data){ 
		if (data) {
			var xml = Blockly.Xml.textToDom(data)
			mainWorkspace.clear()
			Blockly.Xml.domToWorkspace(xml, mainWorkspace)
			mainWorkspace.render()
			var elem = $(xml).find("language")[0]
			var node = elem.childNodes[0]
			localStorage.setItem("code_bf", node.nodeValue)
			editor.setValue(node.nodeValue,1)
		}
	}, "text")
}

window.addEventListener('load', function load(event){
	var window = remote.getCurrentWindow()
	if(!window.isMaximized())window.maximize()
	$('[rel="tooltip"]').tooltip({trigger: "hover"})
	$('#btn_quit').on('click', function(){
		window.close()
	})
	$('#btn_max').on('click', function(){
		if(window.isMaximized()){
            window.unmaximize()
			$('#btn_max').html("<span class='fa fa-window-maximize fa-lg'></span>")
        }else{
            window.maximize()
			$('#btn_max').html("<span class='fa fa-window-restore fa-lg'></span>")
        }
	})
	$('#btn_append').on('click', function(){
		$('#message').modal("show")
		var selectList = document.createElement("select")
		selectList.size = "10"
		selectList.id = "toolchoice"
		var messageDiv = document.getElementById('messageDIV')
		messageDiv.append(selectList)
		var list = localStorage.getItem('choice').split(",")
		var sel = document.getElementById('toolchoice')
		for (var i = 0; i < list.length; i++) { 
			var opt = document.createElement('option')
			opt.value = i
            opt.innerHTML = list[i]
			sel.append(opt)
		}
	})
	$('#message').on('hidden.bs.modal', function(e) {
		$("#messageDIV").empty()
	})
	$('#btn_appendOK').on('click', function(){
		if ($("#toolchoice").val()) {
			var dataB = $('#languagePre').text()
			var dataG = editor.getValue()
			var xml = Blockly.Xml.workspaceToDom(mainWorkspace)
			var new_element = document.createElement("language")
			new_element.appendChild(document.createTextNode(dataG))
			xml.insertBefore(new_element, xml.childNodes[0])
			var dataX = Blockly.Xml.domToPrettyText(xml)
			fs.writeFileSync(blockFactory + blockType + '.bf', dataX)
			var appendData = dataB + "\n" + dataG + "\n////////////////////\n"
			fs.appendFileSync(blockFactory + "append.js", appendData)
			var place = $("#toolchoice").val()
			ipcRenderer.send("appendBlock", blockType, appendData, place)
			window.close()
		} else $("#message").modal("hide")
	})
	$('#btn_redo').on('click', function(){
		mainWorkspace.undo(1)
	})
	$('#btn_undo').on('click', function(){
		mainWorkspace.undo(0)
	})
	$('#btn_print').on('click', function(){
		ipcRenderer.send('save-png-factory')
	})
	$('#btn_save').on('click', function(){
		ipcRenderer.send('save-bf')
	})
	$('#btn_new').on('click', function(){
		mainWorkspace.clear()
		var rootBlock = mainWorkspace.newBlock('factory_base')
		rootBlock.initSvg()
		rootBlock.render()
		rootBlock.setMovable(false)
		rootBlock.setDeletable(false)
	})
	$('#btn_open').on('click', function(){
		ipcRenderer.send('openBF')
	})
	$('#btn_media').on('click', function(){
		var list = document.getElementById("menu_media")
		var files = fs.readdirSync(mediaFactory)
		if (list.childNodes.length>3) for (var i=0 ; i<files.length ; i++) list.removeChild(list.lastChild)
		files.forEach(function(file) {
			var li = document.createElement("li")
			var link = document.createElement("a")
			var text = document.createTextNode(file)
			link.appendChild(text)
			link.href = "#"
			link.onclick = function () {
				var rootBlock = mainWorkspace.newBlock('field_image')
				rootBlock.setFieldValue(file, 'SRC')
				rootBlock.initSvg()
				rootBlock.render()
			}
			li.appendChild(link)
			list.appendChild(li)
		})
	})
	$('#btn_export').on('click', function(){
		ipcRenderer.send('export-js')
	})
	$('#lien1').on('click', function(){
		loadBF("./examples/factory/model1.bf")
		$("#exampleModal").modal("hide")
	})
	$('#lien2').on('click', function(){
		loadBF("./examples/factory/model2.bf")
		$("#exampleModal").modal("hide")
	})
	$('#lien3').on('click', function(){
		loadBF("./examples/factory/model3.bf")
		$("#exampleModal").modal("hide")
	})
	$('#lien4').on('click', function(){
		loadBF("./examples/factory/model4.bf")
		$("#exampleModal").modal("hide")
	})
	$('#lien5').on('click', function(){
		ipcRenderer.send('addImg')
	})
	$('#lien6').on('click', function(){
		fs.readdir(mediaFactory, function(err, files) {
			var dir_img = document.getElementById('span_image_dir') 
			$("#span_image_dir").empty()
			if(files.length%2==0){
				for (var i=0; i < files.length; i=i+2) dir_img.innerHTML += "<tr><td>"+files[i]+"</td><td>"+files[i+1]+"</td></tr>"
			}else{
				for (var i=0; i < files.length-1; i=i+2) dir_img.innerHTML += "<tr><td>"+files[i]+"</td><td>"+files[i+1]+"</td></tr>"
				dir_img.innerHTML += "<tr><td>"+files[files.length-1]+"</td></tr>"
			}
			$("#imageModal").modal("show")
		})
	})
	$('#lien7').on('click', function(){
		fs.readdir(mediaFactory, function(err, files){
			var file1 = files.filter(word => word!="gamepad.png")
			var file2 = file1.filter(word => word!="keyboard.png")
			file2.forEach(function(file){
				if (file2.length!=0){
					fs.unlink(mediaFactory+file, function(err){ if (err) return console.log(err)})
				}
			})
		})
	})
	$('#btn_open_code').on('click', function(){
		var code = localStorage.getItem("code_bf")
		editor.setValue(code,1)
	})
	ipcRenderer.on('added-img', function(event, path){
		if (path === null){
			return
		} else {
			path.forEach(function(pt) {
				var name = pt.substring(pt.lastIndexOf("\\"))
				fs.copyFile(pt, mediaFactory+name, function(err){ if (err) return console.log(err)})
			})
		}
	})
	ipcRenderer.on('saved-bf', function(event, path){
		if (path === null) {
			return
		} else {
			var xml = Blockly.Xml.workspaceToDom(mainWorkspace)
			var new_element = document.createElement("language")
			new_element.appendChild(document.createTextNode(editor.getValue()))
			xml.insertBefore(new_element, xml.childNodes[0])
			var code = Blockly.Xml.domToPrettyText(xml)
			fs.writeFile(path, code, function(err){
				if (err) return console.log(err)
			})
		}
	})
	ipcRenderer.on('saved-png-factory', function(event, path){
		if (path === null) {
			return
		} else {
			var ws = mainWorkspace.svgBlockCanvas_.cloneNode(true);
			ws.removeAttribute("width");
			ws.removeAttribute("height");
			ws.removeAttribute("transform");
			var styleElem = document.createElementNS("http://www.w3.org/2000/svg", "style");
			styleElem.textContent = Blockly.Css.CONTENT.join('') ;
			ws.insertBefore(styleElem, ws.firstChild);
			var bbox = mainWorkspace.svgBlockCanvas_.getBBox();
			var canvas = document.createElement( "canvas" );
			canvas.width = Math.ceil(bbox.width+10);
			canvas.height = Math.ceil(bbox.height+10);
			var ctx = canvas.getContext( "2d" );
			ctx.fillStyle = 'rgb(255, 255, 255)';
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			var xml = new XMLSerializer().serializeToString(ws);
			xml = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="'+bbox.width+'" height="'+bbox.height+'" viewBox="' + bbox.x + ' ' + bbox.y + ' '  + bbox.width + ' ' + bbox.height + '"><rect width="100%" height="100%" fill="white"></rect>'+xml+'</svg>';
			var img = new Image();
			var code = btoa(unescape(encodeURIComponent(xml)));
			img.setAttribute( "src", 'data:image/svg+xml;base64,' + code);
			img.onload = function() {
				ctx.drawImage( img, 5, 5 );
				var canvasdata = canvas.toDataURL("image/png",1);
				var data = canvasdata.replace(/^data:image\/png;base64,/,"")
				fs.writeFile(path, data, 'base64', function(err){
					if (err) return console.log(err)
				})
			}
		}
	})
	ipcRenderer.on('saved-js', function(event, path){
		if (path === null) {
			return
		} else {
			var code = $("#languagePre").text() + "\n" + editor.getValue()
			fs.writeFile(path, code, function(err){
				if (err) return console.log(err)
			})
		}
	})
	ipcRenderer.on('openedBF', function(event, path){
		if (path) loadBF(path)
	})
})