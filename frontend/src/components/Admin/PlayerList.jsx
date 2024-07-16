import {Link} from "react-router-dom";
import Modal from "./Modal";
import {useState} from "react";

export default function PlayerList({loading, playerList, setShowPlayerList}) {
  const [open, setOpen] = useState(false);

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

      {playerList.map((player, index) => {
        return (
          <>
            <li>
              <div class="px-4 py-5 sm:px-6">
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
                    to={`/admin/${player.id}`}
                    key={player.id}
                    class="font-medium text-indigo-600 hover:text-indigo-400"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => setOpen(true)}
                    class="font-medium text-red-600 hover:text-red-400"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
            <Modal open={open} onClose={() => setOpen(false)}>
              <div className="text-center w-56">
                <div className="mx-auto my-4 w-48">
                  <h3 className="text-lg font-black text-gray-800">
                    Confirm Delete
                  </h3>
                  <p className="text-sm text-gray-500">
                    Are you sure you want to delete this player?
                  </p>
                </div>
                <div className="flex gap-4">
                  <button className="btn text-red-500 btn-danger w-full">
                    Delete
                  </button>
                  <button
                    className="btn text-gray-800 btn-light w-full"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal>
          </>
        );
      })}
    </ul>
  );
}
