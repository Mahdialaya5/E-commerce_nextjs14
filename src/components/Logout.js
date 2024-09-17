'use client'
import React from 'react'
import { signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'

function Logout() {
  

    const router=useRouter()

    const handleclick=()=>{
        router.push('/')
        signOut()
  
    }

  return (
    <button   onClick={handleclick} >logout</button>
  )
}

export default Logout