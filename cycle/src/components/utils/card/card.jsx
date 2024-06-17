import React from "react";
import "./card.css";

const Card = ({ img, title, price }) => {
  return (
    <div className="card-container">
      <img src={img} className="card-image" alt={title} />
      <div className="card-text">
        <h1 className="card-title">{title}</h1>
        <div className="card-price">${price}</div>
      </div>
    </div>
  );
};

export default Card;
