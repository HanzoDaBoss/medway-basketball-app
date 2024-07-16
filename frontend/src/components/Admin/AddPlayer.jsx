import {useState} from "react";
import {postPlayer} from "../../api";
import {playerConverter} from "../../utils/playerConverter";
import {ovrCalculator} from "../../utils/ovrCalculator";
import SubmitPlayerButton from "./SubmitPlayerButton";
import PlayerForm from "./PlayerForm";

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
  const [postFailure, setPostFailure] = useState(false);

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
    setPostFailure(false);
    const formattedPlayer = playerConverter(playerInput);
    postPlayer(formattedPlayer).then((response) => {
      setLoading(false);
      if ([400, 401, 500].includes(response.status)) {
        setPostFailure(true);
      } else if (response.status === 201) {
        setPostedPlayer(true);
        setPostFailure(false);
        setPlayerInput({
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
        setInputOVR(0);
      }
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
    <PlayerForm
      setAddPlayer={setAddPlayer}
      playerInput={playerInput}
      handlePlayerInput={handlePlayerInput}
      attributes={attributes}
      inputOVR={inputOVR}
      loading={loading}
      submitPlayer={submitPlayer}
      postFailure={postFailure}
    />
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
