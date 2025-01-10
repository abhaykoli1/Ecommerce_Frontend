import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserNavItems } from "../config";

import { IoMdHeartEmpty } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { HiOutlineUserCircle } from "react-icons/hi2";
import Avtar from "./Avtar";

export const Header = ({ sidebar, setSidebar }) => {
  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  const isAuthenticated = localStorage.getItem("token") ? true : false;

  const navigate = useNavigate();
  return (
    <header className="bg-white fixed top-0 left-0 right-0 h-20 shadow-xl z-10">
      <div className="lg:container lg:px-10 md:px-10 px-5 h-20 mx-auto flex gap-2 items-center justify-between">
        <div className="flex gap-5 w-full">
          <div className="text-black text-3xl font-bold ">Logo</div>
          <input
            type="text"
            className="py-[10px] border-white focus:outline-none px-[18px] max-w-72 w-full rounded-md bg-gray-100/70 text-slate-800 text-md hover:scale-[99%] focus:scale-[99%] "
            placeholder="What are you looking for?"
          />
        </div>

        <div className="flex gap-3 items-center">
          <nav className="lg:flex  hidden items-center ">
            {UserNavItems.map((nav) => (
              <ul key={nav.id} className="flex text-md font-bold uppercase">
                <li className="mr-5 fle flex-col relative">
                  <NavLink
                    onClick={() => {
                      goTop();
                    }}
                    to={nav.path}
                    className={({ isActive }) =>
                      `cursor-pointer  text-[15px] mb-10 font-bold  focus:text-primary  ${
                        isActive ? "text-primary" : "!text-black"
                      }`
                    }
                  >
                    {nav.label}
                    {/* {isAuthenticated
                      ? nav.id === "5"
                        ? null
                        : nav.label
                      : nav.label} */}
                  </NavLink>
                  <div
                    className={({ isActive }) =>
                      ` absolute top-12 left-0 right-0   border-red-500 border-b-4  ${
                        isActive ? "border-primary" : "!border-black"
                      }`
                    }
                  ></div>
                </li>
              </ul>
            ))}
          </nav>
          <IoMdHeartEmpty
            size={37}
            className="text-black hover:bg-gray-100/40 cursor-pointer rounded-full p-[4px] hover:p-[4.5px]"
          />
          <IoBagHandleOutline
            size={35}
            className="text-black  hover:bg-gray-100/40 cursor-pointer  rounded-full p-[4px] hover:p-[4.5px]"
          />
          {isAuthenticated ? (
            <Avtar
              AvtarClass={
                "w-48 duration-500  transition-all lg:mt-20 md:mt-20 mt-[68px] -mr-11"
              }
            />
          ) : (
            <a
              className="bg-transparent border font-medium hover:scale-[98%] hover:bg-gray-100  px-3 rounded-md  flex items-center  border-black h-[30px]  text-black hover"
              href="/login"
            >
              Login
            </a>
          )}
          <HiMiniBars3CenterLeft
            size={32}
            className={`text-black lg:hidden cursor-pointer  ${
              !sidebar ? "rotate-180" : "rotate-0"
            }`}
            onClick={() => setSidebar(!sidebar)}
          />
        </div>
      </div>
    </header>
  );
};
