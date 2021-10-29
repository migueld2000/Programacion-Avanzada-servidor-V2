//configuar variables de entorno

require('dotenv').config()

//importar el servidor

const ServidorModelo=require("./models/ServidorModelo")

 //crear un objeto d ela clase servidor
 
 const servidorFPC=new ServidorModelo()

 //deespertar el servicio 

 servidorFPC.despertarServidor()

  

