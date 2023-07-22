import { useState } from "react"
import "../App.css"

export function Doctor(){
    //variables
    const [nombre,setNombre] = useState("")
    const [apellido,setApellido] = useState("")
    const [consultorio,setConsultorio] = useState("")
    const [correo,setCorreo] = useState("")
    const [especialidad,setEspecialidad] = useState("")
    const [datos,setDatos]= useState([])

    const handleSubmit= (e) => {
        e.preventDefault();
        const newDoctor = {
            name : nombre,
            lastname : apellido,
            consultorio : consultorio,
            correo : correo,
            especialidad : especialidad
        }
        console.log(newDoctor)

        function enviarDatos(){
            fetch("http://127.0.0.1:3010/api/doctor",{
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(newDoctor)
            })
            .then(response => {
                if(response.ok){
                    console.log("datos enviados")
                } else {
                    console.log("error enviando datos")
                }
            })
            .catch(error => {
                console.error("error en el fetch",error)
            });
        }
        enviarDatos();
    }
    function cargarDatos(){
        fetch(`http://127.0.0.1:3010/api/getAll/doctor`)
            .then((res) => res.json())
            .then(data => setDatos(data))
        return(
            document.getElementById("contenedor-columnas").style.display = "block"
        )
    }
    return(
    <div className="display">
        <form className= " bg-slate-900 etiqueta-contenedor" onSubmit={handleSubmit}>
        <div className="datos-doctor">
            <p className="text-white font-mono mt-64">DOCTOR:</p> <br />
            <p className="text-white font-mono">nombre: </p>
            <input type="text" className="font-mono" onChange={(e) => setNombre(e.target.value)}/>
            <p className="text-white font-mono mt-1">Apellido:</p>
            <input type="text" className="font-mono"
            onChange={(e) => setApellido(e.target.value)}/>
            <p className="text-white font-mono mt-1">Consultorio:</p>
            <input type="number" className="font-mono"
            onChange={(e) => setConsultorio(e.target.value)}/>
            <p className="text-white font-mono mt-1">Correo de contacto:</p>
            <input type="text" className="font-mono"
            onChange={(e) => setCorreo(e.target.value)}/>
            <br /><br />
            <p className="text-white font-mono">Especialidad:</p>
            <select  
            onChange={(e) => setEspecialidad(e.target.value)} 
            // onClick = {(e) => console.log(e.target.value)}
            className="font-mono mt-1">
                <option value="medicina general">Medicina general</option>
                <option value="cardiologia">Cardiologia</option>
                <option value="medicina interna">Medicina interna</option>
                <option value="dermatologia">Dermatologia</option>
                <option value="rehabilitacion fisica">Rehabilitacion fisica</option>
                <option value="psicologia">Psicologia</option>
                <option value="odontologia">Odontologia</option>
                <option value="radiologia">Radiologia</option>
            </select>
            <br /> <br />
            <button type = "submit" className="bg-green-300 px-2 py-1 rounded-md font-mono click">Registrar</button><br /> <br />
            <button type = "button" onClick={cargarDatos}className="bg-green-300 px-2 py-1 rounded-md font-mono click">Ver registros</button>
        </div>
        </form>
        <div className="contenedor">
            <div id="contenedor-columnas">
            <div className="grid-layout bottom font-mono ">
                <h1 className="text-white caja">Nombre</h1>
                <h1 className="text-white caja">Apellido</h1>
                <h1 className="text-white caja">Consultorio</h1>
                <h1 className="text-white caja">Correo</h1>
                <h1 className="text-white caja">Especialidad</h1>
            </div>
            </div> 
            <div className="overflow-container">
                {datos.map((dato) => {
                    return(
                        <div>
                            <div key={dato.id} className="grid-layout-datos font-mono">
                            <h2 className="text-slate-300  caja">{dato.name}</h2> 
                            <h2 className="text-slate-300  caja">{dato.lastname}</h2>
                            <h2 className="text-slate-300  caja">{dato.consultorio}</h2>
                            <h2 className="text-slate-300  caja">{dato.correo}</h2>
                            <h2 className="text-slate-300  caja">{dato.especialidad}</h2>    
                        </div>
                        <hr/>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    </div>)
}
