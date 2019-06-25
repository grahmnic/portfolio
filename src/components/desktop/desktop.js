import React from 'react';
import './desktop.css';
import Cell from '../cell/cell.js';
import Banner from '../banner/banner.js';
import FileExplorerIcon from '../../assets/File-Explorer-icon.png';
import Portfolio from '../../assets/Portfolio.png';

const desktopIcons = [
    {
        src: FileExplorerIcon,
        modal: 'Explorer',
        name: 'File Manager'
    },
    {
        src: 'http://1000logos.net/wp-content/uploads/2017/08/Chrome-Logo.png',
        modal: '',
        name: 'Doogle Roam'
    },
    {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Visual_Studio_2013_Logo.svg/2000px-Visual_Studio_2013_Logo.svg.png',
        modal: 'PWModal',
        name: 'Digital Studios'
    },
    {
        src: 'http://www.milk.com.hk/sites/default/files/imagecache/largebanner/sites/default/files/notepad_1.png',
        modal: 'NotepadModal',
        name: 'Writepad'
    },
    {
        src: 'https://image.winudf.com/v2/image/YXBwaW52ZW50b3IuYWlfTmljb2xhc0dyZXMzMy5NaW5lY3JhZnRQaXhlbENhbGN1bGF0b3JfaWNvbl8wXzc0NWUwNTYy/icon.png?w=170&fakeurl=1&type=.png',
        modal: 'CalculatorModal',
        name: 'Calculator'
    },
    {
        src: Portfolio,
        modal: 'PortfolioModal',
        name: 'Portfolio'
    }
]

class Desktop extends React.Component {
    render() {
        return (
            <div className="desktop">
                <div className="row">
                    <div className="col-1"><Cell src={desktopIcons[0].src} modal={desktopIcons[0].modal} name={desktopIcons[0].name} /></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                </div>
                <div className="row">
                <div className="col-1"><Cell src={desktopIcons[2].src} modal={desktopIcons[2].modal} name={desktopIcons[2].name} /></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                </div>
                <div className="row">
                    <div className="col-1"><Cell src={desktopIcons[1].src} modal={desktopIcons[1].modal} name={desktopIcons[1].name} /></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"><Cell src={desktopIcons[3].src} modal={desktopIcons[3].modal} name={desktopIcons[3].name} /></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                </div>
                <div className="row">
                    <div className="col-1"><Cell src={desktopIcons[4].src} modal={desktopIcons[4].modal} name={desktopIcons[4].name} /></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"><Cell src={desktopIcons[5].src} modal={desktopIcons[5].modal} name={desktopIcons[5].name} /></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                </div>
                <Banner />
            </div>
        )
    }
}

export default Desktop;