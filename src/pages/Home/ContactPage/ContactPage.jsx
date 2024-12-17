import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-banner">
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <p>Anasayfa / İletişim</p>
          <h1>İletişim</h1>
        </div>
      </div>

      {/* Harita */}
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.6826814869457!2d-122.08424968468199!3d37.4220659798254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbb19a2b0f5df%3A0xe04c19c6c1e5d5e3!2sGoogleplex!5e0!3m2!1sen!2sus!4v1618461858793!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* İletişim Formu ve Bilgiler */}
      <div className="contact-container">
        <div className="row">
          {/* İletişim Formu */}
          <div className="col-lg-8">
            <form className="contact-form">
              <textarea
                className="form-control w-100"
                name="message"
                id="message"
                cols="30"
                rows="9"
                placeholder="Enter Message"
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Enter Message")}
              ></textarea>
              <div className="row mt-3">
                <div className="col-md-6">
                  <input
                    className="form-control"
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    onFocus={(e) => (e.target.placeholder = "")}
                    onBlur={(e) => (e.target.placeholder = "Enter your name")}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    className="form-control"
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    onFocus={(e) => (e.target.placeholder = "")}
                    onBlur={(e) => (e.target.placeholder = "Enter your email")}
                  />
                </div>
              </div>
              <div className="mt-3">
                <input
                  className="form-control"
                  name="subject"
                  id="subject"
                  type="text"
                  placeholder="Enter Subject"
                  onFocus={(e) => (e.target.placeholder = "")}
                  onBlur={(e) => (e.target.placeholder = "Enter Subject")}
                />
              </div>
              {/* Gönder Butonu */}
              <button type="submit" className="btn-submit">
                Gönder
              </button>
            </form>
          </div>

          {/* İletişim Bilgileri */}
          <div className="col-lg-3 offset-lg-1">
            <div className="contact-info">
              <p>
                <i className="bi bi-geo-alt"></i> Mardin, Türkiye
              </p>
              <p>
                <i className="bi bi-telephone"></i> +90 123 456 78 90
              </p>
              <p>
                <i className="bi bi-envelope"></i> info@mimarlikofis.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
