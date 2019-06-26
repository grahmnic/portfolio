import React from 'react';
import ReactDOM from 'react-dom';
import './cell.css';
import Tooltip from '@material-ui/core/Tooltip';
import NotepadModal from '../notepad-modal/notepad-modal.js';
import CalculatorModal from '../calculator-modal/calculator-modal.js';
import Explorer from '../explorer-modal/explorer.js'
import PortfolioModal from '../portfolio-modal/portfolio-modal.js';
import PWModal from '../p&w/pw.js';

class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.clickCount = 0;
        this.clickTimer = '';
        this.state = {
            src: this.props.src,
            modal: this.props.modal,
            name: this.props.name,
            showModal: false,
            highlight: false
        }
        this.closeModal = this.closeModal.bind(this);
        this.forceUpdate = this.forceUpdate.bind(this);
    }

    singleClick = () => {
        this.setState({
            highlight: true
        });
    };

    doubleClick = () => {
        this.setState({
            showModal: true
        });
    };

    click() {
        this.clickCount++;
        if (this.clickCount === 1) {
            this.clickTimer = setTimeout(function () {
                this.clickCount = 0;
                this.singleClick();
            }.bind(this), 300);

        } else if (this.clickCount === 2) {
            clearTimeout(this.clickTimer);
            this.clickCount = 0;
            this.doubleClick();
        }
    }

    closeModal() {
        this.setState({
            showModal: false
        });
    };

    forceUpdateHandler() {
        this.forceUpdate();
    }

    render() {
        const components = {
            NotepadModal: <NotepadModal modalToTop={this.props.modalToTop} closeModal={this.closeModal} forceUpdate={this.forceUpdate} />,
            CalculatorModal: <CalculatorModal modalToTop={this.props.modalToTop} closeModal={this.closeModal} forceUpdate={this.forceUpdate} />,
            //PWModal: <PWModal closeModal={this.closeModal} forceUpdate={this.forceUpdate} />
            Explorer: <Explorer modalToTop={this.props.modalToTop} closeModal={this.closeModal} forceUpdate={this.forceUpdate} />,
            PortfolioModal: <PortfolioModal modalToTop={this.props.modalToTop} acloseModal={this.closeModal} forceUpdate={this.forceUpdate} />
        }

        return (
            <div>
                <div className={'cellContainer ' + this.state.highlight ? 'cellContainerHighlight' : ''}>
                    <div className={this.state.highlight ? 'highlight-square' : 'no-display'}>
                    
                    </div>
                    <Tooltip id="tooltip-right" title={this.state.name} placement="right">
                        <img className="cellImage no-select" src={this.state.src} onClick={() => this.click()}>
                        </img>
                    </Tooltip>
                    <p className="cellText no-select">{this.state.name}</p>
                    <div className="referencePoint">
                        {this.state.showModal ? components[this.state.modal] : <div></div>}
                    </div>
                </div>
            </div>
        )
    }
}

export default Cell;