import React, { useState, useEffect } from "react";
import * as emailjs from "emailjs-com";
import HeaderComponent from "../components/HeaderComp";
import FotterComponent from "../components/FooterComp";
import QuestionImg from "../images/question.png";
import "../styling/contact.css";

const Contact = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    emailjs
      .sendForm(
        "service_wkq6nqw",
        "template_uj6j6n7",
        evt.target,
        "user_2rNXw0NnMeH0FbsHBLxi4"
      )
      .then((res) => {
        console.log("Email successfully sent!");
      })
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
    evt.target.reset();
  };

  return (
    <div id="contact-page">
      <div id="contact-header">
        <HeaderComponent />
        <h1 id="contact-header-title">Kontakta oss</h1>
        <p id="contact-header-p">
          Har ni frågor men inte tid att ringa eller maila oss just nu?
          <br /> Inga problem! Svara på formuläret så kontaktar vi er så snart
          vi kan.
        </p>
      </div>
      <div className="contact-content">
        <div className="adress-pic-info">
          <div className="agress-img"></div>
          <div id="adress-info">
            <h2>Besök oss!</h2>
            <p>Björklundabacken 10</p>
            <p>436 57 Hovås</p>
            <hr />
            <p>Tel: 0707-708490</p>
            <p>Mail: hej@yougohealthplan.com</p>
            <div> </div>
          </div>
        </div>
        <div className="form-style-8">
          <h1>Skicka ett meddelande! </h1>
          <form onSubmit={handleSubmit} className="contactForm">
            <label>
              Namn:
              <input type="text" name="name" className="contact-input" />
            </label>
            <br />
            <label>
              Mail:
              <input type="text" name="mail" className="contact-input" />
            </label>
            <br />
            <label>
              Telefon:
              <input type="number" name="phone" className="contact-input" />
            </label>
            <br />
            <label>
              Meddelande:
              <textarea
                type="text"
                name="message"
                className="contact-input"
                id="contact-meddage"
              />
            </label>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
      <FotterComponent />
    </div>
  );
};

export default Contact;
