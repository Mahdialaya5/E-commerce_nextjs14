import Link from "next/link";
import styles from "./page.module.css";
import Card from "@/components/card/Card";
import axios from "axios";

export default async function Home() {
  let data = await axios.get("http://localhost:3000/api/product/");



  return (
    <>
      <nav className={styles.nav}>
        <Link href={"/login"}>
          <button className={styles.btn}>login </button>
        </Link>
        <Link href={"/register"}>
          <button className={styles.btn}>register</button>
        </Link>
        <Link href={"/addproduct"}>
          <button className={styles.btn}>addproduct</button>
        </Link>
      </nav>
      <main className={styles.main}>
        {data && data.data.map((el) => <Card el={el} key={el._id} />)}
      </main>
      <footer className={styles.footer}></footer>
    </>
  );
}
