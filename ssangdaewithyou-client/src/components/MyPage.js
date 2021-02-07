import React from 'react';

// !
import { Link } from 'react-router-dom';

function MyPage({ cartItems }) {

  return (
    <div id="myPage">
      <div id="userName" className="myPageContents">userName</div>
      <div id="email" className="myPageContents">email</div>
      <div id="nickName" className="myPageContents">nickName</div>
      <div id="forCenter">
          <div id="editPassword" className="myPageContents">비밀번호 수정</div>
      </div>
    </div>
  );
}

export default MyPage;