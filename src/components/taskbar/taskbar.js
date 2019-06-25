import React from 'react';
import './taskbar.css';
import StartMenu from '../startmenu/startmenu.js'

function TaskbarButton(props) {
    var btnStyle = {
        width: props.size + 'vw'
    }

    return (
        <div className={'taskbarElement'}>
            <button className="taskbarBtn" style={btnStyle} >
                <img className="taskbarImg" src={props.src} alt={props.name} />
                <p className="taskbarText">{props.name}</p>
            </button>
        </div>
    )
}

class Taskbar extends React.Component {
    state = {
        open: false,
        taskbarArray: []
    }

    render() {
        return (
            <div>
                <StartMenu setClick={click => this.clickChild = click}/>
                <div className="taskbar">
                    <div>
                        <div className={'taskbarElement'}>
                            <button className="taskbarStartBtn" onClick={() => this.clickChild()}>
                                <img className="taskbarImg" src="https://vignette.wikia.nocookie.net/logo-timeline/images/1/1e/Eski-Windows-6.png/revision/latest?cb=20131218043827" />
                                <p className="taskbarText"></p>
                            </button>
                        </div>
                        <TaskbarButton size="10" name="Search" src="http://icons.iconarchive.com/icons/seanau/email/256/Search-icon.png" />
                        <TaskbarButton size="10" name="Doodle Roam" src='http://1000logos.net/wp-content/uploads/2017/08/Chrome-Logo.png' />
                        <TaskbarButton size="10" name="Digital Studios" src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Visual_Studio_2013_Logo.svg/2000px-Visual_Studio_2013_Logo.svg.png' />
                        <TaskbarButton size="10" name="File Manager" src='https://4vector.com/i/free-vector-tango-system-file-manager_100475_tango_system_file_manager.png' />
                    </div>
                </div>
            </div>
        )
    }
}

export default Taskbar;