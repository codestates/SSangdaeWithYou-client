import React from 'react';

import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps'

// !
import { Link } from 'react-router-dom';

function Map({ cartItems }) {

  return (
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
            height: '100%',
          }}
        />
      </RenderAfterNavermapsLoaded>
    </div>
  );
}

export default Map;