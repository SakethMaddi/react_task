import { Component } from "react";


export class Message extends Component{
    constructor(){
        super();
        this.state = {greetings:"hi hello!!",switch:"true"}
        this.ClickChange= this.handleClick.bind(this)
        this.true = this.boolen.bind(this)
    }
    handleClick(){
        this.setState({greetings:"how are you"})
    }
    boolen(){
        this.setState({switch:"false"})
    }
    render(){
        return <div>
            <h1>HI</h1>

            <h4>{this.state.greetings}</h4>
            <button onClick={this.ClickChange} >Change</button>

            <p>{this.state.switch}</p>
            <button onClick={this.true}>Change</button>
        </div>
    }
}



export class CounterApp extends Component{
    constructor(){
        super();
        this.state={count:0}
    }
    increament(){
        this.setState({count:this.state.count+1})
    }
    decreament(){
        this.setState({count:this.state.count-1})
    }
    reset =() => {
        this.setState({count:this.state.count-this.state.count})
    }
    render(){
        return <div>
            <h2> Counter App</h2>
            <p>Count:{this.state.count}</p>
            <button onClick={()=> this.increament()}> Increament</button>
            <button onClick={()=> this.decreament()}> Decreament</button>
            <button onClick={this.reset}>Reset</button>
        </div>
    }
}



export class RandomNum extends Component{
    constructor(){
        super();
        this.state={number:0}
    }
    randomnum=()=>{
        const num=Math.round(Math.random()*10)
        this.setState({number:this.state.number-this.state.number+num})
    }
    render(){
        return <div>
            <p>Number:{this.state.number}</p>
            <button onClick={this.randomnum}>Random</button>
        </div>
    }
}


export class TextMes extends Component{
    constructor(){
        super();
        this.state = {message:"hi what you doing"}
        this.answer=this.answer.bind(this)
        this.question=this.question.bind(this)
    }
    answer=()=>{
        this.setState({message:"im writing some react code"})
    }
    question=()=>{
        this.setState({message:"hi what you doing"})
    }
    render() {
      return (
        <div>
            <h4>{this.state.message}</h4>
            <button onClick={this.answer}>Question</button>
            <button onClick={this.question}>Answer</button>
        </div>
      )
    }
}
