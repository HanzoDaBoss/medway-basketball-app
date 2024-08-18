import {useState} from "react";

export default function CreateGame() {
  const [playerList, setPlayerList] = useState([]);
  const [loading, setLoading] = useState(false);

  return <header>Game Creator Coming Soon!</header>;
}
