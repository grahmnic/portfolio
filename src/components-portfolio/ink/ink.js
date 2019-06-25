import React from 'react';
import '../ink/ink.css';

class Ink extends React.Component {
    constructor(props) {
        super(props);
        this.load = this.load.bind();
    }

    componentDidMount() {
        this.load();
    }

    load() {
        //init cube


        var cloud = setTimeout(function() {

        }, 1500);
    }

    render() {
        return (
            <div className="ink-app">
                <div className="ink-cube">
                    Hello World
                </div>
            </div>
        );
    }
}

export default Ink;