import React from "react";
import "../styling/postcomp.css";


const PostComponent = ({ title, date, image, toggle }) => {
  return (
    <div className="cardDiv" onClick={toggle}>
      <h2 id="postCompTitle">{title}</h2>
      <br />
      <img className="blogpics" src={image} alt="bild"></img>
      <p id="postDateP">Datum: {date}</p>
    </div>
  );
};

export default PostComponent;
