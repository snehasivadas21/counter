import StudentName from "./StudentName";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// function StudentCard(){
//     return (
//         <div className="container mt-4">
//             <Card style={{width: "18rem"}}>
//                 <Card.Body>
//                     <Card.Title>Student Card</Card.Title>
//                     <StudentName/>
//                     <Card.Text>Course : React</Card.Text>
//                     <Button variant="primary">Learn More</Button>
//                 </Card.Body>
//             </Card>
//         </div>
//     )
// }
// export default StudentCard;

export default function StudentCard() {
  return (
    <div>
        <StudentName name="Sneha" course="Python"/>
        <StudentName name="AAA" course="React"/>
    </div>
  )
}



