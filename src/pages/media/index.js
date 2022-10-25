import { CalcularMedia } from '../../services/index.js'
import './index.scss';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

export default function MediaAlunos(){

    const [qtdAlunos, setQtdAlunos] = useState(0)
    const [notaAlunos, setNotaAlunos] = useState([])
    const [media, setMedia] = useState(0)
    const [menor, setMenor] = useState(0)
    const [maior, setMaior] = useState(0)
    const [lista, setLista] = useState([]);


    function calcular(){
        let x = CalcularMedia(qtdAlunos, notaAlunos)
        setMedia(x.media);
        setMenor(x.menor);
        setMaior(x.maior)
    }

    function adicionarAluno(novo){
        let array = []
        array.push(novo);
        setNotaAlunos(array)
    }


    useEffect(() =>{
        adicionarAluno()
    }, [qtdAlunos])



    return(
        <main>
            <h1>MÉDIA</h1>

           <label>
                Aluno:
                <input type='number' onChange={e => setQtdAlunos(e.target.value)}/>
            </label>
            
            {lista.map(item =>
                
                <div>
                    <label> Aluno {item}</label>
                    <input type='number' onChange={e => setNotaAlunos(e.target.value)}/>
                </div>
                
                )}
        



            <button onClick={calcular}>Calcular</button>

            <label>Média: {media}</label>
            <label>Maior: {maior}</label>
            <label>Menor: {menor}</label>

        </main>
    )
}