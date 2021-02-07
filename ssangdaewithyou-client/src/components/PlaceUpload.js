import React from 'react';

// !
import { Link } from 'react-router-dom';

function PlaceUpload({ cartItems }) {

  return (
    <div id="PlaceUpload">
      <div id="placeName" className="myPageContents">정복자가 Place에 지어준 이름</div>
      <div id="placeDetail" className="myPageContents">위치에 대한 부연 설명</div>
      <div id="forCenter">
        <div id="registerPlace" className="myPageContents">등록</div>
      </div>
    </div>
  );
}

export default PlaceUpload;