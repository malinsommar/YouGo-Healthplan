import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import HeaderComponent from "../components/HeaderComp";
import FotterComponent from "../components/FooterComp";
import FaQ from "../components/FAQ";
import "../styling/contact.css";
import ContactData from "../data/contactInformation.json";
import ContactText from "../data/textContactPage.json";
import images from "../data/images.js";

const Contact = () => {
  const [submitMessage, setSubmitMessage] = useState("");
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (mail === "") {
      setSubmitMessage(ContactText.contactFormMailError);
    } else if (name === "") {
      setSubmitMessage(ContactText.contactFormNameError);
    } else {
      emailjs
        .sendForm(
          ContactText.emailJsServiceKey,
          ContactText.emailJsTemplateKey,
          evt.target,
          ContactText.emailJsUserKey
        )
        .then((res) => {
          setSubmitMessage(ContactText.contactFormSuccess);
        })
        .catch((err) => {
          console.error("Something went wrong", err);
          setSubmitMessage(
            ContactText.contactFormError
          );
        });
      evt.target.reset();
      setMail("");
      setName("");
    }
  };

  const newLineText = (text) => {
    return text.split('\n').map(str => <p>{str}</p>);
  }

  return (
    <div id="contact-page">
      <div id="contact-header">
        <HeaderComponent />
        <h1 id="contact-header-title">{ContactText.pageTitle}</h1>
        <p id="contact-header-p">{newLineText(ContactText.pageSubTitle)}</p>
      </div>
      <div className="contact-content">
        <div className="adress-pic-info">
          <div className="agress-img">
          <img className="contact-info-image" src={images[0].contactInfoImage} />
          </div>
          <div id="adress-info">
            <h2>{ContactText.contactInfoTitle}</h2>
            <p>{ContactData.gata}</p>
            <p>
              {ContactData.postnummer} {ContactData.stad}
            </p>
            <hr />
            <p>{ContactText.contactInfoPhone} {ContactData.telefonnummer}</p>
            <p>{ContactText.contactInfoMail} {ContactData.mail}</p>
          </div>
        </div>
        <div className="form-style-8">
          <h1 id="form-title">{ContactText.contactFormTitle}</h1>
          <form onSubmit={handleSubmit} className="contactForm">
            <label>
              {ContactText.contactFormName}
              <input
                type="text"
                name="name"
                className="contact-input"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <br />
            <label>
            {ContactText.contactFormMail}
              <input
                type="text"
                name="mail"
                className="contact-input"
                onChange={(e) => setMail(e.target.value)}
              />
            </label>
            <br />
            <label>
            {ContactText.contactFormPhone}
              <input type="number" name="phone" className="contact-input" />
            </label>
            <br />
            <label>
            {ContactText.contactFormText}
              <textarea
                type="text"
                name="message"
                className="contact-input"
                id="contact-meddage"
              />
            </label>
            <br />
            <input type="submit" value={ContactText.contactFormButton} />
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