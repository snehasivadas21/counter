import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from "./components/Counter"
import Calc from "./Components/Calc"
import Watch from "./Components/Watch"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/calc" element={<Calc />} />
        <Route path="/watch" element={<Watch />} />
      </Routes>
    </Router>
  );
}

export default App;
