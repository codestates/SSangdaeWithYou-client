import React from 'react';
import PlaceUpload from '../components/PlaceUpload';

function PagePlaceUpload({ userInfo, mapClickedPlace }) {
  
  return (
    <PlaceUpload userInfo={userInfo} mapClickedPlace={mapClickedPlace} />
  )
}

export default PagePlaceUpload;