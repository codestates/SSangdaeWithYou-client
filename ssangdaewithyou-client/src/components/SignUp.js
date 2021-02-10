import React, { useState } from 'react';

function SignUp({ handleIsSignUp }) {
  // 상태관리로 기본 true를 주고 
  // 어떠한 조건이 부합하면 true, 부합하지 않으면 false
  const [checkId, setCheckId] = useState(true);
  const [checkPw, setCheckPw] = useState(true);
  const [checkEm, setCheckEm] = useState(true);

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [nickname, setNickname] = useState('')

  // id 확인을 위한 변수
  let preId = '';
  // 비밀번호 확인을 위한 변수
  let prePw = '';


  const handleInputValueUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleInputValuePassword = (e) => {
    setPassword(e.target.value);
    prePw = e.target.value;
  };

  const handleInputValueRePassword = (e) => {
    if(e.target.value === prePw) {
      setCheckPw(true);
    } else {
      setCheckPw(false);
    }
  };

  const handleInputValueEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleInputValueNickname = (e) => {
    setNickname(e.target.value)
  };

  const handleSignUp = () => {

  }
  // ! reference
  // const handleSignup = () => {
  //   // TODO : 서버에 회원가입 요청 후 로그인 페이지로 이동 하세요.
  //   //        로그인 페이지로 이동시, 다음 코드를 이용하세요.
  //   //        this.props.history.push("/");
  //   //
  //   // TODO : 모든 항목을 입력하지 않았을 경우 에러를 표시해야 합니다.
  //   const { email, password, mobile, username } = this.state;
  //   if (!email || !password || !mobile || !username) {
  //     this.setState({
  //       errorMessage: "모든 항목은 필수입니다"
  //     });
  //     return;
  //   }
  //   else {
  //     this.setState({
  //       errorMessage: ""
  //     });
  //   }

  //   axios
  //     .post("https://localhost:4000/signup", {
  //       email: email,
  //       password: password,
  //       username: username,
  //       mobile: mobile,
  //     })
  //     .then((res) => {
  //       this.props.history.push("/");
  //     })
  //     .catch((err) => console.log(err));
  // }

  return (
    <div id="modalFrame">
      <div className="modalLogo forSignupLogo">
        <img src="../img/ModalLogo.jpg" alt="profile" className="modallogoImg" />
        <div className="modalLogoText1">쌍대는 너랑</div>
        <div className="modalLogoText2">(돗대는 나만)</div>
      </div>
      <input type="text" placeholder="아이디" className="SignUp" onChange={handleInputValueUsername}/>  
      <input type="password" placeholder="비밀번호" className="SignUp" onChange={handleInputValuePassword}/>
      {checkPw ? 
        <input type="password" placeholder="비밀번호 확인" className="SignUp" onChange={handleInputValuePassword} onKeyUp={handleInputValueRePassword}/>
      : 
        <div className="checkPw">
          <input type="password" placeholder="비밀번호 확인" className="SignUp" onChange={handleInputValuePassword} onKeyUp={handleInputValueRePassword}/>
          <div className="checkPw">비밀번호가 맞지 않습니다.</div>
        </div>
      }
      <input type="email" placeholder="e-mail" className="SignUp" onChange={handleInputValueEmail}/>
      <input type="text" placeholder="닉네임" className="SignUp" onChange={handleInputValueNickname}/>
      <div className="SignUpButton" onClick={() => {
        handleSignUp();
        handleIsSignUp();
        // ! UI/UX 위해 회원가입 실패시에 대한 부분 추가하길
        alert('회원가입이 완료되었습니다! 로그인을 해주세요.')
      }}>
        <div>회원가입</div>
      </div>
    </div>
  )
}

export default SignUp;