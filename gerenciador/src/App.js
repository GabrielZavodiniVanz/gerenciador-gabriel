import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Dashboard from './pages/dash/Dashboard';
import Sobre from './pages/sobre/Sobre';
import Login from './pages/login/Login';
import Navbar from './components/Navbar';
import Receita from './components/Receita';
import Despesa from './components/Despesa';
import Table from './components/Table';

function App() {
  const [despesas, setDespesas] = useState([]);
  const [receitas, setReceitas] = useState([]);

  const adicionarDespesa = (novaDespesa) => {
    setDespesas([...despesas, novaDespesa]);
  };

  const adicionarReceita = (novaReceita) => {
    setReceitas([...receitas, novaReceita]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard receitas={receitas} despesas={despesas} />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/login" element={<Login />} />
      </Routes>

     
      <Routes>
        <Route path="/dashboard" element={
          <>
              <div className="form-container">
        <Receita adicionarReceita={adicionarReceita} />
        <Despesa adicionarDespesa={adicionarDespesa} />
      </div>
            <Table despesas={despesas} receitas={receitas} />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
