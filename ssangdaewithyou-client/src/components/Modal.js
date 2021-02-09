import React from 'react';

import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';

function Modal({ isSignUp, handleIsSignUp, handleIsLogin, handleIsKakao }) {

  return (
    <div>
      {isSignUp ? (
        <SignUp handleIsSignUp={handleIsSignUp} /> 
      ) : (
        <SignIn handleIsSignUp={handleIsSignUp} handleIsLogin={handleIsLogin} handleIsKakao={handleIsKakao}/>
      )}
    </div>
  );
}

export default Modal;