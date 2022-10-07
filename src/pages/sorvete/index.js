import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import './index.scss'
import {calcularGramas} from '../../services';

export default function Sorvete() {

    const [gramas, setGramas] = useState(0);
    const [result, setResult] = useState();

    function Calculo() {
        let x = calcularGramas(gramas)
        setResult(x)
    }
  
    useEffect(() => {
        Calculo();

    }, [gramas])

    return( 
        <main className='sorvete'>
            <img src='/assets/images/logo.jpg' height={200} />
            <h1>Sorvete</h1>
            <label>Gramas</label><input type='number' value={gramas} onChange={e => setGramas(Number(e.target.value))}/>
            <br/>
            {result}

            <Link className="link" to='/'>Voltar para home</Link>
        </main>
    )

}