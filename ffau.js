var { ipcRenderer } = require("electron")
var remote = require('electron').remote 
var fs = require("fs")
var jsftp = require("jsftp")
var ffau = new Ffau()

window.addEventListener('load', function load(event) {
	localStorage.setItem("contentHTML","on")
	$('#btn_search').addClass("hidden")
	var window = remote.getCurrentWindow()
	var messageDiv = document.getElementById('messageDIV')
	var quitDiv = '<button type="button" class="close" data-dismiss="modal" aria-label="Close">&#215;</button>'
	if(!window.isMaximized())window.maximize()
	ffau.renderBlockly(document.getElementById('blocklyDiv'),document.getElementById('toolbox'))
	ffau.addEvent()
	function ftp_ok() {
		$("#configHTMLModal").modal("hide")
	}
	function ftp_put() {
		messageDiv.style.color = '#009000'
		messageDiv.innerHTML = 'Téléchargement : OK ' + quitDiv
	}
	/*if (localStorage.getItem('theme')) {
		document.getElementById('theme_css_ffau').href = "css/ffau_" + localStorage.getItem('theme') + ".css"
	}
	if (localStorage.getItem('contentHTML')) {
		var data = '<!DOCTYPE HTML>\n<html lang="fr">\n  <head>\n    <meta charset="utf-8">\n    <link rel="stylesheet" href="css/bootstrap.min.3.3.6.css">\n    <link rel="stylesheet" href="css/fontawesome.css">\n  </head>\n  <body>\n'+document.getElementById('blockly_r').innerHTML+'  </body>\n</html>'
		if (localStorage.getItem('contentHTML')=="on") {
			if (localStorage.getItem('size')) {
				document.getElementById('content_code').style.fontSize = localStorage.getItem('size')
			}
			editor.setValue(data,1)
			$('a[href="#content_code"]').tab('show')
			$('#btn_print').addClass("hidden")
			$('#btn_search').removeClass("hidden")
			document.getElementById('blockly_r').style.borderLeft = "0px"
			localStorage.setItem('contentHTML', "off")
		}	
	} else {
		$('a[href="#blocklyDiv"]').tab('show')
		$('#btn_print').removeClass("hidden")
		$('#btn_search').addClass("hidden")
		document.getElementById('blockly_r').style.borderLeft = "gray 1px solid"
		localStorage.setItem("contentHTML","on")
	}
	var Ftp = new jsftp({	host: localStorage.getItem('host'), port: Number(localStorage.getItem('portFtp')), user: localStorage.getItem('id'), pass: localStorage.getItem('pwd')})
	$('#btn_valid_config_ffau').on('click', function(){
		localStorage.setItem('host',$('#inputHost').val())
		localStorage.setItem('portFtp',$('#inputPort').val())
		localStorage.setItem('id',$('#inputId').val())
		localStorage.setItem('pwd',$('#inputPwd').val())
		ftp_connect.innerHTML = 'accès au serveur <i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>'
		Ftp.auth(localStorage.getItem('id'), localStorage.getItem('pwd'), function (err) {
			if (err) {
				ftp_connect.innerHTML = '<i class="fa fa-chain-broken fa-1_5x" style="color: red"></i> déconnecté'
				return console.log(err)
			}
			ftp_connect.innerHTML = '<i class="fa fa-link fa-1_5x" style="color: green"></i> connecté<br>'+Ftp.features
			setTimeout(ftp_ok, 3000)
		})	
	})
	$('#btn_ftp').on('click', function(){
		$("#message").modal("show")
		messageDiv.style.color = '#000000'
		messageDiv.innerHTML = 'Téléchargement <i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>'
		var data = '<!DOCTYPE HTML>\n<html lang="fr">\n<head>\n<meta charset="utf-8">\n<title> ss </title>\n<link rel="stylesheet" href="css/bootstrap.min.3.3.6.css">\n<link rel="stylesheet" href="css/fontawesome.css">\n</head>\n<body>\n'+document.getElementById('blockly_r').innerHTML+'</body>\n</html>'
		fs.writeFile('./compilation/html/page.html', data, function(err){
			if (err) return console.log(err)
			Ftp.auth(localStorage.getItem('id'), localStorage.getItem('pwd'), function (err) {
				if (err) {
					messageDiv.style.color = '#ff0000'
					messageDiv.innerHTML = err.toString() + quitDiv
				}
				console.log(Ftp.features)
				messageDiv.style.color = '#000000'
				messageDiv.innerHTML = 'Connecté<br>Téléchargement <i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>'
				Ftp.put('./compilation/html/page.html', "page.html", function(err){
					if (err) return console.log(err)
					ftp_put()
				})
			})
		})
		
	})*/
	$('#btn_factory').on('click', function(){
		ipcRenderer.send("factory", "")
	})
	$('#btn_quit').on('click', function(){
		var window = remote.getCurrentWindow() 
		window.close()
	})
	$('#btn_max').on('click', function() {
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
		ffau.workspace_capture()
	})
	$('#btn_save').on('click', function(){
		if (localStorage.getItem('contentHTML')=="on") {
			ffau.downloadXML()
		} else {
			ffau.downloadHTML()
		}
	})
	$('#btn_new').on('click', function(){
		if (localStorage.getItem('contentHTML')=="on") {
			ffau.clearWorkspace()
		} else {
			editor.setValue('<!DOCTYPE HTML>\n<html lang="fr">\n  <head>\n    <meta charset="utf-8">\n    <link rel="stylesheet" href="css/bootstrap.min.3.3.6.css">\n    <link rel="stylesheet" href="css/fontawesome.css">\n  </head>\n  <body>\n\n  </body>\n</html>',1)
		}
	})
	$('#btn_search').on('click', function(){
		editor.execCommand('find')
	})
	$('#btn_open').on('click', function(){
		$('#loadText').click()
	})
	$('#loadText').on('change', function(){
		var input = document.getElementById('loadText')
		var fileReader = new FileReader()
		if (localStorage.getItem('contentHTML')=="on") {
			fileReader.onload = () => {
				ffau.setXML(fileReader.result)
				input.value = null
			}
		} else {
			fileReader.onload = () => {
				editor.setValue(fileReader.result,1)
				input.value = null
			}
		}
		fileReader.readAsText(input.files[0])
	})
	$('#lien1').on('click', function(){
		if (localStorage.getItem("contentHTML")=="on") {
			ffau.clearWorkspace()
			$.get("./examples/html/hello.www", function(data) { 
				if (data) {
					var xml = Blockly.Xml.textToDom(data);
					Blockly.Xml.domToWorkspace(xml,ffau.ffauWorkspace);
				}
			}, 'text')
		} else {
			$.get("./examples/html/hello.html", function(data) { 
				if (data) editor.setValue(data,1)
			}, 'text')
		}
	})
	$('#lien2').on('click', function(){
		if (localStorage.getItem("contentHTML")=="on") {
			ffau.clearWorkspace()
			$.get("./examples/html/simple.www", function(data) { 
				if (data) {
					var xml = Blockly.Xml.textToDom(data);
					Blockly.Xml.domToWorkspace(xml,ffau.ffauWorkspace);
				}
			}, 'text')
		} else {
			$.get("./examples/html/simple.html", function(data) { 
				if (data) editor.setValue(data,1)
			}, 'text')
		}
	})
	$('#lien3').on('click', function(){
		if (localStorage.getItem("contentHTML")=="on") {
			ffau.clearWorkspace()
			$.get("./examples/html/complexe.www", function(data) { 
				if (data) {
					var xml = Blockly.Xml.textToDom(data);
					Blockly.Xml.domToWorkspace(xml,ffau.ffauWorkspace);
				}
			}, 'text')
		} else {
			$.get("./examples/html/complexe.html", function(data) { 
				if (data) editor.setValue(data,1)
			}, 'text')
		}
	})
	$('#lien4').on('click', function(){
		if (localStorage.getItem("contentHTML")=="on") {
			ffau.clearWorkspace()
			$.get("./examples/html/bootstrap.www", function(data) { 
				if (data) {
					var xml = Blockly.Xml.textToDom(data);
					Blockly.Xml.domToWorkspace(xml,ffau.ffauWorkspace);
				}
			}, 'text')
		} else {
			$.get("./examples/html/bootstrap.html", function(data) { 
				if (data) editor.setValue(data,1)
			}, 'text')
		}
	})
	$('#codeORblock').on("change", function(){
		var data = '<!DOCTYPE HTML>\n<html lang="fr">\n  <head>\n    <meta charset="utf-8">\n    <link rel="stylesheet" href="css/bootstrap.min.3.3.6.css">\n    <link rel="stylesheet" href="css/fontawesome.css">\n  </head>\n  <body>\n'+document.getElementById('blockly_r').innerHTML+'  </body>\n</html>'
		if (localStorage.getItem('contentHTML')=="on") {
			if (localStorage.getItem('size')) {
				document.getElementById('content_code').style.fontSize = localStorage.getItem('size')
			}
			editor.setValue(data,1)
			$('a[href="#content_code"]').tab('show')
			$('#btn_print').addClass("hidden")
			$('#btn_search').removeClass("hidden")
			document.getElementById('blockly_r').style.borderLeft = "0px"
			localStorage.setItem('contentHTML', "off")
		} else {
			$('a[href="#blocklyDiv"]').tab('show')
			$('#btn_print').removeClass("hidden")
			$('#btn_search').addClass("hidden")
			document.getElementById('blockly_r').style.borderLeft = "gray 1px solid"
			localStorage.setItem('contentHTML', "on")
		}
	})
})