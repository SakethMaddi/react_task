import React from "react";

class Nav extends React.Component{
    firstName ="COLO"
    lastName="SHOP"
    render(){
    return <nav style={{height:"60px",border:"1px solid black",width:"100%",display:"flex",justifyContent:"space-around" }}>
            <div>
                <span>{this.firstName}</span>
                <span>{this.lastName}</span>
            </div>
            <div>
                <ul style={{display:"flex",listStyleType:"none",gap:"20px",padding:"6px"}}>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Promotion</li>
                    <li>Pages</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>Search</li>
                    <li>Profile</li>
                    <li>Cart</li>
                </ul>
            </div>
        </nav>
    }
}
export default Nav