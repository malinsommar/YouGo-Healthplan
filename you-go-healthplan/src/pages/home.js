import React from "react";
import "../styling/home.css";
import Circle from "../images/YouGo_3.png";
import HeaderComponent from "../components/HeaderComp";

const Home = () => {
  return (
    <div>
      <div id="headerpicture">
        <header>
          <HeaderComponent />
        </header>
      </div>
      <div>{ContentAboutYouGo()}</div>
      <div>{ColorContainer()}</div>
      <div>{ContainerInfoCircle()}</div>
    </div>
  );
};

const ContentAboutYouGo = () => {
  return (
    <div className="infoAboutAll">
      <div>
        <div id="infoAboutYouGo">
          <h1>Vad är YouGo?</h1>
          <p>
            skhvgsfjjdisojgufddsjgfidojg <br></br> fhuishdusjivnfdskhvgsfjjdi{" "}
            <br></br> fhuishdusjivnfd skhvgsfjjdi <br></br>{" "}
            fhuishdusjivnfdskhvgs <br></br> fhuishdusjivnfd skhvgsfj <br></br>{" "}
            fhuishd <br></br> fhuishdusjivnfd
          </p>
        </div>
        <div id="imgOfSomething"></div>
      </div>
      <div id="moveBox1">
        <div id="imgOfSomething1"></div>
        <div id="infoAboutYouGo1">
          <h1>Ta hand om dina anställda</h1>
          <p>
            skhvgsfjjdisojgufddsjgfidojgfadfsgfdhfrjd <br></br>{" "}
            fhuishdusjivnfdskhvgsfjjdifdhgfds <br></br> fhuishdusjivnfd
            skhvgsfjjdirtyujjhgff <br></br> fhuishdusjivnfdskhvgs <br></br>{" "}
            fhuishdusjivnfd skhvgsfj <br></br> fhuishdrtyukjhgfd <br></br>{" "}
            fhuishdusjivnfd
          </p>
        </div>
      </div>
    </div>
  );
};

const ColorContainer = () => {
  return (
    <div id="colorcontainer">
      <div className="boxOfInfo">
        <div className="picture"></div>
        <div className="rubrik">Osäker?</div>
        <div className="text">Läs mer om oss...</div>
        <button className="buttonInfo">Klick here</button>
      </div>
      <div className="boxOfInfo">
        <div className="picture"></div>
        <div className="rubrik">Enkel registrering</div>
        <div className="text">Kontakta oss...</div>
        <button className="buttonInfo">Klick here</button>
      </div>
      <div className="boxOfInfo">
        <div className="picture"></div>
        <div className="rubrik">Erbjudande</div>
        <div className="text">Gratis 3 månader, kolla priser!</div>
        <button className="buttonInfo">Klick here</button>
      </div>
    </div>
  );
};

const ContainerInfoCircle = () => {
  return (
    <div id="InfoContainer">
      <div id="firstBox">
        <img id="icon" src={Circle} alt="icon"></img>
      </div>
    </div>
  );
};

export default Home;
