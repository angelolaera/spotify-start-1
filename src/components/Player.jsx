// src/components/Player.jsx
import React from "react";
import { useSelector } from "react-redux";

const Player = () => {
  const selectedAlbum = useSelector((state) => state.albums.selectedAlbum);

  if (!selectedAlbum) return null;

  return (
    <div className="player">
      <h2>{selectedAlbum.artist.name}</h2>
      <img src={selectedAlbum.album.cover_medium} alt={selectedAlbum.album.title} />
      <audio controls>
        <source src={selectedAlbum.album.tracklist} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Player;
