import React from 'react'
// map
// function Training() {
//     const students = ["AAA","BBB","CCC"];
//   return (
//     <>
//     <h2>Student List</h2>
//     <ul>
//         {students.map((students,index)=>(
//             <li key={index}>{students}</li>
//         ))}
//     </ul>
//     </>
//   )
// }
// export default Training

// function App() {
//     const products = [
//         {id: 1,name: "Laptop", price: 5000},
//         {id: 2,name: "Phone", price: 3000},
//         {id: 3,name: "Tablet", price:1500}
//     ]

//     return (
//         <>
//         {products.map((product)=>(
//             <div key={product.id}>
//                 <h3>{product.name}</h3>
//                 <p>{product.price}</p>
//             </div>
//         ))}
//         </>
//     )
// }
// export default App;

// usestate
// import {useState} from "react";

// function App(){
//     const [count,setCount] = useState(0);

//     return (
//         <>
//         <h2>{count}</h2>
//         <button onClick={()=>setCount(count+1)}>+</button>
//         <button onClick={()=>setCount(count-1)}>-</button>
//         <button onClick={()=>setCount(0)}>0</button>
//         </>
//     )

// }
// export default App;

// usecontext
// import {createContext,useState,useContext} from "react"

// const CounterContext = createContext()
// const App = () =>{
//     const [count,setCount]=useState(0)

//     const increment = () => count<10 && setCount(count+1)
//     const decrement = () => count>0 && setCount(count-1)
//     const reset = () => setCount(0)

//     return (
//         <CounterContext.Provider value={{count,increment,decrement,reset}}>
//             <ChildComponent/>
//         </CounterContext.Provider>
//     )
    
// }
// const ChildComponent=()=>{
//     const {count,increment,decrement,reset}=useContext(CounterContext)
//     return (
//         <>
//             <h2>{count}</h2>
//             <button onClick={increment}>+</button>
//             <button onClick={decrement}>-</button>
//             <button onClick={reset}>0</button>
//         </>
//     )
    
// }
// export default App;

// useeffect
// import {useState,useEffect} from "react";

// function Clock(){
//     const [seconds,setSeconds]=useState(0)
//     useEffect(()=>{
//         const timer = setInterval(() => {
//             setSeconds(s=>s+1)
//         }, 1000);
//         return ()=>clearInterval(timer)
//     },[])
    
//     return (
//         <>
//          <p>{seconds}</p>
//         </>
//     )
// }
// export default Clock;

//  import {useState,useEffect} from "react";

// function App(){
//     const [products,setProducts]=useState([])
//     const [error,setError]=useState("")
//     const [loading,setLoading]=useState(true)

//     useEffect(()=>{
//         const getProducts = async () =>{
//             try {
//                 const response = await fetch("https://dummyjson.com/products")
//                 const data = await response.json()
//                 setProducts(data.products)
//             } catch (error) {
//                 setError("error")
//             } finally{
//                 setLoading(false)
//             }
//         }
//         getProducts()
//     },[])

//     if (loading) return <p>loading</p>
//     if (error) return <p>{error}</p>

// return (
//     <>
//        <table>
//            <thead>
//                <tr>
//                    <th>ID</th>
//                    <th>Title</th>
//                    <th>Category</th>
//                </tr>
//            </thead>
//            <tbody>
//                {products.slice(0,5).map((pro)=>(
//                <tr key={pro.id}>
//                    <td>{pro.id}</td>
//                    <td>{pro.title}</td>
//                    <td>{pro.category}</td>
//                </tr>
//                ))}
//            </tbody>
//        </table>
//     </>
// )
// }
// export default App;

// import {useState} from "react";

// function App(){
//     const [arr,setArr] = useState([])
//     const [text,setText] = useState("")
//     const [editIndex,setEditIndex] = useState(null);

//     const handleAdd =()=>{
//         if(text.trim()!==""){
//             setArr([...arr,text.trim()])
//             setText("")
//         }
//     }

//     const handleEdit = (index) => {
//         setText(arr[index]);
//         setEditIndex(index);
//     }

//     const handleUpdate = () =>{
//         if (text.trim()!== ""){
//             const update = [...arr];
//             update[editIndex] =  text.trim();

//             setArr(update);
//             setText("");
//             setEditIndex(null);
//         }
//     }

//     const handleDelete = (index) =>{
//         const confirmDelete = window.confirm("Are you sure you want to delete this item?");

//         if (confirmDelete) {
//            const update = arr.filter((_,i)=>i!=index)
//            setArr(update)
//         }    
//     }
//     return (
//         <>
//             <input type="text"  value={text} onChange={(e)=>setText(e.target.value)}/>
//             {editIndex === null ? (
//                <button onClick={handleAdd}>add</button>
//             ):(
//                 <button onClick={handleUpdate}>update</button>
//             )}
//             <ul>
//                 {arr.map((item,index)=>(
//                 <li key={index}>
//                     {item}
//                     <button onClick={()=>handleEdit(index)}>Edit</button>
//                     <button onClick={()=>handleDelete(index)}>delete</button>
//                 </li>
//                 ))}
//             </ul>
            
//         </>
//     )
    
// }
// export default App;

// usereducer
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    case "RESET":
      return {count : 0};

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(
    reducer,
    {count : 0}
  );

  return (
    <div>
      <h2>Count: {state.count}</h2>
      {state.count <=10 && (
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increase
      </button>
      )}
      
      {state.count >0 && (
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrease
      </button>
      )}

      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
    </div>
  );
}

export default App;

// usememo
// import {useState,useMemo} from "react";

// function App(){
//     const [count,setCount]=useState(0)
//     const [number,setNumber]=useState(5)

//     const squared = useMemo(()=>{
//         return number*number
//     },[number])

//     return (
//         <>
//             <p>{number}--{squared}</p>
//             <button onClick={()=>setNumber((n)=>n+1)}>+</button>
//             <button onClick={()=>setNumber((n)=>n-1)}>-</button>
//             <button onClick={()=>setCount(count+1)}>{count}</button>
//         </>
//     )
    
// }
// export default App;
