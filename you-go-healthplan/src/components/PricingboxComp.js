import React from "react";
import "../styling/pricingboxcomp.css";

const mapList = (list) => {
  return list.map((item, index) => {
    return <p>- {list[index]}</p>;
  });
};

const PricingBoxComponent = ({ title, startPrice, monthly, list }) => {
  return (
    <div className="box">
      <div className="top-box">
        <h1 id="title">{title}</h1>
        <p id="monthly">{monthly}</p>{" "}
        <p>
          Engångskostnad:
          <br /> från {startPrice}kr
        </p>
      </div>
      <div className="bottom-box">{mapList(list)}</div>
    </div>
  );
};

export default PricingBoxComponent;
