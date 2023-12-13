import React from "react";
import { NavLink } from "react-router-dom";

function Header(){
    return(
        <div className="header">
            <h2 className="logoName"><NavLink className= "logoName" to= "/">made2automate</NavLink></h2>
           
        </div>
    )
}
export default Header;
