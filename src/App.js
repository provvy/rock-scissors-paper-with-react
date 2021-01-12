import './App.css';
import Score from "./components/Score.js";
import Event from "./components/Event.js";
import Button from "./components/Button.js";
import React, {useState, useEffect} from "react";

function App() {

  let [userScore, setUserScore] = useState(null);
  let [compScore, setCompScore] = useState(null);
  const [buttons, setButtons] = useState([
  { src: "https://i.imgur.com/5aw99wQ.png",
    alt: "Rock image",
    id: "Rock",
    play: "r"
  },
  { src: "https://i.imgur.com/I8PMMF5.png",
    alt: "Paper image",
    id: "Paper",
    play: "p"
  },
  { src: "https://i.imgur.com/A7fQj0G.png",
    alt: "Scissors image",
    id: "Scissors",
    play: "s"
  }
  ]);
  const [outcome, setOutcome] = useState("");
  const [compChoices, setCompChoices] = useState("");

  useEffect(() => {
    setUserScore(0);
    setCompScore(0);
    setOutcome("Prova a battermi!");
    setCompChoices(["r", "p", "s"]);
  }, []);

  const playGame = (value) => {
    const generateIndex = () => {
      return Math.floor(Math.random() * compChoices.length);
    };
    let compChoice = compChoices[generateIndex()];
    let challenge = value + compChoice;
    switch(challenge) {
      case "rr":
        setOutcome("Sasso contro sasso. È un pareggio!");
        break;
      case "rp":
        setCompScore(compScore += 1);
        setOutcome("Sasso contro carta. Hai perso!");
        break;
      case "rs":
        setUserScore(userScore += 1);
        setOutcome("Sasso contro forbici. Hai vinto!");
        break;
      case "pr":
        setUserScore(userScore += 1);
        setOutcome("Carta contro sasso. Hai vinto!");
        break;
      case "pp":
        setOutcome("Carta contro carta. È un pareggio!");
        break;
      case "ps":
        setCompScore(compScore += 1);
        setOutcome("Carta contro forbici. Hai perso!");
        break;
      case "sr":
        setCompScore(compScore += 1);
        setOutcome("Forbici contro sasso. Hai perso!");
        break;
      case "sp":
        setUserScore(userScore += 1);
        setOutcome("Forbici contro carta. Hai vinto!");
        break;
      case "ss":
        setOutcome("Forbici contro forbici. È un pareggio!");
        break;
    };
  }

  if (userScore === 15) {
    return (
      <div className="win-div">
        <h1>Complimenti, hai vinto!</h1>
        <button className="reload-button" onClick={() => window.location.reload()}>Gioca ancora</button>
      </div>
    );
  } else if (compScore === 15) {
    return (
      <div className="lost-div">
        <h1>Purtroppo hai perso!</h1>
        <button className="reload-button" onClick={() => window.location.reload()}>Gioca ancora</button>
      </div>
    );
  }

  return (
    <div id="container" className="container">
      <header className="header">Sasso Carta Forbici</header>
      <Score userScore={userScore} compScore = {compScore} />
      <Event outcome={outcome} />
      <div className="button-div" id="button-div">
        {buttons.map(button => {
          return <Button onclick={() => playGame(button.play)} src={button.src} alt={button.alt} id={button.id}/>
        })}
      </div>
      <footer className="footer">Fai la tua mossa.
      <p>coded by Paolo Provveduto</p></footer>
    </div>
  );
}

export default App;
