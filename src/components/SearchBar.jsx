// src/components/SearchBar.jsx
import React from "react";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    dispatch({
      type: "SET_SEARCH_QUERY",
      payload: event.target.value,
    });
  };

  return <input type="text" placeholder="Cerca artista..." onChange={handleSearch} />;
};

export default SearchBar;
