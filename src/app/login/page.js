"use client"

import React, { useState } from "react"
import style from "./login.module.css"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"


export default function login() {

    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")
    const [error, seterror] = useState(null)
    const router=useRouter()

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
    console.log(result);
      if (!result.error) {
       console.log("success");
          router.push("/");
      } else {
      
       seterror(result.error);
      }
    };
   
  return (
    <div>
        <form className={style.formlg}  onSubmit={handleSubmit} >
        <label> Email :  </label>
            <input type="email" className={style.inputcolor} onChange={(e)=>{setEmail(e.target.value)}} />
            <label> Password :  </label>
            <input type="password" className={style.inputcolor} onChange={(e)=>{setPassword(e.target.value)}} />
            <button className={style.btnsend}> Send</button>
            {error && <p >{error}</p>}
        </form>
    
    </div>
  )
}