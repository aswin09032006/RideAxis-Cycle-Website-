import React from "react";
import bgImage from "../../assets/image.png";
import "./coalition.css";
import helmet from "../../assets/helmet.png";
import gloves from "../../assets/gloves.png";
import jersey from "../../assets/jersey.png";
import electricBikeImage from "../../assets/urban eco/image.png";

const Coalition = () => {
  return (
    <div className="coalition-page-container">
      <div className="landing-page-container">
        <img src={bgImage} alt="Background" className="landing-page-bg" />
        <div className="landing-page-header">
          <div className="landing-page-header-top">
            <h1>
              G<span>8</span>
            </h1>
            <p>--</p>
            <p>CONCEPT</p>
          </div>
          <div className="landing-page-header-bottom">
            <h1>DOMINATOR</h1>
          </div>
        </div>
      </div>
      <div className="coalition-page-category-images-container">
        <h1 className="coalition-page-category-image-header">CATEGORIES</h1>
        <div className="coalition-page-category-image-container">
          <img
            src={electricBikeImage}
            alt=""
            className="coalition-category-image"
          />
          <img src={helmet} alt="" className="coalition-category-image" />
          <img src={gloves} alt="" className="coalition-category-image" />
          <img src={jersey} alt="" className="coalition-category-image" />
        </div>
      </div>
    </div>
  );
};

export default Coalition;
