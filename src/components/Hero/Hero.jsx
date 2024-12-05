
import heroimg from '../../utils/heroimg.jpg'

import React from "react";
import "./Hero.css";

const Hero = () => {
  const scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById("about-us");
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="hero-container">
      {/* Arka Plan Resmi */}
      <div className="hero-background">
        <img
          src={heroimg} 
          alt="Ev Dekorasyonu"
          className="hero-image"
        />
      </div>

      {/* Metin Alanı */}
      <div className="hero-text">
       <p>Mardin Türkiye</p>
        <h1>Ev Dekorasyonu <br/> Bu Kadar <br/> Kolay Olmamıştı</h1>
      </div>
      <div className="hero-bottom">
        <div className="hero-bottom-left">
        <div className="mouse-icon" onClick={scrollToAboutUs}>
            <span className="mouse-wheel"></span>
          </div>
        </div>
        <div className="hero-bottom-right">
               {/* Sol Metin */}
        <div className="text-left animated-text">
          Homeownership never looked so affordable
        </div>

        {/* Sağ Metin */}
        <div className="text-right animated-text">
          World-class architecture design studio
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
