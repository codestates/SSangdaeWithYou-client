import React from 'react';

// !
import { Link } from 'react-router-dom';

function Nav({ cartItems }) {

  return (
    <div id="nav">
      <div id="navLeft"></div>
      <div id="navCenter">
        <img src="../img/ssangDaeLogo.jpeg" id="logo" />
      </div>
      <div id="navRight">
        <div id="navMap" className="navContents">
          <img src="../img/map.jpg" id="mapImg" />
        </div>
        <div id="navMypage" className="navContents">
          <img src="../img/mypage.jpg" id="mypageImg" />
        </div>
        <div className="navContents" >Login /Logout</div>
      </div>
    </div>
  );
}

export default Nav;