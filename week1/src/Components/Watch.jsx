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