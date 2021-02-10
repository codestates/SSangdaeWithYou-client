import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';



axios.defaults.withCredentials = true;



function PlaceUpload({ userInfo, mapClickedPlace, handleSmokePlaces }) {
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
    console.log('before axios')
    console.log(document.cookie)
    axios
      .post('https://ssangdae.gq/list/detail/upload', {
        headers: {
          'content-type': 'application/json'
        },
        data: {
          "userId":1,
          "longitude": "127.12312", 
          "latitude": "34.45632", 
          "comment": "zzzzz",
          "placeName": "종로"
          // placeName: '종로',
          // comment: 'zzzzz',
          // userId: 1,
          // latitude: '34.45632',
          // longitude: '127.12312'
        }
      })
      .then((res) => {
        console.log('after then')
        handleSmokePlaces()
        console.log('submit clicked res : ', res)
        alert(`${placeName}을(를) 정복하셨습니다!`)
        history.push("/")
      })
      .catch((error) => {
        console.log(error.response)
        console.log(error.request)
        console.log(error.messages)
      })
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