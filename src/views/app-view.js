import React, { Component } from 'react';
import Banner from '../components-portfolio/banner/banner.js'
import Desktop from '../components/desktop/desktop.js';
import WIP from '../components/wip/wip.js';
import Taskbar from '../components/taskbar/taskbar.js';

class AppView extends Component {

    constructor(props) {
        super(props);
    }

  componentDidMount() {
    var modal = document.getElementById("Landing");
    if (modal) { 
        modal.click();
    }
  }

  render() {
    return (
      <div>
         <WIP />
         <Banner />
         <Desktop />
         <Taskbar guestLogout={this.props.guestLogout}/>
      </div>
    );
  }
}

export default AppView;
