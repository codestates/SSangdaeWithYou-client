import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from './components/Nav';
import Modal from './components/Modal';
import PageMain from './pages/PageMain';
import PageMyPage from './pages/PageMyPage';
import PagePlaceUpload from './pages/PagePlaceUpload';
import PageListDetail from './pages/PageListDetail';
import PageEasterEgg from './pages/PageEasterEgg';
import './App.css';
// ! for fakeData
import { fakeData } from './fakeData/fakeData';
import axios from 'axios'

function App() {
  // ! count 얌생이 수정 필요
  const [count, setCount] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const [isGuest, setIsGuest] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  // ! isModal 이 true면 map이 움직이지 않도록
  const [isModal, setIsModal] = useState(true);
  // ! 카카오 로그인이면 랜더링을 달리해줘야 하는 부분이 있어서 만듬
  const [isKakao, setIsKakao] = useState(false);
  // ! 아래의 smokePlaces 를 잘 활용해야 함
  // ! smokePlaces 는 (DB)smokePlaces 로 부터 axios
  const [smokePlaces, setSmokePlaces] = useState(null)
  // ! existingPlaceInfo 는 이미 DB에 저장된 장소에 관련한 onClick 실행 시 관련 정보를 다루는 상태
  // ! Map 이던 List 이던 smokePlaces 의 데이타라는 점을 이용
  const [existingPlaceInfo, setExistingPlaceInfo] = useState(null)
  // ! UI/UX 위해 center, clickedPlace 를 map에서 옮겨옴(clickedPlace 는 수정할 수도 있다)
  const [mapCenter, setMapCenter] = useState({ lat: 37.510744, lng: 126.9818086 }); // ! 대략 서울 중심
  const [mapClickedPlace, setMapClickedPlace] = useState({ lat: 0, lng: 0 })
  // ! DB랑 연결했을 때는 DB에서 쏴주는 정보를 userInfo에 주면 되므로, 일단은 fakeData 하나를 임의로 주겠다
  const [userInfo, SetUserInfo] = useState(123)

  // ! 리스트 처리 위한 state 추가
  const [listSmokePlaces, setListSmokePlaces] = useState(null);



  axios.defaults.withCredentials = true;



  const qwer = () => {
    axios
      .post('https://ssangdae.gq/list/detail/upload', {
        data: {
          "userId": 1,
          "longitude": "127.12312", 
          "latitude": "34.45632", 
          "comment": "zzzzz",
          "placeName": "종로"
        }
      }
      )
      .then((res) => {
        console.log('after then')
        handleSmokePlaces()
        console.log('submit clicked res : ', res)
      })
      .catch((error) => {
        console.log(error.response)
        console.log(error.request)
        console.log(error.message)
      })
  }



  useEffect(() => {
    handleUserInfo()
  }, [isLogin])

  const handleUserInfo = () => {
    console.log('제발')
    if (isLogin) {
      axios
      .post('https://ssangdae.gq/user/info')
      .then((res) => {
        console.log(res)
        SetUserInfo(res)
      })
      .catch((error) => {
        console.log(error.respsonse)
        console.log(error.request)
        console.log(error.message)
      })
    } else {
      return;
    }
  }



  const handleIsKakao = () => {
    setIsKakao(!isKakao)
  }

  // ! Modal로 내려줘서...
  // const handleUserInfo = () => {
  //   axios
  //     .post('https://ssangdae.gq/user/info')
  //     .then((res) => {
  //       console.log(res)
  //       SetUserInfo(1)
  //     })
  // }

  const handleIsGuest = () => {
    setIsGuest(!isGuest)
    setIsModal(false);
  }

  const handleIsLogin = () => {
    setIsLogin(!isLogin)
  }

  const handleIsSignUp = () => {
    setIsSignUp(!isSignUp)
  }

  // ! count 얌생이 수정 필요
  useEffect(() => {
    // if (count === 0) {
      handleListSmokePlaces()
    //   setCount(1)
    // }
  }, [mapClickedPlace])

  const handleListSmokePlaces = () => {
    axios
      .post('https://ssangdae.gq/list', {
        latitude: mapClickedPlace.lat,
        longitude: mapClickedPlace.lng
      })
      .then((res) => {
        // ! zxcvzxcv
        setListSmokePlaces(res.data);
        console.log('list res :', res)
      })
  }

  // ! 지도상의 위치를 클릭했을 때,
  // ! 1. 해당 위치를 지도의 중앙에 위치시키고
  // ! 2. 해당 위치에 마커(통통 튀는 animation 적용됨)를 놓는다
  const handleMapClick = (latitude, longitude) => {
    setMapCenter({ lat: latitude, lng: longitude });
    setMapClickedPlace({ lat: latitude, lng: longitude });
  }

  // ! List, Map 의 특정 위치(이미 DB에 등록된 위치 중 하나)를 클릭했을 때,
  // ! 해당 위치의 정보를 담은 /list/detail로 넘어간다
  const handleExistingPlaceInfo = (smokePlace) => {
    setExistingPlaceInfo(smokePlace)
  }

  useEffect(() => {
    console.log('existingPlaceInfo:', existingPlaceInfo)
  }, [existingPlaceInfo])

  useEffect(() => {
    handleSmokePlaces()
  })

  const handleSmokePlaces = () => {
    if (!smokePlaces) {
      axios.get('https://ssangdae.gq/list/detail/getAllData')
        .then((res) => {
          setSmokePlaces(res.data)
          console.log('smokePlaces : ', res.data);
        })
        // .catch((err) => {
        //   if (err.response.status === 401) {
        //     setSmokePlaces() // ! 계속 null 로 남으면 무한... 그거 생각해봐야함.
        //   }
        // })
    }
    return;
  }
  // ! -------------------------------------------------------------

  return (
    // ! 로그인 상태에 따라 모달창 띄우기(isLogin 이 false 시 모달창)
    isLogin || isGuest ? (
      <div id="view">
        <Router>
          <Nav handleIsLogin={handleIsLogin} isLogin={isLogin} handleIsGuest={handleIsGuest}/>
          <div onClick={qwer}>12345678</div>
          <Switch>
            {/* <Route exact={true} path="/">
              <PageMain/>
            </Route> */}
            <Route path="/user/info">
              <PageMyPage userInfo={userInfo} isKakao={isKakao} isLogin={isLogin} />
            </Route>
            <Route path="/place/upload">
              <PagePlaceUpload userInfo={userInfo} mapClickedPlace={mapClickedPlace} handleSmokePlaces={handleSmokePlaces} />
            </Route>
            <Route path="/list/detail">
              <PageListDetail existingPlaceInfo={existingPlaceInfo} />
            </Route>
            <Route path="/easterEgg">
              <PageEasterEgg />
            </Route>
            <Route path="/">
              <PageMain smokePlaces={smokePlaces} handleExistingPlaceInfo={handleExistingPlaceInfo} mapCenter={mapCenter} mapClickedPlace={mapClickedPlace} handleMapClick={handleMapClick} isLogin={isLogin} listSmokePlaces={listSmokePlaces}/>
            </Route>
          </Switch>
        </Router>
      </div>
    ) : (
      <Router>
        <div id="overlayWrapper">
          <Modal isSignUp={isSignUp} handleIsSignUp={handleIsSignUp} handleIsLogin={handleIsLogin} handleIsKakao={handleIsKakao} handleIsGuest={handleIsGuest} />
          <div id="overlayView">
              <Nav handleIsLogin={handleIsLogin} isLogin={isLogin} handleIsGuest={handleIsGuest} isModal={isModal}/>
              <div onClick={qwer}>12345678</div>
              <Switch>
                {/* <Route exact={true} path="/">
                  <PageMain/>
                </Route> */}
                <Route path="/user/info">
                  <PageMyPage userInfo={userInfo} isKakao={isKakao} isLogin={isLogin} />
                </Route>
                <Route path="/place/upload">
                  <PagePlaceUpload userInfo={userInfo} mapClickedPlace={mapClickedPlace} handleSmokePlaces={handleSmokePlaces}/>
                </Route>
                <Route path="/list/detail">
                  <PageListDetail existingPlaceInfo={existingPlaceInfo} />
                </Route>
                <Route path="/easterEgg">
                  <PageEasterEgg />
                </Route>
                <Route path="/">
                  <PageMain smokePlaces={smokePlaces} handleExistingPlaceInfo={handleExistingPlaceInfo} mapCenter={mapCenter} mapClickedPlace={mapClickedPlace} handleMapClick={handleMapClick} isLogin={isLogin} listSmokePlaces={listSmokePlaces} isModal={isModal}/>
                </Route>
              </Switch>
          </div>
        </div>
      </Router>
    )
  );
}

// ! connection with server(SUCCEEDED!)
// class App extends React.Component {
//   state = {
//     isLogin: false,
//     message: ""
//   };

//   componentDidMount() {
//     this.connectServer();
//   }
  
//   connectServer() {
//     axios
//     .get("http://13.125.93.37:5000/")
//     .then(res => {
//       this.setState({
//         isLogin: true,
//         message: res.data.data
//       })
//     })
//   }

//   render() { 
//     return (
//       <div>
//         <div>hello world! from CLIENT</div>
//         {this.state.isLogin === false ?
//           <div>loading...</div>
//           :
//           <div>{this.state.message} from SERVER</div>}
//       </div>
//     );
//   }
// }

export default App;