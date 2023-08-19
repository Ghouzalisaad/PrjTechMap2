import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl = 'https://api.joeleprof.com/tec-map'; 

function CurrentUser() {
  const [user, setUser] = useState(null);
  const [updateError, setUpdateError] = useState('');
  const [deleteError, setDeleteError] = useState('');

  const fetchCurrentUser = async () => {
    try {
      const response = await axios.get(`${apiUrl}/me`);
      setUser(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'utilisateur actuel', error);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  const handleUpdateUser = async (updatedUser) => {
    try {
      await axios.put(`${apiUrl}/me`, updatedUser);
      fetchCurrentUser();
    } catch (error) {
      setUpdateError('Une erreur s\'est produite lors de la mise à jour des informations.');
    }
  };

  const handleDeleteUser = async () => {
    try {
      await axios.delete(`${apiUrl}/me`);
      // Gérer la déconnexion ou la redirection vers la page d'accueil après la suppression
    } catch (error) {
      setDeleteError('Une erreur s\'est produite lors de la suppression du compte.');
    }
  };

  return (
    <div>
      {user && (
        <div>
          <h2>Informations de l'utilisateur</h2>
          <p>Adresse courriel: {user.email}</p>
          <p>Surnom: {user.username}</p>
          <p>Nom complet: {user.fullName}</p>

          <h2>Modifier les informations</h2>
          <input
            type="text"
            placeholder="Nouveau surnom"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <button onClick={() => handleUpdateUser(user)}>Mettre à jour</button>
          <p>{updateError}</p>

          <h2>Supprimer le compte</h2>
          <button onClick={handleDeleteUser}>Supprimer le compte</button>
          <p>{deleteError}</p>
        </div>
      )}
    </div>
  );
}

export default CurrentUser;
