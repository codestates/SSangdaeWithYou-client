import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {

  return (
    <div id="nav">
      <div id="navLeft"></div>
      <div id="navCenter">
        <img src="../img/ssangDaeLogo.jpeg" id="logo" />
      </div>
      <div id="navRight">
        <div id="navMap" className="navContents">
          <Link to="/"><img src="../img/map.jpg" id="mapImg" /></Link>
        </div>
        <div id="navMypage" className="navContents">
        <Link to="/user/info"><img src="../img/mypage.jpg" id="mypageImg" /></Link>
        </div>
        <div className="navContents" >Login /Logout</div>
      </div>
    </div>
  );
}

export default Nav;