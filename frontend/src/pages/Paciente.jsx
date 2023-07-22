import { useState } from "react"
import "../App.css"

export function Paciente(){
    //variables
    const [nombre,setNombre] = useState("")
    const [apellido,setApellido] = useState("")
    const [cedula,setCedula] = useState("")
    const [edad,setEdad] = useState("")
    const [telefono,setTelefono] = useState("")
    const [datos,setDatos]= useState([])
    //handle del formulario
    const handleSubmit= (e) => {
        e.preventDefault();
        //arreglo de datos
        const newDoctor = {
            name : nombre,
            lastname : apellido,
            cedula : cedula,
            edad : edad,
            telefono : telefono
        }
        //fetch para enviar arreglo
        function enviarDatos(){
            fetch("http://127.0.0.1:3010/api/patient",{
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
        // fetch para obtener todos los datos
    function cargarDatos(){
        fetch(`http://127.0.0.1:3010/api/getAll/patient`)
            .then((res) => res.json())
            .then(data => setDatos(data))
        return(
            document.getElementById("contenedor-columnas").style.display = "block"
        )
    }
    return (
        <div className="display">
            <form className= " bg-slate-900 etiqueta-contenedor" onSubmit={handleSubmit}>
                <div className="datos-paciente">
                    <p className="text-white font-mono mt-64">PACIENTE:</p> <br />
                    <p className="text-white font-mono">Nombre: </p>
                    <input type="text" className="font-mono" onChange={(e) => setNombre(e.target.value)}/>
                    <p className="text-white font-mono mt-1">Apellido:</p>
                    <input type="text" className="font-mono" onChange={(e) => setApellido(e.target.value)}/>
                    <p className="text-white font-mono mt-1">Numero de cedula:</p>
                    <input type="number" className="font-mono" onChange={(e) => setCedula(e.target.value)}/>
                    <p className="text-white font-mono mt-1">Edad:</p>
                    <input type="number" className="font-mono" onChange={(e) => setEdad(e.target.value)}/>
                    <p className="text-white font-mono mt-1">Telefono:</p>
                    <input type="number" className="font-mono" onChange={(e) => setTelefono(e.target.value)}/> 
                    <br /><br />
                    <button type = "submit" className="bg-green-300 px-2 py-1 rounded-md font-mono click">Registrar</button><br /> <br />
                    <button type = "button" onClick={cargarDatos}className="bg-green-300 px-2 py-1 rounded-md font-mono click">Ver registros</button>
                </div>
            </form>
            <div className="contenedor">
                <div id="contenedor-columnas">
                    <div className="grid-layout bottom font-mono ">
                        <h1 className="text-white caja">Nombre</h1>
                        <h1 className="text-white caja">Apellido</h1>
                        <h1 className="text-white caja">Cedula</h1>
                        <h1 className="text-white caja">Edad</h1>
                        <h1 className="text-white caja">Telefono</h1>
                    </div>
                </div>
                <div className="overflow-container">
                    {datos.map((dato) => {
                        return(
                            <div>
                                <div key={dato.id} className="grid-layout-datos font-mono">
                                    <h2 className="text-slate-300  caja">{dato.name}</h2> 
                                    <h2 className="text-slate-300  caja">{dato.lastname}</h2>
                                    <h2 className="text-slate-300  caja">{dato.cedula}</h2>
                                    <h2 className="text-slate-300  caja">{dato.edad}</h2>
                                    <h2 className="text-slate-300  caja">{dato.telefono}</h2>    
                                </div>
                                <hr/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )    
}
