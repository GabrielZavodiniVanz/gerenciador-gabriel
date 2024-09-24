import React, { useState } from 'react';
import './CadastroDespRec.css';

function Despesa({ adicionarDespesa }) {
  const [valor, setValor] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    adicionarDespesa({ valor: parseFloat(valor), descricao });
    setValor('');
    setDescricao('');
  };

  return (
    <form className="despesa-form" onSubmit={handleSubmit}>
      <input 
        type="number" 
        className="despesa-input" 
        value={valor} 
        onChange={(e) => setValor(e.target.value)} 
        placeholder="Valor da Despesa" 
      />
      <input 
        type="text" 
        className="despesa-input" 
        value={descricao} 
        onChange={(e) => setDescricao(e.target.value)} 
        placeholder="Descrição" 
      />
      <button type="submit" className="despesa-button">Adicionar Despesa</button>
    </form>
  );
}

export default Despesa;
