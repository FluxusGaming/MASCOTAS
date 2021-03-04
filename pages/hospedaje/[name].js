import Head from "next/head";
import Navbar from "../../components/navbar/Navbar";
import styles from "../../styles/Hospedaje/hospedaje.module.css";
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
import LodgingCardPreview from "../../components/lodging/LodgingCardPreview";

export default function hospedaje() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hospedaje</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <Navbar />
        <LodgingCardPreview />
      </div>
    </div>
  );
}
