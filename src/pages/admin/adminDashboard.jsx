import React from "react";

const AdminDashboard = () => {
  const dataCards = [
    {
      label: "Today Orders",
      value: "$0.00",
      sub: "Cash: $0.00 | Credit: $0.00",
      bg: "bg-green-500",
    },
    {
      label: "Yesterday Orders",
      value: "$874.24",
      sub: "Cash: $874.24 | Credit: $0.00",
      bg: "bg-orange-400",
    },
    { label: "This Month", value: "$16349.81", bg: "bg-blue-500" },
    { label: "Last Month", value: "$25549.54", bg: "bg-cyan-600" },
    { label: "All-Time Sales", value: "$379007.29", bg: "bg-emerald-600" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <header className="flex justify-between items-center pb-6">
        <h1 className="text-2xl font-bold text-gray-700">Dashboard Overview</h1>
      </header>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
        {dataCards.map((card, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg shadow ${card.bg} text-white`}
          >
            <h2 className="text-xl font-semibold">{card.label}</h2>
            <p className="text-2xl font-bold">{card.value}</p>
            {card.sub && <p className="text-sm">{card.sub}</p>}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h3 className="text-xl font-semibold text-gray-700">Total Order</h3>
          <p className="text-3xl font-bold text-gray-800">555</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h3 className="text-xl font-semibold text-gray-700">
            Orders Pending
          </h3>
          <p className="text-3xl font-bold text-gray-800">156</p>
          <p className="text-red-500 font-semibold">(123579.98)</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h3 className="text-xl font-semibold text-gray-700">
            Orders Processing
          </h3>
          <p className="text-3xl font-bold text-gray-800">83</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h3 className="text-xl font-semibold text-gray-700">
            Orders Delivered
          </h3>
          <p className="text-3xl font-bold text-gray-800">244</p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex justify-between gap-4 mb-6">
        <div className="bg-white p-6 rounded-lg shadow w-full">
          <h3 className="font-semibold mb-2">Weekly Sales</h3>
          {/* Replace with chart */}
          <div className="h-32 bg-gray-200"></div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow w-full">
          <h3 className="font-semibold mb-2">Best Selling Products</h3>
          {/* Replace with pie chart */}
          <div className="h-32 bg-gray-200"></div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="font-semibold mb-4">Recent Orders</h3>
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="px-4 py-2">Invoice No</th>
              <th className="px-4 py-2">Order Time</th>
              <th className="px-4 py-2">Customer Name</th>
              <th className="px-4 py-2">Method</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                id: 11556,
                time: "12 Jan, 5:29 PM",
                name: "Cailin Wyatt",
                method: "Cash",
                amount: "$510.00",
                status: "Cancel",
              },
              {
                id: 11559,
                time: "12 Jan, 5:12 PM",
                name: "Ciaran Hancock",
                method: "Cash",
                amount: "$284.04",
                status: "Pending",
              },
            ].map((order) => (
              <tr key={order.id} className="border-t">
                <td className="px-4 py-2">{order.id}</td>
                <td className="px-4 py-2">{order.time}</td>
                <td className="px-4 py-2">{order.name}</td>
                <td className="px-4 py-2">{order.method}</td>
                <td className="px-4 py-2">{order.amount}</td>
                <td className="px-4 py-2">{order.status}</td>
                <td className="px-4 py-2">
                  <button className="bg-red-500 text-white px-2 py-1 rounded">
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
