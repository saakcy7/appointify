import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Profile from "./routes/Profile";
import Log from "./routes/Log";
import axios from "axios";
import { useEffect } from "react";
import Category from "./routes/category";
import Main from "./routes/main";
import Medical from "./routes/medical";
import Beauty from "./routes/beauty";
function App() {
  useEffect(() => {}, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/log" element={<Log />} />
        <Route path="/cat" element={<Category/>}/>
        <Route path="/main" element={<Main/>}/>
        <Route path="/medical" element={<Medical/>}/>
        <Route path="/beauty" element={<Beauty/>}/>
      </Routes>
    </div>
  );
}
export default App;
