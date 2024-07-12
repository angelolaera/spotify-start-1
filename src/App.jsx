import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomePage from "./components/HomePage";
import ArtistPage from "./components/ArtistPage";
import Player from "./components/Player";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store/store";

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Router>
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/artist/:id" element={<ArtistPage />} />
          </Routes>
        </div>
        <Player />
      </Router>
    </div>
  </Provider>
);

export default App;
