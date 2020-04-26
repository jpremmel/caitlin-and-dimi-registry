import React from 'react';

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
        <li className='tab'><a href='#registry'>Our Registry</a></li>
        <li className='tab'><a href='#form'>Add My Gift</a></li>
        <li className='tab'><a href='#notes'>Guest Notes</a></li>
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