import Head from "next/head";
import styles from "../styles/Dashboard.module.css";
import Navbar from "../components/navbar/Navbar";
import withAuth from "../services/withAuth";
function social({ user }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Social</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <Navbar user={user} />
      </div>
    </div>
  );
}

export default withAuth(social);
