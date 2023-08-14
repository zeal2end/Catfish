import React from "react";
import "./Convoy.css";

class Box extends React.Component {
    selectBox = () => {
        this.props.selectBox(this.props.row, this.props.col);
    };
    render() {
        return (
            <div
                className={this.props.boxClass}
                id={this.props.boxId}
                onClick={this.selectBox}
            />
        );
    }
}

export default Box;
