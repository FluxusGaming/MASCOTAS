import Lodging from "../components/lodging/LodgingCard";
import Head from "next/head";
import styles from "../styles/Hospedaje/hospedaje.module.css";
import Navbar from "../components/navbar/Navbar";
export default function hospedaje() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hospedaje</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <Navbar />
        <Lodging />
      </div>
    </div>
  );
}
