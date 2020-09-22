import React, { useState } from "react";
import "../styling/hoverButton.css";

const HoverButton = ({ text }) => {
  const [isShown, setIsShowin] = useState(false);
  return (
    <div>
      <button
        id="hoverButton"
        onMouseEnter={() => setIsShowin(true)}
        onMouseLeave={() => setIsShowin(false)}
      >
        hej
      </button>
      {isShown && <div id="shownMessage">{text}</div>}
    </div>
  );
};

export default HoverButton;
