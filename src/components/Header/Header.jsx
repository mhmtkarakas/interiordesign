import React from "react";
import "./Header.css"; // Stil dosyasını import ediyoruz

const Header = () => {
  return (
    <header className="header">
      {/* Sol Kısım: Logo ve Şirket İsmi */}
      <div className="header-left">
        <img src="logo.png" alt="Logo" className="logo" />
        <span className="company-name">Firma İsmi</span>
      </div>

      {/* Sağ Kısım: Telefon, Buton ve Toggle */}
      <div className="header-right">
        <span className="phone-number">+90 555 555 55 55</span>
        <button className="btn-offer">Hemen Teklif Alın</button>
        <button className="toggle-button">
          <span className="toggle-line"></span>
          <span className="toggle-line"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
