import React ,{useState} from 'react';
import './Admin.css';
import { Addquestion } from "./Addquestion";
import { useNavigate } from "react-router-dom";



 const Admin = () => {

    const [isopen ,setisopen] = useState(false);


    const handleOpenModal =()=>{
        setisopen(true) 
    }

    const isOpenClose =(data) =>{
        setisopen(data)
    }
    let Naviagte = useNavigate();
    const handleView=()=>{
        Naviagte("/viewscore");


    }


    return (
        <div className="background-image"> 
        <div className="background-admin">
            <button className="button-add-question" onClick={handleOpenModal}> Add Question</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="button-view-score" onClick={handleView}>View Score</button>
        </div>

        <Addquestion   isopen ={isopen} isOpenClose ={(data)=>isOpenClose(data)}/>
        </div>
    )
}
export default Admin
