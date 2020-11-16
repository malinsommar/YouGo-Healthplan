import React from "react";
import { NavLink } from "react-router-dom";
import "../styling/home.css";

const newLineText = (text) => {
    return text.split("\n").map((str) => <p>{str}</p>);
  };

const CardComponent = ({image, frontText, backtext, buttonText, cardId, toPage}) => {
  return (
    <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front" id={cardId}>
            <img className="card-image" src={image}></img>
            <div>
              <p className="cardTitle">{frontText}</p>
            </div>
          </div>

          <div className="flip-card-back" id={cardId}>
            <p className="card-back-text"> {newLineText(backtext)}</p>
            <NavLink
              className="button-container"
              to={toPage}
              activeClassName="isActive"
            >
                <p className="card-button">{buttonText}</p>
            </NavLink>
            </div>
          </div>
      </div>
  );
};

export default CardComponent;
