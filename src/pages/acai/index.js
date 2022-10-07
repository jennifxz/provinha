import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import './index.scss'
import { calcularAcai } from "../../services";

export default function Acai() {

    const [qtdP, setQtdP] = useState(0)
    const [qtdM, setQtdM] = useState(0)
    const [qtdG, setQtdG] = useState(0)
    const [desc, setDesc] = useState(0)
    const [result, setResult] = useState()

    function Calcular() {
        let x = calcularAcai(qtdP, qtdM, qtdG, desc)
        setResult(x)
    }

    useEffect(() => {
        Calcular()
    }, [qtdP, qtdM, qtdG, desc])


    return (

        <main className="acai">
            <Link className="link" to='/'>Voltar para home</Link>

            <img src="/assets/images/Logo_Maisacai.webp" width={200} />



            <label>Pequeno</label>
            <input type='number' value={qtdP} onChange={e => setQtdP(Number(e.target.value))} />


            <label>Médio</label> <input type='number' value={qtdM} onChange={e => setQtdM(Number(e.target.value))} />

            <label>Grande</label> <input type='number' value={qtdG} onChange={e => setQtdG(Number(e.target.value))} />

            <label>Desconto</label> <input type='number' value={desc} onChange={e => setDesc(Number(e.target.value))} />


            <h2>{result}</h2>
        </main>
    )

}