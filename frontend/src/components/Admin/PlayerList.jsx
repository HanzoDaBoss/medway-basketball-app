export default function PlayerList({loading, playerList}) {
  return loading ? (
    <div class="min-w-100 flex flex-col items-center">
      <div class="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
    </div>
  ) : (
    <ul class="bg-white shadow overflow-hidden sm:rounded-md max-w-sm mx-auto mt-16">
      {playerList.map((player, index) => {
        return (
          <li>
            <div class="px-4 py-5 sm:px-6">
              <div class="flex items-center justify-between">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  {player.playerName}
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
        );
      })}
    </ul>
  );
}
