import React, { useEffect,useRef } from 'react'
import { useState } from 'react';
import './Survey.css';
import { useNavigate } from "react-router-dom";
import { genericFalse,genericTrue,genericValueZero,genericValueOne} from './Const';

 const Question = ({data , onAnswerUpdate , answers, numberOfQuestions , totalAnswer ,activeQuestion , onSetActiveQuestion , onSetStep}) => {

    const [selected,setSelected]=useState([]);
    const [error,setError]=useState('');
    const checkboxWrapper= useRef();
    const [count,setCount]= useState(genericValueZero);
    const [countAnswer,setCountAnswer]=useState(genericValueZero)
    const [userDetails,setUserDetails]=useState(" ");
    

    useEffect(()=>{
        const findCheckedInput=checkboxWrapper.current.querySelector('input:checked');
        if(findCheckedInput){
            findCheckedInput.checked=genericFalse;
        }

    },[data]);

   const changeHandler=(e)=>{
       
       let answerSelected = [...selected]
       answerSelected.push(e.target.value)
       setSelected(answerSelected);
   }
    useEffect(()=>{

        let userName = localStorage.getItem("data");
          setUserDetails(userName);



    },[])



   let Naviagte = useNavigate();

      const handleMarks= async ()=>{
        Naviagte("/Score");

       

        let countOne=genericValueZero
        let hashMap={}
        totalAnswer.forEach(element => {
            hashMap[element.value] = element.id
        });

        selected.forEach(data=>{
            if(hashMap[data]){
               countOne = countOne + genericValueOne;

            }
        })

        localStorage.setItem('Score',countOne);
        localStorage.setItem('numberofQuestion',numberOfQuestions);

        setCount(countOne);

        console.log("hashMap",hashMap,"-----------",selected);


        try {
            
            const rest = await fetch("https://score-view-fd276-default-rtdb.firebaseio.com/score.json", {
              method: "POST",
              headers: {
                "Content-type": "application/json",
    
              },
              body: JSON.stringify({
                userDetails,count
    
              })
            })
    
            if(rest.status == 200){
                console.log(rest)
    
            }
               
           } catch (error) {
               
           }
            


    }
      



    const nextClickhandle =(e)=>{
        if(selected===" ") {
            return setError("Please select atleast one option!");
        }
        onAnswerUpdate(prevState => [...prevState,{q: data.question,a: selected}]);
        
        setCount(count + genericValueOne)
        if(activeQuestion < numberOfQuestions - genericValueOne){
            console.log("activeQuestion------->>",activeQuestion,numberOfQuestions);
            onSetActiveQuestion(activeQuestion + genericValueOne);

        } else {
            onSetStep(3);
        }

    }

    console.log("{numberOfQuestions.length==(activeQuestion-2)",selected ,count)
    return (
        <div className="survey-question">
             <div className="card-question">
             <div className="card-content-question">
            

       
           
                <div className="content">
                    <h2 className="mb-5">{data.dataQuestion.question}</h2>
                    <div className="control" ref={checkboxWrapper}> 
                        {data.dataQuestion.choices.map((choice,i)=>(<label className="radio has background-light" keys={i}>
                        {data.dataQuestion.answers.length > genericValueOne ? <input type="checkbox" name="answer" value={choice.value} onChange={changeHandler}></input> :
                            <input type="radio" name="answer" value={choice.value} onChange={changeHandler}></input> }
                            {choice.value}
                        </label>

                        ))}
                        

                    </div> 
                    {error &&<div className="has-text-danger">{error}</div> }
                    {numberOfQuestions == count? <button className="button is-link is-medium is-fullwidth mt-4" style ={{backgroundColor:"red"}} onClick={handleMarks}>Submit</button>:
                    <button className="button is-link is-medium is-fullwidth mt-5" style ={{backgroundColor:"grey"}} onClick={nextClickhandle}>Next</button>}
                </div>
            </div>
           
        </div>
        </div>
    )
}

export default Question
