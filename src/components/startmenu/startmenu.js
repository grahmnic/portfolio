import React from 'react';
import '../taskbar/taskbar.css';
import './startmenu.css'
import onClickOutside from 'react-onclickoutside';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import recycle from '../../assets/recycle.png';
import help from '../../assets/help.png';
import documents from '../../assets/documents.png';
import control from "../../assets/control_panel.png";
import quit from '../../assets/shut_down.png';
import settings from '../../assets/settings.png';

class TaskbarGridItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="taskbarGridContainer" onClick={() => this.props.openModal(this.props.modal)}>
                <Grid container>
                    <Grid className="taskbarGridItem" item md zeroMinWidth>
                        <img className="taskbarGridImg" src={this.props.src} alt={this.props.name} />
                        <p className="taskbarGridText">{this.props.name}</p>
                    </Grid>
                </Grid>
                <Divider className="taskbarDivider"/>
            </div>
        );
    }
}

class StartMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open
        }
        this.openModal.bind(this);
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

    openModal(id) {
        var modal = document.getElementById(id);
        if (modal) { 
            modal.onclick.call(modal.id);
        }
    }

    render() {
        if (this.state.open) {
            return (
                <div className="startmenu">
                    <TaskbarGridItem src={control} name="Control Panel" openModal={this.openModal} modal="Landing"></TaskbarGridItem>
                    <TaskbarGridItem src={documents} name="Documents" openModal={this.openModal} modal="Landing"></TaskbarGridItem>
                    <TaskbarGridItem src={help} name="Help" openModal={this.openModal} modal="Landing"></TaskbarGridItem>
                    <TaskbarGridItem src={settings} name="Settings" openModal={this.openModal} modal="Landing"></TaskbarGridItem>
                    <TaskbarGridItem src={recycle} name="Recycle" openModal={this.openModal} modal="Landing"></TaskbarGridItem>
                    <TaskbarGridItem src={quit} name="Shut Down" openModal={this.openModal} modal="Landing"></TaskbarGridItem>
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