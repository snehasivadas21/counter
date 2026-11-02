import { useState, useCallback } from "react";
import Child from "./Child";

function Parent(){
    const [count,setCount] = useState(0);

    const handleClick = useCallback(()=>{
        console.log("Child button clicked");
    },[]);

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={()=>setCount(count+1)}>+</button>
            <Child onClick={handleClick}/>
        </div>
    )

}
export default Parent;