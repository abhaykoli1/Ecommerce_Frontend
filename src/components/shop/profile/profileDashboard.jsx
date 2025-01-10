import { jwtDecode } from "jwt-decode";
import React, { useState } from "react";

export const ProfileDashboard = () => {
    const token = localStorage.getItem("token");
  let decodedEmail = "";

  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      console.log("Decoded Token:", decodedToken);
      decodedEmail = decodedToken.sub.email;
    } catch (error) {
      console.error("Invalid token:", error);
    }
  }

  const [email, setEmail] = useState(decodedEmail);

  console.log(email);
  return (
    <div>
      <div className="flex items-center justify-between pb-5 border-b mb-5">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
          <div>
            <h3 className="font-semibold text-lg">Abhay</h3>

            {token && <p className="text-gray-500">{email}</p>}
          </div>
        </div>
        <button className="border px-4 py-2 rounded-md text-purple-600 border-purple-600 hover:bg-purple-100">
          Edit Profile
        </button>
      </div>

      {/* Cards Section */}
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
