import React from 'react';
import Map from '../components/Map';
import List from '../components/List';

function PageMain({ smokePlaces, handleExistingPlaceInfo, mapCenter, mapClickedPlace, handleMapClick, isLogin, listSmokePlaces, isModal }) {
  
  return (
    <div id="mapAndList">
      <Map smokePlaces={smokePlaces} handleExistingPlaceInfo={handleExistingPlaceInfo} mapCenter={mapCenter} mapClickedPlace={mapClickedPlace} handleMapClick={handleMapClick} isLogin={isLogin} isModal={isModal}/>
      <List smokePlaces={smokePlaces} handleExistingPlaceInfo={handleExistingPlaceInfo} isLogin={isLogin} listSmokePlaces={listSmokePlaces} />
    </div>
  )
}

export default PageMain;