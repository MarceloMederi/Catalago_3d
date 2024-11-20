// src/components/Carousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'; // Importa os estilos do Swiper
import 'swiper/swiper.min.css'; // Importa os estilos do Swiper (para versões mais recentes)
import { Navigation, Pagination } from 'swiper'; // Importa os módulos que você deseja usar

const Carousel = ({ items }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination]} // Adiciona módulos de navegação e paginação
            spaceBetween={50}
            slidesPerView="auto"
            navigation
            pagination={{ clickable: true }}
        >
            {items.map((item) => (
                <SwiperSlide key={item.id}>
                    <img
                        src={item.imageLink}
                        alt={item.title}
                        onError={(e) => {
                            console.error("Erro ao carregar a imagem:", e);
                            e.target.src = "/teste.jpg"; // Substitua por um URL de imagem válida
                        }}
                        style={{ width: "100%", borderRadius: "8px" }}
                    />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;
