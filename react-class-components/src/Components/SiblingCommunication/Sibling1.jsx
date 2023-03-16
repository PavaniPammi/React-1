import React, { Component } from 'react'

export default class Sibling1 extends Component {
    constructor(){
        super()
        this.state = {msg : "I am from Sibling-1",
        object : {fname: "Pavani", lname: "Pammi"}
    }
    }
    sendingMsg = () => {
       this.props.receiveData(this.state.msg)
       this.props.receiveDataObject(this.state.object)
    }
  render() {
    
    return (
      <div>
        <h1>I am Sibling 1 Sending data to Sibling 2</h1>
        <button onClick={this.sendingMsg}>Send data to Sibling 2</button>
      </div>
    )
  }
}
