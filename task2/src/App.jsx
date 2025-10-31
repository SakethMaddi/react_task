import { Component } from "react";
import { UserInput } from "./components/userInput";
import { FruitList } from "./components/fruitList";
import { StudentList } from "./components/studentList";
import products from '../src/assets/data/products.json'
import { ProductCard } from "./components/productcard";

class App extends Component{
  render(){
    const fruits = ["Apple", "Banana", "Mango", "Orange"];
    const students = [{ id: 1, name: "John", grade: "A" },{ id: 2, name: "Emma", grade: "B" },{ id: 3, name: "Liam", grade: "C" }];

    return <div>
      <UserInput/>
      <FruitList fruits={fruits}/>
      <StudentList students={students}/>
      <ProductCard products={products}/>
    </div>
  }
}
export default App