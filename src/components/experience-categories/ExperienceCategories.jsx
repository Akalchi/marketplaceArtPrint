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
    image: "/placeholder.svg?height=300&width=400",
    format: "Presencial",
  },
  {
    id: 2,
    title: "Escritura creativa: Encuentra tu voz",
    category: "Escritura",
    location: "Online",
    price: 45,
    image: "/placeholder.svg?height=300&width=400",
    format: "Online",
  },
  {
    id: 3,
    title: "Acuarela botánica para principiantes",
    category: "Acuarela",
    location: "Madrid",
    price: 55,
    image: "/placeholder.svg?height=300&width=400",
    format: "Presencial",
  },
  {
    id: 4,
    title: "Cocina vegana: Platos de temporada",
    category: "Cocina",
    location: "Valencia",
    price: 70,
    image: "/placeholder.svg?height=300&width=400",
    format: "Presencial",
  },
  {
    id: 5,
    title: "Fotografía de viajes: Captura el mundo",
    category: "Fotografía",
    location: "Barcelona",
    price: 60,
    image: "/placeholder.svg?height=300&width=400",
    format: "Presencial",
  },
  {
    id: 6,
    title: "Cosmética natural: Cuida tu piel",
    category: "Cosmética",
    location: "Online",
    price: 40,
    image: "/placeholder.svg?height=300&width=400",
    format: "Online",
  },
];

const ExperienceCategories = () => {
  return (
    <div className={styles.experienceCategories}>
      <h2 className={styles.h2}>Categorías</h2>
      <div className={styles.categoriesList}>
        {categories.map((category) => (
          <button
            key={category.id}
            className={styles.categoryBtn}
            aria-label={`Filtrar por ${category.name}`}
          >
            {category.name}
          </button>
        ))}
      </div>
      <h2 className={styles.h2}>Experiencias Destacadas</h2>
      <div className={styles.featuredExperiences}>
        {experiences.map((experience) => (
          <div key={experience.id} className={styles.experienceCard}>
            <img
              src={experience.image}
              alt={experience.title}
              className={styles.experienceImage}
            />
            <h3>{experience.title}</h3>
            <p>
              {experience.category} · {experience.location}
            </p>
            <span className={styles.price}>{experience.price}€</span>
            <span className={styles.type}>{experience.format}</span>
            <button className={styles.detailsBtn}>Ver detalles</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCategories;
