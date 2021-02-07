import React from 'react';

// !
import { Link } from 'react-router-dom';

function ListDetail({ cartItems }) {

  return (
    <div id="listDetail">
      <div id="detail">
        <div id="detailPlaceName"> 
          <div>장소명 :</div>
          <div id="placeEl">placeName</div>
        </div>
        <div id="detailPlaceDetail">
          <div>요약 : </div>
          <div id="placeEl">comment</div>
        </div>
        <div id="detailUserId">
          <div>정복자 : </div>
          <div id="placeEl">userId</div>
        </div>
      </div>
      <div id="likeOrDislike">
        <div id="like">좋아요</div>
        <div id="disLike">싫어요</div>
      </div>
      <div id="message">
        <div id="userMessage">
          <div id="userId">Id</div>
          <div id="userText">댓글 내용</div>
          <div id="forAlignButton">
            <button id="messageButton">등록</button>
          </div>
        </div>
        <div id="questList">
          <div id="idOrDate">
            <div className="guestId">Id</div>
            <div className="guestDate">2021-02-04 21:50:20</div>
          </div>
          <div className="guestText">댓글 내용</div>
        </div>
      </div>
    </div>
  );
}

export default ListDetail;