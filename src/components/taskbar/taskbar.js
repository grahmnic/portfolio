import React from 'react';
import './taskbar.css';
import StartMenu from '../startmenu/startmenu.js'
import FileExplorer from '../../assets/File-Explorer-icon.png';

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
            <table class="taskbar">
                <tr>
                    <StartMenu setClick={click => this.clickChild = click}/>
                    <td className="startCol">
                        <div className={'taskbarElement'}>
                            <button className="taskbarStartBtn" onClick={() => this.clickChild()}>
                                <img className="taskbarImg" src="https://vignette.wikia.nocookie.net/logo-timeline/images/1/1e/Eski-Windows-6.png/revision/latest?cb=20131218043827" />
                                <p className="taskbarText"></p>
                            </button>
                        </div>
                    </td>
                    <td>
                        <TaskbarButton size="10" name="Search" src="http://icons.iconarchive.com/icons/seanau/email/256/Search-icon.png" />
                    </td>
                    <td><TaskbarButton size="10" name="Doodle Roam" src='http://1000logos.net/wp-content/uploads/2017/08/Chrome-Logo.png' /></td>
                    <td><TaskbarButton size="10" name="Digital Studios" src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Visual_Studio_2013_Logo.svg/2000px-Visual_Studio_2013_Logo.svg.png' /></td>
                    <td><TaskbarButton size="10" name="File Manager" src={FileExplorer} /></td>
                    <td></td>
                </tr>
            </table>
        )
    }
}

export default Taskbar;