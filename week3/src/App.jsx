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

import { useRef } from "react";

function App() {
  const inputRef = useRef();

  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
export default App;

import { useRef } from "react";

function Example() {
  const arrRef = useRef([]);

  const addItem = () => {
    arrRef.current.push(Math.random());
    console.log(arrRef.current); 
  };

  return (
    <div>
      <button onClick={addItem}>Add</button>
    </div>
  );
}

import {useRef} from "react";

function App(){
    const counterRef=useRef(0)

    const handleClick=()=>{
        counterRef.current+=1
        console.log(counterRef.current)
    }
    return (
        <>
            <button onClick={handleClick}>click</button>
        </>
    )
}
export default App;

import {useState,useRef,useEffect} from "react";

function App(){
    const [count,setCount]=useState(0)
    const prevCount=useRef(0)

    useEffect(()=>{
        prevCount.current = count
    },[count])
    return (
        <>
            <h2>{count}</h2>
            <h2>{prevCount.current}</h2>
            <button onClick={()=>setCount(count+1)}>click</button>
        </>
    )
    
}
export default App;

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

// import {useState,useReducer} from "react";

// function App(){
//     const reducer = (state,action) =>{
//         switch(action.type){
//             case 'add':return [...state,{id:Date.now(),text:action.payload}]
//             case 'delete':return state.filter(item => item.id!==action.payload)    
//             default : return state
//         }
//     }
//     const [state,dispatch]=useReducer(reducer,[])
//     const [input,setInput]=useState("")

//     const addTodo = () =>{
//         if (!input.trim()) return;
//         dispatch({type:'add',payload:input})
//         setInput("")
//     }
//     const handleDelete = (id)=>{
//         dispatch({type:'delete',payload:id})
//     }

//     return (
//         <>
//             <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
//             <button onClick={addTodo}>add</button>
//             <ul>
//                 {state.map((todo)=>(
//                 <li key={todo.id}>
//                     {todo.text}
//                     <button onClick={()=>handleDelete(todo.id)}>delete</button>
//                 </li>
//                 ))}
//             </ul>
//         </>
//     )
    
// }
// export default App;

import {createContext,useState,useContext} from "react";

const ThemeContext = createContext()

const App = () =>{
    const [theme,setTheme] = useState("black")

    const updateTheme = () => setTheme(theme==="black"?"white":"black")
    
    return (
        <ThemeContext.Provider value={{theme,updateTheme}}>
            <Childcomponent/>
        </ThemeContext.Provider>
    )
}
const Childcomponent = () =>{
    const {theme,updateTheme} = useContext(ThemeContext)

    return (
        <div style={{ background:theme , color:theme==="black"?"white":"black"}}>
            <h2>Hello</h2>
            <button onClick={updateTheme}>Click</button>
        </div>
    )
}

export default App;

import {createContext,useState,useContext} from "react"

const CounterContext = createContext()
const App = () =>{
    const [count,setCount]=useState(0)

    const increment = () => count<10 && setCount(count+1)
    const decrement = () => count>0 && setCount(count-1)
    const reset = () => setCount(0)

    return (
        <CounterContext.Provider value={{count,increment,decrement,reset}}>
            <ChildComponent/>
        </CounterContext.Provider>
    )
    
}
const ChildComponent=()=>{
    const {count,increment,decrement,reset}=useContext(CounterContext)
    return (
        <>
            <h2>{count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>0</button>
        </>
    )
    
}
export default App;

// import {useState,useMemo} from "react";

// function App(){
//     const [numbers]=useState([10,20,30,40])
//     const [count,setCount]=useState(0)

//     const sum = useMemo(()=>{
//         return numbers.reduce((acc,num)=>acc+num,0)
//     },[numbers])

//     const avg = useMemo(()=>{
//         return sum/numbers.length
//     },[sum,numbers])

//     return (
//         <>
//             <h2>{sum}</h2>
//             <h2>{avg}</h2>
//             <button onClick={()=>setCount(count+1)}>{count}</button>
//         </>
//     )
    
// }
// export default App;

import {useState,useMemo} from "react";

function App(){
    const [count,setCount]=useState(0)
    const [number,setNumber]=useState(5)

    const squared = useMemo(()=>{
        return number*number
    },[number])

    return (
        <>
            <p>{number}--{squared}</p>
            <button onClick={()=>setNumber((n)=>n+1)}>+</button>
            <button onClick={()=>setNumber((n)=>n-1)}>-</button>
            <button onClick={()=>setCount(count+1)}>{count}</button>
        </>
    )
    
}
export default App;

const handleSumit = async(e)=>{
  e.preventDefault();

  const products={name,price,category}
  try {
    const response = await fetch("/products",{method:"POST",headers:{"content-type":"application/json"},body:json.stringfy(products)})
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

const [file,setFile]=useState(null)

const handleFile = async() =>{
  const formData = new FormData()
  try {
    const response = await fetch("/uploads",{method:"POST",body:formData})
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

const formData = new FormData()
formData.append("name",name)
formData.append("email",email)
formData.append("image",file)
await fetch("/products",{method:"POST",body:formData})