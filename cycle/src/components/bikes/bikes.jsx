import React, { useState } from "react";
import "./bikes.css";
import roadBikeImage from "../../assets/maestro/image.png";
import mountainBikeImage from "../../assets/Avatar 27.5 D/image.png";
import gravelBikeImage from "../../assets/pirate 3.0 d/image.png";
import electricBikeImage from "../../assets/urban eco/image.png";
import kidsBikeImage from "../../assets/demon x/image.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Bikes = () => {
  const categories = [
    "CHARGE 29D",
    "CRUSADOR 28D",
    "AVATAR 27.5D",
    "TREMOR X",
    "DOMINATOR",
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [animation, setAnimation] = useState("slide-up-in");

  const categoryDetails = {
    "CHARGE 29D": {
      image: roadBikeImage,
      details:
        "The road calls. From high mountain peaks to neighborhood streets and bike paths, Giant road bikes for men are your invitation to ride.",
    },
    "CRUSADOR 28D": {
      image: mountainBikeImage,
      details:
        "Conquer all types of terrain with the power and stability of our mountain bikes. From rugged trails to downhill courses, these bikes are designed for performance.",
    },
    "AVATAR 27.5D": {
      image: gravelBikeImage,
      details:
        "Our cross and gravel bikes are perfect for riders who want to explore new paths and take the road less traveled. Versatility and endurance are key features.",
    },
    "TREMOR X": {
      image: electricBikeImage,
      details:
        "Electric bikes give you the power to ride farther and faster, with less effort. Experience the thrill of cycling with an added boost.",
    },
    DOMINATOR: {
      image: kidsBikeImage,
      details:
        "Get your kids started on their own cycling adventure with our range of kids bikes. Safe, fun, and designed for growing riders.",
    },
  };

  const handleCategoryClick = (category, direction) => {
    const outAnimation =
      direction === "left" ? "slide-left-to-right-out" : "slide-up-out";
    const inAnimation =
      direction === "left" ? "slide-left-to-right-in" : "slide-up-in";

    setAnimation(outAnimation);
    setTimeout(() => {
      setSelectedCategory(category);
      setAnimation(inAnimation);
    }, 600);
  };

  const handleArrowClick = (direction) => {
    const currentIndex = categories.indexOf(selectedCategory);
    const newIndex =
      direction === "left"
        ? (currentIndex - 1 + categories.length) % categories.length
        : (currentIndex + 1) % categories.length;
    handleCategoryClick(categories[newIndex], direction);
  };

  const selectedCategoryDetails = categoryDetails[selectedCategory];

  return (
    <div className="bike-page-container">
      <div className="arrow-container">
        <FaChevronLeft
          className="arrow-icon"
          onClick={() => handleArrowClick("left")}
        />
        <div className="bike-display">
          <img
            src={selectedCategoryDetails.image}
            alt={selectedCategory}
            className={`bike-image ${animation}`}
          />
          <h1 className="bike-display-details-header" data-aos="fade-up">
            {selectedCategory}
          </h1>
          <div className="bike-display-details">
            <p>{selectedCategoryDetails.details}</p>
            <a href="/details">
              <button className="discover-btn">Discover</button>
            </a>
          </div>
        </div>
        <FaChevronRight
          className="arrow-icon"
          onClick={() => handleArrowClick("right")}
        />
      </div>
    </div>
  );
};

export default Bikes;
