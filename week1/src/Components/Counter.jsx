import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const App = () => {
  const [count,setCount]= useState(0)
  const [text,setText] = useState("")
  const [isOn,setIsOn] = useState(false)

  const items=["apple","car","blue"]

  return (
    <div>
      <h2>{isOn ? "on":"off"}</h2>
      <h2>{text}</h2>
      <h2>{count}</h2>

      <button onClick={()=>count<10 && setCount(count+1)}>+</button>
      <button onClick={()=>count>0 && setCount(count-1)}>-</button>
      <br />
      <input type="text" value={text} placeholder='enter the text' onChange={(e)=>setText(e.target.value)} />
      <br />
      <button onClick={()=>setIsOn(!isOn)}>{isOn?"turnoff":"turnon"}</button>
      <br />
      <ul>
        {items.map((item,index)=>(
          <li key={index}>{item}</li>
        ))}
      </ul>

      <hr />
      <Link to="/calc">Calc</Link>

    </div>
  )
}

export default App
