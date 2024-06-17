import React, { useEffect } from "react";
import "./details.css";
import handlebar from "../../assets/handlebar1.png";
import cycleImage from "../../assets/cycleBg2.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Details = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="details-page">
      <div className="details-page-container">
        <h1 data-aos="fade-up" className="details-page-subheader">
          E-Bike
        </h1>
        <h1 data-aos="fade-up" className="details-page-header">
          DOMANE +LT
        </h1>
        <img
          data-aos="fade-up"
          src={handlebar}
          alt=""
          className="details-page-image"
        />
        <p data-aos="fade-up" className="details-page-description">
          15kg | 250W | Alu
        </p>
      </div>
      <div
        data-aos="slide-right"
        className="details-page-cycle-image-container"
      >
        <img src={cycleImage} className="details-page-cycle-image" />
        <p data-aos="slide-left" className="details-page-cycle-description">
          Experience the perfect blend of speed, comfort, and versatility with
          the <span style={{ color: "white" }}>Domane +LT</span>. Engineered for
          endurance, this high-performance road bike is designed to tackle the
          toughest terrains while ensuring a smooth and enjoyable ride. Whether
          you're a competitive racer or a weekend warrior, the Domane SL 7 is
          built to meet and exceed your cycling aspirations.
        </p>
      </div>
    </div>
  );
};

export default Details;
