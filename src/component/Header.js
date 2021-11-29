import React, { useState, useEffect} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
//import db from "../Firebase";
import { useNavigate } from "react-router-dom";
import ModalOne from "./Modal"


const Header = () => {

    const [getdata, setGetdata] = useState("")


    const [modalState, handleModalState] = useState(false);
    const handleUserDetails = () => {

        handleModalState(true);

    }

    //   useEffect(() => {
    //       db.child("loginpage").on("value", (snapshot) => {
    //           if (snapshot.val() !== null) {
    //               setGetdata(snapshot.val());
    //           }
    //          else {
    //               setGetdata();
    //           }
    //       })

    //  }, [])

     console.log("modalState===============>>",modalState);

    const handleOpenClose =(data)=>{
        console.log("hhhhhhhhhhhh------------------>>",data)

        if(!data){
            handleModalState(false);
        }
        
    }
    let Naviagte = useNavigate();
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
                <button className="active" onClick={handleUserDetails}>User Profile</button>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <button className="logout" onClick={handleLogout}>Logout</button>

                <div className="background">
             



            </div>

            
            {
                <ModalOne  isopen={modalState} isOpenClose ={(data)=>handleOpenClose(data)}/>
            }
            <img className="mask-custom"></img>

        </div>
        </div>
    )
}



export default Header;
