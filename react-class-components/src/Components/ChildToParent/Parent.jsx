import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  constructor(){
    super()
    this.receiveString = this.receiveString.bind(this)
    this.state = {
      receive_string: "",
      receive_list: [],
      receive_object: {},
    };
  }

  // to receive method -2 same wise remaining also  *************

  receiveString(string){
    this.setState({receive_string: string })
  }
  

  // to receive method-1   ****************

  // receiveString = (string) => {
  //   this.setState({ receive_string: string });
  // };
  receiveList = (list) => {
    this.setState({ receive_list: list });
  };
  receiveObject = (object) => {
    this.setState({ receive_object: object });
  };

  render() {
    return (
      <div>
        <h1>I am Parent</h1>
        <p>{this.state.receive_string}</p>
        <p>
          {this.state.receive_list.map((data, i) => (
            <li key={i}>{data}</li>
          ))}
        </p>
        <p>
          {Object.values(this.state.receive_object).map((data, i) => (
            <li key={i}>{data}</li>
          ))}
        </p>
        <p>{this.state.receivedChildData2}</p>
        <hr />
        <Child
          receiveString={this.receiveString}
          receiveList={this.receiveList}
          receiveObject={this.receiveObject}
        />
      </div>
    );
  }
}
