import React from 'react';

// !
import { Link } from 'react-router-dom';

function List({ cartItems }) {

  return (
    <div id="list">
      <div id="enroll">
        <img src="../img/enroll.jpg" id="enrollImg" />
        <div id="enrollText">등록하기</div>
      </div>
      <div id="listEl">
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
      </div>
      <div id="listEl">
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
      </div>
      <div id="listEl">
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
      </div>
      <div id="listEl">
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
      </div>
    </div>
  );
}

export default List;


// ! style="max-width:50%; height:auto;"
{/* <div id="list">
  <div id="enroll">
    <img src="../img/enroll.jpg" id="enrollImg" />
    <div id="enrollText">등록하기</div>
  </div>
  <div id="listEl">
    <div class="listPlaceName">장소명</div>
    <div class="listPlaceUser">정복자</div>
    <div class="countLikeOrDislike">
        <div class="listLike">
            <img src="../img/like.jpg" style="max-width:50%; height:auto;" />
            <div class="count">7</div>
        </div>
        <div class="dislistLike">
            <img src="../img/dislike.jpg" style="max-width:50%; height:auto;" />
            <div class="count">2</div>
        </div>
    </div>
  </div>
  <div id="listEl">
    <div class="listPlaceName">장소명</div>
    <div class="listPlaceUser">정복자</div>
    <div class="countLikeOrDislike">
        <div class="listLike">
            <img src="../img/like.jpg" style="max-width:50%; height:auto;" />
            <div class="count">7</div>
        </div>
        <div class="dislistLike">
            <img src="../img/dislike.jpg" style="max-width:50%; height:auto;" />
            <div class="count">2</div>
        </div>
    </div>
  </div>
  <div id="listEl">
    <div class="listPlaceName">장소명</div>
    <div class="listPlaceUser">정복자</div>
    <div class="countLikeOrDislike">
        <div class="listLike">
            <img src="../img/like.jpg" style="max-width:50%; height:auto;" />
            <div class="count">7</div>
        </div>
        <div class="dislistLike">
            <img src="../img/dislike.jpg" style="max-width:50%; height:auto;" />
            <div class="count">2</div>
        </div>
    </div>
  </div>
  <div id="listEl">
    <div class="listPlaceName">장소명</div>
    <div class="listPlaceUser">정복자</div>
    <div class="countLikeOrDislike">
        <div class="listLike">
            <img src="../img/like.jpg" style="max-width:50%; height:auto;" />
            <div class="count">7</div>
        </div>
        <div class="dislistLike">
            <img src="../img/dislike.jpg" style="max-width:50%; height:auto;" />
            <div class="count">2</div>
        </div>
    </div>
  </div>
</div> */}