import React from 'react';
import './desktop.css';
import './desktop-context.scss';
import Cell from '../cell/cell.js';
import Banner from '../banner/banner.js';
import FileExplorerIcon from '../../assets/File-Explorer-icon.png';
import Portfolio from '../../assets/Portfolio.png';
import PingModal from '../../assets/ping.png';
import WritePadIcon from '../../assets/writepad.png';

const desktopIcons = [
    {
        src: FileExplorerIcon,
        modal: 'Explorer',
        name: 'File Manager'
    },
    {
        src: 'http://1000logos.net/wp-content/uploads/2017/08/Chrome-Logo.png',
        modal: 'GoogleModal',
        name: 'Doogle Roam'
    },
    {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Visual_Studio_2013_Logo.svg/2000px-Visual_Studio_2013_Logo.svg.png',
        modal: 'PWModal',
        name: 'Digital Studios'
    },
    {
        src: WritePadIcon,
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
    },
    {
        src: PingModal,
        modal: 'PingModal',
        name: 'Ping'
    }
]

class Desktop extends React.Component {
    constructor(props) {
        super(props);
        this.modalList = [];
    }

    componentDidMount() {
        const menu = document.querySelector(".menu");
        let menuVisible = false;

        var desktop = document.getElementById('desktop');
        
        const toggleMenu = command => {
          menu.style.opacity = command === "show" ? 1 : 0;
          menuVisible = !menuVisible;
        };

        const hideMenu = command => {
            menu.style.opacity = 0;
            menu.style.zIndex = -10;
            menuVisible = false;
        }

        const showMenu = command => {
            menu.style.opacity = 1;
            menu.style.zIndex = 250;
            menuVisible = false;
        }
        
        const setPosition = ({ top, left }) => {
          menu.style.left = `${left}px`;
          menu.style.top = `${top}px`;
          showMenu();
        };
        
        window.addEventListener("click", e => {
            hideMenu();
        });
        
        window.addEventListener("contextmenu", e => {
          e.preventDefault();
          const origin = {
            left: e.pageX,
            top: e.pageY
          };
          setPosition(origin);
          return false;
        });
    }

    modalToTop(modal) {
        if (this.modalList.includes(modal)) {
            this.modalList.splice(this.modalList.indexOf(modal), 1);
        }
        this.modalList.push(modal);
        this.modalList = this.modalList.filter(modal => modal.current != null);
        for(var i = 0; i < this.modalList.length; i++) {
            this.modalList[i].current.style.zIndex = i + 2;
        }
    }

    render() {
        return (
            <div id='desktop' className="desktop">
                <div class="menu">
                    <ul class="menu-options">
                        <li class="menu-option">Open Program</li>
                        <li class="menu-option">Call Clippy</li>
                        <li class="menu-option">Inspect</li>
                        <li class="menu-option">Quick Lookup</li>
                    </ul>
                </div>
                <div className="startmenuModals">
                    <Cell display="none" src={null} modal="LandingModal" name="Landing" modalToTop={this.modalToTop.bind(this)}/>
                </div>
                <div className="row">
                    <div className="col-1"><Cell src={desktopIcons[0].src} modal={desktopIcons[0].modal} name={desktopIcons[0].name} modalToTop={this.modalToTop.bind(this)} /></div>
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
                <div className="col-1"><Cell src={desktopIcons[2].src} modal={desktopIcons[2].modal} name={desktopIcons[2].name} modalToTop={this.modalToTop.bind(this)} /></div>
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
                    <div className="col-1"><Cell src={desktopIcons[1].src} modal={desktopIcons[1].modal} name={desktopIcons[1].name} modalToTop={this.modalToTop.bind(this)} /></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-1"><Cell src={desktopIcons[3].src} modal={desktopIcons[3].modal} name={desktopIcons[3].name} modalToTop={this.modalToTop.bind(this)} /></div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                </div>
                <div className="row">
                    <div className="col-1"><Cell src={desktopIcons[4].src} modal={desktopIcons[4].modal} name={desktopIcons[4].name} modalToTop={this.modalToTop.bind(this)} /></div>
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
                    <div className="col-1"><Cell src={desktopIcons[5].src} modal={desktopIcons[5].modal} name={desktopIcons[5].name} modalToTop={this.modalToTop.bind(this)} /></div>
                    <div className="col-1"><Cell src={desktopIcons[6].src} modal={desktopIcons[6].modal} name={desktopIcons[6].name} modalToTop={this.modalToTop.bind(this)} /></div>
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