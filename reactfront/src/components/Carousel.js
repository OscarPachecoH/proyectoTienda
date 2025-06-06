import React from "react";
import '../styles/Carousel.css';

function Carousel() {
    return (
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="5000">
                    <img src="/img/banners/Banner1.jpg" className="d-block w-100" alt="Promocion mujer" style={{ maxHeight: '500px', objectFit: 'cover' }} />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Colección Mujer 2025</h5>
                        <p>Descrubre las ultimas tendencias en moda femenina</p>
                        <a href="/mujer" className="btn btn-primary">Ver Colección</a>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                    <img src="/img/banners/Banner2.jpg" className="d-block w-100" alt="Promocion hombre" style={{ maxHeight: '500px', objectFit: 'cover' }} />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Colección Hombre 2025</h5>
                        <p>Descrubre las ultimas tendencias en moda masculina</p>
                        <a href="/hombre" className="btn btn-primary">Ver Colección</a>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                    <img src="/img/banners/Banner3.jpg" className="d-block w-100" alt="Promocion niños" style={{ maxHeight: '500px', objectFit: 'cover' }} />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Moda para los mas pequeños</h5>
                        <p>Ropa divertida y duradera para los mas pequeños</p>
                        <a href="/ninos" className="btn btn-primary">Ver Colección</a>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" ></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
        </div>
    );
};

export default Carousel;