import React from 'react';
import './notepad-modal.css';
import Draggable from 'react-draggable';

class NotepadModal extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    componentDidMount() {
        var e = document.getElementById("mh-notepad");
        e.onmousedown = () => {
            this.props.modalToTop(this.ref);
        }
        e = document.getElementById("mm-notepad");
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
                defaultPosition={{ x: 100, y: -200 }}
                position={null}
                grid={[25, 25]}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}
            >
                <div className="nmodal" ref={this.ref}>
                    <div id="mh-notepad" className="handle modalHandle">
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
                    <textarea id="mm-notepad" className="modalText">

                    </textarea>
                </div>
            </Draggable>
        )
    }
}

export default NotepadModal;