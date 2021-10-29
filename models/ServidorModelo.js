const express = require('express')
const cors = require('cors')

//importar la funcion para conectar con la BD
const{conectarBD}=require('../database/conexion.js')

//importar lsa rutas

const rutas=require('../routes/rutas.js')

class ServidorModelo{

    constructor(){
        
        this.app = express()
        this.despertarBD()
        this.llamarAuxiliares()
        this.enrutarPeticiones()

    }

    despertarServidor(){

        this.app.listen(process.env.PORT,function () {
            console.log("servidor encendido: " + process.env.PORT)
        })

    }

    enrutarPeticiones(){

        this.app.use('/',PORT)

    }

    despertarBD(){
        
        conectarBD()
    }

    llamarAuxiliares()
    {
        this.app.use(express.json())
        this.app.use(cors())
    }
}




module.exports =ServidorModelo