import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Acai from './pages/acai';
import Home from './pages/home/App';
import Signo from './pages/signo';
import Sorvete from './pages/sorvete';
import SalarioLiquido from './pages/salario';
import ParadasViagem from './pages/paradas';
import Febres from './pages/febre';
import OrcamentoFamiliar from './pages/orcamento';
import Ingresso from './pages/ingresso';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/acai' element={<Acai/>} />
            <Route path='/signo' element={<Signo/>} />
            <Route path='/sorvete' element={<Sorvete/>} />
            <Route path='/salario' element={<SalarioLiquido />} />
            <Route path='/paradas' element={<ParadasViagem />} />
            <Route path='/febre' element={<Febres />} />
            <Route path='/orcamento' element={<OrcamentoFamiliar/>} />
            <Route path='/ingresso' element={<Ingresso/>} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);