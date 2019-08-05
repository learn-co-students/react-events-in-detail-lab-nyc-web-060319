import React, {Component} from 'react';

export default class EyesOnMe extends Component{
    handleClick = event => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
      };
    
    // handleClick = function(event){
    //     this.props.onReceiveCoordinates([event.clientX, event.clientY])
    // }
    render(){
        return <button onClick={this.handleClick}>Coordinates</button>
    }
}