import React from "react";

class Footerbar extends React.Component{
    render(){
        return <div style={{display:"flex",  }}>
            <div > 
                <img src=" https://food-mart-template.vercel.app/images/logo.png" alt="" width="150px"/>
            </div>
            <div>
                <div style={{width:"150px",padding:"0px 50px"}}>
                    <p>Ultras</p>
                    <ul>
                        <li>About Us</li>
                        <li>Conditions</li>
                        <li>Our Journals</li>
                        <li>Careers</li>
                        <li>Affiliate Programme</li>
                        <li>Ultras Press</li>
                    </ul>
                </div>
            </div>
            <div>
                <div style={{width:"150px",padding:"0px 50px"}}>
                    <p>Customor Service</p>
                    <ul>
                        <li>FAQ</li>
                        <li>Contact</li>
                        <li>Privacy Policy</li>
                        <li>Returns & Refunds</li>
                        <li>Cookie Guidlines</li>
                        <li>Delivary Information</li>
                    </ul>
                </div>
            </div>
             <div>
                <div style={{width:"150px",padding:"0px 50px"}}>
                    <p>Customor Service</p>
                    <ul>
                        <li>FAQ</li>
                        <li>Contact</li>
                        <li>Privacy Policy</li>
                        <li>Returns & Refunds</li>
                        <li>Cookie Guidlines</li>
                        <li>Delivary Information</li>
                    </ul>
                </div>
            </div>
            <div style={{ width:"250px"}}>
                <p>Subscribe Us</p>
                <p>Subscribe to our newsletter to get updates about our grand offers</p>
                <input type="email" placeholder="Email Adress"/><input type="submit" placeholder="Subscribe" />
            </div>
            
        </div>
    }
}
export default Footerbar