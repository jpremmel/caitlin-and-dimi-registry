import React from 'react';
import { HoneymoonBadge, LoanBadge, HomeBadge, TherapyBadge } from './Badges';

const NoteCard = ({ color, gift }) => {

  console.log(gift);

  let honeymoonBadge;
  let loanBadge;
  let homeBadge;
  let therapyBadge;

  if (gift && gift.funds && gift.funds.honeymoon)
    honeymoonBadge = <HoneymoonBadge />;

  if (gift && gift.funds && gift.funds.loan)
    loanBadge = <LoanBadge />;

  if (gift && gift.funds && gift.funds.home)
    homeBadge = <HomeBadge />;

  if (gift && gift.funds && gift.funds.therapy)
    therapyBadge = <TherapyBadge />;

  const badgesStyle = {
    marginBottom: '15px',
    textAlign: 'center'
  };

  return (
    <div className='card' style={{ backgroundColor: color}}>
      <div className='card-content'>
        <p>{gift.note}</p>
        <span className='card-title' style={{ textAlign: 'right'}}>- {gift.name}</span>
        <div style={badgesStyle}>
          {honeymoonBadge}
          {loanBadge}
          {homeBadge}
          {therapyBadge}
        </div>
      </div>
    </div>
  );
};

export default NoteCard;