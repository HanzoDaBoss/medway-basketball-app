export default function AddPlayer() {
  const attributes = [
    {id: 1, abbrieviation: "IS", text: "Inside Scoring"},
    {id: 2, abbrieviation: "MRS", text: "Mid Range Shooting"},
    {id: 3, abbrieviation: "LRS", text: "Long Range Shooting"},
    {id: 4, abbrieviation: "PD", text: "Perimeter Defense"},
    {id: 5, abbrieviation: "ID", text: "Inside Defense"},
    {id: 6, abbrieviation: "PM", text: "Playmaking"},
    {id: 7, abbrieviation: "RB", text: "Rebound"},
    {id: 8, abbrieviation: "BH", text: "Ball Handling"},
    {id: 9, abbrieviation: "OVR", text: "Overall Rating"},
  ];

  return (
    <div class="w-full max-w-xs">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Name
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
          />
        </div>

        <div class="flex flex-wrap -mx-3 mb-2">
          {attributes.map((attribute) => {
            return (
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for={`grid-${attribute.text}`}
                >
                  {attribute.abbrieviation}
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id={`grid-${attribute.text}`}
                  type="text"
                  placeholder=""
                />
              </div>
            );
          })}
        </div>

        <div class="flex items-center justify-center">
          <div class="w-full md:w-1/3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-multiplier"
            >
              Multiplier
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-multiplier"
              type="text"
              placeholder=""
            />
          </div>
        </div>

        <div class="flex items-center justify-center">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}
