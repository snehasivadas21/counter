// import {useDispatch,useSelector} from "react-redux"
// import { decrement, increment } from './features/Slice'

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, sub ,reset } from "./features/Slice";

// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addItem } from "./features/Slice";


// function App() {
//   const count=useSelector((state)=>state.counter.value)
//   const dispatch= useDispatch()

//   return (
//     <div>
//       <h2>{count}</h2>
//       <button onClick={()=>dispatch(increment())}>+</button>
//       <button onClick={()=>dispatch(decrement())}>-</button>
//     </div>
//   )
// }

// export default App

// function ItemList(){
//   const [input,setInput]=useState('')
//   const items = useSelector((state)=>state.items)
//   const dispatch = useDispatch()

//   const handleAdd = ()=>{
//     if (input.trim()){
//       dispatch(addItem(input))
//       setInput('');
//     }
//   }

//   return (
//       <div>
//         <h2>Items</h2>
//         <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
//         <button onClick={handleAdd}>Add Items</button>
//         <ul>
//           {items.map((item,index)=>(
//             <li key={index}>{item}</li>
//           ))}
//         </ul>
//       </div>
//   )
// }
// export default ItemList

function Calculator(){
  const [input1,setInput1]=useState(0)
  const [input2,setInput2]=useState(0)
  const result=useSelector((state)=>state.calc.result)
  const dispatch=useDispatch()

  return (
    <div>
      <h2>Calculator</h2>
      <input type="number" value={input1} onChange={(e)=>setInput1(Number(e.target.value))} />
      <input type="number" value={input2} onChange={(e)=>setInput2(Number(e.target.value))} />
      <div>
        <button onClick={()=>dispatch(add({input1,input2}))}>Add</button>
        <button onClick={()=>dispatch(sub({input1,input2}))}>Sub</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
      </div>
      <h3>{result}</h3>
    </div>
  )
}
export default Calculator;