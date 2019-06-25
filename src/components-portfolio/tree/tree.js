import React from 'react';
import './tree.css';
import angular from '../../assets/Angular_full_color_logo.svg.png';
import react from '../../assets/1200px-React-icon.svg.png';
import netcore from '../../assets/netcore.png';
import msbi from '../../assets/microsoft-business-intelligence-magenic-bi-strategies.png';
import odata from '../../assets/odata.png';

var stack = {
    backgroundImage: 'url(' + angular + ')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}

var stack2 = {
    backgroundImage: 'url(' + odata + ')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}

var stack3 = {
    backgroundImage: 'url(' + msbi + ')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}

var stack4 = {
    backgroundImage: 'url(' + netcore + ')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}

class Tree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayLabels: true,
            once: false
        }
        this.animateOn = this.animateOn.bind(this);
        this.animateOff = this.animateOff.bind(this);
        this.animate = this.animate.bind(this);
        this.animatePics = this.animatePics.bind(this);
        this.animateText = this.animateText.bind(this);
        this.animateOn2 = this.animateOn2.bind(this);
        this.animateOn3 = this.animateOn3.bind(this);
        this.animateTextOff = this.animateTextOff.bind(this);
    }

    componentDidMount() {
        this.animateOn();
        this.animateText();
        this.animate();
    }

    animate() {
        this.setState({
            once: true
        });
        this.animateOff();
        this.animateTextOff();
        //setTimeout(function() {this.animateText()}.bind(this), 4500);
        //setTimeout(function() {this.animateOn2()}.bind(this), 5000);
        //setTimeout(function() {this.animateOn3()}.bind(this), 6000);
        //setTimeout(function() {this.animatePics()}.bind(this), 6500);
    }

    animateOn() {
        var cubes = document.getElementsByClassName('cube');
        for (var i = 0; i < 5; i++) {
            cubes.item(i).classList.add('cube-adjust');
        }
    }

    animateText() {
        document.getElementsByClassName('label')[0].classList.add('display-none');
        document.getElementsByClassName('label-line')[0].classList.add('display-none');
        document.getElementsByClassName('label')[1].classList.add('display-none');
        document.getElementsByClassName('label-line')[1].classList.add('display-none');
        document.getElementsByClassName('label')[2].classList.add('display-none');
        document.getElementsByClassName('label-line')[2].classList.add('display-none');
        document.getElementsByClassName('label')[3].classList.add('display-none');
        document.getElementsByClassName('label-line')[3].classList.add('display-none');
        document.getElementsByClassName('label')[4].classList.add('display-none');
        document.getElementsByClassName('label-line')[4].classList.add('display-none');
    }

    animateTextOff() {
        document.getElementsByClassName('label')[0].classList.remove('display-none');
        document.getElementsByClassName('label-line')[0].classList.remove('display-none');
        document.getElementsByClassName('label')[1].classList.remove('display-none');
        document.getElementsByClassName('label-line')[1].classList.remove('display-none');
        document.getElementsByClassName('label')[2].classList.remove('display-none');
        document.getElementsByClassName('label-line')[2].classList.remove('display-none');
        document.getElementsByClassName('label')[3].classList.remove('display-none');
        document.getElementsByClassName('label-line')[3].classList.remove('display-none');
        document.getElementsByClassName('label')[4].classList.remove('display-none');
        document.getElementsByClassName('label-line')[4].classList.remove('display-none');
    }

    animateOn3() {
        var cubes = document.getElementsByClassName('cube');
        for (var i = 0; i < 5; i++) {
            cubes.item(i).classList.add('cube-scale');
        }
    }

    animateOn2() {
        var cubes = document.getElementsByClassName('cube');
        cubes[0].classList.add('cube-move-1');
        cubes[1].classList.add('cube-move-2');
        cubes[2].classList.add('cube-move-3');
        cubes[3].classList.add('cube-move-4');
        cubes[4].classList.add('cube-move-5');
    }

    animateOff() {
        var cubes = document.getElementsByClassName('cube');
        for (var i = 0; i < 5; i++) {
            cubes.item(i).classList.remove('cube-adjust');
        }
        document.getElementsByClassName('box')[0].classList.add('box-top');
    }

    animatePics() {
        var cubes = document.getElementsByClassName('cube');
        for (var i = 0; i < 5; i++) {

        }
    }

    render() {
        return (
            <div className="width">
                {/*<div className="cover">
                    <div className="topleft">
                    </div>
                    <div className="topright">
                    </div>
                    <div className="bottomleft">
                    </div>
                    <div className="bottomright">
                    </div>
        </div>*/}
                <div className="box">
                    <div className="cube cube-1">
                        <span className="face top"></span>
                        {this.state.displayLabels ? <div><hr className="label-line" />
                            <p className="label">UI</p></div> : null}
                        <span className="face left"></span>
                        <span className="face right"></span>
                    </div>
                    <div className="cube cube-2">
                        <span className="face top"></span>
                        {this.state.displayLabels ? <div><hr className="label-line" />
                            <p className="label">Services</p></div> : null}
                        <span className="face left"></span>
                        <span className="face right"></span>
                    </div>
                    <div className="cube cube-3">
                        <span className="face top"></span>
                        {this.state.displayLabels ? <div><hr className="label-line" />
                            <p className="label">API</p></div> : null}
                        <span className="face left"></span>
                        <span className="face right"></span>
                    </div>
                    <div className="cube cube-4">
                        <span className="face top"></span>
                        {this.state.displayLabels ? <div><hr className="label-line" />
                            <p className="label">Data Access</p></div> : null}
                        <span className="face left"></span>
                        <span className="face right"></span>
                    </div>
                    <div className="cube cube-5">
                        <span className="face top"></span>
                        {this.state.displayLabels ? <div><hr className="label-line" />
                            <p className="label">Source</p></div> : null}
                        <span className="face left"></span>
                        <span className="face right"></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tree;