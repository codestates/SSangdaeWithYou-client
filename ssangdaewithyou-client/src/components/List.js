import React from 'react';

// !
import { Link } from 'react-router-dom';

function List({ cartItems }) {

  return (
    <div id="list">
      List
      <div id="enroll">Enroll</div>
      {/* <div id="listEl">
        <div className="listPlaceName">장소명</div>
        <div className="listPlaceUser">정복자</div>
        <div className="countLikeOrDislike">
          <div className="listLike">
            <img src="../img/like.jpg" />
            <div className="count">7</div>
          </div>
          <div className="dislistLike">
            <img src="../img/dislike.jpg" />
            <div className="count">2</div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default List;