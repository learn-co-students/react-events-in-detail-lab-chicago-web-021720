// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    getCoords = (event) => {
        const mouseCoordsArr = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(mouseCoordsArr)

    }

    render() {
        return(
            <button onClick={this.getCoords}></button>
        )
    }
}