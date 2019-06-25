import React from 'react';
import './header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.mixup = this.mixup.bind(this);
        this.state = {
            name: '',
            blink: 'deactivated'
        }
    }

    componentWillMount() {
        this.mixup();
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
        clearInterval(this.interval);
    }

    mixup() {
        var counter = 0;
        /*var intv = window.setInterval(function () {
            var chars = "!@#$%^&*()_+~`|}{[]\:;?><,./-=0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
            var name = ['','','','','','','','','','','','',''];
            var realname = ['N','i','c','h','o','l','a','s',' ','C','h','e','n'];
            for (var i = 0; i < 13; i++) {
                name[i] = chars[Math.floor(Math.random() * chars.length)];
            }

            var diff = counter/10;
            for (var i = 0; i < parseInt(diff, 10) + 1; i++) {
                name[i] = realname[i];
            }

            this.setState({
                name: name
            });

            if (++counter === 130) {
                window.clearInterval(intv);
            }
        }.bind(this), 40)*/
        this.timeout = setTimeout( function() {
            this.interval = setInterval(function() {
                var blinker = this.state.blink;
                if (blinker == 'on') {
                    blinker = 'off';
                    document.getElementById('blink').classList.remove('blinker');
                } else {
                    blinker = 'on';
                    document.getElementById('blink').classList.add('blinker');
                }
                this.setState({
                    blink: blinker
                })
            }.bind(this), 700);
        }.bind(this), 0);
    }

    render() {
        return (
            <div className="banner header">
                <div className="intro animated fadeIn" id="name">
                    <span className='blink-intro' id='blink-title'></span>Nicholas Chen<span className='whitespace' id='blink'>&nbsp;&nbsp;&nbsp;</span>
                </div>
                <hr className="divider"></hr>
                {/*<div className="description">
                    Currently attends Stony Brook University as an undergraduate in computer science.
        </div>*/}
            </div>
        )
    }
}

export default Header;