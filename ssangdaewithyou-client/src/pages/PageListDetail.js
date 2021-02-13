import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ListDetail from '../components/ListDetail';
import axios from 'axios'
// ! for fakeData
import { fakeData } from '../fakeData/fakeData';

// ! 전역상태에 있는 existingPlaceInfo 의 데이터를 바탕으로 서버에 요청을 보내겠다
// ! 받아오는 데이터를 해당 page에서 상태로 관리하겠다(일단은 임의의 fakeData 를 주겠다)
// ! 다른 페이지에서 굳이 DB의 messages 관련 데이터를 상태로 가지고 있을 필요가 없을 것 같아 existingPlaceInfo 를 사용하지 않고 따로 만든 것
// ! 지금 드는 생각으로는 existingPlaceInfo.placeName 을 사용하면 될 것 같은데, 서버와 연계하면서 좀 더 자세히 살펴봐야 할 듯

function PageListDetail({ existingPlaceInfo, userInfo }) {
  const history = useHistory()

  return (
    <div>
      {!existingPlaceInfo ? (
        <div>
          {history.push("/")}
        </div>
      ) : (
        <ListDetail existingPlaceInfo={existingPlaceInfo} userInfo={userInfo} />
      )}
    </div>
  )
}

export default PageListDetail;