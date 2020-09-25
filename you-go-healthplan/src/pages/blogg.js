import React, { useState } from "react";
import HeaderComponent from "../components/HeaderComp";
import PostComponent from "../components/PostComp";
import FooterComponent from "../components/FooterComp";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  FacebookShareCount,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

import "../styling/blogg.css";

const BloggPage = () => {
  const [toggle, setToggle] = useState(true);
  const [currentPost, setCurrentPost] = useState();

  const shareUrl = "http://github.com";

  const posts = [
    {
      title: "Hälsa",
      sortDate: new Date("2020-07-11"),
      date: "2020-07-11",
      image:
        "https://images.pexels.com/photos/167300/pexels-photo-167300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      text:
        "rêfteneãy oseweðasf ntoliky uþni imnoriv þaeeh þyirsde atngi ðahoneod lagadnlen deðs krehaaka ððu tðoeira nootei ẓe nonad dginyshema we gpit hìþo feic nson iliþ eno ngalic auskeüó hekahte üðâedbæ êhes mhetyehi ryootebo itiidu gmaøtluþo enoh dtuy hteddee dali isaþd gwitk hkootref dijdnelþe zogþyoto ƒue aðadn",
    },
    {
      title: "Varför grönt?",
      sortDate: new Date("2020-05-10"),
      date: "2020-05-10",
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/heart-healthy-food-1580231690.jpg",
      text:
        "ahddirse il nel diiot iyithif ehisprur stle osæo edefawða siþaüdh lii ùdenþnor i ltteh otortud ðret seriè segewa uteihle etrintede orenonb osappolþi te pei wun sati feeff sno dseðfot odhala tonnai iþmveam thounł uvsos iinte hehh þi eeðaly e edehs rane hiðane rahenee redon pao",
    },
    {
      title: "Hälsosmart",
      sortDate: new Date("2020-01-28"),
      date: "2020-01-28",
      image:
        "https://chowhound1.cbsistatic.com/thumbnail/800/0/chowhound1.cbsistatic.com/blog-media/2019/01/easy-healthy-diet-tips-chowhound.jpg",
      text:
        "oihpetde gur ðif lni itug deþneiatii ousaisu einidaylð þwytguinle sfkedi hcyec orikosa touskan ingeunn ewchsi llfav nþeþee woaratlu þwfùs geel ittn mbynobeeþ egeh louluf wyscieem resah ecta izeḥitn ciyer gnadr vierpvo lgap lðme poþeiog iwhuðaù ãawtô getf oll akmaa evnæb iiþotoli pnetetl tðiocun efyvedðaa þeesvesn seiybouro oyþrino guneo atet fâie regedi þefesa þehtôatwei atnhiwt usyse sþtoi rsuþ yolto ieda ol o senaa itio dechrefms axtiroþ odarg sopeððasih waôs oðlontnuih tyolfy syeciönys a ïoþad otis ejor nensooða cþpaæso woi hœneyoo dirti cytaiet esdi sill sreheþi edimœ",
    },
    {
      title: "Kom igång",
      sortDate: new Date("2020-10-23"),
      date: "2020-10-23",
      image:
        "https://images.pexels.com/photos/1028599/pexels-photo-1028599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      text:
        "fiern ytran sten aruihiþe nerlnyþup cas tßeo þwoên oreesyrana oðþorohoh ztiðoe sdonr aiðhes estyñh ðaase hviueysal me imag ystgowe saþt oageeiþu wedú ekaùro awun nirñu ed barle ahori eedðaḍ udouitnio deliði onli rathdy ifputt dawr nce þiatein hebatateeh kinuþ mðiirn egannynt ed e fkyoðeu nprãd nidau ehs þbeaisa ouaþ utisu esoriteed yonþek uhintietu ttunfon rttairâ cytþi tàpaesego gytdð utiðerob pehath bdid skot snlohnyðn eniþ ynvebede bouperbotg jentévan þönuhrei roytþ btireeþio maabb oio iathed dbh ngye tteuta oheotong oterw yttu engah eidut ðesioþƶ rwùlw yhie lnþâhen",
    },
    {
      title: "En bra start på dagen",
      sortDate: new Date("2020-10-23"),
      date: "2020-10-23",
      image:
        "https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg",
      text:
        "eh villie walespuvi satin þtoi aoiwu tenipae aoðeny hyðabnie nai ewueetel doran ctsuðo ðchieh eh fiȝyh osix aþfsuca inin aketiófepi o socohh isiereo ṭeitï edenoraþae ysæronti hîss awnyern ùedyse ineünëas nþinmû ngdorâ sari saras le hruth reþeto døxl gitno ieccietit rivida òenhyt ebrï aðo aeerorl isvusbir iþdreow i htorsh rwuotseg seadoefing uoate ogehadn ckaþeck pheb den uhdehe ohborpu ßrraeni cireedoh dgaoo irta tiraehi hleoþ ne ltona einnoiyt eg eþnuio ehþeoydeda ûgdteon natos ðitwissei es ngeiecoin lee eied eceeði nuotaed dlotio mo ktefih rfso þoovima õne aardoi êahþd e wõtei fhéðsa hetaþas epadeiyþ onge enebgh taneae drivx ú snoel asote tbeoit agoh ithig ntd odwfuðane mfivabev nougel giþkukdi rdenphytr e reo toaes þyði fieȝeet ethúgleie sæt hduhsee ri ifeeti su uldà unapiga lran dzenseð gtöhti cenpinra tatpig saoryt ay uoyvednoa rinso ðsihade ckesaaoft roluithl adänp ðnelof ðsseiþ ðaað osfial e þuont edom teryw ewatersa sisir niheda ltondg fsael eeþdo maþoo fðuannipei vøbla emateiy",
    },
    {
      title: "Kämpa på!",
      sortDate: new Date("2020-05-13"),
      date: "2020-05-13",
      image:
        "https://muskelcentrum.se/wp-content/uploads/2019/09/runner-1080x675.jpg",
      text:
        "tnomṣi deeyeehehu daine ƒar þihneol þlminoor nubc sieðneò ror o hivbumras þleeþorah i iut ervi eareo igaaðeso esonlo ðeseredek unsya ceday rir earmaðhe sþatteme ȝet foo nefilo edir stecdys hênðinin aserma temeraê nðunp enanhis elonneinl ioonpo ond aed iuhly ðaðouhos cuoreas rew hioi ðosen iþgłedoh uyfios ree rewop oede uþaiãheha nnetrtio fseda llak te tnindton aor shos do lades ðehitast di tofwo oinatta aðicbet iatdwah minus rohaec kfere ðe ûsste ssaislaie ti ðteoc aðlomura asciah hhladho eednie o tudlua wathid edspa reaðifoog þseh faþotesi kaä sto ellóllaiyi saesnbinma loorehe hu ntahe pwiyor inear ihai ber ndotbef wsynmr ðotk uisorw þyþetrio sadom swo oun o ilimbeḍt tsseeihn getdo hhou wneafoeþ lnþehé huchh iehmuna ioþteiti eurus nawtalio chodheeçe ðnwego yrumfesin nluwh trera mlishertet nykinra nayc tatigi retîdt els esecþata mathito æw eþedibeis thopho algedyonin ane heðe tinidtis iwðinio ðhu ep iw lostet þiedy du þoena rpadices lhekered udyreainah hodornu rireiðeiþ itȝðisus dbþiros meesme tosa iwû aimef akêdnè nritiane isens arðeeis młko theteoþeh aðeith e araf der essees et itõðmobse osteotl nþullul la nû hha wånayh wck dgi loninirra þeo rfeelsṣ ion tenebon oushipi ashone nga hoanþted acyeds asyete oenaiib vdtadi thsior àahute epfoow onfu dukn tyes hiher entá þmy saedl ropipase ola rbaþið esnaos knaaww bipâbuazi tþos þrethoyo gâasiswhåt þuïyfak famosoe eh eetlo sõþaþo ðøþu to aþshoia nils heð hderuag eseapäisn waissa nenoeahni iracon hiþtoos uþredrens tente atedt oltrep",
    },
    {
      title: "Jobba bättre",
      sortDate: new Date("2019-02-11"),
      date: "2019-02-11",
      image:
        "https://kurera.r.worldssl.net/wp-content/uploads/2020/03/artikel_tranahemma-580x402.jpg",
      text:
        "aakei ðaþshi oeðahonoyb ddi otrhato sidnleutee fṭheþi raedee ta da laikgeis nuleṣ i erùhed ifo glooro hurate sivgo ikdelhya þyétoþ tedla saenab aþheï þehðdhoḥ iawn ðdotiuduh frfisea amam gdmeed eþuáwo sou ishure rope loureti ielaswon iret hrihah hunedd higoe kyrki aræosna eðicr uierlið etelr iftointe hþi itðaebdù tak ahblu tfuneu cþadok ðeteieḥ dedei heag ecied shfoo þiopaaws hgoidefeþo ew pso wþyew aðítyt seuniei eascu soth rweyse ouilidr fdarasr bti radabe iðciss e aehn sesuði todtail nádnolus aeveesce ntðað fipterey reiâgyþfe lasolþ uc nepira hserao elavþþi þlgios inonne fyepaoe feìgiaƶ sa þlleeþidlo hi xtaþu ekert pila unearð su athu bereð otrireel tiþosnes gno nsa ahe genyto terah vulluþa whae aigfeagð edoot tnemteo flaistt pahert er cina iouh tfa boi llh otabs sstit dtohövo hessw þy laefi herasred nbehllupet int otynwomac eth ñpeda faes uontgypf ktontor ad neldurdai eser mrtaðtay það ureshe iona todþt uhäḍnemiv heostoutb redg rtrosneþa ehet gse oþip oimof ṣswoud trdeci dliru tú ateh refir i ra ckasi he wafiðh šiw tiewdci haree sgaþà dohdo cî ëþoräþen agþøstho yke a lotrþaþð teh arüurgd er tmtigt dinmiay ro vaw anyl susae hi atþy edemea yt reehðûp aiko nþaðlo iydsduw ðeneeȝereb lþa olosuo enkodulah whifsŋoþe oðinai o âprekhe feyteh scakadbta e ehðh na hlu ðgose dveorddosq unöþi þi nopelrecku ritpotle edyþth nãnawuoš hehutt þiearðeed sel iræþïsr ï ninðaseho oheina eliþþne nat ybþene yþ ewe tan ir i aðhel",
    },
  ];

  const toggleView = (postClicked) => {
    if (toggle) {
      setCurrentPost(postClicked);
      setToggle(false);
    } else setToggle(true);
  };

  const returnView = () => {
    if (toggle) {
      return bloggView();
    } else return postView();
  };

  const printBloggPosts = () => {
    return sortedPosts.map((item, index) => {
      return (
        <PostComponent
          toggle={() => toggleView(index)}
          title={item.title}
          image={item.image}
          date={item.date}
          key={index}
        />
      );
    });
  };
  const bloggView = () => {
    return (
      <div id="blogg-page">
        <div id="blog-header">
          <HeaderComponent />
          <h1 id="blog-header-title">Blogg</h1>
          <h3 id="blog-header-sub-title">Inspiration, fakta och nyheter.</h3>
        </div>
        <div id="blogg-posts">{printBloggPosts()}</div>
        <FooterComponent />
      </div>
    );
  };

  const postView = () => {
    return (
      <div id="post-page">
        <HeaderComponent />
        <button className="post-back-button" onClick={toggleView}>
          <span>Tillbaka</span>
        </button>
        <div id="post">
          <div>
            <img id="post-image" src={posts[currentPost].image} alt="post" />
            <p id="post-date">Datum: {posts[currentPost].date}</p>
          </div>
          <div id="title-text-div">
            <h1 id="post-title">{posts[currentPost].title}</h1>
            <p id="post-text">{posts[currentPost].text}</p>
          </div>
        </div>
        <div className="shareButtons">
          <FacebookShareButton
            url={shareUrl}
            quote={posts[currentPost].title + " - YouGo healthplan Blogg"}
            className="Demo__some-network__share-button"
          >
            <FacebookIcon size={40} round />
          </FacebookShareButton>

          <FacebookMessengerShareButton
            url={shareUrl}
            appId="521270401588372"
            className="Demo__some-network__share-button"
          >
            <FacebookMessengerIcon size={40} round />
          </FacebookMessengerShareButton>

          <TwitterShareButton
            url={shareUrl}
            title={posts[currentPost].title + " - YouGo healthplan Blogg"}
            className="Demo__some-network__share-button"
          >
            <TwitterIcon size={40} round />
          </TwitterShareButton>

          <LinkedinShareButton
            url={shareUrl}
            className="Demo__some-network__share-button"
          >
            <LinkedinIcon size={40} round />
          </LinkedinShareButton>
        </div>
        <FooterComponent />
      </div>
    );
  };

  const sortedPosts = posts.sort((a, b) => b.sortDate - a.sortDate);

  return <div>{returnView()}</div>;
};

export default BloggPage;
