import React from "react";
import { useNavigate } from "react-router-dom";
import office from "../assets/office.png";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-full">
      {/* Hero-Sektion */}
      <div className="relative h-[100vh] w-full">
        {/* Hintergrundbild */}
        <img
          src={office}
          alt="Office"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Schwarzes Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-white text-center px-4">
          {/* Titel */}
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Willkommen bei M-Yard
          </h1>
          {/* Schaltflächen */}
          <div className="space-y-6">
            {/* Button für MVV Monitor */}
            <button
              className="w-72 py-6 mx-4 text-2xl border-4 border-white text-white bg-transparent rounded-lg hover:bg-white hover:text-black transition duration-300"
              onClick={() => navigate("/mvv-monitor")}
            >
              MVV Monitor
            </button>
            {/* Button für Office Finder */}
            <button
              className="w-72 py-6 mx-4 text-2xl border-4 border-white text-white bg-transparent rounded-lg hover:bg-white hover:text-black transition duration-300"
              onClick={() => navigate("/office-finder")}
            >
              Office Finder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
