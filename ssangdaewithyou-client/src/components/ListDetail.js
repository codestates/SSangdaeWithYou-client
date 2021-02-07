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
        <div id="detailUserId">
          <div>정복자 : </div>
          <div id="placeEl">userId</div>
        </div>
        <div id="detailPlaceDetail">
          <div>요약 : </div>
          <div id="placeEl">저는 이곳이 너무 좋아요 흐랄랄랄라 내용을 더 길게 써 보아요 흐랄랄랄라</div>
        </div>
      </div>
      <div id="likeOrDislike">
        <div id="like">
          <img src="../img/like.jpg" className="likeOrDislikeImg" />
          <div id="likeOrDislikeText">추천해요</div>
        </div>
        <div id="disLike">
          <img src="../img/dislike.jpg" className="likeOrDislikeImg" />
          <div id="likeOrDislikeText">비추해요</div>
        </div>
      </div>
      <div id="message">
        <div id="userMessage">
          <div id="userId">ID</div>
          <textarea placeholder="댓글 추가" id="userText"></textarea>
          <div className="forUserMessageTop"></div>
          <div id="forAlignButton">
            <div id="messageButton">
              <div id="messageButtonText">submit</div>
            </div>
          </div>
        </div>
        <div id="questList">
          <div id="idOrDate">
            <div className="guestId">대장아재</div>
            <div className="guestDate">2021-02-04 21:50:20</div>
          </div>
          <div className="guestText">꺄르르르르르르 우리 아재들 담배 맛이쪄요?</div>
        </div>
        <div id="questList">
          <div id="idOrDate">
            <div className="guestId">새끼아재</div>
            <div className="guestDate">2021-02-04 21:50:20</div>
          </div>
          <div className="guestText">끼릭끼릭 츄릅츄릅 햘딱햘딱</div>
        </div>
        <div id="questList">
          <div id="idOrDate">
            <div className="guestId">둘째아재</div>
            <div className="guestDate">2021-02-04 21:50:20</div>
          </div>
          <div className="guestText">저는 담배를 안피워요. 저는 두줄 이상을 써야하는 임무가 있답니다. 아핳아핳 호로로로로롤로롤</div>
        </div>
        <div id="questList">
          <div id="idOrDate">
            <div className="guestId">중간아재</div>
            <div className="guestDate">2021-02-04 21:50:20</div>
          </div>
          <div className="guestText">나 연초피는줄 알아찌?! 데헷데헷 나는 전자담배 핀다. 데헷데헷</div>
        </div>
      </div>
    </div>
  );
}

export default ListDetail;