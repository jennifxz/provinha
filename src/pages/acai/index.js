import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import './index.scss'

export default function Acai () {

    const [qtdP, setQtdP] = useState(0)
    const [qtdM, setQtdM] = useState(0)
    const [qtdG, setQtdG] = useState(0)
    const [desc, setDesc] = useState(0)
    const [result, setResult] = useState()

    function Calcular() {
        let total = qtdP * 13.50 + qtdM * 15 + qtdG * 17.50;
        let desconto = total * desc / 100;
        let final = total - desconto;
        
        let msg ='O valor total é ' + final;
        
        if(qtdP <0 || qtdM <0 || qtdG <0 || desc <0) {
            msg = 'Valor inválido'
        }
        
        setResult(msg)
    }

    useEffect(() => {
        Calcular()
    }, [qtdP, qtdM, qtdG, desc])


    return (
       
       <main className="acai">
            <Link className="link" to='/'>Voltar para home</Link>

                <img src="/assets/images/Logo_Maisacai.webp" width={200} />
        

            
            <label>Pequeno</label> 
            <input type='number' value={qtdP} onChange={e => setQtdP(Number(e.target.value))}/>
            
                
            <label>Médio</label> <input type='number' value={qtdM} onChange={e => setQtdM(Number(e.target.value))}/>
            
            <label>Grande</label> <input type='number' value={qtdG} onChange={e => setQtdG(Number(e.target.value))}/>
            
            <label>Desconto</label> <input type='number' value={desc} onChange={e => setDesc(Number(e.target.value))}/>
            

            <h2>{result}</h2>
        </main>
    )

}