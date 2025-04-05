import React, { useState } from "react";
import CommonForm from "../common/form";
import { productFormElements } from "../config";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    description: "",
    category: "",
    brand: "",
    price: "",
    sale_price: "",
    total_stock: "",
    average_review: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await fetch(
        "http://127.0.0.1:8080/api/v1/add-new-product",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setMessage(result.message);
        setFormData({
          image: "",
          title: "",
          description: "",
          category: "",
          brand: "",
          price: "",
          sale_price: "",
          total_stock: "",
          average_review: "",
        });
      } else {
        setError(result.detail || "An error occurred.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Unable to add the product. Please try again later.");
    }
  };

  return (
    <div className="add-product-form">
      <h2>Add New Product</h2>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSubmit}>
        
        {/* <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div> */}

        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Brand:</label>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Sale Price:</label>
          <input
            type="number"
            name="sale_price"
            value={formData.sale_price}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Total Stock:</label>
          <input
            type="number"
            name="total_stock"
            value={formData.total_stock}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Average Review:</label>
          <input
            type="number"
            name="average_review"
            value={formData.average_review}
            onChange={handleChange}
            step="0.1"
          />
        </div>

        <button type="submit">Add Product</button>
      </form>

{/* <CommonForm/> */}
      <CommonForm
        onSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
        buttonCss={"bg-slate-800 text-white"}
        // buttonText={currentEditedId !== null ? "Edit" : "Add"}
        formControls={productFormElements}
      />
    </div>
  );
};

export default AddProduct;
