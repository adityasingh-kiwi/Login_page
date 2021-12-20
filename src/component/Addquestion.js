import React from 'react'
import './Admin.css';
import { useState } from 'react/cjs/react.development';
import { Modal } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { genericFalse,genericTrue } from './Const';


export const Addquestion = ( { isopen ,isOpenClose}) => {
    const [isModalVisible, setIsModalVisible] = useState(genericFalse);
    const [dataQuestion,setDataQuestion]=useState({
        question:"",
        choices:[{
            id:uuidv4(),
            value:""
        }],
        answers:[{
            id:uuidv4(),
            value:""
        }]
    })




    const handleQuestionAnswer = (e) => {
        let modifiedSetData = {...dataQuestion}

        modifiedSetData.choices.forEach(element => {
            if(element.id == e.target.id){
                element.value = e.target.value
            }
            
        });

        setDataQuestion(modifiedSetData)

     }

const handleReset =()=>{
    setDataQuestion({
        question:"",
        choices:[{
            id:uuidv4(),
            value:""
        }],
        answers:[{
            id:uuidv4(),
            value:""
        }]
    })
}

    const handleCancel = () => {
        handleReset();
        isOpenClose(genericFalse);
    };


    const handleOk = async () => {
        isOpenClose(genericFalse);

       try {
        
        const rest = await fetch("https://question-store-fccce-default-rtdb.firebaseio.com/question.json", {
          method: "POST",
          headers: {
            "Content-type": "application/json",

          },
          body: JSON.stringify({
            dataQuestion

          })
        })

        if(rest.status == 200){
            handleReset();

        }
           
       } catch (error) {
           
       }
        
    };

    const addChoices =()=>{
        
        let modifiedSetData = {...dataQuestion}
        console.log("modifiedSetData------------>>",modifiedSetData);
        modifiedSetData && modifiedSetData.choices.push({
            id:uuidv4(),
            value:""
        })
        
        setDataQuestion(modifiedSetData)

    }

    const handleaddAnswers =()=>{
        let modifiedSetData = {...dataQuestion}
        console.log("modifiedSetData------------>>",modifiedSetData);
        modifiedSetData && modifiedSetData.answers.push({
            id:uuidv4(),
            value:""
        })

        setDataQuestion(modifiedSetData)
    }

    const handleAnswer =(e)=>{
        let modifiedSetData = {...dataQuestion}

        modifiedSetData.answers.forEach(element => {
            if(element.id == e.target.id){
                element.value = e.target.value
            }
            
        });

        setDataQuestion(modifiedSetData)



    }

    const handleQuestion =(e)=>{
        let modifiedSetData = {...dataQuestion}
           modifiedSetData.question=e.target.value

        setDataQuestion(modifiedSetData)

    }
    console.log("dataQuestion-------------->>",dataQuestion)
    return (

        <div>
             <Modal title="ADD THE QUESTION,Choices AND ANSWERS" visible={isopen} onOk={handleOk} onCancel={handleCancel}>
                <div className="form">
                    <form >
                        <div>
                            Question:<input type="text" name="question" className="addquestion-question" type="addquestion-question" value={dataQuestion.question} onChange={handleQuestion} placeholder="Write Question" required />
                            </div>
                            <div>
                                
                                <button onClick={addChoices}>Add Choices</button>
                            </div>
                            <div>
                                {dataQuestion.choices && dataQuestion.choices.map((element,index)=>{
                                    return(
                                        <input type="text"  id ={element.id} name="choices" className="addquestion-choices" type="addquestion-choices" value={dataQuestion.choices[index].value} onChange={handleQuestionAnswer} placeholder="Write the Choices" required />
                                    )
                                })}
                                <div>
                                    {dataQuestion.answers && dataQuestion.answers.map((element,index)=>{
                                        return(
                                            <input type="text" id={element.id} name="choices" className="addquestion-answer" type="addquestion-answer" value={dataQuestion.answers[index].value} onChange={handleAnswer} placeholder="Write the Answers" required />
                                        )
                                    })}
                                
                                </div>
                                <div>
                                
                                <button onClick={handleaddAnswers }>Add Answers</button>
                                
                            </div>
                            
                            </div>
                        
                        




                    </form>
                </div>
            </Modal>
        </div>
    )
}
