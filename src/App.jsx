// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomePage from "./components/HomePage";
import ArtistPage from "./components/ArtistPage";
import Player from "./components/Player";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <Router>
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/artist" element={<ArtistPage />} />
        </Routes>
        <Player />
      </div>
    </div>
  </Router>
);

export default App;
