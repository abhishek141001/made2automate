import { Navigate, Outlet } from "react-router-dom"
import { useEffect, useState } from "react"

const PrivateRoutes = ()=>{
    
    const [user,setUser] = useState(localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null)
    
    useEffect(()=>{
         setInterval(()=>{
            setUser(localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null)
         },1000)
    },[])
    return user? ( 
        <Outlet/>
        
    ):<Navigate to={"/login"}/>
}
export default PrivateRoutes;