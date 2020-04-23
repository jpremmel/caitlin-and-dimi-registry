import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const navStyle = {
    backgroundColor: '#803370'
  };
  const centerTabs = {
    display: 'flex',
    justifyContent: 'center'
  };

  return (
    <nav className='nav-extended' style={navStyle}>
    <div className='nav-content'>
      <ul className='tabs tabs-transparent' style={centerTabs}>
        <li className='tab'><Link to='/'>Home</Link></li>
        <li className='tab'><Link to='/notes'>Guest Notes</Link></li>
        <li className='tab'><Link to='/gift-form'>Add My Gift</Link></li>
      </ul>
    </div>
  </nav>
  );
};

export default Navbar;