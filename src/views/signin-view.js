import React, { Component } from 'react';
import Signin from '../components-signin/signin-window/signin-window.js';

class SigninView extends Component {

    constructor(props) {
        super(props);
    }

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
         <Signin guestLogin={this.props.guestLogin}/>
      </div>
    );
  }
}

export default SigninView;
