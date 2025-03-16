var urlFile = getStringParamFromUrl('url', '')
var { ipcRenderer } = require("electron")
var fs = require('fs')
var remote = require('electron').remote 
var electronApp = remote.getCurrentWindow()

function getStringParamFromUrl(name, defaultValue){
	var val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'))
	return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue
}
function update(){
	document.getElementById('sortieJS').value = Blockly.JavaScript.workspaceToCode(workspace)
}
function loadTurtle(file){
	var xml = Blockly.Xml.textToDom(file)
	workspace.clear()
	Blockly.Xml.domToWorkspace(xml, workspace)
	workspace.render()
}

window.addEventListener('load', function load(event){
	$('[rel="tooltip"]').tooltip({trigger: "hover"})
	$('[data-toggle="tooltip"]').tooltip()
	workspace = Blockly.inject('blocklyDiv',{
		sounds:false,
		media: 'media/',
		toolbox: document.getElementById('toolbox'),
		zoom: {controls: true}
	})
	workspace.addChangeListener(update)
	if (urlFile){
		var file = urlFile.split("\\")
		var id = file.length - 1 
		$('#span_file').text(" - " + file[id])
		if (urlFile.endsWith("ttl")){
			$.get( urlFile, function(data){
				if (data) loadTurtle(data)
			}, 'text')
		}
	}
	$('#btn_quit').on('click', function(){
		ipcRenderer.send("closeTTL")
	})
	ipcRenderer.on('closedTTL', function(event, response){
		if (response === 0){
			electronApp.close()
		} else {
			return
		}
	})
	$('#btn_redo').on('click', function(){
		workspace.undo(1)
	})
	$('#btn_undo').on('click', function(){
		workspace.undo(0)
	})
	$('#btn_print').on('click', function(){
		ipcRenderer.send("save-svg")
	})
	ipcRenderer.on('saved-svg', function(event, path){
		if (path){
			var code = $('#leSVG').prop('outerHTML')
			fs.writeFile(path, code, function(err){ if (err) return console.log(err)})
		}
	})
	$('#btn_save').on('click', function(){
		ipcRenderer.send("save-ttl")
	})
	ipcRenderer.on('saved-ttl', function(event, path){
		if (path){
			var code = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(workspace))
			fs.writeFile(path, code, function(err){ if (err) return console.log(err)})
			var file = path.split("\\")
			var id = file.length - 1 
			$('#span_file').text(" - " + file[id])
		}
	})
	$('#btn_new').on('click', function(){
		ipcRenderer.send("newTTL")
	})
	ipcRenderer.on('newedTTL', function(event, response){
		if (response === 0){
			workspace.clear()
			eval("effaceDessin();toto=1;totos[toto].t=0;totos[toto].teleport(320,320);")
			$('#span_file').text("")
		} else {
			return
		}
	})
	$('#btn_open').on('click', function(){
		$('#loadText').click()
	})
	$('#loadText').on('change', function(event){
		var files = event.target.files
		if (files.length !=1) return
		var fileReader = new FileReader()
		fileReader.onloadend = function(event) {
			var target = event.target
			if (target.readyState == 2) loadTurtle(target.result)
		}
		fileReader.readAsText(files[0])
		var name = files[0].name.split("\.")
		$('#span_file').text(" - " + name[0])
	})
	$('#lien_carre').on('click', function(){
		ipcRenderer.send("exampleTTL","carre.ttl")
	})
	$('#lien_etoile5').on('click', function(){
		ipcRenderer.send("exampleTTL","etoile5.ttl")
	})
	$('#lien_maison').on('click', function(){
		ipcRenderer.send("exampleTTL","maison.ttl")
	})
	ipcRenderer.on('myExample', function(event, response, file){
		if (response === 0){
			$.get("./examples/" + file, function(data) { 
				$('#span_file').text(" - " + file)
				if (data) loadTurtle(data)
			}, 'text')
		} else {
			return
		}
	})
	$('#btn_exe').on("click", function(){
		try {
			eval($("#sortieJS").val())
		} catch (e) {
			$('#message_body').append(e)
			$('#message').modal('show')
		}
	})
	$('#message').on('hidden.bs.modal', function(event) {
		$("#message_body").empty()
	})
})