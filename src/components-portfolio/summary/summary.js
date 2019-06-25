import React from 'react';
import './summary.css';
import sbulogo from '../../assets/sbudark2.png';
import bioImage from '../../assets/location.png';
import angular from '../../assets/Angular_full_color_logo.svg.png';
import react from '../../assets/1200px-React-icon.svg.png';
import netcore from '../../assets/netcore.png';
import powerbi from '../../assets/microsoft-business-intelligence-magenic-bi-strategies.png';
import sql from '../../assets/SQL.png';
import scrum from '../../assets/scrum-logo.png';

class Summary extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            /*<div className="summary-section">
                <div className="row sbu-section">
                    <div className="col-md-6">
                        <div className="sbu-text">
                            <h2>Budding Application</h2>
                            Nicholas (Nick) attends Stony Brook University as an undergraduate majoring in Computer Science.
                            He is currently looking for an opportunity to jumpstart his career in fullstack development and cyber security <i>(but is honestly open to anything really).</i>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className="sbu-image-src" src={sbulogo}/>
                    </div>
                </div>
                <div className="row bio-section">
                    <div className="col-md-6 bio-text-wrapper">
                        <div className="bio-text">
                            <h2>Application Features</h2>
                            Nick currently lives in the quiet suburbs of Long Island, but he likes to think he lives in Queens so as to call himself a New Yorker. He attended elementary school in Flushing, middle school in Bayside, and highschool in the Bronx <i>(he's practically been everywhere!)</i>
                            <br /><br />While living on campus, he loves to cook italian <i>(it's not just pasta!)</i> and sichuan cuisine. Other pastimes include table tennis, video games, reading high fantasy novels, and surfing the web.
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="bio-outer-image">
                            <img className="bio-image" src={bioImage} />
                        </div>
                    </div>
                </div>
                <div className="row code-section">
                    <div className="col-md-6">
                        <div className="bio-text">
                            <h2>Installation</h2>
                            <div className="row">
                                <div className="col-md-1">
                                    <a className="code-btn" href="https://www.linkedin.com/in/nicholas-chen-b19139127/">
                                        <i className="fab fa-2x fa-linkedin-in"></i>
                                    </a>
                                </div>
                                <div className="col-md-1">
                                    <a className="code-btn" href="https://www.facebook.com/nicholas.chen.92754">
                                        <i className="fab fa-2x fa-facebook"></i>
                                    </a>
                                </div>
                                <div className="col-md-1">
                                    <a className="code-btn" href="https://github.com/grahmnic">
                                        <i className="fab fa-2x fa-github-square"></i>
                                    </a>
                                </div>
                                <div className="col-md-12">
                                <h4>Contact Me</h4>
                                    <textarea placeholder="Leave a message" rows="8" cols="40"></textarea>
                                    <br />
                                    <button>Send</button>
                                </div>
                            </div>
                        </div>
                    </div>*/
                    <div className="col-md-12">
                        <div className="code">
                        &lt;<span className="tag">div</span> name="nick"&gt;
                        <br />&emsp;&lt;<span className="tag">div</span> age="20" zodiac="capricorn"&gt;<br />
                        &emsp;&emsp;&lt;<span className="tag">ul</span> section="interests"&gt;<br />
                        &emsp;&emsp;&emsp;&lt;<span className="tag">li</span>&gt;
                        Shoegaze
                        &lt;<span className="tag">/li</span>&gt;<br />
                        &emsp;&emsp;&emsp;&lt;<span className="tag">li</span>&gt;
                        Web Development
                        &lt;<span className="tag">/li</span>&gt;<br />
                        &emsp;&emsp;&emsp;&lt;<span className="tag">li</span>&gt;
                        World of Warcraft
                        &lt;<span className="tag">/li</span>&gt;<br />
                        &emsp;&emsp;&lt;<span className="tag">/ul</span>&gt;<br />
                        &emsp;&lt;<span className="tag">/div</span>&gt;<br />
                        &lt;<span className="tag">/div</span>&gt;
                        </div>
                    </div>
                /*</div>
                <div className="row skills-section">
                    <div className="col-md-3 scol">
                        <img className="logo" src={angular} />
                    </div>
                    <div className="col-md-3">
                        <img className="logo"src={react} />
                    </div>
                    <div className="col-md-3">
                        <img className="logo" src={sql} />
                    </div>
                    <div className="col-md-3">
                        <img className="logo" src={netcore} />
                    </div>
                    <br />
                    <div className="col-md-6">
                        <img className="microsoft" src={powerbi} />
                    </div>
                    <div className="col-md-6">
                        <img className="scrum" src={scrum} />
                    </div>
                </div>
            </div>*/
        )
    }
}

export default Summary;