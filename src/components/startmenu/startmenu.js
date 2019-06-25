import React from 'react';
import '../taskbar/taskbar.css';
import './startmenu.css'
import onClickOutside from 'react-onclickoutside';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

function TaskbarGridItem(props) {
    return (
        <div className="taskbarGridContainer">
            <Grid container>
                <Grid className="taskbarGridItem" item md zeroMinWidth>
                    <img src={props.src} alt={props.name} />
                    <p className="taskbarGridText">{props.name}</p>
                </Grid>
            </Grid>
            <Divider />
        </div>
    )
}

class StartMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open
        }
        this.handleClickOpen = this.handleClickOpen.bind(this);
    }

    handleClickOutside = () => {
        this.setState({
            open: false
        });
    };

    handleClickOpen = () => {
        this.setState({
            open: true
        });
    };

    componentDidMount() {
        this.props.setClick(this.handleClickOpen);
    }

    render() {
        if (this.state.open) {
            return (
                <div className="startmenu">
                    <TaskbarGridItem src="http://www.iconwanted.com/downloads/ipapun/original-windows-95/png/24x24/icon-16.png" name="Control Panel"></TaskbarGridItem>
                    <TaskbarGridItem src="http://www.iconwanted.com/downloads/ipapun/original-windows-95/png/24x24/icon-21.png" name="Documents"></TaskbarGridItem>
                    <TaskbarGridItem src="http://www.iconwanted.com/downloads/ipapun/original-windows-95/png/24x24/icon-24.png" name="Help"></TaskbarGridItem>
                    <TaskbarGridItem src="http://www.iconwanted.com/downloads/ipapun/original-windows-95/png/24x24/icon-22.png" name="Settings"></TaskbarGridItem>
                    <TaskbarGridItem src="http://www.iconwanted.com/downloads/ipapun/original-windows-95/png/24x24/icon-26.png" name="Restart"></TaskbarGridItem>
                    <TaskbarGridItem src="http://www.iconwanted.com/downloads/ipapun/original-windows-95/png/24x24/icon-16.png" name="Shut Down"></TaskbarGridItem>
                </div>
            )
        }
        else {
            return (
                <div>
                </div>
            )
        }
    }
}

export default onClickOutside(StartMenu)