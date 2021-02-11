import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SignUp({ handleIsSignUp }) {
  // 상태관리로 기본 true를 주고 
  // 어떠한 조건이 부합하면 true, 부합하지 않으면 false
  const [checkId, setCheckId] = useState(true);
  const [checkPassword, setCheckPassword] = useState(true);
  const [checkEm, setCheckEm] = useState(true);
  const [checkNn, setCheckNn] = useState(true);

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('');
  const [email, setEmail] = useState('')
  const [nickname, setNickname] = useState('')
  
  useEffect(() => {
    handleCheckPassword();
    handleCheckId();
    handleCheckEmail();
    handleCheckNickName();
  })

  const handleInputValueUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleInputValuePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleInputValueRePassword = (e) => {
    setRePassword(e.target.value);
  };

  const handleCheckId = () => {
    if (username.length < 3 || username.length > 10) {
      setCheckId(false);
    } else {
      setCheckId(true);
    }
  }

  const handleCheckPassword = () => {
    if (password !== rePassword) {
      setCheckPassword(false);
    } else {
      setCheckPassword(true);
    }
  };

  const handleCheckEmail = () => {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)) {
      setCheckEm(true);
    } else {
      setCheckEm(false);
    }
  }

  const handleCheckNickName = () => {
    if (nickname.length > 0 && nickname.length < 10) {
      setCheckNn(true);
    } else {
      setCheckNn(false);
    }
  };

  const handleInputValueEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleInputValueNickname = (e) => {
    setNickname(e.target.value)
  };

 

  const handleSignUp = () => {
    if (username !== '' || password !== '' || rePassword !== '' || email !== '' || nickname !== '') {
      if (!checkId || !checkPassword || !checkEm || !checkNn) {
        return;
      } else {
        handleIsSignUp();
        // ! 회원가입 요청을 axios로 날리자. 종훈님 여기에요!
        axios
          .post("https://ssangdae.gq/user/signup", {
            username: username,
            password: password,
            email: email,
            nickname: nickname
          })
          .then((res) => {
            alert('회원가입이 완료되었습니다! 로그인을 해주세요.');
            console.log(res)
          })
          .catch((err) => {
            // ! zxcvzxcv
            alert('회원가입에 실패햐셨습니다. 이미 가입한 이메일일 수가 있어요ㅠㅠ 우리도 이유는 잘 몰라요ㅠㅠ');
            console.log(err)
          });
      }
    } else {
      return;
    }
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
      {checkId ? <div></div>:
        <div className="checkPw">아이디는 3자 이상 10자 이하입니다.</div>
      }
      <input type="password" placeholder="비밀번호" className="SignUp" onChange={handleInputValuePassword}/>
      <input type="password" placeholder="비밀번호 확인" className="SignUp" onChange={handleInputValuePassword, handleInputValueRePassword}/>
      {checkPassword ? 
        <div></div>
      : 
        <div className="checkPw">비밀번호가 맞지 않습니다.</div>
      }
      <input type="email" placeholder="e-mail" className="SignUp" onChange={handleInputValueEmail}/>
      {checkEm ? 
        <div></div>
      : 
        <div className="checkPw">정확한 이메일 형식이 아닙니다.</div>
      } 
      <input type="text" placeholder="닉네임" className="SignUp" onChange={handleInputValueNickname}/>
      {checkNn ? 
        <div></div>
      : 
        <div className="checkPw">닉네임은 10자 이하입니다.</div>
      }
      <div className="SignUpButton" onClick={() => {
        handleSignUp();
      }}>
        <div>회원가입</div>
      </div>
    </div>
  )
}

export default SignUp;