import React from 'react';

// !
import { Link } from 'react-router-dom';

function Nav({ cartItems }) {

  return (
    <div id="nav">
      <div id="navLeft"></div>
      <div id="navCenter">
        <img src="ssangDaeLogo.jpeg" />
        {/* <img src="../ssangDaeLogo.jpeg" style="max-height:100%; width:auto;"/> */}
      </div>
      <div id="navRight">
        <div className="navContents">지도</div>
        <div className="navContents">My Page</div>
        <div className="navContents">Login /Logout</div>
      </div>
    </div>
  );
}

// ! reference
// function Nav({ cartItems }) {

//   return (
//     <div id="nav-body">
//       <span id="title">
//         <img id="logo" src="../logo.png" alt="logo" />
//         <span id="name">CMarket</span>
//       </span>
//       <div id="menu">
//         <Link to="/">상품리스트</Link>
//         <Link to="/shoppingcart">
//           장바구니<span id="nav-item-counter">{cartItems.length}</span>
//         </Link>
//       </div>
//     </div>
//   );
// }

export default Nav;