import {useState} from "react";

export default function EditPlayers() {
  const [showPlayerList, setShowPlayerList] = useState(false);
  return (
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded focus:outline-none focus:shadow-outline"
      type="button"
    >
      Edit players
    </button>
  );
}
