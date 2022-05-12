import React from 'react';
import './Heading.css'

class Heading extends React.Component {
    render() {
    return (
        <div className="heading-container">
            <div className="screen-heading">
                <span>{this.props.head}</span>
            </div>
            <div className="screen-sub-heading">
                <span>{this.props.title}</span>
            </div>
            <div className="heading-seperator">
                <div className="seperator-line"></div>
                <div className="seperator-blob">
                    <div></div>
                </div>
            </div>
        </div>
    );
}
}
export default Heading;
