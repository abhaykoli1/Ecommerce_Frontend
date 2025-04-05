import React, { Fragment, useEffect, useState } from "react";
import { LogOut, User, UserCog } from "lucide-react";
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
import { useSelector } from "react-redux";

const Avtar = ({ hi, AvtarClass }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);
  const navigate = useNavigate();

  function logout() {
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("userEmail");
    window.location.reload();
  }
  const { user, loading, error } = useSelector((state) => state.user);

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
                {user ? user?.name : ""}
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
