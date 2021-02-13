import React from 'react';
import { useHistory } from 'react-router-dom';

function MyPage({ userInfo }) {
  const history = useHistory()

  return (
    <div>
      {!userInfo ? (
        <div>
          {history.push("/")}
        </div>
      ) : (
        <div id="myPage">
          <div id="userName">
            <div className="userForm">
              <img src="../img/mypage.jpg" id="userNameImg" alt="profile"/>
              <div className="userEl">ID</div>
            </div>
            <div className="userInput">{userInfo.username}</div>
          </div>
          <div id="email">
            <div className="userForm">
              <img src="../img/email.jpg" id="userNameImg" alt="profile"/>
              <div className="userEl">E-mail</div>
            </div>
            <div className="userInput">{userInfo.email}</div>
          </div>
          <div id="nickName">
            <div className="userForm">
              <img src="../img/nickName.jpg" id="userNameImg" alt="profile"/>
              <div className="userEl">Nick-name</div>
            </div>
            <div className="userInput">{userInfo.nickname}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyPage;