import { Navigate, Outlet } from "react-router-dom"
import { useEffect, useState } from "react"
import Header from "./header"
import Navi from "./nav"
import Footer from "./footer"

const PrivateRoutes = ()=>{
    
    const [user,setUser] = useState(localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null)
    
    useEffect(()=>{
         setInterval(()=>{
            setUser(localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null)
         },1000)
    },[])
    return user? ( 
        <div className="fullbg">
        <Header/>
        <Navi/>
        <div className="mainBox">
        <Outlet/>
        </div>
        <Footer/>
        
        </div>
        
    ):<Navigate to={"/login"}/>
}
export default PrivateRoutes;