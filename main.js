const electron = require('electron');
const app = electron.app;
const url = require('url');
const path = require('path');
const BrowserWindow = electron.BrowserWindow;
var mainWindow;

app.on('ready', function () {

    mainWindow = new BrowserWindow({ 
        frame: true,
        width: 1024,
        height: 768, 
        backgroundColor: '#3e4142'
    });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, '/html/index.html'),
        protocol: 'file:',
        slashes: true
    }));
});
