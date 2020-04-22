import React from 'react';

const PageHeader = ({ headerText }) => {
  const headerStyle = {
    textAlign: 'center',
    fontFamily: 'Marcellus, serif',
    marginTop: '40px',
    marginBottom: '30px'
  };
  return (
    <h4 style={headerStyle}>{headerText}</h4>
  );
};

export default PageHeader;