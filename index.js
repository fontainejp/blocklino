var { ipcRenderer, shell, clipboard } = require("electron")
var remote = require('electron').remote
var { exec } = require('child_process')
var sp = require('serialport')
var fs = require('fs')
var tableify = require('tableify')
var appVersion = window.require('electron').remote.app.getVersion()
var chemin = process.resourcesPath
var checkBox = document.getElementById('verifyUpdate')
var portserie = document.getElementById('portserie')
var messageDiv = document.getElementById('messageDIV')
var detailDiv = document.getElementById('detailDIV')
var btn_detail = document.getElementById('btn_detail')
var btn_close_message = document.getElementById('btn_close_message')

window.addEventListener('load', function load(event){
	var window = remote.getCurrentWindow()
	if(!window.isMaximized())window.maximize()
	function itsOK(value){
		messageDiv.style.color = '#009000'
		if (value) {
			messageDiv.innerHTML = Blockly.Msg.upload + ': OK' 
			btn_close_message.style.display = "inline"
			if (localStorage.getItem('prog') != "python") btn_detail.style.display = "block"
		} else {
			messageDiv.innerHTML = Blockly.Msg.check + ': OK'
			btn_close_message.style.display = "inline"
			if (localStorage.getItem('prog') != "python") btn_detail.style.display = "block"
		}	
	}
	localStorage.setItem("verif",false)
	document.getElementById('span_title2').textContent = appVersion
	document.getElementById('span_version2').textContent = appVersion
	$.ajax({
	    cache: false,
	    url: chemin + "/../config.json",
	    dataType: "json",
	    success : function(data) {
			$.each(data, function(i, update){
				if (update=="true") {
					$('#verifyUpdate').prop('checked', true)
					checkBox.dispatchEvent(new Event('change'))
					ipcRenderer.send("version")
				} else {
					$('#verifyUpdate').prop('checked', false)
					checkBox.dispatchEvent(new Event('change'))
				}
			})
		}
	})
	checkBox.addEventListener('change', function(event){
		if (event.target.checked) {
			fs.writeFile(chemin+'/../config.json', '{ "update": "true" }', function(err){
				if (err) return console.log(err)
			})
		} else {
			fs.writeFile(chemin+'/../config.json', '{ "update": "false" }', function(err){
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
	sp.list(function(err,ports){
		var messageUSB = document.getElementById('usb')
		if (ports.length === 0) {
			messageUSB.innerHTML = "Aucun port n'est disponible"
		} else {
			tableHTML = tableify(ports)
			messageUSB.innerHTML = tableHTML
		}
	})
	$('#portserie').mouseover(function(){
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
	$('#btn_quit').on('click', function(){
		window.close()
	})
	$('#btn_max').on('click', function(){
		if(window.isMaximized()){
			window.unmaximize()
			document.getElementById('btn_max').innerHTML="<span class='fa fa-window-maximize fa-lg'></span>"
		} else {
			window.maximize()
			document.getElementById('btn_max').innerHTML="<span class='fa fa-window-restore fa-lg'></span>"
		}
	})
	$('#btn_min').on('click', function(){
		window.minimize()
	})
	$('#btn_forum').on('click', function(){
		shell.openExternal('http://blockly.technologiescollege.fr/forum/')
	})
	$('#btn_site').on('click', function(){
		shell.openExternal('http://fontainejp.github.io')
	})
	$('#btn_contact').on('click', function(){
		shell.openExternal('https://github.com/fontainejp/blocklino/issues/')
	})
	$('#btn_copy').on('click', function(){
		clipboard.writeText($('#pre_previewArduino').text())
	})
	$('#btn_bin').on('click', function(){
		if (localStorage.getItem('verif') == "false"){
			$("#message").modal("show")
			messageDiv.style.color = '#000000'
			messageDiv.innerHTML = Blockly.Msg.verif
			btn_close_message.style.display = "inline"
			return
		}
		localStorage.setItem("verif",false)
		ipcRenderer.send('save-bin') 
	})
	$('#btn_version').on('click', function(){
		$('#aboutModal').modal('hide')
		ipcRenderer.send("version")
	})
	$('#btn_term').on('click', function(){
		if (portserie.value=="com"){
			$("#message").modal("show")
			messageDiv.style.color = '#000000'
			messageDiv.innerHTML = Blockly.Msg.com2 
			btn_close_message.style.display = "inline"
			return
		}
		if (localStorage.getItem("prog") == "python") { ipcRenderer.send("repl") } else { ipcRenderer.send("prompt") }
	})
	$('#btn_html').on('click', function(){
		ipcRenderer.send("html")	
	})
	$('#btn_factory').on('click', function(){
		ipcRenderer.send("factory")
	})
	$('#btn_games').on('click', function(){
		ipcRenderer.send("games")
	})
	$('#btn_verify').on('click', function(){
		if (localStorage.getItem('content') == "off") {
			var data = editor.getValue()
		} else {
			var data = $('#pre_previewArduino').text()
		}
		var carte = localStorage.getItem('card')
		var cpu = profile[carte].cpu
		var prog = localStorage.getItem('prog')
		var com = portserie.value
		messageDiv.style.color = '#000000'
		messageDiv.innerHTML = Blockly.Msg.check + '<i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>'
		if (prog == "python") {
			fs.writeFile(chemin+'/../compilation/python/py/sketch.py', data, function(err){
				if (err) return console.log(err)
			})
			exec('python -m pyflakes ./py/sketch.py', {cwd: chemin+'/../compilation/python'}, function(err, stdout, stderr){
				if (stderr) {
					var erreur = stderr.toString().replace("Error: Command failed: python -m pyflakes","")
					var error = erreur.replace("./py/sketch.py","")
					messageDiv.style.color = '#ff0000'
					messageDiv.innerHTML = "ERREURS" + "<br>" + error 
					btn_close_message.style.display = "inline"
					return
				}
				itsOK(0)
			})
		} else {
			fs.writeFile(chemin+'/../compilation/arduino/ino/sketch.ino', data, function(err){
				if (err) return console.log(err)
			})
			if ( cpu == "cortexM0" ) {
				exec('verify_microbit.bat ' + carte, {cwd: chemin+'/../compilation/arduino'}, function(err, stdout, stderr){
					if (stderr) {
						fs.realpath(chemin+'/../compilation/arduino/ino/sketch.ino' , function(err, path){
							if (err) console.log(err)
							var erreur = stderr.toString().replace("exit status 1","")
							var error = erreur.split(path)
							messageDiv.style.color = '#ff0000'
							messageDiv.innerHTML = "ERREURS"
							error.forEach(function(e){
								messageDiv.innerHTML += e + "<br>"
							})
							btn_close_message.style.display = "inline"
						})
						return
					}
					localStorage.setItem('detail', stdout.toString())
					itsOK(0)
				})
			} else {
				exec('verify.bat ' + carte, {cwd: chemin+'/../compilation/arduino'}, function(err, stdout, stderr){
					if (stderr) {
						fs.realpath(chemin+'/../compilation/arduino/ino/sketch.ino' , function(err, path){
							if (err) return console.log(err)
							var erreur = stderr.toString().replace("exit status 1","")
							var error = erreur.replace(/error:/g,"").replace(/token/g,"")
							var errors = error.split(path)
							messageDiv.style.color = '#ff0000'
							messageDiv.innerHTML = "ERREURS"
							errors.forEach(function(e){
								messageDiv.innerHTML += e + "<br>"
							})
							btn_close_message.style.display = "inline"
						})
						return
					}
					localStorage.setItem('detail', stdout.toString())
					itsOK(0)
				})
			}
		}
		localStorage.setItem("verif",true)
	})
	$('#btn_flash').on('click', function(){
		if (localStorage.getItem('content') == "off") {
			var data = editor.getValue()
		} else {
			var data = $('#pre_previewArduino').text()
		}
		var carte = localStorage.getItem('card')
		var prog = profile[carte].prog
		var speed = profile[carte].speed
		var cpu = profile[carte].cpu
		var com = portserie.value 
		if ( com == "com" ){
			messageDiv.style.color = '#000000'
			messageDiv.innerHTML = Blockly.Msg.com2 
			btn_close_message.style.display = "inline"
			return
		}
		if ( localStorage.getItem('verif') == "false" ){
			messageDiv.style.color = '#000000'
			messageDiv.innerHTML = Blockly.Msg.verif 
			btn_close_message.style.display = "inline"
			return
		}
		messageDiv.style.color = '#000000'
		messageDiv.innerHTML = Blockly.Msg.upload + '<i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>'
		if ( prog == "python" ) {
			if ( cpu == "cortexM0" ) {
				var cheminFirmware = chemin+"/../compilation/python/firmware.hex"
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
						if (err) return console.log(err)
						firmware = String(firmware)
						fullHexStr = upyhex.injectPyStrIntoIntelHex(firmware, data)
						fs.writeFile(disk + '\sketch.hex', fullHexStr, function(err){
							if (err) {
								messageDiv.style.color = '#ff0000'
								messageDiv.innerHTML = err.toString()
								btn_close_message.style.display = "inline"
							}
						})
					})
					setTimeout(itsOK(1), 7000)
				} else {
					messageDiv.style.color = '#000000'
					messageDiv.innerHTML = 'Connecter la carte ou installer le pilote !' 
					btn_close_message.style.display = "inline"
				}
			} else {
				exec( 'python -m ampy -p ' + com + ' -b 115200 -d 1 run --no-output ./py/sketch.py', {cwd: chemin+'/../compilation/python'} , function(err, stdout, stderr){
					if (stderr) return console.log(stderr)
					if (err) {
						messageDiv.style.color = '#ff0000'
						messageDiv.innerHTML = err.toString() 
						btn_close_message.style.display = "inline"
						return
					}
					itsOK(1)
				})
			}
		} else {
			if ( cpu == "cortexM0" ) {
				exec('flash_microbit.bat ', {cwd: chemin+'/../compilation/arduino'} , function(err, stdout, stderr){
					if (stderr) console.log(stderr)
					localStorage.setItem('detail', stdout.toString())
					if (err) {
						messageDiv.style.color = '#ff0000'
						messageDiv.innerHTML = err.toString() 
						btn_close_message.style.display = "inline"
						return
					}
					itsOK(1)
				})
			} else {
				exec('flash.bat ' + cpu + ' ' + prog + ' '+ com + ' ' + speed, {cwd: chemin+'/../compilation/arduino'} , function(err, stdout, stderr){
					var erreur = stderr.toString().replace(/##################################################/g,"").replace(/|/g,"")
					var errors = erreur.split("avrdude:")
					localStorage.setItem('detail', errors)
					if (err) {
						messageDiv.style.color = '#ff0000'
						messageDiv.innerHTML = err.toString() + "<br> "
						btn_close_message.style.display = "inline"
						return
					}
					itsOK(1)
				})
			}
		}
		localStorage.setItem("verif",false)
	})
	$('#btn_detail').on('click', function(){
		detailDiv.innerHTML = localStorage.getItem('detail')
	})
	$('#btn_close_message').on('click', function(){
		detailDiv.innerHTML = ""
		localStorage.setItem('detail', "")
		btn_detail.style.display = "none"
		btn_close_message.style.display = "none"
		$('#message').modal('hide')
	})
	$('#btn_saveino').on('click', function(){
		if (localStorage.getItem("prog") == "python") { ipcRenderer.send('save-py') } else { ipcRenderer.send('save-ino') }
	})
	$('#btn_saveXML').on('click', function(){
		if (localStorage.getItem("content") == "on") {
			ipcRenderer.send('save-bloc') 
		} else {
			if (localStorage.getItem("prog") == "python") { ipcRenderer.send('save-py') } else { ipcRenderer.send('save-ino') }
		}
	})
	$('#btn_reset').on('click', function(){
		fs.stat(chemin+"/../compilation/arduino/ino/sketch.ino", function(err,stats){
			if (err) return console.log(err)
			fs.unlink(chemin+"/../compilation/arduino/ino/sketch.ino", function(err){
				if (err) return console.log(err)
			})
		})
		localStorage.clear()
		ipcRenderer.send("reload")
	})
	$('#btn_print').on("click", function(){
		ipcRenderer.send('save-png')
	})
	ipcRenderer.on('saved-ino', function(event, path){
		if (localStorage.getItem('content') == "off") {
			var code = editor.getValue()
		} else {
			var code = $('#pre_previewArduino').text()
		}
		if (path === null) {
			return
		} else {
			fs.writeFile(path, code, function(err){
				if (err) return console.log(err)
			})
			var file = path.split("\\");
			var id = file.length - 1 ;
			document.getElementById('span_file').textContent = " - " + file[id];
		}
	})
	ipcRenderer.on('saved-py', function(event, path){
		if (localStorage.getItem('content') == "off") {
			var code = editor.getValue()
		} else {
			var code = $('#pre_previewArduino').text()
		}
		if (path === null) {
			return
		} else {
			fs.writeFile(path, code, function(err){
				if (err) return console.log(err)
			})
			var file = path.split("\\")
			var id = file.length - 1 
			document.getElementById('span_file').textContent = " - " + file[id]
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
			var file = path.split("\\")
			var id = file.length - 1 
			document.getElementById('span_file').textContent = " - " + file[id]
		}
	})
	ipcRenderer.on('saved-bin', function(event, path){
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
			var res = path.split(".")
			fs.writeFile(res[0]+'.bloc', code, function(err){
				if (err) return console.log(err)
			})
			var file = path.split("\\")
			var id = file.length - 1 
			document.getElementById('span_file').textContent = " - " + file[id]
			fs.copyFile(chemin+'/../compilation/arduino/build/sketch.ino.with_bootloader.hex', res[0]+'_with_bootloader.hex', (err) => {if (err) throw err})
			fs.copyFile(chemin+'/../compilation/arduino/build/sketch.ino.hex', res[0]+'.hex', (err) => {if (err) throw err})
			fs.copyFile(chemin+'/../compilation/arduino/ino/sketch.ino', res[0]+'.ino', (err) => {if (err) throw err})
		}
	})
	ipcRenderer.on('saved-png', function(event, path){
		if (path === null) {
			return
		} else {
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
	ipcRenderer.on('BlockAppended', function(event, bloc, appendData, index){
		var cat = $("#toolbox").children("category")
		var newBlock = document.createElement("block")
		var attr = document.createAttribute("type")
		attr.value = bloc
		newBlock.setAttributeNode(attr)
		cat[index].appendChild(newBlock)
		var tool = localStorage.getItem("toolbox")
		var code = '<?xml version="1.0" encoding="utf-8" ?>\n<toolbox>'
		code += document.getElementById('toolbox').innerHTML
		code += "</toolbox>"
		fs.writeFile(chemin+"/../www/toolbox/"+tool+".xml", code, function(err){
			if (err) return console.log(err)
		})
		eval(appendData)
		BlocklyDuino.workspace.clear()
		var nBlock = BlocklyDuino.workspace.newBlock(bloc)
		nBlock.initSvg()
		nBlock.render()
		Blockly.getMainWorkspace().updateToolbox(BlocklyDuino.buildToolbox())
	})
})