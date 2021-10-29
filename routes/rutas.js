//importar la clase de express(router)
const{Router}= require('express')

//usar la clase de express(router)

const rutas=Router()

//importar los controladores de

const {registrarJugador}= require('../controllers/controladores.js')
const {buscarJugador}= require('../controllers/controladores.js')
const {buscarJugadores}= require('../controllers/controladores.js')
const {editarJugador}= require('../controllers/controladores.js')
const {eliminarJugador}= require('../controllers/controladores.js')


//listado de rutas 


rutas.get('/avanzada/v1/jugadores',buscarJugadores) 

rutas.get('/avanzada/v1/jugadores/:id',buscarJugador) 

rutas.post('/avanzada/v1/jugadores',registrarJugador) 

rutas.put('/avanzada/v1/jugadores/:id',editarJugador)

rutas.delete('/avanzada/v1/jugadores/:id',eliminarJugador) 

  //exportar las rutas

  module.exports=rutas