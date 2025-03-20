import React from 'react';
import styles from './NavBar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src="/logo.png" alt="ArtPrint" />
            </div>
            <div className={styles.categories}>
                <ul className={styles.categoryList}>
                    <li><a href="#ceramica">Cerámica</a></li>
                    <li><a href="#escritura">Escritura</a></li>
                    <li><a href="#acuarela">Acuarela</a></li>
                    <li><a href="#cocina">Cocina</a></li>
                    <li><a href="#bordado">Bordado</a></li>
                    <li><a href="#cosmetica">Cosmética</a></li>
                </ul>
            </div>
            <div className={styles.navActions}>
                <button className={styles.loginButton}>Iniciar sesión</button>
                <span className={styles.cartIcon}>🛒</span>
            </div>
        </nav>
    );
};

export default Navbar;