import { Component } from "react";

export class Card extends Component{
    render(){
        return <div key={this.props.i}>
            <img src={this.props.productdata.image} width='100px'/>
            <p>{this.props.productdata.title}</p>
            <p>{this.props.productdata.price}</p>
        </div>
    }
}