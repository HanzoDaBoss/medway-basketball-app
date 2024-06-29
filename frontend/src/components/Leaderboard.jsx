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
      <table class="table-auto bg-slate-600">
        <thead>
          <tr>
            <th>Position</th>
            <th>Name</th>
            <th>InsideScoring</th>
            <th>MidRangeScoring</th>
            <th>LongRangeShooting</th>
            <th>PerimeterDefense</th>
            <th>InsideDefense</th>
            <th>Playmaking</th>
            <th>Rebound</th>
            <th>BallHandling</th>
            <th>OverallRating</th>
          </tr>
        </thead>
        {playerList.map((player, index) => {
          return (
            <tbody>
              <td>{index + 1}</td>
              <td>{player.playerName}</td>
              <td>{player.insideScoring}</td>
              <td>{player.midRangeShooting}</td>
              <td>{player.longRangeShooting}</td>
              <td>{player.perimeterDefense}</td>
              <td>{player.insideDefense}</td>
              <td>{player.playmaking}</td>
              <td>{player.rebound}</td>
              <td>{player.ballHandling}</td>
              <td>{Math.round(player.overallRating)}</td>
            </tbody>
          );
        })}
      </table>
    </>
  );
}
