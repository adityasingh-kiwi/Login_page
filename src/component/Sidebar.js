import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import './Header.css';
import { useNavigate } from "react-router-dom";
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';



  
function Sidebar() {



  let Naviagte = useNavigate();
  

  const handleSurvey=()=>{
    Naviagte("/start");

  }
    return (
        <div
        style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
      >
        <CDBSidebar textColor="#fff" backgroundColor="black">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a
              href="/"
              className="text-decoration-none"
              style={{ color: 'inherit' }}
            >
              Sidebar
            </a>
            
          </CDBSidebarHeader>
   
          
          <CDBSidebarFooter style={{ textAlign: 'center' }}>
            <div
              className="sidebar-btn-wrapper"
              style={{
                padding: '20px 5px',
              }}
            >
               <div display="flex">
                 <span>
                 <i className="bi bi-question-square-fill"></i>
                 </span>
                 <span>
                 <h6 className="text_colour" onClick={handleSurvey}>Want Survey</h6>
                 </span>
              
              </div> 
              
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>
        
      </div>
    )
}

export default Sidebar

