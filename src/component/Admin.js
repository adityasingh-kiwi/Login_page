import React ,{useState} from 'react';
import './Admin.css';
import { Addquestion } from "./Addquestion";
import { useNavigate } from "react-router-dom";
import { genericFalse,genericTrue } from './Const';



 const Admin = () => {

    const [isopen ,setisopen] = useState(genericFalse);


    const handleOpenModal =()=>{
        setisopen(genericTrue) 
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
