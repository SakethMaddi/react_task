import { Component } from "react";


export class StudentProfileCard extends Component{
    render(){
        return <div style={{border:"1px solid",width:"300px",borderRadius:"5px",display:"flex",flexDirection:"column",alignItems:"center"}}>
            <h4>Student Profile Card</h4>
            <img src={this.props.imgurl} alt="" width={70} height={70}  />
            <h4>Name:{this.props.name}</h4>
            <h4>Class:{this.props.class}</h4>
            {this.props.children}
        </div>
    }
}