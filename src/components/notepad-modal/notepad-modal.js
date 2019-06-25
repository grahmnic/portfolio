import React from 'react';
import './notepad-modal.css';
import Draggable from 'react-draggable';

class NotepadModal extends React.Component {
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
                <div className="modal">
                    <div className="handle modalHandle">
                        Writepad! V1.2
                        <div className="modalBar">
                            <div className="modalBtn" onClick={this.props.minimize}>
                                -
                            </div>
                            <div className="modalBtn" onClick={this.props.closeModal}>
                                x
                        </div>
                        </div>

                    </div>
                    <textarea className="modalText">

                    </textarea>
                </div>
            </Draggable>
        )
    }
}

export default NotepadModal;