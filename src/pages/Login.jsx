import React, { useState } from "react";
import sideImage from "../assets/side.webp";
// import { useToast } from "@/hooks/use-toast";

export const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   const response = await fetch("http://127.0.0.1:8080/api/v1/login", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(formData),
    //   });
    //   console.log(response);
    //   if (response.status === 200) {
    //     const data = await response.json();
    //     // Store token and user in localStorage
    //     localStorage.setItem("isAuthenticated", data.isAuthenticated);
    //     localStorage.setItem("token", data.token);
    //     localStorage.setItem("user", JSON.stringify(data.user));
    //     window.location.href = "/";
    //     setResponseMessage(data.message);
    //     setErrorMessage("");
    //     setFormData({ email: "", password: "" });
    //   } else {
    //     const errorData = await response.json();
    //     setErrorMessage(errorData.detail || "Invalid email or password");
    //   }
    // } catch (error) {
    //   setErrorMessage("Failed to login. Please try again.");
    // }
  };

  return (
    <section className="bg-white -300">
      <div className="lg:container mx-auto bg-purple- grid lg:grid-cols-[450px_1fr] grid-cols-1 pt-20 gap-10 lg:px-10 md:px-10 px-5 h-[100vh] items-center">
        <div className="flex flex-col items-center max-w-[450px] w-full">
          <div className="w-full max-w-md">
            <div className="flex flex-col w-full">
              <h1>LOGIN</h1>
              <h3 className="!text-start">
                Create an Account?{" "}
                <a href="/register" className="text-purple-600">
                  Register
                </a>
              </h3>
            </div>

            {errorMessage && (
              <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
            )}
            {responseMessage && (
              <div className="text-green-500 text-sm mt-2">
                {responseMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col w-full">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="mt-5 bg-transparent placeholder:text-black"
                required
              />

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="mt-5 bg-transparent placeholder:text-black"
                required
              />

              <button
                type="submit"
                className="focus:border focus:border-white focus:outline"
              >
                Login
              </button>
            </form>
            {/* <button onClick={() => call()}>Call</button> */}
          </div>
        </div>
        <div className="lg:flex hidden">
          <img src={sideImage} alt="image" className="rounded-xl" />
        </div>
      </div>
    </section>
  );
};
