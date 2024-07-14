import {useState} from "react";

export default function EditPlayers() {
  const [showPlayerList, setShowPlayerList] = useState(false);
  return showPlayerList ? (
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded focus:outline-none focus:shadow-outline"
      type="button"
    >
      Edit players
    </button>
  ) : (
    <div className="w-full max-w-xs">
      <ul class="bg-white shadow overflow-hidden sm:rounded-md max-w-sm mx-auto mt-16">
        <li>
          <div class="px-4 py-5 sm:px-6">
            <div class="flex items-center justify-between">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Item 1
              </h3>
              <p class="mt-1 max-w-2xl text-sm text-gray-500">
                Description for Item 1
              </p>
            </div>
            <div class="mt-4 flex items-center justify-between">
              <p class="text-sm font-medium text-gray-500">
                Status: <span class="text-green-600">Active</span>
              </p>
              <a
                href="#"
                class="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Edit
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
