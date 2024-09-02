import {Link} from "react-router-dom";
import {useState} from "react";

export default function PlayerList({loading, playerList, setShowPlayerList}) {
  return loading ? (
    <ul class="flex flex-col items-center rounded bg-white shadow overflow-hidden sm:rounded-md max-w-sm mx-auto mt-16">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={() => setShowPlayerList(false)}
      >
        Close
      </button>
      <div class="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
    </ul>
  ) : (
    <ul class="rounded bg-white shadow overflow-hidden sm:rounded-md max-w-sm mx-auto mt-16">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={() => setShowPlayerList(false)}
      >
        Close
      </button>

      {playerList.map((player) => {
        return (
          <li key={player.id}>
            <div key={player.id} class="px-4 py-5 sm:px-6">
              <div class="flex items-center justify-between">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  {player.playerName}
                </h3>
              </div>
              <div class="mt-4 flex items-center justify-between">
                <p class="text-sm font-medium text-gray-500">
                  Overall Rating:{" "}
                  <span class="text-green-600">
                    {Math.round(player.overallRating)}
                  </span>
                </p>
                <Link
                  to={`/admin/players/${player.id}`}
                  key={player.id}
                  class="font-medium text-indigo-600 hover:text-indigo-400"
                >
                  Edit
                </Link>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
