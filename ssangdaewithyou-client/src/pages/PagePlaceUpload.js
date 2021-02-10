import React from 'react';
import PlaceUpload from '../components/PlaceUpload';

function PagePlaceUpload({ userInfo, mapClickedPlace, handleSmokePlaces }) {
  
  return (
    <PlaceUpload userInfo={userInfo} mapClickedPlace={mapClickedPlace} handleSmokePlaces={handleSmokePlaces} />
  )
}

export default PagePlaceUpload;