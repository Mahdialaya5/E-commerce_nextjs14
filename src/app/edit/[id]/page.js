"use client";
import React, { useEffect, useState } from "react";
import style from "./edit.module.css";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";


export default function Editproduct() {
  const [product, setproduct] = useState();

  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/product/${id}`)
      .then((res) => setproduct(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:3000/api/product/${id}`,{name:product.name,price:product.price,url:product.url})
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    router.push("/");
    window.location.reload
  };
  return (
  
      <form className={style.formlg} onSubmit={handleSubmit}>
        <label> name : </label>
        <input
          className={style.inputcolor}
          placeholder={product && product.name}
          onChange={(e) => setproduct({ ...product, name: e.target.value })}
        />
        <label> Price : </label>
        <input
          className={style.inputcolor}
          placeholder={product && product.price}
          onChange={(e) => {
            setproduct({ ...product, price: e.target.value });
          }}
        />
        <label> url : </label>
        <input
          placeholder={product && product.url}
          className={style.inputcolor}
          onChange={(e) => {
            setproduct({ ...product, url: e.target.value });
          }}
        />
        <button className={style.btnsend} type="submit">
          edit and save
        </button>
      </form>
  

  );
}
