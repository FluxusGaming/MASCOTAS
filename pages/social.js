import Head from "next/head";
import styles from "../styles/Social.module.css";
import Navbar from "../components/navbar/Navbar";
import withAuth from "../services/withAuth";
import FeedCard from "../components/feed/FeedCard";
function social({ user }) {
  return (
    <div className={styles.social__container}>
      <Head>
        <title>Social</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.social__main}>
        <Navbar user={user} />
        <div className={styles.social__cards__container}>
          <FeedCard
            user={user}
            thumbnail="https://images.unsplash.com/photo-1599676691468-89cdd72b715b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=616&q=80"
          />
        </div>
      </div>
    </div>
  );
}

export default social;
