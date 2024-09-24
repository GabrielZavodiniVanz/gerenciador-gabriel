import React, { useState } from 'react';
import { auth, googleProvider, signInWithPopup, signInWithEmailAndPassword } from '../../services/firebaseconfig';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const loginGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log('Usuário logado:', result.user);
      })
      .catch((error) => {
        console.error('Erro no login:', error);
      });
  };

  const loginComEmailESenha = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        console.log('Usuário logado:', userCredential.user);
      })
      .catch((error) => {
        setError('Erro ao fazer login: ' + error.message);
        console.error('Erro no login:', error);
      });
  };

  return (
    <div className="login-container">
    <h1>Login</h1>
    <form onSubmit={loginComEmailESenha}>
        <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
        />
        <input 
            type="password" 
            placeholder="Senha" 
            value={senha} 
            onChange={(e) => setSenha(e.target.value)} 
            required 
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="login-button">Entrar</button>
    </form>
    <div className="google-login">
        <button className="login-button" onClick={loginGoogle}>
            <i className="fab fa-google" style={{ marginRight: '8px' }}></i>
            Login com Google
        </button>
    </div>
</div>

  );
}

export default Login;
