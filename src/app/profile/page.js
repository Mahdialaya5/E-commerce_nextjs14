"use client";
import UserRoute from "@/components/PrivateRoute/userRoute";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function Page() {

  const router=useRouter()
  const [user, setuser] = useState({})
  const token = document.cookie.split("=")[1];

   useEffect(() => {

    axios
    .get("http://localhost:3000/api/user/getcurrentuser", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => setuser(res.data))
    .catch((err) => console.log(err))

   }, [])
   

  const handleDeleteCookie = () => {
    axios
      .post("http://localhost:3000/api/user/deletecookie")
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      router.push('/')
  };
  return (
    <UserRoute>
      <p>email:{user&&user.email}</p>
      <button onClick={handleDeleteCookie}>Delete Cookie</button>
    </UserRoute>
  );
}
