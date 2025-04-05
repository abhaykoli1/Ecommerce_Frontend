import { Menu, X } from "lucide-react";
import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";

const AdminHeader = ({ sidebar, setSidebar }) => {
  return (
    <div className="bg-gray-800 fixed top-0 right-0 left-0 z-10 text-white flex justify-between items-center px-6 py-4">
      <div className="border-[0.5px] lg:hidden  rounded-md">
        {!sidebar ? (
          <Menu
            onClick={() => setSidebar(!sidebar)}
            size={34}
            className={`text-white  w-[40px] p-1 cursor-pointer`}
          />
        ) : (
          <X
            onClick={() => setSidebar(!sidebar)}
            size={32}
            className={`text-white  h-[34px] w-[40px] p-1 cursor-pointer`}
          />
        )}
      </div>
      <span></span>
      {/* <h1 className="text-2xl font-semibold">Dashboard Overview</h1> */}
      <div className="flex items-center space-x-6">
        {/* <span className="cursor-pointer">ENGLISH</span> */}
        <div className="relative cursor-pointer">
          <FaBell size={20} />
          <span className="absolute -top-2 -right-2 bg-red-600 text-xs px-1 rounded-full">
            0
          </span>
        </div>
        <FaUserCircle size={30} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default AdminHeader;
