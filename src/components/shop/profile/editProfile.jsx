import React, { useState } from "react";
import { useSelector } from "react-redux";

export const EditProfile = () => {
  const { user, loading, error } = useSelector((state) => state.user);
  console.log(user);

  const handleSave = (data) => {
    console.log("Saved Data:", data);
    // Call API to save the updated data
  };

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    gender: user?.gender || "",
    dob: user?.dob || "",
    alternateMobile: user?.alternateMobile || "",
    hintName: user?.hintName || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(formData);
  };

  return (
    <div className="x-10">
      {/* Header */}
      {/* <h1 className="text-2xl font-bold text-center mb-6">Edit Details</h1> */}
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
        {/* <button className="focus:border focus:border-white focus:outline  px-4 py-2 rounded-md ">
          Edit Profile
        </button> */}
      </div>
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Mobile Number */}
        <div className="flex w-full gap-5">
          <div className="w-full">
            <label className="block text-sm text-gray-500 mb-1">
              Mobile Number *
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-md"
                readOnly
              />
              {/* <button
                type="button"
                className="bg-gray-200 px-4 py-2 rounded-md text-gray-700"
              >
                Change
              </button> */}
            </div>
          </div>
          {/* Alternate Mobile */}
          <div className="w-full">
            <label className="block text-sm text-gray-500 mb-1">
              Alternate Mobile
            </label>
            <input
              type="text"
              name="alternateMobile"
              value={formData.alternateMobile}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>
        </div>

        <div className="flex gap-5 w-full">
          <div className="w-full">
            <label className="block text-sm text-gray-500 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>
          {/* Gender */}
          <div>
            <label className="block text-sm text-gray-500 mb-1">Gender</label>
            <div className="flex gap-4">
              {/* Male Option */}
              <label
                className={`flex items-center border-b-black justify-center border rounded-md px-4 py-2 cursor-pointer ${
                  formData.gender === "Male"
                    ? "bg-purple-100 border-purple-500"
                    : "bg-white border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                  className="hidden"
                />
                Male
              </label>

              {/* Female Option */}
              <label
                className={`flex items-center justify-center border-b-black border rounded-md px-4 py-2 cursor-pointer ${
                  formData.gender === "Female"
                    ? "bg-purple-100 border-purple-500"
                    : "bg-white border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                  className="hidden"
                />
                Female
              </label>
            </div>
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm text-gray-500 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={user && user?.email}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md"
            // disabled
          />
        </div>

        <div className="flex fle w-full gap-5">
          <div className="w-full">
            <label className="block text-sm text-gray-500 mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>

          <div className="text-center mt-6 w-full">
            <button
              type="submit"
              className="bg-pink-500 w-full text-white px-6 py-2 rounded-md hover:bg-pink-600"
            >
              Save Details
            </button>
          </div>
        </div>

        {/* Save Details Button */}
      </form>
    </div>
  );
};
