import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <h1>아이러브스쿨</h1>
      </Link>
    </header>
  );
}

export default Header;
