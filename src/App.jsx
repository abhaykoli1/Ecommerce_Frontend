import React from "react";
import { Route, Routes } from "react-router-dom";
import { ShopLayout } from "./components/shop/layout";
import { LandingPage } from "./pages/Landing";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import CheckAuth from "./components/common/check-auth";
import { ProfileDashboard } from "./components/shop/profile/profileDashboard";
import { ProfileLayout } from "./pages/Profile";
import { UserProfile } from "./components/shop/profile/profile";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <CheckAuth>
            <ShopLayout />
          </CheckAuth>
        }
      >
        <Route path="" element={<LandingPage />} />
        <Route path="/my" element={<ProfileLayout />}>
          <Route path="dashboard" element={<ProfileDashboard />} />
          <Route path="profile" element={<UserProfile />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default App;
