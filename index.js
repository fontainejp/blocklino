const { ipcRenderer } = require("electron")
const { exec } = require('child_process')
const sp = require('serialport')
const fs = require('fs')
const appVersion = window.require('electron').remote.app.getVersion()
sp.list(function(err,ports) {
	localStorage.setItem("nb_com",ports.length)
	ports.forEach(function(port) {
		var opt = document.createElement('option')
		opt.value = port.comName
		opt.text = port.comName
		document.getElementById('portserie').appendChild(opt)
	})
})
window.addEventListener('load', function load(event) {
	document.getElementById('versionapp').textContent = " version " + appVersion
	$('#portserie').mouseover(function(event) {
		sp.list(function(err,ports) {
			var nbCom = localStorage.getItem("nb_com"), menu_com = document.getElementById('portserie'), menu_opt = menu_com.getElementsByTagName('option')
			if(ports.length != nbCom){
				while(menu_opt[1]) {
					menu_com.removeChild(menu_opt[1])
				}
				ports.forEach(function(port){
					var opt = document.createElement('option')
					opt.value = port.comName
					opt.text = port.comName
					document.getElementById('portserie').appendChild(opt)
				})
				localStorage.setItem("nb_com",ports.length)
			}
		})
	})
	document.getElementById('btn_term').onclick = function(event) {
		var com = document.getElementById('portserie').value
		if (com=="com"){
			$("#message").modal("show")
			document.getElementById('messageDIV').style.color = '#000000'
			document.getElementById('messageDIV').textContent = 'Sélectionner un port !!!'
			return
		}
		ipcRenderer.send("prompt", "")		
	}
	document.getElementById('btn_factory').onclick = function(event) {
		ipcRenderer.send("factory", "")	
	}
	document.getElementById('btn_verify').onclick = function(event) {
		var file_ino = './compilation/ino/sketch.ino'
		var data = $('#pre_previewArduino').text()
		var carte = profile.defaultBoard['build']
		var cmd_verify = 'verify.bat ' + carte
		fs.appendFile(file_ino, data, function(err){
			if (err) return console.log(err)
		})
		document.getElementById('messageDIV').style.color = '#000000'
		document.getElementById('messageDIV').innerHTML = 'Vérification <i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>'
		exec(cmd_verify , {cwd: './compilation'} , function(err, stdout, stderr){
			if (stderr) {
				document.getElementById('messageDIV').style.color = '#ff0000'
				document.getElementById('messageDIV').textContent = stderr
				fs.unlink(file_ino, function(err){
					if(err) return console.log(err)
				}) 
				return
			}
			document.getElementById('messageDIV').style.color = '#009000'
			document.getElementById('messageDIV').textContent = 'Vérification : OK'
			fs.unlink(file_ino, function(err){
				if(err) return console.log(err)
			}) 
		})
	}
	document.getElementById('btn_flash').onclick = function(event) {
		var file_hex = './compilation/build/sketch.ino.hex'
		var com = document.getElementById('portserie').value
		var avr_speed=profile.defaultBoard['speed']
		var avr_cpu=profile.defaultBoard['cpu']
		var avr_prog=profile.defaultBoard['prog']
		var cmd_flash = 'flash.bat ' + avr_cpu + ' ' + avr_prog + ' '+ com + ' ' + avr_speed
		if (com=="com"){
			document.getElementById('messageDIV').style.color = '#000000'
			document.getElementById('messageDIV').textContent = 'Sélectionner un port !!!'
			return
		}
		document.getElementById('messageDIV').style.color = '#000000'
		document.getElementById('messageDIV').innerHTML = 'Téléversement <i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>'
		exec(cmd_flash , {cwd: './compilation'} , function(err, stdout, stderr){
			if (err) {
				document.getElementById('messageDIV').style.color = '#ff0000'
				document.getElementById('messageDIV').textContent = err
				fs.unlink(file_hex, function(err){
					if(err) return console.log(err)
				}) 
				return
			}
			document.getElementById('messageDIV').style.color = '#009000'
			document.getElementById('messageDIV').textContent = 'Téléversement : OK'
			fs.unlink(file_hex, function(err){
				if(err) return console.log(err)
			}) 
		})
	}
	document.getElementById('btn_saveino').onclick = function(event) {
		ipcRenderer.send('save-ino')
	}
	ipcRenderer.on('saved-ino', function(event, path){
		var code = $('#pre_previewArduino').text()
		fs.appendFile(path, code, function(err){
			if (err) return console.log(err)
		})
	})
	document.getElementById('btn_saveXML').onclick = function(event) {
		ipcRenderer.send('save-bloc')
	}
	ipcRenderer.on('saved-bloc', function(event, path){
		var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace)
		var toolbox = window.localStorage.toolbox
		if (!toolbox) {
			toolbox = $("#toolboxes").val()
		}
		if (toolbox) {
			var newel = document.createElement("toolbox")
			newel.appendChild(document.createTextNode(toolbox))
			xml.insertBefore(newel, xml.childNodes[0])
		}
		var toolboxids = window.localStorage.toolboxids
		if (toolboxids === undefined || toolboxids === "") {
			if ($('#defaultCategories').length) {
				toolboxids = $('#defaultCategories').html()
			}
		}
		var code = Blockly.Xml.domToPrettyText(xml)
		fs.appendFile(path, code, function(err){
			if (err) return console.log(err)
		})
	})
	ipcRenderer.on('information', function(event, text) {
		var container = document.getElementById('messages')
		var message = document.createElement('div')
		message.innerHTML = text
		container.appendChild(message)
	})
})