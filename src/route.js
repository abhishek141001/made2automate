import React from "react";
import Header from "./components/header";
import { Outlet } from "react-router-dom";
import Auth from "./components/auth";



function Route() {
    return (
       <>
       <div className="App">
            {/* <Header /> */}
           
            <div className="contentBody">
            <Auth/>
            {/* <Outlet/> */}
            </div>
            </div>
            
        </>
        
    )
}


export default Route;