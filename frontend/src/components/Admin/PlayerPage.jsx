import {useNavigate, useParams} from "react-router-dom";
import PlayerForm from "./PlayerForm";
import {useEffect, useState} from "react";
import {getPlayerById, putPlayerById} from "../../api";
import {playerConverter} from "../../utils/playerConverter";
import {gradeConverter} from "../../utils/gradeConverter";
import {ovrCalculator} from "../../utils/ovrCalculator";
import DeleteModal from "./DeleteModal";

export default function PlayerPage({playerList, setPlayerList}) {
  const {player_id} = useParams();
  const {user} = useContext(UserContext);

  const navigate = useNavigate();

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
  const [open, setOpen] = useState(false);
  const [deletedPlayer, setDeletedPlayer] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPlayerById(player_id).then((player) => {
      const playersWithGrades = gradeConverter([player]);
      setPlayerInput({
        playerName: playersWithGrades[0].playerName,
        insideScoring: playersWithGrades[0].insideScoring,
        midRangeShooting: playersWithGrades[0].midRangeShooting,
        longRangeShooting: playersWithGrades[0].midRangeShooting,
        perimeterDefense: playersWithGrades[0].perimeterDefense,
        insideDefense: playersWithGrades[0].insideDefense,
        playmaking: playersWithGrades[0].playmaking,
        rebound: playersWithGrades[0].rebound,
        ballHandling: playersWithGrades[0].ballHandling,
        multiplier: playersWithGrades[0].multiplier,
      });
      setLoading(false);
    });
  }, []);

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
    putPlayerById(formattedPlayer, player_id).then((response) => {
      setLoading(false);
      if ([400, 401, 500].includes(response.status)) {
        setPostFailure(true);
      } else if (response.status === 201) {
        setPostedPlayer(true);
        setPostFailure(false);
      }
    });
  };

  if (user) return <h1>You do not have admin access!</h1>;

  return loading ? (
    <div class="min-w-100 flex flex-col items-center">
      <div class="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
    </div>
  ) : (
    <div className="w-100 flex flex-col items-center justify-center">
      {deletedPlayer ? (
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Player is deleted!
          </label>
          <button
            class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 my-2 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => navigate("/admin")}
          >
            Back to Admin
          </button>
        </form>
      ) : (
        <PlayerForm
          setAddPlayer={setAddPlayer}
          playerInput={playerInput}
          handlePlayerInput={handlePlayerInput}
          attributes={attributes}
          inputOVR={inputOVR}
          loading={loading}
          submitPlayer={submitPlayer}
          postFailure={postFailure}
        >
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 my-2 rounded focus:outline-none focus:shadow-outline"
            onClick={(e) => {
              e.preventDefault();
              setOpen(true);
              console.log(player_id);
            }}
          >
            Delete
          </button>
        </PlayerForm>
      )}
      <DeleteModal
        open={open}
        setOpen={setOpen}
        player_id={player_id}
        playerList={playerList}
        setPlayerList={setPlayerList}
        setDeletedPlayer={setDeletedPlayer}
      />
    </div>
  );
}
