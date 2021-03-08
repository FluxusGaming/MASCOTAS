import React from "react";
import styles from "../../styles/Navbar.module.css";
import Link from "next/link";
import {
  FaHome,
  FaTwitter,
  FaDog,
  FaMap,
  FaWalking,
  FaPaw,
  FaBriefcaseMedical,
} from "react-icons/fa";
import Logo from "../../public/img/svg/logo__huella.svg";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Dropdown from "./Dropdown";
export default function Navbar({ user }) {
  return (
    <div className={styles.navbar}>
      <Logo className={styles.logo} />
      <div className={styles.navbar__items}>
        <div className={styles.navbar__links}>
          <Link href="/">
            <p>
              <FaHome className={styles.navbar__icon} />
              <span className={styles.navbar__text}>INICIO</span>
            </p>
          </Link>
          <Link href="/social">
            <p>
              <FaTwitter className={styles.navbar__icon} />
              <span className={styles.navbar__text}>SOCIAL</span>
            </p>
          </Link>
          <Link href="/adopciones">
            <p>
              <FaDog className={styles.navbar__icon} />
              <span className={styles.navbar__text}>ADOPCIONES</span>
            </p>
          </Link>
          <Link href="/perdidos">
            <p>
              <FaMap className={styles.navbar__icon} />
              <span className={styles.navbar__text}>PERDIDOS</span>
            </p>
          </Link>
          <Link href="/paseos">
            <p>
              <FaWalking className={styles.navbar__icon} />
              <span className={styles.navbar__text}>PASEOS</span>
            </p>
          </Link>
          <Link href="/hospedaje">
            <p>
              <FaPaw className={styles.navbar__icon} />
              <span className={styles.navbar__text}>HOSPEDAJE</span>
            </p>
          </Link>

          {user && !user?.error && <Dropdown />}
        </div>
        {(!user || user?.error) && (
          <div className={styles.login__and__register__btn}>
            <Link href="/login">
              <Button
                variant="outlined"
                style={{
                  color: "primary",
                  fontWeight: 600,
                  height: "2.4rem",
                  width: "6.5rem",
                }}
              >
                Ingresá
              </Button>
            </Link>
            <Link href="/login">
              <Button
                variant="contained"
                style={{
                  background: "#000000",
                  color: "#ffffff",
                  fontWeight: 600,
                  height: "2.4rem",
                  width: "6.5rem",
                }}
              >
                Regístrate
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
