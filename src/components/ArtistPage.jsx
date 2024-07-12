// src/components/ArtistPage.jsx
import React from "react";
import { useSelector } from "react-redux";

const ArtistPage = () => {
  const selectedAlbum = useSelector((state) => state.albums.selectedAlbum);

  if (!selectedAlbum) return null;

  return (
    <div className="artist-page">
      <h1>{selectedAlbum.artist.name}</h1>
      <img src={selectedAlbum.album.cover_big} alt={selectedAlbum.album.title} />
      <p>{selectedAlbum.album.description}</p>
    </div>
  );
};

export default ArtistPage;
