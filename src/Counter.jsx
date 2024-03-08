import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(0)
    const hundleAdd = () => {
        const newCount = count+1;
        setCount(newCount)
    }
    const hundleRemove = () => {
        const newCount = count - 1;
        setCount(newCount)
    }
    return (
        <div style={{border:"2px solid yellow"}}>
            <h2>Counter : {count} </h2>
            <button onClick={hundleAdd}>Add</button>
            <button onClick={hundleRemove}>Remove</button>
        </div>
    )
}