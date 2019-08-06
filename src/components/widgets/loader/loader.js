import React from 'react';
import './loader.css';

class LoaderWidget extends React.Component {

    constructor(props) {
        super(props);
        this.val = 3;
    }

    componentDidMount() {

    }

    test() {
        this.val = this.val + 1;
        return this.val;
    }

    render() {
        return (
            <div>
                TEST
            </div>
        );
    }
}

export default LoaderWidget;