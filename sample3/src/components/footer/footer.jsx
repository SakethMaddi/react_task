import React from "react";
import Footerbar from "./footerbar";
import Bottomfooter from "./bottomfooter";
import Topfooter from "./topfooter";

class Footer extends React.Component{
    render(){
        return <div>
                    <Topfooter/>
                   <Footerbar/>
                   <Bottomfooter/>
        </div>
     
    }
}
export default Footer