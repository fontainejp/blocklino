var remote = require('electron').remote
var window = remote.getCurrentWindow()
var sp = require('serialport')
var tableify = require('tableify')

document.getElementById('btn_quit').onclick = function() {
	window.close()
}
sp.list(function(err,ports){
	var messageUSB = document.getElementById('usb')
	if (ports.length === 0) {
		messageUSB.innerHTML = "Aucun port n'est disponible"
	} else {
	tableHTML = tableify(ports)
	messageUSB.innerHTML = tableHTML
	}
})