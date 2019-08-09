import React, { Component } from 'react';
import './App.css';
import AppView from './views/app-view.js';
import SigninView from './views/signin-view.js';
import LoaderWidget from './components/widgets/loader/loader.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      verified: false,
      loading: false
    }
    this.loadingOptions = {
      mode: "default",
      title: "Logging In",
      modules: [
        "Awaiting response from server...",
        "Getting user settings...",
        "Loading modules...",
        "Loading application...",
        "Applying user configuration...",
        "Almost there..."
      ],
      callback: null
    }
  }
  
  guestLogin() {
    this.loadingOptions = {
      mode: "default",
      title: "Logging In",
      modules: [
        "Awaiting response from server...",
        "Getting user settings...",
        "Loading modules...",
        "Loading application...",
        "Applying user configuration...",
        "Almost there..."
      ],
      callback: null
    }
    this.loadingOptions.callback = () => {
      this.setState({
        verified: true,
        loading: false
      });
    }
    this.setState({
      loading: true
    });
  }

  guestLogout() {
    this.loadingOptions = {
      mode: "default",
      title: "Logging Out",
      modules: [
        "Awaiting response from server...",
        "Storing user settings...",
        "Unloading modules...",
        "Unloading application...",
        "Saving user configuration...",
        "Almost there..."
      ],
      callback: null
    }
    this.loadingOptions.callback = () => {
      this.setState({
        verified: false,
        loading: false
      });
    }
    this.setState({
      loading: true
    });
  }

  render() {
    return (
      <div className="App">
        {
          this.state.verified ? <AppView guestLogout={this.guestLogout.bind(this)}/> : <SigninView guestLogin={this.guestLogin.bind(this)} />
        }
        {
          this.state.loading ? <LoaderWidget options={this.loadingOptions} /> : null
        }
      </div>
    );
  }
}

export default App;
