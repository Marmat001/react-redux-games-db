import { useEffect } from "react";
import { loadGames } from "../actions/gamesAction";
import { useDispatch, useSelector } from "react-redux";
import Game from "../components/Game";
//Styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  //Fetch games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  const { popular, newGames, upcoming } = useSelector((state) => state.games);
  console.log(popular, newGames, upcoming);
  return (
    <GameList>
      <Games>
        <h2>Upcoming Games</h2>
        {upcoming &&
          upcoming.map((game) => (
            <Game game={game} key={game.id} id={game.id} />
          ))}
        <h2>Popular Games</h2>
        {popular &&
          popular.map((game) => (
            <Game game={game} key={game.id} id={game.id} />
          ))}
        <h2>New Games</h2>
        {newGames &&
          newGames.map((game) => (
            <Game game={game} key={game.id} id={game.id} />
          ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
  @media (max-width: 670px) {
    padding: 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
