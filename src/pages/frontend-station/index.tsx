import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

export default function Home() {
  const containerRefFrontEndStation = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fetch the HTML file and insert it into the component
    fetch('./src/pages/Home/frontendStation.html') // Adjust the path based on your setup
      .then((response) => response.text())
      .then((html) => {
        if (containerRefFrontEndStation.current) {
          containerRefFrontEndStation.current.innerHTML = html;
        }
      })
      .catch((error) => console.error('Error loading HTML:', error));
  }, []);

  const navigate = useNavigate();

  const handleLeave = () => {
    // Trigger the train leave animation
    const trainElement = document.getElementById('Train');
    if (trainElement) {
      // Start the train leave animation
      trainElement.style.animation = 'trainAnimationLeave 5s ease-in forwards';

      // Listen for the end of the animation to navigate to a new page
      trainElement.addEventListener(
        'animationend',
        () => {
          // Navigate to the new page after the train has left
          navigate('/frontend-station'); // Update with the correct route or use window.location.href
        },
        { once: true } // Ensure the listener is called only once
      );
    }
  };

  return (
    <div>
      <div ref={containerRefFrontEndStation} />
      <div className="button-container">
        <button onClick={handleLeave}>Go to learn!</button>
      </div>
    </div>
  );
}