import React from 'react';
import JoyLogo from '../images/JoyLogo.png';

const Footer = () => {
  const joyLogoStyle = {
    height: '40px',
    paddingTop: '14px'
  };
  const codeLogoStyle = {
    color: '#313335',
    paddingTop: '7px',
    fontSize: '35px'
  };
  return (
    <footer className='footer-copyright' style={{ backgroundColor: '#f2ebfa', padding: '0' }}>
      <div className='container'>
        <div className='row' style={{ margin: '0' }}>
          <div className='col s1'>
            <a href='https://withjoy.com/caitlin-and-dimitar' target='_blank' rel='noopener noreferrer'>
              <img src={JoyLogo} style={joyLogoStyle} />
            </a>
          </div>
          <div className='col s1 offset-s10'>
            <a href='https://github.com/jpremmel/caitlin-and-dimi-registry' target='_blank' rel='noopener noreferrer'>
              <i className='material-icons' style={codeLogoStyle}>code</i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;