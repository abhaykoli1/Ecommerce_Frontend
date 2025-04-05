import React, { useState, useEffect } from "react";
import axios from "axios";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  // Fetch users from the backend
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8080/api/v1/users");
        const users = response.data.data.map((item) => item.Users); // Extract Users object
        setCustomers(users);
        console.log(users);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div className="flex">
      <div className="p- w-full">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Customers</h1>
          <div>
            <button className="px-4 py-2 bg-green-500 text-white rounded-md mr-2">
              Export
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
              Import
            </button>
          </div>
        </header>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by name/email/phone"
            className="border p-2 w-1/2 rounded-md"
          />
          <button className="px-4 py-2 bg-green-500 text-white rounded-md ml-2">
            Filter
          </button>
          <button className="px-4 py-2 bg-gray-300 text-black rounded-md ml-2">
            Reset
          </button>
        </div>

        {/* Table */}
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2 min-w-[130px]">
                Joining Date
              </th>
              <th className="border border-gray-300 px-4 py-2 min-w-52">
                Name
              </th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Phone</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers &&
              customers.length > 0 &&
              customers
                .filter((customer) => customer.name.toLowerCase() !== "admin") // Exclude customers with name "admin"
                .map((customer, index) => (
                  <tr key={customer.id}>
                    <td className="border border-gray-300 px-4 py-2">
                      {index + 1}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 ">
                      {new Date(customer.created_at.$date).toLocaleDateString()}
                    </td>
                    <td className=" flex items-center h-full w-full justify-center border-gray-30 px-4 py-3 capitalize ">
                      {customer.name}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {customer.email}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {customer.phone || "N/A"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <a className="px-2 py-1 bg-gray-300 rounded-md mr-2">
                        View
                      </a>
                      <a className="px-2 py-1 bg-blue-500 text-white rounded-md mr-2">
                        Edit
                      </a>
                      <a className="px-2 py-1 bg-red-500 text-white rounded-md">
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
