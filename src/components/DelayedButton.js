// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    handleButtonClick = (event) => {
        event.persist();
        const delayed = () => {
            this.props.onDelayedClick(event);
        }
        setTimeout(delayed, this.props.delay);
    }

    render() {
        return (
            <button onClick={this.handleButtonClick}/>
        );
    }
}