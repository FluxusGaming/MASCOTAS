import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import styles from "../styles/landing.module.css";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import withAuth from "../services/withAuth";
function index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mascotas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <Navbar />
        <div className={styles.hero}>
          <div className={styles.hero__text}>
            <h1>Adoptá</h1>
            <h1>No Compres!</h1>
            <Link href="/adopciones">
              <Button
                style={{
                  fontWeight: "bold",
                  height: "3rem",
                  width: "12rem",
                  fontSize: "1rem",
                }}
                variant="contained"
                color="secondary"
              >
                ¡Cambiá una vida!
              </Button>
            </Link>
          </div>
          <img className={styles.hero__img} src="/img/pet.png"></img>
        </div>
        <div className={styles.rescue__container}>
          <h2>¡En el transcurso de esta semana rescatamos 2000 animales!</h2>
          <div className={styles.rescue__pet__container}>
            <div className={styles.rescue__pet__card__container}>
              <div className={styles.rescue__pet__card}>
                <img src="https://images.unsplash.com/photo-1586326448571-8c6e1e473bad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"></img>
                <p>Test</p>
              </div>
            </div>
            <div className={styles.rescue__pet__card__container}>
              <div className={styles.rescue__pet__card}>
                <img src="https://images.unsplash.com/photo-1520087619250-584c0cbd35e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=685&q=80"></img>
                <p>Test</p>
              </div>
            </div>
            <div className={styles.rescue__pet__card__container}>
              <div className={styles.rescue__pet__card}>
                <img src="https://images.unsplash.com/photo-1572566830488-069bcc7fbcec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"></img>
                <p>Test</p>
              </div>
            </div>
            <div className={styles.rescue__pet__card__container}>
              <div className={styles.rescue__pet__card}>
                <img src="https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1276&q=80"></img>
                <p>Test</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withAuth(index);
