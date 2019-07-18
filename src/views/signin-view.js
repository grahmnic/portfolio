import React, { Component } from 'react';
import Signin from '../components-signin/signin-window/signin-window.js';

class SigninView extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
         <Signin />
      </div>
    );
  }
}

export default SigninView;
