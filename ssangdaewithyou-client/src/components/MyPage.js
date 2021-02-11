import React from 'react';
import { useHistory } from 'react-router-dom';

function MyPage({ userInfo, isKakao }) {
  const history = useHistory()

  const handlePasswordChange = () => {
    // !  비밀번호 변경 관련 안된 거 많음
    alert('비밀번호를 변경해줄 수 없다.')
  }

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
          {isKakao ? (
            <div>{console.log(isKakao)}</div>
          ) : (
            <div id="forCenter">
              <div id="editPassword" onClick={handlePasswordChange}>
                <div className="passwordText">Change password</div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default MyPage;