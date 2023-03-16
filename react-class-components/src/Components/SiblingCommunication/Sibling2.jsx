import React, { Component } from 'react'

export default class Sibling2 extends Component {
  render() {
    
    return (
      <div>
        <h1>I am Sibling 2 receive data from Sibling 1</h1>
        <br/>
        <h1>{this.props.msg}</h1>
        <h1>{
            Object.values(this.props.object).map((data,i) => <li key = {i}>{data}</li>)
            }</h1>
      </div>
    )
  }
}
