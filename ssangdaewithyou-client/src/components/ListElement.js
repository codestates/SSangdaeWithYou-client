import React from 'react';
import { Link } from 'react-router-dom';

function ListElement({ smokePlace, handleExistingPlaceInfo }) {

  return (
      // ! UX 위해 CSS 추가 className="listEl" 에 cursor: pointer;
      // ! <div id="listEl"> 를 <div className="listEl"> 으로 변경
      // <Link to='/list/detail'>
      //   <div className="listEl">
      //     <div className="listPlaceName">{smokePlace.placeName}</div>
      //     <div className="listPlaceUser">{smokePlace.userId}</div>
      //   </div>
      // </Link>
      // !
      <div className="listEl" onClick={() => {
        handleExistingPlaceInfo(smokePlace.id)
        alert(smokePlace.id)
      }}>
        <div className="listPlaceName">{smokePlace.placeName}</div>
        <div className="listPlaceUser">{smokePlace.userId}</div>
      </div>
  );
}

// ! R1
{/* <Route
path='/'
render={() => {
  if (isLogin) {
    return <Redirect to='/mypage' />;
  }
  return <Redirect to='/login' />;
}}
/> */}

// ! R2
// .then(res => {
//   // ! 나이스
//   this.props.history.push("/");

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