import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css';


export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <h1 className={styles.title}>ArtPrint</h1>
                <h2 className={styles.subtitle}>Un espacio para crear</h2>
                <p className={styles.description}>
                    Desconecta, explora y aprende disfrutando
                </p>
                <div className={styles.buttons}>
                    <Link to="/catalog">
                        <button href='#src/pages/Catalog.jsx' className={styles.exploreButton}>
                            Explorar experiencias
                        </button>
                    </Link>
                    <button className={styles.howItWorksButton}>
                        ¿Cómo funciona?
                    </button>
                </div>
            </div>
        </section>
    );
}
