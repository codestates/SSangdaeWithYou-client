import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


function PlaceUpload({ userInfo, mapClickedPlace }) {
  const [placeName, setPlaceName] = useState('')
  const [comment, setComment] = useState('')

  const history = useHistory()

  const handleInputValuePlaceName = (e) => {
    setPlaceName(e.target.value)
    console.log(placeName, userInfo.username, mapClickedPlace)
  }

  const handleInputValueComment = (e) => {
    setComment(e.target.value)
    console.log(comment, userInfo.username, mapClickedPlace)
  }

  const handleNewPlaceSubmit = () => {
    console.log('submit clicked')
    // ! axios 시 placeName, comment, userInfo.username, mapClickedPlace)
    alert(`${placeName}을(를) 정복하셨습니다!`)
    history.push("/")
  }

  return (
    <div>
      {mapClickedPlace.lat === 0 && mapClickedPlace.lng === 0 ? (
        <div>지도에서 원하는 위치를 클릭해주세요! 더 좋은 UI/UX 로 찾아뵙겠습니다.</div>
      ) : (
        <div id="PlaceUpload">
          <div className="initText">이 구역의 최초 정복자가 되어주세요</div>
          <div id="placeName" className="myPageContents">
            <input type="text" placeholder="구역의 이름을 정해주세요" className="inputPlaceName" onChange={handleInputValuePlaceName}/>
            <div className="forPlaceBottom"></div>
          </div>
          <div id="placeDetail" className="myPageContents">
            <textarea placeholder="정복자로서 한 말씀 남겨주세요" className="inputPlaceDetail" onChange={handleInputValueComment}></textarea>
            <div className="forPlaceBottom"></div>
          </div>
          <div id="forAlignButton">
            <div id="messageButton" onClick={handleNewPlaceSubmit}>
              <div id="messageButtonText">submit</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PlaceUpload;