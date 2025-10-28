import { Component } from "react";

export class StudentCard extends Component{
    render(){
        return <div style={{border:"1px solid",width:"300px",display:"flex",flexDirection:"column",alignItems:"center",borderRadius:"10px"}}>
            <h4>Student Card</h4>
            <h4>Name:{this.props.name}</h4>
            <p>Age:{this.props.age}</p>
            <p>Course:{this.props.course}</p>
        </div>
    }
}