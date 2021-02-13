import React, { useEffect, useState } from 'react';
import LikeOrDislike from './LikeOrDislike';
import Messages from './Messages';
import axios from 'axios';

function ListDetail({ existingPlaceInfo, userInfo }) {
  const [listDetailInfo, setListDetailInfo] = useState(null)

  useEffect(() => {
    handleListDetailInfo()
  })

  const handleListDetailInfo = () => {
    if (!listDetailInfo) {
      axios
        .post('https://ssangdae.gq/list/detail/info', {
          headers: {
            'content-type': 'application/json'
          },
          placeId: existingPlaceInfo.id
        })
        .then((res) => {
          setListDetailInfo(res.data)
        })
        .catch((error) => {
          console.log('error : ', error)
          alert('해당 장소의 정보를 불러오는 과정에서 오류가 생겼습니다.')
        })
    }
  }

  return (
    <div className="forListDeFrame">
      <div id="listDetail">
        <div>
          {!listDetailInfo ? (<div></div>) : (
                  <div id="detail">
                  <div id="detailPlaceName"> 
                    <div className="fstPlaceEl">장소명 :</div>
                    <div id="placeEl">{listDetailInfo.placeName}</div>
                  </div>
                  <div id="detailUserId">
                    <div className="fstPlaceEl">정복자 :</div>
                    <div id="placeEl">{listDetailInfo.nickname}</div>
                  </div>
                  <div id="detailPlaceDetail">
                    <div className="fstPlaceEl">(정복자의 한 말씀)</div>
                    <div id="placeEl">"{listDetailInfo.comment}"</div>
                  </div>
                </div>
          )}
        </div>

        <LikeOrDislike existingPlaceInfo={existingPlaceInfo} userInfo={userInfo} />
        <Messages existingPlaceInfo={existingPlaceInfo} />
      </div>
    </div>
  );
}

export default ListDetail;