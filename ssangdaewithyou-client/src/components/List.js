import React from 'react';
import ListElement from './ListElement';

function List({ smokePlaces, handleExistingPlaceInfo }) {

  return (
    <div id="list">
      <div id="enroll">
        <div id="enrollText">Take over the zone</div>
      </div>
      {smokePlaces.map((smokePlace) => <ListElement key={smokePlace.id} smokePlace={smokePlace} handleExistingPlaceInfo={handleExistingPlaceInfo} />)}
      {/* {smokePlaces.map((ele, idx) => <ListElement key={idx}/>)} */}
    </div>
  );
}

export default List;