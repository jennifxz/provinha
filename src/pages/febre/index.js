import { useEffect, useState } from "react";
import { Febre } from "../../services";

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
        <main>
        <div>
            <h1>Está com Febre?</h1>

            <p>Sua Temperatura <input type="Number" step='0.1' value={temperatura} onChange={e => setTemperatura(Number(e.target.value))} /></p>
           
            <h1>{result}</h1>
        </div>
    </main>

    )
}