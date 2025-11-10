import { useState } from "react"


export const Welcome = function (){

    const [count,setCount]=useState(1)
    const [input1,setInput1]=useState("")
    const [num,setNum]=useState()
    function dec(){
        setCount(count-1)
    }
    function reset(){
        setCount(0)
    }
    const number=(e)=>{
        setNum(e.target.value)
    }
    return <div>
        <h1>Counter Application</h1>
        <h5>{count}</h5>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={dec}>-</button>
        <button onClick={()=>reset()}>reset</button>
        <input type="text" onChange={(e)=>setInput1(e.target.value)} />
        <p>Live preview {input1}</p>
        <input type="text"  onChange={(e)=>setNum(e.target.value)}/>
        <p>Number ={num}</p>
    </div>
}