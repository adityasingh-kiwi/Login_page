import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';



function Sidebar() {
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
             
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
    )
}

export default Sidebar

