//encargado de realizar las operaciones en la BD 

//importar el modelo de datos para poder operar en BD

const JugadorModelo = require ('../models/JugadorModelo.js')

//1.funcion para insertar datos
async function insetarJugador(datos){

    let jugadorNuevo=new JugadorModelo(datos)
    return await jugadorNuevo.save()

}
async function leerJugador(id){
    
    let jugadorBuscado=await JugadorModelo.findById(id)
    return jugadorBuscado

}
async function leerJugadores(){
    
    let jugadoresBuscados=await JugadorModelo.find()
    return jugadoresBuscados

}
async function borrarJugador(id){
    
    return await JugadorModelo.findByIdAndDelete(id)

}
async function modificarJugador(id,datos){
    
    return await JugadorModelo.findByIdAndUpdate(id,datos)

}

module.exports =
{
    insetarJugador,
    leerJugador,
    leerJugadores,
    borrarJugador,
    modificarJugador
}