// src/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar"; // Assicurati che SearchBar sia importato

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Spotify_icon.svg" alt="Spotify Logo" />
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/favorites">Preferiti</Link>
      </nav>
      <SearchBar />
    </div>
  );
};

export default Sidebar;
