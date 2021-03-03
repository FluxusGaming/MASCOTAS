import Button from "@material-ui/core/Button";
import styles from "../../styles/Dashboard.module.css";

import {
  FaMars,
  FaVenus,
  FaCalendarAlt,
  FaGenderless,
  FaMapMarkedAlt,
  FaExclamationTriangle,
} from "react-icons/fa";
import Link from "next/link";
export default function PetCard({
  title,
  sex,
  age,
  castrated,
  address,
  thumbnail,
  status,
}) {
  return (
    <div className={styles.pet__card}>
      <img className={styles.pet__img} src={thumbnail}></img>
      <h2 className={styles.pet__title}>{title}</h2>
      <div className={styles.pet__description}>
        <p>
          {sex.toLowerCase() === "macho" ? <FaMars /> : <FaVenus />} {""}
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
      </div>
      <Link href="adopciones/1">
        <Button
          variant="contained"
          color="secondary"
          style={{
            fontWeight: "600",
            alignSelf: "center",
            height: "2.4rem",
            width: "50%",
          }}
        >
          ADOPTAR
        </Button>
      </Link>
    </div>
  );
}
