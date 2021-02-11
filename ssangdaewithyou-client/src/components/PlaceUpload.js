import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function PlaceUpload({ userInfo, mapClickedPlace, handleSmokePlacesToNull }) {
  const [placeName, setPlaceName] = useState('')
  const [comment, setComment] = useState('')

  const history = useHistory()

  const handleInputValuePlaceName = (e) => {
    setPlaceName(e.target.value)
  }

  const handleInputValueComment = (e) => {
    setComment(e.target.value)
  }

  const handleNewPlaceSubmit = () => {
    axios
      .post('https://ssangdae.gq/list/detail/upload', {
        headers: {
          'content-type': 'application/json'
        },
        data: {
          placeName: placeName,
          comment: comment,
          latitude: '37.503383',
          longitude: '127.0184265'
        }
      })
      .then((res) => {
        handleSmokePlacesToNull()
        alert(`${placeName}을(를) 정복하셨습니다!`)
        history.push("/")
      })
      .catch((error) => {
        alert('정복에 실패햐셨습니다.')
        console.log(error.response)
        console.log(error.request)
        console.log(error.messages)
      })
  }

  return (
    <div>
      {mapClickedPlace.lat === 0 && mapClickedPlace.lng === 0 ? (
        <div>
          {history.push("/")}
        </div>
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