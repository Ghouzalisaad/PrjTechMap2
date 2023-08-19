import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/register">Inscription</Link>
        </li>
        <li>
          <Link to="/friends">Gestion des amis</Link>
        </li>
        <li>
          <Link to="/position">Gestion de la position</Link>
        </li>
        <li>
          <Link to="/profile">Profil utilisateur</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
