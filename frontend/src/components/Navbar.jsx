import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import {Link} from "react-router-dom";
import Modal from "./Admin/Modal";
import Login from "./Admin/Login";

const TestPage = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);
  const [open, setOpen] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  let navItems = [
    {id: 1, text: "Home", link: ""},
    {id: 2, text: "NBA News", link: "nba-news"},
    {id: 3, text: "Create", link: "create"},
    {id: 4, text: "Admin", link: "admin"},
  ];

  return (
    <div className="bg-black flex justify-between items-center h-24 w-100 mx-auto px-4 text-white">
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
          <Link to={`/${item.link}`}>
            <li
              key={item.id}
              className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            >
              {item.text}
            </li>
          </Link>
        ))}

        <ul
          onClick={() => setOpen(true)}
          className="p-4 text-[#00df9a] hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black border-solid border-2 border-[#00df9a]"
        >
          Login
        </ul>
      </ul>

      <div onClick={() => setOpen(true)} className="block md:hidden">
        <div className="p-4 text-[#00df9a] hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black border-solid border-2 border-[#00df9a]">
          Login
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="text-center w-56">
          <div className="mx-auto my-4 w-48">
            <Login setOpen={setOpen} />
          </div>
        </div>
      </Modal>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-10"
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
              className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
            >
              {item.text}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default TestPage;
