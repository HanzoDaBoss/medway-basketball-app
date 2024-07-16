import SubmitPlayerButton from "./SubmitPlayerButton";

export default function ({
  setAddPlayer,
  playerInput,
  handlePlayerInput,
  attributes,
  inputOVR,
  loading,
  submitPlayer,
  postFailure,
}) {
  return (
    <div class="w-full max-w-xs">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={() => setAddPlayer(false)}
        >
          Close
        </button>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Name
          </label>
          <input
            className="text-center appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="name"
            type="text"
            name="playerName"
            placeholder="Name"
            value={playerInput.playerName}
            onChange={handlePlayerInput}
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
                  className="text-center appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id={`grid-${attribute.text}`}
                  type="text"
                  name={attribute.key}
                  placeholder=""
                  value={playerInput[attribute.key]}
                  onChange={handlePlayerInput}
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
              class="text-center appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-multiplier"
              type="number"
              name="multiplier"
              placeholder=""
              value={playerInput.multiplier}
              onChange={handlePlayerInput}
            />
          </div>
        </div>

        <div class="flex items-center justify-center">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-ovr"
          >
            Calculated OVR: {inputOVR}
          </label>
        </div>

        <div class="flex flex-col items-center justify-center">
          <SubmitPlayerButton loading={loading} submitPlayer={submitPlayer} />
          {postFailure ? (
            <label class="block uppercase tracking-wide text-red-700 text-xs font-bold mb-2">
              Player details invalid, please check input fields.
            </label>
          ) : (
            <></>
          )}
        </div>
      </form>
    </div>
  );
}
