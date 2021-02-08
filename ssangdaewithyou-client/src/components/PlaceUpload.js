import React from 'react';

function PlaceUpload() {

  return (
    <div id="PlaceUpload">
      <div className="initText">이 구역의 최초 정복자가 되어주세요</div>
      <div id="placeName" className="myPageContents">
        <input type="text" placeholder="구역의 이름을 정해주세요" className="inputPlaceName" />
        <div className="forPlaceBottom"></div>
      </div>
      <div id="placeDetail" className="myPageContents">
        <textarea placeholder="구역의 자세한 위치를 알려주세요" className="inputPlaceDetail"></textarea>
        <div className="forPlaceBottom"></div>
      </div>
      <div id="forAlignButton">
        <div id="messageButton">
          <div id="messageButtonText">submit</div>
        </div>
      </div>
    </div>
  );
}

export default PlaceUpload;