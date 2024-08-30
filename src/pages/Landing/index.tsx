// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";
import "./home.css";

export default function Landing() {
  return (
    <>
      <link rel="stylesheet" href="home.css" />
      <header className="colorful-header">
        <div className="blue-band"></div>
        <div className="red-band"></div>
        <div className="yellow-band"></div>
        <p className="title">Trackorithms</p>
      </header>
      <div>
        <img className="main-photo" src="train3.png" />
      </div>
      <div className="main-grid">
        <button className="ricky-button leader-board">
          LEADERBOARD
          <img className="leader-photo" src="leader3.png" />
        </button>
        <Link to="/levels" className="ricky-button play">
          PLAY
        </Link>
        <button className="ricky-button how-to">
          TUTORIAL
          <img className="tut-photo" src="tutorial-photo.png" />
        </button>
      </div>
    </>
  );
}
