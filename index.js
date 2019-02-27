const { ipcRenderer } = require("electron")
const { exec, execSync } = require('child_process')
const sp = require('serialport')
const fs = require('fs')
const appVersion = window.require('electron').remote.app.getVersion()
function clear_sketchbook() {
	var path = './compilation/sketchbook/'
	fs.readdir(path, function(err, files) {
		for (const file of files) {
			if (err) throw err
			fs.unlink(path + file, function (err) {
				if (err) throw err;
			})
		}
		localStorage.setItem("verif",false)
	})
}
window.addEventListener('load', function load(event) {
	var messageDiv = document.getElementById('messageDIV')
	clear_sketchbook()
	localStorage.setItem("verif",false)
	var portserie = document.getElementById('portserie')
	sp.list(function(err,ports) {
		var opt = document.createElement('option')
		opt.value = "com"
		opt.text = "Choisir le port"
		portserie.appendChild(opt)
		ports.forEach(function(port) {
			if (port.vendorId){
				var opt = document.createElement('option')
				opt.value = port.comName
				opt.text = port.comName
				portserie.appendChild(opt)
			}
		})
		localStorage.setItem("nb_com",ports.length)
		if (portserie.options.length > 1) {
			portserie.selectedIndex = 1
			localStorage.setItem("com",portserie.options[1].value)
		} else {
			localStorage.setItem("com","com")
		}
	})
	var file_ino = '.\\compilation\\sketchbook\\sketchbook.ino'
	document.getElementById('versionapp').textContent = " version " + appVersion
	$('#portserie').mouseover(function(event){
		sp.list(function(err,ports) {
			var nb_com = localStorage.getItem("nb_com"), menu_opt = portserie.getElementsByTagName('option')
			if(ports.length > nb_com){
				ports.forEach(function(port){
					if (port.vendorId){
						var opt = document.createElement('option')
						opt.value = port.comName
						opt.text = port.comName
						portserie.appendChild(opt)
						localStorage.setItem("com",port.comName)
					}
				})
				localStorage.setItem("nb_com",ports.length)
				localStorage.setItem("com",portserie.options[1].value)
			}
			if(ports.length < nb_com){
				while(menu_opt[1]) {
					portserie.removeChild(menu_opt[1])
				}
				localStorage.setItem("com","com")
				localStorage.setItem("nb_com",ports.length)
			}
		})
	})
	document.getElementById('btn_term').onclick = function(event) {
		var com = portserie.value
		if (com=="com"){
			$("#message").modal("show")
			messageDiv.style.color = '#000000'
			messageDiv.innerHTML = 'Sélectionner un port !!! <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&#215;</span></button>'
			return
		}
		ipcRenderer.send("prompt", "")		
	}
	document.getElementById('btn_factory').onclick = function(event) {
		ipcRenderer.send("factory", "")	
	}
	document.getElementById('btn_verify').onclick = function(event) {
		var data = $('#pre_previewArduino').text()
		var carte = profile.defaultBoard['build']
		var prog = profile.defaultBoard['prog']
		var cmd_verify = 'cli compile --fqbn ' + prog + ':' + carte + ' .\\sketchbook'
		fs.writeFile(file_ino, data, function(err){
			if (err) return console.log(err)
		})
		messageDiv.style.color = '#000000'
		messageDiv.innerHTML = 'Vérification <i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>'
		exec(cmd_verify , {cwd: './compilation'} , function(err, stdout, stderr){
			if (stderr) {
				rech=RegExp('token')
				if (rech.test(stderr)){
					messageDiv.style.color = '#ff0000'
					messageDiv.innerHTML = 'ERREUR :<br />Blocs non connectés<button type="button" class="close" data-dismiss="modal" aria-label="Close">&#215;</button>'
				} else {
					messageDiv.style.color = '#ff0000'
					messageDiv.innerHTML = err.toString()+'<button type="button" class="close" data-dismiss="modal" aria-label="Close">&#215;</button>'
				}
				return
			}
			messageDiv.style.color = '#009000'
			messageDiv.innerHTML = 'Vérification : OK <button type="button" class="close" data-dismiss="modal" aria-label="Close">&#215;</button>'
		})
		localStorage.setItem("verif",true)
	}
	document.getElementById('btn_flash').onclick = function(event) {
		var verif = localStorage.getItem("verif")
		var data = $('#pre_previewArduino').text()
		var carte = profile.defaultBoard['build']
		var prog = profile.defaultBoard['prog']
		var cmd_verify = 'cli compile --fqbn ' + prog + ':' + carte + ' .\\sketchbook'
		var com = portserie.value
		var cmd_flash = 'cli upload -p ' + com + ' --fqbn ' + prog + ':' + carte + ' .\\sketchbook'
		if (com=="com"){
			messageDiv.style.color = '#000000'
			messageDiv.innerHTML = 'Sélectionner un port !!! <button type="button" class="close" data-dismiss="modal" aria-label="Close">&#215;</button>'
			return
		}
		if (verif=="false") {
			messageDiv.style.color = '#000000'
			messageDiv.innerHTML = 'Vérification <i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>'
			fs.writeFileSync(file_ino, data)
			execSync(cmd_verify , {cwd: './compilation'})
		}
		messageDiv.style.color = '#000000'
		messageDiv.innerHTML = 'Téléversement <i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>'
		exec(cmd_flash , {cwd: './compilation'} , function(err, stdout, stderr){
			if (err) {
				messageDiv.style.color = '#ff0000'
				messageDiv.innerHTML = err.toString()+'<button type="button" class="close" data-dismiss="modal" aria-label="Close">&#215;</button>'
				clear_sketchbook()
				return
			}
			messageDiv.style.color = '#009000'
			messageDiv.innerHTML = 'Téléversement : OK <button type="button" class="close" data-dismiss="modal" aria-label="Close">&#215;</button>'
			clear_sketchbook()
		})
	}
	document.getElementById('btn_saveino').onclick = function(event) {
		ipcRenderer.send('save-ino')
	}
	ipcRenderer.on('saved-ino', function(event, path){
		var code = $('#pre_previewArduino').text()
		fs.writeFile(path, code, function(err){
			if (err) return console.log(err)
		})
	})
	document.getElementById('btn_saveXML').onclick = function(event) {
		ipcRenderer.send('save-bloc')
	}
	ipcRenderer.on('saved-bloc', function(event, path){
		var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace)
		var toolbox = localStorage.getItem("toolbox")
		if (!toolbox) {
			toolbox = $("#toolboxes").val()
		}
		if (toolbox) {
			var newel = document.createElement("toolbox")
			newel.appendChild(document.createTextNode(toolbox))
			xml.insertBefore(newel, xml.childNodes[0])
		}
		var toolboxids = localStorage.getItem("toolboxids")
		if (toolboxids === undefined || toolboxids === "") {
			if ($('#defaultCategories').length) {
				toolboxids = $('#defaultCategories').html()
			}
		}
		var code = Blockly.Xml.domToPrettyText(xml)
		fs.writeFile(path, code, function(err){
			if (err) return console.log(err)
		})
	})
	ipcRenderer.on('information', function(event, text) {
		$("#versionModal").modal("show")
		var container = document.getElementById('messages')
		var message = document.createElement('div')
		message.innerHTML = text
		container.appendChild(message)
	})
})