// Code CoordinatesButton Component Here

import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
    render() {
        return (
            <button onClick={event => {
                const toLog = [event.clientX, event.clientY]
                this.props.onReceiveCoordinates(toLog)
            }}></button>
        );
    }
}