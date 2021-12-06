
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

     static getOne() {
          try {
            
            return axios.get("https://login-page-9c380-default-rtdb.asia-southeast1.firebasedatabase.app/loginpage.json");
         
     } catch (error) {
         
     }
         
    }
    static getOnlyOne(id) {
        
      return axios.get(`https://login-page-9c380-default-rtdb.asia-southeast1.firebasedatabase.app/${id}.json`);
  }
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
                 axios.put("https://login-page-9c380-default-rtdb.asia-southeast1.firebasedatabase.app/loginpage.json/${endPoint}.json", data, httpOptions)
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

    static delete(endPoint) {
        return axios.delete(`${this.baseApiUrl}${endPoint}`);
    }

   

}
