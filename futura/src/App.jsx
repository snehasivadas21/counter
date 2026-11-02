// import Student from "./Components/Student";
// import Welcome from "./Components/Welcome";
// import Basics from "./Components/Basics";
// import StudentCard from "./Components/StudentCard";
// import { Navbar } from "./Components/Navbar";
// import { Footer } from "./Components/Footer";
// import Parent from "./Components/Parent";

// function App() {
//   return (
//     <div>
//       <Navbar/>
//       <Basics/>
//       <Welcome/>
//       <Student/>
//       <StudentCard/>
//       <Parent/>
//       <Footer/>
//     </div>
//   )

// }
// export default App;

import React, { useState } from 'react'
import {Routes,Route} from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Register from './pages/Register';
import StudentDetails from './pages/StudentDetails';

function App() {
  const [student,setStudent] = useState(null);
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register setStudent={setStudent}/>}/>
        <Route path='/student' element={<StudentDetails student={student}/>}/>
      </Routes>
      
    </div>
  )
}

export default App