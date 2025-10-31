import {Component} from "react";
import {Message} from "./components/dynamic";
import { CounterApp } from "./components/dynamic";
import { RandomNum } from "./components/dynamic";
import { TextMes } from "./components/dynamic";



class App extends Component{
  render(){ 
    return <div >
      {/* <h3>Hello</h3> */}
      < Message />
       <CounterApp/>
      < RandomNum/>
      <TextMes/> 
    </div>
  }
}
export default App