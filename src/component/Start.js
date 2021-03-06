import React from 'react'
import { useState ,useEffect} from 'react';
import Survey from './Survey';
import Question from './Question';
import './Survey.css';
import Quest from './Quest.json';
import RequestService from "./AddQuestionApi";
import { genericValueOne, genericValueZero } from './Const';

 const Start = () => {
const [step,setStep]= useState(genericValueOne);
const [activeQuestion,setActiveQuestion]=useState(genericValueZero);
const [answers,setAnswers]= useState([]);
const [allData ,setAllData] = useState([])
const [totalAnswer,setTotalAnswer]= useState([]);

const fetchAllQuestionRequest = async ()=>{
        
    let res = await RequestService.getQuestionOne();
    
   let dataArray =[],answerArray=[]
     if(res.status == 200){
      
        for(let property in res.data){
            dataArray.push(res.data[property])
            answerArray.push(...res.data[property]["dataQuestion"]["answers"])
        }
        setAllData(dataArray)
        setTotalAnswer(answerArray)
        
     }

    
 }
 useEffect(() => {
    fetchAllQuestionRequest();
}, [])

const quizStartHandler=()=>{
    setStep(2);


}



    return (
        <div className="background-start">
           {step===genericValueOne ? <Survey onQuizStart={quizStartHandler}/> :
            <Question   data={allData[activeQuestion]}
           onAnswerUpdate={setAnswers}
           numberOfQuestions={allData.length}
           activeQuestion={activeQuestion}
           onSetActiveQuestion={setActiveQuestion}
           onSetStep={setStep} 
           answers={answers}
           totalAnswer ={totalAnswer}
           
           /> }
            
            
        </div>
        
    )
}
export default Start;
