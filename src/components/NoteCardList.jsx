import React from 'react';
import { connect, useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const NoteCardList = (props) => {

  useFirestoreConnect('gifts');
  const giftList = useSelector(state => state.firestore.data['gifts']);
  //console.log(giftList);

  const lavendarBackground = {
    backgroundColor: '#e6d7f4'
  };
  const goldBackground = {
    backgroundColor: '#ffd480'
  };
  const tealBackground = {
    backgroundColor: '#a6e8e6'
  };
  return (
    <div className='container row'>
      <div className='col s12 m6 offset-m3'>

        <div className='card' style={lavendarBackground}>
          <div className='card-content'>
            <p>I'm so excited for Dimi to be part of the family. All my money went to therapy for your future kids - they're definitely gonna need it!! Love you both so much and I'm so excited for your special day.</p>
            <span className='card-title' style={{ textAlign: 'right'}}>- Jacqueline</span>
          </div>
        </div>

        <div className='card' style={goldBackground}>
          <div className='card-content'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <span className='card-title' style={{ textAlign: 'right'}}>- Family Member</span>
          </div>
        </div>

        <div className='card' style={tealBackground}>
          <div className='card-content'>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <span className='card-title' style={{ textAlign: 'right'}}>- Your Friend</span>
          </div>
        </div>

      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
    gifts: state.gifts
});

export default compose(
  connect(mapStateToProps)
)(NoteCardList);