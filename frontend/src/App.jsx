import "./App.css";
import {Route, Routes} from "react-router-dom";
import Leaderboard from "./components/Leaderboard";
import Navbar from "./components/Navbar";
import AdminPage from "./components/Admin/AdminPage";
import PlayerPage from "./components/Admin/PlayerPage";
import {useState} from "react";
import NbaNews from "./components/NbaNews";
import CreateGame from "./components/CreateGame";

function App() {
  const [playerList, setPlayerList] = useState([]);
  const [openTeams, setOpenTeams] = useState(false);

  return (
    <>
      <Navbar openTeams={openTeams} setOpenTeams={setOpenTeams} />
      <Routes>
        <Route path="/" element={<Leaderboard />} />
        <Route path="/nba-news" element={<NbaNews />} />
        <Route
          path="/create"
          element={
            <CreateGame openTeams={openTeams} setOpenTeams={setOpenTeams} />
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
