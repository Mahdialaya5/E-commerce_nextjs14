import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

function Card({ el,token }) {
  return (
    <div className={styles.card}>
      <Image
        responsive="true"
        priority
        src={el.url}
        width={275}
        height={300}
        alt="Picture"
       
      />
      <h3>name:{el.name}</h3>
      <p>price:{el.price}</p>
     {token ? <Link href={`/edit/${el._id}`} >edit</Link> :null} 
    </div>
  );
}

export default Card;
