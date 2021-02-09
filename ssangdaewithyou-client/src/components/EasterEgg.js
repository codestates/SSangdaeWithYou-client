import React from 'react';
import { useHistory } from 'react-router-dom';
import { Marker } from 'react-naver-maps'

function EasterEgg() {
  const history = useHistory()
  
  return (
    <div>
      <Marker
        position={{ lat: 44.0600576, lng: 114.768711 }}
        animation={1}
        onClick={() => {history.push("/easterEgg/LeaderUncle")}}
      />
      <Marker
        position={{ lat: 44.0600576, lng: 141.2674856 }}
        animation={1}
        onClick={() => {history.push("/easterEgg/SecondUncle")}}
      />
      <Marker
        position={{ lat: 27.5482761, lng: 114.768711 }}
        animation={1}
        onClick={() => {history.push("/easterEgg/MiddleUncle")}}
      />
      <Marker
        position={{ lat: 27.5482761, lng: 141.2674856 }}
        animation={1}
        onClick={() => {history.push("/easterEgg/BabyUncle")}}
      />
    </div>
    
  );
}

export default EasterEgg;