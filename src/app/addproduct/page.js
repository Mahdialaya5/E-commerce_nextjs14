"use client";
import React, { useState } from "react";
import style from "./addproduct.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import UserRoute from "@/components/PrivateRoute/userRoute";


export default function Addproduct() {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [url, seturl] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/api/product/", { name, price, url });
    router.push("/");
  };
  return (
    <UserRoute>
      <form className={style.formlg} onSubmit={handleSubmit}>
        <label> name : </label>
        <input
         className={style.inputcolor}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label> Price : </label>
        <input
           className={style.inputcolor}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <label> url : </label>
        <input
          
          className={style.inputcolor}
          onChange={(e) => {
            seturl(e.target.value);
          }}
        />
        <button className={style.btnsend} type="submit">
          add
        </button>
      </form>
   </UserRoute>
  );
}
