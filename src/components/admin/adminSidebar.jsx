import {
  ChevronLeftIcon,
  LayoutDashboard,
  LogOut,
  User,
  Users,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  FaHome,
  FaBox,
  FaUsers,
  FaClipboardList,
  FaUsers as FaUsersIcon,
  FaCogs,
  FaGlobe,
  FaStore,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

const AdminSidebar = ({ sidebar, setSidebar }) => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1024px)" });
  const islargeScreen = useMediaQuery({ query: "(max-width: 1023px)" });
  function handleClose() {
    {
      isSmallScreen
        ? setSidebar(false)
        : islargeScreen
        ? setSidebar(true)
        : null;
    }
  }
  useEffect(() => {
    {
      isSmallScreen
        ? setSidebar(false)
        : islargeScreen
        ? setSidebar(true)
        : null;
    }
  }, [isSmallScreen, islargeScreen]);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [inventoryOpen, setInventoryOpen] = useState(false);
  const [onlineStoreOpen, setOnlineStoreOpen] = useState(false);

  const navigate = useNavigate();
  function logout() {
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("userEmail");
    navigate("/");
  }

  return (
    <div
      className={`h-full w-60  p-6  z-20 fixed bg-gray-800 text-white  duration-500 transition-all 
      ${sidebar ? "" : "-translate-x-60"}`}
    >
      {sidebar ? (
        <div
          onClick={() => setSidebar(false)}
          variant="outline"
          className="lg:hidden cursor-pointer flex h-8 w-9 absolute  items-center justify-center rounded  top-5 -right-5 bg-gray-900 shadow  border-gray-100 border-[.5px]"
        >
          <ChevronLeftIcon className="h-6 w-6 " color="#fff" />
        </div>
      ) : null}

      <h2 className="text-2xl font-bold mb-6">Ecommerce</h2>
      <div className="flex flex-col  justify-between h-full">
        <div>
          <ul className="space-y-4">
            <li className="flex items-center gap-5">
              <LayoutDashboard size={20} />
              <a href="/admin">
                <span>Dashboard</span>
              </a>
            </li>
            <li className=" ">
              <li className="flex items-center gap-5">
                <FaBox size={18} />
                <div
                  onClick={() => setCatalogOpen(!catalogOpen)}
                  className=" flex items-center justify-start gap-5 bg-transparent hover:bg-transparent hover:outline-none hover:border-none border-none outline-none focus:outline-none"
                >
                  Catalog
                  {catalogOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </li>
              {catalogOpen && (
                <ul className="ml-10 space-y-2 list-disc pl-5 pt-3">
                  <li className="flex items-center space-x-2">
                    <a href="/admin/products">
                      <li>
                        <span>Products</span>
                      </li>
                    </a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <a href="/admin/categories">
                      <li>
                        <span>Categories</span>
                      </li>
                    </a>
                  </li>
                  <li className="flex items-center space-x-2 ">
                    <a href="/admin/add-Coupon">
                      <li>
                        <span>Coupon</span>
                      </li>
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li className="flex items-center gap-5">
              <a href="/admin/all-Users" className="flex gap-5">
                <Users size={20} />
                <span>Customers</span>
              </a>
            </li>

            <li className="flex items-center gap-5 ">
              <FaClipboardList size={20} />
              <span>Orders</span>
            </li>

            <li className="flex items-center gap-5 ">
              <FaUsersIcon size={20} />
              <span>Our Staff</span>
            </li>

            <li className="flex items-center gap-5 ">
              <FaCogs size={20} />
              <span>Settings</span>
            </li>

            <li className="">
              <li className="flex items-center gap-5">
                <FaStore size={19} />
                <div
                  onClick={() => setOnlineStoreOpen(!onlineStoreOpen)}
                  className="flex items-center justify-start gap-5 bg-transparent hover:bg-transparent hover:outline-none hover:border-none border-none outline-none focus:outline-none"
                >
                  <span>Online Store</span>
                  {onlineStoreOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </li>
              {onlineStoreOpen && (
                <ul className="ml-10 space-y-2 list-disc pl-5 pt-3">
                  <li className="flex items-center space-x-2">
                    <a href="/admin/products">
                      <li>
                        <span>Products</span>
                      </li>
                    </a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <a href="/admin/products">
                      <li>
                        <span>Categories</span>
                      </li>
                    </a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <a href="/admin/products">
                      <li>
                        <span>Brands</span>
                      </li>
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li className="flex items-center  gap-5">
              <FaCogs size={20} />
              <span>Pages</span>
            </li>
          </ul>
        </div>
        <button
          onClick={() => logout()}
          className="hover:scale-[99%] flex gap-5 justify-center font-bold w-full text-[15px]  py-2 rounded text-slate-800 bg-white hover:bg-whitesmoke border:gray-900 border-2 mb-12"
        >
          <LogOut size={20} /> Log Out
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
