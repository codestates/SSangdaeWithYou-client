import React from 'react';
import { useHistory } from 'react-router-dom';
import ListElement from './ListElement';

function List({ smokePlaces, handleExistingPlaceInfo, isLogin }) {
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
      {smokePlaces.map((smokePlace) => <ListElement key={smokePlace.id} smokePlace={smokePlace} handleExistingPlaceInfo={handleExistingPlaceInfo} />)}
      {/* {smokePlaces.map((ele, idx) => <ListElement key={idx}/>)} */}
    </div>
  );
}

export default List;