import { memo } from "react";

const Child = memo(function Child({onClick}){
    console.log("Child rendered");

    return <button onClick={onClick}>Click</button>
})

export default Child;