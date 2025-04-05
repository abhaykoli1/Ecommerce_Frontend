import React from "react";

const AdminCategories = () => {
  const categories = [
    {
      id: "0C24",
      icon: "🍖",
      name: "Fish & Meat",
      description: "Fish & Meat",
      published: true,
    },
    {
      id: "0BEB",
      icon: "🥬",
      name: "Fruits & Vegetable",
      description: "Fruits & Vegetable",
      published: true,
    },
    {
      id: "0BC4",
      icon: "🍳",
      name: "Cooking Essentials",
      description: "Cooking Essentials",
      published: true,
    },
    {
      id: "0BA0",
      icon: "🍪",
      name: "Biscuits & Cakes",
      description: "Biscuits & Cakes",
      published: true,
    },
    // Add more categories here
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Category</h1>
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
            + Add Category
          </button>
        </div>

        {/* Filter/Search */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by Category name"
            className="w-full md:w-1/3 p-2 bg-white rounded border border-gray-300"
          />
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Filter
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
            Reset
          </button>
          <div className="flex items-center gap-2">
            <label>Parents Only</label>
            <input type="checkbox" className="toggle-checkbox" />
          </div>
        </div>

        {/* Categories Table */}
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left border border-gray-300">
                  ID
                </th>
                <th className="px-4 py-2 text-left border border-gray-300">
                  Icon
                </th>
                <th className="px-4 py-2 text-left border border-gray-300">
                  Name
                </th>
                <th className="px-4 py-2 text-left border border-gray-300">
                  Description
                </th>
                <th className="px-4 py-2 text-center border border-gray-300">
                  Published
                </th>
                <th className="px-4 py-2 text-center border border-gray-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.id}>
                  <td className="px-4 py-2 border border-gray-300">
                    {category.id}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    <span className="text-2xl">{category.icon}</span>
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {category.name}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {category.description}
                  </td>
                  <td className="px-4 py-2 text-center border border-gray-300">
                    <input
                      type="checkbox"
                      className="toggle-checkbox"
                      checked={category.published}
                      readOnly
                    />
                  </td>
                  <td className="px-4 py-2 text-center border border-gray-300">
                    <button className="text-blue-500 hover:underline mr-2">
                      View
                    </button>
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
        </div>
      </div>
    </div>
  );
};

export default AdminCategories;
