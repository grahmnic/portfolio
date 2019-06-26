import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import './banner.css';
import arrow from '../../assets/arrow.png';
import copied from '../../assets/copied.png';

class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = { toggled: 'swipe', iconType: 'add_circle', iconRotate: '' };
        this.toggleNav = this.toggleNav.bind(this);
        this.navRef = React.createRef();
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.copyEmail = this.copyEmail.bind(this);
        window.onclick = function(event) {
            if(event.target == document.getElementById("modal")) {
                document.getElementById("modal").style.display = "none";
            }
        }
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
    
    openModal() {
        document.getElementById("modal").style.display = "block";
    }

    closeModal() {
        document.getElementById("modal").style.display = "none";
    }

    copyEmail(copyText, id) {
        var text = document.createElement('textarea');
        text.innerText = copyText;
        document.body.appendChild(text);
        text.select();
        document.execCommand("copy");
        text.remove();
        var icon = document.getElementById(id);
        var tooltip = document.createElement('span');
        tooltip.innerText = "Copied";
        tooltip.style.fontFamily="'VT323', monospace";
        icon.parentElement.appendChild(tooltip);
        tooltip.classList.add('modal-tooltip');
        setTimeout(function() {
            tooltip.remove();
        }, 4000);
    }

    render() {
        return (
            <div class="banner">
                <div className='nav1' id="nav">
                    <IconButton className="navIcon" onClick={this.toggleNav}>
                        <Icon className={this.state.iconRotate} color="primary">
                            add_circle
                        </Icon>
                    </IconButton>
                    <div className={'navbar1 ' + this.state.toggled} ref="navRef">
                        <a href={window.location.href} className="navbar-link">Home</a>
                        <a href="#" className="navbar-link">Projects</a>
                        <a href="#" onClick={this.openModal} className="navbar-link">Contacts</a>
                    </div>
                </div>
                <div id="modal" className="modal">
                    <div className="content">
                        <span onClick={this.closeModal} className="close">&times;</span>
                        <div id="fix" onClick={() => this.copyEmail("grahmnic@gmail.com", "gmail")} style={{transform: "translateY(1px)"}} className="modal-frame">
                            <i id="gmail" className="modal-icon fas fa-envelope-square fa-4x"></i>
                        </div>
                        <div onClick={() => this.copyEmail("https://www.linkedin.com/in/nicholas-chen-b19139127/", "linkedin")} className="modal-frame">
                            <i id="linkedin" className="modal-icon fab fa-linkedin fa-4x"></i>
                        </div>
                        <div onClick={() => this.copyEmail("https://github.com/grahmnic", "github")} className="modal-frame">
                            <i id="github" className="modal-icon fab fa-github-square fa-4x"></i>
                        </div>
                        <img class="modal-image" src={arrow}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner;