import React, { useState, useEffect } from 'react';
import Message from './Message';
import axios from 'axios'

function Messages({ existingPlaceInfo }) {
  // ! fakedata qwer ---------------------------------------------
  const [chosenPlaceMessage, setChosenPlaceMessage] = useState(null)
  // const [chosenPlaceMessage, setChosenPlaceMessage] = useState([{nickname:'123', message:'123'}, {nickname:'456', message:'456'}])
  // ! -----------------------------------------------------------
  const [countMessage, setCountMessage] = useState(0)
  const [newMessage, setNewMessage] = useState('')
  const [isLatest, setIsLatest] = useState(true)

  const handleMessageReverse = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[arr.length - i - 1])
    }
    return result;
  }

  useEffect(() => {
    if (!chosenPlaceMessage) {
      return;
    }
    else {
      let messageReverse = handleMessageReverse(chosenPlaceMessage)
      setChosenPlaceMessage(messageReverse)
    }
  }, [isLatest])

  //-----------------------------------------------------------------------
  const handleMessageUpdate = () => {
    setCountMessage(0)
  }

  useEffect(() => {
    if (countMessage === 0) {
      axios
        .post('https://ssangdae.gq/list/detail/getMessage', {
          headers: {
            'content-type': 'application/json'
          },
          placeId : existingPlaceInfo.id,
        })
        .then((res) => {
          let MessagesFromTheLatest = handleMessageReverse(res.data)
          setChosenPlaceMessage(MessagesFromTheLatest)
          setCountMessage(1)
        })
        .catch((error) => {
          console.log('error : ', error)
      })
    // setChosenPlaceMessage(fakeData.messages)
    }
  })
  //-----------------------------------------------------------------------
  // ! 혹시 위의 것이 망쳐지면 아래의 것을 쓰도록
  // //-----------------------------------------------------------------------
  // const handleMessageUpdate = () => {
  //   setCountMessage(0)
  // }

  // useEffect(() => {
  //   if (countMessage === 0) {
  //     axios
  //       .post('https://ssangdae.gq/list/detail/getMessage', {
  //         headers: {
  //           'content-type': 'application/json'
  //         },
  //         placeId : existingPlaceInfo.id,
  //       })
  //       .then((res) => {
  //         setChosenPlaceMessage(res.data)
  //         setCountMessage(1)
  //       })
  //       .catch((error) => {
  //         console.log('error : ', error)
  //     })
  //   // setChosenPlaceMessage(fakeData.messages)
  //   }
  // })
  // //-----------------------------------------------------------------------


  //-----------------------------------------------------------------------
  const handleInputValueNewMessage = (e) => {
    setNewMessage(e.target.value)
  }

  // ! 서버에 post 요청 후 res로 받아오는 messages 랜더링
  const handleNewMessageSubmit = () => {
    axios
      .post('https://ssangdae.gq/list/detail/inputMessage', {
        headers: {
          'content-type': 'application/json'
        },
        text: newMessage,
        placeId: existingPlaceInfo.id
      })
      .then((res) => {
        handleMessageUpdate()
      })
      .catch((error) => {
        console.log('error : ', error)
        alert('메세지 입력 오류')
      })
  }
  //-----------------------------------------------------------------------


  return (
    <div id="message">
      <div id="userMessage">
        <div id="userId">ID</div>
        <textarea placeholder="댓글 추가" id="userText" onChange={handleInputValueNewMessage}></textarea>
        <div className="forUserMessageTop"></div>
        <div id="forAlignButton">

          {/* --------------------------- */}
          
          {/* --------------------------- */}

          <div id="messageButton" onClick={handleNewMessageSubmit}>
            <div id="messageButtonText">submit</div>
          </div>
        </div>
      </div>
      <div className="forSortFrame">
        <div className="forSortFrameEl"></div>
        <div className="forSortFrameEl"></div>
        <div className="forSortFrameEl">
          <div onClick={() => {
              setIsLatest(!isLatest)
            }}>
              {isLatest ? (
                <div className="sortEl">최신순</div>
                ) : (
                <div className="sortEl">오래된순</div>
            )}</div>
        </div>
      </div>
      {!chosenPlaceMessage ? (
        <div></div>
      ) : (
        chosenPlaceMessage.map((message, idx) => <Message message={message} key={idx} />) // ! key 대충 준거라 나중에 check
      )}
    </div>
  )
}

export default Messages;

{/* <div id="message">
  <div id="userMessage">
    <div id="userId">ID</div>
    <textarea placeholder="댓글 추가" id="userText"></textarea>
    <div className="forUserMessageTop"></div>
    <div id="forAlignButton">
      <div id="messageButton">
        <div id="messageButtonText">submit</div>
      </div>
    </div>
  </div>
  <div id="questList">
    <div id="idOrDate">
      <div className="guestId">대장아재</div>
      <div className="guestDate">2021-02-04 21:50:20</div>
    </div>
    <div className="guestText">꺄르르르르르 우리 아재들 담배 맛이쪄요?</div>
  </div>
  <div id="questList">
    <div id="idOrDate">
      <div className="guestId">새끼아재</div>
      <div className="guestDate">2021-02-04 21:50:20</div>
    </div>
    <div className="guestText">끼릭끼릭 츄릅츄릅 햘딱햘딱</div>
  </div>
  <div id="questList">
    <div id="idOrDate">
      <div className="guestId">둘째아재</div>
      <div className="guestDate">2021-02-04 21:50:20</div>
    </div>
    <div className="guestText">저는 담배를 안피워요. 저는 두줄 이상을 써야하는 임무가 있답니다. 아핳아핳 호로로로로롤로롤</div>
  </div>
  <div id="questList">
    <div id="idOrDate">
      <div className="guestId">중간아재</div>
      <div className="guestDate">2021-02-04 21:50:20</div>
    </div>
    <div className="guestText">나 연초피는줄 알아찌?! 데헷데헷 나는 전자담배 핀다. 데헷데헷</div>
  </div>
</div> */}