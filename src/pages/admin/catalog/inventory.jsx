import React from "react";

const Inventory = () => {
  const inventory = [
    { id: 1, name: "T-Shirt", stock: 100 },
    { id: 2, name: "Hoodie", stock: 50 },
    { id: 3, name: "Jeans", stock: 75 },
    // Add more inventory items here
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Inventory</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Product</th>
              <th className="px-4 py-2 border">Stock</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-2 border">{item.name}</td>
                <td className="px-4 py-2 border">{item.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
