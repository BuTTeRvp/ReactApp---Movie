import "./App.css";
import Main from "./components/main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleMovie from "./components/singleMovie/singleMovie"


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Main />}></Route>
          <Route path="movie/:id" element={<SingleMovie />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
