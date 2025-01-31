import "./App.css";
import { Route, Routes } from "react-router-dom";
import Leaderboard from "./components/Leaderboard";
import Navbar from "./components/Navbar";
import AdminPage from "./components/Admin/AdminPage";
import PlayerPage from "./components/Admin/PlayerPage";
import { useState } from "react";
import NbaNews from "./components/NbaNews";
import CreateGame from "./components/CreateGame";
import NbaArticle from "./components/NbaArticle";

function App() {
  const [playerList, setPlayerList] = useState([]);
  const [openTeams, setOpenTeams] = useState(false);
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);
  const [teamsGenerateError, setTeamsGenerateError] = useState(false);
  const [notEnoughPlayersError, setNotEnoughPlayersError] = useState(false);

  return (
    <>
      <Navbar
        openTeams={openTeams}
        setOpenTeams={setOpenTeams}
        team1={team1}
        team2={team2}
        teamsGenerateError={teamsGenerateError}
        notEnoughPlayersError={notEnoughPlayersError}
      />
      <Routes>
        <Route path="/" element={<Leaderboard />} />
        <Route path="/nba-news" element={<NbaNews />} />
        <Route path="/nba-news/article" element={<NbaArticle />} />
        <Route
          path="/create"
          element={
            <CreateGame
              setOpenTeams={setOpenTeams}
              setTeam1={setTeam1}
              setTeam2={setTeam2}
              setTeamsGenerateError={setTeamsGenerateError}
              setNotEnoughPlayersError={setNotEnoughPlayersError}
            />
          }
        />
        <Route
          path="/admin"
          element={
            <AdminPage playerList={playerList} setPlayerList={setPlayerList} />
          }
        />
        <Route
          path="/admin/players/:player_id"
          element={
            <PlayerPage playerList={playerList} setPlayerList={setPlayerList} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
