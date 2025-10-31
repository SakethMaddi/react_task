import { Component } from "react";


export class ProductList extends Component{
    render(){
        return <div key={this.props.i} style={{border:"1px solid",width:"300px"}}>
            <p>Title:{this.props.product.title}</p>
            <p>Price:{this.props.product.price}</p>
            <img src={this.props.product.image} width='100px'/>
        </div>
    }
}