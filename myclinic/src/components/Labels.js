import React from "react";
import LabelCarousel from "./LabelCarousel";

const Labels = () => {
  return (
    <>
      <div className="container-fluid flying-labels">
        <div className="row">
          <div className="col-10 mx-auto">
            <LabelCarousel />
          </div>
        </div>
      </div>
    </>
  );
};

export default Labels;
