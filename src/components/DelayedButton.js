import React from 'react'

class DelayedButton extends React.Component {
    handleClick = event => {
        event.persist()
        setTimeout(this.props.onDelayedClick, this.props.delay, event)
    }
    
    render() {
        return <button onClick={this.handleClick}></button>
    }
}

export default DelayedButton