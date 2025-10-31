import { Component } from "react";
import productsdata from '../assets/data/products.json'
import { ProductList } from "./productlist";

export class ProductCard extends Component{
    render(){
        return <div >
           <h3>Product Data</h3>
            {productsdata.map((product,index) => <ProductList product={product} i={index}/>) }
        </div>
    }
}