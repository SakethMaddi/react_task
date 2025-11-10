import { Component  } from "react";
import { TodoApp } from "./components/todo";

class App extends Component{
  render(){
    return <div>
      <h3>ToDo Application</h3>
      <TodoApp/>
    </div>
  }
}
export default App