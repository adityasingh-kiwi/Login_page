import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./Header.css";




const Home = () => {



    return (
        <div>
            <div>
                <Header />
            </div>
            <div style={{display:"flex",width:"100%"}} >
                <div style={{width:"5%"}}>
                <Sidebar />
                </div>
                <div className= "Background_image"style={{width:"95%"}}>
                
                </div>
              
            </div>
          
        </div>
    )
}

export default Home;