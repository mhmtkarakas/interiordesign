import React from "react";
import "./AboutUs.css";
import architectImage from "../../utils/mimarimg.jpg"; // Mimarin resmi
import designImage from "../../utils/mimarimg1.jpg"; // Sağdaki resim

const AboutUs = () => {
    return (
      <div className="about-us-container" id="about-us">
        {/* Başlık */}
        <h2 className="about-title">Hakkımızda</h2>
  
        {/* İçerik Alanı */}
        <div className="about-content">
          {/* Sol Bölüm */}
          <div className="about-left">
            <p className="about-text-left">
              Belara, iç tasarım ve mimarlık alanında faaliyet gösteren çok ödüllü bir mimarlık ve tasarım stüdyosudur.
            </p>
            <img src={architectImage} alt="Mimar" className="about-image" />
          </div>
  
          {/* Sağ Bölüm */}
          <div className="about-right">
            <p className="about-text-right">
              Stüdyo, bağlamına göre benzersiz bir kimliğe sahip her proje için özel çözümler sunar. Projelerin kapsamını ve
              hedeflerini anlamak, müşterileri, kullanıcıları ve yüklenicileri dinlemek, iyi düşünülmüş tasarım çözümleri
              oluşturmamıza yardımcı olur.
            </p>
            <button className="about-btn">Daha Fazla</button>
            <img src={designImage} alt="Tasarım" className="about-image" />
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutUs;
