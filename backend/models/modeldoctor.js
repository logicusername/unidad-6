//este archivo define la estructura de una base de datos 
//-------constante para que contiene metodos mongoose
const mongoose = require("mongoose")

//------constante con schema para definir el esquema de datos a importar
const dataSchema = new mongoose.Schema({
    name: {
        type: String
    },
    lastname: {
        type: String
    },
    consultorio: {
        type: Number
    },
    correo: {
        type: String
    },
    especialidad: {
        type: String
    }
})

//exportando el anterior "modelo" = .model 
const doctor = mongoose.model ("Doctor",dataSchema)

module.exports.doctor = doctor 


