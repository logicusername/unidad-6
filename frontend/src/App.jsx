
import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
import  { Doctor }  from "./pages/Doctor"
import  { Paciente }  from "./pages/Paciente"
import { Citas } from "./pages/Citas"
import "./App.css"

function App (){
    return(
        <div className="bg-slate-800 display nav-bar">
            <BrowserRouter>
                <Navegacion/>
                    <Routes>
                        <Route path="/doctor" element= {<Doctor/>}/>
                        <Route path="/paciente" element = {<Paciente/>}/>
                        <Route path="/citas" element = {<Citas/>}/>
                    </Routes>
            </BrowserRouter>
        </div>
                
    )
}
function Navegacion(){
    return<nav>
        <ul>
            <li>
                <Link to="/doctor" className="text-white font-mono mt-1 text-lg">DOCTOR</Link>
            </li>
            <li>
                <Link to="/paciente" className="text-white font-mono mt-1 text-lg">PACIENTE</Link>
            </li>
            <li>
                <Link to="/citas" className="text-white font-mono mt-1 text-lg">CITAS</Link>
            </li>
        </ul>
    </nav>
    
}
export default App