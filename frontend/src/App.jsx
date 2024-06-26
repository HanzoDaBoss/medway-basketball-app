import {useState} from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import Leaderboard from "./components/Leaderboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Leaderboard />}></Route>
      </Routes>
    </>
  );
}

export default App;
