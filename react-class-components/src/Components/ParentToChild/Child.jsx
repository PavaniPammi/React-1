import React, { Component } from "react";

export default class Child extends Component {
  render() {
    return (
      <div>
        <h1>I am Child</h1>
        <h1>{this.props.parentToChild}</h1>
      </div>
    );
  }
}
