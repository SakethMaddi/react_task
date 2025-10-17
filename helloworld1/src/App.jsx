import Navbar from "./components/navbar.jsx";
import Banner from "./components/banner.jsx";
import { Cards } from "./components/banner.jsx";
import { Games } from "./components/banner.jsx";

const app=() =>{
  return <div> 
    < Navbar/>
    <Banner/>
    <h1>hi</h1>
    <Cards/>
    <Games/>
  </div>
}

export default app;