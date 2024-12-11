import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Hakkımızda Bölümü */}
        <div className="footer-column">
          <h3>Hakkımızda</h3>
          <p>Modern mimarlık anlayışıyla <br/> tasarımlar sunan ofisimiz, <br/> estetik ve fonksiyonelliği <br/>bir araya getiriyor.</p>
        </div>

        {/* Bağlantılar Bölümü */}
        <div className="footer-column">
          <h3>Bağlantılar</h3>
          <ul>
            <li><a href="#">Ana Sayfa</a></li>
            <li><a href="#">Projeler</a></li>
            <li><a href="#">Hizmetler</a></li>
            <li><a href="#">İletişim</a></li>
          </ul>
        </div>

        {/* İletişim Bilgileri Bölümü */}
        <div className="footer-column">
          <h3>İletişim</h3>
          <p><i className="bi bi-geo-alt"></i> Mardin, Türkiye</p>
          <p><i className="bi bi-telephone"></i> +90 123 456 78 90</p>
          <p><i className="bi bi-envelope"></i> info@mimarlikofis.com</p>
        </div>
      </div>

      {/* Telif Hakkı Alanı */}
      <div className="footer-bottom">
        <p>&copy; 2024 Mimarlık Ofisi. Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;
