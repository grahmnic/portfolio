import React from 'react';
import PropTypes from 'prop-types';
import Tab from './tab.js';

class Tabs extends React.Component {
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,
    }

    constructor(props) {
        super(props);
        this.state = {
            activeTab: this.props.children[0].props.label,
        };
    }

    componentDidMount() {

    }

    onTabClick = (tab) => {
        this.setState({activeTab: tab});
    }

    render() {
        const {
            onTabClick,
            props: {
                children,
            },
            state: {
                activeTab,
            }
        } = this;

        return(
            <div className="tabs">
                <ol className="tab-list">
                    {children.map((child) => {
                        const {label} = child.props;

                        return (
                            <Tab activeTab={activeTab} key={label} label={label} onClick={onTabClick} />
                        );
                    })}
                </ol>
                <div className="tab-content">
                    {children.map((child) => {
                        if(child.props.label !== activeTab) return;
                        return child.props.children;
                    })}
                </div>
            </div>
        );
    }
}

export default Tabs;