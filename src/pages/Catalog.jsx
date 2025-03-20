import { FiFilter, FiSearch } from "react-icons/fi"
import NavBar from "../components/navbar/NavBar"
import Footer from "../components/footer/Footer"
import ExperienceCard from "../components/experience-card/ExperienceCard"
import "./Catalog.module.css"

const experiences = [
  {
    id: 1,
    title: "Taller de cerámica: Iniciación al torno",
    category: "Cerámica",
    location: "Barcelona",
    price: 65,
    image: "/placeholder.svg",
    format: "Presencial",
  },
  {
    id: 2,
    title: "Escritura creativa: Encuentra tu voz",
    category: "Escritura",
    location: "Online",
    price: 45,
    image: "/placeholder.svg",
    format: "Online",
  },
  {
    id: 3,
    title: "Acuarela botánica para principiantes",
    category: "Acuarela",
    location: "Madrid",
    price: 55,
    image: "/placeholder.svg",
    format: "Presencial",
  },
  {
    id: 4,
    title: "Cocina vegana: Platos de temporada",
    category: "Cocina",
    location: "Valencia",
    price: 70,
    image: "/placeholder.svg",
    format: "Presencial",
  },
  {
    id: 5,
    title: "Bordado contemporáneo: Técnicas básicas",
    category: "Bordado",
    location: "Sevilla",
    price: 50,
    image: "/placeholder.svg",
    format: "Presencial",
  },
  {
    id: 6,
    title: "Cosmética natural: Cremas hidratantes",
    category: "Cosmética",
    location: "Online",
    price: 40,
    image: "/placeholder.svg",
    format: "Online",
  },
  {
    id: 7,
    title: "Encuadernación japonesa",
    category: "Encuadernación",
    location: "Bilbao",
    price: 60,
    image: "/placeholder.svg",
    format: "Presencial",
  },
  {
    id: 8,
    title: "Macramé: Crea tu propio colgante",
    category: "Bordado",
    location: "Online",
    price: 35,
    image: "/placeholder.svg",
    format: "Online",
  },
]

const ExperienciasPage = () => {
  return (
    <div className="experiencias-page">
      <NavBar />

      {/* Page Title */}
      <div className="page-title-section">
        <div className="container">
          <h1 className="page-title">Experiencias creativas</h1>
          <p className="page-subtitle">Descubre talleres y cursos impartidos por artesanos y profesionales creativos</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container">
        <div className="search-filters-container">
          <div className="search-container">
            <div className="search-input-wrapper">
              <FiSearch className="search-icon" />
              <input type="text" placeholder="Buscar experiencias..." className="search-input" />
            </div>
            <button className="btn btn-primary search-button">Buscar</button>
          </div>

          <div className="filters-grid">
            <div className="filter-group">
              <h3 className="filter-title">
                <FiFilter className="filter-icon" />
                Categorías
              </h3>
              <div className="filter-options">
                {["Cerámica", "Escritura", "Acuarela", "Cocina", "Bordado", "Cosmética", "Encuadernación"].map(
                  (category) => (
                    <div key={category} className="filter-option">
                      <input type="checkbox" id={`category-${category}`} />
                      <label htmlFor={`category-${category}`}>{category}</label>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="filter-group">
              <h3 className="filter-title">Formato</h3>
              <div className="filter-options">
                {["Presencial", "Online en directo", "Online grabado"].map((format) => (
                  <div key={format} className="filter-option">
                    <input type="checkbox" id={`format-${format}`} />
                    <label htmlFor={`format-${format}`}>{format}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <h3 className="filter-title">Ciudades</h3>
              <div className="filter-options">
                {["Barcelona", "Madrid", "Valencia", "Sevilla", "Bilbao"].map((city) => (
                  <div key={city} className="filter-option">
                    <input type="checkbox" id={`city-${city}`} />
                    <label htmlFor={`city-${city}`}>{city}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <h3 className="filter-title">Precio</h3>
              <div className="filter-options">
                {["Menos de 30€", "30€ - 50€", "50€ - 70€", "Más de 70€"].map((price) => (
                  <div key={price} className="filter-option">
                    <input type="checkbox" id={`price-${price}`} />
                    <label htmlFor={`price-${price}`}>{price}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experiences Grid */}
      <div className="container">
        <div className="experiences-header">
          <h2 className="experiences-count">{experiences.length} experiencias encontradas</h2>
          <div className="sort-container">
            <span className="sort-label">Ordenar por:</span>
            <select className="sort-select">
              <option>Relevancia</option>
              <option>Precio: menor a mayor</option>
              <option>Precio: mayor a menor</option>
              <option>Más recientes</option>
            </select>
          </div>
        </div>

        <div className="experiences-grid">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>

        <div className="load-more-container">
          <button className="btn btn-primary load-more-button">Cargar más experiencias</button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ExperienciasPage
