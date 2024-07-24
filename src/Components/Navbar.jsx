import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../Assets/logo/regalo_logo.png"
import { TbMenu2, TbLetterX } from "react-icons/tb";
import { IoPersonSharp } from "react-icons/io5";
import { HiMiniHome } from "react-icons/hi2";
import { FcAbout } from "react-icons/fc";
import { FaCarSide } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";

const Navbar = () => {

    const [navB, setNavb] = useState(false);

    const openMenu = () => {
    setNavb(!navB);
    };

  return (
    <>
      <nav>
        <div
          className={`flex flex-col w-full h-screen fixed top-0 -left-full bg-white z-9/6 justify-center items-center transition-all duration-1/5 ease-in-out ${
            navB ? "left-0" : ""
          }`}
        >
          <button
            type="submit"
            className=" text-bh2 absolute top-14 right-14 cursor-pointer transition duration-all hover:text-text-orange"
            onClick={openMenu}
          >
            <TbLetterX className="hover:text-text-orange lg:hidden xl:hidden 2xl:hidden" />
          </button>
          <ul className=" flex flex-col gap-12 text-h3 text-center font-semibold list-none lg:hidden">
            <li>
              <Link
                to="/Auth"
                onClick={openMenu}
                className="font-text flex items-center gap-4 font-semibold text-black no-underline cursor-pointer transition-best duration-all hover:text-text-orange"
              >
                <IoPersonSharp /> Login or Signup
              </Link>
            </li>

            <li>
              <Link
                to="/"
                onClick={openMenu}
                className="font-text flex items-center gap-4 font-semibold text-black no-underline cursor-pointer transition-best duration-all hover:text-text-orange"
              >
                <HiMiniHome /> Home
              </Link>
            </li>

            <li>
              <Link
                to="/About"
                onClick={openMenu}
                className="font-text flex items-center gap-4 font-semibold text-black no-underline cursor-pointer hover:text-text-orange"
              >
                <FcAbout /> About
              </Link>
            </li>

            <li>
              <Link
                to="/Models"
                onClick={openMenu}
                className="font-text flex items-center gap-4 font-semibold text-black no-underline cursor-pointer hover:text-text-orange"
              >
                <FaCarSide /> Products
              </Link>
            </li>

            <li>
              <Link
                to="/Testimonials"
                onClick={openMenu}
                className="font-text flex items-center gap-4 font-semibold text-black no-underline cursor-pointer hover:text-text-orange"
              >
                <FaNoteSticky /> Testimonials
              </Link>
            </li>

            <li>
              <Link
                to="/Contact"
                onClick={openMenu}
                className="font-text flex items-center gap-4 font-semibold text-black no-underline cursor-pointer hover:text-text-orange"
              >
                <RiContactsFill /> Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full lg:max-w-8lx bg-transparent top-0 left-0 right-0 h-auto mx-auto my-0 px-8 py-11 flex justify-between items-center z-50">
          <div className="w-57">
            <Link to="/">
              <img src={Logo} alt="regalo-logo" className="w-full h-full" />
            </Link>
          </div>

          <ul className="hidden gap-9 font-semibold list-none mb:hidden sm:hidden lg:flex">
            <li>
              <Link
                to="/"
                className="text-pn font-text font-semibold text-black no-underline cursor-pointer transition-best duration-all hover:text-text-orange"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className="text-pn font-text font-semibold text-black no-underline cursor-pointer hover:text-text-orange"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/Product"
                className="text-pn font-text font-semibold text-black no-underline cursor-pointer hover:text-text-orange"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/Testimonials"
                className="text-pn font-text font-semibold text-black no-underline cursor-pointer hover:text-text-orange"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className="text-pn font-text font-semibold text-black no-underline cursor-pointer hover:text-text-orange"
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="h-10 gap-10 font-semibold text-p font-text hidden items-center lg:flex">
            <Link
              to="/Auth"
              className="text-black cursor-pointer hover:text-text-orange"
            >
              Sign In
            </Link>
            <Link
              to="/Auth"
              className=" bg-text-orange text-white py-6 px-12 rounded shadow-3xt hover:shadow-3xr hover:bg-text-orange"
            >
              Register
            </Link>
          </div>

          <button
            type="submit"
            className=" text-bh2 absolute top-14 right-14 cursor-pointer transition duration-all hover:text-text-orange"
            onClick={openMenu}
          >
            <TbMenu2 className="hover:text-text-orange lg:hidden xl:hidden 2xl:hidden" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
