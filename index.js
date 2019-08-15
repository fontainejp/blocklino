var { ipcRenderer, shell } = require("electron")
var { exec } = require('child_process')
var sp = require('serialport')
var fs = require('fs')
var appVersion = window.require('electron').remote.app.getVersion()

window.addEventListener('load', function load(event) {
	function uploadOK(){
		messageDiv.style.color = '#009000'
		messageDiv.innerHTML = Blockly.Msg.upload + ': OK' + quitDiv
	}
	var quitDiv = '<button type="button" class="close" data-dismiss="modal" aria-label="Close">&#215;</button>'
	var messageDiv = document.getElementById('messageDIV')
	var checkBox = document.getElementById("verifyUpdate")
	var portserie = document.getElementById('portserie')
	localStorage.setItem("verif",false)
	$('#btn_forum').on('click', function(){
		shell.openExternal('http://blockly.technologiescollege.fr/forum/')
	})
	$('#btn_site').on('click', function(){
		shell.openExternal('http://lesormeaux.net/blocklino/start.html')
	})
	$('#btn_contact').on('click', function(){
		shell.openExternal('mailto:jean-philippe.fontaine@ac-rouen.fr')
	})
	$.ajax({
	    cache: false,
	    url: "../config.json",
	    dataType: "json",
	    success : function(data) {
			$.each(data, function(i, update){
				if (update=="true") {
					$('#verifyUpdate').prop('checked', true)
					checkBox.dispatchEvent(new Event('change'))
					ipcRenderer.send("version", "")
				} else {
					$('#verifyUpdate').prop('checked', false)
					checkBox.dispatchEvent(new Event('change'))
				}
			})
		}
	})
	checkBox.addEventListener('change', function(event){
		if (event.target.checked) {
			fs.writeFile('config.json', '{ "update": "true" }', function(err){
				if (err) return console.log(err)
			})
		} else {
			fs.writeFile('config.json', '{ "update": "false" }', function(err){
				if (err) return console.log(err)
			})
		}
	})
	sp.list(function(err,ports){
		var opt = document.createElement('option')
		opt.value = "com"
		opt.text = Blockly.Msg.com1
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
	document.getElementById('versionapp').textContent = " BLOCKLINO v" + appVersion
	document.getElementById('btn_version').onclick = function(event){
		$('#aboutModal').modal('hide')
		ipcRenderer.send("version", "")
	}
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
	document.getElementById('btn_term').onclick = function(event){
		if (portserie.value=="com"){
			$("#message").modal("show")
			messageDiv.style.color = '#000000'
			messageDiv.innerHTML = Blockly.Msg.com2 + quitDiv
			return
		}
		if (localStorage.getItem("prog") == "python") { ipcRenderer.send("repl", "") } else { ipcRenderer.send("prompt", "") }
	}
	document.getElementById('btn_factory').onclick = function(event){
		ipcRenderer.send("factory", "")	
	}
	document.getElementById('btn_verify').onclick = function(event){
		var data = $('#pre_previewArduino').text()
		var carte = localStorage.getItem('card')
		var prog = localStorage.getItem('prog')
		var com = portserie.value
		messageDiv.style.color = '#000000'
		messageDiv.innerHTML = Blockly.Msg.check + '<i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>'
		if (prog == "python") {
			fs.writeFile('./compilation/python/py/sketch.py', data, function(err){
				if (err) return console.log(err)
			})
			exec('python -m pyflakes ./py/sketch.py', {cwd:"./compilation/python"}, function(err, stdout, stderr){
				if (stderr) {
					rech=RegExp('token')
					if (rech.test(stderr)){
						messageDiv.style.color = '#ff0000'
						messageDiv.innerHTML = Blockly.Msg.error + quitDiv
					} else {
						messageDiv.style.color = '#ff0000'
						messageDiv.innerHTML = err.toString() + quitDiv
					}
					return
				}
				messageDiv.style.color = '#009000'
				messageDiv.innerHTML = Blockly.Msg.check + ': OK' + quitDiv
			})
		} else {
			fs.writeFile('./compilation/arduino/ino/sketch.ino', data, function(err){
				if (err) return console.log(err)
			})
			exec('verify.bat ' + carte, {cwd:'./compilation/arduino'}, function(err, stdout, stderr){
				if (stderr) {
					rech=RegExp('token')
					if (rech.test(stderr)){
						messageDiv.style.color = '#ff0000'
						messageDiv.innerHTML = Blockly.Msg.error + quitDiv
					} else {
						messageDiv.style.color = '#ff0000'
						messageDiv.innerHTML = err.toString() + quitDiv
					}
					return
				}
				messageDiv.style.color = '#009000'
				messageDiv.innerHTML = Blockly.Msg.check + ': OK' + quitDiv
			})
		}
		localStorage.setItem("verif",true)
	}
	document.getElementById('btn_flash').onclick = function(event){
		var data = $('#pre_previewArduino').text()
		var carte = localStorage.getItem('card')
		var prog = profile[carte].prog
		var speed = profile[carte].speed
		var cpu = profile[carte].cpu
		var com = portserie.value 
		if ( com == "com" ){
			messageDiv.style.color = '#000000'
			messageDiv.innerHTML = Blockly.Msg.com2 + quitDiv
			return
		}
		if ( localStorage.getItem('verif') == "false" ){
			messageDiv.style.color = '#000000'
			messageDiv.innerHTML = Blockly.Msg.verif + quitDiv
			return
		}
		messageDiv.style.color = '#000000'
		messageDiv.innerHTML = Blockly.Msg.upload + '<i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>'
		if ( prog == "python" ) {
			if ( cpu == "cortexM0" ) {
				var cheminFirmware = "./compilation/python/firmware.hex"
				var fullHexStr = ""
				exec('wmic logicaldisk get volumename', function(err, stdout){
					if (err) return console.log(err)
					localStorage.setItem("volumename", stdout.split('\r\r\n').map(value => value.trim()))
				})
				exec('wmic logicaldisk get name', function(err, stdout){
					if (err) return console.log(err)
					localStorage.setItem("name", stdout.split('\r\r\n').map(value => value.trim()))
				})
				var volume = localStorage.getItem("volumename")
				var drive = localStorage.getItem("name")
				var volumeN = volume.split(',')
				var driveN = drive.split(',')
				var count = volumeN.length
				var disk = ""
				for (var i = 0 ; i < count ; i++) {
					if (volumeN[i]=="MICROBIT") disk = driveN[i]
				}
				if (disk!="") {
					fs.readFile(cheminFirmware, function(err, firmware){
						firmware = String(firmware)
						fullHexStr = upyhex.injectPyStrIntoIntelHex(firmware, data)
						fs.writeFile(disk + '\sketch.hex', fullHexStr, function(err){
							if (err) {
								messageDiv.style.color = '#ff0000'
								messageDiv.innerHTML = err.toString() + quitDiv
							}
						})
					})
					setTimeout(uploadOK, 7000)
				} else {
					messageDiv.style.color = '#000000'
					messageDiv.innerHTML = 'Connecter la carte microBit !' + quitDiv
				}
			} else {
				exec( 'python -m ampy -p ' + com + ' -b 115200 -d 1 run --no-output ./py/sketch.py', {cwd: "./compilation/python"} , function(err, stdout, stderr){
					if (err) {
						messageDiv.style.color = '#ff0000'
						messageDiv.innerHTML = err.toString() + quitDiv
						return
					}
					uploadOK()
				})
			}
		} else {
			exec('flash.bat ' + cpu + ' ' + prog + ' '+ com + ' ' + speed, {cwd: './compilation/arduino'} , function(err, stdout, stderr){
				if (err) {
					messageDiv.style.color = '#ff0000'
					messageDiv.innerHTML = err.toString() + quitDiv
					return
				}
				uploadOK()
			})
		}
		localStorage.setItem("verif",false)
	}
	document.getElementById('btn_saveino').onclick = function(event){
		if (localStorage.getItem("prog") == "python") { ipcRenderer.send('save-py') } else { ipcRenderer.send('save-ino') }
	}
	document.getElementById('btn_saveXML').onclick = function(event){
		ipcRenderer.send('save-bloc')
	}
	ipcRenderer.on('saved-ino', function(event, path){
		var code = $('#pre_previewArduino').text()
		if (path === null) {
			return
		} else {
			fs.writeFile(path, code, function(err){
				if (err) return console.log(err)
			})
		}
	})
	ipcRenderer.on('saved-py', function(event, path){
		var code = $('#pre_previewArduino').text()
		if (path === null) {
			return
		} else {
			fs.writeFile(path, code, function(err){
				if (err) return console.log(err)
			})
		}
	})
	ipcRenderer.on('saved-bloc', function(event, path){
		if (path === null) {
			return
		} else {
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
		}
	})
})