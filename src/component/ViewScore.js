import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './ViewScore.css'
import RequestService from "./AddQuestionApi";
const ViewScore = () => {
  const [allDetails,setAllDetails]=useState([])




  const fetchAllAnswerRequest = async ()=>{
        
    let res = await RequestService.getAnswerOne();
    
    let allArray=[];
   
     if(res.status ===200){
       console.log(res);
        for(let property in res.data){
            allArray.push(res.data[property])
        }
        setAllDetails(allArray)
        
     }

    
 }
 useEffect(()=>{
     fetchAllAnswerRequest();
     

 },[])


    return (
        <div >

            <h1 className="view-text">Scored Details</h1>

            <table className="table table-dark">
  <thead>
    <tr>
       <th scope="col">Sl.no</th>
       <th scope="col">userDetails</th>
      <th scope="col">count</th>
      
      
    </tr>
  </thead>
  <tbody>
    {
      allDetails.map((data,index)=>(
        <tr>
          <th scope="row">{index +1}</th>
          <td>{data.userDetails}</td>
          <td>{data.count}</td>

        </tr>
       

      ))
    }
  </tbody>
</table>


        </div>
    )
}
export default ViewScore