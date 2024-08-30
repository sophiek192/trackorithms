// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";
import "./home.css";
import Leader from "./leader3.png";
import Tutorial from "./tutorial-photo.png";
import Train from "./train3.png";

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
        <img className="main-photo" src={Train} />
      </div>
      <div className="main-grid">
        <button className="ricky-button leader-board">
          LEADERBOARD
          <img className="leader-photo" src={Leader} />
        </button>
        <Link to="/levels" className="ricky-button play">
          PLAY
        </Link>
        <button className="ricky-button how-to">
          TUTORIAL
          <img className="tut-photo" src={Tutorial} />
        </button>
      </div>
    </>
  );
}
