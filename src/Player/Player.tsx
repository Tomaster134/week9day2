import { useState } from "react";
import "./Player.css";


//I can get it to work, but I can't seem to get it to change back. The change doesn't seem to be reflected in the object itself.
const Player = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Dylan",
    },
  });
  const clickEvent = () => {
    if ((game.player.name = "Dylan")) {
      console.log(game);
      setGame({ ...game, player: { ...game.player , name: 'Tommy'} });
    }
    // else if (game.player.name = "Tommy") {
    //     console.log('not dylan')
    //   setGame((curr) => {
    //     return { ...curr, player: { ...curr.player, name: "Dylan" } };
    //   });
    // }
  };
  return (
    <div className="player-container">
      <p>{game.player.name}</p>
      <button onClick={clickEvent}>Click me!</button>
    </div>
  );
};
export default Player;
