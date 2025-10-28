import { Component } from "react";
import { StudentProfileCard } from "./componets/studentprofile";
import profile1 from "./assets/images/download.jpg"
import profile2 from "./assets/images/download.png"
import profile3 from "./assets/images/download-1.png"

class App extends Component{
  render(){
    return <div style={{display:"flex"}}>
      <StudentProfileCard name="Tom" class="BTech CSE" imgurl={profile1} > <h6>1st Rank</h6> </StudentProfileCard> 
      <StudentProfileCard name="Jerry" class="BTech ECE" imgurl={profile2} />
      <StudentProfileCard name="Doremon" class="BTech MECH" imgurl={profile3}  />
    </div>
  }
}
export default App