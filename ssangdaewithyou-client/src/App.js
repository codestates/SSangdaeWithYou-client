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

  // ! List, Map 둘 다 구현해야 함
  // ! List
  // ! Map
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
              <PageMain smokePlaces={smokePlaces} handleExistingPlaceInfo={handleExistingPlaceInfo} />
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
                  <PageMain smokePlaces={smokePlaces} handleExistingPlaceInfo={handleExistingPlaceInfo} />
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