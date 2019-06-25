import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import './navbar.css';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { toggled: 'swipe', iconType: 'add_circle', iconRotate: '' };
        this.toggleNav = this.toggleNav.bind(this);
        this.navRef = React.createRef();
    }

    toggleNav() {
        if (this.state.toggled == '')
            this.setState({
                toggled: 'swipe',
                iconType: 'add_circle',
                iconRotate: 'iconRotateOpen'
            })
        else {
            this.setState({
                toggled: '',
                iconType: 'remove_circle',
                iconRotate: 'iconRotateClose'
            })
        }
    }

    render() {
        return (
            <div>
                <div className='nav' id="nav">
                    <IconButton className="navIcon" onClick={this.toggleNav}>
                        <Icon className={this.state.iconRotate} color="primary">
                            add_circle
                        </Icon>
                    </IconButton>
                    <div className={'navbar ' + this.state.toggled} ref="navRef">
                        <a href="#" className="navbar-link">About Me</a>
                        <a href="#" className="navbar-link">Projects</a>
                        <a href="#" className="navbar-link">Contacts</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;