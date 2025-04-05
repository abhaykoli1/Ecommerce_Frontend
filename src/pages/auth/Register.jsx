import React, { useState } from "react";
import sideImage from "../../assets/side.webp";
// import { useToast } from "@/hooks/use-toast";
import { toast } from "react-toastify";

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false); // Add loading state
  // const { toast } = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const response = await fetch("http://127.0.0.1:8080/api/v1/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);

        toast(data.message);
        setFormData({ name: "", email: "", password: "", phone: "" });
      } else {
        const errorData = await response.json();
        console.log(errorData);
        toast.error(errorData.detail);
      }
    } catch (error) {
      toast.error(error);
      console.log(error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <section className="bg-white">
      <div className="lg:container mx-auto grid lg:grid-cols-[450px_1fr] grid-cols-1 pt-20 gap-10 lg:px-10 md:px-10 px-5 h-[100vh] items-center">
        <div className="flex items-center w-full justify-center">
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
                  className={`mt-5 focus:border focus:border-white focus:outline ${
                    loading ? "animate-bounce  text-white" : ""
                  }`}
                  disabled={loading} // Disable button while loading
                >
                  {loading ? "Sending Verification Email..." : "Register"}{" "}
                  {/* Show loading text */}
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
