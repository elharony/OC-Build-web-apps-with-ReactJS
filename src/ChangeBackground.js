import React from 'react'

class ChangeBackground extends React.Component {

    constructor(props) {
        super(props)
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        console.log("BAM")
        this.props.changeColor()
    }

    render() {
        return (
            <button onClick={this.clickHandler}>Change Background</button>
        )
    }
}

export default ChangeBackground