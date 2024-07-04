import {useState} from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import Leaderboard from "./components/Leaderboard";
import Navbar from "./components/Navbar";
import TestPage from "./components/TestPage";

function App() {
  return (
    <>
      <TestPage />
      <Routes>
        <Route path="/" element={<Leaderboard />}></Route>
      </Routes>
    </>
  );
}

export default App;
