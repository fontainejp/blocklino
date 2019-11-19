var remote = require('electron').remote 
var { ipcRenderer } = require("electron")
var fs = require('fs')

window.addEventListener('load', function load(event) {
	document.getElementById('btn_quit').onclick = function() {
		var window = remote.getCurrentWindow() 
		window.close()
	}
	document.getElementById('btn_max').onclick = function() {
		var window = remote.getCurrentWindow()
		if(window.isMaximized()){
            window.unmaximize()
        }else{
            window.maximize()
        }
	}
	document.getElementById('btn_add').onclick = function(){
		var dataB = document.getElementById('languagePre').textContent
		var dataG = editor.getValue()
		fs.writeFileSync('./www/blocs&generateurs/factory/add.js', dataB + "\n" + dataG)
		localStorage.setItem("factoryBlock",blockType)
		ipcRenderer.send("addBlock", blockType)
		window.close()
	}
})