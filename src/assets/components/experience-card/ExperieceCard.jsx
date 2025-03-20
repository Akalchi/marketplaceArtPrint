// src/components/ExperienceCard.jsx
import React from 'react';
import styles from './ExperienceCard.module.css';

const ExperienceCard = ({ title, city, type, description, price }) => {
    return (
        <div className={styles.card}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.locationType}>
                <span className={styles.city}>{city}</span>
                <span className={`${styles.type} ${type === 'Online' ? styles.online : styles.presential}`}>
                    {type}
                </span>
            </div>
            <p className={styles.description}>{description}</p>
            <span className={styles.price}>{price}€</span>
        </div>
    );
};

export default ExperienceCard;