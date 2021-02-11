import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SignIn({ handleIsSignUp, handleIsLogin, handleIsKakao, handleIsGuest }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  // ! Kakao 로그인 관련 ---------------------------------------------------------------

  const KAKAO_LOGIN_URL = 'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=41920d05f8b54e037d992edc47bb99c2&redirect_uri=http://localhost:3000'

  const socialLoginHandler = () => {
    window.location.assign(KAKAO_LOGIN_URL)
  }

  useEffect(() => {
    const url = new URL(window.location.href)
    const authorizationCode = url.searchParams.get('code')
    if (authorizationCode) {
      // authorization server로부터 클라이언트로 리디렉션된 경우, authorization code가 함께 전달됩니다.
      // ex) http://localhost:3000/?code=5e52fb85d6a1ed46a51f
      handleLoginKakao(authorizationCode)
    }
  })

  const handleLoginKakao = (authorizationCode) => {
    axios
      .post("https://ssangdae.gq/callback", {
        authorizationCode: authorizationCode
      })
      .then((res) => {
        console.log('kakao login res :', res)
        handleIsLogin();
        handleIsKakao();
      })

      console.log('Kakao 로그인')
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
        console.log(res);
        handleIsLogin();
      })
      .catch((error) => {
        console.log(error.response)
        console.log(error.request)
        console.log(error.message)
      })

    console.log('SsangDae 로그인')
  }

  // ! reference
  // const handleLoginSsangDaeWithYou = () => {
  //   // TODO : 서버에 로그인 요청 후 처리하세요.
  //   // TODO : 이메일 및 비밀번호를 입력하지 않았을 경우 에러를 표시해야 합니다.
  //   const { handleResponseSuccess } = this.props;
  //   const { email, password } = this.state;

  //   if (!email || !password) {
  //     this.setState({
  //       errorMessage: "이메일과 비밀번호를 입력하세요"
  //     });
  //     return;
  //   }
  //   else {
  //     this.setState({
  //       errorMessage: ""
  //     });
  //   }

  //   return axios
  //     .post("https://localhost:4000/signin", {
  //       email: email,
  //       password: password,
  //     })
  //     .then(handleResponseSuccess)
  //     .catch((err) => {
  //       alert("Login failed");
  //       console.log(err);
  //     });
  // };

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