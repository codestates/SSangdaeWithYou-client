import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from './components/Nav';
import Modal from './components/Modal';
import PageMain from './pages/PageMain';
import PageMyPage from './pages/PageMyPage';
import PagePlaceUpload from './pages/PagePlaceUpload';
import PageListDetail from './pages/PageListDetail';
import './App.css';
// ! for fakeData
import { fakeData } from './fakeData/fakeData';
import axios from 'axios'

function App() {
  const [isLogin, setIsLogin] = useState(true);
  // ! 아래의 smokePlaces 를 잘 활용해야 함
  // ! smokePlaces 는 (DB)smokePlaces 로 부터 axios
  const [smokePlaces, setSmokePlaces] = useState(fakeData.smokePlaces)
  // ! existingPlaceInfo 는 이미 DB에 저장된 장소에 관련한 onClick 실행 시 관련 정보를 다루는 상태
  // ! Map 이던 List 이던 smokePlaces 의 데이타라는 점을 이용
  const [existingPlaceInfo, setExistingPlaceInfo] = useState(null)
  // ! UI/UX 위해 center, clickedPlace 를 map에서 옮겨옴(clickedPlace 는 수정할 수도 있다)
  const [mapCenter, setMapCenter] = useState({ lat: 37.510744, lng: 126.9818086 }); // ! 대략 서울 중심
  const [mapClickedPlace, setMapClickedPlace] = useState({ lat: 0, lng: 0 })
  
  // ! 지도상의 위치를 클릭했을 때,
  // ! 1. 해당 위치를 지도의 중앙에 위치시키고
  // ! 2. 해당 위치에 마커(통통 튀는 animation 적용됨)를 놓는다
  const handleMapClick = (latitude, longitude) => {
    setMapCenter({ lat: latitude, lng: longitude });
    setMapClickedPlace({ lat: latitude, lng: longitude });
  }

  // ! List, Map 의 특정 위치(이미 DB에 등록된 위치 중 하나)를 클릭했을 때,
  // ! 해당 위치의 정보를 담은 /list/detail로 넘어간다
  const handleExistingPlaceInfo = (smokePlaceId) => {
    console.log(smokePlaceId)
    setExistingPlaceInfo(smokePlaceId)
  }

  useEffect(() => {
    console.log(123)
  }, [existingPlaceInfo])

  // ! 서버와의 연계(대충 흐름만)------------------------------------------
  // const [smokePlaces, setSmokePlaces] = useState(null)
  // ! 서버와의 연계(대충 흐름만)------------------------------------------
  // useEffect(() => {
  //   handleSmokePlaces()
  // })
  // ! 서버와의 연계(대충 흐름만)------------------------------------------
  // const handleSmokePlaces = () => {
  //   if (!smokePlaces) {
  //     axios.get('주소')
  //       .then((res) => {
  //         console.log(res.data);
  //         setSmokePlaces()
  //       })
  //       .catch((err) => {
  //         if (err.response.status === 401) {
  //           setSmokePlaces() // ! 계속 null 로 남으면 무한... 그거 생각해봐야함.
  //         }
  //       })
  //   }
  //   return;
  // }
  // ! -------------------------------------------------------------

  return (
    // ! 로그인 상태에 따라 모달창 띄우기(isLogin 이 false 시 모달창)
    isLogin ? (
      <div id="view">
        <Router>
          <Nav />
          <Switch>
            {/* <Route exact={true} path="/">
              <PageMain/>
            </Route> */}
            <Route path="/user/info">
              <PageMyPage/>
            </Route>
            <Route path="/place/upload">
              <PagePlaceUpload/>
            </Route>
            <Route path="/list/detail">
              <PageListDetail/>
            </Route>
            <Route path="/">
              <PageMain smokePlaces={smokePlaces} handleExistingPlaceInfo={handleExistingPlaceInfo} mapCenter={mapCenter} mapClickedPlace={mapClickedPlace} handleMapClick={handleMapClick} />
            </Route>
          </Switch>
        </Router>
      </div>
    ) : (
      <Router>
        <div id="overlayWrapper">
          <Modal/>
          <div id="overlayView">
              <Nav/>
              <Switch>
                {/* <Route exact={true} path="/">
                  <PageMain/>
                </Route> */}
                <Route path="/user/info">
                  <PageMyPage/>
                </Route>
                <Route path="/place/upload">
                  <PagePlaceUpload/>
                </Route>
                <Route path="/list/detail">
                  <PageListDetail/>
                </Route>
                <Route path="/">
                  <PageMain smokePlaces={smokePlaces} handleExistingPlaceInfo={handleExistingPlaceInfo} mapCenter={mapCenter} mapClickedPlace={mapClickedPlace} handleMapClick={handleMapClick} />
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