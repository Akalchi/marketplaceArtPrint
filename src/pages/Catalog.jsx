import React, { useState } from "react";
import { FiFilter, FiSearch } from "react-icons/fi";
import ExperienceCard from "../components/experience-card/ExperienceCard";
import ExperienceModal from "../components/experience-modal/ExperienceModal";
import styles from "./Catalog.module.css";
import experiences from "../data/Experiences";


const ExperienciasPage = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [filters, setFilters] = useState({
    categories: [],
    formats: [],
    cities: [],
    priceRange: null,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [sortCriteria, setSortCriteria] = useState("relevance");

  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => {
      if (type === "priceRange") {
        return { ...prevFilters, priceRange: value };
      }
      const filterKey = `${type}s`; 
      const updatedFilters = prevFilters[filterKey].includes(value)
        ? prevFilters[filterKey].filter((item) => item !== value) 
        : [...prevFilters[filterKey], value]; 
      return { ...prevFilters, [filterKey]: updatedFilters };
    });
  };

  const filteredExperiences = experiences
    .filter((exp) =>
      exp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exp.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((exp) => {
      const matchesCategory =
        filters.categories.length === 0 || filters.categories.includes(exp.category);
      const matchesFormat =
        filters.formats.length === 0 || filters.formats.includes(exp.format);
      const matchesCity =
        filters.cities.length === 0 || filters.cities.includes(exp.location);

      let matchesPrice = true;
      if (filters.priceRange) {
        const [min, max] = filters.priceRange.split("-").map(Number);
        matchesPrice = exp.price >= min && exp.price <= max;
      }

      return matchesCategory && matchesFormat && matchesCity &&  matchesPrice;
    });

  const sortedExperiences = [...filteredExperiences].sort((a, b) => {
    if (sortCriteria === "price-asc") return a.price - b.price;
    if (sortCriteria === "price-desc") return b.price - a.price;
    if (sortCriteria === "recent")
      return new Date(b.date) - new Date(a.date);
    return 0; 
  });

  return (
    <div className={styles.experienciasPage}>
      <div className={styles.pageTitleSection}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Experiencias creativas</h1>
          <p className={styles.pageSubtitle}>
            Descubre talleres y cursos impartidos por artesanos y profesionales creativos
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.searchFiltersContainer}>
          <div className={styles.searchContainer}>
            <div className={styles.searchInputWrapper}>
              <FiSearch className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Buscar experiencias..."
                className={styles.searchInput}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className={styles.searchButton}>Buscar</button>
          </div>

          <div className={styles.filtersGrid}>
            <div className={styles.filterGroup}>
              <h3 className={styles.filterTitle}>
                <FiFilter className={styles.filterIcon} />
                Categorías
              </h3>
              <div className={styles.filterOptions}>
                {["Cerámica", "Escritura", "Acuarela", "Cocina", "Bordado", "Cosmética", "Encuadernación"].map(
                  (category) => (
                    <div key={category} className={styles.filterOption}>
                      <input
                        type="checkbox"
                        id={`category-${category}`}
                        checked={filters.categories.includes(category)}
                        onChange={() => handleFilterChange("category", category)}
                      />
                      <label htmlFor={`category-${category}`}>{category}</label>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className={styles.filterGroup}>
              <h3 className={styles.filterTitle}>Formato</h3>
              <div className={styles.filterOptions}>
                {["Presencial", "Online"].map((format) => (
                  <div key={format} className={styles.filterOption}>
                    <input
                      type="checkbox"
                      id={`format-${format}`}
                      checked={filters.formats.includes(format)}
                      onChange={() => handleFilterChange("format", format)}
                    />
                    <label htmlFor={`format-${format}`}>{format}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.filterGroup}>
              <h3 className={styles.filterTitle}>Ciudades</h3>
              <div className={styles.filterOptions}>
                {["Barcelona", "Madrid", "Valencia", "Sevilla", "Bilbao"].map((city) => (
                  <div key={city} className={styles.filterOption}>
                    <input
                      type="checkbox"
                      id={`city-${city}`}
                      checked={filters.cities.includes(city)}
                      onChange={() => handleFilterChange("city", city)}
                    />
                    <label htmlFor={`city-${city}`}>{city}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.filterGroup}>
              <h3 className={styles.filterTitle}>Precio</h3>
              <div className={styles.filterOptions}>
                {[
                  { label: "Menos de 30€", range: "0-30" },
                  { label: "30€ - 50€", range: "30-50" },
                  { label: "50€ - 70€", range: "50-70" },
                  { label: "Más de 70€", range: "70-9999" },
                ].map(({ label, range }) => (
                  <div key={range} className={styles.filterOption}>
                    <input
                      type="checkbox"
                      id={`price-${range}`}
                      checked={filters.priceRange === range}
                      onChange={() => handleFilterChange("priceRange", range)}
                    />
                    <label htmlFor={`price-${range}`}>{label}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.experiencesHeader}>
          <h2 className={styles.experiencesCount}>{sortedExperiences.length} experiencias encontradas</h2>
          <div className={styles.sortContainer}>
            <span className={styles.sortLabel}>Ordenar por:</span>
            <select
              className={styles.sortSelect}
              value={sortCriteria}
              onChange={(e) => setSortCriteria(e.target.value)}
            >
              <option value="relevance">Relevancia</option>
              <option value="price-asc">Precio: menor a mayor</option>
              <option value="price-desc">Precio: mayor a menor</option>
              <option value="recent">Más recientes</option>
            </select>
          </div>
        </div>

        <div className={styles.experiencesGrid}>
          {sortedExperiences.map((exp) => (
            <div key={exp.id} className={styles.experienceCard}>
              <ExperienceCard
                title={exp.title}
                city={exp.location}
                format={exp.format}
                price={exp.price}
                image={exp.image}
                description={exp.description}
                onClick={() => setSelectedExperience(exp)}
              />
            </div>
          ))}
        </div>

        <div className={styles.loadMoreContainer}>
          <button className={styles.loadMoreButton}>Cargar más experiencias</button>
        </div>
      </div>

      {selectedExperience && (
        <ExperienceModal experience={selectedExperience} onClose={() => setSelectedExperience(null)} />
      )}
    </div>
  );
};

export default ExperienciasPage;
