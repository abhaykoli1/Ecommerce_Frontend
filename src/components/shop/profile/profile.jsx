import { fetchUserById } from "@/store/users-slice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const UserProfile = () => {
  const { user, loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  return (
    <div className="container mx-auto">
      <div className="  bg-white">
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

        {/* Profile Content */}
        <div className="grid grid-cols-2 gap-4 border-b py-6">
          <div>
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="font-medium capitalize">
              {(user && user?.name) || "- not added -"}
            </p>
          </div>
          {/* Row: Date of Birth */}
          <div>
            <p className="text-sm text-gray-500">Date of Birth</p>
            <p className="font-medium">
              {(user && user?.dob) || "- not added -"}
            </p>
          </div>
          {/* Row: Email ID */}
          <div>
            <p className="text-sm text-gray-500">Email ID</p>
            <p className="font-medium">
              {(user && user?.email) || "- not added -"}
            </p>
          </div>
          {/* Row: Gender */}
          <div>
            <p className="text-sm text-gray-500">Gender</p>
            <p className="font-medium">
              {(user && user?.gender) || "- not added -"}
            </p>
          </div>

          {/* Row: Mobile Number */}
          <div>
            <p className="text-sm text-gray-500">Mobile Number</p>
            <p className="font-medium">
              {(user && user?.phone) || "- not added -"}
            </p>
          </div>
          {/* Row: Location */}
          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p className="font-medium">
              {(user && user?.location) || "- not added -"}
            </p>
          </div>
          {/* Row: Alternate Mobile */}
          <div>
            <p className="text-sm text-gray-500">Alternate Mobile</p>
            <p className="font-medium">
              {(user && user?.alternateMobile) || "- not added -"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
