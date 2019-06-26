import React from 'react';
import './portfolio-modal.css';
import Draggable from 'react-draggable';
import PortfolioApp from '../../Portfolio-App.js';

class PortfolioModal extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    componentDidMount() {
        var e = document.getElementById("mh");
        e.onmousedown = () => {
            this.props.modalToTop(this.ref);
        }
        e = document.getElementById("mm");
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
                defaultPosition={{ x: 100, y: -400 }}
                position={null}
                grid={[25, 25]}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}
            >
                <div className="portfolioModal" ref={this.ref}>
                    <div id="mh" className="handle modalHandle">
                        MyPortfolio V1.0
                        <div className="modalBar">
                            <div className="modalBtn" onClick={this.props.minimize}>
                                -
                            </div>
                            <div className="modalBtn" onClick={this.props.closeModal}>
                                x
                        </div>
                        </div>

                    </div>
                    <div id="mm" className="scrollableModal">
                        <PortfolioApp />
                    </div>
                </div>
            </Draggable>
        )
    }
}

export default PortfolioModal;