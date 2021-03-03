import Button from "@material-ui/core/Button";
import styles from "../../styles/Dashboard.module.css";
import Link from "next/link";
import {
  FaMars,
  FaVenus,
  FaCalendarAlt,
  FaGenderless,
  FaMapMarkedAlt,
  FaExclamationTriangle,
  FaWhatsapp,
} from "react-icons/fa";
export default function PetCardLost({
  title,
  sex,
  age,
  castrated,
  address,
  thumbnail,
  whatsapp,
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
          <FaMapMarkedAlt /> {""}
          Dirección: {address}
        </p>
        <p>
          <FaCalendarAlt /> {""}
          Fecha: 00/00/0000
        </p>
        <p>
          <FaExclamationTriangle /> {""}
          Estado: {status}
        </p>
      </div>
      <Link
        href={`https://api.whatsapp.com/send?phone=${whatsapp}&text=Animal%20Perdido`}
      >
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
          <FaWhatsapp style={{ fontSize: "1.1rem" }} />
          <span className="span__space" style={{ margin: "0.4rem" }}>
            FAMILIA
          </span>
        </Button>
      </Link>
    </div>
  );
}
