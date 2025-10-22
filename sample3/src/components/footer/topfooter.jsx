import React from "react";
import './topfooter.css'


class Topfooter extends React.Component{
    render() {
      return <div style={{display:"flex"}}>
            <div className="child">
                <h4>Free delivary</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
            </div>
            <div className="child">
                <h4>100% secure payment</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
            </div>
            <div className="child">
                <h4>Quality guarantee</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
            </div>
            <div className="child">
                <h4>Guaranteed savings</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
            </div>
            <div className="child">
                <h4>Daily offers</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
            </div>
        </div>
    }
}
export default Topfooter