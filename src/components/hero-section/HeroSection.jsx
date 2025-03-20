import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 
import 'swiper/css/autoplay';
import ceramicaImg from '../../assets/images/ceramica.jpg';
import cocinaImg from '../../assets/images/cocina.jpg';
import escrituraImg from '../../assets/images/escritura.jpg';
import fotografiaImg from '../../assets/images/fotografia.jpg';
import maquillajeImg from '../../assets/images/maquillaje.jpg';
import pinturaImg from '../../assets/images/pintura.jpg';

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                className={styles.swiper}
            >
                <SwiperSlide>
                    <img src={ceramicaImg} alt="imagen de torno de cerámica" className={styles.slideImage} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cocinaImg} alt="imagen de una cocina" className={styles.slideImage} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={escrituraImg} alt="imagen de una libreta" className={styles.slideImage} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={fotografiaImg} alt="imagen de una fotógrafa" className={styles.slideImage} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={maquillajeImg} alt="imagen de una mesa con maquillaje" className={styles.slideImage} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pinturaImg} alt="imagen de una paleta de acuarelas" className={styles.slideImage} />
                </SwiperSlide>
            </Swiper>

            <div className={styles.container}>
                <h1 className={styles.title}>ArtPrint</h1>
                <h2 className={styles.subtitle}>Un espacio para crear</h2>
                <p className={styles.description}>
                    Desconecta, explora y aprende disfrutando
                </p>
                <div className={styles.buttons}>
                    <Link to="/catalog">
                        <button className={styles.exploreButton}>
                            Explorar experiencias
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}