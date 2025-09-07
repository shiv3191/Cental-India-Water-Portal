import React from 'react';
import Slider from 'react-slick';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import './sliding.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slidingData = [
  {
    id: 1,
    title: "Water Conservation Initiatives",
    description: "Discover our latest projects to preserve Central India's water resources for future generations.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    title: "Community Water Programs",
    description: "Join our efforts to bring clean water solutions to communities across Central India.",
    image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
  }
];

const Sliding = () => {
  const SamplePrevArrow = ({ onClick }) => {
    return (
      <div 
        onClick={onClick}
        className="sliding-arrow sliding-arrow-prev"
      >
        <AiOutlineArrowLeft />
      </div>
    );
  };

  const SampleNextArrow = ({ onClick }) => {
    return (
      <div 
        onClick={onClick}
        className="sliding-arrow sliding-arrow-next"
      >
        <AiOutlineArrowRight />
      </div>
    );
  };

  const sliderSettings = {
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
  };

  return (
    <div className="sliding-container">
      <Slider {...sliderSettings}>
        {slidingData.map((slide) => (
          <div key={slide.id} className="sliding-slide">
            <div className="sliding-content">
              <div className="sliding-text-content">
                <h3 className="sliding-subtitle">Central India Water</h3>
                <h1 className="sliding-title">{slide.title}</h1>
                <p className="sliding-description">{slide.description}</p>
                <button className="sliding-button">Learn More</button>
              </div>
              <div className="sliding-image-wrapper">
                <div className="sliding-image-container">
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="sliding-image" 
                    loading="lazy"
                  />
                  <div className="sliding-image-glow"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sliding;