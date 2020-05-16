import React from 'react';

export const Badge = ({ color, caption }) => {
  const badgeStyle = {
    backgroundColor: `${color}`,
    color: 'white',
    fontSize: '0.8rem',
    fontWeight: '300',
    borderRadius: '2px',
    padding: '1px 6px 3px',
    margin: '2px 4px',
    display: 'inline-block'
  };
  return (
    <span style={badgeStyle}>
      {caption}
    </span>
  );
};

export const HoneymoonBadge = () => {
  return <Badge color='#ffbb33' caption='Honeymoon' />
};

export const LoanBadge = () => {
  return <Badge color='#bf88f6' caption='Student Loan Debt' />;
};

export const HomeBadge = () => {
  return <Badge color='#2fb6b6 ' caption='Our First Home' />;
};

export const TherapyBadge = () => {
  return <Badge color='#871d71' caption='Therapy for Our Future Kids' />;
};