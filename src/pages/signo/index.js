
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import './index.scss' 

export default function Signo () {
    const [dia, setDia] = useState(0)
    const [mes, setMes] = useState('')
    const [result, setResult] = useState('')

    function seuSigno () {
        
        try {
        if(mes == 'Setembro' && dia >=23 || mes == 'Outubro' && dia <=22) {
            setResult('Sim :)')
        }
        else if (mes == 'setembro' && dia >=23 || mes == 'outubro' && dia <=22) {
            setResult('Sim :)')
        }
        else if (mes == 'SETEMBRO' && dia >=23 || mes == 'OUTUBRO' && dia <=22) {
            setResult('Sim :)')
        }
        else {
            setResult('Não :(')
        }
        }
        catch(err){
            setResult(err.message)
        }
    }


    
    useEffect(() => {
        seuSigno();
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

            <img src='/assets/images/libra-na-amizade.jpg' width={500}/>
        </main>
    )



}