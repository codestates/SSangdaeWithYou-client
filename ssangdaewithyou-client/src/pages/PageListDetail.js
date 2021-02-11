import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ListDetail from '../components/ListDetail';
import axios from 'axios'
// ! for fakeData
import { fakeData } from '../fakeData/fakeData';


// ! 전역상태에 있는 existingPlaceInfo 의 데이터를 바탕으로 서버에 요청을 보내겠다
// ! 받아오는 데이터를 해당 page에서 상태로 관리하겠다(일단은 임의의 fakeData 를 주겠다)
// ! 다른 페이지에서 굳이 DB의 messages 관련 데이터를 상태로 가지고 있을 필요가 없을 것 같아 existingPlaceInfo 를 사용하지 않고 따로 만든 것
// ! 지금 드는 생각으로는 existingPlaceInfo.placeName 을 사용하면 될 것 같은데, 서버와 연계하면서 좀 더 자세히 살펴봐야 할 듯

function PageListDetail({ existingPlaceInfo }) {
  const [chosenPlaceMessage, setChosenPlaceMessage] = useState(null)
  // ! 꿀잼 (1/3)
  // const [weHaveToRun, setWeHaveToRun] = useState(1)
  // ! 혹시 몰라서 일단 써놓을께
  const [count, setCount] = useState(0)
  const history = useHistory()

  // ! 꿀잼 (2/3)
  // useEffect(() => {
  //   setWeHaveToRun(weHaveToRun + 1)
  //   }
  // )

  // ! zxcvzxcv 과연 될 것인가... (message 기록이 없는 장소라면 아래아래의 코드를 써야할 것)
  useEffect(() => {
    if (!chosenPlaceMessage) {
      axios
        .post('https://ssangdae.gq/list/detail/getMessage', {
          headers: {
            'content-type': 'application/json'
          },
          data: {
            placeId : existingPlaceInfo.id
          }
        })
        .then((res) => {
          setChosenPlaceMessage(res.data)
          // ! zxcvzxcv
          alert('성공!!')
        })
        .catch((error) => {
          // ! zxcvzxcv
          alert('실패!!')
          console.log(error.response)
          console.log(error.request)
          console.log(error.messages)
      })
    // ! zxcvzxcv
    setChosenPlaceMessage(fakeData.messages)
    }
  })

  // ! zxcvzxcv 과연 될 것인가...
  // useEffect(() => {
  //   if (count === 0) {
  //     axios
  //       .post('', {
  //         headers: {
  //           'content-type': 'application/json'
  //         },
  //         data: {
  //           asdf: 1,
  //         }
  //       })
  //       .then((res) => {
  //         setChosenPlaceMessage(res.data)
  //         setCount(1)
  //       })
  //       .catch((error) => {
  //         console.log(error.response)
  //         console.log(error.request)
  //         console.log(error.messages)
  //     })
  //   // ! zxcvzxcv
  //   setChosenPlaceMessage(fakeData.messages)
  //   }
  // })

  // ! zxcvzxcv 좋아요 싫어요 버튼 관련
  // useEffect(() => {
  //   axios
  //     .post('', {
  //       headers: {
  //         'content-type': 'application/json'
  //       },
  //       data: {
  //         asdf: 1,
  //       }
  //     })
  //     .then((res) => {
  //       setChosenPlaceMessage(res.data)
  //     })
  //     .catch((error) => {
  //       console.log(error.response)
  //       console.log(error.request)
  //       console.log(error.messages)
  //     })
  //   // setChosenPlaceMessage(fakeData.messages)
  // }, [chosenPlaceMessage])

  return (
    <div>
      {/* // ! 꿀잼 (3/3)
      <div>{weHaveToRun}</div> */}
      {!existingPlaceInfo ? (
        <div>
          {/* // ! alert('선택해주세요') */}
          {history.push("/")}
        </div>
      ) : (
        <ListDetail existingPlaceInfo={existingPlaceInfo} chosenPlaceMessage={chosenPlaceMessage}/>
      )}
    </div>
  )
}

export default PageListDetail;