import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Reserve from "./components/Reserve";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className='appContainer'>
      <Router>
        <div className='componentsContainer'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/reserve' element={<Reserve />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
export default App;
