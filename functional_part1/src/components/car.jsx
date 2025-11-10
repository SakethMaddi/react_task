import { useState } from "react";
import { Component } from "react";

export function Car(){
    const [start,setStart]=useState(true)

    const handleCarStart =() => {
        setStart(!start)
    }
    return <div>
        <p>BMW</p>
        <p>{start?"car in start state":"car in off state"}</p>
        <button onClick={()=>handleCarStart()}>{start? "Stop":"Start"}</button>
    </div>
}