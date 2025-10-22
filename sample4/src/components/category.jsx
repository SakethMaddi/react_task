const Category= () =>{

    const categorydata=[{category:"fruits",price:20},{category:"veges",price:30},{category:"drinks",price:50}]
    const data=[{item:"biriyani",cost:200},{item:"chicken 65",cost:300},{item:"apolo fish",cost:400}]
    return <>
        {/* <h1>hello</h1> */}
        {categorydata.map((value,index)=> <p key={index}>  {value.category}  price is {value.price} </p>)}
        {data.map((value,index)=> <p key={index}> {value.item} cost is {value.cost}</p>)}
    </>
}
export default Category

