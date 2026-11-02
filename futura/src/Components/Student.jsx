// function Student() {
//     return (
//         <>
//         <h2>Students</h2>
//         <p>Name: Sneha</p>
//         <p>Course: React Development</p>
//         </>

//     )
// }
// export default Student;


function Student(){
    return (
       <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded bg-blue-100 p-4">Name</div>
        <div className="rounded bg-green-100 p-4">Course</div>
        <div className="rounded bg-pink-100 p-4">Duration</div>

       </div>
    )

}
export default Student;