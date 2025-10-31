import { Component } from "react";

export class StudentList extends Component{
    render() {
      return (
        <div>
            <table>
                <th>ID</th>
                <th>Name</th>
                <th>Grade</th>
            </table>
            <table>
                {this.props.students.map((value,index)=> (<tr key={index}><td>{value.id}</td>
                                                                          <td>{value.name}</td>
                                                                          <td>{value.grade}</td></tr>))}
            </table>
        </div>
      )
    }
}