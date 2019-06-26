import React from 'react';
import './calculator-modal.css';
import './calculator.css'
import Draggable from 'react-draggable';
import keyIndex from '../../react-key-index';

class arrayObject {
    type = '';
    value = '';

    constructor(typeC, valueC) {
        this.type = typeC;
        this.value = valueC;
    }

    getType() {
        return this.type;
    }

    getValue() {
        return this.value;
    }
}

class CalculatorModal extends React.Component {
    screenArray = [];

    constructor(props) {
        super(props);
        this.state = {
            screenArrayState: []
        }
        this.addToList = this.addToList.bind(this);
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

    addToList(type, value, screenArray) {
        var newObject = new arrayObject(type, value);
        if (screenArray.length > 0) {
            var lastObject = screenArray[screenArray.length - 1];
            if (lastObject.type === 'number') {
                screenArray.push(newObject);
            }
            else {
                if (type === 'number') {
                    screenArray.push(newObject);
                }
                else {
                    screenArray.pop();
                    screenArray.push(newObject);
                }
            }
        }
        else {
            if (type !== 'operator') {
                screenArray.push(newObject);
            }
        }
        screenArray = keyIndex(screenArray, 1);
        this.setState({
            screenArrayState: screenArray
        });
    }

    removeFromList() {
        this.screenArray.pop();
        this.setState({
            screenArrayState: this.screenArray
        });
    }

    clear() {
        this.screenArray = [];
        this.setState({
            screenArrayState: this.screenArray
        });
    }

    calculate() {

        //check for double decimals
        this.screenArray.forEach((object) => {
            var index = this.screenArray.indexOf(object);
            if (object.value === '.') {
                var temp = [];
                temp = this.screenArray.slice(index);
                for (var i = 1; i < temp.length; i++) {
                    if (temp[i].type === 'operator') {
                        break;
                    }
                    else if (temp[i].value === '.') {
                        this.screenArray = [{
                            type: 'error',
                            value: 'ERROR',
                            _typeId: 'err'
                        }];
                        this.setState({
                            screenArrayState: this.screenArray
                        });
                        return;
                    }
                }
            }
        });

        try {
            //consolidate viewable array into calculatable one
            var tempArray = [];
            for (var i = 0; i < this.screenArray.length; i++) {
                var object = this.screenArray[i];
                if (tempArray.length > 0) {
                    //6x
                    if (object.type === 'operator') {
                        tempArray.push(object);
                    }
                    else {
                        var lastObject = tempArray[tempArray.length - 1];
                        if (lastObject.type === 'number') {
                            var lastNumber = tempArray.pop();
                            var newNumber = lastNumber.value + object.value;
                            var combinedObject = new arrayObject('number', newNumber);
                            tempArray.push(combinedObject);
                        }
                        else {
                            tempArray.push(object);
                        }
                    }
                }
                else {
                    tempArray.push(object);
                }
            }

            //perform calculations by shortening temparray until it reaches a number
            var opExists = true;
            while (opExists) {
                //exit loop condition
                var opDetected = false;
                tempArray.forEach((object) => {
                    if (object.type === 'operator') {
                        opDetected = true;
                    }
                });
                if (!opDetected) {
                    break;
                }

                var opXY = tempArray.find(function (element) {
                    return element.value === 'x' || element.value === '/';
                });

                //perform add or subtract
                if (opXY === undefined) {
                    var opAM = tempArray.find(function (element) {
                        return element.value === '+' || element.value === '-';
                    });

                    var middle = tempArray.indexOf(opAM);
                    var op = opAM.value;
                    var prev = parseFloat(tempArray[middle - 1].value);
                    var after = parseFloat(tempArray[middle + 1].value);
                    if (op === '+') {
                        var newObject = new arrayObject('number', String(prev + after));
                        tempArray.splice(middle - 1, 3, newObject);
                    }
                    else {
                        var newObject = new arrayObject('number', String(prev - after));
                        tempArray.splice(middle - 1, 3, newObject);
                    }
                }
                //perform multiply or divide
                else {
                    var middle = tempArray.indexOf(opXY);
                    var op = opXY.value;
                    var prev = parseFloat(tempArray[middle - 1].value);
                    var after = parseFloat(tempArray[middle + 1].value);
                    if (op === 'x') {
                        var newObject = new arrayObject('number', String(prev * after));
                        tempArray.splice(middle - 1, 3, newObject);
                    }
                    else {
                        var newObject = new arrayObject('number', String(prev / after));
                        tempArray.splice(middle - 1, 3, newObject);
                    }
                }
            }

            var result = tempArray[0].value;
            //split result back into viewable form
            var valueArray = [];
            valueArray = String(result).split('');
            var resultArray = [];
            valueArray.forEach((value) => {
                var resultObject = new arrayObject('number', value);
                resultArray.push(resultObject);
            });

            this.screenArray = keyIndex(resultArray, 1);
            this.setState({
                screenArrayState: this.screenArray
            });
        }
        catch (err) {
            this.screenArray = [{
                type: 'error',
                value: 'ERROR',
                _typeId: 'err'
            }];
            this.setState({
                screenArrayState: this.screenArray
            });
        }
    }

    /*calculate(type, value) {
                var lastNumber = this.screenArray.pop();
                var newNumber = lastNumber.value + value;
                var combinedObject = new arrayObject('number', newNumber);
                this.screenArray.push(combinedObject);
    }*/

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
                <div className="modalCalc" ref={this.ref}>
                    <div id="mh" className="handle modalHandle">
                        Calculator
                        <div className="modalBar">
                            <div className="modalBtn" onClick={this.props.minimize}>
                                -
                            </div>
                            <div className="modalBtn" onClick={this.props.closeModal}>
                                x
                        </div>
                        </div>

                    </div>
                    <div id="mm" className="calculator">
                        <div className="screen">
                            <ul className="screenBar">{this.screenArray.map((obj) =>
                                <li className="screenCell" key={obj._typeId}>{obj.value}</li>
                            )}
                            </ul>
                        </div>
                        <div className="pad">
                            <div className="padNum">
                                <button className="padBtn" onClick={() => this.addToList('number', '1', this.screenArray)}>
                                    1
                            </button>
                                <button className="padBtn" onClick={() => this.addToList('number', '2', this.screenArray)}>
                                    2
                            </button>
                                <button className="padBtn" onClick={() => this.addToList('number', '3', this.screenArray)}>
                                    3
                            </button>
                                <button className="padBtn" onClick={() => this.addToList('number', '4', this.screenArray)}>
                                    4
                            </button>
                                <button className="padBtn" onClick={() => this.addToList('number', '5', this.screenArray)}>
                                    5
                            </button>
                                <button className="padBtn" onClick={() => this.addToList('number', '6', this.screenArray)}>
                                    6
                            </button>
                                <button className="padBtn" onClick={() => this.addToList('number', '7', this.screenArray)}>
                                    7
                            </button>
                                <button className="padBtn" onClick={() => this.addToList('number', '8', this.screenArray)}>
                                    8
                            </button>
                                <button className="padBtn" onClick={() => this.addToList('number', '9', this.screenArray)}>
                                    9
                            </button>
                                <button className="padBtn" onClick={() => this.addToList('number', '0', this.screenArray)}>
                                    0
                            </button>
                                <button className="padBtn" onClick={() => this.addToList('number', '.', this.screenArray)}>
                                    .
                                </button>
                                <button className="padBtn" onClick={() => this.calculate()}>
                                    =
                                </button>
                            </div>
                            <div className="padCalc">
                                <button className="padCalcBtn" onClick={() => this.clear()}>
                                    CLR
                                </button>
                                <button className="padCalcBtn" onClick={() => this.addToList('operator', '/', this.screenArray)}>
                                    /
                                </button>
                                <button className="padCalcBtn" onClick={() => this.addToList('operator', 'x', this.screenArray)}>
                                    x
                                </button>
                                <button className="padCalcBtn" onClick={() => this.addToList('operator', '-', this.screenArray)}>
                                    -
                                </button>
                                <button className="padCalcBtn" onClick={() => this.addToList('operator', '+', this.screenArray)}>
                                    +
                                </button>
                                <button className="padCalcBtn" onClick={() => this.removeFromList()}>
                                    DEL
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Draggable>
        )
    }
}

export default CalculatorModal;