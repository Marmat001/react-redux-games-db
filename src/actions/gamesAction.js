import axios from "axios";
import {popularGamesULR, upcomingGamesURL, newGamesURL} from "../api";

//Action Creator

export const loadGames = () => async (dispatch) => {
  //Fetch axios
  const popularData = await axios.get(popularGamesULR())
  const newGamesData = await axios.get(newGamesURL())
  const upcomingGamesData = await axios.get(upcomingGamesURL())
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingGamesData.data.results,
      newGames: newGamesData.data.results
    }
  })
}