// import { Link } from "react-router-dom";

export default function Home() {
  return (
    <> 
      <link rel = "stylesheet" href="home.css"/> 
      <header className = "colorful-header">
        <div className = "blue-band"></div>
        <div className = "red-band"></div>
        <div className = "yellow-band"></div> 
        <p className = "title">Trackorithms</p>
      </header> 
      <div>
          <img className ="main-photo" src="train3.png"/>
      </div>
      <div className ="main-grid">
          <button className = "leader-board">
              LEADER BOARD
              <img className ="leader-photo" src="leader3.png"/>
          </button>  
          <button className = "play">
              PLAY 
          </button>  
          <button className = "how-to">
              TUTORIAL 
              <img className ="tut-photo" src="tutorial-photo.png"/>
          </button> 
      </div> 
    </>
  );
}
