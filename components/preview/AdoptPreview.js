import Head from "next/head";
import styles from "../../styles/AdoptPreview.module.css";
import PetCard from "../adopt/PetCard";
export default function AdoptPreview() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mascotas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <PetCard
          title={"Gato"}
          sex={"Macho"}
          age={"5 años"}
          castrated={"NO"}
          address={"x-x-x-x, Uruguay"}
          thumbnail={
            "https://images.unsplash.com/photo-1612126258173-85375840a9ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80"
          }
          status={"En Adopción"}
        ></PetCard>
      </div>
    </div>
  );
}
