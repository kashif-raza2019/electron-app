/*
   Importing electron modules
*/

const { app, BrowserWindow } = require('electron');
// Create Window
function createWindow () {
    const win = new BrowserWindow({
      width: 1000,
      height: 500,
      icon: 'assets/images/favicon.png'
    })
  
    win.loadFile('index.html')
  }
  
//   
app.whenReady().then(() => {
    createWindow();
    console.log('Window Created!');

  })
// 
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
  })
// 
app.whenReady().then(() => {
    createWindow()
    app.on('activate', function () {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })
//
/* 
window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
  
    for (const dependency of ['chrome', 'node', 'electron']) {
      replaceText(`${dependency}-version`, process.versions[dependency])
    }
  })
// 
// include the Node.js 'path' module at the top of your file
const path = require('path')

// modify your existing createWindow() function
function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
}
// ...
*/