import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import './index.scss'

export default function Sorvete() {

    const [gramas, setGramas] = useState(0);
    const [result, setResult] = useState();

    function Calcular () {
        let total = 0;
        let msg = '';

        if(gramas > 1000) {
            total = (gramas / 100) * 3 
            msg = 'O total a pagar é R$' + total ;
        }
        else if(gramas <= 0 ) {
            msg = 'Peso inválido'
        }
        else{
            total = (gramas / 100 ) * 3.50
            msg='O total a pagar é R$' + total;
        }
        setResult (msg)
    }

    useEffect(() => {
        Calcular();

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