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
    <nav className="nav-extended" style={navStyle}>
    <div className="nav-content">
      <ul className="tabs tabs-transparent" style={centerTabs}>
        <li className="tab"><a href="#test1">Home</a></li>
        <li className="tab"><a className="active" href="#test2">Guest Notes</a></li>
        <li className="tab"><a href="#test4">Add My Gift</a></li>
      </ul>
    </div>
  </nav>
  );
};

export default Navbar;