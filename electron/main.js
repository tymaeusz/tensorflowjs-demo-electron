// In your main.js (Electron)
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false, 
      contextIsolation: true,
    },
  });

  const startUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : `file://${path.join(__dirname, '../out/index.html')}`;

  mainWindow.loadURL(startUrl);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', () => {
  // Automatically allow media access in development
  app.commandLine.appendSwitch('use-fake-ui-for-media-stream');
  createWindow();
});

ipcMain.on('request-camera-permission', (event) => {
  mainWindow.webContents.session.setPermissionRequestHandler((webContents, permission, callback) => {
    if (permission === 'media') {
      callback(true); // Allow media (camera and microphone) access
    } else {
      callback(false); // Deny other permissions
    }
  });
});
