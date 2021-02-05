import React from 'react';

// !
import { Link } from 'react-router-dom';

function Nav({ cartItems }) {

  return (
    <div id="nav">
      <div id="navLeft"></div>
      <div id="navCenter">
        <img src="../ssangDaeLogo.jpeg" alt="logo" />
        {/* <img src="../ssangDaeLogo.jpeg" style="max-height:100%; width:auto;"/> */}
      </div>
      <div id="navRight">
        <Link to="/" className="navContents">지도</Link>
        {/* <div className="navContents">지도</div> */}
        <Link to="/user/info" className="navContents">My Page</Link>
        {/* <div className="navContents">My Page</div> */}
        <div className="navContents">Login /Logout</div>
      </div>
    </div>
  );
}

export default Nav;