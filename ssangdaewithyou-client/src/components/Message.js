import React from 'react';

function Message({ message }) {

  return (
    <div id="questList">
      <div id="idOrDate">
        <div className="guestId">{message.nickname}</div>
        <div className="guestDate">2021-02-04 21:50:20</div>
      </div>
      <div className="guestText">{message.message}</div>
    </div>  
  )
}

export default Message;