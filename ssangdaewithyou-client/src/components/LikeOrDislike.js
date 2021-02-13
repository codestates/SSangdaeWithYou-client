import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LikeOrDislike({ existingPlaceInfo, userInfo }) {
  const [chosenPlaceLike, setChosenPlaceLike] = useState(0)
  const [countLike, setCountLike] = useState(0)
  
  const [chosenPlaceDislike, setChosenPlaceDislike] = useState(0)
  const [countDislike, setCountDislike] = useState(0)

  //-----------------------------------------------------------------------
  const handleLikeUpdate = () => {
    setCountLike(0)
  }

  useEffect(() => {
    if (countLike === 0) {
      axios
        .post('https://ssangdae.gq/list/detail/getLikeInfo', {
          headers: {
            'content-type': 'application/json'
          },
          placeId : existingPlaceInfo.id,
        })
        .then((res) => {
          setChosenPlaceLike(res.data.count)
          setCountLike(1)
        })
        .catch((error) => {
          console.log('error : ', error)
      })
    // setChosenPlaceMessage(fakeData.messages)
    }
  })

  // ! UI/UX 수정 : 좋아요를 클릭한 사람은 빨간색 좋아요가 랜더링 되도록
  const handleLikeButtonClick = () => {
    axios
      .post('https://ssangdae.gq/list/detail/like', {
        placeId : existingPlaceInfo.id,
        // ! 에러 발견 qwer
        userId: userInfo.id
      })
      .then((res) => {
        // ! qwer
        if (res.status === 200) {
          handleLikeUpdate()
        } else if (res.status == 201) {
          handleLikeUpdate()
          alert(res.data)
        } else if (res.status === 202) {
          alert(res.data)
        }
      })
      .catch((error) => {
        console.log('error : ', error)
    })
  }
  //-----------------------------------------------------------------------


  //-----------------------------------------------------------------------
    const handleDislikeUpdate = () => {
      setCountDislike(0)
    }
  
    useEffect(() => {
      if (countDislike === 0) {
        axios
          .post('https://ssangdae.gq/list/detail/getDislikeInfo', {
            headers: {
              'content-type': 'application/json'
            },
            placeId : existingPlaceInfo.id,
          })
          .then((res) => {
            setChosenPlaceDislike(res.data.count)
            setCountDislike(1)
          })
          .catch((error) => {
            console.log('error : ', error)
        })
      // setChosenPlaceMessage(fakeData.messages)
      }
    })

  // ! UI/UX 수정 : 싫어요를 클릭한 사람은 빨간색 싫어요가 랜더링 되도록
  const handleDislikeButtonClick = () => {
    axios
      .post('https://ssangdae.gq/list/detail/dislike', {
        placeId : existingPlaceInfo.id,
        // ! 에러 발견 qwer
        userId: userInfo.id
      })
      .then((res) => {
        // ! qwer
        if (res.status === 200) {
          handleDislikeUpdate()
        } else if (res.status == 201) {
          handleDislikeUpdate()
          alert(res.data)
        } else if (res.status === 202) {
          alert(res.data)
        }
      })
      .catch((error) => {
        console.log('error : ', error)
    })
  }
    //-----------------------------------------------------------------------

  return (
    <div id="likeOrDislike">
      <div className="forLikeOrDislikeFrame">
        <div className="count">{chosenPlaceLike}</div>
        <div id="like" onClick={handleLikeButtonClick}>
          <img src="../img/like.jpg" className="likeOrDislikeImg" alt="profile"/>
          <div id="likeOrDislikeText">추천해요</div>
        </div>
      </div>
      <div className="forLikeOrDislikeFrame">
        <div className="count">{chosenPlaceDislike}</div>
        <div id="disLike" onClick={handleDislikeButtonClick}>
          <img src="../img/dislike.jpg" className="likeOrDislikeImg" alt="profile"/>
          <div id="likeOrDislikeText">비추해요</div>
        </div>
      </div>
    </div>
  )
}

export default LikeOrDislike;