import React, { Component } from 'react'

export class DelayedButton extends Component {
    
    handleButtonClick = event => {
        event.persist()
        
        setTimeout(
            () => this.props.onDelayedClick(event),
            this.props.delay
        )        
    }
    
    render() {
        return (
            <button onClick={this.handleButtonClick}>Delay</button>
        )
    }
}

export default DelayedButton
