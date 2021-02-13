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
        // ! asdf
        handleIsSignUp();
        axios
          .post("https://ssangdae.gq/user/signup", {
            username: username,
            password: password,
            email: email,
            nickname: nickname
          })
          .then((res) => {
            alert('회원가입이 완료되었습니다! 로그인을 해주세요.');
            // console.log(res)
          })
          .catch((err) => {
            // ! asdf
            alert('기입하신 이메일 또는 아이디로 이미 회원가입이 되어있습니다. 다른 이메일 또는 아이디를 기입해주세요!');
            console.log(err)
          });
      }
    } else {
      return;
    }
  }

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