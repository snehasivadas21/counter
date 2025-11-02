import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App(){
    const [num1,setNum1] = useState(0)
    const [num2,setNum2] = useState(0)
    const [sum,setSum] = useState(0)

    const [text1,setText1] = useState("")
    const [text2,setText2] = useState("")
    const isMatch = text1 == text2 && text1 !== "";

    const [arr,setArr] = useState([])
    const [text,setText] = useState("")

    const handleAdd =()=>{
        if(text.trim()!==""){
            setArr([...arr,{text:text.trim(),completed:false}])
            setText("")
        }
    }

    const handleToggle=(index)=>{
        const newArr=[...arr]
        newArr[index].completed = !newArr[index].completed
        setArr(newArr)
    }
    const handleRemove=(index)=>{
        const newArr=[...arr]
        newArr.splice(index,1)
        setArr(newArr)
    }

    const navigate = useNavigate()

    const handleresult =()=>{
        setSum(num1+num2)
    }

    const handleresult1 = ()=>{
        setSum(num1-num2)
    }

    return(
        <div>
            <h2>{sum}</h2>
            <input type="number" value={num1} onChange={(e)=>setNum1(Number(e.target.value))} />
            <input type="number" value={num2} onChange={(e)=>setNum2(Number(e.target.value))} />
            <button onClick={handleresult}>+</button>
            <button onClick={handleresult1}>-</button>

            <br />

            <input type="text" value={text1} onChange={(e)=>setText1(e.target.value)} />
            <input type="text" value={text2} onChange={(e)=>setText2(e.target.value)} />
            <p>{isMatch ? "Yes":"No"}</p>

            <br />

            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {arr.map((item,index)=>(
                    <li key={index} style={{textDecoration:item.completed?"line-through":"none"}}>
                        {item.text}
                        <button onClick={()=>handleToggle(index)}>completed</button>
                        <button onClick={()=>handleRemove(index)}>remove</button>
                    </li>
                ))}
            </ul>

            <hr />
            <button onClick={()=>navigate("/")}>Go back</button>
            <button onClick={()=>navigate("/watch")}>Stop</button>
        </div>
    )

}
export default App;