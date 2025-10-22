import React from "react";

class Brands extends React.Component{
    render(){
        return <div>
            <div style={{display:"flex",padding:"10px"}}>
                <div style={{display:"flex"}}>
                    <h2>New Arrived Brands</h2>
                </div>
                <div style={{alignItems:"center",display:"flex",flexWrap:"nowrap",padding:"0px 450px"}}>
                    <p>View all Categories {"->"} </p>
                </div>
            </div>
        </div>
    }
}
export default Brands