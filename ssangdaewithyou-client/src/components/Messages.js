import React, { useState } from 'react';
import Message from './Message';

function Messages({ chosenListDetail }) {
  const [newMessage, setNewMessage] = useState('')

  const handleInputValueNewMessage = (e) => {
    setNewMessage(e.target.value)
    console.log(newMessage)
  }

  // ! 서버에 post 요청 후 res로 받아오는 messages 랜더링
  const handleNewMessageSubmit = () => {
    alert('handleNewMessageSubmit clicked')
  }

  return (
    <div id="message">
      <div id="userMessage">
        <div id="userId">ID</div>
        <textarea placeholder="댓글 추가" id="userText" onChange={handleInputValueNewMessage}></textarea>
        <div className="forUserMessageTop"></div>
        <div id="forAlignButton">
          <div id="messageButton" onClick={handleNewMessageSubmit}>
            <div id="messageButtonText">submit</div>
          </div>
        </div>
      </div>
      {!chosenListDetail ? (
        <div></div>
      ) : (
        chosenListDetail.map((message, idx) => <Message message={message} key={idx} />) // ! key 대충 준거라 나중에 check
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