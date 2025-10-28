import { Component } from "react";

export class UserProfile extends Component{
    render() {
         const { name, email, hobbies } = this.props.user;
      return (
        <div>
           <h4>Name:{name}</h4>
           <p>Email:{email}</p>
           <ul>Hobbies: {hobbies.map((value,index) => (<li key={index}>{value}</li>))}</ul>
        </div>
      )
    }
}