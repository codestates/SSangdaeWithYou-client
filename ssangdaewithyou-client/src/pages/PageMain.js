import React from 'react';
import Map from '../components/Map';
import List from '../components/List';

function PageMain({ smokePlaces, handleExistingPlaceInfo, mapCenter, mapClickedPlace, handleMapClick }) {
  
  return (
    <div id="mapAndList">
      <Map smokePlaces={smokePlaces} handleExistingPlaceInfo={handleExistingPlaceInfo} mapCenter={mapCenter} mapClickedPlace={mapClickedPlace} handleMapClick={handleMapClick} />
      <List smokePlaces={smokePlaces} handleExistingPlaceInfo={handleExistingPlaceInfo} />
    </div>
  )
}

export default PageMain;