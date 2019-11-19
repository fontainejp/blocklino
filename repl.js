var remote = require('electron').remote 
var serialPort = require('serialport')
var Readline = serialPort.parsers.Readline
var com = localStorage.getItem("com")
var sp = new serialPort(com, {baudRate: 115200})
var parser = sp.pipe(new Readline({ delimiter: '\r\n' }))
var inne = document.getElementById('schbox')

parser.on('data', function addText(event) {
	var moniteur = document.getElementById('fenetre_repl')
    moniteur.value += "\n"+event
	moniteur.scrollTop = moniteur.scrollHeight
	moniteur.animate({scrollTop: moniteur.scrollHeight})
})
function writeonSer(data){
    sp.write( data, function(err) {
        if (err) {
            return console.log(err.message)
        }
    })
}
inne.addEventListener("keyup", function(e) {
    if (!e) e = window.event
    var keyCode = e.keyCode || e.which
    if (keyCode == '13'){
        document.getElementById("btn_envoi").click()
        return false
    }
})
document.getElementById('btn_envoi').onclick = function() {
	writeonSer(inne.value+"\r\n")
	inne.value = ""
}
document.getElementById('btn_stop').onclick = function() {
	writeonSer('\x03')
}
document.getElementById('btn_quit').onclick = function() {
	var window = remote.getCurrentWindow() 
	window.close()
}