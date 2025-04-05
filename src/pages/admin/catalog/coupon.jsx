import React from "react";

const AdminCoupon = () => {
  const coupons = [
    {
      campaignName: "H",
      code: "Ttdgt",
      discount: "$100",
      published: false,
      startDate: "12 Jan, 2025",
      endDate: "11 Jan, 2025",
      status: "Expired",
    },
    {
      campaignName: "Summer Gift Voucher",
      code: "SUMMER24",
      discount: "10%",
      published: true,
      startDate: "12 Jan, 2025",
      endDate: "19 Oct, 2024",
      status: "Expired",
    },
    {
      campaignName: "Winter Gift Voucher",
      code: "WINTER24",
      discount: "$100",
      published: true,
      startDate: "12 Jan, 2025",
      endDate: "1 Jun, 2024",
      status: "Expired",
    },
    {
      campaignName: "Summer Gift Voucher",
      code: "SUMMER24",
      discount: "10%",
      published: true,
      startDate: "12 Jan, 2025",
      endDate: "20 Dec, 2024",
      status: "Expired",
    },
    {
      campaignName: "August Gift Voucher",
      code: "AUGUST24",
      discount: "50%",
      published: true,
      startDate: "12 Jan, 2025",
      endDate: "31 Oct, 2024",
      status: "Expired",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Coupon</h1>
        {/* Actions */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
            Export
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
            Import
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
            Delete
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            + Add Coupon
          </button>
        </div>

        {/* Filter/Search */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by coupon code/name"
            className="w-full md:w-1/3 p-2 bg-white rounded border border-gray-300"
          />
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Filter
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
            Reset
          </button>
        </div>

        {/* Coupons Table */}
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left border border-gray-300">
                  Campaign Name
                </th>
                <th className="px-4 py-2 text-left border border-gray-300">
                  Code
                </th>
                <th className="px-4 py-2 text-left border border-gray-300">
                  Discount
                </th>
                <th className="px-4 py-2 text-center border border-gray-300">
                  Published
                </th>
                <th className="px-4 py-2 text-left border border-gray-300">
                  Start Date
                </th>
                <th className="px-4 py-2 text-left border border-gray-300">
                  End Date
                </th>
                <th className="px-4 py-2 text-center border border-gray-300">
                  Status
                </th>
                <th className="px-4 py-2 text-center border border-gray-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {coupons.map((coupon, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border border-gray-300">
                    {coupon.campaignName}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {coupon.code}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {coupon.discount}
                  </td>
                  <td className="px-4 py-2 text-center border border-gray-300">
                    <input
                      type="checkbox"
                      className="toggle-checkbox"
                      checked={coupon.published}
                      readOnly
                    />
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {coupon.startDate}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {coupon.endDate}
                  </td>
                  <td
                    className={`px-4 py-2 text-center border border-gray-300 ${
                      coupon.status === "Expired"
                        ? "text-red-500 bg-red-100 rounded"
                        : ""
                    }`}
                  >
                    {coupon.status}
                  </td>
                  <td className="px-4 py-2 text-center border border-gray-300">
                    <button className="text-yellow-500 hover:underline mr-2">
                      Edit
                    </button>
                    <button className="text-red-500 hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination */}
          <div className="flex justify-between items-center mt-4">
            <span>Showing 1-5 of 5</span>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                &lt;
              </button>
              <span>1</span>
              <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCoupon;
