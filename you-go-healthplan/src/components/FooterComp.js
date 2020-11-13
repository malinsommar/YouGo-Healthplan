import React from "react";
import "../styling/footercomp.css";
import ContactData from "../data/contactInformation.json";
import images from "../data/images.js";

const bigScreenFooter = () => {
  return (
    <div id="footerDiv">
      <div id="footer-adress">
        <h2>YouGo HealthPlan</h2>
        <p>{ContactData.gata}</p>
        <p>
          {ContactData.postnummer} {ContactData.stad}
        </p>
      </div>
      <div id="footer-contact">
        <p>
          {ContactData.telefonnummer}
        </p>
        <p>
          {" "}
          {ContactData.mail}
        </p>
      </div>
      <div id="footer-media">
        <a href="https://www.facebook.com/yougohealthplan/">
          <img
            src={images[0].faceBookIcon}
            className="socialMediaLogo"
            alt="Facebook Logo"
          />
        </a>
        <a href="https://www.instagram.com/yougohealthplan/?hl=en">
          <img
            src={images[0].instagramIcon}
            className="socialMediaLogo"
            alt="Instagram Logo"
          />
        </a>
        <a href="https://se.linkedin.com/company/yougo-healthplan">
          <img
            src={images[0].linkedinIcon}
            className="socialMediaLogo"
            alt="Linkedin Logo"
          />
        </a>
        <a href="https://www.youtube.com/channel/UCOOuv2oO-y79iDeU3jpx6xQ">
          <img
            src={images[0].youtubeIcon}
            className="socialMediaLogo"
            alt="Youtube Logo"
          />
        </a>
        <img src={images[0].youGoiconFooter} id="footerYougoLogo" alt="Yougo healthplan Logo" />
        <p id="follow">Följ oss:</p>
      </div>
      </div>
  );
};

const smallScreenFooter = () => {
  return (
    <div className="smallScreenDiv">
      <div id="footer-adress-small">
        <img
          src={images[0].youGoiconFooter}
          id="footerYougoLogoSmall"
          alt="Yougo healthplan Logo"
        />
        <p>{ContactData.gata}</p>
        <p>
          {ContactData.postnummer} {ContactData.stad}
        </p>
      </div>
      <hr className="footer-hr" />
      <div id="footer-contact-small">
        <p>
          {ContactData.telefonnummer}
        </p>

        <p>
          {" "}
          {ContactData.mail}
        </p>
      </div>
      <hr className="footer-hr" />
      <div id="footer-media-small">
        <a href="https://www.facebook.com/yougohealthplan/">
          <img
            src={images[0].faceBookIcon}
            className="socialMediaLogoSmall"
            alt="Facebook Logo"
          />
        </a>
        <a href="https://www.instagram.com/yougohealthplan/?hl=en">
          <img
            src={images[0].instagramIcon}
            className="socialMediaLogoSmall"
            alt="Instagram Logo"
          />
        </a>
        <a href="https://se.linkedin.com/company/yougo-healthplan">
          <img
            src={images[0].linkedinIcon}
            className="socialMediaLogoSmall"
            alt="Linkedin Logo"
          />
        </a>
        <a href="https://www.youtube.com/channel/UCOOuv2oO-y79iDeU3jpx6xQ">
          <img
            src={images[0].youtubeIcon}
            className="socialMediaLogoSmall"
            alt="Youtube Logo"
          />
        </a>
      </div>
    </div>
  );
};

const FotterComponent = () => {
  return (
    <div>
      <div id="bigFooter">{bigScreenFooter()}</div>
      <div id="smallFooter">{smallScreenFooter()}</div>
    </div>
  );
};

export default FotterComponent;
