const {electron, ipcMain, app, BrowserWindow, globalShortcut, dialog} = require('electron')
const { autoUpdater } = require("electron-updater")
const log = require('electron-log');
const path = require('path')
let mainWindow
let termWindow
let factoryWindow
autoUpdater.logger = log
autoUpdater.logger.transports.file.level = 'info'
log.info('App starting...')
function sendStatusToWindow(text) {
  log.info(text);
  mainWindow.webContents.send('information', text);
}
function createWindow () {
	mainWindow = new BrowserWindow({width:1240,height:700,icon:'www/media/icon.png',frame:false,movable:true})
	if (process.platform == 'win32' && process.argv.length >= 2) {
		mainWindow.loadURL(path.join(__dirname, '../../www/index.html?url='+process.argv[1]))
	} else {
		mainWindow.loadURL(path.join(__dirname, '../../www/index.html'))
	}
	//mainWindow.webContents.openDevTools() // à supprimer
	mainWindow.setMenu(null)
	mainWindow.on('closed', function () {
		mainWindow = null
	})
}
function createTerm() {
	termWindow = new BrowserWindow({width:640,height:560,'parent':mainWindow,resizable:false,movable:true,frame:false,modal:true}) 
	termWindow.loadURL(path.join(__dirname, "../../www/term.html"))
	//termWindow.webContents.openDevTools() // à supprimer
	termWindow.setMenu(null)
	termWindow.on('closed', function () { 
		termWindow = null 
	})
}
function createfactory() {
	factoryWindow = new BrowserWindow({width:1066,height:640,'parent':mainWindow,resizable:true,movable:true,frame:false})
	factoryWindow.loadURL(path.join(__dirname, "../../www/factory.html"))
	//termWindow.webContents.openDevTools() // à supprimer
	factoryWindow.setMenu(null)
	factoryWindow.on('closed', function () { 
		factoryWindow = null 
	})
}
function refresh(mainWindow = BrowserWindow.getFocusedWindow()) {
	if (mainWindow) {
		mainWindow.webContents.reloadIgnoringCache()
	}
}
app.on('ready',  function () {
	createWindow()
	autoUpdater.checkForUpdatesAndNotify();
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
ipcMain.on("prompt", function () {
	createTerm()  
});
ipcMain.on("factory", function () {
	createfactory()       
});
ipcMain.on('save-ino', function(event) {
	const options = {
		title: 'Enregistrer au format INO',
		filters: [{ name: 'Arduino', extensions: ['ino'] }]
	}
	dialog.showSaveDialog(options, function(filename){
		event.sender.send('saved-ino', filename)
	})
})
ipcMain.on('save-bloc', function(event) {
	const options = {
		title: 'Enregistrer au format BLOC',
		filters: [{ name: 'Blocklino', extensions: ['bloc'] }]
	}
	dialog.showSaveDialog(options, function(filename){
		event.sender.send('saved-bloc', filename)
	})
})
autoUpdater.on('checking-for-update', function(){
	sendStatusToWindow('Checking for update...')
})
autoUpdater.on('update-available', function(info){
	sendStatusToWindow('Update available.')
})
autoUpdater.on('update-not-available', function(info){
	sendStatusToWindow('Update not available.')
})
autoUpdater.on('error', function(err){
	sendStatusToWindow('Error in auto-updater. ' + err)
})
autoUpdater.on('download-progress', function(progressObj){
	sendStatusToWindow('Downloaded : ' + progressObj.percent + ' %')
})
autoUpdater.on('update-downloaded', function(info){
    sendStatusToWindow('Update downloaded')
})
module.exports.refresh = refresh