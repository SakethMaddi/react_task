import { Component } from "react";


export class TodoApp extends Component{
    constructor(){
        super();
        this.state={input:"",tododata:[],editIndex:null}
    }
    handleInput(e){
        this.setState({input:e.target.value})
    }
    handleSubmit(){
        this.setState({tododata:[...this.state.tododata,this.state.input], input:""})
    }
    handleDelete(i){
        this.setState({tododata:this.state.tododata.filter((value,index)=> index != i)})
    }
    handleEdit(i){
        this.setState({editIndex:i,input:this.state.tododata[i]})
    }
    handleUpdate(){
        this.state.tododata.splice(this.state.editIndex,1,this.state.input)
        this.setState({tododata:this.state.tododata,editIndex:"",input:""})
    }
    render(){
        return <div>
            <div>
                <input type="text" name="todo-input" onChange={(e)=>this.handleInput(e)} value={this.state.input}/> 
                {this.state.editIndex === null ? <button type="button" onClick={()=>this.handleSubmit()}>Add</button>: <button onClick={()=>this.handleUpdate()}>Update</button>}
            </div>
            <p>{this.state.input}</p>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Todo Tasks</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tododata.map((item,index)=>  <tr key={index}>
                            <td>{item}</td>
                            <td>
                                <button onClick={()=>this.handleEdit(index)}>Edit</button>
                                <button onClick={()=>this.handleDelete(index)}>Delete</button>
                            </td>

                        </tr> )} 
                    </tbody>
                </table>
            </div>
        </div>
    }
}