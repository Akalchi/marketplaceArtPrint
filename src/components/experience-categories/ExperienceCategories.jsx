import React from "react";
import styles from "./ExperienceCategories.module.css";

const categories = [
  { id: 1, name: "Cerámica" },
  { id: 2, name: "Escritura" },
  { id: 3, name: "Acuarela" },
  { id: 4, name: "Cocina" },
  { id: 5, name: "Fotografía" },
  { id: 6, name: "Cosmética" },
];

const experiences = [
  {
    id: 1,
    title: "Taller de cerámica: Iniciación al torno",
    category: "Cerámica",
    location: "Barcelona",
    price: 65,
    image: "../../public/img/iniciacion-torno.webp?height=300&width=400",
    format: "Presencial",
  },
  {
    id: 2,
    title: "Escritura creativa: Encuentra tu voz",
    category: "Escritura",
    location: "Online",
    price: 45,
    image: "../../public/img/escritura-creativa.webp?height=300&width=400",
    format: "Online",
  },
  {
    id: 3,
    title: "Acuarela botánica para principiantes",
    category: "Acuarela",
    location: "Madrid",
    price: 55,
    image: "../../public/img/acuarela-botanica.webp?height=300&width=400",
    format: "Presencial",
  },
  {
    id: 4,
    title: "Cocina vegana: Platos de temporada",
    category: "Cocina",
    location: "Valencia",
    price: 70,
    image: "../../public/img/cocina-vegana.webp?height=300&width=400",
    format: "Presencial",
  },
  {
    id: 5,
    title: "Fotografía de viajes: Captura el mundo",
    category: "Fotografía",
    location: "Barcelona",
    price: 60,
    image: "../../public/img/fotografia-viajes.webp?height=300&width=400",
    format: "Presencial",
  },
  {
    id: 6,
    title: "Cosmética natural: Cuida tu piel",
    category: "Cosmética",
    location: "Online",
    price: 40,
    image: "../../public/img/cosmetica-natural.webp?height=300&width=400",
    format: "Online",
  },
];

const ExperienceCategories = () => {
  return (
      <>
      <h2 className={styles.h2}>Experiencias Destacadas</h2>
      <div className={styles.featuredExperiences}>
      {experiences.map((experience) => (
        <div key={experience.id} className={styles.experienceCard}>
          <img
            src={experience.image}
            alt={experience.title}
            className={styles.experienceImage} />
          <h3>{experience.title}</h3>
          <span className={styles.type}>{experience.format}</span>
          <p>
            {experience.category} · {experience.location}
          </p>
          <span className={styles.price}>{experience.price}€</span>
          
          <button className={styles.detailsBtn}>Ver detalles</button>
        </div>
        ))}
      </div>
      </>
  );
};

export default ExperienceCategories;
