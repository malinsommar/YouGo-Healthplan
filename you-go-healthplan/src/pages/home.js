import React from "react";
import "../styling/home.css";

const Home = () => {
  return (
    <div>
      <div id="headerpicture">
        <header>
          <h1>Home</h1>
        </header>

        <div>{ContentAboutYouGo()}</div>
        <div>{ColorContainer()}</div>
        <div>{ContainerInfoCircle()}</div>
      </div>
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
      </div>
      <div className="boxOfInfo">
        <div className="picture"></div>
        <div className="rubrik">Enkel registrering</div>
        <div className="text">Kontakta oss...</div>
      </div>
      <div className="boxOfInfo">
        <div className="picture"></div>
        <div className="rubrik">Erbjudande</div>
        <div className="text">Gratis 3 månader, kolla priser!</div>
      </div>
    </div>
  );
};

const ContainerInfoCircle = () => {
  return (
    <div id="InfoContainer">
      <div id="firstBox">
        <div id="firstcircle"></div>
        <div id="firsttext">
          Digital hälsokontroll <br></br>& kartläggning
        </div>
      </div>
      <div id="secondBox">
        <div id="secondcircle"></div>
        <div id="secondText">Hälsorapporter</div>
      </div>
      <div id="thirdBox">
        <div id="thirdcircle"></div>
        <div id="thirdText">
          Individanpassade<br></br>årgärder
        </div>
      </div>
      <div className="fourthBox">
        <div id="fourthcircle"></div>
        <div id="fourthText">Agera med rätt insats</div>
      </div>
    </div>
  );
};

export default Home;
