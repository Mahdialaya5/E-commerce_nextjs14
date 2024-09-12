'use client'

import { useRouter } from "next/navigation"



function Profil() {
   

    const router=useRouter()

  
  return (
    <div>
            <button  onClick={logout} >logout</button>
            <p>email:</p>
    </div>
  )
}

export default Profil