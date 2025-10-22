import React from "react";
import TopNav from "./topnav";
import Nav from "./navbar";

class Header extends React.Component{
    render(){
        return <header>
            <TopNav/>
            <Nav/>
        </header>
    }
}
export default Header