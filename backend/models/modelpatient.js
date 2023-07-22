const mongoose = require("mongoose")

const patientSchema = new mongoose.Schema({
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
    }
})
const patient = mongoose.model ("Patiten",patientSchema)

module.exports.patient = patient