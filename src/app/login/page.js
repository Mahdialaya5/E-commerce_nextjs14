"use client"

import React, { useState } from "react"
import style from "./login.module.css"
import axios from "axios"
import { useRouter } from "next/navigation"


export default function login() {

    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")
    const router=useRouter()

    const handleSubmit = (e) => {
      e.preventDefault();
      axios
        .post("http://localhost:3000/api/user/login", { email, password })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err))
    router.push('/')
   
     };
  return (
    <div>
        <form className={style.formlg}  onSubmit={handleSubmit} >
        <label> Email :  </label>
            <input type="email" className={style.inputcolor} onChange={(e)=>{setEmail(e.target.value)}} />
            <label> Password :  </label>
            <input type="password" className={style.inputcolor} onChange={(e)=>{setPassword(e.target.value)}} />
            <button className={style.btnsend}> Send</button>
        </form>
    
    </div>
  )
}