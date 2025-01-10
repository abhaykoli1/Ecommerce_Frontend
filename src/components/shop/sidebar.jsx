import { useState } from "react";
import { NavLink } from "react-router-dom";
import { UserNavItems } from "../config";

export const Sidebar = ({ sidebar, setSidebar }) => {
  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div>
      {/* Sidebar */}
      <div
        className={`fixed top-20 border-t right-0 h-full w-60 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          sidebar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="p-6">
          {UserNavItems.map((nav) => (
            <ul key={nav.id} className="mb-4">
              <li>
                <NavLink
                  onClick={() => {
                    goTop();
                    setSidebar(false);
                  }}
                  to={nav.path}
                  className={({ isActive }) =>
                    `cursor-pointer text-[15px] font-bold uppercase TextHover hover:underline focus:text-primary ${
                      isActive ? "text-primary" : "!text-black"
                    }`
                  }
                >
                  {nav.label}
                </NavLink>
              </li>
            </ul>
          ))}
        </nav>
      </div>
    </div>
  );
};
