import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  onMenuAction: (callback: (action: string) => void) => {
    ipcRenderer.on('menu-action', (_event, action) => callback(action));
  },
  openExternal: (url: string) => {
    ipcRenderer.send('open-external', url);
  },
  getAppVersion: () => {
    return ipcRenderer.invoke('get-app-version');
  },
  platform: process.platform
});