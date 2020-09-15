import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import HeaderComponent from "../components/HeaderComp";
import MapComponent from "../components/MapComp";
import FotterComponent from "../components/FooterComp";
import QuestionImg from "../images/question.png";
import "../styling/contact.css";

const Contact = ({ history }) => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const templateId = "template_uj6j6n7";

    alert(
      `Submitting Name ${name}, Mail ${mail}, Phone ${phone}, Message ${message}`
    );

    sendFeedback(templateId, {
      message: message,
      from_name: name,
      from_mail: mail,
      from_number: phone,
    });
  };

  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  };

  return (
    <div id="contact-page">
      <div id="contact-header">
        <HeaderComponent />
        <h1 id="contact-header-title">Kontakt</h1>
        <p id="contact-header-p">
          Har ni frågor men inte tid att ringa eller maila oss just nu?
          <br /> Inga problem! Svara på formuläret så kontaktar vi er så snart
          vi kan.
        </p>
      </div>
      <div id="formAndContact">
        <div id="formDiv">
          <form onSubmit={handleSubmit}>
            <label>
              Namn:
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <br />
            <label>
              Mail:
              <input
                type="text"
                name="mail"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
            </label>
            <br />
            <label>
              Telefon:
              <input
                type="number"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>
            <br />
            <label>
              Meddelande:
              <input
                type="text"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
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
      <img id="questionImg" src={QuestionImg} alt="Yougo break logo" />,
      <FotterComponent />
    </div>
  );
};

export default Contact;
