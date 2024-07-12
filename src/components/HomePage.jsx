// src/components/HomePage.jsx
import React, { useEffect, useState } from "react";
import AlbumCard from "./AlbumCard";
import { Container, Row, Col } from "react-bootstrap";

const HomePage = () => {
  const [rockClassics, setRockClassics] = useState([]);
  const [popCulture, setPopCulture] = useState([]);
  const [hipHop, setHipHop] = useState([]);

  // Funzione per recuperare gli album
  const fetchAlbums = async (query, setter) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
      const data = await response.json();
      setter(data.data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    // Recupera gli album per ciascuna categoria
    fetchAlbums("queen", setRockClassics);
    fetchAlbums("katy perry", setPopCulture);
    fetchAlbums("eminem", setHipHop);
  }, []);

  return (
    <Container>
      <h1 className="my-4">Album Recommendations</h1>

      <Row className="mb-3 ">
        <h2>Rock Classics</h2>
        {rockClassics.slice(0, 4).map((album) => (
          <Col xs={12} md={6} lg={3} key={album.id} className="mb-4">
            <AlbumCard album={album} />
          </Col>
        ))}
      </Row>

      <Row className="mb-3 ">
        <h2>POP Culture</h2>
        {popCulture.slice(0, 4).map((album) => (
          <Col xs={12} md={6} lg={3} key={album.id} className="mb-4">
            <AlbumCard album={album} />
          </Col>
        ))}
      </Row>

      <Row className="mb-3 ">
        <h2>Hip Hop</h2>
        {hipHop.slice(0, 4).map((album) => (
          <Col xs={12} md={6} lg={3} key={album.id} className="mb-4">
            <AlbumCard album={album} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
