import { Component } from "react";

export class InputTag extends Component{
    constructor(){
        super();
        this.state= {inputTag:"", print:""}
    }


    input(){
        this.setState({inputTag:event.target.value})
    }
    print=()=>{
        this.setState({print: this.state.inputTag})
    }

    render() {
      return (
        <div>
           <input type="text" onChange={(event)=> this.input(event)}/>
           <button onClick={this.print}>Print</button>
           <p>{this.state.print}</p>
        </div>
      )
    }
}