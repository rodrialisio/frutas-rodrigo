import React, {useState, useEffect} from "react"
import "./SandBox.css"

export default function SandBox (){
    const [count, setCount] = useState(0)
    const [name, setName] = useState("juan")
    
    useEffect(()=> {
        console.log("count updated")
    }, [count])
    
    return(
        <div className="counter-wrapper">
            <h1>{count}</h1>
            <button onClick={() => setCount(count +1)}>+</button>
            <button onClick={() => setCount(count -1)}>-</button>
        </div>
    )
}