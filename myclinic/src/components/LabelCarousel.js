import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

const LabelCarousel = () => {
  return (
    <>
      <div className="">
        <Carousel interval={10000} controls={false} indicators={false}>
          <Carousel.Item>
            <h3 className="move-left label1" style={{ color: "whitesmoke" }}>
              Psychiatry Department{" "}
            </h3>
            <h4 className="move-right label2" style={{ color: "white" }}>
              You deserve better
            </h4>
          </Carousel.Item>
          <Carousel.Item>
            <h3 className="move-left  label1">Department of Orthopaedics </h3>
            <h4 className="move-right label2">
              Keep Your bones <strong>Strong</strong> and{" "}
              <strong>Healthy</strong>
            </h4>
          </Carousel.Item>
          <Carousel.Item>
            <h3 className="move-left label1" style={{ color: "black" }}>
              Pediatrics Department{" "}
            </h3>
            <h4 className="move-right label2" style={{ color: "black" }}>
              Every child is <strong>precious</strong>
            </h4>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default LabelCarousel;
