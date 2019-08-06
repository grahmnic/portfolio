import React from 'react';
import './signin-window.css';
import beach1 from '../../assets/beach1.png';
import beach2 from '../../assets/beach2.png';
import beach3 from '../../assets/beach3.png';
import beach4 from '../../assets/beach4.png';

const imgArr = [beach1, beach2, beach3, beach4];

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenImg: imgArr[Math.floor(Math.random(0, imgArr.length))]
        }
        this.handleLogin = this.handleLogin.bind(this);
    }

    componentDidMount() {
        this.setState({
            chosenImg: imgArr[Math.floor(Math.random()*imgArr.length)]
        })
    }

    handleClick() {
        var inputs = document.getElementsByClassName("signin-input");
        var checkbox = document.getElementById("guest");
        for(var i = 0; i < inputs.length; i++) {
            inputs[i].disabled = checkbox.checked;
            inputs[i].value = checkbox.checked ? "guest" : null;
        }
    }

    handleLogin() {
        if (document.getElementById("guest").checked) {
            this.props.guestLogin();
        }
    }

    render() {
        return (
                <div className="signin-window" ref={this.ref}>
                    <div className="handle modalHandle signin-handle">
                        Sign In
                        <div className="modalBar">
                            <div className="modalBtn signin-btn" onClick={this.props.minimize}>
                                ?
                            </div>
                            <div className="modalBtn" onClick={this.props.closeModal}>
                                x
                        </div>
                        </div>

                    </div>
                    <div>
                        <div className="signin-imgPanel">
                            <div className="signin-img"></div>
                        </div>
                        <div className="signin-panel">
                            <span className="signin-title">Sign in</span>
                            <br />
                            <div className="signin-wrapper" style={{float: "left"}}>
                                <div className="signin-body signin-inputs">
                                    <span>Username: </span>
                                    <input className="signin-input" />
                                    <br />
                                    <span>Password: </span>
                                    <input type="password" className="signin-input" />
                                    <br />
                                    <input type="checkbox" id="guest" onClick={this.handleClick} sname="guest" className="signin-checkbox"/>
                                    <label for="guest" className="signin-label">Log In As A Guest</label>
                                </div>
                            </div>
                            <div className="signin-right">
                                <div className="signin-wrapper signin-info">
                                    <div className="signin-body">
                                        Enter your credentials, then press login. If you are a new user, press new user after typing in your new credentials.
                                    </div>
                                </div>
                                <div className="signin-btns">
                                    <button onClick={this.handleLogin} >Log In</button>
                                    <button onClick={this.handleNewUser}>New User</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Signin;