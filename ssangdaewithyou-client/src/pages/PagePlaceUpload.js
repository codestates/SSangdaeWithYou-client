import React from 'react';
import PlaceUpload from '../components/PlaceUpload';

function PagePlaceUpload({ userInfo, mapClickedPlace, handleSmokePlacesToNull }) {
  
  return (
    <PlaceUpload userInfo={userInfo} mapClickedPlace={mapClickedPlace} handleSmokePlacesToNull={handleSmokePlacesToNull} />
  )
}

export default PagePlaceUpload;