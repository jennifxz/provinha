import './index.scss'
import { useEffect, useState } from 'react'
import { Ingressos } from '../../services'
import { Link } from 'react-router-dom'

export default function Ingresso() {
    const [inteira, setInteira] = useState(0)
    const [meia, setMeia] = useState(0)
    const [dia, setDia] = useState('')
    const [nacional, setNacional] = useState(false)
    const [r, setR] = useState()

    function calcular() {
        let x = Ingressos(inteira, meia, dia, nacional)
        setR(x)
    }

    useEffect(() => {
        calcular()
    }, [inteira, meia, dia, nacional])

    return (
        <main>
            <div className="pag">
                <Link to='/' className='link' >Voltar para Home</Link>

                <h1>Comprar Ingressos</h1>

                <p>Inteiras<input type="Number" value={inteira} onChange={e => setInteira(Number(e.target.value))} /></p>
                <p>Meia <input type="Number" value={meia} onChange={e => setMeia(Number(e.target.value))} /></p>
                <label>Dia da Semana</label>                         
                <select value={dia} onChange={e => setDia(e.target.value)}>                           
                <option key="">Domingo</option>                             
                <option key="">Segunda-feira</option>                             
                <option key="">Terça-feira</option>                             
                <option key="">Quarta-feira</option>                             
                <option key="">Quinta-feira</option>                             
                <option key="">Sexta-feira</option>                             
                <option key="">Sábado</option>                         
                </select>                     
                                   
                <label>Nacional</label>                         
                <input  type="checkbox" onChange={e => setNacional(e.target.checked)} />                         
                                
            <h1>{r}</h1>
        </div>
    </main >
    )

}