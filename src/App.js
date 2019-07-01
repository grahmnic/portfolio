import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './components-portfolio/banner/banner.js'
import Desktop from './components/desktop/desktop.js';
import WIP from './components/wip/wip.js';
import Taskbar from './components/taskbar/taskbar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
         <WIP />
         <Banner />
         <Desktop />
         <Taskbar />
      </div>
    );
  }
}

export default App;
