import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

const MainCarousel = () => {
  const slides = [
    "https://live.staticflickr.com/65535/51587128311_f83dcf8ddc_z.jpg",
    "https://live.staticflickr.com/65535/51587786049_143c045943_z.jpg",
    "https://live.staticflickr.com/65535/51586290712_96164f80d1_z.jpg",
  ];
  return (
    <>
      <div className="">
        <Carousel fade interval={10000} controls={false} indicators={false}>
          {slides.map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <img className="d-block w-100 p-0" src={item} alt="" />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default MainCarousel;
