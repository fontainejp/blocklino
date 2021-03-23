var { ipcRenderer, shell } = require("electron")
var remote = require('electron').remote 
var fs = require("fs")
var path = require("path")
var ftpClient = require('ftp')
var ffau = new Ffau()
var chemin = process.resourcesPath // .../resources/
var base = ["acqua.mp3","bunny.mp4","zen.jpg","neuronne.jpg","no_photo.png"]
var contentHTML = localStorage.getItem('contentHTML')
var size = localStorage.getItem('size')
var theme = localStorage.getItem('theme')
var largeur = localStorage.getItem("largeur")
var HTML_content = "on"
var HTML_size = "14px"
var HTML_largeur = "45%"
var new_code = '<!DOCTYPE HTML>\n<html lang="fr">\n\n</html>'
	
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
function clear_media_dir(){
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
}
function theme_sqlserver(){
	$("#theme_css").attr("href", "css/ffau_sqlserver.css")
	$("#btn_new").removeClass("btn-secondary")
	$("#btn_new").addClass('btn-default')
	$("#btn_example").removeClass("btn-secondary")
	$("#btn_example").addClass('btn-default')
	$("#btn_open").removeClass("btn-secondary")
	$("#btn_open").addClass('btn-default')
	$("#btn_save").removeClass("btn-secondary")
	$("#btn_save").addClass('btn-default')
	$("#btn_config").removeClass("btn-secondary")
	$("#btn_config").addClass('btn-default')
	$("#btn_img").removeClass("btn-secondary")
	$("#btn_img").addClass('btn-default')
	$("#btn_download").removeClass("btn-secondary")
	$("#btn_download").addClass('btn-default')
	$("#btn_upload").removeClass("btn-secondary")
	$("#btn_upload").addClass('btn-default')
	$("#btn_undo").removeClass("btn-secondary")
	$("#btn_undo").addClass('btn-default')
	$("#btn_redo").removeClass("btn-secondary")
	$("#btn_redo").addClass('btn-default')
	$("#btn_print").removeClass("btn-secondary")
	$("#btn_print").addClass('btn-default')
	$("#btn_search").removeClass("btn-secondary")
	$("#btn_search").addClass('btn-default')
}
function theme_monokai(){
	$("#theme_css").attr("href", "css/ffau_monokai.css")
	$("#btn_new").removeClass("btn-default")
	$("#btn_new").addClass('btn-secondary')
	$("#btn_example").removeClass("btn-default")
	$("#btn_example").addClass('btn-secondary')
	$("#btn_open").removeClass("btn-default")
	$("#btn_open").addClass('btn-secondary')
	$("#btn_save").removeClass("btn-default")
	$("#btn_save").addClass('btn-secondary')
	$("#btn_config").removeClass("btn-default")
	$("#btn_config").addClass('btn-secondary')
	$("#btn_img").removeClass("btn-default")
	$("#btn_img").addClass('btn-secondary')
	$("#btn_download").removeClass("btn-default")
	$("#btn_download").addClass('btn-secondary')
	$("#btn_upload").removeClass("btn-default")
	$("#btn_upload").addClass('btn-secondary')
	$("#btn_undo").removeClass("btn-default")
	$("#btn_undo").addClass('btn-secondary')
	$("#btn_redo").removeClass("btn-default")
	$("#btn_redo").addClass('btn-secondary')
	$("#btn_print").removeClass("btn-default")
	$("#btn_print").addClass('btn-secondary')
	$("#btn_search").removeClass("btn-default")
	$("#btn_search").addClass('btn-secondary')
}

window.addEventListener('unload', clearUrl, false)

window.addEventListener('load', function load(event){
	if (largeur === undefined) {
		$('#largeur').val(HTML_largeur)
		localStorage.setItem("largeur", HTML_largeur)
	} else {
		$('#largeur').val(largeur)
	}
	if (size === undefined) {
		$('#fontsize').val(BlocklyDuino.size)
		localStorage.setItem("size", HTML_size)
	} else {
		$('#fontsize').val(size)
		$('#content_code').css("font-size",size)
	}
	if ((theme === undefined)||(theme=="sqlserver")) {
		$('#theme').val("sqlserver")
		theme_sqlserver()
		localStorage.setItem("theme", "sqlserver")
	} else {
		$('#theme').val("monokai")
		theme_monokai()	
		editor.setTheme('ace/theme/monokai')
		localStorage.setItem("theme", "monokai")
	}
	if (contentHTML===undefined) {
		localStorage.setItem("contentHTML", HTML_content)
		$('#codeORblock').bootstrapToggle(HTML_content)
		$('#btn_search').addClass("hidden")
	} else {
		$('#codeORblock').bootstrapToggle(contentHTML)
		if (contentHTML=="off") {
			$('a[href="#content_code"]').tab('show')
			$('#btn_search').removeClass("hidden")
			editor.setValue(new_code,1)
		}
		$('#btn_search').addClass("hidden")
	}
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
		$('#span_file').text(" - " + file[id])
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
	$('#btn_valid_config').on('click', function(){
		$("#configModal").modal("hide")
	})
	$('#largeur').on('change', function(){
		localStorage.setItem("largeur", $('#largeur').val()) 
		switch ($('#largeur').val()) {
			case "40%":
				$('#blockly_l').css("width", "60%")
				$('#blockly_r').css("width", "40%")
				break
			case "45%":
				$('#blockly_l').css("width", "55%")
				$('#blockly_r').css("width", "45%")
				break
			case "50%":
				$('#blockly_l').css("width", "50%")
				$('#blockly_r').css("width", "50%")
				break
			case "55%":
				$('#blockly_l').css("width", "45%")
				$('#blockly_r').css("width", "55%")
				break
			case "60%":
				$('#blockly_l').css("width", "40%")
				$('#blockly_r').css("width", "60%")
				ffau.ffauWorkspace.render()
				break
		}
	})
	$('#theme').on("change", function(){
		var new_theme = $(this).val()
		editor.setTheme('ace/theme/' + new_theme)
		localStorage.setItem("theme", new_theme) 
		if (new_theme == "monokai") {
			theme_monokai()
		} else {
			theme_sqlserver()
		}
	})
	$('#btn_reset').on('click', function(){
		fs.readdir(chemin+"/../compilation/html", function(err, files){
			if (files.length!=0){
				files.forEach(function(file){
					if (path.extname(file)==".html")	fs.unlink(chemin+"/../compilation/html/"+file, function(err){if (err) return console.log(err)})
				})
			}
		})
		clear_media_dir()
		$("#configModal").modal("hide")
	})
	$('#btn_upload').on('click', function(){
		if (localStorage.getItem('contentHTML')=="on"){
			var iframe = document.getElementById('blockly_r')
			var Bframe = (iframe.contentWindow || iframe.contentDocument)
			maPage = Bframe.document.title
		}
		if (maPage === ""){
			$('#titreOK').html("Pour pouvoir uploader la page sur un site distant il faut lui donner un nouveau titre. Utiliser la balise HEAD et TITLE !")
			$('#monFormulaire').css('display', 'none')
			$('#btn_ftp').addClass('disabled')
		} else {
			$('#titreOK').html('')
			$('#monFormulaire').css('display', 'block')
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
		$('#ftp_connect').html('<i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i> connexion')
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
			$('#ftp_connect').html('<i class="fa fa-link fa-1_5x fa-fw" style="color: green"></i> connecté')
			$('#ftp_transfert').html('<i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i> transfert...')
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
				$('#ftp_transfert').html('<i class="fa fa-check-square-o fa-1_5x fa-fw"></i> fichiers transférés')
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
		if (maPage === ""){
			$("#message").modal("show")
			return
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
			$('#btn_max').html("<span class='fa fa-window-maximize fa-lg'></span>")
        }else{
            window.maximize()
			$('#btn_max').html("<span class='fa fa-window-restore fa-lg'></span>")
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
			ipcRenderer.send('save-www', nameFile)
		} else {
			var iframe = document.getElementById('blockly_r')
			var Bframe = (iframe.contentWindow || iframe.contentDocument)
			maPage = Bframe.document.title
			ipcRenderer.send('save-html', maPage)
		}
	})
	$('#btn_new').on('click', function(){
		$('#span_file').text("")
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
			if (target.readyState == 2) {
				$('#span_file').text(" - " + files[0].name)
				if (files[0].name.endsWith(".www")){
					if (localStorage.getItem('contentHTML')=="off") $('#codeORblock').bootstrapToggle("on")
					loadWWW(target.result)
				}
				if (files[0].name.endsWith(".html")){
					if (localStorage.getItem('contentHTML')=="on") $('#codeORblock').bootstrapToggle("off")
					editor.setValue(target.result,1)
				}
			}
		}
		reader.readAsText(files[0])
	})
	$('#lien1').on('click', function(){
		if (localStorage.getItem("contentHTML")=="on") {
			$.get("./examples/html/hello.www", function(data) { 
				$('#span_file').text(" - hello.www")
				if (data) loadWWW(data)
			}, 'text')
		} else {
			$.get("./examples/html/hello.html", function(data) { 
				$('#span_file').text(" - hello.html")
				if (data) editor.setValue(data,1)
			}, 'text')
		}
	})
	$('#lien2').on('click', function(){
		if (localStorage.getItem("contentHTML")=="on") {
			$.get("./examples/html/ia.www", function(data) { 
				$('#span_file').text(" - ia.www")
				if (data) loadWWW(data)
			}, 'text')
		} else {
			$.get("./examples/html/ia.html", function(data) { 
				$('#span_file').text(" - ia.html")
				if (data) editor.setValue(data,1)
			}, 'text')
		}
	})
	$('#lien3').on('click', function(){
		if (localStorage.getItem("contentHTML")=="on") {
			$.get("./examples/html/complexe.www", function(data) { 
				$('#span_file').text(" - complexe.www")
				if (data) loadWWW(data)
			}, 'text')
		} else {
			$.get("./examples/html/complexe.html", function(data) { 
				$('#span_file').text(" - complexe.html")
				if (data) editor.setValue(data,1)
			}, 'text')
		}
	})
	$('#lien4').on('click', function(){
		if (localStorage.getItem("contentHTML")=="on") {
			$.get("./examples/html/zen.www", function(data) { 
				$('#span_file').text(" - zen.www")
				if (data) loadWWW(data)
			}, 'text')
		} else {
			$.get("./examples/html/zen.html", function(data) { 
				$('#span_file').text(" - zen.html")
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
		clear_media_dir()
	})
	$('#codeORblock').on("change", function(){
		var data = document.getElementById('blockly_r').srcdoc
		if (localStorage.getItem('contentHTML')=="on") {
			if (localStorage.getItem('size')) $('#content_code').css("font-size", localStorage.getItem('size'))
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
	$('#fontsize').on("change", function(){
		$('#content_code').css("font-size", $(this).val())
		localStorage.setItem("size", $(this).val())
	});
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
			$('#span_file').text(" - " + file[id])
		}
	})
	ipcRenderer.on('saved-www', function(event, path){
		if (path){
			fs.writeFile(path, ffau.generateXML(), function(err){ if (err) return console.log(err)})
			var file = path.split("\\")
			var id = file.length - 1 
			$('#span_file').text(" - " + file[id])
		}
	})
})