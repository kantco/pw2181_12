const app= require('electron').app; //cargar la apliacion de electron
const BrowserWindow=require('electron').BrowserWindow;//para crear ventanas de sistema operativo, sin s, poruq si le ppongo s me dice qu eno es un contructor
const path =require('path');
const url=require('url');

let PantallaPrincipal;//definir una pantalla princial. la palabra let es lo mismo con que const, es una cosntante


function muestraPantallaPrincipal()
{
	PantallaPrincipal=new BrowserWindow({width:620,height:825});//creamos una pantalla vacía
	PantallaPrincipal.loadURL(url.format({ 
		pathname:path.join(__dirname,'index.html'), 
		protocol: 'file',
		slashes:true //que nos permita poner diagonales

	}));//darle contenido a esa pantalla

	//Clic derecho, inspeccionar en chrome
	//PantallaPrincipal.webContents.openDevTools();

	PantallaPrincipal.show();//mostramos la pantalla
}	

app.on('ready', muestraPantallaPrincipal); //para mostrar la pantalla princiiapl la palicacion debe estar lista

