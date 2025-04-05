import React, { useState } from "react";
import sideImage from "../../assets/side.webp";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { toast } from "react-toastify";

export const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  // const { toast } = useToast();

  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:8080/api/v1/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.status === 200) {
        const currentTime = Date.now();
        // sessionStorage.setItem("userEmail", data.email);
        sessionStorage.setItem("isLoggedIn", data.isLoggedin);
        sessionStorage.setItem("userId", data.id);
        sessionStorage.setItem("loginTime", currentTime);
        toast(data.message);
        // window.location.reload();
        if (sessionStorage.getItem("user") === "admin") {
          navigate("/admin");
        } else navigate("/");

        setFormData({ email: "", password: "" });
      } else {
        toast.error(data.detail);
      }
    } catch (error) {
      toast.error("Failed to login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white -300">
      <div className="lg:container  mx-auto  grid lg:grid-cols-[450px_1fr] grid-cols-1 pt-20 gap-10 lg:px-10 md:px-10 px-5 h-[100vh] items-center">
        <div className="flex items-center w-full justify-center">
          <div className="flex flex-col  items-center max-w-[450px] w-full">
            <div className="w-full max-w-md">
              <div className="flex flex-col w-full">
                <h1>LOGIN</h1>
                <h3 className="!text-start">
                  Don't have an account?{" "}
                  <a href="/register" className="text-purple-600">
                    Register
                  </a>
                </h3>
              </div>

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
                  className={`mt-5 focus:border focus:border-white focus:outline ${
                    loading ? "animate-bounce  text-white" : ""
                  }`}
                  disabled={loading}
                >
                  {loading ? "Logging In..." : "Login"}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="lg:flex hidden">
          <img src={sideImage} alt="image" className="rounded-xl" />
        </div>
      </div>
    </section>
  );
};
