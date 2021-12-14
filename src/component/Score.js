import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { useState } from 'react/cjs/react.development'
import './Score.css'

const Score = () => {
   const [markStore,setMarkStore]=useState();
   const [getUserName,setGetUserName]=useState("")

     
      useEffect(()=>{

            let getMarks = localStorage.getItem("Score");
            let getQuestion = localStorage.getItem("numberofQuestion");
            let userName = localStorage.getItem("data");
            var num= ((getMarks*100)/(getQuestion))
              var marks =num.toFixed(2);
            setMarkStore(marks);
            setGetUserName(userName);
   

      },[])
       


      let Naviagte= useNavigate();

   const handleHomePage=()=>{
    Naviagte("/home");
   }

  

    return (
        <div>

            <h1 className="score-thanku">THANK YOU</h1>
            <div>
                <h2 className="score-username">Emaild id: {getUserName}</h2>
            </div>
            <div>
                <h2 className="score-markstore">Scored :{markStore}%</h2>
            </div>
            <div>
                <button className="score-back-to-login" onClick={handleHomePage}>Home page</button>
            </div>
          

        </div>
    )
}
export default Score
