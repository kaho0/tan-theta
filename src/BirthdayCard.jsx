import React from "react";
import { useNavigate } from "react-router-dom";

const BirthdayCard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-primary">
      <div className="card w-96 bg-secondary shadow-xl">
        <figure>
          <img
            src="https://via.placeholder.com/300" // Replace with your actual image
            alt="Birthday"
            className="w-full h-48 object-cover"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title text-lightAccent text-4xl font-rancho">
            We are 3 Broke Girls!
          </h2>
          <p className="text-accent text-xl">
            Just like Max and Caroline opened their cupcake shop, we'll open a
            farm! Caroline, I will be your Max, and Nadda will be our Cmax.
          </p>
          <div className="card-actions justify-center">
            <button
              className="btn btn-accent text-primary"
              onClick={() => navigate("/gallery")}
            >
              What's More?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthdayCard;
