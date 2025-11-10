import { Component } from "react";

export class Car extends Component{
    constructor(){
        super();
        this.state={carStarted:false}
    }
    startcar=()=>{
        this.setState({carStarted:true})
    }
    stopcar=()=>{
        this.setState({carStarted:false})
    }
    render(){
        if(this.state.carStarted == true){
        return <div>
            <p>car started</p>
            <button onClick={this.stopcar}> Stop</button>
        </div>
        }
        else{
            return <div>
                <p>car stopped</p>
                <button onClick={this.startcar}>Start </button>
            </div>
        }
    }
}

export class Bike extends Component{
    constructor(){
        super();
        this.state={bikeStarted:false}
    }
    bikeStart=()=>{
        this.setState({bikeStarted:true})
    }
    bikeStop=()=>{
        this.setState({bikeStarted:false})
    }
    render(){
        return <div>
            {this.state.bikeStarted== true ? <p>Bike is started</p> : <p>Bike is stopped</p>}
            {this.state.bikeStarted ? <button onClick={this.bikeStop}>stop</button> : <button onClick={this.bikeStart}>start</button>} 
            {this.state.bikeStarted &&  <p>Lights on</p>}
            <Lights light={this.state.bikeStarted}/>
        </div>
    }
}

export class Lights extends Component{
    render(){
        return <div>    
            {this.props.light ? <p>Lights on</p>: <p>Lights off</p>}
        </div>
    }
}