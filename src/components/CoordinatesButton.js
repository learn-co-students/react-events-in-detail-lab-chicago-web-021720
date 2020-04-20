import React from 'react'

class CoordinatesButton extends React.Component {
    render() {
        return <button onClick={event => this.props.onReceiveCoordinates([event.clientX, event.clientY])}></button>
    }
}

export default CoordinatesButton