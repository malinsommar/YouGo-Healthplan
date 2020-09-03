import React from "react";
import PhoneIcon from "../images/phoneIcon.png";
import MailIcon from "../images/mailIcon.png";
import "../styling/fottercomp.css";

const FotterComponent = () => {
  return (
    <div id="fotterDiv">
      <div id="fotter-adress">
        <h2>YouGo Healthplan</h2>
        <p>Björklundabacken 10</p>
        <p>436 57 Hovås</p>
      </div>
      <div id="fotter-contact">
        <p>
          <img className="fotterIcons" src={PhoneIcon} />
          0707-708490
        </p>
        <p>
          <img className="fotterIcons" src={PhoneIcon} />
          0707-390997
        </p>
        <p>
          {" "}
          <img className="fotterIcons" src={MailIcon} />
          anna.krantz@yougohealthplan.com
        </p>
        <p>
          {" "}
          <img className="fotterIcons" src={MailIcon} />
          linda.seinger@yougohealthplan.com
        </p>
      </div>
      <div id="fotter-media">
        <img></img>
        <p>Sociala edier taggar</p>
      </div>
    </div>
  );
};

export default FotterComponent;
