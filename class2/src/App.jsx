// import { Component } from "react";
// import axios from "axios";

// class App extends Component{
//   constructor(){
//     super();
//     this.state ={products:[],usersdata:{}}
//   }
//   fetchproducts(){
//     // fetch("https://dummyjson.com/products")
//     fetch("https://fakestoreapi.com/products")
//     .then(res=>res.json())
//     .then(data=>this.setState({products:data}))
//     .catch(er=>console.log(er))
//   }
//   componentDidMount(){
//     this.fetchproducts()
//     this.fetchUsers()
//   }

//   fetchUsers(){
//     axios.get("https://dummyjson.com/users")
//     .then(res => this.setState({usersdata:res}) )
//   }

//   render(){
//     return <div>
//         {/* {this.state.products.map((item)=> <div style={{border:"1px solid"}}>
//             <p>Title:{item.title}</p>
//             <img src={item.image} width="100px" alt="" />
//         </div>)} */}
//         <div>
//           {this.state.usersdata.user === undefined ? <></> :  this.state.usersdata.users.map((user)=> <div key={user.id} style={{border:"1px black"}}>
//             <p>{user.username}{user.age}</p>    
//           </div>)}
//         </div>

//     </div>
//   }
// }
// export default App



import { Component } from "react";
import { Unmounting } from "./components/unmounting";



class App extends Component{
  constructor(){
    super();
    this.state ={visible:false}
  }
  toggle(){
    this.setState({visible:!this.state.visible})
  }
  render(){
    return <div>
      <button onClick={()=>this.toggle()}>{this.state.visible ? "hide":"show"}</button>
      {this.state.visible && <Unmounting/>}
    </div>
  }
}
export default App