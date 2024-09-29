import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import maxCarolinePhoto from "./assets/2 Broke Girls.jpeg"; // Replace with your image
import "./sprinkles.css"; // Import CSS for sprinkles animation

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
  const [showSprinkles, setShowSprinkles] = useState(false); // To show sprinkles on button click
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handleButtonClick = () => {
    setShowSprinkles(true); // Trigger sprinkle animation
    setTimeout(() => navigate("/birthday"), 1000); // Navigate after 1 second
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-primary text-lightAccent p-4 relative">
      {/* Sprinkles animation */}
      {showSprinkles && <div className="sprinkles"></div>}

      {/* Photo card section */}
      <div className="card w-full md:w-80 bg-secondary shadow-xl mb-6">
        <figure>
          <img
            src={maxCarolinePhoto}
            alt="Max and Caroline"
            className="w-full object-cover rounded-lg"
          />
        </figure>
        <div className="card-body text-center">
          <p className="text-lg font-rancho">
            “We’re 3 broke girls, but instead of cupcakes, we’ll open a farm!
            Caroline, I'll be your Max, and Nadda will be Cmax!”
          </p>
        </div>
      </div>

      {/* Countdown timer */}
      <h1 className="text-5xl font-rancho mb-6">Countdown to the Surprise!</h1>
      <div className="text-6xl font-bold">{formatTime(timeLeft)}</div>

      <p className="text-xl mt-4 text-center font-light">
        Hold tight for 15 minutes — Max says, "Good things come to those who
        wait!"
      </p>

      {/* Navigation Button */}
      <button
        className="btn bg-gradient-to-r from-yellow-400 to-pink-500 text-white mt-10 hover:from-yellow-300 hover:to-pink-400 transition-all"
        onClick={handleButtonClick}
      >
        Let’s Go!
      </button>
    </div>
  );
};

export default CountdownTimer;
