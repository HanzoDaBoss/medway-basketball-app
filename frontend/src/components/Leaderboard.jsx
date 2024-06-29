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
      <table className="min-w-full border border-neutral-200 text-center text-sm font-light text-surface dark:border-white/10 dark:text-white">
        <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
          <tr>
            <th
              scope="col"
              className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
            >
              #
            </th>
            <th
              scope="col"
              className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
            >
              Name
            </th>
            <th
              scope="col"
              className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
            >
              IS
            </th>
            <th
              scope="col"
              className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
            >
              MRS
            </th>
            <th
              scope="col"
              className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
            >
              LRS
            </th>
            <th
              scope="col"
              className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
            >
              PD
            </th>
            <th
              scope="col"
              className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
            >
              ID
            </th>
            <th
              scope="col"
              className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
            >
              PM
            </th>
            <th
              scope="col"
              className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
            >
              RB
            </th>
            <th
              scope="col"
              className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
            >
              BH
            </th>
            <th
              scope="col"
              className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
            >
              OVR
            </th>
          </tr>
        </thead>
        {playerList.map((player, index) => {
          return (
            <tbody>
              <tr className="border-b border-neutral-200 dark:border-white/10">
                <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                  {index + 1}
                </td>
                <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                  {player.playerName}
                </td>
                <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                  {player.insideScoring}
                </td>
                <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                  {player.midRangeShooting}
                </td>
                <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                  {player.longRangeShooting}
                </td>
                <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                  {player.perimeterDefense}
                </td>
                <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                  {player.insideDefense}
                </td>
                <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                  {player.playmaking}
                </td>
                <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                  {player.rebound}
                </td>
                <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                  {player.ballHandling}
                </td>
                <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                  {Math.round(player.overallRating)}
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
}
