import React from "react";
import HeaderComponent from "../components/HeaderComp";
import MapComponent from "../components/MapComp";
import FotterComponent from "../components/FooterComp";
import QuestionImg from "../images/question.png";
import "../styling/contact.css";

const Contact = () => {
  return (
    <div id="contact-page">
      <div id="contact-header">
        <HeaderComponent />
        <h1 id="contact-header-title">Kontakt</h1>
        <p id="contact-header-p">
          Ni är nu ett steg närmre en hälsosamare arbetsplats! Kontakta oss via
          mail,
          <br /> telefon eller vårt formulär så svarar vi på era frågor och
          bokar in ett möte.
        </p>
      </div>

      <div id="mapAndContact">
        <MapComponent />
        <div id="adress-info">
          <h2>Besök oss!</h2>
          <p>Björklundabacken 10</p>
          <p>436 57 Hovås</p>
          <hr />
          <p>Anna: 0707-708490</p>
          <p>Linda: 0707-390997</p>
          <p>anna.krantz@yougohealthplan.com</p>
          <p>linda.seinger@yougohealthplan.com</p>
        </div>
      </div>
      <div id="contact-form">
        <div id="form-text">
          <h2>Kontakta oss!</h2>
          <p>
            Har ni frågor men inte tid att ringa eller maila oss just nu? Inga
            problem! Svara på formuläret så kontaktar vi er så snart vi kan.
          </p>
          <img id="questionImg" src={QuestionImg} alt="Yougo break logo" />,
        </div>
        <div id="formDiv">
          <from>
            <label for="name">Namn:</label>
            <br />
            <input type="text" id="name" name="name" value="" />
            <br />
            <label for="mail">Mail:</label>
            <br />
            <input type="text" id="mail" name="mail" value="" />
            <br />
            <label for="phone">Telefon:</label>
            <br />
            <input type="text" id="phone" name="phone" value="" />
            <br />
            <label for="free">Meddelande:</label>
            <br />
            <input type="text" id="free" name="free" value="" />
            <br />
            <br />
            <input type="submit" id="submitButton" value="Skicka!" />
          </from>
        </div>
      </div>
      <FotterComponent />
    </div>
  );
};

export default Contact;
