import { Component } from "react";
import { StudentCard } from "./components/studentcard";
import { UserProfile } from "./components/userprofile";


class App extends Component{
  render(){
    const user = {name: "Alice",email: "alice@example.com",hobbies: ["Reading", "Coding", "Traveling"]};
    return <div >
        <StudentCard name="John Doe" age={22} course="react" />
        <StudentCard name="Emma Smith" age={20} course="node.js" />
        <UserProfile user={user}/>
    </div>
  }
}
export default App