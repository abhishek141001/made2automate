import React, { useState,useEffect } from "react";
import Header from "../components/header";
import { auth } from "../firebase";
import {createUserWithEmailAndPassword,
onAuthStateChanged,
signInWithEmailAndPassword,
signOut
} from "firebase/auth"
import TotalDetails from "./totalDetails";
import App from "../App";
import { useNavigate } from "react-router-dom";

const Auth = ()=>{

  const navigate = useNavigate()
    
    const [registerEmail,setRegisterEmail] = useState("");
    const [registerPassword,setRegisterPassword] = useState("")
    const [loginEmail,setLoginEmail] =  useState("");
    const [loginPassword,setLoginPassword] = useState("")
    const [user,setUser] = useState({})

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
        });
        return () => {
          unsubscribe(); // Unsubscribe the listener on component unmount
        };
      }, []);
   const register = async()=>{
        try{
    const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword)
      console.log(user)
      localStorage.setItem("user",JSON.stringify(user.user))
      navigate("/")
        }catch(err){
            console.error(err)
        }
   }
   const login = async()=>{
    try{
        const user = await signInWithEmailAndPassword(auth,loginEmail,loginPassword)
          console.log(user)
          localStorage.setItem("user",JSON.stringify(user.user))
          navigate("/")
            }catch(err){
                console.error(err)
            }

   }
   const logout = async()=>{
    try{
        const getOut = await signOut(auth)
          console.log(user)
          localStorage.removeItem("user")
            }catch(err){
                console.error(err)
            }
   }


    

    return(
        
        <>
        <Header/>
       <div className="mainBox">
        <div className="authContainer">
            <p className="authHead">Register</p>
            <input type="email" placeholder="email" className="inputAuth" onChange={(e)=>{
                setRegisterEmail(e.target.value)
            }}/>
             <input type="password" placeholder="password" className="inputAuth" onChange={(e)=>{
                setRegisterPassword(e.target.value)
             }}/>
             <button value="register" onClick={register}>Register</button>
              
        </div>
        <div className="authContainer">
            <p className="authHead">Login</p>
             <input type="email" placeholder="email" className="inputAuth" onChange={(e)=>{
                setLoginEmail(e.target.value)
             }}/>
             <input type="password" placeholder="password" className="inputAuth" onChange={(e)=>{
                setLoginPassword(e.target.value)
             }}/>
             <button value="login" onClick={login}>Login</button>

        </div>
        

        </div>
        </>
    )
            
}
export default Auth;