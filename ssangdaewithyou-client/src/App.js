import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import axios from 'axios'

// ! ./components
import Nav from './components/Nav';
// import Map from './components/Map';
// import List from './components/List';
// import MyPage from './components/MyPage';
// import PlaceUpload from './components/PlaceUpload';
// import ListDetail from './components/ListDetail';

// ! ./pages
import PageMain from './pages/PageMain';
import PageMyPage from './pages/PageMyPage';
import PagePlaceUpload from './pages/PagePlaceUpload';
import PageListDetail from './pages/PageListDetail';

// ! 호오...
import './App.css';

// ! for fakeData
import { fakeData } from './fakeData/fakeData';



function App() {
  // ! reference
  // const [items, setItems] = useState(initialState.items);
  // const [cartItems, setCartItems] = useState(initialState.cartItems);

  // const addToCart = (itemId) => {
  //   const cartItemsIdList = [];
  //   for (let i = 0; i < cartItems.length; i++) {
  //     cartItemsIdList.push(cartItems[i].itemId);
  //   }    
  //   if (cartItemsIdList.indexOf(itemId) === -1) {
  //     setCartItems([...cartItems, {"itemId": itemId, "quantity": 1}]);
  //   } else {
  //     const tempCartItems = cartItems.slice();
  //     for (let i = 0; i < tempCartItems.length; i++) {
  //       if (tempCartItems[i].itemId === itemId) {
  //         tempCartItems[i].quantity++;
  //         break;
  //       }
  //     }
  //     setCartItems(tempCartItems);
  //   }    
  // }

  // useEffect(() => {
  //   console.log(cartItems)
  //   console.log('up is cartItems /')
  // })

  return (
    <Router>
      <Nav/>
      <Switch>
        <Route exact={true} path="/">
          <PageMain/>
        </Route>
        <Route path="/user/info">
          <PageMyPage/>
        </Route>
        <Route path="/place/upload">
          <PagePlaceUpload/>
        </Route>
        <Route path="/list/detail">
          <PageListDetail/>
        </Route>
      </Switch>
    </Router>
    // ! reference
    // <Router>
    //   <Nav cartItems={cartItems}/>
    //   <Switch>
    //     <Route exact={true} path="/">
    //       <ItemListContainer items={items} addToCart={addToCart} cartItems={cartItems} />
    //     </Route>
    //     <Route path="/shoppingcart">
    //       <ShoppingCart cartItems={cartItems} items={items} setCartItems={setCartItems} />
    //     </Route>
    //   </Switch>
    // </Router>
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