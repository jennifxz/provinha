import { Link } from 'react-router-dom'
import './index.scss'

function Home() {
  return (
    <main className='home' >
        <div>
          <img src='/assets/images/home.png' height={80}/>
        
        <Link to='/acai' className='link' >Açaí</Link>
        
        <Link to='/signo' className='link' >Signo</Link>
        
        <Link to='/sorvete' className='link'> Sorvete</Link>

        <Link to='/salario' className='link'> Salário</Link>
        
        <Link to='/paradas' className='link'>Paradas</Link>
        
        <Link to='/febre' className='link'>Febre</Link>

        <Link to ='/orcamento' className='link'>Orçamento Familiar</Link>

        <Link to ='/ingresso' className='link'>Ingressos</Link>

        </div>
    </main>
  );
}

export default Home;
