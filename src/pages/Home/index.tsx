import { Link } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';
import './style.css';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fetch the HTML file and insert it into the component
    fetch('./src/pages/Home/index.html') // Adjust the path based on your setup
      .then((response) => response.text())
      .then((html) => {
        if (containerRef.current) {
          containerRef.current.innerHTML = html;
        }
      })
      .catch((error) => console.error('Error loading HTML:', error));
  }, []);

  const handleLeave = () => {
    // Add the 'leave' animation class to trigger the final animation
    const trainElement = document.getElementById('Train');
    if (trainElement) {
      trainElement.style.animation = 'trainAnimationLeave 5s ease-in forwards';
    }
  };

  return (
    <div>
      <div ref={containerRef} />
      <div className="button-container">
        <button onClick={handleLeave}>Depart!</button>
      </div>
    </div>
  );
}