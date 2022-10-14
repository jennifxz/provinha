import './index.scss'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Orcamento } from '../../services'

export default function OrcamentoFamiliar () {
    const [ gastos, setGastos] = useState(0)
    const [ ganhos, setGanhos] = useState(0)
    const [ result, setResult] = useState('')

    function calcular () {
        let x = Orcamento (ganhos, gastos)
        setResult(x)
    }

    useEffect(() => {
        calcular()
    }, [ganhos, gastos])


    return (
        <main>
        <div className="pag">
        <Link to='/' className='link' >Voltar para Home</Link>

            <h1>Orçamento Familiar</h1>

            <p>Ganhos <input type="Number" value={ganhos} onChange={e => setGanhos(Number(e.target.value))} /></p>
            <p>Gastos <input type="Number" value={gastos} onChange={e => setGastos(Number(e.target.value))} /></p>
            
            <h1>{result}</h1>
        </div>
    </main>

    )

}