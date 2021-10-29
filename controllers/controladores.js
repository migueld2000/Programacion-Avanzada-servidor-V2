// el controlador es el encargado de administrar las peticiones y respuesta

//importaciones de express
const {request, response}= require('express')

const { insertarJugador }=require('../services/servicioJugadores.js')
const { leerJugador }=require('../services/servicioJugadores.js')
const { leerJugadores }=require('../services/servicioJugadores.js')
const { borrarJugador }=require('../services/servicioJugadores.js')
const { modificarJugador }=require('../services/servicioJugadores.js')

//crear un funcion para cada operacion del servidor

async function registrarJugador(peticion=request, respuesta=response) {

    //nombre//edad//posicion//dorsal//equipo
    let datosPeticion=peticion.body
    try{

        await insertarJugador(datosPeticion)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Exito al registrar"
        })

    }catch(error){

        respuesta.status(400).json({
            estado:false,
            mensaje:"Error al registrar: " +error
        })
    }

}

async function buscarJugador(peticion=request, respuesta=response){

    //recibir el id a buscar
     try{
        let id=peticion.params.id

        let jugador = await leerJugador(id)
        respuesta.status(200).json({
            estado:true,
            mensaje:jugador
        })

    }catch(error){

        respuesta.status(400).json({
            estado:false,
            mensaje:"Error al buscar al jugador: "+error
        })
    }

}

 async function buscarJugadores(peticion=request, respuesta=response){
    
     try{

        let jugadores = await leerJugadores()
        respuesta.status(200).json({
            estado:true,
            mensaje:"Exito al buscar los jugadores"
        })

    }catch(error){

        respuesta.status(400).json({
            estado:false,
            mensaje:"Error al buscar los jugadores: "+error
        })
    }

}

async function editarJugador(peticion=request, respuesta=response){
    //recibir el id a editar
 try{

        let id=peticion.params.id
        let datosPeticion=peticion.body
        
        await modificarJugador(id,datosPeticion)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Exito al editar al jugaor"
        })

    }catch(error){

        respuesta.status(400).json({
            estado:false,
            mensaje:"Error al editar al jugaor: "+error
        })
    }


}

async function eliminarJugador(peticion=request, respuesta=response){
    //recibir el id a eliminar
    try{

        let id=peticion.params.id
        
        await borrarJugador(id)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Exito al borrar al jugaor"
        })

    }catch(error){

        respuesta.status(400).json({
            estado:false,
            mensaje:"Error al borrar al jugaor: "+error
        })
    }

}

module.exports = {

    registrarJugador,
    buscarJugador,
    buscarJugadores,
    editarJugador,
    eliminarJugador

}