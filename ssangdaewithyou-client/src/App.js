import React from "react";
import axios from 'axios'

class App extends React.Component {
  state = {
    isLogin: false,
    message: ""
  };

  componentDidMount() {
    this.connectServer();
  }
  
  connectServer() {
    axios
    .get("http://13.125.93.37:5000/")
    .then(res => {
      this.setState({
        isLogin: true,
        message: res.data.data
      })
    })
  }

  render() { 
    return (
      <div>
        <div>hello world! from CLIENT</div>
        {this.state.isLogin === false ?
          <div>loading...</div>
          :
          <div>{this.state.message} from SERVER</div>}
      </div>
    );
  }
}

export default App;