import axios from "axios";

import { GET_CHARACTERS } from "./types";

// GET CHARACTERS
export const getCharacters = () => dispatch => {
  axios
    .get("/api/characters/")
    .then(res => {
      dispatch({
        type: GET_CHARACTERS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
