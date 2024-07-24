import {useEffect, useState} from "react";
import {getPlayers} from "../api";
import {gradeConverter} from "../utils/gradeConverter";
import Dropdown from "./Dropdown";

export default function Leaderboard() {
  const [playerList, setPlayerList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState({text: "Sort By", key: "overallRating"});

  useEffect(() => {
    setLoading(true);
    getPlayers(sortBy.key).then((players) => {
      const playersWithGrades = gradeConverter(players);
      setPlayerList(playersWithGrades);
      setLoading(false);
    });
  }, [sortBy]);

  return loading ? (
    <div class="min-w-100 flex flex-col items-center">
      <header>Leaderboard</header>
      <div class="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
    </div>
  ) : (
    <div className="flex flex-col items-center">
      <header>Leaderboard</header>
      <Dropdown sortBy={sortBy} setSortBy={setSortBy} />
      <div class="inline-block min-w-100 py-2 sm:px-6 lg:px-14">
        <table className="min-w-full border border-neutral-200 text-center text-sm font-light text-surface dark:border-white/10 dark:text-white shadow-xl">
          <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
            <tr>
              <th
                scope="col"
                className="border-e border-neutral-200 py-4 dark:border-white/10"
              >
                #
              </th>
              <th
                scope="col"
                className="border-e border-neutral-200 py-4 dark:border-white/10"
              >
                Name
              </th>
              <th
                scope="col"
                className="border-e border-neutral-200 py-4 dark:border-white/10"
              >
                IS
              </th>
              <th
                scope="col"
                className="border-e border-neutral-200 py-4 dark:border-white/10"
              >
                MRS
              </th>
              <th
                scope="col"
                className="border-e border-neutral-200 py-4 dark:border-white/10"
              >
                LRS
              </th>
              <th
                scope="col"
                className="border-e border-neutral-200 py-4 dark:border-white/10"
              >
                PD
              </th>
              <th
                scope="col"
                className="border-e border-neutral-200 py-4 dark:border-white/10"
              >
                ID
              </th>
              <th
                scope="col"
                className="border-e border-neutral-200 py-4 dark:border-white/10"
              >
                PM
              </th>
              <th
                scope="col"
                className="border-e border-neutral-200 py-4 dark:border-white/10"
              >
                RB
              </th>
              <th
                scope="col"
                className="border-e border-neutral-200 py-4 dark:border-white/10"
              >
                BH
              </th>
              <th
                scope="col"
                className="border-e border-neutral-200 py-4 dark:border-white/10"
              >
                OVR
              </th>
            </tr>
          </thead>
          {playerList.map((player, index) => {
            return (
              <tbody>
                <tr className="border-b border-neutral-200 dark:border-white/10 ">
                  <td className="whitespace-nowrap border-e border-neutral-200 py-4 font-medium dark:border-white/10">
                    {index + 1}
                  </td>
                  <td className="whitespace-nowrap border-e border-neutral-200 py-4 font-medium dark:border-white/10">
                    {player.playerName}
                  </td>
                  <td className="whitespace-nowrap border-e border-neutral-200 py-4 font-medium dark:border-white/10">
                    {player.insideScoring}
                  </td>
                  <td className="whitespace-nowrap border-e border-neutral-200 py-4 font-medium dark:border-white/10">
                    {player.midRangeShooting}
                  </td>
                  <td className="whitespace-nowrap border-e border-neutral-200 py-4 font-medium dark:border-white/10">
                    {player.longRangeShooting}
                  </td>
                  <td className="whitespace-nowrap border-e border-neutral-200 py-4 font-medium dark:border-white/10">
                    {player.perimeterDefense}
                  </td>
                  <td className="whitespace-nowrap border-e border-neutral-200 py-4 font-medium dark:border-white/10">
                    {player.insideDefense}
                  </td>
                  <td className="whitespace-nowrap border-e border-neutral-200 py-4 font-medium dark:border-white/10">
                    {player.playmaking}
                  </td>
                  <td className="whitespace-nowrap border-e border-neutral-200 py-4 font-medium dark:border-white/10">
                    {player.rebound}
                  </td>
                  <td className="whitespace-nowrap border-e border-neutral-200 py-4 font-medium dark:border-white/10">
                    {player.ballHandling}
                  </td>
                  <td className="whitespace-nowrap border-e border-neutral-200 py-4 font-medium dark:border-white/10">
                    {Math.round(player.overallRating)}
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}
