const {electron, ipcMain, app, BrowserWindow, globalShortcut, dialog} = require('electron')
const { autoUpdater } = require("electron-updater")
const path = require('path')
let mainWindow
let termWindow
let factoryWindow
autoUpdater.autoDownload = false
autoUpdater.logger = null
function createWindow () {
	mainWindow = new BrowserWindow({width:1240,height:700,icon:'www/media/icon.png',frame:false,movable:true})
	if (process.platform == 'win32' && process.argv.length >= 2) {
		mainWindow.loadURL(path.join(__dirname, '../../www/index.html?url='+process.argv[1]))
	} else {
		mainWindow.loadURL(path.join(__dirname, '../../www/index.html'))
	}
	mainWindow.setMenu(null)
	mainWindow.on('closed', function () {
		mainWindow = null
	})
}
function createTerm() {
	termWindow = new BrowserWindow({width:640,height:560,'parent':mainWindow,resizable:false,movable:true,frame:false,modal:true}) 
	termWindow.loadURL(path.join(__dirname, "../../www/term.html"))
	termWindow.setMenu(null)
	termWindow.on('closed', function () { 
		termWindow = null 
	})
}
function createfactory() {
	factoryWindow = new BrowserWindow({width:1066,height:640,'parent':mainWindow,resizable:true,movable:true,frame:false})
	factoryWindow.loadURL(path.join(__dirname, "../../www/factory.html"))
	factoryWindow.setMenu(null)
	factoryWindow.on('closed', function () { 
		factoryWindow = null 
	})
}
function open_console(mainWindow = BrowserWindow.getFocusedWindow()) {
	if (mainWindow) {
		mainWindow.webContents.toggleDevTools()
	}
}
function refresh(mainWindow = BrowserWindow.getFocusedWindow()) {
	if (mainWindow) {
		mainWindow.webContents.reloadIgnoringCache()
	}
}
app.on('ready',  function () {
	createWindow()
	globalShortcut.register('CmdOrCtrl+I', open_console)
	globalShortcut.register('F8', open_console)
	globalShortcut.register('CmdOrCtrl+R', refresh)
	globalShortcut.register('F5', refresh)
})
app.on('activate', function () {
	if (mainWindow === null) {
		createWindow()
	}
})
app.on('window-all-closed', function () {
	globalShortcut.unregisterAll()
	if (process.platform !== 'darwin') {
		app.quit()
	}
})
ipcMain.on("version", function () {
	autoUpdater.checkForUpdates()  
})
ipcMain.on("prompt", function () {
	createTerm()  
})
ipcMain.on("factory", function () {
	createfactory()       
})
ipcMain.on('save-ino', function(event) {
	dialog.showSaveDialog(mainWindow,{
		title: 'Enregistrer au format INO',
		defaultPath: 'Sketch',
		filters: [{ name: 'Arduino', extensions: ['ino'] }]
	},
	function(filename){
		event.sender.send('saved-ino', filename)
	})
})
ipcMain.on('save-bloc', function(event) {
	dialog.showSaveDialog(mainWindow,{
		title: 'Enregistrer au format BLOC',
		defaultPath: 'Programme',
		filters: [{ name: 'Blocklino', extensions: ['bloc'] }]
	},
	function(filename){
		event.sender.send('saved-bloc', filename)
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
		setImmediate(() => autoUpdater.quitAndInstall())
	})
})
module.exports.open_console = open_console
module.exports.refresh = refresh