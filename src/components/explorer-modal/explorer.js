import React from 'react';
import '../notepad-modal/notepad-modal.css';
import './explorer.css'
import Draggable from 'react-draggable';
import keyIndex from '../../react-key-index';
import exe from '../../assets/exe.png';
import folder_full from '../../assets/folder_full.png';
import folder_empty from '../../assets/folder_empty.png';
import md_disc_out from '../../assets/md_disc.png';
import md_disc_in from '../../assets/md.png';
import disc from '../../assets/disc.png';
import md_file from '../../assets/md-file.png';
import text from '../../assets/text.png';

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

    getType() {
        if(this.directoryArray.length > 0) {
            return folder_full;
        } else {
            return folder_empty;
        }
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
            return md_file;
        } else if (this.fileType == 'txt') {
            return text;
        } else {
            return exe;
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
    }

    getType() {
        return disc;
    }

    getDate() {
        return this.date;
    }
}

class Directory {
    tree = [];
    currentNode;
    stack = [];

    constructor(directoryTree) {
        this.tree = directoryTree;
        this.currentNode = this.tree[0];
        this.stack = [this.tree[0].name];
        this.populateSizes(this.tree);
    }

    findNode(name) {
        var result = this.tree.find((element) => {
            return element.name == name;
        });
        return result;
    }

    populateSizes() {
        this.tree.forEach((node) => {
            var size = this.calcSize(node.name);
            if(size >= 1000000000) {
                node.size = (Math.round(size/100000000) / 10) + " gb";
            } else if (size >= 1000000) {
                node.size = Math.round(size/1000000) + " mb";
            } else if (size >= 1000) {
                node.size = Math.round(size/1000) + " kb";
            } else {
                node.size = size + " b";
            }
        });
    }

    calcSize(name) {
        var result = 0;
        var currentNode = this.findNode(name);
        if(currentNode.fileType != undefined) {
            result += currentNode.size;
        } else {
            currentNode.directoryArray.forEach((node) => {
                result += this.calcSize(node);
            });
        }
        return result;
    }
}

class Explorer extends React.Component {
    directoryTree = [
        new Disk('C:', 256000000, ['Work Folder', 'About Me', 'README']),
        new File('md', 'README', new date('060514', '231701'), 240000),
        new Folder(['League of Legends', 'Work Stuff'], 'Work Folder', new date('121220', '010455')),
        new File('exe', 'League of Legends', new date('060615', '151644'), 12000000457),
        new Folder(['Summary', 'temp'], 'About Me', new date('121420', '142015')),
        new File('txt', 'Summary', new date('060312', '111350'), 56000),
        new File('txt', 'temp', new date('082419', '093014'), 178),
        new Folder(['Visual Studio Code', 'Empty Folder', 'index'], 'Work Stuff', new date('140577', '034518')),
        new File('exe', 'Visual Studio Code', new date('020202', '044004'), 138023356),
        new File('html', 'index', new date('022218', '095959'), 248880),
        new Folder([], 'Empty Folder', new date('000000', '000000'))
    ]; //given the 0 element is the root!
    directory;

    constructor(props) {
        super(props);
        this.directory = new Directory(this.directoryTree);
        this.state = {
            stack: keyIndex(this.directory.stack, 2),
            currentDirectoryState: keyIndex(this.directoryTree[0].directoryArray, 1)
        }
        this.ref = React.createRef();
    }

    componentDidMount() {
        var e = document.getElementById("mh-explorer");
        e.onmousedown = () => {
            this.props.modalToTop(this.ref);
        }
        e = document.getElementById("mm-explorer");
        e.onmousedown = () => {
            this.props.modalToTop(this.ref);
        }
        this.props.modalToTop(this.ref);
        this.handleTop();
    }

    handleClick(name) {
        if (this.directory.findNode(name).fileType == undefined) {
            this.directory.currentNode = this.directory.findNode(name);
            this.directory.stack.push(this.directory.currentNode.name);
            this.setState({
                stack: keyIndex(this.directory.stack, 2),
                currentDirectoryState: keyIndex(this.directory.currentNode.directoryArray, 1)
            });
        }
    }

    handleTop() {
        this.directory.currentNode = this.directoryTree[0];
        this.directory.stack = [this.directoryTree[0].name];
        this.setState({
            stack: keyIndex(this.directory.stack, 2),
            currentDirectoryState: keyIndex(this.directory.currentNode.directoryArray, 1)
        });
    }

    handleBack(name) {
        for (var i = 0; i < this.directoryTree.length; i++) {
            for (var x = 0; x < this.directoryTree[i].directoryArray.length; x++) {
                var temp = this.directoryTree[i].directoryArray[x];
                if (this.directoryTree[i].directoryArray[x] != undefined && this.directoryTree[i].directoryArray[x] == name) {
                    this.directory.currentNode = this.directoryTree[i];
                    this.directory.stack.pop();
                    this.setState({
                        stack: keyIndex(this.directory.stack, 2),
                        currentDirectoryState: keyIndex(this.directory.currentNode.directoryArray, 1)
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
                    <div id="mh-explorer" className="handle modalHandle">
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
                    <div id="mm-explorer" className="window">
                        <div className="toolbar">
                            <div className="tabs">
                            </div>
                            <div className="windowNav">
                                <div className="windowToolbar">

                                </div>
                                <div className="directoryToolbar">
                                    <div className="modalBtn directoryBtn" onClick={() => this.handleBack(this.directory.currentNode.name)}>
                                        <i class="fa-sm fas fa-arrow-up"></i>
                                    </div>
                                    <div className="modalBtn directoryBtn" onClick={() => this.handleTop()}>
                                        <i class="fa-sm fas fa-home"></i>
                                    </div>
                                    <nav aria-label="breadcrumb">
                                        <ol class="breadcrumb explorer-breadcrumb">
                                            {this.state.stack.map((obj) =>
                                                <li key={obj.id} class={"breadcrumb-item" + obj.value == this.directory.currentNode.name ? " active" : ""}>{obj.value}</li>
                                            )}
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="mainWindow">
                            <div className="sideNav">
                                <div>
                                    <label>Favorites</label>
                                    <ul className="sideList">
                                        <li>
                                            <div>
                                                Work Folder
                                            </div>
                                            <div>
                                                League of Legends
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <label>Favorites</label>
                                    <ul className="sideList">
                                        <li>
                                            <div>
                                                Work Folder
                                            </div>
                                            <div>
                                                League of Legends
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <label>Favorites</label>
                                    <ul className="sideList">
                                        <li>
                                            <div>
                                                Work Folder
                                            </div>
                                            <div>
                                                League of Legends
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="directories">
                                <ul className="directoriesList">
                                    {this.state.currentDirectoryState.map((obj) =>
                                        <li className="nodeCell" key={obj.id} onClick={() => this.handleClick(obj.value)}>
                                            <img className="nodeImg" src={this.directory.findNode(obj.value).getType()} alt='' />
                                            <span className="nodeText">{obj.value}</span>
                                            <span className="nodeSize">{this.directory.findNode(obj.value).size}</span> 
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