import React, { Component } from 'react';
import './App.css';
import AppView from './views/app-view.js';
import SigninView from './views/signin-view.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      verified: false
    }
  }

  render() {


    return (
      <div className="App">
         <AppView />
      </div>
    );
  }
}

export default App;
