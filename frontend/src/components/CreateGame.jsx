import {useEffect, useState} from "react";
import {getPlayers} from "../api";

export default function CreateGame() {
  const [playerList, setPlayerList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activePlayers, setActivePlayers] = useState([]);

  useEffect(() => {
    setLoading(true);
    getPlayers("overallRating").then((players) => {
      setPlayerList(players);
      setLoading(false);
    });
  }, []);

  const handlePlayerForGame = (toggledPlayer) => {
    setActivePlayers((currActivePlayers) => {
      const playerIds = currActivePlayers.map((player) => player.id);
      if (playerIds.includes(toggledPlayer.id)) {
        return [...currActivePlayers].filter(
          (player) => player.id !== toggledPlayer.id
        );
      } else {
        return [...currActivePlayers, toggledPlayer];
      }
    });
    console.log(activePlayers);
  };

  return (
    <div class="flex flex-col items-center text-xl font-semibold">
      <header className="text-3xl font-bold italic">GAME CREATOR</header>
      {playerList.map((player) => {
        return (
          <div class="flex items-center space-x-2 rounded p-2 hover:bg-gray-100 accent-teal-600">
            <input
              type="checkbox"
              onChange={() => {
                handlePlayerForGame(player);
              }}
              id={player.id}
              name="languageCheckbox"
              class="h-4 w-4 rounded border-gray-300 text-teal-600 shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
            />
            <label for={player.id} class="flex w-full space-x-2 text-sm">
              {" "}
              {player.playerName}{" "}
            </label>
          </div>
        );
      })}
      <button className="p-4 text-white hover:bg-[#d97706] rounded-xl m-2 cursor-pointer duration-300 hover:text-black border-solid border-2 border-[#d97706]">
        Generate
      </button>
      <div>
        {activePlayers.map((player) => {
          return <h2>{player.playerName}</h2>;
        })}
      </div>
    </div>
  );
}
