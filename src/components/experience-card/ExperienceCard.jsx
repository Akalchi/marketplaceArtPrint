import React from "react";
import styles from "./ExperienceCard.module.css";

const ExperienceCard = ({ title, city, format, description, price, image, onClick }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image || "/placeholder.svg"} alt={title} className={styles.image} />
        <span className={`${styles.badge} ${format === "Online" ? styles.online : styles.presential}`}>
          {format}
        </span>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.city}>{city}</p>
        <p className={styles.description}>{description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>{price}€</span>
          <button className={styles.viewMoreButton} onClick={onClick}>
            Ver más
          </button> 
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
