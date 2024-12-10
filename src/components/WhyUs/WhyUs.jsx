import React from "react";
import "./WhyUs.css";
import nedenbiz from "../../utils/nedenbiz.jpg";

const WhyUs = () => {
  return (
    <div className="why-us-container">
      {/* Sol taraf - Görsel alanı */}
      <div className="image-container">
        <img
          src={nedenbiz} // Görsel URL'sini buraya ekleyin
          alt="Neden Biz Görseli"
          className="why-us-image"
        />
      </div>

      {/* Sağ taraf - İçerik alanı */}
      <div className="content-container">
        <h2 className="why-us-title">Neden Biz?</h2>
        <p className="why-us-description">
          Mimarlik Ofisi olarak, yenilikçi tasarımı fonksiyonel mükemmellikle
          birleştirerek zamansız mekânlar yaratıyoruz. Detaylara olan
          bağlılığımız, yaratıcılığa duyduğumuz tutku ve kişiselleştirilmiş
          yaklaşımımız, her projenin müşterilerimizin vizyonunu ve ihtiyaçlarını
          yansıtmasını sağlar..
        </p>
        <button className="more-button">Daha Fazlası</button>
      </div>
    </div>
  );
};

export default WhyUs;
