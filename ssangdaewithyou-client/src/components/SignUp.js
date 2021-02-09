import React from 'react';
import { useState } from 'react';

function SignUp() {
  // 상태관리로 기본 true를 주고 
  // 어떠한 조건이 부합하면 true, 부합하지 않으면 false
  // false가 되면 display: none; 이였던 유효성 검사를 block으로.

  return (
    <div id="modalFrame">
      <div className="modalLogo forSignupLogo">
        <img src="../img/ModalLogo.jpg" alt="profile" className="modallogoImg" />
        <div className="modalLogoText1">쌍대는 너랑</div>
        <div className="modalLogoText2">(돗대는 나만)</div>
      </div>
      <input type="text" placeholder="아이디" className="SignUp"/>
      {/* <div className="dfdf">아이디가 정확하지 않습니다.</div>   */}
      <input type="password" placeholder="비밀번호" className="SignUp"/>
      <input type="password" placeholder="비밀번호 확인" className="SignUp"/>
      <input type="text" placeholder="e-mail" className="SignUp"/>
      <input type="text" placeholder="닉네임" className="SignUp"/>
      <div className="SignUpButton">
        <div>회원가입</div>
      </div>
    </div>
  )
}

export default SignUp;