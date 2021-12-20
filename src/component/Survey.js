import React,{useState,useEffect} from 'react';
import './Survey.css';




const Survey = ({onQuizStart}) => {


    



    return (
        <div className="background-survey">
        
        <div className="survey">
        <div className="card-survey">
            <div className="card-content">
                <div className="content">
                    <h1>Start the Survey</h1>
                    <p>Best of Luck</p>
                    <button className="button is-info-is-medium"onClick={()=>onQuizStart()}>Start</button>
                </div>
            </div>
           
        </div>
        </div>
        </div>
    )
}


export default Survey
