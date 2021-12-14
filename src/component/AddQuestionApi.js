
import React, { Component } from "react";
import axios from "axios";
const httpOptions = {
    headers:{
        'Content-Type': 'application/json',
        Authorization: 'my-token',
    }
};




export default class RequestService extends Component{


    constructor(props) {
        super(props);
       
       this.baseApiUrl = 'https://login-page-9c380-default-rtdb.asia-southeast1.firebasedatabase.app/loginpage.json';
 }

     static getQuestionOne() {
          try {
            
            return axios.get("https://question-store-fccce-default-rtdb.firebaseio.com/question.json");
         
     } catch (error) {
         
     }
     
         
    }

    static getAnswerOne() {
        try {
          
          return axios.get("https://score-view-fd276-default-rtdb.firebaseio.com/score.json");
       
   } catch (error) {
       
   }
   
       
  }
    1   
    static getWithParams(endPoint, params) {
        return axios.get(`${this.baseApiUrl}${endPoint}`, { params });
    }
    static  post(endPoint, data, formData = false) {
        if (formData) {
            httpOptions.headers["Content-Type"] = 'application/x-www-form-urlencoded';
        }
        return axios.post(`${this.baseApiUrl}${endPoint}`, data,httpOptions);
    }

    static putOne(endPoint, data) {
    

        try {
            if(typeof data == "object"){
                httpOptions.headers["Content-Type"] = 'application/x-www-form-urlencoded';
                 axios.put("/https://question-store-fccce-default-rtdb.firebaseio.com/question.json/question.json/${endPoint}.json", data, httpOptions)
                 .then((response)=>{
                     
                    
                       return response;


                 }).catch((err)=>{
                    console.log("err---------------------->>>",err)

                 })

                 
            }
        } catch (error) {
            console.log("error---------------------->>>",error)
            
        }
       
       
    }

   
   

}
