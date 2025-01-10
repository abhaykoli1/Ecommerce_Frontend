import React, { Fragment, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { LogOut, User, UserCog } from "lucide-react";

// import {

// } from "../ui/dropdown-menu";

import { Avatar, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi2";

const Avtar = ({ hi, AvtarClass }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    window.location.reload();
  }

  return (
    <Fragment>
      <div className="relative">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <HiOutlineUserCircle
                onClick={toggleDropdown}
                size={38}
                className="text-black  hover:bg-gray-100/40 cursor-pointer  rounded-full p-[4px] hover:p-[4.5px]"
              />
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="right"
            className={`${AvtarClass} !bg-white !text-slate-800 !border-[0.5px]`}
          >
            <DropdownMenuLabel className="!py-2.5  px-3">
              <span className={`${hi === false && "hidden"}`}>Hi, </span>
              <span className="capitalize ">
                {/* {user?.userName?.replace(/(_\d+)$/, "")} */}
              </span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem
              className="px-3"
              onClick={() => navigate("/my/profile")}
            >
              <User className="mr-2 h-4 w-4" />
              My Account
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="px-3" onClick={() => logout()}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Fragment>
  );
};

export default Avtar;
