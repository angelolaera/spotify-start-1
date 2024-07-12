// src/store/albumReducer.js
const initialState = {
  items: [],
  selectedAlbum: null,
  searchQuery: "",
};

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ALBUMS":
      return {
        ...state,
        items: action.payload,
      };
    case "SET_SELECTED_ALBUM":
      return {
        ...state,
        selectedAlbum: action.payload,
      };
    case "SET_SEARCH_QUERY":
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      return state;
  }
};

export default albumReducer;
