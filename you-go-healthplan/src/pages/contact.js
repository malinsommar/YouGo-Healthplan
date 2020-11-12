import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import HeaderComponent from "../components/HeaderComp";
import FotterComponent from "../components/FooterComp";
import FaQ from "../components/FAQ";
import "../styling/contact.css";
import ContactData from "../data/contactInformation.json";

const Contact = () => {
  const [submitMessage, setSubmitMessage] = useState("");
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (mail === "") {
      setSubmitMessage("Du missade att fylla i din mail.");
    } else if (name === "") {
      setSubmitMessage("Du missade att fylla i ditt namn.");
    } else {
      emailjs
        .sendForm(
          "service_wkq6nqw",
          "template_uj6j6n7",
          evt.target,
          "user_2rNXw0NnMeH0FbsHBLxi4"
        )
        .then((res) => {
          setSubmitMessage("Meddelandet är skickat, vi hör av oss inom kort!");
        })
        .catch((err) => {
          console.error("Something went wrong", err);
          setSubmitMessage(
            "Något gick fel, försök igen eller nå oss på mail eller telefon."
          );
        });
      evt.target.reset();
      setMail("");
      setName("");
    }
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
            <p>{ContactData.gata}</p>
            <p>
              {ContactData.postnummer} {ContactData.stad}
            </p>
            <hr />
            <p>Tel: {ContactData.telefonnummer}</p>
            <p>Mail: {ContactData.mail}</p>
          </div>
        </div>
        <div className="form-style-8">
          <h1 id="form-title">Skicka ett meddelande! </h1>
          <form onSubmit={handleSubmit} className="contactForm">
            <label>
              Namn: *
              <input
                type="text"
                name="name"
                className="contact-input"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <br />
            <label>
              Mail: *
              <input
                type="text"
                name="mail"
                className="contact-input"
                onChange={(e) => setMail(e.target.value)}
              />
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
            <input type="submit" value="Skicka" />
            <p>{submitMessage}</p>
          </form>
        </div>
      </div>
      <div className="faqOuterSection">
       <div className="faqSection">
         <FaQ />
       </div>
      </div>
      <FotterComponent />
    </div>
  );
};

export default Contact;