import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

function Nav({ handleIsLogin, isLogin, handleIsGuest, isModal }) {
  const history = useHistory()
  
  return (
    <div id="nav">
      <div id="navLeft"></div>
      <div id="navCenter">
        <Link to="/"><img src="../img/ssangDaeLogo.jpeg" id="logo" alt="profile"/></Link>
      </div>
      <div id="navRight">
        <div id="navMap" className="navContents">
          <Link to="/"><img src="../img/map.jpg" id="mapImg" alt="profile"/></Link>
        </div>
        <div id="navMypage" className="navContents">
          <img src="../img/mypage.jpg" id="mypageImg" alt="profile" onClick={() => {
            if (isLogin) {
              history.push("/user/info")
            } else {
              alert('로그인을 해주세요.')
            }
          }}/>
        </div>
        <div className="navContents">
          {isLogin? (
            <div id="navLog" onClick={() => {
              alert('로그아웃을 하셨습니다.')
              handleIsLogin()
              history.push("/")
              axios
                .post('https://ssangdae.gq/user/signout')
                .then((res) => {
                  console.log('logout res : ', res)
                })
                .catch((error) => {
                  console.log(error.response)
                  console.log(error.request)
                  console.log(error.message)
                })
            }}>Logout</div>
          ) : (
            isModal ? (
              <div id="navLog" onClick={() => {
                alert('로그인을 해주세요.');
              }}></div>
            ) : (
              <div id="navLog" onClick={() => {
                handleIsGuest()
                history.push("/")
              }}>Login</div>
            )
          )}

        </div>
      </div>
    </div>
  );
}

export default Nav;