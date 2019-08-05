import React, {Component} from 'react';

export default class EyesOnMe extends Component{
    handleClick = event => {
        event.persist();
      
        setTimeout(() => {
            this.props.onDelayedClick(event);
          }, this.props.delay);
      };

    render(){
        return <button onClick={this.handleClick}>Delayed</button>;
    }
}