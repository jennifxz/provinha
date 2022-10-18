import './index.js'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { linha } from '../../services/index.js'

export default function Linhas () {
    const [limite, setLimite] = useState (0)
    const [result,setResult] = useState ([])

    function calcular(){
        let x = linha(limite)
        setResult(x);
    } 

    useEffect(() =>{
        calcular()
    }, [limite]);

    return(
        <main>
            <h1>Linha</h1>
            <p>Limite: <input type='number' value={limite} onChange={e => setLimite(Number(e.target.value))}/></p>

            <h1>{result}</h1>
        </main>

    )
}