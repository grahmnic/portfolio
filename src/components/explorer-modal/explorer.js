import React from 'react';
import '../notepad-modal/notepad-modal.css';
import './explorer.css'
import Draggable from 'react-draggable';
import keyIndex from '../../react-key-index';

var folderSrc = 'http://www.iconwanted.com/downloads/ipapun/original-windows-95/png/24x24/icon-4.png';
var txtSrc = 'http://www.iconwanted.com/downloads/ipapun/original-windows-95/png/24x24/icon-64.png';
var mdSrc = 'http://www.iconwanted.com/downloads/ipapun/original-windows-95/png/24x24/icon-60.png';
var diskSrc = 'http://www.iconwanted.com/downloads/ipapun/original-windows-95/png/24x24/icon-68.png';
var exeSrc = 'http://www.iconwanted.com/downloads/ipapun/original-windows-95/png/24x24/icon-3.png';

class date {
    date = {
        mm: String,
        dd: String,
        yy: String
    };

    time = {
        hour: String,
        min: String,
        second: String
    };

    constructor(date, time) {
        //date is a integer and so is time
        this.date.mm = String(date).substring(0, 2);
        this.date.dd = String(date).substring(2, 4);
        this.date.yy = String(date).substring(4, 6);

        this.time.hour = String(time).substring(0, 2);
        this.time.min = String(time).substring(2, 4);
        this.time.second = String(time).substring(4, 6);
    }

    getDateTime(format) {
        var result;
        if (format == 'eng') {
            result = this.date.mm + '/' + this.date.dd + '/' + this.date.yy;
        } else {
            result = this.date.dd + '/' + this.date.mm + '/' + this.date.yy;
        }
        result += ' ' + this.time.hour + ':' + this.time.min + ':' + this.time.second;
        return result;
    }

    getType() {
        return 'date';
    }
}

class Folder {
    name;
    date;
    size;
    directoryArray = [];

    constructor(directoryArray, name, date) {
        this.directoryArray = directoryArray;
        this.name = name;
        this.date = date;
        this.size = this.calcSize();
    }

    sortByName() {
        this.directoryArray.sort(function (a, b) {
            if (a.getName() < b.getName()) {
                return -1;
            }
            if (a.getName() > b.getName()) {
                return 1;
            }
            return 0;
        });
    }

    calcSize() {
        var result;
        this.directoryArray.forEach((node) => {
            result += node.size;
        });
        return result;
    }

    getType() {
        return folderSrc;
    }

    getDate() {
        return this.date;
    }
}

class File {
    fileType;
    name;
    date;
    size;
    directoryArray = [];

    constructor(fileType, name, date, size) {
        this.fileType = fileType;
        this.name = name;
        this.date = date;
        this.size = size;
    }

    getType() {
        if (this.fileType == 'md') {
            return mdSrc;
        } else if (this.fileType == 'txt') {
            return txtSrc;
        } else {
            return exeSrc;
        }
    }

    getDate() {
        return this.date;
    }
}

class Disk {
    name;
    size;
    capacity;
    directoryArray = [];
    date = '';

    constructor(name, capacity, directoryArray) {
        this.name = name;
        this.capacity = capacity;
        this.directoryArray = directoryArray;
        this.size = this.calcSize();
    }

    calcSize() {
        var result;
        this.directoryArray.forEach((node) => {
            result += node.size;
        });
        return result;
    }

    getType() {
        return diskSrc;
    }

    getDate() {
        return this.date;
    }
}

class Directory {
    tree = [];
    currentNode;

    constructor(directoryTree) {
        this.tree = directoryTree;
        this.currentNode = this.tree[0];
    }

    findNode(name) {
        var result = this.tree.find((element) => {
            return element.name == name;
        });
        return result;
    }
}

class Explorer extends React.Component {
    directoryTree = [
        new Disk('C:', 256, ['Work Folder', 'About Me', 'README']),
        new File('md', 'README', new date('060514', '231701'), 24),
        new Folder(['League of Legends'], 'Work Folder', new date('121220', '010455')),
        new File('exe', 'League of Legends', new date('060615', '151644'), 120),
        new Folder(['Summary'], 'About Me', new date('121420', '142015')),
        new File('txt', 'Summary', new date('060312', '111350'), 56)
    ]; //given the 0 element is the root!
    directory = new Directory(this.directoryTree);

    constructor(props) {
        super(props);
        this.directoryTree[0].directoryArray = keyIndex(this.directoryTree[0].directoryArray, 1);
        this.state = {
            currentDirectoryState: this.directoryTree[0].directoryArray
        }
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

    handleClick(name) {
        if (this.directory.findNode(name).fileType == undefined) {
            this.directory.currentNode = this.directory.findNode(name);
            this.directory.currentNode.directoryArray = keyIndex(this.directory.currentNode.directoryArray, 1);
            this.setState({
                currentDirectoryState: this.directory.currentNode.directoryArray
            });
        }
    }

    handleBack(name) {
        var test = 0;
        for (var i = 0; i < this.directoryTree.length; i++) {
            for (var x = 0; x < this.directoryTree[i].directoryArray.length; x++) {
                var temp = this.directoryTree[i].directoryArray[x];
                if (this.directoryTree[i].directoryArray[x] != undefined && this.directoryTree[i].directoryArray[x].value == name) {
                    this.directory.currentNode = this.directoryTree[i];
                    this.directory.currentNode.directoryArray = keyIndex(this.directory.currentNode.directoryArray, 1);
                    this.setState({
                        currentDirectoryState: this.directory.currentNode.directoryArray
                    });
                }
            }
        }
    }

    render() {
        return (
            <Draggable
                axis="both"
                handle=".handle"
                defaultPosition={{ x: 100, y: 250 }}
                position={null}
                grid={[25, 25]}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}
            >
                <div className="modalExplorer" ref={this.ref}>
                    <div id="mh" className="handle modalHandle">
                        File Manager
                        <div className="modalBar">
                            <div className="modalBtn" onClick={this.props.minimize}>
                                -
                            </div>
                            <div className="modalBtn" onClick={this.props.closeModal}>
                                x
                        </div>
                        </div>
                    </div>
                    <div id="mm" className="window">
                        <div className="toolbar">
                            <div className="tabs">
                            </div>
                            <div className="windowNav">
                                <div className="modalBtn" onClick={() => this.handleBack(this.directory.currentNode.name)}>
                                    B
                                </div>
                            </div>
                        </div>
                        <div className="mainWindow">
                            <div className="sideNav">
                            </div>
                            <div className="directories">
                                <ul className="directoriesList">
                                    {this.state.currentDirectoryState.map((obj) =>
                                        <li className="nodeCell" key={obj.id} onClick={() => this.handleClick(obj.value)}>
                                            <img className="nodeImg" src={this.directory.findNode(obj.value).getType()} alt='' />
                                            <span className="nodeText">{obj.value}</span>
                                            <span className="nodeDate">{this.directory.findNode(obj.value).getDate().getDateTime('eng')}</span>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Draggable>
        )
    }
}

export default Explorer;