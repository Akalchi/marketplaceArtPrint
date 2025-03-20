import { useState } from "react";
import { FiFilter, FiSearch } from "react-icons/fi";
import ExperienceCard from "../components/experience-card/ExperienceCard";
import ExperienceModal from "../components/experience-modal/ExperienceModal";
import styles from "./Catalog.module.css";

const experiences = [
  {
    id: 1,
    title: "Taller de cerámica: Iniciación al torno",
    category: "Cerámica",
    location: "Barcelona",
    price: 65,
    image: "../../public/img/iniciacion-torno.webp",
    format: "Presencial",
  },
  {
    id: 2,
    title: "Escritura creativa: Encuentra tu voz",
    category: "Escritura",
    location: "Online",
    price: 45,
    image: "../../public/img/escritura-creativa.webp",
    format: "Online",
  },
  {
    id: 3,
    title: "Acuarela botánica para principiantes",
    category: "Acuarela",
    location: "Madrid",
    price: 55,
    image: "../../public/img/acuarela-botanica.webp",
    format: "Presencial",
  },
  {
    id: 4,
    title: "Cocina vegana: Platos de temporada",
    category: "Cocina",
    location: "Valencia",
    price: 70,
    image: "../../public/img/cocina-vegana.webp",
    format: "Presencial",
  },
  {
    id: 5,
    title: "Bordado contemporáneo: Técnicas básicas",
    category: "Bordado",
    location: "Sevilla",
    price: 50,
    image: "../../public/img/bordado-moderno.jpg",
    format: "Presencial",
  },
  {
    id: 6,
    title: "Cosmética natural: Cremas hidratantes",
    category: "Cosmética",
    location: "Online",
    price: 40,
    image: "../../public/img/cosmetica-natural.webp",
    format: "Online",
  },
  {
    id: 7,
    title: "Encuadernación japonesa",
    category: "Encuadernación",
    location: "Bilbao",
    price: 60,
    image: "../../public/img/encuadernacion-japonesa.jpg",
    format: "Presencial",
  },
  {
    id: 8,
    title: "Macramé: Crea tu propio colgante",
    category: "Bordado",
    location: "Online",
    price: 35,
    image: "../../public/img/macrame.jpg",
    format: "Online",
  },
];

const ExperienciasPage = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const openModal = (experience) => {
    setSelectedExperience(experience);
  };

  const closeModal = () => {
    console.log("Forzando cierre del modal...");
    setSelectedExperience(null);
    setTimeout(() => {
      setSelectedExperience(null);
    }, 10); // Asegura que React detecte el cambio
  };
  

  return (
    <div className={styles.experienciasPage}>
      {/* Título */}
      <div className={styles.pageTitleSection}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Experiencias creativas</h1>
          <p className={styles.pageSubtitle}>
            Descubre talleres y cursos impartidos por artesanos y profesionales creativos
          </p>
        </div>
      </div>

      {/* Buscador y filtros */}
      <div className={styles.container}>
        <div className={styles.searchFiltersContainer}>
          <div className={styles.searchContainer}>
            <div className={styles.searchInputWrapper}>
              <FiSearch className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Buscar experiencias..."
                className={styles.searchInput}
              />
            </div>
            <button className={styles.searchButton}>Buscar</button>
          </div>

          <div className={styles.filtersGrid}>
            {/* Categorías */}
            <div className={styles.filterGroup}>
              <h3 className={styles.filterTitle}>
                <FiFilter className={styles.filterIcon} />
                Categorías
              </h3>
              <div className={styles.filterOptions}>
                {["Cerámica", "Escritura", "Acuarela", "Cocina", "Bordado", "Cosmética", "Encuadernación"].map(
                  (category) => (
                    <div key={category} className={styles.filterOption}>
                      <input type="checkbox" id={`category-${category}`} />
                      <label htmlFor={`category-${category}`}>{category}</label>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Formato */}
            <div className={styles.filterGroup}>
              <h3 className={styles.filterTitle}>Formato</h3>
              <div className={styles.filterOptions}>
                {["Presencial", "Online en directo", "Online grabado"].map((format) => (
                  <div key={format} className={styles.filterOption}>
                    <input type="checkbox" id={`format-${format}`} />
                    <label htmlFor={`format-${format}`}>{format}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Ciudades */}
            <div className={styles.filterGroup}>
              <h3 className={styles.filterTitle}>Ciudades</h3>
              <div className={styles.filterOptions}>
                {["Barcelona", "Madrid", "Valencia", "Sevilla", "Bilbao"].map((city) => (
                  <div key={city} className={styles.filterOption}>
                    <input type="checkbox" id={`city-${city}`} />
                    <label htmlFor={`city-${city}`}>{city}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Precio */}
            <div className={styles.filterGroup}>
              <h3 className={styles.filterTitle}>Precio</h3>
              <div className={styles.filterOptions}>
                {["Menos de 30€", "30€ - 50€", "50€ - 70€", "Más de 70€"].map((price) => (
                  <div key={price} className={styles.filterOption}>
                    <input type="checkbox" id={`price-${price}`} />
                    <label htmlFor={`price-${price}`}>{price}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid de experiencias */}
      <div className={styles.container}>
        <div className={styles.experiencesHeader}>
          <h2 className={styles.experiencesCount}>{experiences.length} experiencias encontradas</h2>
          <div className={styles.sortContainer}>
            <span className={styles.sortLabel}>Ordenar por:</span>
            <select className={styles.sortSelect}>
              <option>Relevancia</option>
              <option>Precio: menor a mayor</option>
              <option>Precio: mayor a menor</option>
              <option>Más recientes</option>
            </select>
          </div>
        </div>

        <div className={styles.experiencesGrid}>
          {experiences.map((exp) => (
            <div key={exp.id} className={styles.experienceCard}>
              <ExperienceCard
                title={exp.title}
                city={exp.location}
                format={exp.format}
                price={exp.price}
                image={exp.image}
                description="Una experiencia creativa para aprender y disfrutar."
                onClick={() => openModal(exp)}
              />
            </div>
          ))}
        </div>

        <div className={styles.loadMoreContainer}>
          <button className={styles.loadMoreButton}>Cargar más experiencias</button>
        </div>
      </div>

      {/* Modal */}
      {selectedExperience && (
        <ExperienceModal experience={selectedExperience} onClose={closeModal} />
      )}
    </div>
  );
};

export default ExperienciasPage;
