// import React,{useRef} from "react";

// function App(){
//   const textRef = useRef(null)
//   const changeColor = (color) => {
//     if (textRef.current){
//       // textRef.current.style.color = color
//       textRef.current.style.backgroundColor = color
//     }
//   }
//   return (
//     <div ref={textRef}>
//       {/* <h2 ref={textRef}>text</h2> */}
//       <h2>hello</h2>
//       <button onClick={()=>changeColor('red')}>Red</button>
//       <button onClick={()=>changeColor('blue')}>Blue</button>
//       <button onClick={()=>changeColor('green')}>Green</button>    
//     </div>
//   )
// }
// export default App;

// import React,{useReducer} from "react";

// function Counter(){
//   const reducer = (state,action) =>{
//     switch (action.type){
//       case 'increment':return {count:state.count+1}
//       case 'decrement':return {count:state.count-1}
//       case 'reset':return {count:0}
//       default : return state
//     }
//   }
//   const [state,dispatch] = useReducer(reducer,{count:0})
//   return (
//     <div>
//       <h2>Counter:{state.count}</h2>
//       <button onClick={()=>dispatch({type:'increment'})} disabled={state.count>=10}>+</button>
//        {state.count > 0 && (
//       <button onClick={()=>dispatch({type:'decrement'})} disabled={state.count}>-</button>)}
//       <button onClick={()=>dispatch({type:'reset'})}>0</button>
//     </div>
//   )

// }
// export default Counter;

import React,{useState,useReducer} from "react";

function Calculator(){
  const reducer = (state,action)=>{
    switch(action.type){
      case 'add':return {result:action.payload.num1+action.payload.num2};
      case 'sub':return {result:action.payload.num1-action.payload.num2};
      case 'reset':return {result:0};
      default:return state;
    }
  }
  const [state,dispatch] = useReducer(reducer,{result:0})
  const [num1,setNum1] = useState("")
  const [num2,setNum2] = useState("")

  return (
    <div>
      <h2>Result:{state.result}</h2>
      <input type="number" value={num1} onChange={(e)=>setNum1(e.target.value)} />
      <input type="number" value={num2} onChange={(e)=>setNum2(e.target.value)} />
      <button onClick={()=>dispatch({type:"add",payload:{num1,num2}})}>+</button>
      <button onClick={()=>dispatch({type:"sub",payload:{num1,num2}})}>-</button>
      <button onClick={()=>dispatch({type:"reset"})}>reset</button>
    </div>
  )
}
export default Calculator;
