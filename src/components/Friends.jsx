import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl = 'https://api.joeleprof.com/tec-map'; 

function Friends() {
  const [friendsList, setFriendsList] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [addFriendError, setAddFriendError] = useState('');
  const [deleteFriendError, setDeleteFriendError] = useState('');

  const fetchFriendsList = async () => {
    try {
      const response = await axios.get(`${apiUrl}/friends`);
      setFriendsList(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération de la liste d\'amis', error);
    }
  };

  const fetchUsersList = async () => {
    try {
      const response = await axios.get(`${apiUrl}/users`);
      setUsersList(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération de la liste d\'utilisateurs', error);
    }
  };

  useEffect(() => {
    fetchFriendsList();
    fetchUsersList();
  }, []);

  const handleAddFriend = async (userId) => {
    try {
      await axios.post(`${apiUrl}/friends/${userId}`);
      fetchFriendsList();
    } catch (error) {
      setAddFriendError('Une erreur s\'est produite lors de l\'ajout de l\'ami.');
    }
  };

  const handleDeleteFriend = async (userId) => {
    try {
      await axios.delete(`${apiUrl}/friends/${userId}`);
      fetchFriendsList();
    } catch (error) {
      setDeleteFriendError('Une erreur s\'est produite lors de la suppression de l\'ami.');
    }
  };

  return (
    <div>
      <h2>Liste d'amis</h2>
      <ul>
        {friendsList.map((friend) => (
          <li key={friend.id}>
            {friend.username}
            <button onClick={() => handleDeleteFriend(friend.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <h2>Ajouter un ami</h2>
      <ul>
        {usersList.map((user) => (
          <li key={user.id}>
            {user.username}
            <button onClick={() => handleAddFriend(user.id)}>Ajouter</button>
          </li>
        ))}
      </ul>
      <p>{addFriendError}</p>
      <p>{deleteFriendError}</p>
    </div>
  );
}

export default Friends;
