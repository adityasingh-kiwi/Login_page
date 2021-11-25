import Login from './component/Login';
import './App.css';
import Home from './component/Home';
import { Routes, Route, Link } from "react-router-dom";



function App() {
  return (
    <div>


    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      
      
    </Routes>
      <h1>hellooo Prashant</h1>
      <h1>hellooo Bittu</h1>
     
     </div>

  );
}

export default App;
