import { jwtDecode } from "jwt-decode";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export const ProfileDashboard = () => {
  const { user, loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex items-center justify-between pb-5 border-b mb-5">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 capitalize bg-gray-300 rounded-full flex items-center justify-center text-3xl font-medium">
            {" "}
            {user && user.name[0]}
          </div>
          <div>
            <h3 className="font-semibold text-lg capitalize">
              {user && user.name}
            </h3>
            <p className="text-gray-500">{user && user.email}</p>
          </div>
        </div>
        <button
          onClick={() => navigate("/my/profile-edit")}
          className="focus:border focus:border-white focus:outline  px-4 py-2 rounded-md "
        >
          Edit Profile
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          { label: "Orders", description: "Check your order status" },
          {
            label: "Collections & Wishlist",
            description: "All your curated product collections",
          },
          {
            label: "Myntra Credit",
            description: "Manage all your refunds & gift cards",
          },
          { label: "MynCash", description: "Earn MynCash while shopping" },
          {
            label: "Saved Cards",
            description: "Save your cards for faster checkout",
          },
          { label: "Saved UPI", description: "View your saved UPI" },
          {
            label: "Wallets/BNPL",
            description: "Saved wallets for easy payment",
          },
          {
            label: "Addresses",
            description: "Manage your delivery addresses",
          },
          { label: "Coupons", description: "View your saved coupons" },
        ].map((card, index) => (
          <div
            key={index}
            className="border p-5 rounded-md hover:shadow-lg cursor-pointer"
          >
            <h4 className="font-semibold text-lg">{card.label}</h4>
            <p className="text-gray-500 text-sm mt-2">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
