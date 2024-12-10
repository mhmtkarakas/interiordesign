import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import "./CustomerReviews.css";

import customer1 from "../../utils/1.jpg";
import customer2 from "../../utils/1.jpg";
import customer3 from "../../utils/1.jpg";


const CustomerReviews = () => {
    const reviews = [
      {
        id: 1,
        icon: "bi bi-check2-all",
        comment: "The design exceeded my expectations! Highly professional team.",
        image: customer1,
        name: "John Doe",
      },
      {
        id: 2,
        icon: "bi bi-check2-all",
        comment: "Fantastic work and attention to detail. Highly recommended!",
        image: customer2,
        name: "Jane Smith",
      },
      {
        id: 3,
        icon: "bi bi-check2-all",
        comment: "Very satisfied with the service. They truly understand client needs.",
        image: customer3,
        name: "Ali Veli",
      },
    ];
  
    return (
      <div className="customer-reviews-container">
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          navigation
          loop={true}
          className="customer-reviews-slider"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="review-slide">
              <div className="review-icon">
                <i className={review.icon}></i>
              </div>
              <p className="review-comment">{review.comment}</p>
              <div className="review-image-container">
                <img src={review.image} alt={review.name} className="review-image" />
              </div>
              <div className="review-name">{review.name}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };
  
  export default CustomerReviews;
  
