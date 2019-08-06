// Code CoordinatesButton Component Here

import React from 'react';

export default class CoordinatesButton extends React.Component {
    handleCoordinatesButton = event => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }
    
    render() {
        return(
            <button onClick={this.handleCoordinatesButton}>Coordinates Button</button>
        )
    }
}