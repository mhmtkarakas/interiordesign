import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./Header.css"; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    <header className="header">
      {/* Sol Kısım: Logo ve Şirket İsmi */}
      <div className="header-content">
      <div className="header-left">
        <img src="logo.png" alt="Logo" className="logo" />
        <span className="company-name">Firma İsmi</span>
      </div>

      {/* Sağ Kısım: Telefon, Buton ve Toggle */}
      <div className="header-right">
        <span className="phone-number">+90 555 555 55 55</span>
        <button className="btn-offer">Hemen Teklif Alın</button>
        <button className="toggle-button" onClick={toggleMenu}>
          <span className="toggle-line"></span>
          <span className="toggle-line"></span>
        </button>
      </div>
      </div>
    </header>
     {/* Menü Alanı */}
     <div className={`menu ${menuOpen ? "menu-open" : ""}`}>
        <button className="menu-close" onClick={toggleMenu}>
          X
        </button>
        <nav className="menu-nav">
          <a href="#home">Anasayfa</a>
          <a href="#about">Hakkımızda</a>
          <a href="#services">Hizmetlerimiz</a>
          <a href="#projects">Projeler</a>
          <a href="#blog">Blog +</a>
          <Link to="/iletisim">İletişim</Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
