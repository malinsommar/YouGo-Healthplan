/*import bild from "../images/bildnamn.jpg";*/
import tipsMortionHemma from "../images/blogworkfromhometips.jpg";
import tipshalsosamaremedarbetare from "../images/tipshalsosamaremedarbetare.jpg";
import vardagsmortion from "../images/vardagsmortion.jpg";
import tipsjobbahemifran from "../images/tipsjobbahemifrån.jpg";
import coronatips from "../images/coronatips.jpg";
import vadkostarsjukskrivning from "../images/vadkostarsjukskrivning.jpg";
import lopningbastapillret from "../images/lopningbastapillret.jpg";
import naas from "../images/naasblogpost.jpg";
import tallriksmodellen from "../images/tallriksmodellen.jpg";
import hurmarorganisation from "../images/hurmarorginasion.jpeg";
import worldhealth from "../images/worldhealth.jpg";
import nyttar2020 from "../images/nyttar2020.jpg";

import yougologo from "../images/logo.png";
/*
    {
      title: "Titeltext",
      date: new Date("2020-07-12"),
      image: "bild",
      text: `Text \n för "enter"`
    },
  
*/

const posts = [
  {
    title: "5 tips till vardags motion när ni jobbar hemma.",
    date: new Date("2020-11-02"), 
    image: tipsMortionHemma ,
        text:`Allt fler svenskar har jobbat hemma under den senaste tiden. Att arbeta hemma kan leda till mer stillasittande och möjligen en del utebliven motion. Men det finns enkla knep för att bryta den onda cirkeln och inkludera mer rörelse i vardagen. Onlineträning, aktiva lunchraster och pausgympa är några av tipsen vi på Yougohealthplan vill dela med oss för en hälsosammare vardag när du jobbar hemma.\n

    Det har gått över ett halvår sedan Covid-19 fick sitt utbrott och många av oss arbetar fortfarande hemifrån. Eftersom våra kroppar är byggda för rörelse påverkar långvarigt stillasittande vår hälsa mer än vi tror. Fysisk aktivitet, exempelvis i form av en rask promenad, trädgårdsarbete eller styrketräning, kan minska risken för bland annat hjärt-kärlsjukdomar, cancer och psykisk ohälsa.*\n
    
    Därför har vi på Yougohealthplan listat fem tips för att få mer vardagsmotion under hemarbetet:
    
    1: Träna online: Efter att många gym stängde ner efter utbrottet har allt fler svenskar börjat träna online. Genom vår samarbetspartner Viktwäktarnas WW-app kan du träna med träningsplattformen FitOn och ta del av en mängd olika pass, bland annat dans, styrka och yoga. Alla pass leds av duktiga instruktörer. Det är ett utmärkt komplement till det vanliga gympasset och passar perfekt att göra hemma innan eller efter arbetsdagen. Det enda redskapet som behövs är din mobil eller en surfplatta. \n
    2: Ta regelbundna bensträckare: När man jobbar hemma och de dagliga kaffe pauserna med kollegor uteblir är det lätt att fastna framför datorn och bli mer stillasittande. Men att ta korta pauser är viktigt för din psykiska och fysiska hälsa. Det finns flertalet appar för datorn som påminner dig om att ta en paus från ditt arbete. Via en notis eller ett alarm får du reda på när det är dags för en bensträckare. ErgoPop, Microbreak och Pausit  är några exempel på dessa appar. Passa då på att röra på dig lite för att piggna till – det räcker att gå några vändor i hemmet eller att göra några utfallssteg.\n 
    3: Träna på lunchen: Efter att de dagliga turerna till och från jobbet har försvunnit så är det av högsta vikt att ta pauser för att röra på sig. Allt från promenader till löprundor syresätter blodet, vilket gör dig piggare och gladare. Det är en enkel men effektiv aktivitet som fyller på dina energidepåer. \n
    4: Investera i enkla träningsredskap att ha hemma: Ett annat alternativ för att få mer vardagsmotion vid hemarbete är att investera i träningsredskap. Gummiband, balansplattor, hantlar och yogamattor är utmärkta verktyg för att hålla igång träningen hemma. Det ger dig möjligheten till att hålla muskulaturen i trim, utan att behöva gå till ett gym. \n
    5: Utmana kollegor och inspirera varandra: För att hålla motivationen uppe är det viktigt att bli inspirerad. Därför kan det vara en idé att utmana dina kollegor. Introducera en utmaning i veckan där ni får hitta på olika träningsövningar som ni ska genomföra under veckans gång. En sådan utmaning kan vara att göra minst 10 squats per dag i en vecka, eller att gå 10 000 steg per dag i en vecka. Att träna i grupp stärker sammanhållningen samtidigt som det förbättrar din hälsa.`,
  }, 
  {
    title: "Tips för hälsosammare medarbetare.",
    date: new Date("2020-10-22"),
    image: tipshalsosamaremedarbetare,
    text: `Forskning visar att hälsans ROI är hela 1:5 när man lyckas aktivera sin personal. Arbetsgivaren får i genomsnitt tillbaks 5 kr för varje satsad krona ( i ökad produktivitet, frisknärvaro & kreativitet) Ett tips mot hälsosammare medarbetare:\n

    Visa att ni tänker långsiktigt och på alla medarbetare, genom att sätta en hälsoplan. Där man börjar med en kartläggning , när man fått fram rapporter och vet vad medarbetare behöver på gruppen då börjar man jobba med föreläsningar och utbildningar.\n
    
    Och som individ kan man få individuell coaching, träningsupplägg, samtal kostråd och bra tips som stämmer överens med just din egna profil.\n
    
    Med vårt systemstöd blir vi er digitaliserande hälsostrateg, som hjälper våra kunder planera och genomföra exakt de som passar på ert företag för att öka välbefinnandet och jobba med Lönsam – Friskvård. På riktigt!`
  },
  {
    title: "Vardagsmortion",
    date: new Date("2020-09-18"),
    image: vardagsmortion,
    text: `Vi är många som har behövt bryta och byta våra rutiner. Bland annat när vi jobbar på distans och vill få till vardagsmotionen ändå. Att titta på stegräknaren och inse att du vid lunchtid tagit 800 steg kan ge en viktig signal om för lite rörelse. På med skorna och in med hörlurarna, här ska promeneras. YouGoHealthplan ger dig några motiverande tips.`
  },
  {
    title: "Vi på Yougohealthplan har blivit återförsäljare av Smart Break !",
    date: new Date("2020-06-22"),
    image: yougologo,
    text: `Detta är Smart Breaks historia \n
    Smart Break är en produkt som kom från våra egna problem hos Raisoft LTD , ett IT-företag inom sjukvård, som specialiserat sig på evidensbaserade lösningar. Vi skapade en lösning som hjälpte våra egna arbetare att bli mer energiska och produktiva, samtidigt som vi behandlade problemen som följer med sittande. \n
    
    Stillasittande jobb och de hälsorisker som följer dem är de viktigaste drivkrafterna som möjliggör Smart Break. Genom att tillhandahålla en lösning för arbetarna att hålla sig friska är Smart Break också ett enkelt sätt att arbeta smart.\n
    
    Efter några år i vårt eget företag testade vi det i olika miljöer innan vi öppnade det för allmänheten. Efter att ha sett effekterna av Smart Break på företagen i våra pilotprogram, bestämde vi oss att det träffade tre huvudpunkter:\n
    
    - Förbättra kontorshälsokulturen \n
    - Förena människor \n
    - Ekonomiskt fördelaktigt`
  },
  {
    title: "Tips till dig som jobbar hemifrån",
    date: new Date("2020-04-23"),
    image: tipsjobbahemifran,
    text: `Arbeta effektivt hemifrån

    Det är många som uppmanas att arbeta hemifrån i dessa coronatider, men hur gör du egentligen för att upprätthålla effektiviteten? Studier visar att 45 % av det vi gör på en dag går på rutin, vilket betyder att du lätt faller in i ett beteende som du associerar med en speciell miljö. Hemma kanske snarare får dig att tänka på Netflix och stryktvätt, än siffror och administration? \n
    
    Åtta bra saker att tänka på när du arbetar hemifrån: \n
    
    1. Sätt upp en arbetsplats hemma \n
    Sitt vid ett skrivbord om du har möjlighet till det, köksbordet är annars att föredra framför sängen och den sköna soffan i vardagsrummet. Se till att ha en bra stol och bra ljus. \n
    2. Förbered dig på en vanlig jobbdag \n
    Nu när man sparar tid på vägen till och från arbetet. Använd denna stund till morgon träning eller en go morgon promenad, för att komma igång och känna att man får energi. Kanske man kan skapa en ny rutin som håller i sig även efter corona. Gå upp, duscha, klä på dig och ät en energifull frukost. \n
    3. Gör en plan för dagen \n
    Stäm av varje dag med din chef och dina kollegor vad som behöver göras och gör en detaljerad tidsplan för dagens arbetsuppgifter. \n
    4. Kommunicera kontinuerligt \n
    Kolla mailen löpande under dagen och se till att vara tillgänglig på andra plattformar som din arbetsplats använder. Skriv till dina kollegor i gruppchatten eller prata med varandra på videolänk för att bryta ensamheten och för att upprätthålla teamarbetet. \n
    5. Minimera distraktioner \n
    Du känner dig själv bäst, vad fångar lättast din uppmärksamhet när chefen inte har koll? Stäng av alla aviseringar, radera appar och logga ut från streamingkonton. \n
    6. Planera lunch i förväg \n
    Börja lunchen med en promenad. Det är lätt att glömma bort att äta när du arbetar hemifrån och plötsligt blir du akut hungrig. Se till att ha förberedda matlådor som du snabbt kan värma. Motstå frestelsen att konstant småäta under dagen. \n
    7. Planera dina pauser \n
    Paus är viktigt för effektivitet och återhämtning. Se till att ställa dig upp och röra på dig helst varje halvtimme. Arbete och paus glider lätt in i varandra, kom ihåg att ställa klockan även i pausen. \n
    8. Undvik hushållsarbete under arbetstid \n
    Bli inte automatiskt ansvarig för hushållssysslor bara för du är den som arbetar hemifrån. Tvätta, städa, stryka och laga mat ska inte göras under arbetstid.
     `
  },
  {
    title: "FÖREBYGGANDE ARBETSMILJÖARBETE GÄLLANDE CORONAVIRUS",
    date: new Date("2020-03-17"),
    image: coronatips,
    text: `På grund av coronavirussjukdom (covid-19) rekommenderar YouGo Healthplan alla arbetsgivare och HR att vidta strategier och åtgärder för att minska risken för generell smittspridning. \n

    En arbetsgivare ur ett arbetsmiljöperspektiv behöver göra en bedömning avseende risken för smittspridning och för arbetstagarna. Riskbedömningen bör också innefatta vilken följd medarbetarnas eventuella oro kan få för den organisatoriska och sociala arbetsmiljön. \n
    
    I det fall risker för smittspridning finns måste åtgärder vidtas för att minimera dessa. Som ett led i arbetsmiljöarbetet är det lämpligt att kommunicera policy för hur smittspridningsrisken ska minskas samt rörande vad som gäller vid befarad eller inträffad smitta. \n
    
    En sådan policy kan innehålla följande punkter: \n
    
    Covid-19 symtom. De symtom som rapporterats vara vanligast vid coronavirus sjukdom är feber (över 38°C) och luftvägssymtom. Hos svårt sjuka patienter ses också andningssvårigheter. Mer ospecifika symtom finns också rapporterade hos en mindre andel av fallen. \n
    
    Idag bedömer Folkhälsomyndigheten att covid-19 smittar först i samband med insjuknandet och under tiden patienten är sjuk. Den kunskap och erfarenhet som finns just nu tyder på att personer inte smittar under inkubationstiden, det vill säga tidsrymden mellan smittotillfället och när sjukdomen börjar orsaka symptom. Inkubationstiden bedöms vara mellan 2–14 dagar och de flesta insjuknar efter ca 5 dagar. \n
    
    Rutiner vid symtom på sjukdom. Arbetstagare skall ha tydlig och väl kommunicerad rutin vid sjukdoms symtom både hemma och på arbetsplatsen. Rutinerna kan innebära att direkt kontakta husläkaren, företagsläkaren, HR och skyddsombud. \n
    
    Oro och stress. Ökad oro kan skapa långvarig stresspåslag och leda till att man inte har några reserver kvar för påfrestningar på arbetet eller hemma. Därför är det ytterst viktigt att ha tydlig kommunikation och tydliga riktlinjer hur arbetstagaren kan få hjälp i sin situation. Varje arbetsplats ska ha en policy kring hur sjukskrivna ska rehabiliteras och kunna komma tillbaka till arbetslivet. Om arbetsgivaren är ansluten till företagshälsovård kan personalen där bidra i arbetet för en god arbetsmiljö. \n
    
    För att göra första bedömningen om sin stress och utmattning erbjuder 1177.se ett validerat utmattningstest: https://stressmottagningen.se/pa-vag-till-utmattning/ \n
    
    Undvik sjuknärvaro. Vid upplevelse av symtom ska man stanna hemma tills dessa försvunnit helt, oavsett om personen har besökt områden med pågående smittspridning eller ej. En policy kan även innehålla begränsningar och säkerhetsrutiner för besökare på arbetsplatsen. \n
    
    Tjänsteresor. Resor till områden med konstaterad smittspridning bör undvikas i möjligaste mån. \n
    
    Karantän. Arbetstagare som har varit i någon utav riskzonerna eller på annat sätt misstänks ha utsatts för smitta bör ombes att i största möjliga mån arbeta hemifrån. Utifrån sjukdomens smittningstider kan man överväga hur lång tid eventuell karantän för arbetstagare skall vara. \n
    
    Städrutiner. Coronaviruset sprids genom droppsmitta, huvudsakligen vid nära kontakt mellan människor. Studier som utförts på närbesläktade virus visar att de kan överleva flera dagar på ytor och föremål. Därför bör dörrhandtag, vattenkranar och ytor som ofta vidrörs, rengöras med desinfektionsmedel regelbundet.
    
    Hygienrutiner. Förebyggande åtgärder mot luftvägsinfektioner i allmänhet innefattar att undvika att röra sig själv i ansiktet, särskilt vid munnen och ögonen samt att undvika nära kontakt med sjuka människor. Det hjälper även att tvätta händerna ofta med tvål och varmt vatten, särskilt före måltider, mathantering och efter ett toalettbesök. Handsprit kan också vara ett alternativ när inte möjlighet till handtvätt finns. Att hosta och nysa i armvecket eller i en pappersnäsduk hindrar också smitta från att förorena ens händer och från att spridas i omgivningen.
    
    Arbete hemifrån. Ett flertal av våra kunder där verksamheten inte kräver fysisk kontakt har ökat möjligheterna att jobba hemifrån. Större möten kan i många fall ersättas med telefon- och videomöten.
    
    Tydlighet och kommunikation. Arbetsgivare bör kommunicera öppet med alla på arbetsplatsen vad som gäller för att undvika onödig oro och ryktesspridning. Hänvisa till Folkhälsomyndighetens frågesida och Sveriges nationella informationsnummer 11313. Vid misstänkta symtom hänvisa till Vårdguiden 1177.`
  },
  {
    title: "Vad kostar en sjukskrivning arbetsgivaren?",
    date: new Date("2020-03-09"),
    image: vadkostarsjukskrivning,
    text: `Att sjukfrånvaron blir dyr för både den som är sjuk och för samhället vet vi ju redan, men hur mycket kostar sjukskrivningarna arbetsgivaren egentligen? Det beror självklart på hur höga sjuktal arbetsplatsen har och vad den sjuke har i lön. Om vi räknar med en snittlön på 30 000 kronor i månaden (den ungefärliga medianlönen i Sverige) och ett sjuktal på 10 dagar (sjukpenningtalet 2018) kostar de tio sjukdagarna arbetsgivaren nästan 20 000 kronor (det är arbetsgivaren som betalar sjuklönen dag 2-14). På en arbetsplats med 50 anställda landar då den årliga kostnaden för sjukfrånvaron på närmare en miljon kronor. (Vill du själv räkna på hur mycket sjukfrånvaron kostar din organisation har Försäkringskassan ett användbart kalkylverktyg på sin hemsida). \n

    Det här är bara kostnaderna för sjuklönen. När någon blir sjuk följer det med många andra extrakostnader, till exempel för övertid, produktionsbortfall, ökad administration, vikarier m.m. Rör det sig dessutom om en längre sjukskrivning kan det röra sig om många andra dolda kostnader. Forskare vid Linköpings universitet har undersökt extrakostnaderna vid långtidssjukskrivningar och fann att de som är på väg in i en lång sjukfrånvaro ofta har en lång tids sjuknärvaro innan de blir sjukskrivna då de presterar under sin förmåga på jobbet. Snittet för den sjuknärvaron låg på sju veckor då den anställde bara orkar ge hälften av sin normala nivå. Det tar dessutom ungefär lika lång tid att komma upp i sin normala förmåga igen efter en längre sjukskrivning. Undersökningen kom fram till att utöver sjuklönen kostar den sjukskrivne i snitt cirka 100 000 kronor i minskad produktivitet och ökat merarbete innan, under och efter sin sjukfrånvaro.`
  },
  {
    title: "Löpning är ett superpiller",
    date: new Date("2020-02-05"),
    image: lopningbastapillret,
    text: `Löpning är ett superpiller för både fysisk och mental hälsa. I tio år har man forskat på detta. Och forskningen visar på många olika sätt att det just är så. \n

    Nya intressanta ämnen kommer och går, men löpning och mental hälsa består. \n
    
    En studie från Black Dog institute som publicerades 2017 visade att personer som inte tränade hade 44 procent ökad risk att utveckla depression jämfört med de som motionerade en till två timmar i veckan. På något sätt tycks fysisk aktivitet motverka depression. \n
    
    Benen hjälper hjärnan! \n
    När du är stressad omvandlas aminosyran tryptofan till kynurenin. En del kynurenin tar sig in i din hjärna, där forskarna har kopplat samman det med depression och ångest. Men när du springer omvandlas kynurenin till kynurensyra och kynurensyra kan inte  ta sig igenom blodhjärnbarriären utan försvinner med urinen. De har forskare på Karolinska institutet kunnat visa. På så sätt skyddar dina benmuskler din mentala hälsa. Musklerna renar kroppen precis som njurar och lever. De spolar ner stressen efter träningspasset. \n
    
    källa :Karolinska institutet.`
  },
  {
    title: "Kristina Christofferson Hotell direktör på Nääs Fabriker, har medarbetarnas hälsa i fokus.",
    date: new Date("2020-01-30"),
    image: naas,
    text: `Vi tackar Nääs fabriker  för förtroendet att tillsammans under 2020 sätta medarbetarnas hälsa i fokus. \n

    Kristina som är hotell direktör, bryr sig om sina medarbetare och vill ge dem förutsättningarna för att öka sin individuella hälsa och livskvalité samt skapa en attraktiv, trivsam, hållbar och lönsam arbetsplats för alla inblandade. \n
    
    Till skillnad mot traditionell företagshälsovård, som oftast träder in när medarbetare redan är sjuka, arbetar vi på YouGo HealthPlan förebyggande för att tidigt fånga upp signaler om ohälsa. Och arbeta proaktivt. \n
    
    I vår digitalaplattform samlar vi in data, som gör medarbetarnas mående och hälsa mätbart. Därefter erbjuder vi riktade insatser som främjar hälsoutvecklingen. \n
    
    Vi är övertygade om att Humankapitalet är den absolut viktigaste resursen på en arbetsplats och vi vet genom forskning att medarbetare behöver må bra för att göra ett gott jobb. \n
    
    Vi ser med spänning framemot att följa Nääs Fabriker  under året.`
  },
  {
    title: "Få väljer att lyssna på livsmedelsverket – här är 3 skäl till att du borde göra det.",
    date: new Date("2020-01-30"),
    image: tallriksmodellen,
    text: `Vem eller vad har störst påverkan på dina kostvanor? Den frågan ställde vi till svenskarna genom Sifo ifjol – och endast 3 procent svarade att Livsmedelsverket hade någon påverkan. De flesta, nästan var tredje, uppgav istället familjen.\n

    Nu har vi återigen fått bekräftat att Livsmedelverkets råd inte har särskilt stor betydelse för svenskarnas matvanor. För tre år sedan uppdaterade Livsmedelsverket sin berömda tallriksmodell genom att anpassa matintaget beroende på om man rör på sig mycket eller inte. Men vår senaste undersökning visar att få gör just det; 2 av 3 anpassar inte tallriksinnehållet efter sina motionsvanor.\n
    
    Vi på WW ViktVäktarna tycker att Livsmedelsverket förtjänar svenskarnas uppmärksamhet. Här är tre skäl till varför: \n
    
    1. Uppsjö av dietaktörer på sociala medier. Idag finns det många olika självutnämnda experter på kostområdet, kanske främst i sociala medier, och många av dessa saknar en vetenskaplig grund. Livsmedelsverkets rekommendationer är emellertid alltid grundade på vetenskap och du kan vara säker på att informationen från dem är pålitlig.\n
    2. Modeller anpassade efter fysisk aktivitet. Att vi behöver få i oss olika mängd mat beroende på hur mycket vi rör på oss är för de allra flesta en självklarhet. Men hur mycket vi behöver kan vara svårt att veta på rak arm. Därför är det extra smidigt att kunna ta del av Livsmedelverkets anpassade tallriksmodell beroende på hur mycket eller lite du rör på dig.\n
    3. Utgångspunkt i NNR 2012. Nordiska näringsrekommendationerna (NNR 2012) är de officiella rekommendationer som används i Sverige. Livsmedelsverkets råd om bra matvanor har uppdaterats med utgångspunkt i NNR 2012. Dessa råd visar hur man kan äta för att få i sig den mängd vitaminer och mineraler, protein, fett och kolhydrater som rekommenderas i näringsrekommendationerna.`
  },
  {
    title: "Vi skulle vilja uppmana fler att se sina medarbetare och till en högre grad ställa sig frågan hur mår och går min organisation!",
    date: new Date("2020-01-23"),
    image: hurmarorganisation,
    text: `När organisationer tar in medarbetarundersökningar sätts organisationskulturen för hur arbetsgivaren/organisationen vill förstå medarbetarens dagliga arbetsupplevelse. Om vi bara ställer frågor kring engagemang, hur medarbetarna trivs och arbetar i team, och med sin ledare, men inget om medarbetarens egna välmående så säger det indirekt att hälsa inte är något som prioriteras.
    Det kanske låter hårddraget, men beteenden från HR och ledare är de starkaste influenserna som påverkar organisationskulturen och arbetsklimatet. Vi skulle vilja uppmana fler att se sina medarbetare och till en högre grad ställa sig frågan hur mår och går min organisation? Ta in medarbetarundersökningar med ett större fokus på hälsa. Utan välmående, så är det svårt att gå framåt. Många kan känna engagemang och vara drivna, men det är viktigt att den känslan får vara långvarig. Om vi inte mår bra i engagemanget och drivet, så är det lätt att det i slutänden leder till något negativt, och det vill ju ingen! \n
    
    Engagemangsmätning är en typ av medarbetarundersökning där medarbetarens engagemang fungerar som ett övergripande mätvärde för att förstå prestation och utveckling. Ett mätvärde som blivit allt mer vanligt att utgå ifrån vid utvärdering av medarbetarens upplevelse av arbetsplatsen. Frågan är, är det det bästa begreppet att utgå ifrån? En studie från Harvard menar på att även fast mental ohälsa börjar bli ett allt mer accepterat begrepp och stigmat kring det har börjat försvinna i privatliv så hänger det fortfarande kvar i arbetslivet. Nu kanske ni tänker, vänta lite, hur har detta koppling till engagemangsmätningar? Det har mycket att göra med det skulle vi säga.`
  },
  {
    title: "Europeiska unionen och Wold Health Oranizations rapport!",
    date: new Date("2020-01-09"),
    image: worldhealth,
    text: `Om psykisk ohälsa som publicerades 2018 beräknas den totala kostnaden för Sverige 2015 till 21,7 miljarder euro, vilket motsvarar närmare 5 procent BNP!! \n

    De direkta kostnaderna i hälso- och sjukvårdssystemet beräknas uppgå till 5,7 miljarder euro till direkta kostnader i socialförsäkringssystemet till 7,5 miljarder euro. De indirekta kostnaderna främst kopplade till arbetsmarknaden, uppgick till 8,5 miljarder euro. \n
    
    Ser en ofantlig potential här både för samhället,näringslivet och individen ! De 10 miljarder som regeringen avsatt har enligt rapporten inte fått den ökande psykiska ohälsan att minska. \n
    
    Att arbeta strategiskt med välmående kopplat till affären tror jag är den självklara lösningen för ett hållbart arbetsklimat. Det är då man skapar långsiktighet, lönsamhet och konkurrenskraft`
  },
  {
    title: "Nytt år nya möjligheter",
    date: new Date("2020-01-07"),
    image: nyttar2020,
    text: `Kanske lite uttjatad mening, men vi känner ändå att möjligheterna inför 2020 är större än någonsin. Vi vet att behovet av stöd runt sin individ hälsa behövs och vi vet att man på företag och organisationer verkligen behöver se över hur de anställda mår. \n

    Så vi är energifulla och kommer med kraft hjälpa till att göra  Sverige friskare, och vi börjar NU! Välkomna tillsammans med oss att möta 2020. Ett härligt hälso år. Världshälsoorganisationen, WHO, definierar hälsa som “ett tillstånd av fullständigt fysiskt, psykiskt och socialt välbefinnande, inte endast frånvaro av sjukdom eller funktionsnedsättning” och så säger vi på Yougohealthplan också.`
  },
];

export default posts;