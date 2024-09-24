import React, { useState } from 'react';
import './CadastroDespRec.css';
function Receita({ adicionarReceita }) {
  const [valor, setValor] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    adicionarReceita({ valor: parseFloat(valor), descricao });
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
        placeholder="Valor da Receita" 
      />
      <input 
        type="text" 
        className="despesa-input" 
        value={descricao} 
        onChange={(e) => setDescricao(e.target.value)} 
        placeholder="Descrição" 
      />
      <button type="submit" className="despesa-button">Adicionar Receita</button>
    </form>
  );
}

export default Receita;
