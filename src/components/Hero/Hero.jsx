
import heroimg from '../../utils/heroimg.jpg'

import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Arka Plan Resmi */}
      <div className="hero-background">
        <img
          src={heroimg} /* Burada resim yolunu belirtin */
          alt="Ev Dekorasyonu"
          className="hero-image"
        />
      </div>

      {/* Metin Alanı */}
      <div className="hero-text">
       <p>Mardin Türkiye</p>
        <h1>Ev Dekorasyonu <br/> Bu Kadar <br/> Kolay Olmamıştı</h1>
      </div>
    </div>
  );
};

export default Hero;
