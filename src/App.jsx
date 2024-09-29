import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import CountdownTimer from "./CountdownTimer";
import BirthdayCard from "./BirthdayCard";
import PhotoGallery from "./PhotoGallery";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CountdownTimer />} />
        <Route path="/birthday" element={<BirthdayCard />} />
        <Route path="/gallery" element={<PhotoGallery />} />
      </Routes>
    </Router>
  );
}

export default App;
