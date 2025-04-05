import React from "react";
import { FaSocks, FaTshirt, FaUserTie } from "react-icons/fa";
// import {
//   FaTshirt,
//   FaUserTie,
//   FaJacket,
//   FaMale,
//   FaPants,
//   FaSocks,
// } from "react-icons/fa";

function BrowseByCategory() {
  const categories = [
    { id: 1, icon: <FaTshirt />, name: "T-Shirts", url: "/category/t-shirts" },
    { id: 2, icon: <FaUserTie />, name: "Shirts", url: "/category/shirts" },
    { id: 3, icon: <FaTshirt />, name: "Jackets", url: "/category/jackets" },
    { id: 4, icon: <FaUserTie />, name: "Trousers", url: "/category/trousers" },
    { id: 5, icon: <FaTshirt />, name: "Hoodies", url: "/category/hoodies" },
    { id: 6, icon: <FaSocks />, name: "Pants", url: "/category/pants" },
  ];

  return (
    <section className="py-12">
      <div className="lg:container mx-auto px-5">
        <div className="mb-8">
          <p className="text-red-500 font-semibold text-sm uppercase">
            Categories
          </p>
          <h1 className="text-4xl font-bold">Browse By Category</h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <a
              key={category.id}
              href={category.url}
              className="flex flex-col items-center justify-center border rounded-lg p-6 hover:bg-red-100 group"
            >
              <div className="text-4xl text-red-500 group-hover:text-red-700 mb-4">
                {category.icon}
              </div>
              <p className="text-lg font-medium text-black group-hover:text-red-700">
                {category.name}
              </p>
            </a>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-8 text-center">
          <a
            href="/categories"
            className="px-6 py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}

export default BrowseByCategory;
