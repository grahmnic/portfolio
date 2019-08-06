import React, { Component } from 'react';
import './App.css';
import AppView from './views/app-view.js';
import SigninView from './views/signin-view.js';
import LoaderWidget from './components/widgets/loader/loader.js';

const loaderWidget = <LoaderWidget />;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      verified: false
    }
  }
  
  guestLogin() {
    this.setState({
      verified: true
    });
  }

  guestLogout() {
    this.setState({
      verified: false
    });
  }

  render() {
    return (
      <div className="App">
        {
          this.state.verified ? <AppView guestLogout={this.guestLogout.bind(this)}/> : <SigninView guestLogin={this.guestLogin.bind(this)} />
        } 
        {
          loaderWidget
        }
      </div>
    );
  }
}

export default App;
