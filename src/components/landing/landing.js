import React from 'react';
import './landing.css';
import Draggable from 'react-draggable';

import nick from '../../assets/nickpixel.png';
import Tabs from '../tabs/tabs.js';
import { request } from 'https';
require('../tabs/tabs.css');

class LandingModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            version: ""
        }
        this.ref = React.createRef();
    }

    componentDidMount() {
        var e = document.getElementById("mh-landing");
        e.onmousedown = () => {
            this.props.modalToTop(this.ref);
        }
        e = document.getElementById("mm-landing");
        e.onmousedown = () => {
            this.props.modalToTop(this.ref);
        }
        this.props.modalToTop(this.ref);
        this.scrape();
    }

    scrape() {
        var cheerio = require('cheerio');
        var request = require('request');

        request({
            method: 'GET',
            url: 'https://cors-anywhere.herokuapp.com/https://github.com/users/grahmnic/contributions',
            headers: {
                "X-Requested-With": ""
            }
        }, function(error, response, html) {
            if (!error && response.statusCode == 200) {
                let $ = cheerio.load(html);
                const data = $('rect.day');
                var arr = [];
                for (let i = 0; i < data.length; i++) {
                    arr.push({
                        "Date": data[i].attribs['data-date'],
                        "Commits": data[i].attribs['data-count']
                    });
                }
                this.scramble(arr);
            }
        }.bind(this));

        // request({
        //     method: 'GET',
        //     url: 'https://github.com/users/grahmnic/contributions'
        // }, (err, res, body) => {
        //     if (err) return console.error(err);
        //     let $ = cheerio.load(body);
        //     const data = $('rect.day');
        //     var arr = [];
        //     for (let i = 0; i < data.length; i++) {
        //         arr.push(data[i].attribs['data-count']);
        //     }
        //     console.log(arr);
        // });

        var req = new XMLHttpRequest();
        req.onreadystatechange = function() {
            if(req.readyState == 4 && req.status == 200) {
                this.getVersion(req.responseText);
            }
        }.bind(this);
        req.open("GET", "https://api.trello.com/1/boards/5d10c331d84b243cecd063bd/?lists=all&cards=all", true);
        req.send(null);
    }

    scramble(data) {
        console.log(data);
    }

    getVersion(data) {
        var jsonData = JSON.parse(data);
        var sprints = jsonData.lists;
        var tasks = jsonData.cards;
        var sprintArr = {};
        for(var i = 0; i < sprints.length; i++) {
            var temp = tasks.filter(task => task.idList == sprints[i].id && !task.dueComplete);
            if (temp.length > 1) {
                this.setState({
                    version: sprints[i].name.split(' ')[1]
                });
                break;
            }
        }
        console.log(jsonData);
        sprints.map(sprint => sprintArr[sprint.id] = tasks.filter(task => task.idList == sprint.id));
        console.log(sprintArr);
    }

    render() {
        return (
            <Draggable
                axis="both"
                handle=".handle"
                defaultPosition={{ x: 100, y: 100 }}
                position={null}
                grid={[25, 25]}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}
            >
                <div className="landingModal" ref={this.ref}>
                    <div id="mh-landing" className="handle modalHandle">
                        User Guide
                        <div className="modalBar">
                            <div className="modalBtn" onClick={this.props.minimize}>
                                -
                            </div>
                            <div className="modalBtn" onClick={this.props.closeModal}>
                                x
                        </div>
                        </div>

                    </div>
                    <div id="mm-landing">
                        <div className="landingTabs">
                            <Tabs>
                                <div label="welcome">
                                    <div className="welcomeTab">
                                        <h1 className="welcomeTitle">Welcome to <span className="welcomeSpan1">PORTFOL</span><span className="welcomePeriod">.</span><span className="welcomeSpan2">IO</span><span className="welcomeVersion">{this.state.version}</span></h1>
                                        <div className="welcomePanel">
                                            <div className="welcomeInside">
                                                <img className="welcomeImg" src={nick}/>
                                            </div>
                                            <div className="welcomeTopics">
                                                <button className="welcomeBtn" onClick={() => window.open('https://github.com/grahmnic/portfolio', '_blank')}>Source</button>
                                                <button className="welcomeBtn" onClick={() => window.open('https://trello.com/b/AQzxX0jM/portfolio-2019', '_blank')}>Documentation</button>
                                                <hr className="welcomeDiv" />
                                                <button className="welcomeBtn">Contact Me</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div label="Programs Guide">
                                    Here's how to do shit.
                                </div>
                                <div label="Tracker">
                                    <div className="trackerPanel">
                                        
                                    </div>
                                </div>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </Draggable>
        )
    }
}

export default LandingModal;