import React from 'react';

import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';

function Modal({ isSignUp, handleIsSignUp, handleIsLogin, handleIsKakao, handleIsGuest }) {

  return (
    <div>
      {isSignUp ? (
        <SignUp handleIsSignUp={handleIsSignUp} /> 
      ) : (
        <SignIn handleIsSignUp={handleIsSignUp} handleIsLogin={handleIsLogin} handleIsKakao={handleIsKakao} handleIsGuest={handleIsGuest}/>
      )}
    </div>
  );
}

export default Modal;