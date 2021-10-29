//usar mongoose(importar)
const mongoose = require("mongoose");

async function conectarBD()
{
    try 
    {
        await mongoose.connect(process.env.BASEDATOS);
        console.log("Exito en la coneccion")
    } 
    catch (error) 
    {
        console.log("Error en conectarse")
    }
    
}

module.exports = { conectarBD };