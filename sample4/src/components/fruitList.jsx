const FruitList=() =>{

    const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
    return <div>
        {fruits.map((values,index)=> <ul key={index}>
            <li>{values}</li>
        </ul>)}
    </div>
}
export default FruitList