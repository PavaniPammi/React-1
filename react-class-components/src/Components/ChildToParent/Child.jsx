import React, { Component } from 'react'

export default class Child extends Component {
    state = {
        string: "I am from Child",
        list:["c1", "c2", "c3"],
        object : {fname: "Pavani", lname: "Pammi"}

    }
    sendString = () => {
        this.props.receiveString(this.state.string)
    }
    sendList = () => {
        this.props.receiveList(this.state.list)
    }
    sendObject = () => {
        this.props.receiveObject(this.state.object)
    }


  render() {
    return (
      <div>
       <h1>I am Child</h1>
       <button onClick = {this.sendString}>Sending String to Parent Component </button><br/>
       <button onClick = {this.sendList}>Sending List to Parent Component </button><br/>
       <button onClick = {this.sendObject}>Sending Object to Parent Component </button><br/>
      </div>
    )
  }
}
