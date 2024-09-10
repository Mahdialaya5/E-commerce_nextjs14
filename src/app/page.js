import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav className={styles.nav}>
        <Link href={"/login"}>
          <button className={styles.btn}>login </button>
        </Link>
        <Link href={"/register"}>
          <button className={styles.btn}>register</button>
        </Link>
      </nav>
      <main className={styles.main}>
        <div className={styles.card}>
          <Image
            src={
              "https://www.entreprises-magazine.com/wp-content/uploads/2023/08/365886767_6462203757204075_7243236580704549739_n.jpg"
            }
            width={275}
            height={300}
            alt="Picture"
            layout="responsive"
          />
          <h3>name:</h3>
          <p>price:</p>
        </div>
        <div className={styles.card}>
          <Image
            src={
              "https://www.entreprises-magazine.com/wp-content/uploads/2023/08/365886767_6462203757204075_7243236580704549739_n.jpg"
            }
            width={275}
            height={300}
            alt="Picture"
            layout="responsive"
          />
          <h3>name:</h3>
          <p>price:</p>
        </div>
        <div className={styles.card}>
          <Image
            src={
              "https://www.entreprises-magazine.com/wp-content/uploads/2023/08/365886767_6462203757204075_7243236580704549739_n.jpg"
            }
            width={275}
            height={300}
            alt="Picture"
            layout="responsive"
          />
          <h3>name:</h3>
          <p>price:</p>
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </>
  );
}
