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

    toggleBold() {
        document.execCommand("Bold", false, true);
        document.getElementById("textarea").focus();
    }

    toggleItalics() {
        document.execCommand("Italic", false, null);
        document.getElementById("textarea").focus();
    }

    toggleUnderline() {
        document.execCommand("Underline", false, null);
        document.getElementById("textarea").focus();
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
                        Writepad! V1.3
                        <div className="modalBar">
                            <div className="modalBtn" onClick={this.props.minimize}>
                                -
                            </div>
                            <div className="modalBtn" onClick={this.props.closeModal}>
                                x
                        </div>
                        </div>

                    </div>
                    <div id="mm-notepad">
                        <div className="ntoolbar">
                            <button className="modalBtn toolbarBtn" onClick={this.toggleBold}><i class="fas fa-bold"></i></button>
                            <button className="modalBtn toolbarBtn" onClick={this.toggleItalics}><i class="fas fa-italic"></i></button>
                            <button className="modalBtn toolbarBtn" onClick={this.toggleUnderline}><i class="fas fa-underline"></i></button>
                        </div>
                        <div id="textarea" suppressContentEditableWarning contentEditable="true" className="modalText"></div>
                    </div>
                </div>
            </Draggable>
        )
    }
}

export default NotepadModal;