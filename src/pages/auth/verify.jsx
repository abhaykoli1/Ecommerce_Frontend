import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Verify = () => {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const { search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const token = params.get("token");
    if (token) {
      verifyEmail(token);
    }
  }, [search]);

  const verifyEmail = async (token) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8080/api/v1/verify?token=${token}`,
        { withCredentials: true }
      );
      console.log(response.data.role);
      setTimeout(() => {
        console.log(response.data.email);
        const currentTime = Date.now();
        // sessionStorage.setItem("role", response.data.role);
        // sessionStorage.setItem("userEmail", response.data.email);
        sessionStorage.setItem("isLoggedIn", response.data.isLoggedin);
        sessionStorage.setItem("userId", response.data.id);
        sessionStorage.setItem("loginTime", currentTime);
        toast("Welcome to ecommerce");
        setMessage(response.data.message);
        setLoading(false);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }, 1500);
    } catch (err) {
      toast(err.response ? err.response.data.detail : err.message);
      setError(err.response ? err.response.data.detail : err.message);
      setTimeout(() => {
        navigate("/");
      }, [6000]);
      setLoading(false);
    }
  };

  return (
    <div className="items-center flex-col h-[100vh] justify-center flex">
      <h1 className="text-center mb-3">Email Verification</h1>
      {loading && (
        <div className="spinner flex flex-col gap-4  items-center">
          <p className="font-medium text-lg">Verifying your email...</p>
          <div className="loader "></div>
        </div>
      )}
      {message && (
        <p
          style={{ color: "green" }}
          className="text-center font-medium text-lg"
        >
          {message}
        </p>
      )}
      {error && (
        <p className="text-center font-medium text-lg text-red-500">{error}</p>
      )}
    </div>
  );
};

export default Verify;
