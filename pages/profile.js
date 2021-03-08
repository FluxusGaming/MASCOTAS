import Head from "next/head";
import styles from "../styles/Profile.module.css";
import Navbar from "../components/navbar/Navbar";
import withAuth from "../services/withAuth";
import Avatar from "@material-ui/core/Avatar";
import PetCard from "../components/adopt/PetCard";
function profile({ user }) {
  return (
    <div className={styles.profile__container}>
      <Head>
        <title>Mi Perfil</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.profile__main}>
        <Navbar user={user} />
        <div className={styles.profile__banner}>
          <img
            className={styles.profile__banner__img}
            src="https://www.freewebheaders.com/wp-content/gallery/dogs/yellow-labrador-puppies-in-garden-web-header.jpg"
          ></img>
          <div className={styles.profile__avatar}>
            <Avatar
              style={{ height: "120px", width: "120px" }}
              alt="profile"
              src={
                "https://avatars.githubusercontent.com/u/20648944?s=460&u=b861ca307ee6726b19f99d439a919ef6054b50fd&v=4"
              }
            >
              {user?.username[0]}
            </Avatar>
          </div>
        </div>
        <div className={styles.profile__content}>
          <h1 className={styles.profile__username}>{user?.username}</h1>
          <div className={styles.pet__cards__container}>
            <PetCard
              title={"Firulais_1"}
              sex={"Macho"}
              age={"15 años"}
              castrated={"SI"}
              address={"x-x-x-x, Uruguay"}
              thumbnail={
                "https://images.unsplash.com/photo-1599676691468-89cdd72b715b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=616&q=80"
              }
              status={"En Adopción"}
            />
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
            />
            <PetCard
              title={"Gata"}
              sex={"Hembra"}
              age={"1 años"}
              castrated={"NO"}
              address={"x-x-x-x, Uruguay"}
              thumbnail={
                "https://images.unsplash.com/photo-1580784355694-0d5295dcc007?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              }
              status={"En Adopción"}
            />
            <PetCard
              title={"Perra"}
              sex={"Hembra"}
              age={"2 años"}
              castrated={"SI"}
              address={"x-x-x-x, Uruguay"}
              thumbnail={
                "https://images.unsplash.com/photo-1507145569372-d69bae8bc9a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1266&q=80"
              }
              status={"En Adopción"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default profile;
