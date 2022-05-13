import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="nav-links">
      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>

        <li>
          <Link to="/about">About Page</Link>
        </li>

        <li>
          <Link to="/people">People Page</Link>
        </li>

      </ul>
    </nav>
  )
};

export default Navbar;
