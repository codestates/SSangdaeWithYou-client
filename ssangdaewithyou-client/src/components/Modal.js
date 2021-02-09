import React from 'react';
import { useState } from "react";

import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';

function Modal() {
  const [isSignup, setIssignup] = useState(false);
  return (
    <div>
      {isSignup ? (
        <SignUp/> 
      ) : (
        <SignIn/>
      )}
    </div>
  );
}

export default Modal;