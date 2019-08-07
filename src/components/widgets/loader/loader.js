import React from 'react';
import './loader.css';

class LoaderWidget extends React.Component {

    constructor(props) {
        super(props);
        this.options = this.props.options;
        this.state = {
            currentModule: "",
            currentBar: ""
        }
    }

    componentDidMount() {
        this.timeouts = [];
        var timeToLoad = (Math.random() * 5000) + 2000;
        setTimeout(function() {
            this.props.options.callback();
        }.bind(this), timeToLoad);
        var modules = this.options.modules;
        var pivot = timeToLoad / modules.length;
        var leftover = 0;
        var prev = 0;
        let cellsToLoad = 33;
        for(let i = 0; i < modules.length; i++) {
            let partition = pivot + (Math.random() < 0.5 ? Math.random() * -(pivot) : Math.random() * pivot);
            leftover += pivot - partition;
            if(i == modules.length - 1) {
                partition += leftover;
            }
            let cells = Math.ceil((partition / timeToLoad) * 33);
            cells = cells > cellsToLoad ? cellsToLoad : cells;
            cellsToLoad -= cells;
            this.timeouts.push(setTimeout(function() {
                this.setState({
                    currentModule: modules[i]
                });
                for(let x = 0; x < cells; x++) {
                   var t = (cells/partition) * x * 2000;
                    this.timeouts.push(setTimeout(function() {
                        this.setState({
                            currentBar: this.state.currentBar + "&#9608;"
                        });
                    }.bind(this), t));
                }
            }.bind(this), prev));
            prev += partition;
        }
    }



    componentWillUnmount() {
        this.timeouts.forEach(clearTimeout);
    }


    render() {
        return (
            <div className="loader">
                <div className="loader-window">
                    <div className="handle modalHandle loader-handle">
                        {this.props.options.title}
                    </div>
                    <div className="loader-body">
                        <div id="module" className="loader-modules">
                            {this.state.currentModule}
                        </div>
                        <div id="loader" className="loader-bar" dangerouslySetInnerHTML={{__html: this.state.currentBar}}>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoaderWidget;