// filepath: /c:/Users/Vidara/Desktop/electorn app/my-app/src/index.js
const { app, BrowserWindow, ipcMain } = require("electron");
let mainWindow;



app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 500,
    height: 700,
    frame: false,
    autoHideMenuBar: true,
    webPreferences: { 
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
    frame: false,
    transparent: true,
  });

  mainWindow.loadFile('src/startpage.html');
  //mainWindow.loadFile(path.join(__dirname, 'renderer/startpage.html'));

   // Open the DevTools.
   mainWindow.webContents.openDevTools({ mode: 'detach' });

   ipcMain.on("navigate", (event, page)=>{
    mainWindow.loadFile(page);
   });
   

});
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.