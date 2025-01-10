import React, { useState } from "react";
import sideImage from "../assets/side.webp";

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://127.0.0.1:8080/api/v1/registration",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // Store token and user in localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("isAuthenticated", data.isAuthenticated);
        localStorage.setItem("user", JSON.stringify(data.user));

        setResponseMessage(data.message);
        setErrorMessage("");
        setFormData({ name: "", email: "", password: "", phone: "" });
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.detail || "An error occurred");
      }
    } catch (error) {
      setErrorMessage("Failed to register. Please try again.");
    }
  };

  return (
    <section className="bg-white">
      <div className="lg:container mx-auto grid lg:grid-cols-[450px_1fr] grid-cols-1 pt-20 gap-10 lg:px-10 md:px-10 px-5 h-[100vh] items-center">
        <div className="flex flex-col items-center max-w-[450px] w-full">
          <div className="w-full max-w-md">
            <div className="flex flex-col w-full">
              <h1>REGISTER</h1>
              <h3 className="!text-start">
                Already have an account?{" "}
                <a href="/login" className="text-blue-500">
                  Login
                </a>
              </h3>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col w-full">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="mt-5 bg-transparent placeholder:text-black"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="mt-5 bg-transparent placeholder:text-black"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="mt-5 bg-transparent placeholder:text-black"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="mt-5 bg-transparent placeholder:text-black"
                required
              />

              <button
                type="submit"
                className="mt-5 focus:border focus:border-white focus:outline"
              >
                Register
              </button>
            </form>

            {/* Display response messages */}
            {responseMessage && (
              <p className="mt-3 text-green-500">{responseMessage}</p>
            )}
            {errorMessage && (
              <p className="mt-3 text-red-500">{errorMessage}</p>
            )}
          </div>
        </div>
        <div className="lg:flex hidden">
          <img src={sideImage} alt="image" className="rounded-xl" />
        </div>
      </div>
    </section>
  );
};
