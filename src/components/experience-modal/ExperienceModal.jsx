import React from "react";
import ReactDOM from "react-dom";
import { FiX } from "react-icons/fi";
import styles from "./ExperienceModal.module.css";

const ExperienceModal = ({ experience, onClose }) => {
  if (!experience) return null;

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <FiX size={24} />
        </button>

        <div className={styles.imageWrapper}>
          <img
            src={experience.image || "/placeholder.svg"}
            alt={experience.title}
            className={styles.mainImage}
          />
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>{experience.title}</h2>
          <p className={styles.meta}>
            {experience.category} · {experience.location}
          </p>
          <p className={styles.description}>{experience.description}</p>
          <p className={styles.price}>{experience.price}€</p>

          <button className={styles.addToCartButton}>Añadir al carrito</button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ExperienceModal;
