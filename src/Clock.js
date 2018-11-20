import React from 'react'

class Clock extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            time: new Date().toLocaleString()
        }
        
        this.updateClock = this.updateClock.bind(this)
    }

    componentDidMount() {
        this.updateInterval = setInterval(
            this.updateClock, 
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.updateInterval)
    }

    updateClock() {
        this.setState({
            time: new Date().toLocaleString()
        })
    }

    render() {
        return (
            <div className="clock">{this.state.time}</div>
        )
    }
}

export default Clock