import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SignIn({ handleIsSignUp, handleIsLogin, handleIsKakao, handleIsGuest }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [count, setCount] = useState(0)

  // ! Kakao 로그인 관련 ---------------------------------------------------------------

  const KAKAO_LOGIN_URL = 'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=41920d05f8b54e037d992edc47bb99c2&redirect_uri=https://ssangdaewithyou.com/'

  const socialLoginHandler = () => {
    window.location.assign(KAKAO_LOGIN_URL)
  }

  useEffect(() => {
    if (count === 0) {
      const url = new URL(window.location.href)
      const authorizationCode = url.searchParams.get('code')
      if (authorizationCode) {
        handleLoginKakao(authorizationCode)
      }
      setCount(1)
    }
    // ! [count] 를 아래에 추가해줘도 될까?
  })

  const handleLoginKakao = (authorizationCode) => {
    axios
      .post("https://ssangdae.gq/callback", {
        authorizationCode: authorizationCode
      })
      .then((res) => {
        console.log('kakao login res : ', res)
        alert('카카오 로그인을 하셨습니다.')
        handleIsLogin();
        handleIsKakao();
      })
      .catch((error) => {
        alert('카카오 로그인에 실패하셨습니다.')
        console.log('error : ', error)
      })
  }
  // ! -------------------------------------------------------------------------------

  // ! reference. hooks 쓰니깐 이게 안되는 게 좀 아쉽네. 방법은 있을 테니 시간날 때 알아보자.
  // const handleInputValue = (key) => (e) => {
  //   this.setState({ [key]: e.target.value });
  // };
  const handleInputValueUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleInputValuePassword = (e) => {
    setPassword(e.target.value)
  };

  const handleLoginSsangDaeWithYou = () => {
    axios
      .post("https://ssangdae.gq/user/sign", {
        username: username,
        password: password
      })
      .then((res) => {
        console.log('ssangdae login res : ', res)
        handleIsLogin();
      })
      .catch((error) => {
        alert('로그인에 실패하셨습니다.')
        console.log('error : ', error)
      })
  }

  return (
    <div id="modalFrame">
      <div className="modalLogo">
        <img src="../img/ModalLogo.jpg" alt="profile" className="modallogoImg" />
        <div className="modalLogoText1">쌍대는 너랑</div>
        <div className="modalLogoText2">(돗대는 나만)</div>
      </div>
      <input type="text" placeholder="아이디" className="modalUserId" onChange={handleInputValueUsername}/>
      <input type="password" placeholder="비밀번호" className="modalUserPassWord" onChange={handleInputValuePassword} />
      <div className="modalLogin" onClick={handleLoginSsangDaeWithYou}>
        <div>Log in</div>
      </div>
      <img src="../img/kakao.png" className="modalKakao" alt="profile" onClick={socialLoginHandler}/>
      <div className="modalSignUp" onClick={handleIsSignUp}>회원가입</div>
      <div className="modalNonMember" onClick={handleIsGuest}>비회원으로 계속하기</div>
    </div>
  )
}

export default SignIn;