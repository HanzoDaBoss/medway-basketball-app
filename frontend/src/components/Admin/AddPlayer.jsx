import {useState} from "react";
import {postPlayer} from "../../api";
import {playerConverter} from "../../utils/playerConverter";
import {ovrCalculator} from "../../utils/ovrCalculator";
import AddPlayerButton from "./AddPlayerButton";

export default function AddPlayer() {
  const attributes = [
    {id: 1, abbrieviation: "IS", text: "Inside Scoring", key: "insideScoring"},
    {
      id: 2,
      abbrieviation: "MRS",
      text: "Mid Range Shooting",
      key: "midRangeShooting",
    },
    {
      id: 3,
      abbrieviation: "LRS",
      text: "Long Range Shooting",
      key: "longRangeShooting",
    },
    {
      id: 4,
      abbrieviation: "PD",
      text: "Perimeter Defense",
      key: "perimeterDefense",
    },
    {id: 5, abbrieviation: "ID", text: "Inside Defense", key: "insideDefense"},
    {id: 6, abbrieviation: "PM", text: "Playmaking", key: "playmaking"},
    {id: 7, abbrieviation: "RB", text: "Rebound", key: "rebound"},
    {id: 8, abbrieviation: "BH", text: "Ball Handling", key: "ballHandling"},
  ];

  const [playerInput, setPlayerInput] = useState({
    playerName: "",
    insideScoring: "",
    midRangeShooting: "",
    longRangeShooting: "",
    perimeterDefense: "",
    insideDefense: "",
    playmaking: "",
    rebound: "",
    ballHandling: "",
    multiplier: 0,
  });

  const [addPlayer, setAddPlayer] = useState(false);
  const [postedPlayer, setPostedPlayer] = useState(false);
  const [inputOVR, setInputOVR] = useState(0);
  const [loading, setLoading] = useState(false);

  const handlePlayerInput = (e) => {
    const formattedPlayer = playerConverter(playerInput);
    setPlayerInput((currentPlayerInput) => {
      return {...currentPlayerInput, [e.target.name]: e.target.value};
    });
    setInputOVR(ovrCalculator(formattedPlayer));
  };

  const submitPlayer = (e) => {
    e.preventDefault();
    setLoading(true);
    const formattedPlayer = playerConverter(playerInput);
    postPlayer(formattedPlayer).then((player) => {
      setLoading(false);
      setPostedPlayer(true);
    });
  };

  return !addPlayer ? (
    <div class="flex flex-col items-center justify-center">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={() => setAddPlayer(true)}
      >
        Add new player
      </button>
    </div>
  ) : !postedPlayer ? (
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

        <div class="flex items-center justify-center">
          <AddPlayerButton loading={loading} submitPlayer={submitPlayer} />
        </div>
      </form>
    </div>
  ) : (
    <div class="flex flex-col items-center justify-center">
      <h2>Player is added to database!</h2>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={() => {
          setPostedPlayer(false);
          setAddPlayer(true);
        }}
      >
        Add new player
      </button>
    </div>
  );
}
