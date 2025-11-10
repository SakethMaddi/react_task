import { Component } from "react";


export class Unmounting extends Component{
    constructor(){
        super();
        this.state={time:0,timer:""}
    }
    componentDidMount(){
        this.state.timer=setInterval(()=>{this.setState({time:this.state.time+1})},2000)
    }
    componentWillUnmount(){

        clearInterval(this.state.timer)
        this.setState({time:0,timer:""})
    }
    render(){

    return <div>
      <h1>Unmounting example</h1>
    </div>
    }
}