import React, { useState, useEffect }from 'react';

import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps'

function Map() {
  const [center, setCenter] = useState({ lat: 37.510744, lng: 126.9818086 }); // ! 대략 서울 중심
  // const [center, setCenter] = useState({ lat: 37.554722, lng: 126.970833 }); // ! 서울역
  // ! react-naver-maps의 괜찮은 API를 찾게 된다면 아래를 좀 손보자.
  const [clickedPlace, setClickedPlace] = useState({ lat: 0, lng: 0 })

  // useEffect(() => {
  //   console.log('hmm...')
  // })

  return (
    <div id="map">
      <RenderAfterNavermapsLoaded
        ncpClientId={process.env.REACT_APP_NAVER_MAP_API_KEY}
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}
      >
        {/* <button onClick={centerChangToNaver}>Pan To Naver</button> */}
        <NaverMap 
          id='maps-examples-map-simple'
          style={{
            width: '100%',
            height: '100%',
          }}
          center={center} // ! '현재 위치로 가기 기능'을 구현한다면 사용할 것(근데 굳이 필요 없을 듯)
          defaultZoom={12} // ! 지도 초기 확대 배율
          // zoomControl="true" // ! 난 이거 빼도 괜찮다고 생각해
          onClick={e => {
            console.log("clicked?", e.coord);
            setClickedPlace({ lat: e.coord._lat, lng: e.coord._lng });
            setCenter({ lat: e.coord._lat, lng: e.coord._lng });
          }}
        >
          // ! 유저가 지도 위의 위치를 클릭 시 생기는 마커
          <Marker
            position={clickedPlace}
            animation={1}
            onClick={() => {alert('선택하시겠습니까?');}} // ! /list/detail로 이동할 수 있게 구현
          />
          // ! fakeData
          <Marker
            position={{ lat: 37.554722, lng: 126.970833 }}
          />
          <Marker
            position={{ lat: 37.4923164, lng: 126.9182618 }}
          />
          <Marker
            position={{ lat: 37.503382, lng: 127.0184262 }}
          />
        </NaverMap>
      </RenderAfterNavermapsLoaded>
    </div>
  );
}

export default Map;