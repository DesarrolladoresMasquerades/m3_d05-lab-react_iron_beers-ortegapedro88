import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-500 p-6">
      <Link to="/">
        <span className="flex justify-center">
          <i className="fas fa-home fa-2x" style={{ color: 'white' }}></i>
        </span>
      </Link>
    </header>
  );
}

export default Header;
