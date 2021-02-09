import React from 'react';

function SignUp() {
  return (
    <div id="modalFrame">
      <div className="modalLogo forSignupLogo">
        <img src="../img/ModalLogo.jpg" alt="profile" className="modallogoImg" />
        <div className="modalLogoText1">쌍대는 너랑</div>
        <div className="modalLogoText2">(돗대는 나만)</div>
      </div>
      <input type="text" placeholder="아이디" className="SignUp"/>  
      <input type="text" placeholder="비밀번호" className="SignUp"/>
      <input type="text" placeholder="e-mail" className="SignUp"/>
      <input type="text" placeholder="닉네임" className="SignUp"/>
      <div className="SignUpButton">
        <div>회원가입</div>
      </div>
    </div>
  )
}

export default SignUp;