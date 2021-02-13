import React from 'react';
import { useHistory, useEffact } from 'react-router-dom';
import ListElement from './ListElement';

function List({ smokePlaces, handleExistingPlaceInfo, isLogin, listSmokePlaces}) {
  const history = useHistory()



  return (
    <div id="list">
      <div id="enroll">
        <div id="enrollText" onClick={() => {
          if (isLogin) {
            history.push("/place/upload")
          } else {
            alert('로그인을 해주세요.')
          }
        }}>
          Take over the zone
        </div>
      </div>
      {!listSmokePlaces ? (
        <div></div>
      ) : (
        <div>
          {listSmokePlaces.map((listSmokePlace, idx) => <ListElement key={idx} listSmokePlace={listSmokePlace} handleExistingPlaceInfo={handleExistingPlaceInfo} isLogin={isLogin}/>)}
        </div>
      )}
      {/* {smokePlaces.map((smokePlace) => <ListElement key={smokePlace.id} smokePlace={smokePlace} handleExistingPlaceInfo={handleExistingPlaceInfo} isLogin={isLogin}/>)} */}
    </div>
  );
}

export default List;