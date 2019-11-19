var remote = require('electron').remote 

window.addEventListener('load', function load(event) {
	var ffau = new Ffau()
	ffau.renderBlockly(document.getElementById('blocklyDiv'),document.getElementById('toolbox'))
	ffau.renderPreview(document.getElementById('blockly_r'))
	ffau.addEvent()
	$('#btn_quit').on('click', function() {
		var window = remote.getCurrentWindow() 
		window.close()
	})
	$('#btn_max').on('click', function() {
		var window = remote.getCurrentWindow()
		if(window.isMaximized()){
            window.unmaximize()
        }else{
            window.maximize()
        }
	})
	$('#btn_save').on('click', function(){
		ffau.updateSettings({auto_save: false})
		ffau.downloadXML()
	})
	$('#btn_new').on('click', function(){
		ffau.clearWorkspace()
	})
	$('#btn_open').on('click', function(){
		$('#loadText').click()
	})
	$('#loadText').on('change', function(){
		var input = document.getElementById('loadText')
		var fileReader = new FileReader()
		fileReader.onload = () => {
			ffau.setXML(fileReader.result);
			input.value = null
		}
		fileReader.readAsText(input.files[0])
	})
})