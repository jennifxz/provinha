import { useEffect, useState } from "react";
import { Febre } from "../../services";
import "./index.scss"
import { Link } from "react-router-dom";

export default function Febres() {

    const [temperatura, setTemperatura] = useState(0)
    const [result, setResult] = useState(0)

    function Calcular() {
        let x = Febre(temperatura)
        setResult(x);
    }

    useEffect(() => {
        Calcular()
    }, [temperatura])

    return (
        <main >


            <div className="pag">
            <Link to='/' className='link' >Voltar para Home</Link>

                <h1>Está com Febre?</h1>

                <p>Sua Temperatura <input type="Number" step='0.1' value={temperatura} onChange={e => setTemperatura(Number(e.target.value))} /></p>

                <h1>{result}</h1>
                <img src="/assets/images/download.png" />
            </div>
        </main>

    )
}