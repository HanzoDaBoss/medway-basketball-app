import { useEffect, useState } from "react";
import { getPlayers } from "../api";
import Modal from "./Admin/Modal";

export default function CreateGame({
  setOpenTeams,
  setTeam1,
  setTeam2,
  setTeamsGenerateError,
  setNotEnoughPlayersError,
}) {
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
  };

  const handleGenerate = () => {
    setTeam1([]);
    setTeam2([]);

    const activePlayersIndexArray = [...activePlayers].map(
      (player, index) => index
    );

    if (activePlayersIndexArray.length < 2) {
      setNotEnoughPlayersError(true);
    } else if (activePlayersIndexArray.length % 2 !== 0) {
      setTeamsGenerateError(true);
    } else {
      setNotEnoughPlayersError(false);
      setTeamsGenerateError(false);
      for (let i = activePlayersIndexArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [activePlayersIndexArray[i], activePlayersIndexArray[j]] = [
          activePlayersIndexArray[j],
          activePlayersIndexArray[i],
        ];
      }
      for (let i = 0; i < activePlayers.length / 2; i++) {
        setTeam1((currTeam1Players) => {
          return [
            ...currTeam1Players,
            activePlayers[activePlayersIndexArray[i]],
          ];
        });
      }
      for (let i = activePlayers.length / 2; i < activePlayers.length; i++) {
        setTeam2((currTeam1Players) => {
          return [
            ...currTeam1Players,
            activePlayers[activePlayersIndexArray[i]],
          ];
        });
      }
    }

    setOpenTeams(true);
  };

  return loading ? (
    <div class="min-w-100 flex flex-col items-center">
      <header className="text-3xl font-bold italic">GAME CREATOR</header>
      <div class="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-amber-600" />
    </div>
  ) : (
    <div class="flex flex-col items-center text-xl font-semibold mb-5">
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
            <label htmlFor={player.id} class="flex w-full space-x-2 text-sm">
              {" "}
              {player.playerName}{" "}
            </label>
          </div>
        );
      })}
      <button
        className="p-4 text-white hover:bg-[#d97706] rounded-xl m-2 cursor-pointer duration-300 hover:text-black border-solid border-2 border-[#d97706]"
        onClick={handleGenerate}
      >
        Generate
      </button>
    </div>
  );
}
