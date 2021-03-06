import Lodging from "../components/lodging/LodgingCard";
import Head from "next/head";
import styles from "../styles/Hospedaje/hospedaje.module.css";
import Navbar from "../components/navbar/Navbar";
import withAuth from "../services/withAuth";
function hospedaje({ user }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hospedaje</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <Navbar user={user} />
        <Lodging />
      </div>
    </div>
  );
}
export default withAuth(hospedaje);
