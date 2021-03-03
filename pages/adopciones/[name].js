import Head from "next/head";
import styles from "../../styles/AdopcionesPet.module.css";
import PetCard from "../../components/adopt/PetCard";
import Button from "@material-ui/core/Button";
import {
  FaMars,
  FaVenus,
  FaCalendarAlt,
  FaGenderless,
  FaMapMarkedAlt,
  FaExclamationTriangle,
  FaTint,
  FaPhoneAlt,
  FaHome,
} from "react-icons/fa";
import Navbar from "../../components/navbar/Navbar";
export default function adopciones() {
  const title = "Firulais";
  const race = "Labrador";
  const sex = "Macho";
  const age = "5 Años";
  const castrated = "SI";
  const address = "x-x-x-x, Uruguay";
  const thumbnail =
    "https://images.unsplash.com/photo-1507145569372-d69bae8bc9a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1266&q=80";
  const status = "En Adopción";
  const telephone = "43330000";
  const refuge = "Patitas Canarias";

  return (
    <div className={styles.container}>
      <Head>
        <title>Adopciones</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <Navbar />
        <div className={styles.pet__card__container}>
          <div className={styles.pet__card}>
            <img className={styles.pet__img} src={thumbnail}></img>
            <div className={styles.pet__info}>
              <h2 className={styles.pet__title}>{title}</h2>
              <div className={styles.pet__description}>
                <h2>Características</h2>
                <p>
                  <FaTint /> {""}
                  Raza: {race}
                </p>
                <p>
                  {sex.toLowerCase() == "MACHO" ? <FaMars /> : <FaVenus />} {""}
                  Sexo: {sex}
                </p>
                <p>
                  <FaCalendarAlt /> {""}
                  Edad: {age}
                </p>
                <p>
                  <FaGenderless /> {""}
                  Castrado/a: {castrated}
                </p>
                <p>
                  <FaMapMarkedAlt /> {""}
                  Dirección: {address}
                </p>
                <p>
                  <FaExclamationTriangle /> {""}
                  Estado: {status}
                </p>
                <h2>Contacto</h2>
                <p>
                  <FaPhoneAlt /> {""}
                  Teléfono: {telephone}
                </p>
                <p>
                  <FaHome /> {""}
                  Refugio: {refuge}
                </p>
              </div>

              <Button
                variant="contained"
                color="secondary"
                style={{
                  fontWeight: "600",
                  alignSelf: "center",
                  height: "2.8rem",
                  width: "12rem",
                  margin: "0.5rem",
                }}
              >
                ADOPTAR
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
