import { Component } from "react";
import { ContactManager } from "./components/contactmanager";

class App extends Component{
  render(){
    return <div>
      <h1>Contact Manager Application</h1>
      <ContactManager/>
    </div>
  }
}
export default App