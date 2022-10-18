import './index.scss'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { retangulo } from '../../services/index.js'

export default function Forma () {
    const [altura, setAltura] = useState ()
    const [largura, setLargura] = useState ()
    const [result, setResult] = useState ([])

    function calcular(){
        let x = retangulo(altura, largura)
        setResult(x);
    } 

  

    return(
        <main>
            <h1>Retângulo</h1>
            <p>Altura: <input type='number' value={altura} onChange={e => setAltura(Number(e.target.value))}/></p>

            <p>Largura: <input type='number' value={largura} onChange={e => setLargura(Number(e.target.value))}/></p>

            <button onClick={calcular}>Ok</button>
            <div>
                {result.map(item => 
                    <p className='toBeReplaced'>{item}</p>
                
                )}
            </div>
        </main>

    )
}