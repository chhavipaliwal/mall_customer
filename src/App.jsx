import "./App.css";
import Shopping from "./shopping";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Shopping />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
