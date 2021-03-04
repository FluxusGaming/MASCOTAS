import Head from "next/head";
import styles from "../../styles/Hospedaje/Hospedaje.module.css";
import {
  FaDog,
  FaShoppingBasket,
  FaSeedling,
  FaMapPin,
  FaMapMarkedAlt,
  FaTelegramPlane,
  FaPhoneAlt,
} from "react-icons/fa";
import Button from "@material-ui/core/Button";
import Link from "next/link";

export default function LodgingCardPreview() {
  const title = "La Casa de Nico y Moa";
  const category = "Perros y Gatos";
  const services = "Cuidado 24/7, recreación";
  const spaces = "Verdes";
  const location = "x-x-x-x, Uruguay";
  const address = "x-x-x-x, Uruguay";
  const thumbnail =
    "https://images.vexels.com/media/users/3/147761/isolated/preview/dfc335579a8cee164c3069d0548016f3-dog-grooming-logo-by-vexels.png";
  const email = "test@mascoty.app";
  const telephone = "43330000";
  const website = "www.testsite.com";
  const price = "390 UYU";
  return (
    <div className={styles.pet__card__container}>
      <div className={styles.pet__card}>
        <img className={styles.pet__img} src={thumbnail}></img>
        <div className={styles.pet__info}>
          <h2 className={styles.pet__title}>{title}</h2>
          <div className={styles.pet__description}>
            <h2>Características</h2>
            <p>
              <FaDog /> {""}
              Categoría: {category}
            </p>
            <p>
              <FaShoppingBasket /> {""}
              Servicios: {services}
            </p>
            <p>
              <FaSeedling /> {""}
              Espacios: {spaces}
            </p>
            <p>
              <FaMapPin /> {""}
              Localidad: {location}
            </p>
            <p>
              <FaMapMarkedAlt /> {""}
              Dirección: {address}
            </p>
            <h2>Contacto</h2>
            <p>
              <FaTelegramPlane /> {""}
              Email: {email}
            </p>
            <p>
              <FaPhoneAlt /> {""}
              Teléfono: {telephone}
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
            CONTRATAR
          </Button>
        </div>
      </div>
    </div>
  );
}
