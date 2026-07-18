import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// function Clock(){
//     const [seconds,setSeconds]=useState(0)
//     const navigate = useNavigate()
//     useEffect(()=>{
//         const timer = setInterval(() => {
//             setSeconds(s=>s+1)
//         }, 1000);
//         return ()=>clearInterval(timer)
//     })
    
//     return (
//         <>
//          <p>{seconds}</p>
//          <button onClick={()=>navigate("/")}>Home</button>
//         </>
//     )
// }
// export default Clock;

import {useEffect} from "react";

function App(){
    useEffect(()=>{
        console.log("Mounted")
        return ()=>{
            console.log("Unmounted")
        }
    },[])
    return (
        <h2>hello</h2>
    )
}
export default App;

function StopWatch(){

    const [time,setTime] = useState(0)
    const [isRunning,setIsRunning]= useState(false)
    const intervalRef = useRef(null);
    const navigate = useNavigate()

   useEffect(()=>{
    if (isRunning) {
        intervalRef.current = setInterval(() => {
            setTime(prevTime=>prevTime+10)
        },1000);
    }else{
        clearInterval(intervalRef.current)
    }
    return ()=>clearInterval(intervalRef.current)
   },[isRunning])

   const startStopwatch = () => setIsRunning(true)
   const stopStopwatch = () => setIsRunning(false)
   const resetStopwatch = () => {
    setIsRunning(false)
    setTime(0);
   }

   const formatTime = () => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
  };

   return (
    <div>
        <h3>StopWatch</h3>
        <p>{formatTime()}</p>
        <button onClick={startStopwatch} disabled={isRunning}>Start</button>
        <button onClick={stopStopwatch}disabled={!isRunning}>Stop</button>
        <button onClick={resetStopwatch}>Reset</button>
        <hr />
        <button onClick={()=>navigate("/")}>Home</button>
    </div>
   )
}
export default StopWatch;

// import {useState,useEffect} from "react";

// const fetchUser = () => {
//     const [users,setUsers] = useState([])
//     const [loading,setLoading] = useState(true)
//     const [error,setError] = useState("")

//     useEffect(()=>{
//         const getUser = async () => {
//             try {
//                 const response = await fetch("https://jsonplaceholder.typicode.com/users")
//                 const data = await response.json();
//                 setUsers(data)
//             } catch (error) {
//                 setError("Failed")
//             } finally {
//                 setLoading(false)
//             }
//         }
//         getUser();
//     },[]);

//     if (loading) return <p>loading</p>
//     if (error) return <p>{error}</p>

//     return (
//         <>
//             {users.map((user)=>(
//                 <div key={user.id}>
//                     <p>{user.name}</p>
//                     <p>{user.email}</p>
//                 </div>
//             ))}
//         </>
//     )
// }
// export default fetchUser;

import {useState} from "react";

const products = [
  { id:1, name:"Laptop", category:"Electronics" },
  { id:2, name:"Phone", category:"Electronics" },
  { id:3, name:"Book", category:"Education" }
]
function App(){
    const [selectItem,setSelectItem]=useState("")
    const [selectedCategory,setSelectedCategory]=useState("All")

    const filterItems = products.filter((product)=>{
        const matchSearch = product.name.toLowerCase().includes(selectItem.toLowerCase());
        const matchFilter = selectedCategory === 'All' || product.category === selectedCategory;
        return matchSearch && matchFilter 
    })

    return (
        <>
            <input
                type="text"
                value ={selectItem}
                onChange = {(e)=>setSelectItem(e.target.value)}/>
                
            <select
                value={selectedCategory}
                onChange={(e)=>setSelectedCategory(e.target.value)}>
            <option value="All">All</option>
            <option value="Electronics">Ele</option>
            <option value="Education">Edu</option>
            </select>

            <ul>
                {filterItems.map((product)=>{
                   return (
                       <li key={product.id}>
                           {product.name} - {product.category} 
                       </li>
                   )
                })}
            </ul>

            {filterItems.length === 0 && <p>not found</p>}
        </>
    )
    
}
export default App;
