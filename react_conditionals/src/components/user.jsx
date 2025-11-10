import { Component } from "react";
import './user.css'

export class User extends Component{
    constructor(){
        super();
        this.state ={login: false}
    }
    handleLogin=()=>{
        this.setState({login:true})
    }
    render() {
      return (
        <div  >
          <p>User</p>
          { this.state.login ? <div> <p>Hi welcome back today </p></div> : <div><p>Login user</p></div> }
          <button onClick={()=>this.handleLogin()}>{this.state.login ? "Logout":"Login"}</button>
        </div>
      )
    }
}