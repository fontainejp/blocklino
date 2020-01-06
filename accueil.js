var remote = require('electron').remote

window.addEventListener('load', function load(event) {
	var window = remote.getCurrentWindow() 
	document.getElementById('btn_quit').onclick = function() {
		window.close()
	}
})