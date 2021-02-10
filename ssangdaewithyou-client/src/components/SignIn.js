import React, { useState } from 'react';

function SignIn({ handleIsSignUp, handleIsLogin, handleIsKakao, handleIsGuest }) {
  // ! api 문서가 잘못된 듯. userid => username 인듯
  const [userid, setUserid] = useState('')
  const [password, setPassword] = useState('')
  
  // ! reference. hooks 쓰니깐 이게 안되는 게 좀 아쉽네. 방법은 있을 테니 시간날 때 알아보자.
  // const handleInputValue = (key) => (e) => {
  //   this.setState({ [key]: e.target.value });
  // };
  const handleInputValueUserid = (e) => {
    setUserid(e.target.value);
  };

  const handleInputValuePassword = (e) => {
    setPassword(e.target.value)
  };

  const handleLoginSsangDaeWithYou = () => {
    handleIsLogin();
    console.log('SsangDae 로그인')
  }

  const handleLoginKakao = () => {
    handleIsLogin();
    handleIsKakao();
    console.log('Kakao 로그인')
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

  // const handleLoginKakao = () => {
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
      <input type="text" placeholder="아이디" className="modalUserId" onChange={handleInputValueUserid}/>
      <input type="password" placeholder="비밀번호" className="modalUserPassWord" onChange={handleInputValuePassword} />
      <div className="modalLogin" onClick={handleLoginSsangDaeWithYou}>
        <div>Log in</div>
      </div>
      <img src="../img/kakao.png" className="modalKakao" alt="profile" onClick={handleLoginKakao}/>
      <div className="modalSignUp" onClick={handleIsSignUp}>회원가입</div>
      <div className="modalNonMember" onClick={handleIsGuest}>비회원으로 계속하기</div>
    </div>
  )
}

export default SignIn;