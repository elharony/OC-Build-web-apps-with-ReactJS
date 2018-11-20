import React, { Component } from 'react'
import ChangeBackground from './ChangeBackground'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      background: "green"
    }

    this.changeColor = this.changeColor.bind(this)
  }

  changeColor() {
    this.setState((prevState, props) => {
      let newColor = this.state.background === "green" ? "yellow" : "green"

      return {
        background: newColor
      }
    })
  }

  render() {
    return (
      <div className="App">
        <div 
          className="square"
          style={{width: "300px", height: "300px", background: this.state.background}}
        >
          <ChangeBackground changeColor={this.changeColor}/>
          <h2>What about {this.state.background}?</h2>
        </div>
      </div>
    )
  }
}

export default App
