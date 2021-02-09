import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function PageEasterEgg() {
  
  return (
    <Router>
      <Switch>
        <Route path="/easterEgg/LeaderUncle">
          <div className="easterEgg">
            <img src="../img/1.jpg" className="portrait" id="LeaderUncle" alt="profile"/>
          </div>
        </Route>
        <Route path="/easterEgg/SecondUncle">
          <div className="easterEgg">
            <img src="../img/2.jpg" className="portrait" id="SecondUncle" alt="profile"/>
          </div>
        </Route>
        <Route path="/easterEgg/MiddleUncle">
          <div className="easterEgg">
            <img src="../img/3.jpg" className="portrait" id="MiddleUncle" alt="profile"/>
          </div>
        </Route>
        <Route path="/easterEgg/BabyUncle">
          <div className="easterEgg">
            <img src="../img/4.jpg" className="portrait" id="BabyUncle" alt="profile"/>
          </div>
        </Route>
      </Switch>
    </Router>
    )
}

export default PageEasterEgg;