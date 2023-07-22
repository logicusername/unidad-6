require("dotenv").config()

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const port = process.env.PORT
const host = process.env.HOST
// -----constante con el link servidor de base de datos----
const mongoStringd =  process.env.DBDOCTOR_URL;


//-------conexion con base de datos------------
mongoose.connect(mongoStringd)
  
  // Evento para verificar la conexión a cada base de datos
mongoose.connection; 
//-------constante que guarda conexion y metodos ---
const database = mongoose.connection

//-------stream para conexion error--------------
database.on("error",(error) => {
    console.log(error)
})
//----------stream para conexion buena .once = se ejecuta solo una vez
database.once ("connected",()=> {
    console.log("conectado a la base de datos")
})

const app = express()
app.use(cors())
app.use(express.json());

//----------contante que guarda las rutas---------
const routes =  require("./routes/routes")

//---------concatenar rutas a middleware---------
app.use("/api",routes)

app.listen(port,() => {
    console.log(`servidor iniciado en ${port}`)
    console.log(`visite http://${host}:${port}`)
})
