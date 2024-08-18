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

  return <header>Game Creator Coming Soon!</header>;
}
