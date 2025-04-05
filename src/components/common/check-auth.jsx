import { fetchUserById } from "@/store/users-slice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ children }) {
  const location = useLocation();
  const { user, loading, error } = useSelector((state) => state.user);
  const userId = sessionStorage.getItem("userId");
  const dispatch = useDispatch();
  useEffect(() => {
    if (userId) {
      dispatch(fetchUserById(userId));
    }
  }, [userId]);

  if (loading)
    return (
      <div className="bg-black h-[100vh] flex justify-center items-center">
        {/* <AnimatedGif src={Ebike} className="h-16 w-16" /> */}
      </div>
    );

  console.log(user?.email);

  const isLoggedIn = sessionStorage.getItem("isLoggedIn");

  const publicPaths = ["/", ""];

  if (!isLoggedIn) {
    if (publicPaths.includes(location.pathname)) {
      return <>{children}</>;
    }

    if (location.pathname.startsWith("/admin")) {
      return <Navigate to="/login" />;
    }
  }

  if (isLoggedIn && location.pathname.startsWith("/login")) {
    return <Navigate to={user?.role === "admin" ? "/admin" : "/"} />;
  }

  if (isLoggedIn && user?.role === "admin") {
    if (location.pathname === "/") {
      return <Navigate to="/admin" />;
    }
  } else if (isLoggedIn && user?.role === "user") {
    if (
      location.pathname === "/login" ||
      location.pathname === "/register" ||
      location.pathname.startsWith("/admin")
    ) {
      return <Navigate to="/" />;
    }
  }

  // if (
  //   isLoggedIn &&
  //   user?.role !== "admin" &&
  //   location.pathname.startsWith("/admin")
  // ) {
  //   return <Navigate to="/unauth-page" />;
  // }
  // if (
  //   isLoggedIn &&
  //   (location.pathname === "/login" ||
  //     location.pathname === "/register" ||
  //     location.pathname === "/verify")
  // ) {
  //   return <Navigate to="/" />;
  // }

  if (!isLoggedIn && publicPaths.includes(location.pathname)) {
    return <>{children}</>;
  }

  return <>{children}</>;
}

export default CheckAuth;
