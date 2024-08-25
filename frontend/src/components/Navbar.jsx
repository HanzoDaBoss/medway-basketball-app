import React, {useContext, useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import {Link} from "react-router-dom";
import Modal from "./Admin/Modal";
import Login from "./Admin/Login";
import {UserContext} from "./contexts/User";

const Navbar = ({
  openTeams,
  setOpenTeams,
  team1,
  team2,
  teamsGenerateError,
  notEnoughPlayersError,
}) => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);
  const [open, setOpen] = useState(false);

  const {user} = useContext(UserContext);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = !user
    ? [
        {id: 1, text: "Home", link: ""},
        {id: 2, text: "NBA News", link: "nba-news"},
        {id: 3, text: "Create", link: "create"},
      ]
    : [
        {id: 1, text: "Home", link: ""},
        {id: 2, text: "NBA News", link: "nba-news"},
        {id: 3, text: "Create", link: "create"},
        {id: 4, text: "Admin", link: "admin"},
      ];

  return (
    <div className="bg-black bg-opacity-30 flex justify-between items-center h-24 w-100 mx-auto px-4 text-black">
      {/* Logo */}
      {/* <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1> */}
      <div className="flex flex-shrink-0 items-center ml-5">
        <Link to={`/`}>
          <img
            className="h-8 w-auto"
            src="https://images.vexels.com/media/users/3/127117/isolated/svg/75741f0d611d334c461b2d184ead2c70.svg"
            alt="Your Company"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <Link key={item.id} to={`/${item.link}`}>
            <li
              key={item.id}
              className="p-4 text-white hover:bg-[#d97706] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            >
              {item.text}
            </li>
          </Link>
        ))}

        {!user ? (
          <ul
            onClick={() => setOpen(true)}
            className="p-4 text-white hover:bg-[#d97706] rounded-xl m-2 cursor-pointer duration-300 hover:text-black border-solid border-2 border-[#d97706]"
          >
            Login
          </ul>
        ) : (
          <></>
        )}
      </ul>

      {!user ? (
        <div onClick={() => setOpen(true)} className="block md:hidden">
          <div className="p-4 text-[#d97706] hover:bg-[#d97706] rounded-xl m-2 cursor-pointer duration-300 hover:text-black border-solid border-2 border-[#d97706]">
            Login
          </div>
        </div>
      ) : (
        <></>
      )}

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="text-center w-56">
          <div className="mx-auto my-4 w-48">
            <Login setOpen={setOpen} />
          </div>
        </div>
      </Modal>

      <Modal open={openTeams} onClose={() => setOpenTeams(false)}>
        {notEnoughPlayersError ? (
          <div className="text-center w-56">
            <div className="mx-auto my-4 w-50 text-red-700">
              Error: Please select at least 2 players
            </div>
          </div>
        ) : teamsGenerateError ? (
          <div className="text-center w-56">
            <div className="mx-auto my-4 w-50 text-red-700">
              Error: Please select up to an even number of players
            </div>
          </div>
        ) : (
          <div className="flex flex-row justify-center gap-10 text-white w-56">
            <div>
              <h1>TEAM 1:</h1>
              {team1.map((team1Player) => {
                return <h2>{team1Player.playerName}</h2>;
              })}
            </div>
            <div>
              <h1>TEAM 2:</h1>
              {team2.map((team2Player) => {
                return <h2>{team2Player.playerName}</h2>;
              })}
            </div>
          </div>
        )}
      </Modal>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose className="text-white" size={20} />
        ) : (
          <AiOutlineMenu className="text-white" size={20} />
        )}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-white-900 bg-black ease-in-out duration-500 z-10"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        {/* <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1> */}
        <div className="w-100 flex flex-shrink-0 items-center justify-center m-5">
          <img
            className="h-8 w-auto"
            src="https://images.vexels.com/media/users/3/127117/isolated/svg/75741f0d611d334c461b2d184ead2c70.svg"
            alt="Your Company"
          />
        </div>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <Link to={`/${item.link}`}>
            <li
              key={item.id}
              className="p-4 text-white border-b rounded-xl hover:bg-[#d97706] duration-300 hover:text-black cursor-pointer border-white-600"
            >
              {item.text}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
