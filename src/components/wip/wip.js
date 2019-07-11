import React from 'react';
import './wip.css';
import '../../assets/animate.css';

class WIP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: false
        }
        this.destroy = this.destroy.bind(this);
    }

    componentDidMount() {
        this.setState({
            hidden: false
        });
    }

    destroy() {
        this.setState({hidden:true});
    }

    render() {
        if (!this.state.hidden) {
        return (
            <div className="wip">
                <div className="wip-bg"></div>
                <div className="wip-txt">Still working on this until early 2020, currently only a demo is present.<br/>For updates on this project check out <a target="_blank" href={"https://github.com/grahmnic/portfolio"}>github</a> and <a target="_blank" href={"https://trello.com/b/AQzxX0jM/portfolio-2019"}>trello</a>.<br/><span className="wip-span">CHEERS!</span>
                <br />
                <span className="wip-sm animated infinite heartBeat" onClick={this.destroy}>click here to dismiss</span>
                </div>
            </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }
}

export default WIP;