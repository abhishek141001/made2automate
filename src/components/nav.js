import React from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../firebase";
import Auth from "../pages/auth";
import { signOut } from "firebase/auth";



const logout = async()=>{
    try{
        const getOut = await signOut(auth)
        //   console.log(user)
        localStorage.removeItem("user")
            }catch(err){
                console.error(err)
            }
   }


function Navi(){
return(
    <div className="navBar">
          <NavLink className= "navButton" to = "/order">Orders</NavLink>
            <NavLink className= "navButton" to = "/">Details</NavLink>
           <NavLink className= "navButton" to = "/add-item">Add item</NavLink>
           <button onClick={logout} className="navButton">logout</button>
            </div>
)
}
export default Navi