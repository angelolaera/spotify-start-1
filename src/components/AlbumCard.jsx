// src/components/AlbumCard.jsx
import React from "react";

const AlbumCard = ({ album, onSelect }) => {
  return (
    <div className="album-card bg-transparent border-0" onClick={() => onSelect(album)}>
      <img className="w-75" src={album.album.cover_medium} alt={album.album.title} />
      <h3 className="text-white mt-2">{album.album.title}</h3>
      <p className="text-white">{album.artist.name}</p>
      <button className="favorite-button">❤️</button>
    </div>
  );
};

export default AlbumCard;
