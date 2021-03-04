import styles from "../../styles/Hospedaje/LodgingCard.module.css";
import { FaMapMarkedAlt, FaDollarSign } from "react-icons/fa";
import Button from "@material-ui/core/Button";
import Link from "next/link";
export default function Lodging() {
  return (
    <div className={styles.lodging__contrainer}>
      <div className={styles.lodging__card}>
        <img src="https://images.vexels.com/media/users/3/147761/isolated/preview/dfc335579a8cee164c3069d0548016f3-dog-grooming-logo-by-vexels.png"></img>
        <p className={styles.lodging__card__title}>La Casa de Nico y Moa</p>
        <div className={styles.lodging__card__details}>
          <p>
            <FaMapMarkedAlt /> {""}
            Dirección: x-x-x-x, Uruguay
          </p>
          <p>
            <FaDollarSign /> {""}
            Noche: <span className={styles.lodging__card__price}>380 UYU</span>
          </p>
        </div>
        <Link href="hospedaje/1">
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
            INFORMACIÓN
          </Button>
        </Link>
      </div>
    </div>
  );
}
