import React, { useRef, useState, useEffect } from "react";
import "./home.css";
import roadBikeImage from "../../assets/maestro/image.png";
import mountainBikeImage from "../../assets/Avatar 27.5 D/image.png";
import gravelBikeImage from "../../assets/pirate 3.0 d/image.png";
import electricBikeImage from "../../assets/urban eco/image.png";
import kidsBikeImage from "../../assets/demon x/image.png";
import helmet from "../../assets/helmet.png";
import gloves from "../../assets/gloves.png";
import jersey from "../../assets/jersey.png";
import Card from "../utils/card/card";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaPlay, FaPause } from "react-icons/fa";
import { CiVolumeMute, CiVolumeHigh } from "react-icons/ci";
import preOrderImage from "../../assets/preorder.png";
import AOS from "aos";
import "aos/dist/aos.css";
// import exampleVideo from "../../assets/FirefoxVideo -.mp4";
import CategoryCard from "../explore/categorycard";
import landingImage from "../../assets/cycleBg2.png";
import { PiBicycleThin } from "react-icons/pi";
import { BiHomeAlt2 } from "react-icons/bi";
import { MdMiscellaneousServices } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import Footer from "../footer/footer";

const SCROLL_WIDTH = 800;

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef();

  // const videoRef = useRef(null);
  // const [isPlaying, setIsPlaying] = useState(true);
  // const [isMuted, setIsMuted] = useState(false);

  // useEffect(() => {
  //   const video = videoRef.current;
  //   video.play();
  // }, []);

  // const handlePlayPause = () => {
  //   const video = videoRef.current;
  //   if (video.paused) {
  //     video.play();
  //     setIsPlaying(true);
  //   } else {
  //     video.pause();
  //     setIsPlaying(false);
  //   }
  // };

  // const handleMuteUnmute = () => {
  //   const video = videoRef.current;
  //   video.muted = !video.muted;
  //   setIsMuted(video.muted);
  // };

  const handleScroll = (offset) => {
    const container = containerRef.current;
    container.scrollLeft += offset;
  };

  return (
    <div className="overlay-container">
      {/* <div className="explore-container">
        <video ref={videoRef} className="video-player" loop muted>
          <source src={exampleVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-controls">
          <button onClick={handlePlayPause}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button onClick={handleMuteUnmute}>
            {isMuted ? <CiVolumeMute /> : <CiVolumeHigh />}
          </button>
        </div>
      </div> */}
      <div className="home-page-landing-container">
        <h1 className="home-page-landing-header" data-aos="fade-up">
          DOMANE +LT
        </h1>
        <p className="home-page-landing-description" data-aos="fade-up">
          ENVIOLO CVT HUB | HYDRAULIC LOCKOUT FORK | DISC BRAKES
        </p>
        <img
          src={landingImage}
          alt="Trek Madone SL 7"
          className="home-page-landing-image"
          // data-aos="zoom-in-up"
          data-aos="slide-right"
        />
        <div className="home-page-landing-warranty-container">
          <div className="warranty-left" data-aos="fade-right">
            <p className="warranty">
              <span style={{ fontSize: "30px" }}>
                <PiBicycleThin />
              </span>
              Lifetime Frame Warranty
            </p>
            <p className="warranty">
              <span style={{ fontSize: "30px" }}>
                <BiHomeAlt2 />
              </span>
              Free Home Assembly
            </p>
          </div>
          <div className="warranty-right" data-aos="fade-left">
            <p className="warranty">
              Free First Bike Service{" "}
              <span style={{ fontSize: "30px" }}>
                <MdMiscellaneousServices />
              </span>
            </p>
            <p className="warranty">
              Free Home Delivery
              <span style={{ fontSize: "30px" }}>
                <CiDeliveryTruck />
              </span>
            </p>
          </div>
        </div>
      </div>

      <h1
        style={{
          color: "gray",
          fontFamily: "Montserrat",
          fontWeight: "500",
          fontStyle: "italic",
          marginTop: "0",
        }}
        data-aos="fade-up"
      >
        Discover premium quality
        <span style={{ color: "white" }}> cycles and accessories</span>,
        designed for every adventure at RideAxis.
      </h1>
      <h1
        style={{
          color: "white",
          fontSize: "50px",
          fontWeight: "600",
          marginTop: "150px",
        }}
        data-aos="fade-up"
      >
        CATEGORIES
      </h1>
      <div className="home-page-product-types-container" data-aos="fade-up">
        <CategoryCard img={mountainBikeImage} title="Bikes" />
        <CategoryCard img={helmet} title="Helmets" />
        <CategoryCard img={gloves} title="Gloves" />
        <CategoryCard img={jersey} title="Jersey" />
      </div>
      <div className="find-bikes-container">
        <h1 className="find-bike-header" data-aos="fade-right">
          Find Your Bike
        </h1>
        <div className="find-bike-filters" data-aos="fade-up">
          <div className="find-bike-filter">
            <p className="filter-name">Type</p>
            <select>
              <option>Mountain Bike</option>
              <option>Road Bike</option>
              <option>Hybrid Bike</option>
            </select>
          </div>
          <div className="find-bike-filter">
            <p className="filter-name">Wheel Size</p>
            <select>
              <option>26"</option>
              <option>27.5"</option>
              <option>29"</option>
            </select>
          </div>
          <div className="find-bike-filter">
            <p className="filter-name">Brand</p>
            <select>
              <option>BMC</option>
              <option>Giant</option>
              <option>Trek</option>
            </select>
          </div>
        </div>
        <div className="find-bike-filter">
          <button className="btn" data-aos="fade-up">
            {" "}
            Search
          </button>
        </div>
      </div>

      <div className="home-page-experience-fun-container">
        <h1 className="home-page-experience-fun-header" data-aos="fade-left">
          Experience The Fun
        </h1>
        <p
          className="home-page-experience-fun-description"
          data-aos="fade-right"
        >
          Welcome to the ultimate destination for all cycling enthusiasts! At
          <span style={{ color: "white" }}> RideAxis</span>, we believe that
          every ride should be an adventure filled with joy, excitement, and
          unforgettable moments. Whether you're a seasoned cyclist or just
          starting your biking journey, we have the perfect cycle for you.
        </p>
        <p className="home-page-experience-fun-contents" data-aos="fade-up">
          FAST-DELIVERY | FREE-SHIPPING | FREE-RETURNS
        </p>
      </div>
      <div className="home-page-explore-your-ride-container">
        <h1 className="home-page-explore-your-ride-header">
          Explore Your Ride
        </h1>
        <div className="scrolling-cards-container">
          <h1 className="scrolling-cards-header" data-aos="fade-up">
            BEST SELLER PRODUCT
          </h1>
          <p className="scrolling-cards-description" data-aos="fade-up">
            Browse the best of our favourite sale styles and brands
          </p>
          <div
            className="scrolling-cards"
            data-aos="fade-up"
            ref={containerRef}
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "100vw",
              padding: "20px",
              overflow: "auto",
              scrollBehavior: "smooth",
              display: "flex",
            }}
          >
            <Card img={roadBikeImage} price="1200.0" title="Road Bike" />
            <Card
              img={mountainBikeImage}
              price="1500.0"
              title="Mountain Bike"
            />
            <Card img={gravelBikeImage} price="1400.0" title="Gravel Bike" />
            <Card
              img={electricBikeImage}
              price="2000.0"
              title="Electric Bike"
            />
            <Card img={kidsBikeImage} price="500.0" title="Kids Bike" />
          </div>
          <div className="scroll-buttons" data-aos="fade-up">
            <button onClick={() => handleScroll(-SCROLL_WIDTH)}>
              <FaChevronLeft />
            </button>
            <button onClick={() => handleScroll(SCROLL_WIDTH)}>
              <FaChevronRight />
            </button>
          </div>
          <button className="explore-more-button" data-aos="fade-up">
            EXPLORE MORE
          </button>
        </div>
      </div>
      <div className="pre-order-container">
        <img
          src={preOrderImage}
          className="pre-order-image"
          data-aos="fade-up"
        />
        <div className="pre-order-content">
          <h1 className="pre-order-header" data-aos="fade-left">
            PRE-ORDER NOW
          </h1>
          <p className="pre-order-description" data-aos="fade-right">
            Be the first to own the latest and greatest bikes! Our pre-order
            program allows you to secure your dream bike before it officially
            hits the market. Experience the thrill of riding cutting-edge
            technology and innovative designs ahead of everyone else.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
