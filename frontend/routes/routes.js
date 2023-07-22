const express = require("express");
const {doctor} = require("../models/modeldoctor");
const {patient} = require("../models/modelpatient");
const {cita} = require("../models/modelcitas");
const router = express.Router();


//-------metodo POST------------
//--------POST------------------
router.post("/doctor",async(req,res) => {
    //----- contante para guardar los datos de un nuevo objeto de la clase exportada model 
    const data = new doctor ({   name : req.body.name,
        lastname : req.body.lastname,
        consultorio : req.body.consultorio,
        correo : req.body.correo,
        especialidad : req.body.especialidad,
    })     
    try {
        const dataToSave = await data.save()
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message : error.message})
    }
})
//-------metodo POST PATIENT------------
//--------POST------------------
router.post("/patient",async(req,res) => {
    //----- contante para guardar los datos de un nuevo objeto de la clase exportada model 
    const data = new patient ({
        name : req.body.name,
        lastname : req.body.lastname,
        cedula : req.body.cedula,
        edad : req.body.edad,
        telefono : req.body.telefono,
    })     
    try {
        const dataToSave = await data.save()
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message : error.message})
    }
})
//-------metodo POST CITA------------
//--------POST------------------
router.post("/cita",async(req,res) => {
    //----- contante para guardar los datos de un nuevo objeto de la clase exportada model 
    const data = new cita ({
        name : req.body.name,
        lastname : req.body.lastname,
        cedula : req.body.cedula,
        edad : req.body.edad,
        telefono : req.body.telefono,
        doctor : req.body.doctor,
        especialidad : req.body.especialidad,
    })     
    try {
        const dataToSave = await data.save()
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message : error.message})
    }
})

//----------GET-ALL-DOCTOR---------------
router.get("/getAll/doctor",async (req,res) => { 
    try{
        const data = await doctor.find()
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})
//----------GET-ALL-PAITIENT---------------
router.get("/getAll/patient",async (req,res) => { 
    try{
        const data = await patient.find()
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})
//----------obtener por id para rellenar campos
router.get("/getOne/:cedula", async (req,res) => {
    try {
        const cedula = req.params.cedula;
        const data = await patient.find({cedula:`${cedula}`})
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})














module.exports = router;