import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from "./components/Counter";
import Calc from "./Components/Calc"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/calc" element={<Calc />} />
      </Routes>
    </Router>
  );
}

export default App;
