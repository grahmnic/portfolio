import React from 'react';
import './landing.css';
import Draggable from 'react-draggable';

class LandingModal extends React.Component {
    constructor(props) {
        super(props);
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
                <div className="nmodal" ref={this.ref}>
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
                        
                    </div>
                </div>
            </Draggable>
        )
    }
}

export default LandingModal;