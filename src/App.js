import Login from './component/Login';
import './App.css';
import Home from './component/Home';
import Survey from './component/Survey';
import Start from './component/Start';
import Admin from './component/Admin';
import Score from './component/Score';
import ViewScore from './component/ViewScore';

import { Routes, Route, Link } from "react-router-dom";
// import firebase from './Firebase';


function App() {
  return (
    <div>


    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/survey" element={<Survey/>} />
      <Route path="/start" element={<Start/>} />
      <Route path="/admin" element={<Admin/>} />
      <Route path="/score" element={<Score/>}/>
      <Route path="/viewscore" element={<ViewScore/>}/>
      
      
    </Routes>
      
     
     </div>

  );
}

export default App;
