import { Link } from "react-router-dom";
import { FiInstagram, FiTwitter } from "react-icons/fi";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Sobre nosotros</h3>
            <p>Un marketplace de experiencias creativas para desconectar, explorar y aprender disfrutando.</p>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Experiencias</h3>
            <ul className={styles.footerLinks}>
              <li>
                <Link to="/categoria/ceramica">Cerámica</Link>
              </li>
              <li>
                <Link to="/categoria/escritura">Escritura</Link>
              </li>
              <li>
                <Link to="/categoria/acuarela">Acuarela</Link>
              </li>
              <li>
                <Link to="/categoria/cocina">Cocina</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Ciudades</h3>
            <ul className={styles.footerLinks}>
              <li>
                <Link to="/ciudad/barcelona">Barcelona</Link>
              </li>
              <li>
                <Link to="/ciudad/madrid">Madrid</Link>
              </li>
              <li>
                <Link to="/ciudad/valencia">Valencia</Link>
              </li>
              <li>
                <Link to="/ciudad/sevilla">Sevilla</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Contacto</h3>
            <ul className={styles.footerContact}>
              <li>info@experienciascreativas.com</li>
              <li>+34 123 456 789</li>
              <li className={styles.socialIcons}>
                <a href="#" aria-label="Instagram">
                  <FiInstagram />
                </a>
                <a href="#" aria-label="Twitter">
                  <FiTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© 2025 ArtPrint. Todos los derechos reservados ©️.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
