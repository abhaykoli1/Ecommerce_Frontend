import React from "react";

const Brands = () => {
  const brands = [
    { id: 1, name: "Brand A", description: "Premium quality clothing" },
    { id: 2, name: "Brand B", description: "Affordable fashion for everyone" },
    { id: 3, name: "Brand C", description: "Sustainable and eco-friendly" },
    // Add more brands here
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Our Brands</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-lg font-semibold">{brand.name}</h2>
            <p className="text-gray-500">{brand.description}</p>
            <button className="bg-yellow-500 text-white px-4 py-2 mt-4 rounded hover:bg-yellow-600">
              View More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
