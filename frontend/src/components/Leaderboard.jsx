import {useEffect, useState} from "react";
import {getPlayers} from "../api";

export default function Leaderboard() {
  const [playerList, setPlayerList] = useState([]);

  useEffect(() => {
    getPlayers("overallRating").then((players) => {
      setPlayerList(players);
    });
  }, []);

  return (
    <>
      <header>hi</header>
      <h2>This is the leaderboard</h2>
      <div>
        {playerList.map((player) => {
          return (
            <div style={{display: "flex", flexDirection: "row", gap: 10}}>
              <p>{player.playerName}</p>
              <p>{player.insideScoring}</p>
              <p>{player.midRangeShooting}</p>
              <p>{player.longRangeShooting}</p>
              <p>{player.perimeterDefense}</p>
              <p>{player.insideDefense}</p>
              <p>{player.playmaking}</p>
              <p>{player.rebound}</p>
              <p>{player.ballHandling}</p>
              <p>{player.rebound}</p>
              <p>{player.overallRating}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
