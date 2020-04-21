import React, { Component } from 'react'


export class CoordinatesButton extends Component {
    
    // On click of the button, create an array with two elements: the X and Y coordinates of the mouse. Find these using the event data.
    handleButtonClick = event => { 
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render() {
        return (
            <button onClick={this.handleButtonClick}>Coordinates</button>
        )
    }
}

export default CoordinatesButton
