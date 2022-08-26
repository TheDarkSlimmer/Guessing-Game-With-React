import { Fragment } from "react";
import homeStyles from "../Pages/Home.module.css";

export default function Home(props) {
  return (
    <Fragment>
      <div className={homeStyles.homeHeader}>
        <h1>Guess My Number!</h1>
        <div class={homeStyles.homeBetween}>
          <button className={homeStyles.buttonAgain}>Again!</button>
          <p>(Between 1 and 50)</p>
        </div>
        <div className={homeStyles.number}>?</div>
      </div>
      <div className={homeStyles.homeMain}>
        <div className={homeStyles.gameContainer}>
          <div className={homeStyles.left}>
            <input type="number" className={homeStyles.guess} />
            <br />
            <button className={homeStyles.check}>Check!</button>
          </div>
        </div>
        <div className={homeStyles.right}>
          <p className={homeStyles.message}>Start guessing...</p>
          <p className={homeStyles.labelScore}>
            💯 Score: <span className={homeStyles.score}>20</span>
          </p>
          <p className={homeStyles.labelHighscore}>
            🥇 Highscore: <span className={homeStyles.highscore}>0</span>
          </p>
        </div>
      </div>
    </Fragment>
  );
}
