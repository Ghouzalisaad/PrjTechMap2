import React, { useState } from 'react';
import axios from 'axios';

const apiUrl = 'https://api.joeleprof.com/tec-map'; 

function Registration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegistration = async () => {
    try {
      const response = await axios.post(`${apiUrl}/auth/register`, {
        email,
        password,
        username,
        fullName,
      });

      // Traitez la réponse 
      console.log('Inscription réussie', response.data);
    } catch (error) {
      // Gérez les erreurs d'inscription
      setErrorMessage('Une erreur s\'est produite lors de l\'inscription.');
    }
  };

  return (
    <div>
      <h2>Inscription</h2>
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
      <input
        type="text"
        placeholder="Surnom"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nom complet"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <button onClick={handleRegistration}>S'inscrire</button>
      <p>{errorMessage}</p>
    </div>
  );
}

export default Registration;
