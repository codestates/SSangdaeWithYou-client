import React from 'react';
import { useHistory } from 'react-router-dom';

function ListElement({ listSmokePlace, handleExistingPlaceInfo, isLogin }) {
  const history = useHistory()

  return (
      <div className="listEl" onClick={() => {
        if (isLogin) {
          handleExistingPlaceInfo(listSmokePlace)
          history.push("/list/detail")
        } else {
          alert('로그인을 해주세요.')
        }
      }}>
        {/* // ! asdf 시간 날 때 거리에 대한 로직(아마 버블sort 이용할 듯) 구현하기 */}
        <div className="listPlaceName">{listSmokePlace.placeName}</div>
        <div className="listPlaceUser">지금 위치로 부터 {parseInt(listSmokePlace.distance)} m</div>
      </div>
  );
}

export default ListElement;

{/* <div id="listEl">
  <div className="listPlaceName">장소명</div>
  <div className="listPlaceUser">정복자</div>
  <div className="countLikeOrDislike">
    <div className="listLike">
      <img src="../img/like.jpg" className="countImg" />
      <div className="count">7</div>
    </div>
    <div className="dislistLike">
      <img src="../img/dislike.jpg" className="countImg" />
      <div className="count">2</div>
    </div>
  </div>
</div>
<div id="listEl">
  <div className="listPlaceName">장소명</div>
  <div className="listPlaceUser">정복자</div>
  <div className="countLikeOrDislike">
    <div className="listLike">
      <img src="../img/like.jpg" className="countImg" />
      <div className="count">7</div>
    </div>
    <div className="dislistLike">
      <img src="../img/dislike.jpg" className="countImg" />
      <div className="count">2</div>
    </div>
  </div>
</div>
<div id="listEl">
  <div className="listPlaceName">장소명</div>
  <div className="listPlaceUser">정복자</div>
  <div className="countLikeOrDislike">
    <div className="listLike">
      <img src="../img/like.jpg" className="countImg" />
      <div className="count">7</div>
    </div>
    <div className="dislistLike">
      <img src="../img/dislike.jpg" className="countImg" />
      <div className="count">2</div>
    </div>
  </div>
</div>
<div id="listEl">
  <div className="listPlaceName">장소명</div>
  <div className="listPlaceUser">정복자</div>
  <div className="countLikeOrDislike">
    <div className="listLike">
      <img src="../img/like.jpg" className="countImg" />
      <div className="count">7</div>
    </div>
    <div className="dislistLike">
      <img src="../img/dislike.jpg" className="countImg" />
      <div className="count">2</div>
    </div>
  </div>
</div> */}