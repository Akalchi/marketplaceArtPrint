import React from 'react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <h1 className={styles.title}>Un espacio para crear</h1>
                <p className={styles.description}>
                    Desconecta, explora y aprende disfrutando
                </p>
                <div className={styles.buttons}>
                    <button className={styles.exploreButton}>
                        Explorar experiencias
                    </button>
                    <button className={styles.howItWorksButton}>
                        ¿Cómo funciona?
                    </button>
                </div>
            </div>
        </section>
    );
}