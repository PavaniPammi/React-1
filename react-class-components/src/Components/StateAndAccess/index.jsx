import { Component } from 'react';

class StateAndAccess extends Component{
    constructor(){
        super()
        this.state = {
            string: "Pavani",
            array:["Pavani" , "Pammi"],
            object:{
                fname:"pavani",
                lname:"pammi"
            },
            boolean: false
        }
    }
 
    onClickChangeName = () => {
        this.setState(prev => ({boolean: !prev.boolean}))
       

    }

render(){
    var name = this.state.boolean ? "Pavani": "Siva"
    return(
        <div>
        <h1>{this.state.string}</h1>
       <p>{this.state.array.map((item, index) => <li key = {index} >{item}</li>)}</p>
       {/* object passing method-1 */}
       <p>{this.state.object.fname}</p>
       <p>{this.state.object.lname}</p>
       {/* object passing method-2 */}
    {Object.values(this.state.object).map((item,i) => <li key = {i}>{item}</li>)}
    <hr/>
    <center>
        <button onClick ={this.onClickChangeName}>Click Me</button>
        <h1>{name}</h1>
    </center>
       </div>
    )
}
}

export default StateAndAccess