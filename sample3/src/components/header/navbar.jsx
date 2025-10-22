import React from "react"

class Navbar extends React.Component{
    render() {
      return (
        <div style={{display:"flex",backgroundColor:'wheat'}}>
            <div style={{padding:"15px" }}>
                <img src="https://food-mart-template.vercel.app/images/logo.png" alt="" srcset="" />
            </div>
            <div className="search_bar" style={{padding:"30px",}}>
                <div>
                    <select name="catefories" id="">
                        <option > All categories</option>
                        <option >Drinks</option>
                        <option> Chocklates</option>
                    </select>
                </div>
            </div>
            <div style={{padding:" 10px 300px" }}>
                <span> For Support?</span>
                <h6>+91 98765-43210</h6>
            </div>
            <div style={{ }}>
                <span>Your Cart</span>
            </div>
        </div>
 
      )
    }
}
export default Navbar