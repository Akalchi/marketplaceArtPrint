import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import logoImgDark from "../../assets/logos/artprintLogoDark.png";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link to="/" className={styles.logoLink}>
            <img src={logoImgDark} alt="ArtPrint link Inicio" />
            <p className={styles.text}>Inicio</p>
          </Link>
        </div>

        <div className={styles.categories}>
          <ul className={styles.categoryList}>
            <li>
              <Link to="/ceramica">Cerámica</Link>
            </li>
            <li>
              <Link to="/escritura">Escritura</Link>
            </li>
            <li>
              <Link to="/acuarela">Acuarela</Link>
            </li>
            <li>
              <Link to="/cocina">Cocina</Link>
            </li>
            <li>
              <Link to="/fotografia">Fotografía</Link>
            </li>
            <li>
              <Link to="/cosmetica">Cosmética</Link>
            </li>
          </ul>
        </div>

        <div className={styles.navActions}>
          <Link to="/login">
            <button className={styles.loginButton}>Iniciar sesión</button>
          </Link>
          <span className={styles.cartIcon}>🛒</span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
