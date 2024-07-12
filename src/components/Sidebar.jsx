// src/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar"; // Assicurati che SearchBar sia importato
import logo from "../assets/logo.png";
import { Button } from "react-bootstrap";

const Sidebar = () => {
  return (
    <div className="sidebar bg-black d-flex flex-column justify-content-between">
      <div>
        <div className="logo">
          <img className="w-100" src={logo} alt="Spotify Logo" />
        </div>
        <nav>
          <Link className="mt-2" to="/">
            Home
          </Link>
          <Link className="mt-2" to="/favorites">
            Preferiti
          </Link>
        </nav>
        <div className="d-flex gap-1">
          <SearchBar />
          <Button variant="transparent" className="border border-1 text-white">
            GO
          </Button>
        </div>
      </div>

      <div className="d-flex flex-column">
        <Button className="mt-2 rounded-5 p-2" variant="light">
          ACCEDI
        </Button>
        <Button className="mt-2 rounded-5 p-2 border border-1 text-white" variant="transparent">
          REGISTRATI
        </Button>
        <p className="text-secondary text-center mb-0 py-1">Cookie Policy | Privacy</p>
      </div>
    </div>
  );
};

export default Sidebar;
