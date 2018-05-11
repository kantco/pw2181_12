const {app,BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let pantallaEnviar;

function muestraPantallaEnviar(){
	pantallaEnviar=new BrowserWindow({width:320,height:425});
	pantallaEnviar.loadURL(url.format({
		pathname: path.join(__dirname,'index.html'),
		protocol: 'file',
		slashes: true
	}))
	// pantallaEnvia.webCotents.openDevTools();
	pantallaEnviar.show();
}

app.on('ready',muestraPantallaEnviar())