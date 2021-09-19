var { ipcRenderer } = require("electron")
var input = document.getElementById("var_name")

input.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) document.getElementById("btn_variable").click()
})
document.getElementById('btn_quit').onclick = function() {
	ipcRenderer.send("closeDialog", "")
	close()
}
document.getElementById('btn_variable').onclick = function() {
	ipcRenderer.send("closeDialog", input.value)
	close()
}
window.onload=function() {
	input.focus()
	var options = ipcRenderer.sendSync("openDialog", "")
	var params = JSON.parse(options)
	document.getElementById("title").innerHTML = params.label
	input.value = params.value
	document.getElementById("btn_variable").innerText = params.ok 
}