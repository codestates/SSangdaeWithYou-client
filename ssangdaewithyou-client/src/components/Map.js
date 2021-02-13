import React from 'react';
import { useHistory } from 'react-router-dom';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps'
import Geolocation from './Geolocation';
import EasterEgg from './EasterEgg';

function Map({ smokePlaces, handleExistingPlaceInfo , mapCenter, mapClickedPlace, handleMapClick, isLogin, isModal }) {
  const history = useHistory()

  return (
    isModal ? 
      <div id="map">
        <RenderAfterNavermapsLoaded
          ncpClientId={process.env.REACT_APP_NAVER_MAP_API_KEY}
          error={<p>Maps Load Error</p>}
          loading={<p>Maps Loading...</p>}
        >
          <NaverMap 
            id='maps-examples-map-simple'
            style={{
              width: '100%',
              // !
              height: '100%',
              
            }}
            center={mapCenter} // ! '현재 위치로 가기 기능'을 버튼 추가?
            defaultZoom={12} // ! 지도 초기 확대 배율
            scrollWheel={false} // ! 모달창 떠 있을 때는 스크롤 확대 안되게끔!
            draggable={false} // ! 모달창 있을 때는 클릭으로 이동 안되게끔
            // ! 모달창이 있을 때는 클릭으로 이동이 되지 않아야 함
            // onClick={e => {
            //   console.log("clicked?", e.coord);
            //   handleMapClick(e.coord._lat, e.coord._lng)
            // }}
          >
            {/* // ! 유저가 지도 위의 위치를 클릭 시 생기는 마커 */}
            <Marker
              position={mapClickedPlace}
              animation={1}
              onClick={() => {
                if (isLogin) {
                  alert('Take over the zone 을 클릭하여 해당 위치를 정복해 보세요!')
                } else {
                  alert('회원가입을 하면 해당 위치를 정복할 수 있습니다!')
                }
              }} // ! UI/UX 고려해야 함
            />
            <EasterEgg />
            {/* // ! fakeData */}
            {!smokePlaces ? (
              <div></div>
              ) : (
              <div>
                {smokePlaces.map((smokePlace) =>
                  <Marker
                    key={smokePlace.id}
                    position={{ lat: smokePlace.latitude, lng: smokePlace.longitude}}
                    onClick={() => {
                      if (isLogin) {
                        handleExistingPlaceInfo(smokePlace);
                        history.push("/list/detail")
                      } else {
                        alert('로그인을 해주세요.')
                      }
                    }}
                  />
                )}
              </div>
            )}
          </NaverMap>
          {/* // ! Geolocation */}
          <Geolocation handleMapClick={handleMapClick}/>
        </RenderAfterNavermapsLoaded>
      </div> 
    : 
      <div id="map">
        <RenderAfterNavermapsLoaded
          ncpClientId={process.env.REACT_APP_NAVER_MAP_API_KEY}
          error={<p>Maps Load Error</p>}
          loading={<p>Maps Loading...</p>}
        >
          <NaverMap 
            id='maps-examples-map-simple'
            style={{
              width: '100%',
              // !
              height: '100%',
            }}
            center={mapCenter} // ! '현재 위치로 가기 기능'을 버튼 추가?
            defaultZoom={12} // ! 지도 초기 확대 배율
            // zoomControl="true" // ! 난 이거 빼도 괜찮다고 생각해
            onClick={e => {
              console.log("clicked?", e.coord);
              handleMapClick(e.coord._lat, e.coord._lng)
            }}
          >
            {/* // ! 유저가 지도 위의 위치를 클릭 시 생기는 마커 */}
            <Marker
              position={mapClickedPlace}
              animation={1}
              onClick={() => {
                if (isLogin) {
                  alert('Take over the zone 을 클릭하여 해당 위치를 정복해 보세요!')
                } else {
                  alert('회원가입을 하면 해당 위치를 정복할 수 있습니다!')
                }
              }} // ! UI/UX 고려해야 함
            />
            <EasterEgg />
            {/* // ! fakeData */}
            {!smokePlaces ? (
              <div></div>
              ) : (
              <div>
                {smokePlaces.map((smokePlace) =>
                  <Marker
                    key={smokePlace.id}
                    position={{ lat: smokePlace.latitude, lng: smokePlace.longitude}}
                    onClick={() => {
                      if (isLogin) {
                        handleExistingPlaceInfo(smokePlace);
                        history.push("/list/detail")
                      } else {
                        alert('로그인을 해주세요.')
                      }
                    }}
                  />
                )}
              </div>
            )}
          </NaverMap>
          {/* // ! Geolocation */}
          <Geolocation handleMapClick={handleMapClick}/>
        </RenderAfterNavermapsLoaded>
      </div>
  );
}

export default Map;