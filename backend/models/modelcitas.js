const mongoose = require("mongoose")

const citaSchema = new mongoose.Schema({
    name:{
        type : String
    },
    lastname:{
        type : String
    },
    cedula: {
        type : Number
    },
    edad: {
        type : Number
    },
    telefono: {
        type : Number
    },
    doctor: {
        type : String
    },
    especialidad: {
        type : String
    }
})
const cita = mongoose.model ("Cita",citaSchema)

module.exports.cita = cita