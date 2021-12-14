import React, { useState, useEffect} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

import { useNavigate } from "react-router-dom";
import ModalOne from "./Modal"
import RequestService from "./api";


const Header = () => {

    const [getdata, setGetdata] = useState({email:" ",id:" "})


    const [modalState, handleModalState] = useState(false);
    const handleUserDetails = () => {

        handleModalState(true);

    }
    
  let Naviagte = useNavigate();
  

  const handleAdmin=()=>{
    Naviagte("/admin");
  }


    const fetchAllRequest = async ()=>{
        
        let res = await RequestService.getOne()
      
         let userEmail = localStorage.getItem("data")
         if(res.status == 200){
            console.log("userEmail------------->>>",userEmail);
          
             for(let property in res["data"]){
    

                if(res["data"][property]["userEmail"] == userEmail ){
                    
                   let update =  await RequestService.getOnlyOne(property);
                   
                    setGetdata(
                        {
                            ...getdata,
                            email:res["data"][property]["userEmail"],
                            id:property
                    } 
                    );
                }
              
             }
         }

        
    }
     useEffect(() => {
        fetchAllRequest();
    }, [])

     

    const handleOpenClose =(data)=>{
    

        if(!data){
            handleModalState(false);
        }
        
    }
    
    const handleLogout=()=>{
        Naviagte("/");

    }





    return (
        

        <div className="header">
            <a href="#default" className="logo">Naviagtion</a>

            <div className="header-right" style={{display:"flex"}}>
                
                <div className="col-md-4">

                    <img className="rounded-circle z-depth-2 profileImage" alt="20x20" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
                        data-holder-rendered="true"/>

                </div>
               
                <button className="active" onClick={handleUserDetails}>{getdata.email}</button>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <button className="logout" onClick={handleLogout}>Logout</button>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

                {getdata.email==="admin@gmail.com" ?   <button className="logout"onClick={handleAdmin}>Admin</button> :null}
               

                <div className="background">
             



            </div>

            
            {
                <ModalOne  getdata={getdata}isopen={modalState} isOpenClose ={(data)=>handleOpenClose(data)}/>
            }
            <img className="mask-custom"></img>

        </div>
        </div>
    )
}



export default Header
