import React from "react";
import "../styling/pricinginfocomp.css";

const PricingInfoComponent = ({ title, text, image }) => {
  return (
    <div className="infobox">
      <img src={image} />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default PricingInfoComponent;
