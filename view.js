var remote = require('electron').remote 
var fs = require("fs")
var path = require("path")
var ifram = document.getElementById('content')
var webview = (ifram.contentWindow || ifram.contentDocument)

function viewHome(){
	var fichier = []
	var dossier = []
	var files = fs.readdirSync(path.join(__dirname, "../../compilation/html"))
	files.forEach(function(file) {
		if (path.extname(file) == ".html") {
			fichier.push(file)
		} else {
			dossier.push(file)
		}
	})
	var iconeF = '<span class="fa-stack fa-lg btn_color"><i class="fa fa-square-o fa-stack-2x"></i><i class="fa fa-globe fa-stack-1x"></i></span>'
	var iconeD = '<i class="fa fa-folder-o fa-2x fa-fw"></i>'
	for (var i=0; i<dossier.length; i++){
		webview.document.getElementById("listing").innerHTML += '<div class="col-md-4 btn_color">'+iconeD+' '+dossier[i]+'</div>'
	}
	for (var i=0; i<fichier.length; i++){
		webview.document.getElementById("listing").innerHTML += '<div class="col-md-4">'+iconeF+'<a href="../compilation/html/'+fichier[i]+'">'+fichier[i]+'</a></div>'
	}
}
function viewMedia(){
	var files = fs.readdirSync(path.join(__dirname, "../../compilation/html/media"))
	var iconeIMG = '<i class="fa fa-image fa-2x btn_color"></i>'
	var iconeMP3 = '<i class="fa fa-music fa-2x btn_color"></i>'
	var iconeMP4 = '<i class="fa fa-video-camera fa-2x btn_color"></i>'
	files.forEach(function(file) {
		switch(path.extname(file)) {
			case ".mp3":
				webview.document.getElementById("listing").innerHTML += '<div class="col-md-4">'+iconeMP3+' '+file+'</div>'
				break
			case ".mp4":
				webview.document.getElementById("listing").innerHTML += '<div class="col-md-4">'+iconeMP4+' '+file+'</div>'
				break
			case ".avi":
				webview.document.getElementById("listing").innerHTML += '<div class="col-md-4">'+iconeMP4+' '+file+'</div>'
				break
			default:
				webview.document.getElementById("listing").innerHTML += '<div class="col-md-4">'+iconeIMG+' '+file+'</div>'
		}
	})
}

window.addEventListener('load', function load(event){
	var electron = remote.getCurrentWindow()
	if(!electron.isMaximized())electron.maximize()
	var urlParams = new URLSearchParams(window.location.search)
	if (urlParams.get('url')=="_html_") {
		viewHome()
	} else if (urlParams.get('url')=="_media_"){
		viewMedia()
	} else {
		$.get(path.join(__dirname, "../../compilation/html", urlParams.get('url')+".html"), function(data) { 
			if (data) ifram.srcdoc = data
		}, 'text')
	}
	$('#btn_quit').on('click', function(){
		electron.close()
	})
	$('#btn_back').on('click', function(){
		webview.history.back()
	})
	$('#btn_home').on('click', function(){
		electron.webContents.loadURL(path.join(__dirname, "../../www/view.html?url=_html_"))
	})
})