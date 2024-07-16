import {useParams} from "react-router-dom";
import PlayerForm from "./PlayerForm";
import {useEffect, useState} from "react";
import {getPlayerById, putPlayerById} from "../../api";
import {playerConverter} from "../../utils/playerConverter";
import {gradeConverter} from "../../utils/gradeConverter";
import {ovrCalculator} from "../../utils/ovrCalculator";

export default function PlayerPage() {
  const {player_id} = useParams();

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

  return loading ? (
    <div class="min-w-100 flex flex-col items-center">
      <div class="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
    </div>
  ) : (
    <div className="w-100 flex flex-col items-center justify-center">
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
    </div>
  );
}
