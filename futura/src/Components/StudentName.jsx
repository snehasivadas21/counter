// function StudentName() {
//     return <h2 style={{color:"blue",fontSize:"30px"}}>Name: Rahul</h2>
// }
// export default StudentName


export default function StudentName(props) {
  return (
    <>
    <div>
        <p>Name : {props.name}</p>
        <p>Course : {props.course}</p>
    </div>
    </>
  )
}
