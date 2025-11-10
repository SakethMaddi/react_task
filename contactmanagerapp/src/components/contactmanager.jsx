import { Component } from "react";

export class ContactManager extends Component{
    constructor(){
        super();
         this.state = {contacts: [],name: "",email: "", isEditing: false, editIndex: null };

    }
    handleName(e){
        this.setState({name:e.target.value})
    }
    handleEmail(e){
        this.setState({email:e.target.value})
    }
    handleAdd(){
        this.setState({contacts:[...this.state.contacts,this.state.name+" ----- "+this.state.email], name:"",email:""})
    }
    handleDelete(i){
        this.setState({contacts:this.state.contacts.filter((value,index)=> index != i)})
    }
    handleEdit(i){
        this.setState({editIndex:i,input:this.state.contacts[i]})
    }
    handleUpdate(){
        this.state.contacts.splice(this.state.editIndex,1,this.state.name,this.state.email)
        this.setState({contacts:this.state.contacts,editIndex:"",name:"",email:""})
    }
    render() {
      return (
        <div>
            <div>
                <input type="text" name="Name" id="" placeholder="Name"  onChange={(e)=> this.handleName(e)}/>  <input type="email" name="Email"  placeholder="Email" onChange={(e)=>this.handleEmail(e)}/>
                {this.state.editIndex === null ? <button type="button" onClick={()=>this.handleAdd()}>Add</button>: <button onClick={()=>this.handleUpdate()}>Update</button>}
            </div>
            <div>
                <h4>Contacts</h4>
                {this.state.contacts.map((item,index)=> <div key={index}>
                    <span>{item}</span>  <button onClick={(()=>this.handleEdit(index))}>Edit</button>   <button onClick={()=>this.handleDelete(index)}>Delete</button>
                </div>)}
            </div>
        </div>
      )
    }
}