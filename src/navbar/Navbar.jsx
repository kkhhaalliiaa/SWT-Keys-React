import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../../public/img/logo.jpeg'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <ul className="navbar">
        <li className="logo">
          <Link to="/"><img src={logo} alt="Logo" /></Link>
        </li>
        <input
          type="checkbox"
          id="check"
          checked={menuOpen}
          onChange={toggleMenu}
          style={{ display: 'none' }}
        />
        <div className={`menu ${menuOpen ? 'open' : ''}`}>
          <li className="Navli" ><Link to="/">Home</Link></li>
          <li className='Navli' ><Link to="/products">Products</Link></li>
          <li className='Navli' ><Link to="/news">News</Link></li>
          <li className='Navli' ><Link to="/contact">Contact</Link></li>
          <label htmlFor="check" className="open-menu" onClick={() => setMenuOpen(true)}>
          <FontAwesomeIcon icon={faTimes} /></label>
        </div>
        <label htmlFor="check" className="close-menu" onClick={() => setMenuOpen(false)}>
        <FontAwesomeIcon icon={faBars} /></label>
      </ul>
    </nav>
  );
};

export default Navbar;
