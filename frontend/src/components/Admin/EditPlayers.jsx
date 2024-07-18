import {useEffect, useState} from "react";
import {getPlayers} from "../../api";
import {gradeConverter} from "../../utils/gradeConverter";
import PlayerList from "./PlayerList";

export default function EditPlayers({playerList, setPlayerList}) {
  const [showPlayerList, setShowPlayerList] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPlayers("overallRating").then((players) => {
      const playersWithGrades = gradeConverter(players);
      setPlayerList(playersWithGrades);
      setLoading(false);
    });
  }, []);

  return !showPlayerList ? (
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded focus:outline-none focus:shadow-outline"
      type="button"
      onClick={() => setShowPlayerList(true)}
    >
      Edit players
    </button>
  ) : (
    <div className="w-full max-w-xs">
      <PlayerList
        loading={loading}
        playerList={playerList}
        setPlayerList={setPlayerList}
        setShowPlayerList={setShowPlayerList}
      />
    </div>
  );
}
