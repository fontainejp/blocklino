var {electron, ipcMain, app, BrowserWindow, globalShortcut, dialog} = require('electron')
var { autoUpdater } = require("electron-updater")
var path = require('path')
var mainWindow, termWindow, promptWindow, promptOptions, promptAnswer
autoUpdater.autoDownload = false
autoUpdater.logger = null
function createWindow() {
	if (process.platform == 'win32' && process.argv.length >= 2) {
		var file = process.argv[1]
		if (file.endsWith("bloc")||file.endsWith("ino")||file.endsWith("py")) {
			mainWindow = new BrowserWindow({width: 1000, height: 625, icon: '../../www/media/icon.png', frame: false, movable: true})
			mainWindow.loadURL(path.join(__dirname, '../../www/index.html?url='+file))
		}
        if (file.endsWith("www")||file.endsWith("html")) {
			mainWindow = new BrowserWindow({width: 1000, height: 625, frame: false, movable: true})
			mainWindow.loadURL(path.join(__dirname, '../../www/ffau.html?url='+file))
		}
        if (file.endsWith("ttl")) {
			mainWindow = new BrowserWindow({width: 1310, height: 691, frame: false, movable: true, resizable: false})
			mainWindow.loadURL(path.join(__dirname, '../../www/turtle.html?url='+file))
		}
	} else {
		mainWindow = new BrowserWindow( {webPreferences: {
      sandbox: false
    },width: 1000, height: 625, icon: '../../www/media/icon.png', frame: false, movable: true})
		mainWindow.loadURL(path.join(__dirname, '../../www/index.html'))
	}
	mainWindow.setMenu(null)
	mainWindow.on('closed', function () {
		mainWindow = null
	})
}
function createTerm() {
	termWindow = new BrowserWindow({width: 640, height: 560, 'parent': mainWindow, resizable: false, movable: true, frame: false, modal: true}) 
	termWindow.loadURL(path.join(__dirname, "../../www/term.html"))
	termWindow.setMenu(null)
	termWindow.on('closed', function () { 
		termWindow = null 
	})
}
function createRepl() {
	termWindow = new BrowserWindow({width: 640, height: 515, 'parent': mainWindow, resizable: false, movable: true, frame: false, modal: true}) 
	termWindow.loadURL(path.join(__dirname, "../../www/repl.html"))
	termWindow.setMenu(null)
	termWindow.on('closed', function () { 
		termWindow = null 
	})
}
function createfactory() {
	factoryWindow = new BrowserWindow({width: 1000, height: 625, 'parent': mainWindow, resizable: true, movable: true, frame: false})
	factoryWindow.loadURL(path.join(__dirname, "../../www/factory.html"))
	factoryWindow.setMenu(null)
	factoryWindow.on('closed', function () { 
		factoryWindow = null 
	})
}
function promptModal(options, callback) {
	promptOptions = options
	promptWindow = new BrowserWindow({width:360, height: 135, 'parent': mainWindow, resizable: false, movable: true, frame: false, modal: true})
	promptWindow.loadURL(path.join(__dirname, "../../www/modalVar.html"))
	promptWindow.on('closed', function () { 
		promptWindow = null 
		callback(promptAnswer)
	})
}
function Modalprompt(options, callback) {
	promptOptions = options
	promptWindow = new BrowserWindow({width:360, height: 135, 'parent': mainWindow, resizable: false, movable: true, frame: false, modal: true})
	promptWindow.loadURL(path.join(__dirname, "../../www/modalVar.html"))
	promptWindow.on('closed', function () { 
		promptWindow = null 
		callback(promptAnswer)
	})
}
function open_console(mainWindow = BrowserWindow.getFocusedWindow()) {
	if (mainWindow) mainWindow.webContents.toggleDevTools()
}
function refresh(mainWindow = BrowserWindow.getFocusedWindow()) {
	mainWindow.webContents.reloadIgnoringCache()
}
app.on('ready',  function() {
	createWindow()
	globalShortcut.register('F8', open_console)
	globalShortcut.register('F5', refresh)
})
app.on('activate', function() {
	if (mainWindow === null) createWindow()
})
app.on('window-all-closed', function() {
	globalShortcut.unregisterAll()
	if (mainWindow) {
		mainWindow.webContents.executeJavaScript('localStorage.setItem("loadOnceBlocks", "")')
	}
	if (process.platform !== 'darwin') app.quit()
})
ipcMain.on("version", function() {
	autoUpdater.checkForUpdates()  
})
ipcMain.on("prompt", function() {
	createTerm()  
})
ipcMain.on("repl", function() {
	createRepl()  
})
ipcMain.on("factory", function() {
	createfactory()       
})
ipcMain.on("view", function(event, file) {
	createViewer(file)
})
ipcMain.on("appendBlock", function(event, data1, data2, data3) {
    mainWindow.webContents.send('BlockAppended', data1, data2, data3)
})
ipcMain.on("reload", function(event) {
	mainWindow.loadURL(path.join(__dirname, '../../www/index.html'))
})
ipcMain.on("openDialog", function(event, data) {
    event.returnValue = JSON.stringify(promptOptions, null, '')
})
ipcMain.on("closeDialog", function(event, data) {
	promptAnswer = data
})
ipcMain.on("modalVar", function(event, arg) {
	promptModal(
		{"label": arg, "value": "", "ok": "OK"}, 
	    function(data) {
	       event.returnValue = data
        }
	)       
})
ipcMain.on('save-bin', function(event) {
	dialog.showSaveDialog(mainWindow,{
		title: 'Exporter les binaires',
		defaultPath: 'Programme.hex',
		filters: [{ name: 'Binaires', extensions: ['hex']}]
	},
	function(filename){
		event.sender.send('saved-bin', filename)
	})
})
ipcMain.on('save-png', function(event) {
	dialog.showSaveDialog(mainWindow,{
		title: 'Enregistrer au format .PNG',
		defaultPath: 'Capture',
		filters: [{ name: 'Images', extensions: ['png'] }]
	},
	function(filename){
		event.sender.send('saved-png', filename)
	})
})
ipcMain.on('save-png-factory', function(event) {
	dialog.showSaveDialog(factoryWindow,{
		title: 'Enregistrer au format .PNG',
		defaultPath: 'Capture',
		filters: [{ name: 'Images', extensions: ['png'] }]
	},
	function(filename){
		event.sender.send('saved-png-factory', filename)
	})
})
ipcMain.on('save-ino', function(event) {
	dialog.showSaveDialog(mainWindow,{
		title: 'Enregistrer au format .INO',
		defaultPath: 'Programme',
		filters: [{ name: 'Arduino', extensions: ['ino'] }]
	},
	function(filename){
		event.sender.send('saved-ino', filename)
	})
})
ipcMain.on('save-py', function(event) {
	dialog.showSaveDialog(mainWindow,{
		title: 'Enregistrer au format .PY',
		defaultPath: 'Programme',
		filters: [{ name: 'Python', extensions: ['py'] }]
	},
	function(filename){
		event.sender.send('saved-py', filename)
	})
})
ipcMain.on('save-bloc', function(event) {
	dialog.showSaveDialog(mainWindow,{
		title: 'Enregistrer au format .BLOC',
		defaultPath: 'Programme',
		filters: [{ name: 'Blocklino', extensions: ['bloc'] }]
	},
	function(filename){
		event.sender.send('saved-bloc', filename)
	})
})
ipcMain.on('save-bf', function(event) {
	dialog.showSaveDialog(factoryWindow,{
		title: 'Enregistrer au format .bf',
		defaultPath: 'Bloc.bf',
		filters: [{ name: 'Blockly-Factory', extensions: ['bf'] }]
	},
	function(filename){
		event.sender.send('saved-bf', filename)
	})
})
ipcMain.on('save-csv', function(event) {
	dialog.showSaveDialog(mainWindow,{
		title: 'Exporter les données au format CSV',
		defaultPath: 'Programme',
		filters: [{ name: 'donnees', extensions: ['csv'] }]
	},
	function(filename){
		event.sender.send('saved-csv', filename)
	})
})
ipcMain.on('close', function(event) {
	dialog.showMessageBox(mainWindow,{
		type: 'none',
		title: 'Quitter',
		message: 'Etes-vous certain de vouloir quitter ce programme ?',
		buttons: ['oui', 'non'],
		cancelId: 1,
		noLink: true
	},
	function(buttonIndex)  {
		event.sender.send('closed', buttonIndex)
	})
})
ipcMain.on('new', function(event) {
	dialog.showMessageBox(mainWindow,{
		type: 'none',
		title: 'Nouveau',
		message: 'Etes-vous certain de vouloir quitter ce programme ?',
		buttons: ['oui', 'non'],
		cancelId: 1,
		noLink: true
	},
	function(buttonIndex)  {
		event.sender.send('newed', buttonIndex)
	})
})
ipcMain.on('addMedias', function(event) {
	dialog.showOpenDialog(htmlWindow,{
		title: 'Ajouter des images/audios/vidéos',
		buttonLabel: "Ajouter",
		filters: [{ name: 'Médias', extensions: ['bmp', 'jpeg', 'jpg', 'png', 'gif', 'mp3', 'mp4', 'avi']}],
		properties: ['openFile','multiSelections']
	},
	function(filename){
		event.sender.send('addedMedias', filename)
	})
})
ipcMain.on('addImg', function(event) {
	dialog.showOpenDialog(factoryWindow,{
		title: 'Ajouter des images',
		buttonLabel: "Ajouter",
		filters: [{ name: 'Images', extensions: ['bmp', 'jpg', 'png', 'gif']}],
		properties: ['openFile','multiSelections']
	},
	function(filename){
		event.sender.send('added-img', filename)
	})
})
ipcMain.on('addLIB', function(event) {
	dialog.showOpenDialog(mainWindow,{
		title: 'Ajouter des  bibliothèques',
		buttonLabel: "Ajouter",
		filters: [{ name: 'Archives', extensions: ['zip']}],
		properties: ['openFile', 'multiSelections']
	},
	function(filename){
		event.sender.send('addedLIB', filename)
	})
})
ipcMain.on('openBF', function(event) {
	dialog.showOpenDialog(factoryWindow,{
		title: 'Ouvrir',
		filters: [{ name: 'Blockly-Factory', extensions: ['bf'] }]
	},
	function(filename){
		event.sender.send('openedBF', filename)
	})
})
ipcMain.on('export-js', function(event) {
	dialog.showSaveDialog(factoryWindow,{
		title: 'Enregistrer au format .JS',
		defaultPath: 'blocks',
		filters: [{ name: 'Script', extensions: ['js'] }]
	},
	function(filename){
		event.sender.send('saved-js', filename)
	})
})
autoUpdater.on('error', function(error) {
	dialog.showErrorBox('Error: ', error == null ? "unknown" : (error.stack || error).toString())
})
autoUpdater.on('update-available', function() {
	dialog.showMessageBox(mainWindow,{
		type: 'none',
		title: 'Mise à jour',
		message: "Une nouvelle version est disponible, voulez-vous la télécharger et l'installer maintenant ?",
		buttons: ['oui', 'non'],
		cancelId: 1,
		noLink: true
	},
	function(buttonIndex)  {
		if (buttonIndex === 0) {
			autoUpdater.downloadUpdate()
		}
		else {
			return
		}
	})
})
autoUpdater.on('update-not-available', function() {
	dialog.showMessageBox(mainWindow,{
		title: 'Mise à jour',
		message: 'Votre version est à jour.'
	})
})
autoUpdater.on('update-downloaded', function() {
	dialog.showMessageBox(mainWindow,{
		title: 'Mise à jour',
		message: "Téléchargement terminé, l'application va s'installer puis redémarrer..."
	}, function() {
		setImmediate(function(){
			autoUpdater.quitAndInstall()
		})
	})
})
module.exports.open_console = open_console
module.exports.refresh = refresh