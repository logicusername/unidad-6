import { useState } from "react"
import "../App.css"

export function Citas(){
    const [cedula,setCedula] = useState("")
    const [especialidad,setEspecialidad] = useState("")
    const [doctor,setDoctor] = useState("")
    const [datos,setDatos] = useState([])

    function cargarDatos(){
        fetch(`http://127.0.0.1:3010/api/getOne/${cedula}`,{
            
        })
            .then((res) => res.json())
            .then(data => setDatos(data))
    }
    const handleSubmit= (e) => {
        e.preventDefault();
        //arreglo de datos
        const newCita= {
            name : datos.name,
            lastname : datos.lastname,
            cedula : cedula,
            // edad : datos.edad,
            // telefono : datos.telefono,
            doctor : doctor,
            especialidad : especialidad,
            
        }
        //fetch para enviar arreglo
        function enviarDatos(){
            fetch("http://127.0.0.1:3010/api/cita",{
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(newCita)
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

    return (
    <div>
        <div className="display">
            <form className= " bg-slate-900 etiqueta-contenedor" onSubmit={handleSubmit}>
                <div className="datos-paciente">
                    <p className="text-white font-mono mt-64">CITAS:</p> <br />
                    <p className="text-white font-mono ">agendar cita</p>
                    <p className="text-white font-mono mt-1">Numero de cedula:</p>
                    <input type="number" className="font-mono" onChange={(e) => setCedula(e.target.value)}/>
                    <br /><br />
                    <button type = "button" className="bg-green-300 px-2 py-1 rounded-md font-mono click" onClick={cargarDatos}>consultar</button><br /><br /> 
                </div>
                <div>
                {datos.map((dato) => {
                    return (
                        <div className="datos-paciente">
                            <p className="text-white font-mono mt-1">Nombre:</p>
                            <input type="text" className="font-mono" Value={dato.name} disabled= "true"/>
                            <p className="text-white font-mono mt-1">Apellido:</p>
                            <input type="text" className="font-mono" value = {dato.lastname} disabled= "true"/>
                            <p className="text-white font-mono mt-1">Edad:</p>
                            <input type="number" className="font-mono" value={dato.edad} disabled= "true"/>
                            <p className="text-white font-mono mt-1">Telefono:</p>
                            <input type="number" className="font-mono" value={dato.telefono} disabled= "true" /> <br />
                            <p className="text-white font-mono">digite nombre doctor:</p>
                            <input onChange={(e) => {setDoctor(e.target.value)}}type="text" className="font-mono" /> <br />
                            <p className="text-white font-mono mt-1">especialidad:</p>
                                <select  onChange={(e) => setEspecialidad(e.target.value)} className="font-mono mt-1">
                                    <option value="medicina general">Medicina general</option>
                                    <option value="cardiologia">Cardiologia</option>
                                    <option value="medicina interna">Medicina interna</option>
                                    <option value="dermatologia">Dermatologia</option>
                                    <option value="rehabilitacion fisica">Rehabilitacion fisica</option>
                                    <option value="psicologia">Psicologia</option>
                                    <option value="odontologia">Odontologia</option>
                                    <option value="radiologia">Radiologia</option>
                                </select>
                                <br /><br />
                        </div>
                    )        
                })}
                </div>
                <div className="datos-paciente">
                <button type = "submit" className="bg-green-300 px-2 py-1 rounded-md font-mono click">Registrar cita</button><br /> <br />
                </div>    
            </form>
        </div>
    </div>)
}