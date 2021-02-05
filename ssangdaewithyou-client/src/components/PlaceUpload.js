import React from 'react';

// !
import { Link } from 'react-router-dom';

function PlaceUpload({ cartItems }) {

  return (
    <div id="PlaceUpload">
      PlaceUpload
      <div id="placeName" className="myPageContents">정복자가 Place에 지어준 이름</div>
      <div id="placeDetail" className="myPageContents">위치에 대한 부연 설명</div>
      <div id="forCenter">
        <div id="registerPlace" className="myPageContents">등록</div>
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

export default PlaceUpload;