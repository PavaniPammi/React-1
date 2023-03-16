import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  render() {
    return (
      <div>
        <h1>I am Parent</h1>
        <hr />
        <Child parentToChild="I am from Parent" />
      </div>
    );
  }
}
