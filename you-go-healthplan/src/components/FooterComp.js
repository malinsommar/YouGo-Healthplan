import React from "react";
import PhoneIcon from "../images/phoneIconWhite.png";
import MailIcon from "../images/mailIconWhite.png";
import FacebookLogo from "../images/facebookLogo.svg";
import InstagramLogo from "../images/instagramLogo.svg";
import LinkedinLogo from "../images/linkedinLogo.svg";
import YoutubeLogo from "../images/youtubeLogo.svg";
import YougoLogo from "../images/logo.png";
import "../styling/footercomp.css";
import ContactData from "../data/contactInformation.json";

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
          <img className="footerIcons" src={PhoneIcon} alt="Phone icon" />
          {ContactData.telefonnummer}
        </p>
        <p>
          {" "}
          <img className="footerIcons" src={MailIcon} alt="Mail icon" />
          {ContactData.mail}
        </p>
      </div>
      <div id="footer-media">
        <a href="https://www.facebook.com/yougohealthplan/">
          <img
            src={FacebookLogo}
            className="socialMediaLogo"
            alt="Facebook Logo"
          />
        </a>
        <a href="https://www.instagram.com/yougohealthplan/?hl=en">
          <img
            src={InstagramLogo}
            className="socialMediaLogo"
            alt="Instagram Logo"
          />
        </a>
        <a href="https://se.linkedin.com/company/yougo-healthplan">
          <img
            src={LinkedinLogo}
            className="socialMediaLogo"
            alt="Linkedin Logo"
          />
        </a>
        <a href="https://www.youtube.com/channel/UCOOuv2oO-y79iDeU3jpx6xQ">
          <img
            src={YoutubeLogo}
            className="socialMediaLogo"
            alt="Youtube Logo"
          />
        </a>
        <img src={YougoLogo} id="footerYougoLogo" alt="Yougo healthplan Logo" />
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
          src={YougoLogo}
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
          <img className="footerIcons" src={PhoneIcon} alt="Phone icon" />
          {ContactData.telefonnummer}
        </p>

        <p>
          {" "}
          <img className="footerIcons" src={MailIcon} alt="Mail icon" />
          {ContactData.mail}
        </p>
      </div>
      <hr className="footer-hr" />
      <div id="footer-media-small">
        <a href="https://www.facebook.com/yougohealthplan/">
          <img
            src={FacebookLogo}
            className="socialMediaLogoSmall"
            alt="Facebook Logo"
          />
        </a>
        <a href="https://www.instagram.com/yougohealthplan/?hl=en">
          <img
            src={InstagramLogo}
            className="socialMediaLogoSmall"
            alt="Instagram Logo"
          />
        </a>
        <a href="https://se.linkedin.com/company/yougo-healthplan">
          <img
            src={LinkedinLogo}
            className="socialMediaLogoSmall"
            alt="Linkedin Logo"
          />
        </a>
        <a href="https://www.youtube.com/channel/UCOOuv2oO-y79iDeU3jpx6xQ">
          <img
            src={YoutubeLogo}
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
