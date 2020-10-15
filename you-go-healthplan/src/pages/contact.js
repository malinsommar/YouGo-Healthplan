import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import HeaderComponent from "../components/HeaderComp";
import FotterComponent from "../components/FooterComp";
import CarouselComponent from "../components/CarouselComp";
import MultiCarouselComponent from "../components/MultiCarouselComp";
import "../styling/contact.css";

import geely from "../images/geely.png";
import nextstepgroup from "../images/nextstepgroup.png";
import pagero from "../images/pagero.png";
import amerikanskagymnasiet from "../images/amerikanskagymnasiet.png";
import närhälsan from "../images/närhälsan.jpg";
import sigma from "../images/sigma.png";
import engineering from "../images/2050.png";
import nääsfabriker from "../images/nääsfabriker.png";

const Contact = () => {
  const [submitMessage, setSubmitMessage] = useState("");
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt.target.mail);

    if (mail === "") {
      setSubmitMessage("Hoppsan! Du missade att fylla i din mail.");
    } else if (name === "") {
      setSubmitMessage("Hoppsan! Du missade att fylla i ditt namn.");
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

  const customerList = [
    {
      image: geely,
      link: "http://global.geely.com/",
    },
    {
      image: nextstepgroup,
      link: "https://www.nextstep.se/",
    },
    {
      image: pagero,
      link: "https://www.pagero.se/",
    },
    {
      image: amerikanskagymnasiet,
      link: "https://www.amerikanskagymnasiet.se/?lang=en",
    },
    {
      image: närhälsan,
      link: "https://www.närhälsan.se/",
    },
    {
      image: sigma,
      link: "https://www.sigma.se/",
    },
    {
      image: engineering,
      link: "https://2550.engineering/",
    },
    {
      image: nääsfabriker,
      link: "http://www.naasfabriker.se/en/home/",
    },
  ];
  return (
    <div id="contact-page">
      <div id="contact-header">
        <HeaderComponent />
        <CarouselComponent />
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
      <MultiCarouselComponent title="Kunder" list={customerList} />
      <FotterComponent />
    </div>
  );
};

export default Contact;
