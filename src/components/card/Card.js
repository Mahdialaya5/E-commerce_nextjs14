import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

function Card({ el }) {
  return (
    <div className={styles.card}>
      <Image
        src={el.url}
        width={275}
        height={300}
        alt="Picture"
        layout="responsive"
      />
      <h3>name:{el.name}</h3>
      <p>price:{el.price}</p>
      <Link href={`/edit/${el._id}`} >edit</Link>
    </div>
  );
}

export default Card;
