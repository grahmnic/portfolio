import React from 'react';
import './project.css';
import resume2018 from '../../assets/resume2018-2.pdf';

var reactPlayground = {
    backgroundImage: 'url(' + require('../../assets/project1.PNG') + ')',
    backgroundSize: 'auto',
    backgroundRepeat: 'no-repeat'
}

var defaultImage = {
    backgroundImage: 'url(' + require('../../assets/PrayStation.png') + ')',
    backgroundSize: 'auto',
    backgroundRepeat: 'no-repeat'
}

var resume = {
    backgroundImage: 'url(' + require('../../assets/resumepic.PNG') + ')',
    backgroundSize: 'auto',
    backgroundRepeat: 'no-repeat',
}

var homeinspection = {
    backgroundImage: 'url(' + require('../../assets/homeinspection.PNG') + ')',
    backgroundSize: 'auto',
    backgroundRepeat: 'no-repeat',
}

var lasso = {
    backgroundImage: 'url(' + require('../../assets/lasso.PNG'),
    backgroundSize: 'cover',
    backgroundPosition: 'bottom left',
    backgroundRepeat: 'no-repeat'
}

var league = {
    backgroundImage: 'url(' + require('../../assets/league.PNG'),
    backgroundSize: 'cover',
    backgroundPosition: 'bottom left',
    backgroundRepeat: 'no-repeat'
}

var angular = {
    backgroundImage: 'url(' + require('../../assets/angular2icon.png') + ')',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
}

var react = {
    backgroundImage: 'url(' + require('../../assets/react2.png') + ')',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
}

var word = {
    backgroundImage: 'url(' + require('../../assets/wordicon.png') + ')',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
}

var netcore = {
    backgroundImage: 'url(' + require('../../assets/netcore2.png') + ')',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
}

var wordpress = {
    backgroundImage: 'url(' + require('../../assets/wordpress.png') + ')',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
}

var semantic = {
    backgroundImage: 'url(' + require('../../assets/semantic.png') + ')',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
}

var sql = {
    backgroundImage: 'url(' + require('../../assets/sqlserver.png') + ')',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
}

var odata = {
    backgroundImage: 'url(' + require('../../assets/odata2.png') + ')',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
}

var scrum = {
    backgroundImage: 'url(' + require('../../assets/scrum.png') + ')',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
}

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            image: this.props.image,
            description: this.props.description,
            status: this.props.status,
            link: this.props.link,
            exp: this.props.exp
        };
    }

    getImage(image) {
        if (image == 'react-playground') {
            return reactPlayground;
        } else if (image == 'resume') {
            return resume;
        } else if (image == 'homeinspection') {
            return homeinspection;
        } else if (image == 'lasso') {
            return lasso;
        } else if (image == 'league') {
            return league;
        } else {
            return defaultImage;
        }
    }

    getSymbol(exp) {
        switch(exp) {
            case 'react':
                return react;
            case 'angular':
                return angular;
            case 'word':
                return word;
            case 'wordpress':
                return wordpress;
            case 'sql':
                return sql;
            case 'semantic-ui':
                return semantic;
            case 'odata':
                return odata;
            case 'netcore':
                return netcore;
            case 'scrum':
                return scrum;
            default:
                return null;
        }
    }

    render() {
        var exps = this.state.exp ? this.state.exp.toString().split(",") : null;
        var explist = exps ? exps.map((exp) => this.getSymbol(exp)) : null;
        return (
            <div className="project-card">
                <div style={this.getImage(this.state.image)} className="project-image">
                </div>
                <div className="project-body">
                    <div className="project-left-panel">
                        <ul className="badge-img">
                        {explist ? explist.map(function(exp, index) {
                                return <div key={index} className="badge-icon" style={exp}></div>;
                        }) : null}
                        </ul>
                    </div>
                    <div className="project-right-panel">
                        <div className="project-title">
                            {this.state.title}
                        </div>
                        <br />
                        <div className="project-description">
                            {this.state.description}
                        </div>
                        <div className="project-btns">
                            <a className="project-launch-btn" target="_blank" href={this.state.link == 'resume' ? resume2018 : this.state.link}>
                                <i className="fa fa-rocket project-launch-icon"></i>
                                <span className="project-launch-text">Launch</span>
                            </a>
                            <a className="project-source-btn" target="_blank" href={this.state.source}>
                                <i className="fab fa-github project-launch-icon"></i>
                                <span className="project-source-text">Source</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project;