
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import './index.scss' 
import {seuSigno} from '../../services';

export default function Signo () {
    const [dia, setDia] = useState()
    const [mes, setMes] = useState('')
    const [result, setResult] = useState('')

    function Calculo () {
        let x = seuSigno(dia, mes)
        setResult(x)
    }


    
    useEffect(() => {
        Calculo();
    }, [dia, mes])


    return (
        <main className='signo'>
            <Link className="link" to='/'>Voltar para home</Link>
            
            <h1>Signo</h1>

            <label>Dia</label><input type='number' value={dia} onChange={e => setDia(Number(e.target.value))}/>
            <br/>
            <label>Mês</label><input type='text' value={mes} onChange={e => setMes(e.target.value)}/>
            <br/>
            <h1>É do signo de libra? </h1>
            <h1>{result}</h1>

            <img src='/assets/images/libra-na-amizade.jpg' width={300}/>
        </main>
    )



}