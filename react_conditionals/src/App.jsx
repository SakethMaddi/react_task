import { Component } from "react";
import { Car,Bike } from "./components/car";
import { User } from "./components/user";

class App extends Component{
  render(){
    return <div>
      {/* <Car/>
      <Bike/> */}

      <User/>
    </div>
  }
}
export default App

