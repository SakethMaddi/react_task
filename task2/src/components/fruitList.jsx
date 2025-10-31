import { Component } from "react";

export class FruitList extends Component{
    render(){
        return <div>
            <ul>Fruits List: {this.props.fruits.map((value,index)=> (<li key={index}>{value}</li>))}</ul>
        </div>
    }
}