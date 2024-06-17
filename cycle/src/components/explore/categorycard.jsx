import React from "react";
import "./categorycard.css";

const CategoryCard = ({ img, title, price }) => {
  return (
    <div className="category-card-container">
      <img src={img} className="category-card-image" alt={title} />
      <div className="category-card-text">
        <h1 className="category-card-title">{title}</h1>
      </div>
    </div>
  );
};

export default CategoryCard;
