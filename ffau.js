var { ipcRenderer, shell } = require("electron")
var remote = require('electron').remote 
var fs = require("fs")
var ftpClient = require('ftp')
var ffau = new Ffau()
var chemin = process.resourcesPath
var base = ["kv.mp3","acqua.mp3","vexento.mp3","bigbuckbunny.mp4","lamadrama.mp4","earth.jpg","zen.jpg","neuronne.jpg","no_photo.png"]
var contentHTML = localStorage.getItem('contentHTML')
var messageDiv = document.getElementById('messageDIV')
var ftp_connect = document.getElementById('ftp_connect')
var new_code = '<!DOCTYPE HTML>\n<html lang="fr">\n  <head>\n    <meta charset="utf-8">\n  </head>\n  <body>\n\n  </body>\n</html>'
	
function getStringParamFromUrl(name, defaultValue){
	var val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'))
	return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue
}
function initFFAU() {
	ffau.ffauWorkspace.clear()
	var rootBlock = ffau.ffauWorkspace.newBlock('html')
	rootBlock.initSvg()
	rootBlock.render()
	rootBlock.setDeletable(false)
}
function loadWWW(file) {
	var xml = Blockly.Xml.textToDom(file)
	ffau.ffauWorkspace.clear()
	Blockly.Xml.domToWorkspace(xml, ffau.ffauWorkspace)
	ffau.ffauWorkspace.render()
}
function clearUrl(){
	window.location.search = ""
}

window.addEventListener('unload', clearUrl, false)

window.addEventListener('load', function load(event){
	localStorage.setItem("contentHTML","on")
	$('[data-toggle="tooltip"]').tooltip()
	$("html").attr('dir', 'ltr')
	$('#btn_search').addClass("hidden")
	var window = remote.getCurrentWindow()
	if(!window.isMaximized())window.maximize()
	ffau.renderBlockly(document.getElementById('blocklyDiv'), document.getElementById('toolbox'))
	ffau.addEvent()
	initFFAU()
	var urlFile = getStringParamFromUrl('url', '')
	if (urlFile){
		var file = urlFile.split("\\")
		var id = file.length - 1 
		document.getElementById('span_file').textContent = " - " + file[id]
		if (urlFile.endsWith(".html")){
			if (contentHTML=="on") $('#codeORblock').bootstrapToggle("off")
			$.get(urlFile, function(data){ 
				if (data) editor.setValue(data,1)
			}, 'text')
		}
		if (urlFile.endsWith(".www")){
			if (contentHTML=="off") $('#codeORblock').bootstrapToggle("on")
			$.get( urlFile, function(data){
				if (data) loadWWW(data)
			}, 'text')
		}
	}
	$('#btn_upload').on('click', function(){
		if (localStorage.getItem('contentHTML')=="on"){
			var iframe = document.getElementById('blockly_r')
			var Bframe = (iframe.contentWindow || iframe.contentDocument)
			maPage = Bframe.document.title
		}
		if (maPage === "MaPage"||maPage === ""){
			document.getElementById('titreOK').innerHTML = "Pour pouvoir uploader la page sur un site distant il faut lui donner un nouveau titre !"
			document.getElementById('monFormulaire').style.display = "none"
			$('#btn_ftp').addClass('disabled')
		} else {
			document.getElementById('titreOK').innerHTML = ""
			document.getElementById('monFormulaire').style.display = "block"
			$('#btn_ftp').removeClass('disabled')
			if (localStorage.getItem('host')!=''||localStorage.getItem('host')!==undefined) $("#inputHost").val(localStorage.getItem('host'))
			if (localStorage.getItem('portFtp')!=''||localStorage.getItem('portFtp')!==undefined) $("#inputPort").val(localStorage.getItem('portFtp'))
			if (localStorage.getItem('id')!=''||localStorage.getItem('id')!==undefined) $("#inputId").val(localStorage.getItem('id'))
			$('#inputPwd').focus()
		}
		$("#ftpModal").modal("show")
	})
	$('#btn_ftp').on('click', function(){
		localStorage.setItem('host',$('#inputHost').val())
		localStorage.setItem('portFtp',$('#inputPort').val())
		localStorage.setItem('id',$('#inputId').val())
		localStorage.setItem('pwd',$('#inputPwd').val())
		ftp_connect.innerHTML = '<i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i> connexion'
		var Ftp = new ftpClient()
		Ftp.connect({host: localStorage.getItem('host'), port: Number(localStorage.getItem('portFtp')), user: localStorage.getItem('id'), password: localStorage.getItem('pwd')})
		var data = document.getElementById('blockly_r').srcdoc
		var path = chemin+'/../compilation/html/'
		var localFile = path + maPage.replace(/\s/g, '_') + ".html"
		var remoteFile = maPage.replace(/\s/g, '_') + ".html"
		var local = []
		fs.writeFile(localFile, data, function(err){
			if (err) return console.log(err)
		})
		Ftp.on("ready", function(){
			ftp_connect.innerHTML = '<i class="fa fa-link fa-1_5x fa-fw" style="color: green"></i> connecté'
			ftp_transfert.innerHTML = '<i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i> transfert...'
			fs.readdir(chemin + "/../compilation/html/media/", function (err, files){
				if (err) return console.log(err)
				base.forEach(function(file){
					var pos = files.indexOf(file)
					files.splice(pos,1)
				})
				local = files
				console.log(local)
				local.forEach(function(file){
					Ftp.put(chemin+'/../compilation/html/media/'+file, 'media/'+file, function(result){
						console.log("img: "+result)
					})
				})
			})
			Ftp.put(localFile, remoteFile, function(result){
				console.log("html: "+result)
				ftp_transfert.innerHTML = '<i class="fa fa-check-square-o fa-1_5x fa-fw"></i> fichiers transférés'
				Ftp.end()
			})
		})
	})
	$('#btn_download').on("click", function(){
		if (localStorage.getItem('contentHTML')=="on"){
			var iframe = document.getElementById('blockly_r')
			var Bframe = (iframe.contentWindow || iframe.contentDocument)
			maPage = Bframe.document.title
		}
		if (maPage === "MaPage"||maPage === ""){
			var date = Date.now()
			maPage += date
		}
		var file = chemin+'/../compilation/html/'
		file += maPage.replace(/\s/g, '_')
		file += ".html"
		var data = document.getElementById('blockly_r').srcdoc
		fs.writeFile(file, data, function(err){
			if (err) return console.log(err)
			shell.openExternal(file)
		})
	})
	$('#btn_min').on('click', function(){
		window.minimize()
	})
	$('#btn_quit').on('click', function(){
		window.close()
	})
	$('#btn_max').on('click', function(){
		if(window.isMaximized()){
            window.unmaximize()
			document.getElementById('btn_max').innerHTML="<span class='fa fa-window-maximize fa-lg'></span>"
        }else{
            window.maximize()
			document.getElementById('btn_max').innerHTML="<span class='fa fa-window-restore fa-lg'></span>"
        }
	})
	$('#btn_redo').on('click', function(){
		if (localStorage.getItem('contentHTML')=="on") {
			ffau.redo()
		} else {
			editor.redo()
		}
	})
	$('#btn_undo').on('click', function(){
		if (localStorage.getItem('contentHTML')=="on") {
			ffau.undo()
		} else {
			editor.undo()
		}
	})
	$('#btn_print').on('click', function(){
		ipcRenderer.send('save-png-html')
	})
	$('#btn_save').on('click', function(){
		if (localStorage.getItem('contentHTML')=="on") {
			ipcRenderer.send('save-www')
		} else {
			ipcRenderer.send('save-html')
		}
	})
	$('#btn_new').on('click', function(){
		document.getElementById('span_file').textContent = ""
		if (localStorage.getItem('contentHTML')=="on") {
			clearUrl()
			initFFAU()
		} else {
			editor.setValue(new_code,1)
		}
	})
	$('#btn_search').on('click', function(){
		editor.execCommand('find')
	})
	$('#btn_open').on('click', function(){
		$('#loadText').click()
	})
	$('#loadText').on('change', function(event){
		var files = event.target.files
		if (files.length != 1) return
		var reader = new FileReader()
		reader.onloadend = function(event){
			var target = event.target
			var contentHTML = localStorage.getItem('contentHTML')
			if (target.readyState == 2) {
				document.getElementById('span_file').textContent = " - " + files[0].name
				if (files[0].name.endsWith(".www")){
					if (contentHTML=="off") $('#codeORblock').bootstrapToggle("on")
					loadWWW(target.result)
				}
				if (files[0].name.endsWith(".html")){
					if (contentHTML=="on") $('#codeORblock').bootstrapToggle("off")
					editor.setValue(target.result,1)
				}
			}
		}
		reader.readAsText(files[0])
	})
	$('#lien1').on('click', function(){
		if (localStorage.getItem("contentHTML")=="on") {
			$.get("./examples/html/hello.www", function(data) { 
				document.getElementById('span_file').textContent = " - hello.www"
				if (data) loadWWW(data)
			}, 'text')
		} else {
			$.get("./examples/html/hello.html", function(data) { 
				document.getElementById('span_file').textContent = " - hello.html"
				if (data) editor.setValue(data,1)
			}, 'text')
		}
	})
	$('#lien2').on('click', function(){
		if (localStorage.getItem("contentHTML")=="on") {
			$.get("./examples/html/simple.www", function(data) { 
				document.getElementById('span_file').textContent = " - simple.www"
				if (data) loadWWW(data)
			}, 'text')
		} else {
			$.get("./examples/html/simple.html", function(data) { 
				document.getElementById('span_file').textContent = " - simple.www"
				if (data) editor.setValue(data,1)
			}, 'text')
		}
	})
	$('#lien3').on('click', function(){
		if (localStorage.getItem("contentHTML")=="on") {
			$.get("./examples/html/complexe.www", function(data) { 
				document.getElementById('span_file').textContent = " - complexe.www"
				if (data) loadWWW(data)
			}, 'text')
		} else {
			$.get("./examples/html/complexe.html", function(data) { 
				document.getElementById('span_file').textContent = " - complexe.www"
				if (data) editor.setValue(data,1)
			}, 'text')
		}
	})
	$('#lien4').on('click', function(){
		if (localStorage.getItem("contentHTML")=="on") {
			$.get("./examples/html/bootstrap.www", function(data) { 
				document.getElementById('span_file').textContent = " - bootstrap.www"
				if (data) loadWWW(data)
			}, 'text')
		} else {
			$.get("./examples/html/bootstrap.html", function(data) { 
				document.getElementById('span_file').textContent = " - bootstrap.www"
				if (data) editor.setValue(data,1)
			}, 'text')
		}
	})
	$('#lien5').on('click', function(){
		ipcRenderer.send('addMedias')
	})
	$('#lien6').on('click', function(){
		fs.readdir(chemin+"/../compilation/html/media", (err, files) => {
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
		fs.readdir(chemin+"/../compilation/html/media", function(err, files){
			base.forEach(function(file){
				var pos = files.indexOf(file)
				files.splice(pos,1)
			})
			if (files.length!=0){
				files.forEach(function(file){
					fs.unlink(chemin+"/../compilation/html/media/"+file, function(err){ if (err) return console.log(err)})
				})
			}
		})
	})
	$('#codeORblock').on("change", function(){
		var data = document.getElementById('blockly_r').srcdoc
		if (localStorage.getItem('contentHTML')=="on") {
			if (localStorage.getItem('size')) {
				document.getElementById('content_code').style.fontSize = localStorage.getItem('size')
			}
			editor.setValue(data,1)
			$('a[href="#content_code"]').tab('show')
			$('#btn_print').addClass("hidden")
			$('#btn_search').removeClass("hidden")
			localStorage.setItem('contentHTML', "off")
		} else {
			$('a[href="#blocklyDiv"]').tab('show')
			$('#btn_print').removeClass("hidden")
			$('#btn_search').addClass("hidden")
			localStorage.setItem('contentHTML', "on")
		}
	})
	ipcRenderer.on('saved-png-html', function(event, path){
		if (path === null){
			return
		} else {
			var ws = ffau.ffauWorkspace.svgBlockCanvas_.cloneNode(true);
			ws.removeAttribute("width");
			ws.removeAttribute("height");
			ws.removeAttribute("transform");
			var styleElem = document.createElementNS("http://www.w3.org/2000/svg", "style");
			styleElem.textContent = Blockly.Css.CONTENT.join('') ;
			ws.insertBefore(styleElem, ws.firstChild);
			var bbox = ffau.ffauWorkspace.svgBlockCanvas_.getBBox();
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
			img.onload = function(){
				ctx.drawImage( img, 5, 5 );
				var canvasdata = canvas.toDataURL("image/png",1);
				var data = canvasdata.replace(/^data:image\/png;base64,/,"")
				fs.writeFile(path, data, 'base64', function(err){ if (err) return console.log(err)})
			}
		}
	})
	ipcRenderer.on('addedMedias', function(event, path){
		if (path === null){
			return
		} else {
			path.forEach(function(pt) {
				var name = pt.substring(pt.lastIndexOf("\\"))
				fs.copyFile(pt, chemin+'/../compilation/html/media/'+name, function(err){ if (err) return console.log(err)})
				fs.copyFile(pt, chemin+'/../www/media/'+name, function(err){ if (err) return console.log(err)})
			})
		}
	})
	ipcRenderer.on('saved-html', function(event, path){
		if (path === null){
			return
		} else {
			fs.writeFile(path, editor.getValue(), function(err){ if (err) return console.log(err)})
			var file = path.split("\\")
			var id = file.length - 1 
			document.getElementById('span_file').textContent = " - " + file[id]
		}
	})
	ipcRenderer.on('saved-www', function(event, path){
		if (path){
			fs.writeFile(path, ffau.generateXML(), function(err){ if (err) return console.log(err)})
			var file = path.split("\\")
			var id = file.length - 1 
			document.getElementById('span_file').textContent = " - " + file[id]
		}
	})
})