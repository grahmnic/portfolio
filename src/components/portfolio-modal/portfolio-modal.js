import React from 'react';
import './portfolio-modal.css';
import Draggable from 'react-draggable';
import PortfolioApp from '../../Portfolio-App.js';

class PortfolioModal extends React.Component {
    constructor(props) {
        super(props);
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
                <div className="portfolioModal">
                    <div className="handle modalHandle">
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
                    <div className="scrollableModal">
                        <PortfolioApp />
                    </div>
                </div>
            </Draggable>
        )
    }
}

export default PortfolioModal;