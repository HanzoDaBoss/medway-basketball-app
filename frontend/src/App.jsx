import {useState} from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import Leaderboard from "./components/Leaderboard";
import Navbar from "./components/Navbar";
import AdminPage from "./components/Admin/AdminPage";
import PlayerPage from "./components/Admin/PlayerPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Leaderboard />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/players/:player_id" element={<PlayerPage />} />
      </Routes>
    </>
  );
}

export default App;
