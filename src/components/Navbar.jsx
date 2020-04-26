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
        <li className='tab'><Link to='/'>Our Registry</Link></li>
        <li className='tab'><Link to='/gift-form'>Add My Gift</Link></li>
        <li className='tab'><Link to='/notes'>Guest Notes</Link></li>
        <li className='tab'>
          <a href='https://withjoy.com/caitlin-and-dimitar' target='_blank' rel='noopener noreferrer'>
            Wedding Site
          </a>
        </li>
        <li className='tab'>
          <a href='https://github.com/jpremmel/caitlin-and-dimi-registry' target='_blank' rel='noopener noreferrer'>
            Source Code
          </a>
        </li>
      </ul>
    </div>
  </nav>
  );
};

export default Navbar;