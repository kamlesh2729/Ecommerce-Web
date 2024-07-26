import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../Assets/logo/regalo_logo.png"
import { TbMenu2, TbLetterX, TbShoppingCart } from "react-icons/tb";
import { IoPersonSharp } from "react-icons/io5";
import { HiMiniHome } from "react-icons/hi2";
import { FcAbout } from "react-icons/fc";
import { FaCarSide } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";

const Navbar = () => {

  const [navB, setNavb] = useState(false);
  // let [user, setUser] = useState(true);
  
  // setUser = false;

  // const userCheck = () => {
  //   setUser(!user);
  // }

  // userCheck();
    const openMenu = () => {
    setNavb(!navB);
    };

  return (
    <>
      <nav>
        <div
          className={`flex flex-col w-full h-full fixed top-0 -left-full bg-white z-9/6 justify-center items-center transition-all duration-1/5 ease-in-out ${
            navB ? "left-0" : ""
          }`}
        >
          <button
            className=" text-bh2 absolute top-14 right-14 hover:text-blue-500 lg:hidden xl:hidden 2xl:hidden cursor-pointer transition duration-all"
            onClick={openMenu}
          >
            <TbLetterX />
          </button>
          <ul className=" flex flex-col gap-12 text-h3 text-center font-semibold list-none lg:hidden">
            <li>
              <Link
                to="/Auth"
                onClick={openMenu}
                className="font-text flex items-center gap-4 font-semibold text-black no-underline cursor-pointer transition-best duration-all hover:text-blue-500"
              >
                <IoPersonSharp /> Login or Signup
              </Link>
            </li>

            <li>
              <Link
                to="/"
                onClick={openMenu}
                className="font-text flex items-center gap-4 font-semibold text-black no-underline cursor-pointer transition-best duration-all hover:text-blue-500"
              >
                <HiMiniHome /> Home
              </Link>
            </li>

            <li>
              <Link
                to="/About"
                onClick={openMenu}
                className="font-text flex items-center gap-4 font-semibold text-black no-underline cursor-pointer hover:text-blue-500"
              >
                <FcAbout /> About
              </Link>
            </li>

            <li>
              <Link
                to="/Product"
                onClick={openMenu}
                className="font-text flex items-center gap-4 font-semibold text-black no-underline cursor-pointer hover:text-blue-500"
              >
                <FaCarSide /> Products
              </Link>
            </li>

            <li>
              <Link
                to="/Contact"
                onClick={openMenu}
                className="font-text flex items-center gap-4 font-semibold text-black no-underline cursor-pointer hover:text-blue-500"
              >
                <RiContactsFill /> Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full Lp-l:max-w-8lx bg-transparent top-0 left-0 right-0 h-auto mx-auto my-0 px-8 py-11 flex justify-between items-center z-50">
          <div className="w-57">
            <Link to="/">
              <img src={Logo} alt="regalo-logo" className="w-full h-full" />
            </Link>
          </div>

          <ul className="hidden gap-9 font-semibold list-none mb:hidden sm:hidden lg:flex">
            <li>
              <Link
                to="/"
                className="text-pn font-text font-semibold text-black no-underline cursor-pointer transition-best duration-all hover:text-blue-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className="text-pn font-text font-semibold text-black no-underline cursor-pointer hover:text-blue-500"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/Product"
                className="text-pn font-text font-semibold text-black no-underline cursor-pointer hover:text-blue-500"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className="text-pn font-text font-semibold text-black no-underline cursor-pointer hover:text-blue-500"
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="h-10 gap-10 font-semibold text-p font-text hidden items-center lg:flex">
            {/* {user ? <><Link to="/Auth"
              className="text-black cursor-pointer hover:text-blue-500">
              Sign In </Link></> : 
              <> <Link to="/Auth"
              className=" bg-blue-500 text-white py-6 px-12 rounded shadow-3xt hover:shadow-3xr hover:bg-blue-500">
              Registerb </Link>
              </>} */}
            <Link
              to="/Auth"
              className="text-black cursor-pointer hover:text-blue-500"
            >
              Sign In
            </Link>
            <Link
              to="/Auth"
              className=" bg-blue-500 text-white py-6 px-12 rounded shadow-3xt shadow-blue-300 hover:shadow-3xr hover:shadow-blue-500 hover:bg-blue-500"
            >
              Sign Up
            </Link>
          </div>

          <Link to="" className=" absolute right-32 Lp-l:right-12">
            <button className=" cursor-pointer text-bh2 hover:text-blue-500">
              <TbShoppingCart />
            </button>
          </Link>

          <button
            className=" text-bh2 absolute top-14 right-14 cursor-pointer hover:text-blue-500 lg:hidden xl:hidden 2xl:hidden transition duration-all"
            onClick={openMenu}
          >
            <TbMenu2 />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
