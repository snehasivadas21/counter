import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register({setStudent}) {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({name:"",email:"",course:""});
    const [error,setError] = useState("");

    function handleChange(e) {
        const {name,value} = e.target;
        setFormData({...formData,[name]: value})
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.course){
            setError("Please fill in all field");
            return;
        }
        setError("");
        setStudent(formData);
        navigate("/student")
    }

  return (

    <div>
        <h1>Student Registration</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder='enter name' value={formData.name} onChange={handleChange} />
            <br /><br />
            <input type="email" name='email' placeholder='enter email' value={formData.email} onChange={handleChange} />
            <br /><br />
            <select name="course" value={formData.course} onChange={handleChange}>
                <option value="">Select course</option>
                <option value="React">react</option>
                <option value="React">django</option>
                <option value="React">python</option>
            </select>
            <br /><br />
            <button type='submit'>Register</button>
        </form>
        {error && <p>{error}</p>}
    </div>
  )
}

export default Register