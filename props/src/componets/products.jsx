import { Component } from "react";
import { Card } from "./card";
import productsdata from '../assets/data/products.json'


export class Product extends Component{
    render(){
        return <div>
            <h3>Product Data</h3>
            {productsdata.map((product,index) => <Card productdata={product} i={index}/>) }
        </div>
    }
}