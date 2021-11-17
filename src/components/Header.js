import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header({ title }) {
  let navigate = useNavigate();
  return (
    <header className="Header">
      <h1 onClick={() => navigate('/')}>{title}</h1>
    </header>
  );
}

export default Header;
