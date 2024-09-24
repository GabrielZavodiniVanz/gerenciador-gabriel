// src/pages/Sobre.js
import React from 'react';
import './Sobre.css'; // Importe o CSS

function Sobre() {
  return (
    <div className="sobre-container">
      <h1>
        Sobre o Gerenciador de Orçamento 
        <i className="fas fa-coins" style={{ marginLeft: '10px', color: '#007bff' }}></i>
      </h1>
      <p>Esse projeto foi criado por Gabriel Vanz para auxiliar no gerenciamento financeiro.</p>
    </div>
  );
}

export default Sobre;
