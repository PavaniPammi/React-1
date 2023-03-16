import { useState } from "react";
import "./App.css";
import Sibling1 from "./Components/SiblingCommunication/Sibling1";
import Sibling2 from "./Components/SiblingCommunication/Sibling2";
// import ClassComponent from './Components/ClassComponent';
// import StateAndAccess from "./Components/StateAndAccess"
// import Parent from './Components/ParentToChild/Parent';
//import Parent from "./Components/ChildToParent/Parent";

function App() {
  const [initialData, receivedData] = useState("")
  const [object, setObject] = useState({})

  const receiveData = (data) => {
      receivedData(data)
  }
  const receiveDataObject = (data) => {
     setObject(data)
  }
  return (
    <div>
      {/* <ClassComponent/> */}
      {/* <StateAndAccess/> */}
      {/* <Parent/> */}
      {/* <Parent /> */}
      <Sibling1 receiveData = {receiveData} receiveDataObject = {receiveDataObject}/>
      <hr/>
      <Sibling2 msg = {initialData} object = {object}/>
    </div>
  );
}

export default App;
