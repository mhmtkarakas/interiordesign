import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css";

import image1 from "../../utils/interior1.jpg";
import image2 from "../../utils/interior2.png";
import image3 from "../../utils/interior3.jpeg";

const Slider = () => {
  
  const slides = [
    { image: image1, description: "Project 1 Description" },
    { image: image2, description: "Project 2 Description" },
    { image: image3, description: "Project 3 Description" },
  ];

  return (
    <div className="projects-container">
      {/* Başlık */}
      <div className="projects-title-container">
        <svg
          className="projects-title"
          viewBox="0 0 1000 300"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="projectsTitle"
        >
          <title id="projectsTitle">Projeler</title>
          <text
            x="0"
            y="50%"
            dominantBaseline="middle"
            textAnchor="start"
            fontSize="215"
            fontWeight="600"
            fill="none"
            stroke="#d6a04c"
            strokeWidth="1"
          >
            Projeler
          </text>
        </svg>
      </div>

      {/* Slider */}
      <div className="swiper-container">
        <Swiper
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
          className="swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              {/* Slider Image */}

              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="slider-image"
              />
              {/* Slider Description */}
              <div className="slider-description">
                <span className="description-text">{slide.description}</span>
                {/* Arrow Icon */}
                <div className="circle-icon">
                  <i className="bi bi-arrow-right description-arrow"></i>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Navigation Buttons */}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </div>
  );
};

export default Slider;
