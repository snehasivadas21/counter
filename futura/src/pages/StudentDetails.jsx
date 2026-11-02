import React from 'react'

function StudentDetails({student}) {
    if (!student){
        return <h2>No student registered yet</h2>
    }
  return (
    <div>
        <h1>Registration Successful</h1>
        <h3>Details</h3>
        <p>{student.name}</p>
        <p>{student.email}</p>
        <p>{student.course}</p>
    </div>
  )
}

export default StudentDetails