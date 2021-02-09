import React from 'react';

function LikeOrDislike() {

  return (
    <div id="likeOrDislike">
      <div className="forLikeOrDislikeFrame">
        <div className="count">7</div>
        <div id="like">
          <img src="../img/like.jpg" className="likeOrDislikeImg" alt="profile"/>
          <div id="likeOrDislikeText">추천해요</div>
        </div>
      </div>
      <div className="forLikeOrDislikeFrame">
        <div className="count">7</div>
        <div id="disLike">
          <img src="../img/dislike.jpg" className="likeOrDislikeImg" alt="profile"/>
          <div id="likeOrDislikeText">비추해요</div>
        </div>
      </div>
    </div>
  )
}

export default LikeOrDislike;