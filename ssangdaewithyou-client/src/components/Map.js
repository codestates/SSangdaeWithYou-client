import React, { useState, useEffect }from 'react';
import Geolocation from './Geolocation';

import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps'
import { Link } from 'react-router-dom';

function Map({ smokePlaces, handleExistingPlaceInfo }) {
  const [center, setCenter] = useState({ lat: 37.510744, lng: 126.9818086 }); // ! 대략 서울 중심
  // ! react-naver-maps의 괜찮은 API를 찾게 된다면 아래를 좀 손보자.
  const [clickedPlace, setClickedPlace] = useState({ lat: 0, lng: 0 })

  return (
    <div id="map">
      <RenderAfterNavermapsLoaded
        ncpClientId={process.env.REACT_APP_NAVER_MAP_API_KEY}
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}
      >
        {/* <button onClick={centerChangeToSomewhere}>Pan To Somewhere</button> */}
        <NaverMap 
          id='maps-examples-map-simple'
          style={{
            width: '100%',
            height: '100%',
          }}
          center={center} // ! '현재 위치로 가기 기능'을 버튼 추가?
          defaultZoom={12} // ! 지도 초기 확대 배율
          // zoomControl="true" // ! 난 이거 빼도 괜찮다고 생각해
          onClick={e => {
            console.log("clicked?", e.coord);
            setClickedPlace({ lat: e.coord._lat, lng: e.coord._lng });
            setCenter({ lat: e.coord._lat, lng: e.coord._lng });
          }}
        >
          {/* // ! 유저가 지도 위의 위치를 클릭 시 생기는 마커 */}
          <Marker
            position={clickedPlace}
            animation={1}
            onClick={() => {alert('Take over the zone!');}} // ! /list/detail로 이동할 수 있게 구현
          />
          {/* // ! fakeData */}
          {smokePlaces.map((ele) =>
            <Marker
              key={ele.id}
              position={{ lat: ele.latitude, lng: ele.longitude}}
              onClick={() => {
                handleExistingPlaceInfo(ele.id);
                alert(ele.id)
              }} // ! /list/detail로 이동할 수 있게 구현
            />
          )}
        </NaverMap>
        {/* // ! Geolocation */}
        <Geolocation />
      </RenderAfterNavermapsLoaded>
    </div>
  );
}

export default Map;