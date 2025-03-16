var { ipcRenderer, shell } = require("electron")
var remote = require('electron').remote 
var fs = require("fs")
var path = require("path")
var ffau = new Ffau()
var electronApp = remote.getCurrentWindow()
var urlFile = getStringParamFromUrl('url', '')
var variables = {
	content : "on", // "on"=block  //  "off"=code
	size : "14px",
	code : "<!DOCTYPE HTML>\n",
	largeur : 45,
	theme : "sqlserver",
	dirHTML : "",
	
}
variables.dirHTML = path.join(__dirname, "../../compilation/html/")
	
function getStringParamFromUrl(name, defaultValue){
	var val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'))
	return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue
}
function initFFAU(){
	ffau.ffauWorkspace.clear()
	ffau.ffauWorkspace.render()
}
function loadWWW(file){
	var xml = Blockly.Xml.textToDom(file)
	ffau.ffauWorkspace.clear()
	Blockly.Xml.domToWorkspace(xml, ffau.ffauWorkspace)
	ffau.ffauWorkspace.render()
}
function clearUrl(){
	window.location.search = ""
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
	$("#btn_media").removeClass("btn-secondary")
	$("#btn_media").addClass('btn-default')
	$("#btn_download").removeClass("btn-secondary")
	$("#btn_download").addClass('btn-default')
	$("#btn_undo").removeClass("btn-secondary")
	$("#btn_undo").addClass('btn-default')
	$("#btn_redo").removeClass("btn-secondary")
	$("#btn_redo").addClass('btn-default')
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
	$("#btn_media").removeClass("btn-default")
	$("#btn_media").addClass('btn-secondary')
	$("#btn_download").removeClass("btn-default")
	$("#btn_download").addClass('btn-secondary')
	$("#btn_undo").removeClass("btn-default")
	$("#btn_undo").addClass('btn-secondary')
	$("#btn_redo").removeClass("btn-default")
	$("#btn_redo").addClass('btn-secondary')
	$("#btn_search").removeClass("btn-default")
	$("#btn_search").addClass('btn-secondary')
}
function loadConfig(){
	if(!electronApp.isMaximized()) electronApp.maximize()
	$('#fontsize').val(variables.size)
	$('#content_code').css("font-size",variables.size)
	$('#theme').val(variables.theme)
	theme_sqlserver()
	$('#codeORblock').bootstrapToggle(variables.content)
	$('#btn_search').addClass("hidden")
	if (urlFile){
		var file = urlFile.split("\\")
		var id = file.length - 1 
		$('#span_file').text(" - " + file[id])
		if (urlFile.endsWith(".html")){
			if (variables.content == "on") {
				$('#codeORblock').bootstrapToggle()
				variables.content = "off"
				$('#btn_search').removeClass("hidden")
			}
			$.get(urlFile, function(data){ 
				if (data) editor.setValue(data,1)
			}, 'text')
		}
		if (urlFile.endsWith(".www")){
			if (variables.content == "off") {
				$('#codeORblock').bootstrapToggle()
				variables.content = "on"
				$('#btn_search').addClass("hidden")
			}
			$.get(urlFile, function(data){
				if (data) loadWWW(data)
			}, 'text')
		}
	}
	$('[data-toggle="tooltip"]').tooltip()
	$('[rel="tooltip"]').tooltip({trigger: "hover"})
	ffau.renderBlockly(document.getElementById('blocklyDiv'), document.getElementById('toolbox'))
	ffau.addEvent()
	initFFAU()
}

window.addEventListener('unload', clearUrl, false)

window.addEventListener('load', function load(event){
	loadConfig()
	$('#theme').on("change", function(){
		var new_theme = $(this).val()
		editor.setTheme('ace/theme/' + new_theme)
		variables.theme = new_theme
		if (new_theme == "monokai") {
			theme_monokai()
		} else {
			theme_sqlserver()
		}
	})
	$('#btn_download').on("click", function(){
		if (nameFile == ""){
			$("#message").modal("show")
			return
		}
		var data
		var maPage = (document.getElementById('blockly_r').contentWindow.document.title || document.getElementById('blockly_r').contentDocument.document.title)
		if (variables.content == "off"){
			data = editor.getValue()
		} else {
			data = document.getElementById('blockly_r').srcdoc
		}
		if (maPage === ""){
			$("#message").modal("show")
			return
		}
		fs.writeFile(variables.dirHTML + maPage + ".html", data, function(err){
			if (err) return console.log(err)
			shell.openExternal(variables.dirHTML + maPage + ".html")
		})
	})
	$('#btn_min').on('click', function(){
		electronApp.minimize()
	})
	$('#btn_quit').on('click', function(){
		ipcRenderer.send("closeHTML")
	})
	ipcRenderer.on('closedHTML', function(event, response){
		if (response === 0){
			electronApp.close()
		} else {
			return
		}
	})
	$('#btn_max').on('click', function(){
		if(electronApp.isMaximized()){
            electronApp.unmaximize()
			$('#btn_max').html("<span class='fa fa-window-maximize fa-lg'></span>")
        }else{
            electronApp.maximize()
			$('#btn_max').html("<span class='fa fa-window-restore fa-lg'></span>")
        }
	})
	$('#btn_redo').on('click', function(){
		if (variables.content == "on") {
			ffau.redo()
		} else {
			editor.redo()
		}
	})
	$('#btn_undo').on('click', function(){
		if (variables.content == "on") {
			ffau.undo()
		} else {
			editor.undo()
		}
	})
	$('#btn_save').on('click', function(){
		if (variables.content == "on") {
			ipcRenderer.send('save-www', nameFile)
		} else {
			var iframe = document.getElementById('blockly_r')
			var Bframe = (iframe.contentWindow || iframe.contentDocument)
			maPage = Bframe.document.title
			ipcRenderer.send('save-html', maPage)
		}
	})
	$('#btn_new').on('click', function(){
		ipcRenderer.send("newHTML")
	})
	ipcRenderer.on('newedHTML', function(event, response){
		if (response === 0){
			$('#span_file').text("")
			if (variables.content == "on") {
				initFFAU()
			} else {
				editor.setValue(new_code,1)
			}
		} else {
			return
		}
	})
	$('#btn_search').on('click', function(){
		editor.execCommand('find')
	})
	$('#btn_open').on('click', function(){
		$('#loadText').click()
	})
	$('#btn_console').on('click', function(){
		electronApp.toggleDevTools()
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
					if (variables.content == "off") {
						$('#codeORblock').bootstrapToggle()
						variables.content = "on"
						$('#btn_search').addClass("hidden")
					}
					loadWWW(target.result)
				}
				if (files[0].name.endsWith(".html")){
					if (variables.content == "on") {
						$('#codeORblock').bootstrapToggle()
						variables.content = "off"
						$('#btn_search').removeClass("hidden")
					}
					editor.setValue(target.result,1)
				}
			}
		}
		reader.readAsText(files[0])
	})
	$('#lien_hello').on('click', function(){
		ipcRenderer.send("example","hello")
	})
	ipcRenderer.on('myExample', function(event, response, file){
		if (response === 0){
			if (variables.content == "on") {
				$.get("./examples/html/" + file + ".www", function(data) { 
					$('#span_file').text(" - " + file)
					if (data) loadWWW(data)
				}, 'text')
			} else {
				$.get("./examples/html/" + file + ".html", function(data) { 
					$('#span_file').text(" - " + file)
					if (data) editor.setValue(data,1)
				}, 'text')
			}
		} else {
			return
		}
	})
	$('#lien_ia').on('click', function(){
		ipcRenderer.send("example","ia")
	})
	$('#lien_gafam').on('click', function(){
		ipcRenderer.send("example","gafam")
	})
	$('#lien_complexe').on('click', function(){
		ipcRenderer.send("example","complexe")
	})
	$('#lien_zen').on('click', function(){
		ipcRenderer.send("example","zen")
	})
	$('#codeORblock').on("change", function(){
		var data = document.getElementById('blockly_r').srcdoc
		if (variables.content == "on") {
			editor.setValue(data,1)
			$('a[href="#content_code"]').tab('show')
			$('#btn_search').removeClass("hidden")
			variables.content = "off"
		} else {
			$('a[href="#blocklyDiv"]').tab('show')
			$('#btn_search').addClass("hidden")
			variables.content = "on"
		}
	})
	$('#fontsize').on("change", function(){
		$('#content_code').css("font-size", $(this).val())
		variables.size = $(this).val()
	})
	$('#viewsize').on('change', function(){
		$('#blockly_r').css('width', $(this).val()+"%")
		$('#blockly_l').css('width', 100-$(this).val()+"%")
		Blockly.svgResize(ffau.ffauWorkspace)
	})
	$('#btn_html_explore').on("click", function(){
		shell.openExternal(variables.dirHTML)
	})
	$('#btn_media1').on('click', function(){
		var rootBlock = ffau.ffauWorkspace.newBlock('audios')
		rootBlock.setFieldValue("acqua.mp3", 'source')
		rootBlock.initSvg()
		rootBlock.render()
	})
	$('#btn_media2').on('click', function(){
		var rootBlock = ffau.ffauWorkspace.newBlock('image')
		rootBlock.setFieldValue("allume.png", 'source')
		rootBlock.initSvg()
		rootBlock.render()
	})
	$('#btn_media3').on('click', function(){
		var rootBlock = ffau.ffauWorkspace.newBlock('video_file')
		rootBlock.setFieldValue("aube.mp4", 'source')
		rootBlock.initSvg()
		rootBlock.render()
	})
	$('#btn_media4').on('click', function(){
		var rootBlock = ffau.ffauWorkspace.newBlock('image')
		rootBlock.setFieldValue("beige.gif", 'source')
		rootBlock.initSvg()
		rootBlock.render()
	})
	$('#btn_media5').on('click', function(){
		var rootBlock = ffau.ffauWorkspace.newBlock('image')
		rootBlock.setFieldValue("college.jpg", 'source')
		rootBlock.initSvg()
		rootBlock.render()
	})
	$('#btn_media6').on('click', function(){
		var rootBlock = ffau.ffauWorkspace.newBlock('image')
		rootBlock.setFieldValue("earth.jpg", 'source')
		rootBlock.initSvg()
		rootBlock.render()
	})
	$('#btn_media7').on('click', function(){
		var rootBlock = ffau.ffauWorkspace.newBlock('image')
		rootBlock.setFieldValue("eteint.png", 'source')
		rootBlock.initSvg()
		rootBlock.render()
	})
	$('#btn_media8').on('click', function(){
		var rootBlock = ffau.ffauWorkspace.newBlock('image')
		rootBlock.setFieldValue("neuronne.jpg", 'source')
		rootBlock.initSvg()
		rootBlock.render()
	})
	$('#btn_media9').on('click', function(){
		var rootBlock = ffau.ffauWorkspace.newBlock('image')
		rootBlock.setFieldValue("ordinateur.png", 'source')
		rootBlock.initSvg()
		rootBlock.render()
	})
	$('#btn_media10').on('click', function(){
		var rootBlock = ffau.ffauWorkspace.newBlock('image')
		rootBlock.setFieldValue("portable.png", 'source')
		rootBlock.initSvg()
		rootBlock.render()
	})
	$('#btn_media11').on('click', function(){
		var rootBlock = ffau.ffauWorkspace.newBlock('image')
		rootBlock.setFieldValue("zen.jpg", 'source')
		rootBlock.initSvg()
		rootBlock.render()
	})
	$('#btn_modal').on('click', function(){
		promptBox("hello")
		console.log()
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