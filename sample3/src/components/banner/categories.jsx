import React from "react";

class Category extends React.Component{
    render(){
        return <div>
            <div style={{display:"flex",padding:"10px"}}>
                <div style={{display:"flex"}}>
                    <h2>Category</h2>
                </div>
                <div style={{display:"flex",padding:"0px 500px"} }>
                    <p>View all Categories {"->"} </p>
                </div>
            </div>

        </div>
    }
}
export default Category