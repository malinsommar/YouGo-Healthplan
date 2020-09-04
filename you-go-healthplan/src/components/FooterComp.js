import React from "react";
import PhoneIcon from "../images/phoneIcon.png";
import MailIcon from "../images/mailIcon.png";
import FacebookLogo from "../images/facebookLogo.png";
import InstagramLogo from "../images/instagramLogo.png";
import LinkedinLogo from "../images/linkedinLogo.png";
import YoutubeLogo from "../images/youtubeLogo.png";
import YougoLogo from "../images/logo.png";
import "../styling/footercomp.css";

const FotterComponent = () => {
  return (
    <div id="footerDiv">
      <div id="footer-adress">
        <h2>YouGo Healthplan</h2>
        <p>Björklundabacken 10</p>
        <p>436 57 Hovås</p>
      </div>
      <div id="footer-contact">
        <p>
          <img className="footerIcons" src={PhoneIcon} />
          0707-708490
        </p>
        <p>
          <img className="footerIcons" src={PhoneIcon} />
          0707-390997
        </p>
        <p>
          {" "}
          <img className="footerIcons" src={MailIcon} />
          anna.krantz@yougohealthplan.com
        </p>
        <p>
          {" "}
          <img className="footerIcons" src={MailIcon} />
          linda.seinger@yougohealthplan.com
        </p>
      </div>
      <div id="footer-media">
        <a href="https://www.facebook.com/yougohealthplan/">
          <img src={FacebookLogo} className="socialMediaLogo" />
        </a>
        <a href="https://www.instagram.com/yougohealthplan/?hl=en">
          <img src={InstagramLogo} className="socialMediaLogo" />
        </a>
        <a href="https://se.linkedin.com/company/yougo-healthplan">
          <img src={LinkedinLogo} className="socialMediaLogo" />
        </a>
        <a href="https://www.youtube.com/channel/UCOOuv2oO-y79iDeU3jpx6xQ">
          <img src={YoutubeLogo} className="socialMediaLogo" />
        </a>
        <img src={YougoLogo} id="footerYougoLogo" />
        <p id="follow">Följ oss:</p>
      </div>
    </div>
  );
};

export default FotterComponent;
