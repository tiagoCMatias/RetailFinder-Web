import React, { Component } from 'react';

import { BrowserRouter as Router , /*Route,*/ Switch  } from "react-router-dom";
//import {connect} from "react-redux";

import MainPage from "./mainPage/mainPage";
import MenuBar from "./menuBar/menuBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
          <Switch>
            <MenuBar />
          </Switch>
          <MainPage />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
