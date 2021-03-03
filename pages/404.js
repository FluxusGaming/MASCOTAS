import Head from "next/head";
import styles from "../styles/Error404.module.css";
import Navbar from "../components/navbar/Navbar";
export default function error404() {
  return (
    <div className={styles.container}>
      <Head>
        <title>404</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <Navbar />
        <div className={styles.error404__container}>
          <h1 className={styles.error404__title}>404</h1>
          <p className={styles.error404__subtitle}>
            ¡La página que buscas no existe!
          </p>
        </div>
      </div>
    </div>
  );
}
