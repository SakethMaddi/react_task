import React from "react";
import Category from "./categories";
import Cards from "./cards";
import Brands from "./brands";
import Cards1 from "./cards1";

class Banner extends React.Component{
    render(){
        return <div>
            <Category/>
            <Cards/>
            <Brands/>
            <Cards1/>
        </div>
    }
}
export default Banner