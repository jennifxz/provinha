import "./index.scss"
import { Link } from "react-router-dom";
import { SalarioLiq } from "../../services";
import { useEffect, useState } from "react";

export default function SalarioLiquido() {

    const [salario, setSalario] = useState(0)
    const [bonus, setBonus] = useState(0)
    const [desc, setDesc] = useState(0)
    const [result, setResult] = useState(0)

    function Calcular() {
        let x = SalarioLiq(salario, bonus, desc) 
        setResult(x);
    }

    useEffect(() => {
        Calcular()
    }, [salario, bonus, desc])

    return(
        <main>
            <div className="pags" >
            <Link to='/'  >Voltar para Home</Link>
                <div className="pop">
                <h1>Salário</h1>

                <p>salario <input type="Number" value={salario} onChange={e => setSalario(Number(e.target.value))} /></p>
                <p>Bonus <input type="Number" value={bonus} onChange={e => setBonus(Number(e.target.value))} /></p>
                <p>Desconto <input type="Number" value={desc}  onChange={e => setDesc(Number(e.target.value))} /></p>
                <h1>{result}</h1>
                </div>
            </div>
        </main>
    )

 }