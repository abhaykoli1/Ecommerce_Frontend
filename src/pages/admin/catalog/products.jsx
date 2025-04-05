import AddProduct from "@/components/admin/addProduct";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import React, { useEffect, useState } from "react";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch product data from the FastAPI backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8080/api/v1/get-allService"
        );

        // If response is OK, parse JSON data
        if (response.ok) {
          const data = await response.json();
          // console.log(data.data[0].products);

          if (data.status === 200) {
            setProducts(data.data); // Set products in state
          } else {
            setError("Error fetching products");
          }
        } else {
          setError("Failed to fetch data from API");
        }
      } catch (err) {
        setError(`Error: ${err.message}`);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchData();
  }, []);

  console.log(products);

  // Render loading, error, or product data
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  // const products = [
  //   {
  //     id: 1,
  //     name: "Onion",
  //     category: "Men",
  //     price: "$60.00",
  //     salePrice: "$57.93",
  //     stock: 200,
  //     status: "Selling",
  //     published: true,
  //   },
  //   {
  //     id: 2,
  //     name: "Himalaya Powder",
  //     category: "Skin Care",
  //     price: "$174.97",
  //     salePrice: "$160.00",
  //     stock: 5472,
  //     status: "Selling",
  //     published: true,
  //   },
  //   {
  //     id: 3,
  //     name: "Green Leaf Lettuce",
  //     category: "Fresh Vegetable",
  //     price: "$112.72",
  //     salePrice: "$112.72",
  //     stock: 462,
  //     status: "Selling",
  //     published: true,
  //   },
  //   {
  //     id: 4,
  //     name: "Rainbow Chard",
  //     category: "Fresh Vegetable",
  //     price: "$7.07",
  //     salePrice: "$7.07",
  //     stock: 472,
  //     status: "Selling",
  //     published: false,
  //   },
  //   {
  //     id: 4,
  //     name: "Rainbow Chard",
  //     category: "Fresh Vegetable",
  //     price: "$7.07",
  //     salePrice: "$7.07",
  //     stock: 472,
  //     status: "Selling",
  //     published: false,
  //   },
  //   {
  //     id: 4,
  //     name: "Rainbow Chard",
  //     category: "Fresh Vegetable",
  //     price: "$7.07",
  //     salePrice: "$7.07",
  //     stock: 472,
  //     status: "Selling",
  //     published: false,
  //   },
  //   {
  //     id: 4,
  //     name: "Rainbow Chard",
  //     category: "Fresh Vegetable",
  //     price: "$7.07",
  //     salePrice: "$7.07",
  //     stock: 472,
  //     status: "Selling",
  //     published: false,
  //   },
  //   {
  //     id: 4,
  //     name: "Rainbow Chard",
  //     category: "Fresh Vegetable",
  //     price: "$7.07",
  //     salePrice: "$7.07",
  //     stock: 472,
  //     status: "Selling",
  //     published: false,
  //   },
  //   {
  //     id: 4,
  //     name: "Rainbow Chard",
  //     category: "Fresh Vegetable",
  //     price: "$7.07",
  //     salePrice: "$7.07",
  //     stock: 472,
  //     status: "Selling",
  //     published: false,
  //   },
  //   {
  //     id: 4,
  //     name: "Rainbow Chard",
  //     category: "Fresh Vegetable",
  //     price: "$7.07",
  //     salePrice: "$7.07",
  //     stock: 472,
  //     status: "Selling",
  //     published: false,
  //   },
  //   {
  //     id: 4,
  //     name: "Rainbow Chard",
  //     category: "Fresh Vegetable",
  //     price: "$7.07",
  //     salePrice: "$7.07",
  //     stock: 472,
  //     status: "Selling",
  //     published: false,
  //   },
  //   {
  //     id: 4,
  //     name: "Rainbow Chard",
  //     category: "Fresh Vegetable",
  //     price: "$7.07",
  //     salePrice: "$7.07",
  //     stock: 472,
  //     status: "Selling",
  //     published: false,
  //   },
  //   {
  //     id: 4,
  //     name: "Rainbow Chard",
  //     category: "Fresh Vegetable",
  //     price: "$7.07",
  //     salePrice: "$7.07",
  //     stock: 472,
  //     status: "Selling",
  //     published: false,
  //   },
  //   {
  //     id: 4,
  //     name: "Rainbow Chard",
  //     category: "Fresh Vegetable",
  //     price: "$7.07",
  //     salePrice: "$7.07",
  //     stock: 472,
  //     status: "Selling",
  //     published: false,
  //   },
  //   {
  //     id: 4,
  //     name: "Rainbow Chard",
  //     category: "Fresh Vegetable",
  //     price: "$7.07",
  //     salePrice: "$7.07",
  //     stock: 472,
  //     status: "Selling",
  //     published: false,
  //   },
  //   {
  //     id: 4,
  //     name: "Rainbow Chard",
  //     category: "Fresh Vegetable",
  //     price: "$7.07",
  //     salePrice: "$7.07",
  //     stock: 472,
  //     status: "Selling",
  //     published: false,
  //   },
  //   // Add more product objects here
  // ];

  const [openAddProducts, setOpenAddProducts] = useState();

  return (
    <div className="min-h-screen">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Products</h1>

        <div className="flex flex-wrap items-center p-7 rounded-lg gap-4 mb-6 bg-white">
          <input
            type="text"
            placeholder="Search Product"
            className="w-full md:w-1/3 p-2 bg-gray-100 py-[11.5px] rounded text-slate-800 border-none"
          />
          <select className="w-full md:w-1/5 p-2 bg-gray-100 py-[11.5px] rounded text-slate-800 border-none">
            <option value="">Category</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
          </select>
          <select className="w-full md:w-1/5 p-2 py-[11.5px] bg-gray-100 rounded text-slate-800 border-none">
            <option value="">Price</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>
          <button className="px-4 py-2  bg-green-500 rounded hover:bg-green-600">
            Filter
          </button>
          <button className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">
            Reset
          </button>

          <button
            onClick={() => setOpenAddProducts(true)}
            className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
          >
            Add Product
          </button>
        </div>
        <Sheet
          open={openAddProducts}
          onOpenChange={() => {
            setOpenAddProducts(false);
            // setCurrentEditedId(null);
            // setFormData(initialFormData);
          }}
        >
          <SheetContent
            side="right"
            className="overflow-auto !bg-white !text-slate-800"
          >
            <SheetHeader>
              <SheetTitle className="text-slate-800">Add Products</SheetTitle>
            </SheetHeader>
            <AddProduct />
          </SheetContent>
        </Sheet>
        {/* Product Table */}
        <div className="">
          <table className="w-full bg-white text-slate-800 rounded-lg border-none border-gray-300 shadow-md">
            <thead className="bg-gray-100 rounded-t-lg">
              <tr>
                <th className="px-4 py-2 text-left border border-gray-700">
                  Product Name
                </th>
                <th className="px-4 py-2 text-left border border-gray-700">
                  Category
                </th>
                <th className="px-4 py-2 text-left border border-gray-700">
                  Price
                </th>
                <th className="px-4 py-2 text-left border border-gray-700">
                  Sale Price
                </th>
                <th className="px-4 py-2 text-left border border-gray-700">
                  Stock
                </th>
                <th className="px-4 py-2 text-left border border-gray-700">
                  Status
                </th>
                <th className="px-4 py-2 text-center border border-gray-700">
                  Published
                </th>
                <th className="px-4 py-2 text-center border border-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                products.map((product, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 border border-gray-700">
                      {product.details.name}
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      {product.details.category}
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      {product.details.price}
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      {product.details.sale_price}
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      {product.details.total_stock}
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      <span
                        className={`${
                          product.details.status === "Selling"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {product.details.status}
                      </span>
                    </td>
                    <td className="px-4 py-2 text-center border border-gray-700">
                      <input
                        type="checkbox"
                        className="toggle-checkbox"
                        checked={product.details.published}
                        readOnly
                      />
                    </td>
                    <td className="px-4 py-2 text-center border border-gray-700">
                      <a className="text-blue-500 hover:underline mr-2">View</a>
                      <a className="text-yellow-500 hover:underline mr-2">
                        Edit
                      </a>
                      <a className="text-red-500 hover:underline">Delete</a>
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

export default AdminProducts;
