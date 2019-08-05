// Code CoordinatesButton Component Here
import React, {Component} from 'react';



export default class CoordinatesButton extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    onButtonClick = (event) => {
        // console.log(event);
        const arr = [event.clientX, event.clientY];
        this.props.onReceiveCoordinates(arr);
    }

    render() {
        return (
            <button onClick={this.onButtonClick}/>
        );
    }
}