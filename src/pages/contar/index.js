import './index.js'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { contar } from '../../services/index.js'

export default function Contagem () {
    const [inicio, setInicio] = useState (0)
    const [fim,setFim] = useState (0)
    const [result,setResult] = useState ([])

    function count(){
        let x = contar(inicio, fim)
        setResult(x);
    } 

    useEffect(() =>{
        count()
    }, [inicio, fim]);

    return(
        <main>
            <h1>Contar</h1>
            <p>Inicio: <input type='number' value={inicio} onChange={e => setInicio(Number(e.target.value))}/></p>

            <p>Fim: <input type='number' value={fim} onChange={e => setFim(Number(e.target.value))}/></p>

            <h1>{result}</h1>
        </main>

    )
}