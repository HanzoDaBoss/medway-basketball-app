import {useEffect, useState} from "react";
import {getPlayers} from "../api";

export default function CreateGame() {
  const [playerList, setPlayerList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPlayers("overallRating").then((players) => {
      setPlayerList(players);
      setLoading(false);
    });
  }, []);

  return (
    <div class="flex flex-col items-center text-xl font-semibold">
      <header className="text-3xl font-bold italic">GAME CREATOR</header>
      {playerList.map((player) => {
        return (
          <div class="flex items-center space-x-2 rounded p-2 hover:bg-gray-100 accent-teal-600">
            <input
              type="checkbox"
              id="htmlCheckbox"
              name="languageCheckbox"
              class="h-4 w-4 rounded border-gray-300 text-teal-600 shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
            />
            <label for="htmlCheckbox" class="flex w-full space-x-2 text-sm">
              {" "}
              {player.playerName}{" "}
            </label>
          </div>
        );
      })}
    </div>
  );
}
