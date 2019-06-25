import React from 'react';
import './footer.css';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer">
                <a href="mailto:grahmnic@gmail.com">email</a>
                <br />
                <p>
                    Created by Nicholas Chen © 2018
                </p>
            </div>
        )
    }

}

export default Footer;