import React, { useEffect } from "react";
import "./about.css";
import bg from "../../assets/aboutbg.png";
import image1 from "../../assets/about-images/image1.png";
import image2 from "../../assets/about-images/image2.png";
import image3 from "../../assets/about-images/image3.png";
import image4 from "../../assets/about-images/image4.png";
import image5 from "../../assets/about-images/image5.png";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="about-page-container">
      <div className="about-page-contents">
        <img
          src={bg}
          alt="Background"
          className="about-page-image"
          data-aos="fade-right"
        />
        <h1 className="about-page-header" data-aos="fade-up">
          About Us
        </h1>
        <div className="about-page-subheader" data-aos="fade-up">
          Welcome to RideAxis, your ultimate destination for all things cycling!
          At CycleHub, we believe that cycling is more than just a mode of
          transportation—it's a lifestyle, a passion, and a journey towards
          better health and well-being. Whether you're a seasoned cyclist, a
          weekend warrior, or just starting your two-wheeled adventure, we're
          here to support you every pedal of the way.
        </div>
        <button className="read-more" data-aos="fade-up">
          READ MORE
        </button>
      </div>
      <div className="our-value-container">
        <h1 className="our-value-header" data-aos="fade-up">
          OUR VALUE
        </h1>
        <p className="our-value-description" data-aos="fade-up">
          At RideAxis, our values are the cornerstone of everything we do,
          guiding our commitment to the cycling community and our customers. We
          are passionate about cycling, and this passion drives our dedication
          to providing exceptional service, high-quality products, and
          innovative solutions. We prioritize a customer-centric approach,
          ensuring satisfaction and support for cyclists of all levels.
          Integrity, transparency, and ethical practices are fundamental to our
          operations. We foster a welcoming, inclusive community, celebrating
          diversity and promoting environmental sustainability through
          eco-friendly practices. Our goal is to educate and empower cyclists,
          enhancing their experience and contributing to a healthier, more
          active lifestyle.
        </p>
        <button className="our-value-read-more" data-aos="fade-up">
          READ MORE
        </button>
      </div>
      <div className="follow-us-container">
        <div className="follow-us-header" data-aos="fade-up">
          FOLLOW US
        </div>
        <div className="follow-us-subheader" data-aos="fade-up">
          INSTA UPDATE
        </div>
        <div className="follow-us-image-container" data-aos="fade-up">
          <img src={image1} alt="" className="follow-us-image" />
          <img src={image2} alt="" className="follow-us-image" />
          <img src={image3} alt="" className="follow-us-image" />
          <img src={image4} alt="" className="follow-us-image" />
          <img src={image5} alt="" className="follow-us-image" />
        </div>
      </div>
    </div>
  );
};

export default About;
