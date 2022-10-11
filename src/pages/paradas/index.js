import { useEffect, useState } from "react";
import "./index.scss"
import { Link } from "react-router-dom";
import { Paradas } from "../../services";

export default function ParadasViagem() {
    
    const [capac, setCapac] = useState(0)
    const [consumo, setConsumo] = useState(0)
    const [dist, setDist] = useState(0)
    const [result, setResult] = useState(0)

    function Calcular() {
        let x = Paradas(capac, consumo, dist)
        setResult(x);
    }  

    useEffect(() => {
        Calcular()
    }, [capac, consumo, dist])

    return(
        <main>
            <div className="pag">
            <Link to='/' className='link' >Voltar para Home</Link>

                <h1>Calcular Paradas</h1>

                <p>Capacidade do tanque <input type="Number" value={capac} onChange={e => setCapac(Number(e.target.value))} /></p>
                <p>Consumo <input type="Number" value={consumo} onChange={e => setConsumo(Number(e.target.value))} /></p>
                <p>Distância <input type="Number" value={dist}  onChange={e => setDist(Number(e.target.value))} /></p>
                <h1>{result}</h1>
            </div>
        </main>
    )
}