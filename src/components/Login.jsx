import React, { useState } from 'react';
import axios from 'axios';

const apiUrl = 'https://api.joeleprof.com/tec-map'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, {
        email,
        password,
      });

      // Traitez la réponse 
      console.log('Connecté avec succès', response.data);
    } catch (error) {
      // Gérez les erreurs de connexion
      setErrorMessage('Identifiants incorrects. Veuillez réessayer.');
    }
  };

  return (
    <div>
      <h2>Connexion</h2>
      <input
        type="text"
        placeholder="Adresse courriel"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Se connecter</button>
      <p>{errorMessage}</p>
    </div>
  );
}

export default Login;
