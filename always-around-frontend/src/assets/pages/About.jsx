const About = () => {
  return (
    <section className="about-content">
      <div className="idea-behind-project">
        <h2 className="about-content-header">Idén bakom projektet</h2>
        <p className="about-content-text">
          De senaste 10 åren har jag jobbat som personlig assistent och jag har
          trivts med det jag har gjort otroligt bra. Jag har alltid haft
          intresse för teknik, men just det där att jobba med människor och
          hjälpa andra har kommit så pass naturligt för mig att jag bara inte
          kunde låta bli att "rida" på den vågen. Det har varit en givande och
          lärorik resa, men nu är det dags för nästa.<br></br>
          <b>Idén bakom projektet</b> föddes då jag velat göra mitt
          examensarbete i form av något konkret och användbart för "någon". I
          det här fallet blev det till min individ.<br></br>
          <b>Always around</b> är en samling av videosnuttar som jag tagit under
          tiden vi har varit tillsammans. Meningen är att en assistent ska hälpa
          henne sätta igång det och sen ska hon kunna trycka på skärmen, spela
          nästa video och helt enkelt "känna" att jag finns omkring.
          Applikationen ska också ge en viss stimulans genom själva tryckandet
          (trycka-hända dvs. träna orsak och verkan).
          <br></br>Min vision för Always around är mycket större, tiden och
          omfånget av detta examensarbete täcker inte det.
        </p>
      </div>
      <div className="workflow-of-project">
        <h2 className="about-content-header">Lite om arbetsgången</h2>
        <p className="about-content-text">
          Jag började projektet med att göra en grov skiss av hela systemet.
          Tankeställningen jag hade när jag gjorde "skissen", vad ska
          applikationen göra egentligen, vad behöver jag för att få ihop
          applikationen (express, pug, react osv), hur interagerar de olika
          komponenterna med varandra? Med en första design i Figma, samt ett
          komponentdiagram i UML kände jag mig redo för att börja arbetet.{" "}
          <br></br>
          <br></br>Utifrån tankeställningen, designen och komponentdiagramet så
          gjorde jag en backlog med funktioner/komponenter som jag "trodde" att jag
          behövde. Detta var en iterativ process där inläggen i backloggen
          ändrades och lades till under arbetets gång. <br></br>Nästa steg var
          att formulera Use Cases dvs. vilka aktörer ska använda systemet och
          vad ska dessa aktörer kunna göra. Under tiden jag funderade på Use
          Cases så försökte jag också ta fram kraven för applikationen.<br></br>
          <br></br>
          Nu när formuleringen av applikationen, use cases, krav och backloggen
          började ta form, så var det dags att börja omvandla detta till kod.{" "}
          <br></br>Jag började med att skapa ett repo på GitHub, sedan
          installerade jag alla beroenden som jag kom fram till att jag behövde
          (express, nodemon, pug, jsonwebtoken, multer, dotenv, cookie-parser
          (backend), sass och vite för react (frontend)). <br></br>
          Efter att jag hade en boilerplate med alla beroenden på plats, så
          började jag att jobba på fronenden, vilka sidor som ska finnas och hur
          dessa ska se ut. Sedan hoppade jag på backenden som skulle serva
          applikationen, samt ett admin interface för att hantera applikationen
          (logga in, ladda upp nya videos, ta bort en video). Nu med både
          frontend och backend på plats lade jag mitt fokus på detaljerna samt
          en controller för Emilié så att hon kan styra videouppspelningen.{" "}
          <br></br>
          <br></br>
          <b>Det färdiga resultatet ser du framför dig! </b>
        </p>
      </div>
    </section>
  );
};

export default About;
