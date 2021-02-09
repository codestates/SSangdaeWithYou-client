import React from 'react';

function MyPage() {

  return (
    <div id="myPage">
      <div id="userName">
        <div className="userForm">
          <img src="../img/mypage.jpg" id="userNameImg" alt="profile"/>
          <div className="userEl">ID</div>
        </div>
        <div className="userInput">userName</div>
      </div>
      <div id="email">
        <div className="userForm">
          <img src="../img/email.jpg" id="userNameImg" alt="profile"/>
          <div className="userEl">E-mail</div>
        </div>
        <div className="userInput">userEmail</div>
      </div>
      <div id="nickName">
        <div className="userForm">
          <img src="../img/nickName.jpg" id="userNameImg" alt="profile"/>
          <div className="userEl">Nick-name</div>
        </div>
        <div className="userInput">userNickName</div>
      </div>
      <div id="forCenter">
        <div id="editPassword">
          <div className="passwordText">Change password</div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;