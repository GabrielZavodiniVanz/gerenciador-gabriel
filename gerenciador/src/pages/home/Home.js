// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Bem-vindo ao Gerenciador de Orçamento Pessoal</h1>
      <p className="home-description">
        Este aplicativo permite que você gerencie sua renda e despesas de forma simples e eficiente.
      </p>
      <Link to="/dashboard" className="dashboard-button">
        Ir para o Dashboard
      </Link>
    </div>
  );
}

export default Home;
