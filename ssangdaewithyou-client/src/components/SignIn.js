import React from 'react';

function SignIn() {
  return (
    <div id="modalFrame">
      <div className="modalLogo">
        <img src="../img/ModalLogo.jpg" id="ModallogoImg" />
        <div className="modalLogoText1">쌍대는 너랑</div>
        <div className="modalLogoText2">(돗대는 나만)</div>
      </div>
      <input type="text" placeholder="아이디" className="modalUserId"/>
      <input type="password" placeholder="비밀번호" className="modalUserPassWord"/>
      <div className="modalLogin">
        <div>Log in</div>
      </div>
      <img src="../img/kakao.png" className="modalKakao"/>
      <div className="modalSignUp">회원가입</div>
      <div className="modalNonMember">비회원으로 계속하기</div>
    </div>
  )
}

export default SignIn;