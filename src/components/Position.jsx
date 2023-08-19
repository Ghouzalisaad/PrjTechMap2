import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl = 'https://api.tecmap-project.com'; 

function Position() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [updatePositionError, setUpdatePositionError] = useState('');
  const [friendsPositions, setFriendsPositions] = useState([]);

  const fetchFriendsPositions = async () => {
    try {
      const response = await axios.get(`${apiUrl}/position/friends`);
      setFriendsPositions(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des positions des amis', error);
    }
  };

  useEffect(() => {
    fetchFriendsPositions();
  }, []);

  const handleUpdatePosition = async () => {
    try {
      await axios.put(`${apiUrl}/position`, {
        latitude,
        longitude,
      });
      fetchFriendsPositions();
    } catch (error) {
      setUpdatePositionError('Une erreur s\'est produite lors de la mise à jour de la position.');
    }
  };

  return (
    <div>
      <h2>Mettre à jour la position</h2>
      <input
        type="number"
        placeholder="Latitude"
        value={latitude}
        onChange={(e) => setLatitude(e.target.value)}
      />
      <input
        type="number"
        placeholder="Longitude"
        value={longitude}
        onChange={(e) => setLongitude(e.target.value)}
      />
      <button onClick={handleUpdatePosition}>Mettre à jour</button>
      <p>{updatePositionError}</p>

      <h2>Positions des amis</h2>
      <ul>
        {friendsPositions.map((friendPosition) => (
          <li key={friendPosition.id}>
            {friendPosition.username}: Latitude - {friendPosition.latitude}, Longitude - {friendPosition.longitude}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Position;
