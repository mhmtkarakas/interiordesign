import React from "react";
import "./WhatWeDo.css";
import image1 from "../../utils/whatwedo1.jpg"; // Replace with your image paths
import image2 from "../../utils/whatwedo2.jpg";
import image3 from "../../utils/whatwedo3.jpg";

const WhatWeDo = () => {
    return (
      <div className="what-we-do-container container">
        <h2 className="section-title">What We Do</h2>
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-4">
            <div className="what-we-do-card">
              <img src={image1} alt="Design 1" className="what-we-do-image" />
              <div className="overlay">
                <div className="circle-icon">
                  <i className="bi bi-arrow-right"></i>
                </div>
              </div>
              <h3 className="image-title">Modern Living</h3>
              <p className="image-description">Architecture Design</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="col-md-4">
            <div className="what-we-do-card">
              <img src={image2} alt="Design 2" className="what-we-do-image" />
              <div className="overlay">
                <div className="circle-icon">
                  <i className="bi bi-arrow-right"></i>
                </div>
              </div>
              <h3 className="image-title">Innovative Spaces</h3>
              <p className="image-description">Architecture Design</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="col-md-4">
            <div className="what-we-do-card">
              <img src={image3} alt="Design 3" className="what-we-do-image" />
              <div className="overlay">
                <div className="circle-icon">
                  <i className="bi bi-arrow-right"></i>
                </div>
              </div>
              <h3 className="image-title">Creative Solutions</h3>
              <p className="image-description">Architecture Design</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default WhatWeDo;