import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Profile from "./routes/Profile";
import Log from "./routes/Log";
import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {}, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/log" element={<Log />} />
      </Routes>
    </div>
  );
}
export default App;
