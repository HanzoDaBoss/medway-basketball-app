import {useState} from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import Leaderboard from "./components/Leaderboard";
import Navbar from "./components/Navbar";
import TestPage from "./components/TestPage";
import AdminPage from "./components/AdminPage";

function App() {
  return (
    <>
      <TestPage />
      <Routes>
        <Route path="/" element={<Leaderboard />}></Route>
        <Route path="/admin" element={<AdminPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
