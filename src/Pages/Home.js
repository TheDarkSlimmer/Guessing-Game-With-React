import { Fragment, useState } from "react";
import homeStyles from "../Pages/Home.module.css";

export default function Home(props) {
  const [number, setNumber] = useState("?");
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("Start guessing...");
  let [score, setScore] = useState(20);
  const [highscore, setHighscore] = useState(0);
  const [rightNumber, setRightNumber] = useState(
    Math.trunc(Math.random() * 50) + 1
  );
  const [color, setColor] = useState("#99f6ff");

  function againButton() {
    setRightNumber(Math.trunc(Math.random() * 50) + 1);
    setMessage("Start guessing...");
    setNumber("?");
    setScore(20);
    setGuess("");
    setColor("#99f6ff");
  }
  const errorCheck = () => {
    if (!guess) {
      setMessage("❌No Number");
      setColor("#fff");
    } else if (Number(guess) < 0 || Number(guess) > 50) {
      setMessage("Please enter a number between 1 and 50");
      setColor("#fff");
    } else if (Number(guess) === rightNumber) {
      setScore(score);
      setMessage("✅Correct Number");
      setNumber(rightNumber);
      setColor("#caffbf");
      if (score > highscore) {
        setHighscore(score);
      }
    } else if (score > 0) {
      if (Number(guess) > rightNumber) {
        setMessage("❌Too High. Try Again!!!");
        setScore((s) => s - 1);
        setColor("#ffadad");
      } else if (Number(guess) < rightNumber) {
        setMessage("❌Too low. Try Again!!!");
        setScore((s) => s - 1);
        setColor("#ffadad");
      }
    } else {
      setMessage("💥You lost the game");
      setScore(0);
      setNumber(rightNumber);
    }
  };

  function numberHandler(e) {
    setGuess(e.target.value);
  }
  return (
    <div className="home-main">
      <div className="home-container">
        <div className={homeStyles.homeHeader}>
          <h1>Guess My Number!</h1>
          <div className={homeStyles.homeBetween}>
            <button className={homeStyles.buttonAgain} onClick={againButton}>
              Again!
            </button>
            <p>(Between 1 and 50)</p>
          </div>
          <div className={homeStyles.number}>{number}</div>
        </div>
        <div className={homeStyles.homeMain}>
          <div className={homeStyles.gameContainer}>
            <div className={homeStyles.left}>
              <input
                type="number"
                className={homeStyles.guess}
                onChange={numberHandler}
                value={guess}
              />
              <br />
              <button className={homeStyles.check} onClick={errorCheck}>
                check!
              </button>
            </div>
          </div>
          <div className={homeStyles.right}>
            <p
              className={homeStyles.message}
              style={{ backgroundColor: color }}
            >
              {message}
            </p>
            <p className={homeStyles.labelScore}>
              💯 Score: <span className={homeStyles.score}>{score}</span>
            </p>
            <p className={homeStyles.labelHighscore}>
              🥇 Highscore:{" "}
              <span className={homeStyles.highscore}>{highscore}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
