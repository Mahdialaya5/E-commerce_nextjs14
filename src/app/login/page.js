"use client"
import { Form } from "@/styles/styleLogin"
import React, { useState } from "react"
import style from "./login.module.css"


export default function login() {
    const [email,setEmail] =useState()
    const [password,setPassword] =useState()
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('email :',email,'password :',password)
    }
  return (
    <div>
        <form className={style.formlg}>
        <label> Email :  </label>
            <input type="email" className={style.inputcolor} onChange={(e)=>{setEmail(e.target.value)}} />
            <label> Password :  </label>
            <input type="paswword" className={style.inputcolor} onChange={(e)=>{setPassword(e.target.value)}} />
            <button className={style.btnsend}> Send</button>
        </form>
    
    </div>
  )
}