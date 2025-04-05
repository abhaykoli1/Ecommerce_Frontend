import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export const ProfileLayout = () => {
  const location = useLocation();

  const links = [
    { label: "Overview", path: "/my/dashboard" },
    {
      label:
        location.pathname === "/my/profile-edit" ? "Profile-Edit" : "Profile",
      path: "/my/profile",
    },
    { label: "Orders & Returns", path: "/my/orders" },
    { label: "Coupons", path: "/my/coupons" },
    { label: "Myntra Credit", path: "/my/credit" },
    { label: "MynCash", path: "/my/myncash" },
    { label: "Saved Cards", path: "/my/cards" },
    { label: "Addresses", path: "/my/addresses" },
    { label: "Delete Account", path: "/my/delete-account" },
    { label: "Terms of Use", path: "/terms-of-use" },
    { label: "Privacy Policy", path: "/privacy-policy" },
  ];
  return (
    <section className="container mx-auto py-10 px-5 mt-40">
      <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-10">
        <div className="border-r pr-5 hidden lg:block">
          <h2 className="font-semibold text-xl mb-5">Account</h2>
          <ul className="space-y-3 text-gray-700">
            {links.map((link, index) => (
              <li key={index} className="cursor-pointer">
                <Link
                  to={link.path}
                  className={`hover:text-purple-600 ${
                    location.pathname === link.path ||
                    (location.pathname === "/my/profile-edit" &&
                      link.path === "/my/profile")
                      ? "text-purple-600 font-semibold"
                      : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Outlet />
      </div>
    </section>
  );
};
